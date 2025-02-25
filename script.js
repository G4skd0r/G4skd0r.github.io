document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".next-button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const parentForm = this.closest("form");
            parentForm.querySelector("#step-1").style.display = "none";
            parentForm.querySelector("#step-2").style.display = "block";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");

    if (submitBtn) {
        submitBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Evita el envío del formulario
            window.location.href = "confirmacion.html"; // Redirige a la página de confirmación
        });
    }
});
