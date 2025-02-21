function nextStep(formId) {
    document.querySelector(`#${formId} #step1`).classList.add("hidden");
    document.querySelector(`#${formId} #step2`).classList.remove("hidden");
}
