<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configuration
    $to_email = "duhaillier.sebastien@free.fr";
    $subject_prefix = "[Portfolio Contact] ";
    
    // Récupération et nettoyage des données
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $subject = trim($_POST['subject'] ?? '');
    $message = trim($_POST['message'] ?? '');
    
    // Validation basique
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Tous les champs sont requis.']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Adresse email invalide.']);
        exit;
    }
    
    // Protection contre le spam
    $headers = [
        'From: ' . $name . ' <' . $email . '>',
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: Portfolio Contact Form'
    ];
    
    $full_subject = $subject_prefix . $subject;
    
    $full_message = "Nouveau message depuis votre portfolio:\n\n";
    $full_message .= "Nom: " . $name . "\n";
    $full_message .= "Email: " . $email . "\n";
    $full_message .= "Sujet: " . $subject . "\n\n";
    $full_message .= "Message:\n" . $message . "\n\n";
    $full_message .= "---\n";
    $full_message .= "IP: " . $_SERVER['REMOTE_ADDR'] . "\n";
    $full_message .= "User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "\n";
    $full_message .= "Date: " . date('Y-m-d H:i:s');
    
    // Tentative d'envoi
    $success = mail($to_email, $full_subject, $full_message, implode("\r\n", $headers));
    
    if ($success) {
        echo json_encode([
            'success' => true, 
            'message' => 'Message envoyé avec succès ! Je vous répondrai bientôt.'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false, 
            'message' => 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement.'
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
}
?>
