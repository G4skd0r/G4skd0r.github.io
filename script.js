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
