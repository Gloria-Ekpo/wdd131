const exercises = [];
const meals = [];

// Helper function to safely attach event listeners
function safeAddEventListener(selector, event, handler) {
    const element = document.querySelector(selector);
    if (element) {
        element.addEventListener(event, handler);
    } else {
        console.warn(`Element not found for selector: ${selector}`);
    }
}

// Function to log an exercise
function logExercise(event) {
    event.preventDefault();
    const exerciseName = document.getElementById('exercise-name').value;
    const duration = parseInt(document.getElementById('duration').value);
    const intensity = document.getElementById('intensity').value;

    if (exerciseName && duration) {
        exercises.push({ name: exerciseName, duration, intensity });

        let totalWorkouts = parseInt(localStorage.getItem('totalWorkouts') || '0');
        totalWorkouts++;
        localStorage.setItem('totalWorkouts', totalWorkouts);

        let totalCalories = parseInt(localStorage.getItem('totalCalories') || '0');
        totalCalories += calculateCalories(duration, intensity);
        localStorage.setItem('totalCalories', totalCalories);

        displayExercises();
        document.getElementById('exercise-name').value = '';
        document.getElementById('duration').value = '';
    } else {
        alert('Please fill in all exercise details.');
    }
}

// Example calorie formula
function calculateCalories(duration, intensity) {
    const intensityFactor = { low: 5, moderate: 8, high: 12 };
    return duration * (intensityFactor[intensity] || 5);
}

// Function to display logged exercises
function displayExercises() {
    const exerciseList = document.getElementById('exercise-list');
    if (!exerciseList) return;

    exerciseList.innerHTML = '';
    exercises.forEach((exercise, index) => {
        const exerciseItem = document.createElement('li');
        exerciseItem.textContent = `${exercise.name} - ${exercise.duration} minutes - ${exercise.intensity} intensity`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            exercises.splice(index, 1);
            displayExercises();
        });

        exerciseItem.appendChild(deleteButton);
        exerciseList.appendChild(exerciseItem);
    });
}

// Function to log a meal
function logMeal(event) {
    event.preventDefault();
    const mealName = document.getElementById('meal-name').value.trim();
    const calories = parseInt(document.getElementById('calories').value.trim());

    if (mealName && calories > 0) {
        meals.push({ name: mealName, calories });
        displayMeals();
        document.getElementById('meal-name').value = '';
        document.getElementById('calories').value = '';
    } else {
        alert('Please fill in all meal details.');
    }
}

// Function to display logged meals
function displayMeals() {
    const mealList = document.getElementById('meal-log');
    if (!mealList) return;

    mealList.innerHTML = '';
    meals.forEach((meal, index) => {
        const mealItem = document.createElement('li');
        mealItem.textContent = `${meal.name} - ${meal.calories} calories`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            meals.splice(index, 1);
            displayMeals();
        });

        mealItem.appendChild(deleteButton);
        mealList.appendChild(mealItem);
    });
}

// Function to animate counters
function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const increment = Math.ceil((end - start) / (duration / 16));
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = current.toLocaleString();
    }, 16);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    safeAddEventListener('#exercise-form', 'submit', logExercise);
    safeAddEventListener('#meal-form', 'submit', logMeal);

    // Animate counters if the elements are present
    animateCounter("users-logged", 0, 25000, 2000);
    animateCounter("workouts-logged", 0, 150000, 2000);
    animateCounter("calories-burned", 0, 750000, 2000);

    // Toggle authentication logic
    const toggleAuth = document.getElementById('toggle-auth');
    if (toggleAuth) {
        toggleAuth.addEventListener('click', (event) => {
            event.preventDefault();
            const formTitle = document.getElementById('form-title');
            const signupFields = document.getElementById('signup-fields');
            const loginFields = document.getElementById('login-fields');
            const toggleMessage = document.getElementById('toggle-message');

            if (signupFields.style.display === 'none') {
                signupFields.style.display = 'block';
                loginFields.style.display = 'none';
                formTitle.textContent = 'Create an Account';
                toggleMessage.innerHTML = 'Already have an account? <a href="#" id="toggle-auth">Log in</a>';
            } else {
                signupFields.style.display = 'none';
                loginFields.style.display = 'block';
                formTitle.textContent = 'Log In';
                toggleMessage.innerHTML = 'Don’t have an account? <a href="#" id="toggle-auth">Sign up</a>';
            }
        });
    }
});
