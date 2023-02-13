let questions = [
    {
    numb: 1,
    question:  "Which of the following is not a type of music notation?",
    answer: "Morse code notation",
    options: ["Standard notation", "Tab notation", "Morse code notation", "Graphics notation"]
  },
    {
    numb: 2,
    question: "What is the most common time signature in classical music?",
    answer: "4/4",
    options: 
        ["3/4", "4/4", "5/4", "6/8"],
    
  },
    {
    numb: 3,
    question:  "Which of the following is not a type of instrument in a symphony orchestra?",
    answer: "Theremin",
    options: 
        ["Violin", "Piano", "Harp", "Theremin"],
    
  },
    {
    numb: 4,
    question: "What is the most common key in pop music?",
    answer: "C Major",
    options: ["C Major", "G Major", "D Major", "A Major"],
  },
    {
    numb: 5,
    question: "Which of the following is not a type of chord?",
    answer: "Flat",
    options: 
    ["Major", "Minor", "Diminished", "Flat"]
    
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
  {
    numb: 6,
    question: "Which of the following is not a type of music genre?",
    answer: "Applesauce",
    options: ["Jazz", "Blues", "Rock", "Applesauce"]
    
    
  },
  {
    numb:7 ,
    question: "Which of the following is not a type of music theory?",
    answer: "Cooking",
    options: 
    ["Harmony", "Counterpoint", "Form", "Cooking"],
    
  },
  {
    numb: 8,
    question: "What is the most common tempo marking in classical music?",
    answer: "Allegro",
    options: ["Allegro", "Andante", "Adagio", "Moderato"],
    
    
  },
  {
    numb: 9,
    question:"Which of the following is not a type of musical form?", 
    answer: "Spaghetti",
    options: ["Sonata", "Symphony", "Concerto", "Spaghetti"],
    
    
  },
  {
    numb: 10,
    question:" Which of the following is not a type of music notation software?",
    answer:   "Microsoft Word",
    options: ["Sibelius", "Finale", "MuseScore", "Microsoft Word"],
    
    
  },
  {
    numb: 11,
    question: "Which artist is known for coining the term 'Surrealism'?",
    answer: "Salvador Dali",
    options: ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
    
    
  },
  {
    numb: 12,
    question: "Which movement is associated with the use of abstract forms and shapes in art?" ,
    answer: "Cubism",
    options:  ["Impressionism", "Expressionism", "Futurism", "Cubism"],
    
    
  },
  {
    numb: 13,
    question:"Which artist is known for painting the work 'The Persistence of Memory'?", 
    answer: "Salvador Dali",
    options: ["Pablo Picasso", "Salvador Dali", "Vincent van Gogh", "Henri Matisse"],
    
    
  },{
    numb: 14,
    question: "Which artist is known for creating the painting 'The Scream'?",
    answer: "Edvard Munch",
    options: ["Vincent van Gogh", "Salvador Dali", "Edvard Munch", "Claude Monet"],
    
    
  },{
    numb: 15,
    question: "What movement was associated with the use of bold, bright colors and thick brushstrokes?",
    answer:  "Fauvism",
    options:  ["Impressionism", "Expressionism", "Fauvism", "Cubism"],
    
    
  },
  {
    numb: 16,
    question: "What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
    answer: "Futurism",
    options:  ["Impressionism", "Futurism", "Surrealism", "Abstract Expressionism"],
    
    
  },
  {
    numb: 17,
    question:  "Which artist is known for creating the painting 'Water Lilies'?",
    answer:"Claude Monet",
    options:  ["Claude Monet", "Paul Cezanne", "Paul Gauguin", "Paul Klee"],
    
    
  },
  {
    numb: 18,
    question: "Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
    answer:"Pablo Picasso", 
    options: ["Henri Matisse", "Vincent van Gogh", "Salvador Dali", "Pablo Picasso"],
    
    
  },
  {
    numb: 19,
    question: "Which artist is known for creating the painting 'Guernica'?",
    answer: "Pablo Picasso ",
    options: ["Claude Mone", "Paul Cezanne", "Pablo Picasso", "Vincent van Gogh"],
    
    
  },
  {
    numb: 20,
    question: "Which artist is known for creating the sculpture 'The Thinker'?",
    answer: "Auguste Rodin",
    options:["Auguste Rodin", "Alexander Calder", "Jean Arp", "Henry Moore"],
    
    
  },
  {
    numb: 21,
    question: "What is the correct syntax for an if statement in Python?",
    answer: "if condition:",
    options: ["if (condition):", "if condition", "if: condition", "if condition:"],
    
  },
  {
    numb: 22,
    question: "Which of the following is not a data type in JavaScript?",
    answer: "ArrayList",
    options: ["String", "Number", "Boolean", "ArrayList"],
    
    
  },
  {
    numb: 23,
    question: "Which of the following is used to declare a variable in Java?",
    answer: "int",
    options: ["var", "let", "const", "int"],
    
    
  },
  {
    numb: 24,
    question: "What is the correct syntax for a for loop in C#?",
    answer: "for (i = 0; i <= 10; i++)",
    options:  ["for i = 0 to 10", "for (i = 0; i <= 10; i++)", "for (int i = 0; i <= 10)", "for i in range(0, 10)"],
    
    
  },
  {
    numb: 25,
    question: "Which of the following is not a looping structure in PHP?",
    answer: "foreach",
    options: ["while", "for", "do-while", "foreach"], 
    
    
  },
  {
    numb: 26,
    question:  "Which of the following is not a valid operator in C++?",
    answer:  "$",
    options:  ["+", "-", "*", "$"],
    
    
  },
  {
    numb: 27,
    question: "In which programming language is 'print' used for displaying output?",
    answer: "Python",
    options: ["Python", "JavaScript", "Java", "C++"],
    
    
  },
  {
    numb: 28,
    question: "What is the correct syntax for a function in Ruby?",
    answer:  "def name()",
    options: ["function name()", "def name", "function name", "def name()"],
    
    
  },
  {
    numb: 29,
    question: "Which of the following is not a type of variable in Swift?",
    answer: "Object",
    options:  ["Int", "String", "Double", "Object"], 
  
    
  },
  {
    numb: 30,
    question: "In which programming language is '#' used for commenting?",
    answer: "C++",
    options: ["Python", "JavaScript", "Java", "C++"],
    
    
  },
];