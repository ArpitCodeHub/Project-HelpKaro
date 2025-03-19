document.addEventListener('DOMContentLoaded', function() {
  async function loadComponent(url, elementId) {  
    const res = await fetch(url);                     // Fetches the content of the URL
    const content = await res.text();                 // Converts the response into text
    document.getElementById(elementId).innerHTML = content;  // Injects the content into the specified element
}

// Load navbar and footer
loadComponent("navbar.html", "navbar");        // Loads the navbar into the element with id="navbar"
loadComponent("footer.html", "footer");


    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        
        question.classList.toggle('active');
        
        const answer = question.nextElementSibling;
       
        answer.classList.toggle('active');
      });
    });
});