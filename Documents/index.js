const exercises = [
  {
    name: "Desk Push-ups",
    description: "Place hands on desk edge, step back, and do 10-15 push-ups against the desk."
  },
  {
    name: "Neck Rolls",
    description: "Slowly roll your head in circles, 5 times each direction to release neck tension."
  },
  {
    name: "Shoulder Shrugs",
    description: "Lift shoulders to ears, hold for 5 seconds, release. Repeat 10 times."
  },
  {
    name: "Seated Spinal Twist",
    description: "Sit tall, place right hand on left knee, twist gently left. Hold 30 sec, switch sides."
  },
  {
    name: "Calf Raises",
    description: "Stand and raise up on toes, hold for 2 seconds, lower. Repeat 15-20 times."
  },
  {
    name: "Wall Angels",
    description: "Stand against wall, make snow angel motions with arms for 30 seconds."
  },
  {
    name: "Hip Flexor Stretch",
    description: "Step one foot back in lunge position, push hips forward. Hold 30 sec each side."
  },
  {
    name: "Seated Cat-Cow",
    description: "Arch and round your back while seated, moving slowly through the motion 10 times."
  },
  {
    name: "Ankle Circles",
    description: "Lift one foot, rotate ankle 10 times each direction. Switch feet."
  },
  {
    name: "Standing Side Bend",
    description: "Stand tall, reach one arm overhead and lean to opposite side. Hold 20 sec each side."
  },
  {
    name: "Doorway Chest Stretch",
    description: "Place forearm on doorframe, step forward to stretch chest. Hold 30 seconds each arm."
  },
  {
    name: "Seated Figure-4 Stretch",
    description: "Sit, place ankle on opposite knee, lean forward gently. Hold 30 sec each side."
  },
  {
    name: "Standing Quad Stretch",
    description: "Hold ankle behind you, pull heel toward glutes. Hold 30 seconds each leg."
  },
  {
    name: "Wrist Circles",
    description: "Extend arms, rotate wrists 10 times each direction to prevent strain."
  },
  {
    name: "Standing Forward Fold",
    description: "Stand, hinge at hips, let arms hang toward floor. Hold for 30 seconds."
  }
];

function getRandomExercise() {
  const randomIndex = Math.floor(Math.random() * exercises.length);
  return exercises[randomIndex];
}

function displayExercise(exercise) {
  document.getElementById('exerciseName').textContent = exercise.name;
  document.getElementById('exerciseDescription').textContent = exercise.description;
}

function getNewExercise() {
  const exercise = getRandomExercise();
  displayExercise(exercise);
}

// Display a random exercise when the page loads
window.addEventListener('load', function() {
  getNewExercise();
});
