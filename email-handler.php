<?php
// Set CORS headers to allow requests from your domain
header("Access-Control-Allow-Origin: https://www.crownedbysilence.com");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get the JSON data from the request body
$data = json_decode(file_get_contents('php://input'), true);

// Validate the data
if (!isset($data['name']) || !isset($data['email']) || !isset($data['subject']) || !isset($data['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

// Email details
$to = "contact@crownedbysilence.com";
$subject = "Contact Form: " . $data['subject'];
$message = "Name: " . $data['name'] . "\n";
$message .= "Email: " . $data['email'] . "\n\n";
$message .= "Message:\n" . $data['message'];
$headers = "From: website@crownedbysilence.com";

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>