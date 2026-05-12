<?php
$servername = "127.0.0.1";
$username = "teste";
$password = "1234";
$dbname = "testephp";

// Conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checa conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
echo "Conexão bem-sucedida com o MySQL!";

// Fecha conexão
$conn->close();
?>

