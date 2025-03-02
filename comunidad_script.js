window.onload = function () {
  // Por defecto, #entrepares
  cambiarComunidad("entrepares");
};

window.cambiarComunidad = function (view) {
  const leftCol = document.getElementById("left-col-comunidad");
  const middleCol = document.getElementById("middle-col-comunidad");
  const rightCol = document.getElementById("right-col-comunidad");

  // Actualiza el índice de la izquierda
  const items = leftCol.querySelectorAll(".class-item");
  items.forEach(item => item.classList.remove("active-item"));

  const clickedItem = [...items].find(el => el.innerText.includes(view));
  if (clickedItem) clickedItem.classList.add("active-item");

  // Fade out
  middleCol.classList.remove("fade-in");
  middleCol.classList.add("fade-out");
  rightCol.classList.remove("fade-in");
  rightCol.classList.add("fade-out");

  setTimeout(() => {
    // Limpia
    middleCol.innerHTML = "";
    rightCol.innerHTML = "";

    if (view === "entrepares") {
      // Columna central
      middleCol.innerHTML = `
        <div class="back-button-container">
          <button class="back-button" onclick="window.location.href='mi_campus.html'">Volver</button>
        </div>
        <h2 class="comunidad-title">Tu #entrepares</h2>
        <div class="comunidad-cuadros">
          ${generarCuadrosEntrePares()}
        </div>
      `;
      // Columna derecha => botón + foro
      rightCol.innerHTML = `
        <button class="right-btn">Acceso a reunión #entrepares</button>
        <div class="foro-comunidad recuadro-chat">
          <h4>Chat con tus pares</h4>
          ${generarForoComunidad()}
        </div>
      `;
      configurarForoComunidad();

    } else if (view === "1a1") {
      // view === '1a1'
      // Columna central => recuadro con coach + recuadro de objetivos
      middleCol.innerHTML = `
        <div class="back-button-container">
          <button class="back-button" onclick="window.location.href='mi_campus.html'">Volver</button>
        </div>
        <div class="coach-box">
          <div class="color-box-coach"></div>
          <p>@CoachPro</p>
        </div>
        <div class="objetivos-recuadro">
          <h3>Próximos objetivos</h3>
          <ul class="todo-list">
            <li><input type="checkbox" /> Objetivo 1</li>
            <li><input type="checkbox" /> Objetivo 2</li>
            <li><input type="checkbox" /> Objetivo 3</li>
          </ul>
        </div>
      `;
      // Columna derecha => botón + foro
      rightCol.innerHTML = `
        <button class="right-btn">Acceso a reunión #1a1</button>
        <div class="foro-comunidad recuadro-chat">
          <h4>Chat con tu coach</h4>
          ${generarForoComunidad()}
        </div>
      `;
      configurarForoComunidad();

    } else if (view === "conversaciones") {
    // Conversaciones: Ricardo Darín
    middleCol.innerHTML = `
        <div class="back-button-container">
            <button class="back-button" onclick="window.location.href='mi_campus.html'">Volver</button>
        </div>
        <h2 class="comunidad-title">Ricardo Darín</h2>
        <div class="recuadro-imagen"></div>
    `;
    rightCol.innerHTML = `
        <button class="right-btn">Acceso a la conversación</button>
        <div class="foro-comunidad recuadro-chat">
            <p>Este mes vamos a tener una conversación exclusiva con Ricardo Darín. Vamos a charlar sobre la importancia de la constancia. Sabías que antes de llegar a tener éxito en su carrera, lo rechazaron en 125 castings? Qué fue lo que hizo que perseverara? Cómo continuó a pesar de la frustración? Todo eso y mucho más en #conversacionesconRicardo.</p>
        </div>
    `;
}


    // Fade in
    middleCol.classList.remove("fade-out");
    middleCol.classList.add("fade-in");
    rightCol.classList.remove("fade-out");
    rightCol.classList.add("fade-in");
  }, 300);
};

function generarCuadrosEntrePares() {
  const usuarios = [
    { color: "#F44336", user: "@CarlosPy" },
    { color: "#2196F3", user: "@AnnaAr" },
    { color: "#FF9800", user: "@DeepakIn" },
    { color: "#FFEB3B", user: "@SakuraJp" },
    { color: "#4CAF50", user: "@AminaEg" },
    { color: "#9C27B0", user: "@LucaIt" },
  ];
  let html = "";
  usuarios.forEach((item) => {
    html += `
      <div class="cuadro-entrepares">
        <div class="color-box" style="background-color:${item.color}"></div>
        <p>${item.user}</p>
      </div>
    `;
  });
  return html;
}

/* 
  Foro sin “@Sistema: Bienvenido”.
  Reutiliza un input y un “Enviar” que agregan un comentario al foro.
*/
function generarForoComunidad() {
  return `
    <div class="foro-feed">
      <input type="text" class="foro-input" placeholder="Escribe un mensaje..." />
      <button class="foro-button enviar-mensaje">Enviar</button>
      <div class="foro-posts"></div>
    </div>
  `;
}

/* 
  Al presionar enviar, se crea un nuevo “foro-comment”
*/
function configurarForoComunidad() {
  const container = document.querySelector(".foro-comunidad");
  if (!container) return;

  const input = container.querySelector(".foro-input");
  const boton = container.querySelector(".enviar-mensaje");
  const posts = container.querySelector(".foro-posts");

  boton.addEventListener("click", () => {
    const valor = input.value.trim();
    if (!valor) return;
    const newPost = document.createElement("div");
    newPost.classList.add("foro-comment");
    newPost.innerHTML = `
      <strong>@Usuario:</strong> ${valor}
      <div class="foro-actions"></div>
    `;
    posts.appendChild(newPost);
    input.value = "";
  });
}
