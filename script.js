function nextStep(current) {
    const next = current + 1;
    const currentElem = document.getElementById(`ios-step-${current}`);
    const nextElem = document.getElementById(`ios-step-${next}`);
    
    if (nextElem) {
        currentElem.classList.remove('active');
        nextElem.classList.add('active');
    }
}

function prevStep(current) {
    const prev = current - 1;
    const currentElem = document.getElementById(`ios-step-${current}`);
    const prevElem = document.getElementById(`ios-step-${prev}`);
    
    if (prevElem) {
        currentElem.classList.remove('active');
        prevElem.classList.add('active');
    }
}
