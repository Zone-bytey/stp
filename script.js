const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const codeElement = button.parentElement.querySelector('code');
    const textToCopy = codeElement.textContent;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // Optional: Provide visual feedback (e.g., change button text)
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy'; 
        }, 1500); 
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  });
});

// Show or hide the button based on scroll position
window.onscroll = function() {
    var backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
