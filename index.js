const crossIcon = document.querySelector('.cross-icon')
const accordionContent = document.querySelector('.dropdown-container__full-text')
const handleAccordion = () => crossIcon.classList.toggle('cross-icon-selected')

crossIcon.addEventListener('click', handleAccordion)
