document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        
        question.classList.toggle('active');
        
        const answer = question.nextElementSibling;
       
        answer.classList.toggle('active');
      });
    });
});