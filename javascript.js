// Function to check if element is scrolled into view
function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle slide-in effect on scroll
function handleSlideInEffect() {
    var infoParagraphs = document.getElementsByClassName('infoparagraph');
    for (var i = 0; i < infoParagraphs.length; i++) {
        if (isElementInViewport(infoParagraphs[i])) {
            infoParagraphs[i].style.opacity = '1';
            infoParagraphs[i].style.transform = 'translateY(0)';
        }
    }
}



// Add event listener for scroll event
window.addEventListener('scroll', handleSlideInEffect);
