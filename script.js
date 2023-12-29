function toggleAnswer(id) {
    // Hide all answers
    var answers = document.querySelectorAll('.answer');
    answers.forEach(function(answer) {
      answer.style.display = 'none';
    });

    // Show the clicked answer
    var clickedAnswer = document.getElementById(id);
    clickedAnswer.style.display = (clickedAnswer.style.display === 'none' || clickedAnswer.style.display === '') ? 'block' : 'none';
  }

  $(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
  });