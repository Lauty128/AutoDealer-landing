<?php
// Configuración de errores
ini_set('display_errors', '0');
error_reporting(E_ALL);

// 1. Cabeceras CORS (deben ir antes que cualquier otra lógica)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// 2. Manejar Preflight (CORS OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    echo json_encode(["status" => "ok"]);
    exit();
}

// 3. Verificar que sea POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido. Solo se acepta POST."]);
    exit();
}

// 4. Cargar PHPMailer (soporta múltiples ubicaciones para evitar error 500)
$phpMailerLoaded = false;
$possiblePaths = [
    __DIR__ . '/PHPMailer/',
    __DIR__ . '/../libs/PHPMailer/',
    __DIR__ . '/../../libs/PHPMailer/',
    __DIR__ . '/libs/PHPMailer/'
];

foreach ($possiblePaths as $basePath) {
    if (file_exists($basePath . 'PHPMailer.php')) {
        require_once $basePath . 'Exception.php';
        require_once $basePath . 'PHPMailer.php';
        require_once $basePath . 'SMTP.php';
        $phpMailerLoaded = true;
        break;
    }
}

if (!$phpMailerLoaded) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Error en el servidor: No se encontró la librería PHPMailer. Verificá subir la carpeta 'PHPMailer' dentro de 'api/'."
    ]);
    exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// 5. Leer y decodificar el cuerpo de la petición (JSON o Form)
$jsonString = file_get_contents("php://input");
$data = json_decode($jsonString);

if (!$data && !empty($_POST)) {
    $data = (object)$_POST;
}

// 6. Validar datos requeridos
if (
    !empty($data->nombre) &&
    !empty($data->email) &&
    !empty($data->mensaje)
) {
    // Sanitización básica
    $nombre        = htmlspecialchars(strip_tags($data->nombre));
    $email         = filter_var($data->email, FILTER_SANITIZE_EMAIL);
    $telefono      = htmlspecialchars(strip_tags($data->telefono ?? ''));
    $concesionario = htmlspecialchars(strip_tags($data->concesionario ?? ''));
    $taller = htmlspecialchars(strip_tags($data->taller ?? ''));
    $origen = htmlspecialchars(strip_tags($data->origen ?? 'Silverii'));
    $tipo_taller = htmlspecialchars(strip_tags($data->tipo_taller ?? ''));
    $asunto = htmlspecialchars(strip_tags($data->asunto ?? 'consulta'));
    $mensaje = htmlspecialchars(strip_tags($data->mensaje));

    $aAsuntos = [
        'dealerpro' => 'DealerPro - ERP Concesionarios',
        'tuconcesionario' => 'tuconcesionario.ar - Catálogo para agencias',
        'dedicado' => 'DealerPro - ERP Concesionarios',
        'catalogo' => 'tuconcesionario.ar - Catálogo para agencias',
        'autoworth' => 'AutoWorth - Cotizador Digital',
        'consulta' => 'Consulta sobre el sistema',
        'contratar' => 'Contratar servicio',
        'especial' => 'Servicio especializado / Desarrollo a medida',
        'general' => 'Consulta general',
        'autofixer_consulta' => 'AutoFixer - Consulta sobre el sistema para taller',
        'autofixer_demo' => 'AutoFixer - Solicitud de Demo para taller',
        'autofixer_contratar' => 'AutoFixer - Contratación del sistema'
    ];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "El formato del correo electrónico es inválido."]);
        exit();
    }

    // 6. Configurar el envío del correo
    $destinatario = "administracion@silverii.com.ar"; // ACÁ PONÉS EL CORREO DONDE QUERÉS RECIBIR LOS MENSAJES
    $asunto_texto = isset($aAsuntos[$asunto]) ? $aAsuntos[$asunto] : $asunto;
    $asunto_email = "Nuevo contacto [{$origen}]: {$asunto_texto}";

    $cuerpo  = "Has recibido un nuevo mensaje desde el sitio web ({$origen}):\n\n";
    $cuerpo .= "Nombre: {$nombre}\n";
    $cuerpo .= "Email: {$email}\n";
    $cuerpo .= "Teléfono: {$telefono}\n";
    if (!empty($taller)) {
        $cuerpo .= "Taller / Negocio: {$taller}\n";
    }
    if (!empty($tipo_taller)) {
        $cuerpo .= "Tipo de Taller / Especialidad: {$tipo_taller}\n";
    }
    if (!empty($concesionario)) {
        $cuerpo .= "Concesionario: {$concesionario}\n";
    }
    $cuerpo .= "Motivo: {$asunto_texto}\n";
    $cuerpo .= "Mensaje:\n{$mensaje}\n";

    $mail = new PHPMailer(true);

    try {
        // --- CONFIGURACIÓN DEL SERVIDOR SMTP ---
        // Cambiá a true si querés usar un servidor SMTP externo (ej: Gmail, Outlook, Hostinger)
        $usar_smtp = true;

        if ($usar_smtp) {
            $mail->isSMTP();
            $mail->Host       = 'smtp.hostinger.com';             // Servidor SMTP
            $mail->SMTPAuth   = true;                             // Habilitar autenticación SMTP
            $mail->Username   = 'administracion@silverii.com.ar';         // Usuario SMTP (tu correo)
            $mail->Password   = 't!J*5XY_zQbyzW#';                  // Contraseña SMTP
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;   // Habilitar encriptación SSL/465
            $mail->Port       = 465;                              // Puerto TCP para conectar (587 para TLS, 465 para SSL)
        } else {
            // Usar la función mail() nativa de tu servidor, pero a través de PHPMailer
            $mail->isMail();
        }

        // Codificación de caracteres
        $mail->CharSet = 'UTF-8';

        // --- DESTINATARIOS Y REMITENTE ---
        $mail->setFrom('administracion@silverii.com.ar', 'Silverii - Gestión Automotriz');
        $mail->addAddress($destinatario);                         // Correo receptor
        $mail->addReplyTo($email, $nombre);                       // Responder al remitente de la consulta

        $mail->isHTML(false);
        $mail->Subject = $asunto_email;
        $mail->Body    = $cuerpo;

        $mail->send();

        http_response_code(200);
        echo json_encode([
            "success" => true,
            "message" => "¡Gracias {$nombre}! Tu mensaje fue enviado correctamente. Nos pondremos en contacto pronto."
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "success" => false,
            "message" => "Error al enviar el correo. Por favor, intenta nuevamente o contáctanos por WhatsApp.",
            "error"   => $mail->ErrorInfo
        ]);
    }

} else {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Por favor, completá todos los campos obligatorios (Nombre, Email y Mensaje)."
    ]);
}
