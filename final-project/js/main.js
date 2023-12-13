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



// progress bar
var progressBar = {
  Bar : $('#progress-bar'),
  Reset : function(){
    if (this.Bar){
      this.Bar.find('li').removeClass('active'); 
    }
  },
  Next: function(){
    $('#progress-bar li:not(.active):first').addClass('active');
  },
  Back: function(){
    $('#progress-bar li.active:last').removeClass('active');
  }
}

progressBar.Reset();

$("#Next").on('click', function(){
  progressBar.Next();
})
$("#Back").on('click', function(){
  progressBar.Back();
})
$("#Reset").on('click', function(){
  progressBar.Reset();
})



// trivia quiz

$(document).ready(function() {

  let currentQuestion = 1;
  const totalQuestions = $('#progress-bar li').length;

  function updateProgressBar() {
    $('#progress-bar li:nth-child(-n+' + currentQuestion + ')').addClass('active');
  }
  
  function resetProgressBar() {
    $('#progress-bar li').removeClass('active');
    $('#progress-bar li:first-child').addClass('active');
  }


  $(document).on('click', '#quiz-next-btn', function() {
    
    currentQuestion++;
    
    if (currentQuestion <= totalQuestions) {
      updateProgressBar();
    }
  });

  $(document).on('click', '#quiz-restart-btn', function() {
    currentQuestion = 1;
    resetProgressBar();
  });

  // Start the quiz
  $('#quiz-start-btn').click(function() {
    updateProgressBar();
  });

  // Display the quiz directly on screen
  $('#quiz-start-btn').click();
});



// Mickey quiz
$('#mickey-quiz').quiz({
    
    counterFormat: '',
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


// Daisy quiz
$('#daisy-quiz').quiz({
    
  counterFormat: 'Question %current of %total',
  resultsFormat: "Great job! You got %score out of %total correct!",
  restartButtonText: 'Try Again',
  questions: [
    {
      'q': 'Which name was Daisy Duck originally known by, in her first cartoon with Donald Duck?',
      'options': [
        'Dolores Duck',
        'Dorothy Duck',
        'Donna Duck',
        'Dolly Duck'
      ],
      'correctIndex': 2,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Donna Duck</strong>. '
    },
    {
      'q': 'In the Disney comics, what is the name of the town Daisy lives in?',
      'options': [
        'Duckburg',
        'Duck City',
        'Duckville',
        'Duck Town'
      ],
      'correctIndex': 0,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Duckburg</strong>. '
    },
    {
      'q': 'Donald Duck has been known to fight crime as what costumed superhero?',
      'options': [
        'Super Duck',
        'Darkwing Duck',
        'The Red Bat',
        'Spider Duck'
      ],
      'correctIndex': 0,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Super Duck</strong>. '
    },
    {
      'q': 'When did Daisy Duck make her first appearance in a Disney cartoon?',
      'options': [
        '1937',
        '1940',
        '1934',
        '1945'
      ],
      'correctIndex': 2,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>1934  (Daisy Duck made her debut in the cartoon "Don Donald")</strong>. '
    },
    {
      'q': 'Who is Daisy Duck’s best friend?',
      'options': [
        'Minnie Mouse',
        'Clarabelle Cow',
        'Goofy',
        'Donald Duck'
      ],
      'correctIndex': 1,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Clarabelle Cow</strong>. '
    }
  ]
});


// Goofy quiz
$('#goofy-quiz').quiz({
    
  counterFormat: 'Question %current of %total',
  resultsFormat: "Great job! You got %score out of %total correct!",
  restartButtonText: 'Try Again',
  questions: [
    {
      'q': 'In what year and in which cartoon did Goofy make his first appearance?',
      'options': [
        '1932, "Mickey’s Revue"',
        '1934, "The Wise Little Hen"',
        '1928, "Steamboat Willie"',
        '1930, "The Chain Gang"'
      ],
      'correctIndex': 0,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>1932, "Mickey’s Revue"</strong>. '
    },
    {
      'q': 'What was Goofy’s original name when he first appeared in Disney cartoons?',
      'options': [
        'Dippy Dawg',
        'Clumsy Canine',
        'Goofy Goof',
        'Silly Dog'
      ],
      'correctIndex': 0,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Dippy Dawg</strong>. '
    },
    {
      'q': 'Who was the original voice actor for Goofy?',
      'options': [
        'Walt Disney',
        'Pinto Colvig',
        'Clarence Nash',
        'Jim Cummings'
      ],
      'correctIndex': 1,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Pinto Colvig</strong>. '
    },
    {
      'q': 'In the 1995 movie ’A Goofy Movie,’ what is the name of Goofy’s son?',
      'options': [
        'Max',
        'George',
        'Pete',
        'Bobby'
      ],
      'correctIndex': 0,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Max</strong>. '
    },
    {
      'q': 'Unlike most Disney characters, Goofy is often shown doing what unusual activity for an anthropomorphic animal character?',
      'options': [
        'Driving a car',
        'Cooking meals',
        'Playing golf',
        'Working a job'
      ],
      'correctIndex': 3,
      'correctResponse': 'Absolutely right! You must be a Disney expert!',
      'incorrectResponse': 'Aww, that’s not it. But don’t worry, everyone learns! The correct answer is <strong>Working a job</strong>. '
    }
  ]
});