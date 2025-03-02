window.onload = function () {
  // Iniciar directamente en "Estrategia"
  handleSectionSelect("estrategia");
};

// Lista completa de secciones y clases
const allSections = [
  { id: "equipos", title: "*Gestión de Equipos*" },
  { id: "equipos-clase1", title: "Clase 1" },
  { id: "equipos-clase2", title: "Clase 2" },
  { id: "estrategia", title: "*Estrategia*" },
  { id: "estrategia-clase1", title: "Clase 1" },
  { id: "estrategia-clase2", title: "Clase 2" },
  { id: "comunicacion", title: "*Comunicación*" },
  { id: "comunicacion-clase1", title: "Clase 1" },
  { id: "comunicacion-clase2", title: "Clase 2" },
  { id: "proyectos", title: "*Gestión de Proyectos*" },
  { id: "proyectos-clase1", title: "Clase 1" },
  { id: "proyectos-clase2", title: "Clase 2" },
  { id: "estres", title: "*Gestión del Estrés*" },
  { id: "estres-clase1", title: "Clase 1" },
  { id: "estres-clase2", title: "Clase 2" },
  { id: "meditacion", title: "*Meditación*" },
  { id: "meditacion-clase1", title: "Clase 1" },
  { id: "meditacion-clase2", title: "Clase 2" },
  { id: "cuerpo", title: "*Conexión con el Cuerpo*" },
  { id: "cuerpo-clase1", title: "Clase 1" },
  { id: "cuerpo-clase2", title: "Clase 2" },
  { id: "nutricion", title: "*Nutrición*" },
  { id: "nutricion-clase1", title: "Clase 1" },
  { id: "nutricion-clase2", title: "Clase 2" }    
];

// Comentario de ejemplo para cada sección principal
const commentsBySection = {
  equipos: "Me encantó este primer módulo. @profe ¿cómo hago para identificar talento en un equipo?",
  estrategia: "Súper interesante la estrategia que planteamos. @profe, ¿cómo adaptarnos a cambios inesperados?",
  comunicacion: "Increíble módulo. @profe, ¿cómo mejorar la comunicación en equipos remotos?",
};

// Referencias a las columnas
const leftColumn = document.querySelector(".left-column");
const middleColumn = document.querySelector(".middle-column");
const rightColumn = document.querySelector(".right-column");

// Renderiza la columna izquierda con todas las secciones y clases
function renderLeftColumn(activeSection) {
  let html = `<ul class="class-list">`;
  allSections.forEach(item => {
    const cleanTitle = item.title.replace(/\*(.*?)\*/g, "<strong>$1</strong>");
    const isActive = item.id === activeSection ? "active-item" : "";
    html += `
      <li class="class-item ${isActive}" data-id="${item.id}">
        ${cleanTitle}
      </li>
    `;
  });
  html += `</ul>`;
  leftColumn.innerHTML = html;
  setupLeftColumnClicks();
}

// Configura clic en cada ítem del índice
function setupLeftColumnClicks() {
  const items = document.querySelectorAll(".class-item");
  items.forEach(item => {
    item.addEventListener("click", e => {
      const itemId = e.target.getAttribute("data-id");
      handleSectionSelect(itemId);
    });
  });
}

// Función para cambiar de contenido
window.cambiarContenido = function (sectionId) {
  handleSectionSelect(sectionId);
};

function handleSectionSelect(sectionId) {
  let mainSection = "";
  if (sectionId.startsWith("equipos")) mainSection = "equipos";
  if (sectionId.startsWith("estrategia")) mainSection = "estrategia";
  if (sectionId.startsWith("comunicacion")) mainSection = "comunicacion";

  renderLeftColumn(sectionId);

  const forumHtmlTop = `
    <div class="back-button-container">
      <button class="back-button" onclick="location.href='mi_campus.html'">Volver</button>
    </div>
  `;

  const foroComment = commentsBySection[mainSection] || "¡Bienvenido a esta clase!";
  const forumHtml = `
    <div class="forum-feed">
      <input type="text" placeholder="¿Tienes alguna pregunta o comentario?" class="forum-input">
      <button class="forum-button">Comentar</button>

      <div class="forum-posts">
        <div class="forum-comment">
          <strong>@Gaston:</strong> ${foroComment}
          <div class="forum-actions">
            <button class="like-button">Me gusta</button>
            <button class="same-doubt-button">Tengo la misma duda</button>
            <button class="reply-button">Responder</button>
          </div>
        </div>
      </div>
    </div>
  `;

  middleColumn.innerHTML = forumHtmlTop + forumHtml;

  rightColumn.innerHTML = `
    <button class="right-btn">Ver clase grabada</button>
    <button class="right-btn">Resumen con IA</button>
    <button class="right-btn">Conoce al profe</button>
  `;

  document.querySelector(".forum-button").addEventListener("click", () => {
    document.querySelector(".forum-input").value = "";
  });

  document.querySelector(".like-button").addEventListener("click", function () {
    this.classList.toggle("active");
  });
  document.querySelector(".same-doubt-button").addEventListener("click", function () {
    this.classList.toggle("active");
  });

  document.querySelector(".reply-button").addEventListener("click", function () {
    const existingReplyBox = document.querySelector(".reply-box");
    if (existingReplyBox) {
      existingReplyBox.remove();
    } else {
      const replyBox = document.createElement("div");
      replyBox.classList.add("reply-box");
      replyBox.innerHTML = `
        <input type="text" class="reply-input" placeholder="Escribe tu respuesta...">
        <button class="send-reply">Enviar</button>
      `;
      document.querySelector(".forum-feed").appendChild(replyBox);
      document.querySelector(".send-reply").addEventListener("click", function () {
        document.querySelector(".reply-input").value = "";
        replyBox.remove();
      });
    }
  });
}
