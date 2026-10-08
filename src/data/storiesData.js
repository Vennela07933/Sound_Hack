/**
 * Sound Hack - 10 Stories & Quizzes Dataset
 */

export const STORIES_DATA = [
  {
    id: 1,
    title: "Payment Module Delay",
    category: "Software Team",
    icon: "💻",
    description: "Rahul's software team working on an e-commerce payment module.",
    speechText: "Rahul joined a software company in June. His team was developing an e-commerce application. Rahul was responsible for the payment module. The team expected to complete the module in four weeks, but a technical issue delayed the work, and it took six weeks to complete.",
    audioUrl: "/audio/story1.mp3",
    questions: [
      {
        id: 1,
        question: "When did Rahul join the company?",
        options: [
          { key: 'A', text: 'May' },
          { key: 'B', text: 'June' },
          { key: 'C', text: 'July' },
          { key: 'D', text: 'August' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "Which module was Rahul responsible for?",
        options: [
          { key: 'A', text: 'Login module' },
          { key: 'B', text: 'Payment module' },
          { key: 'C', text: 'Database module' },
          { key: 'D', text: 'UI module' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 3,
        question: "How long did the payment module take to complete?",
        options: [
          { key: 'A', text: 'Two weeks' },
          { key: 'B', text: 'Four weeks' },
          { key: 'C', text: 'Six weeks' },
          { key: 'D', text: 'Eight weeks' }
        ],
        correctAnswer: 'C'
      }
    ]
  },
  {
    id: 2,
    title: "Flight Announcement",
    category: "Travel",
    icon: "✈️",
    description: "Airport announcement regarding Flight 402 departure changes.",
    speechText: "Attention passengers on Flight 402 to Tokyo. The flight originally scheduled for 3:15 PM from Gate B12 has been delayed due to maintenance. The new departure time is 4:45 PM, and boarding will now take place at Gate C5.",
    audioUrl: "/audio/story2.mp3",
    questions: [
      {
        id: 1,
        question: "What is the destination of Flight 402?",
        options: [
          { key: 'A', text: 'Seoul' },
          { key: 'B', text: 'Tokyo' },
          { key: 'C', text: 'London' },
          { key: 'D', text: 'Singapore' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "What was the original departure time?",
        options: [
          { key: 'A', text: '3:15 PM' },
          { key: 'B', text: '3:45 PM' },
          { key: 'C', text: '4:15 PM' },
          { key: 'D', text: '4:45 PM' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 3,
        question: "Which new gate will boarding take place at?",
        options: [
          { key: 'A', text: 'Gate B12' },
          { key: 'B', text: 'Gate B5' },
          { key: 'C', text: 'Gate C5' },
          { key: 'D', text: 'Gate C12' }
        ],
        correctAnswer: 'C'
      }
    ]
  },
  {
    id: 3,
    title: "Coffee Shop Order",
    category: "Daily Life",
    icon: "☕",
    description: "Sarah ordering customized morning coffee at the cafe.",
    speechText: "Sarah arrived at the cafe at 8 AM. She ordered an iced caramel latte with oat milk and two extra shots of espresso. The barista charged her 7 dollars, and Sarah paid using her digital wallet.",
    audioUrl: "/audio/story3.mp3",
    questions: [
      {
        id: 1,
        question: "What time did Sarah arrive at the cafe?",
        options: [
          { key: 'A', text: '7:30 AM' },
          { key: 'B', text: '8:00 AM' },
          { key: 'C', text: '8:30 AM' },
          { key: 'D', text: '9:00 AM' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "Which type of milk did Sarah specify in her order?",
        options: [
          { key: 'A', text: 'Whole milk' },
          { key: 'B', text: 'Almond milk' },
          { key: 'C', text: 'Oat milk' },
          { key: 'D', text: 'Soy milk' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 3,
        question: "How much did her drink cost?",
        options: [
          { key: 'A', text: '5 dollars' },
          { key: 'B', text: '6 dollars' },
          { key: 'C', text: '7 dollars' },
          { key: 'D', text: '8 dollars' }
        ],
        correctAnswer: 'C'
      }
    ]
  },
  {
    id: 4,
    title: "Space Launch Countdown",
    category: "Science",
    icon: "🚀",
    description: "Space mission control update on the Astra-7 shuttle rocket.",
    speechText: "Mission Control announced that the Astra-7 shuttle launch was paused at T-minus 10 minutes. A sensor anomaly was detected in oxygen tank 2. Engineers resolved the issue in 15 minutes, allowing successful liftoff at 11:30 AM.",
    audioUrl: "/audio/story4.mp3",
    questions: [
      {
        id: 1,
        question: "At what time was the countdown paused?",
        options: [
          { key: 'A', text: 'T-minus 5 minutes' },
          { key: 'B', text: 'T-minus 10 minutes' },
          { key: 'C', text: 'T-minus 15 minutes' },
          { key: 'D', text: 'T-minus 20 minutes' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "Which component triggered the sensor anomaly?",
        options: [
          { key: 'A', text: 'Fuel valve 1' },
          { key: 'B', text: 'Oxygen tank 2' },
          { key: 'C', text: 'Navigation radar' },
          { key: 'D', text: 'Thruster engine 3' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 3,
        question: "What was the final successful liftoff time?",
        options: [
          { key: 'A', text: '11:00 AM' },
          { key: 'B', text: '11:15 AM' },
          { key: 'C', text: '11:30 AM' },
          { key: 'D', text: '11:45 AM' }
        ],
        correctAnswer: 'C'
      }
    ]
  },
  {
    id: 5,
    title: "The Missing Office Keys",
    category: "Mystery",
    icon: "🔑",
    description: "Detective Alex investigating missing keys in the executive suite.",
    speechText: "Detective Alex searched Manager David's office for the missing master key. The manager last saw it on Monday afternoon. Alex checked under the blue notebook on the oak desk and located the key intact.",
    audioUrl: "/audio/story5.mp3",
    questions: [
      {
        id: 1,
        question: "Whose office was Detective Alex searching?",
        options: [
          { key: 'A', text: 'Manager David' },
          { key: 'B', text: 'Manager John' },
          { key: 'C', text: 'Manager Robert' },
          { key: 'D', text: 'Manager Steven' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 2,
        question: "When did the manager last see the master key?",
        options: [
          { key: 'A', text: 'Sunday morning' },
          { key: 'B', text: 'Monday afternoon' },
          { key: 'C', text: 'Tuesday morning' },
          { key: 'D', text: 'Wednesday afternoon' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 3,
        question: "Where was the key hidden?",
        options: [
          { key: 'A', text: 'Inside the desk drawer' },
          { key: 'B', text: 'Under a red folder' },
          { key: 'C', text: 'Under a blue notebook' },
          { key: 'D', text: 'Behind the computer monitor' }
        ],
        correctAnswer: 'C'
      }
    ]
  },
  {
    id: 6,
    title: "Campus Library Orientation",
    category: "College Life",
    icon: "📚",
    description: "University librarian explaining loan limits and late fine policies.",
    speechText: "During orientation, Librarian Mrs. Green informed students that undergraduate students may borrow up to five books for fourteen days. Late returns incur a fee of two dollars per day per book.",
    audioUrl: "/audio/story6.mp3",
    questions: [
      {
        id: 1,
        question: "What is the name of the university librarian?",
        options: [
          { key: 'A', text: 'Mrs. Brown' },
          { key: 'B', text: 'Mrs. Green' },
          { key: 'C', text: 'Mrs. White' },
          { key: 'D', text: 'Mrs. Clark' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "How many books can undergraduates borrow at one time?",
        options: [
          { key: 'A', text: 'Three books' },
          { key: 'B', text: 'Four books' },
          { key: 'C', text: 'Five books' },
          { key: 'D', text: 'Six books' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 3,
        question: "What is the daily late fine for overdue books?",
        options: [
          { key: 'A', text: 'One dollar' },
          { key: 'B', text: 'Two dollars' },
          { key: 'C', text: 'Three dollars' },
          { key: 'D', text: 'Five dollars' }
        ],
        correctAnswer: 'B'
      }
    ]
  },
  {
    id: 7,
    title: "Championship Final Shot",
    category: "Sports",
    icon: "🏀",
    description: "Thrilling final seconds of the college basketball tournament.",
    speechText: "In the college basketball finals, the Eagles were trailing by one point with three seconds left on the clock. Point guard Marcus sank a three-point shot from the wing to win the championship with a final score of 88 to 86.",
    audioUrl: "/audio/story7.mp3",
    questions: [
      {
        id: 1,
        question: "Which team won the championship?",
        options: [
          { key: 'A', text: 'The Tigers' },
          { key: 'B', text: 'The Eagles' },
          { key: 'C', text: 'The Falcons' },
          { key: 'D', text: 'The Lions' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "Who made the winning shot?",
        options: [
          { key: 'A', text: 'Marcus' },
          { key: 'B', text: 'Jason' },
          { key: 'C', text: 'Kevin' },
          { key: 'D', text: 'David' }
        ],
        correctAnswer: 'A'
      },
      {
        id: 3,
        question: "What was the final score of the match?",
        options: [
          { key: 'A', text: '85 to 84' },
          { key: 'B', text: '86 to 85' },
          { key: 'C', text: '88 to 86' },
          { key: 'D', text: '90 to 88' }
        ],
        correctAnswer: 'C'
      }
    ]
  },
  {
    id: 8,
    title: "Chef's Secret Recipe",
    category: "Culinary",
    icon: "👨‍🍳",
    description: "Chef Marco modifying his signature pasta recipe at the bistro.",
    speechText: "Chef Marco was preparing his signature tomato pasta at the downtown bistro. Instead of fresh basil, he experimented by adding fresh rosemary. The critics praised the bold flavor and awarded his restaurant four stars.",
    audioUrl: "/audio/story8.mp3",
    questions: [
      {
        id: 1,
        question: "What dish was Chef Marco preparing?",
        options: [
          { key: 'A', text: 'Mushroom risotto' },
          { key: 'B', text: 'Tomato pasta' },
          { key: 'C', text: 'Garlic pizza' },
          { key: 'D', text: 'Lentil soup' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "Which herb did he add as a substitute for basil?",
        options: [
          { key: 'A', text: 'Oregano' },
          { key: 'B', text: 'Thyme' },
          { key: 'C', text: 'Rosemary' },
          { key: 'D', text: 'Parsley' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 3,
        question: "How many stars did food critics award the restaurant?",
        options: [
          { key: 'A', text: 'Three stars' },
          { key: 'B', text: 'Four stars' },
          { key: 'C', text: 'Five stars' },
          { key: 'D', text: 'Six stars' }
        ],
        correctAnswer: 'B'
      }
    ]
  },
  {
    id: 9,
    title: "AI Keynote Presentation",
    category: "Technology",
    icon: "🤖",
    description: "Dr. Kapoor delivering the opening keynote at Tech Summit.",
    speechText: "Dr. Kapoor introduced the new AI 3.0 model during the Tech Summit keynote in Hall 4. The model processes multimodal data 50 percent faster than version 2.0 and will release in September.",
    audioUrl: "/audio/story9.mp3",
    questions: [
      {
        id: 1,
        question: "In which hall was the keynote delivered?",
        options: [
          { key: 'A', text: 'Hall 1' },
          { key: 'B', text: 'Hall 2' },
          { key: 'C', text: 'Hall 3' },
          { key: 'D', text: 'Hall 4' }
        ],
        correctAnswer: 'D'
      },
      {
        id: 2,
        question: "How much faster is AI 3.0 compared to version 2.0?",
        options: [
          { key: 'A', text: '30 percent' },
          { key: 'B', text: '40 percent' },
          { key: 'C', text: '50 percent' },
          { key: 'D', text: '60 percent' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 3,
        question: "In which month will the new model release?",
        options: [
          { key: 'A', text: 'July' },
          { key: 'B', text: 'August' },
          { key: 'C', text: 'September' },
          { key: 'D', text: 'October' }
        ],
        correctAnswer: 'C'
      }
    ]
  },
  {
    id: 10,
    title: "Amazon Wildlife Safari",
    category: "Nature",
    icon: "🐆",
    description: "Expedition guide sighting rare wildlife along River Bend.",
    speechText: "Tour guide Carlos spotted a pair of wild jaguars resting near River Bend at 4 PM. The safari group observed them for twenty minutes from a safe distance of fifty meters before the animals moved into the rainforest.",
    audioUrl: "/audio/story10.mp3",
    questions: [
      {
        id: 1,
        question: "What wildlife species did guide Carlos spot?",
        options: [
          { key: 'A', text: 'Wild pumas' },
          { key: 'B', text: 'Wild jaguars' },
          { key: 'C', text: 'Wild cheetahs' },
          { key: 'D', text: 'Wild leopards' }
        ],
        correctAnswer: 'B'
      },
      {
        id: 2,
        question: "How long did the safari group observe the animals?",
        options: [
          { key: 'A', text: 'Ten minutes' },
          { key: 'B', text: 'Fifteen minutes' },
          { key: 'C', text: 'Twenty minutes' },
          { key: 'D', text: 'Thirty minutes' }
        ],
        correctAnswer: 'C'
      },
      {
        id: 3,
        question: "What safe distance did the group maintain?",
        options: [
          { key: 'A', text: 'Thirty meters' },
          { key: 'B', text: 'Forty meters' },
          { key: 'C', text: 'Fifty meters' },
          { key: 'D', text: 'Sixty meters' }
        ],
        correctAnswer: 'C'
      }
    ]
  }
];

/**
 * Rating Calculator based on listen count
 * 1 Listen = 3 Stars (100% Listener Efficiency)
 * 2 Listens = 2 Stars (80% Efficiency)
 * 3+ Listens = 1 Star (60% Efficiency)
 */
export function calculateStars(listens) {
  if (listens <= 1) return 3;
  if (listens === 2) return 2;
  return 1;
}

export function getStarDisplay(stars) {
  if (stars === 3) return "⭐⭐⭐";
  if (stars === 2) return "⭐⭐";
  return "⭐";
}
