document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const errorMessage = document.getElementById('error-message');
  const usernameInput = document.getElementById('name-input');
  const passwordInput = document.getElementById('password-input');
  const togglePassword = document.getElementById('toggle-password');

  // Zulässige Kombinationen aus Benutzername + Passwort
  const logins = [
    { username: 'Zensiert', password: 'Zensiert', redirectUrl: '../Zensiert/zensiert.html' },
    { username: 'Kristian Maras', password: 'UBS AG-Bewerbung-Kristian', redirectUrl: '../UBS AG I Glattbrug/ubs.html' },
    { username: 'Kristian Maras', password: 'Test', redirectUrl: '../Kristian I Persönlich/kristian.html' },
  ];

  // Formular abschicken
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Fehleranzeige zurücksetzen
    usernameInput.parentElement.classList.remove('incorrect');
    passwordInput.parentElement.classList.remove('incorrect');
    errorMessage.textContent = '';

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const usernameEmpty = username === '';
    const passwordEmpty = password === '';

    // Pflichtfeldprüfung
    if (usernameEmpty && passwordEmpty) {
      usernameInput.parentElement.classList.add('incorrect');
      passwordInput.parentElement.classList.add('incorrect');
      errorMessage.textContent = 'Benutzername und Passwort sind verpflichtend.';
      return;
    }

    if (usernameEmpty) {
      usernameInput.parentElement.classList.add('incorrect');
      errorMessage.textContent = 'Benutzername ist verpflichtend.';
      return;
    }

    if (passwordEmpty) {
      passwordInput.parentElement.classList.add('incorrect');
      errorMessage.textContent = 'Passwort ist verpflichtend.';
      return;
    }

    // Login prüfen
    const match = logins.find(login =>
      login.username === username && login.password === password
    );

    if (match) {
      window.location.href = match.redirectUrl;
      return;
    }

    // Fehlermeldung bei ungültiger Kombination
    usernameInput.parentElement.classList.add('incorrect');
    passwordInput.parentElement.classList.add('incorrect');
    errorMessage.textContent = 'Benutzername oder Passwort ist falsch.';
  });

  // Fehleranzeige bei Eingabe zurücksetzen
  usernameInput.addEventListener('input', () => {
    usernameInput.parentElement.classList.remove('incorrect');
    errorMessage.textContent = '';
  });

  passwordInput.addEventListener('input', () => {
    passwordInput.parentElement.classList.remove('incorrect');
    errorMessage.textContent = '';
  });

  // Passwort-Sichtbarkeit umschalten
  togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.textContent = 'visibility';
    } else {
      passwordInput.type = 'password';
      togglePassword.textContent = 'visibility_off';
    }
  });
});
