'use strict'; 

$(document).ready(function() {
    // Arrays to store accordion buttons and corresponding collapse elements
    const accordionButtons = ['#accordion-button-one', '#accordion-button-two'];
    const collapseElements = ['#flush-collapseOne', '#flush-collapseTwo'];

    // Function to toggle accordion state and close the other accordion
    function toggleAccordion(clickedButton, clickedCollapse) {
        accordionButtons.forEach((button, index) => {
            const collapseElement = collapseElements[index];

            if (button === clickedButton) {
                // Toggle the clicked accordion
                $(button).toggleClass('collapsed');
                $(clickedCollapse).toggleClass('show');
            } else {
                // Close the other accordions
                $(button).removeClass('collapsed');
                $(collapseElement).removeClass('show');
            }
        });
    }

    // Attach click event listeners to accordion buttons
    accordionButtons.forEach((button, index) => {
        $(button).click(function() {
            toggleAccordion(button, collapseElements[index]);
        });
    });
});
