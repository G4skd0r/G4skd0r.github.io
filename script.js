function nextStep(formId) {
    document.querySelector(`#${formId} #step-1`).style.display = "none";
    document.querySelector(`#${formId} #step-2`).style.display = "block";
}
