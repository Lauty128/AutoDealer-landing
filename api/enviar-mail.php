<?php
// Importar clases de PHPMailer al espacio de nombres global
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Cargar archivos de PHPMailer manualmente
require __DIR__ . '/../libs/PHPMailer/Exception.php';
require __DIR__ . '/../libs/PHPMailer/PHPMailer.php';
require __DIR__ . '/../libs/PHPMailer/SMTP.php';

// 1. Configurar las cabeceras (Headers) para permitir peticiones
header("Access-Control-Allow-Origin: *"); // En producción, cambiá el '*' por 'https://tudominio.com'
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// 2. Manejar la petición Preflight (CORS) que hacen los navegadores con fetch
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// 3. Verificar que la petición sea POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido. Solo se acepta POST."]);
    exit();
}

// 4. Leer y decodificar el cuerpo de la petición (JSON)
$jsonString = file_get_contents("php://input");
$data = json_decode($jsonString);

// 5. Validar que se hayan recibido los datos básicos requeridos
if (
    !empty($data->nombre) &&
    !empty($data->email) &&
    !empty($data->mensaje)
) {
    // Sanitizar las entradas para evitar inyecciones XSS
    $nombre = htmlspecialchars(strip_tags($data->nombre));
    $email = filter_var($data->email, FILTER_SANITIZE_EMAIL);
    $telefono = htmlspecialchars(strip_tags($data->telefono ?? ''));
    $concesionario = htmlspecialchars(strip_tags($data->concesionario ?? ''));
    $asunto = htmlspecialchars(strip_tags($data->asunto ?? 'consulta'));
    $mensaje = htmlspecialchars(strip_tags($data->mensaje));

    $aAsuntos = [
        'consulta' => 'Consulta sobre el sistema',
        'contratar' => 'Contratar servicio',
        'especial' => 'Servicio especializado',
        'general' => 'Consulta general'
    ];

    // Validar el formato del correo
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["success" => false, "message" => "El formato del correo electrónico es inválido."]);
        exit();
    }

    // 6. Configurar el envío del correo
    $destinatario = "administracion@autodealer.com.ar"; // ACÁ PONÉS EL CORREO DONDE QUERÉS RECIBIR LOS MENSAJES
    $asunto_email = "Nuevo contacto web: " . ((isset($aAsuntos[$asunto])) ? $aAsuntos[$asunto] : 'Otro');

    // Armar el cuerpo del mensaje
    $cuerpo = "Has recibido un nuevo mensaje desde el formulario web:\n\n";
    $cuerpo .= "Nombre: {$nombre}\n";
    $cuerpo .= "Email: {$email}\n";
    $cuerpo .= "Teléfono: {$telefono}\n";
    $cuerpo .= "Concesionario: {$concesionario}\n";
    $cuerpo .= "Asunto: {$asunto}\n";
    $cuerpo .= "Mensaje:\n{$mensaje}\n";

    // 7. Enviar con PHPMailer
    $mail = new PHPMailer(true);

    try {
        // --- CONFIGURACIÓN DEL SERVIDOR SMTP ---
        // Cambiá a true si querés usar un servidor SMTP externo (ej: Gmail, Outlook, Hostinger)
        $usar_smtp = false;

        if ($usar_smtp) {
            $mail->isSMTP();
            $mail->Host       = 'smtp.hostinger.com';             // Servidor SMTP
            $mail->SMTPAuth   = true;                             // Habilitar autenticación SMTP
            $mail->Username   = 'administracion@autodealer.com.ar';         // Usuario SMTP (tu correo)
            $mail->Password   = '~A&eUfY0z';                  // Contraseña SMTP
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   // Habilitar encriptación TLS (o ENCRYPTION_SMTPS para SSL/465)
            $mail->Port       = 465;                              // Puerto TCP para conectar (587 para TLS, 465 para SSL)
        } else {
            // Usar la función mail() nativa de tu servidor, pero a través de PHPMailer
            $mail->isMail();
        }

        // Codificación de caracteres
        $mail->CharSet = 'UTF-8';

        // --- DESTINATARIOS Y REMITENTE ---
        $mail->setFrom('administracion@autodealer.com.ar', 'AutoDealer Web');
        $mail->addAddress($destinatario);                         // Correo receptor
        $mail->addReplyTo($email, $nombre);                       // Responder al remitente de la consulta

        // --- CONTENIDO ---
        $mail->isHTML(false);                                     // Texto plano (cambiá a true si querés usar HTML)
        $mail->Subject = $asunto_email;
        $mail->Body    = $cuerpo;

        // Enviar
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
            "message" => "Error al enviar el correo. Por favor, intenta de nuevo más tarde.",
            "error" => $mail->ErrorInfo // Podés quitar/comentar esto en producción
        ]);
    }

} else {
    // Si faltan campos requeridos
    http_response_code(400);
    echo json_encode([
        "success" => false, 
        "message" => "Por favor, completá todos los campos obligatorios (Nombre, Email y Mensaje)."
    ]);
}
?>