function highlight() {
    // Select all bold elements
    let boldElements = document.querySelectorAll('strong');
    
    // Change color to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

function return_normal() {
    // Select all bold elements
    let boldElements = document.querySelectorAll('strong');
    
    // Change color back to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}
