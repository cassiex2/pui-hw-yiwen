// Hover effect for characters 

const characters = document.querySelectorAll('.home-mickey, .home-daisy, .home-goofy');

characters.forEach(character => {
  character.addEventListener('mouseover', function() {
    const characterClass = this.classList[0]; // Get the first class (e.g., 'home-mickey')
    this.classList.add(`hover-effect-${characterClass.split('-')[1]}`);
  });

  character.addEventListener('mouseout', function() {
    const characterClass = this.classList[0];
    this.classList.remove(`hover-effect-${characterClass.split('-')[1]}`);
  });
});



// Timeline slide-in annimation

document.addEventListener('DOMContentLoaded', (event) => {
  window.addEventListener('scroll', animateTimelineItems);

  function animateTimelineItems() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item) => {
      const content = item.querySelector('.timeline-content');
      const img = item.querySelector('.timeline-img');

      if (content.getBoundingClientRect().top < window.innerHeight) {
        content.style.opacity = 1;
        content.style.transform = 'translateX(0)';
        img.style.opacity = 1; // Fade in the dot
      } else {
        content.style.opacity = 0;
        img.style.opacity = 0; // Keep the dot invisible
        
        if (item.classList.contains('nth-child(even)')) {
          content.style.transform = 'translateX(-500px)';
        } else {
          content.style.transform = 'translateX(500px)';
        }
      }
    });
  }

  animateTimelineItems();
});



// trivia quiz

$(document).ready(function() {

  $('#quiz-start-btn').click();
});


// Mickey quiz
$('#mickey-quiz').quiz({
    
    counterFormat: 'Question %current of %total',
    resultsFormat: "Great job! You got %score out of %total correct!",
    restartButtonText: 'Try Again',
    questions: [
      {
        'q': 'What color shoes does Mickey Mouse traditionally wear?',
        'options': [
          'Red',
          'Blue',
          'Yellow',
          'Black'
        ],
        'correctIndex': 2,
        'correctResponse': 'Absolutely right! You must be a Disney expert!',
        'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Yellow</strong>. '
      },
      {
        'q': 'Mickey made his first appearance in what short film?',
        'options': [
          'Plane Crazy',
          'The Gallopin’ Gaucho',
          'Steamboat Willieter',
          'The Barn Dance'
        ],
        'correctIndex': 0,
        'correctResponse': 'Absolutely right! You must be a Disney expert!',
        'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Plane Crazy</strong>. '
      },
      {
        'q': 'What were Mickey’s first spoken word?',
        'options': [
          'Look Out!',
          'Hot Dogs!',
          'Wanna Dance?',
          'Golly Gee Whilllakers!'
        ],
        'correctIndex': 1,
        'correctResponse': 'Absolutely right! You must be a Disney expert!',
        'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Hot Dogs!</strong>. '
      },
      {
        'q': 'What is the name of Mickey’s sister?',
        'options': [
          'Amelia',
          'Bonnie',
          'Carla',
          'Doreen'
        ],
        'correctIndex': 0,
        'correctResponse': 'Absolutely right! You must be a Disney expert!',
        'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Amelia</strong>. '
      },
      {
        'q': 'In what year did Mickey Mouse make his first comic strip appearance?',
        'options': [
          '1930',
          '1934',
          '1942',
          '1946'
        ],
        'correctIndex': 0,
        'correctResponse': 'Absolutely right! You must be a Disney expert!',
        'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>1930</strong>. '
      }
    ]
  });