function addCourse() {
    const container = document.getElementById('coursesContainer');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course-entry';
    
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'courses[]';
    input.required = true;
    
    const deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.className = 'delete-course';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() { deleteCourse(this); };
    
    courseDiv.appendChild(input);
    courseDiv.appendChild(deleteBtn);
    container.appendChild(courseDiv);
}

function deleteCourse(button) {
    const courseEntries = document.querySelectorAll('.course-entry');
    if (courseEntries.length > 1) {
        button.parentElement.remove();
    }
}

function validateImage(file) {
    const validTypes = ['image/jpeg', 'image/png'];
    if (!file) return false;
    return validTypes.includes(file.type);
}

function handleSubmit(event) {
    event.preventDefault();
    
    // Validate required fields
    const requiredFields = document.querySelectorAll('[required]');
    for (const field of requiredFields) {
        if (!field.value) {
            alert('Please fill out all required fields.');
            field.focus();
            return false;
        }
    }

    // Validate image
    const imageInput = document.getElementById('image');
    if (imageInput.files.length > 0 && !validateImage(imageInput.files[0])) {
        alert('Please select a valid image file (JPG or PNG).');
        return false;
    }

    // Validate agreement checkbox
    if (!document.getElementById('agreement').checked) {
        alert('Please agree to the terms before submitting.');
        return false;
    }

    // Gather form data
    const formData = new FormData(event.target);
    const result = document.getElementById('result');
    
    // Create introduction page content
    let introContent = `
        <h2>${formData.get('name')}'s Introduction</h2>
        <h3>Mascot: ${formData.get('mascot')}</h3>
        
        <figure>
            <img id="uploadedImage" alt="${formData.get('imageCaption')}" style="max-width: 400px;">
            <figcaption>${formData.get('imageCaption')}</figcaption>
        </figure>

        <h3>Personal Background</h3>
        <p>${formData.get('personalBackground')}</p>

        <h3>Professional Background</h3>
        <p>${formData.get('professionalBackground')}</p>

        <h3>Academic Background</h3>
        <p>${formData.get('academicBackground')}</p>

        <h3>Background in Web Development</h3>
        <p>${formData.get('webDevBackground')}</p>

        <h3>Primary Computer Platform</h3>
        <p>${formData.get('platform')}</p>

        <h3>Courses Currently Taking</h3>
        <ul>
    `;

    // Add courses
    const courses = document.querySelectorAll('input[name="courses[]"]');
    courses.forEach(course => {
        if (course.value) {
            introContent += `<li>${course.value}</li>`;
        }
    });

    introContent += `
        </ul>
    `;

    if (formData.get('funnyThing')) {
        introContent += `
            <h3>Funny Thing</h3>
            <p>${formData.get('funnyThing')}</p>
        `;
    }

    if (formData.get('anythingElse')) {
        introContent += `
            <h3>Anything Else</h3>
            <p>${formData.get('anythingElse')}</p>
        `;
    }

    introContent += `
        <p><a href="#" onclick="resetForm()">Create Another Introduction</a></p>
    `;

    // Hide form and show result
    document.getElementById('introForm').style.display = 'none';
    result.innerHTML = introContent;
    result.style.display = 'block';

    // Display uploaded image
    const file = imageInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('uploadedImage').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }

    return false;
}

function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('introForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    
    // Reset courses to single entry
    const coursesContainer = document.getElementById('coursesContainer');
    coursesContainer.innerHTML = `
        <div class="course-entry">
            <input type="text" name="courses[]" required>
            <button type="button" class="delete-course" onclick="deleteCourse(this)">Delete</button>
        </div>
    `;
}
