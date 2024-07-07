
const menuToggle = document.querySelector('[data-nav-toggler]');
const navbar = document.querySelector('.navbar');
  
menuToggle.addEventListener('click', function () {
  navbar.classList.toggle('active');
});
 

// Get the header element
const header = document.getElementByClass('header'); // Replace 'myHeader' with your header id or class

// Function to handle scroll event
function handleScroll() {
    const scrollPosition = window.scrollY;

    // Change header styles based on scroll position
    if (scrollPosition > 100) { // Adjust 100 to your desired scroll position
        header.style.backgroundColor = '#ffffff'; // New background color
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // New box shadow
    } 
}

// Event listener to call the handleScroll function on scroll
window.addEventListener('scroll', handleScroll);
