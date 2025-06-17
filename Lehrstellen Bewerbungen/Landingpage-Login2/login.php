<?php
// Alle Benutzerdaten (am besten später aus Datenbank laden)
$accounts = [
  "Zensiert" => [
    "password" => "Zensiert",
    "redirect" => "dashboard_zensiert.html"
  ],
  "Kristian Maras" => [
    "password" => "UBS AG-Bewerbung-Kristian",
    "redirect" => "dashboard_ubs.html"
  ],
  "KM" => [
    "password" => "Test",
    "redirect" => "dashboard_kristian.html"
  ]
];

// Daten aus POST
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Login prüfen
if (isset($accounts[$username]) && $accounts[$username]['password'] === $password) {
  header("Location: " . $accounts[$username]['redirect']);
  exit;
}

// Zurück zum Formular mit Fehlermeldung
header("Location: index.html?error=1");
exit;
?>
