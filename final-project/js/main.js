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




// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
// const third = document.querySelector(".third");
// const fourth = document.querySelector(".fourth");
// const fifth = document.querySelector(".fifth");
// const steps = [first, second, third, fourth, fifth];

// function nextStep(currentStep) {
//     steps.forEach(step => step.classList.remove("active"));

//     steps.forEach((step, index) => {
//         if (index <= currentStep) {
//             step.classList.add("active");
//         } else {
//             step.classList.remove("active");
//         }
//     });
// }

// steps.forEach((step, index) => {
//     step.addEventListener("click", () => {
//         nextStep(index);
//     });
// });




// trivia quiz

$('#quiz').quiz({
    
    //resultsScreen: '#results-screen',
    //counter: false,
    //homeButton: '#custom-home',
    counterFormat: 'Question %current of %total',
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
        'correctResponse': 'Great! You got this one right!',
        'incorrectResponse': 'Oops, this is not the correct one.'
      },
      {
        'q': 'Mickey made his first appearance in what short film?',
        'options': [
          'Plane Crazy ',
          'The Gallopin’ Gaucho',
          'Steamboat Willieter',
          'The Barn Dance'
        ],
        'correctIndex': 0,
        'correctResponse': 'Great! You got this one right!',
        'incorrectResponse': 'Oops, this is not the correct one.'
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
        'correctResponse': 'Great! You got this one right!',
        'incorrectResponse': 'Oops, this is not the correct one.'
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
        'correctResponse': 'Great! You got this one right!',
        'incorrectResponse': 'Oops, this is not the correct one.'
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
        'correctResponse': 'Great! You got this one right!',
        'incorrectResponse': 'Oops, this is not the correct one.'
      }
    ]
  });