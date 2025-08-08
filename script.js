// Selecciona el contenedor donde se mostrará el contenido
const content = document.getElementById("content");

// Selecciona todos los enlaces del menú
const links = document.querySelectorAll(".nav-link");

// Función para cargar una sección
function loadSection(section) {
  // Oculta el contenido actual
  content.style.opacity = 0;

  // Carga el archivo HTML correspondiente
  fetch(section + ".html")
    .then(res => res.text())
    .then(html => {
      // Espera un poco para el efecto visual
      setTimeout(() => {
        content.innerHTML = html;
        content.style.opacity = 1;
      }, 300);
    })
    .catch(() => {
      // Si hay error, muestra un mensaje
      content.innerHTML = "<p>Error al cargar la sección.</p>";
      content.style.opacity = 1;
    });
}

// Añade el evento a cada enlace
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    // Marca el enlace activo
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    // Carga la sección correspondiente
    loadSection(link.dataset.section);
  });
});

// Carga inicial
loadSection("perfil");