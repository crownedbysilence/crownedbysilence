<?php
// Set CORS headers to allow requests from your domain
header("Access-Control-Allow-Origin: https://www.crownedbysilence.com");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== '