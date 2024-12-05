// Define functions first
function handleSubmit(event) {
    event.preventDefault();
    
    // Form validation
    const agreement = document.getElementById('agreement');
    if (!agreement.checked) {
        alert('Please agree to the terms before submitting.');
        return false;
    }

    // Get form data
    const formData = new FormData(event.target);
    const result = document.getElementById('result');
    
    // Create HTML content from form data
    let htmlContent = '<h2>Your Introduction Page</h2>';
    formData.forEach((value, key) => {
        if (key !== 'agreement' && key !== 'image') {
            htmlContent += `<p><strong>${key}:</strong> ${value}</p>`;
        }
    });

    // Display result
    result.innerHTML = htmlContent;
    result.style.display = 'block';
    
    return false;
}

function addCourse() {
    const coursesContainer = document.getElementById('courses-container');
    const courseEntry = document.createElement('div');
    courseEntry.className = 'course-entry';
    courseEntry.innerHTML = `
        <input type="text" name="courses[]" required>
        <button type="button" class="delete-course">Delete</button>
    `;
    coursesContainer.appendChild(courseEntry);
}

function deleteCourse(button) {
    const courseEntry = button.closest('.course-entry');
    if (courseEntry) {
        courseEntry.remove();
    }
}

// Add event listeners after functions are defined
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('intro-form');
    form.addEventListener('submit', handleSubmit);

    const addCourseButton = document.querySelector('.add-course-btn');
    if (addCourseButton) {
        addCourseButton.addEventListener('click', addCourse);
    }

    // Add event delegation for delete course buttons
    const coursesContainer = document.getElementById('courses-container');
    if (coursesContainer) {
        coursesContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('delete-course')) {
                deleteCourse(e.target);
            }
        });
    }
});
