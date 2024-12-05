// Get DOM elements
const workoutForm = document.getElementById('workout-form');
const workoutName = document.getElementById('workout-name');
const duration = document.getElementById('duration');
const date = document.getElementById('date');
const trackerList = document.getElementById('tracker-list');

// Handle the form submission
workoutForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = workoutName.value.trim();
    const workoutDuration = duration.value.trim();
    const workoutDate = date.value.trim();

    if (name && workoutDuration && workoutDate) {
        // Create a new workout log entry
        const workoutItem = document.createElement('div');
        workoutItem.classList.add('workout-item');

        workoutItem.innerHTML = `
      <span>${name}</span>
      <span>${workoutDuration} mins</span>
      <span>${workoutDate}</span>
    `;

        // Append the new workout item to the list
        trackerList.appendChild(workoutItem);

        // Clear the form fields
        workoutName.value = '';
        duration.value = '';
        date.value = '';
    }
});
