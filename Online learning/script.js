// Sample course data
const courses = [
    { title: 'Web Development Bootcamp', instructor: 'John Doe', price: '$99' },
    { title: 'JavaScript Basics', instructor: 'Jane Smith', price: '$49' },
    { title: 'Python for Beginners', instructor: 'Alice Johnson', price: '$59' },
    { title: 'Coding guide', instructor: 'Abhishek', price: '$39' },
    { title: 'Chat GPT promts', instructor: 'Alice Johnson', price: '$29' },
    // Add more courses as needed
];

// Function to display courses on the webpage
function displayCourses() {
    const courseList = document.getElementById('course-list');

    // Clear existing course cards
    courseList.innerHTML = '';

    // Loop through courses and create HTML for each course card
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.classList.add('course-card');
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p>Instructor: ${course.instructor}</p>
            <button class="price-button">${course.price}</button> <!-- Course price as a button -->
        `;
        courseList.appendChild(courseCard);
    });
}

// Function to close the course detail slide and show index.html
function closeCourseDetailAndShowIndex() {
    const slide = document.getElementById('course-detail-slide');
    const indexPage = document.getElementById('index-page');

    // Hide the slide
    slide.style.display = 'none';

    // Show the main index page
    indexPage.style.display = 'block';
}

// Function to open the course detail slide
function openCourseDetail(course) {
    const slide = document.getElementById('course-detail-slide');
    const courseName = slide.querySelector('#course-name');
    const courseInstructor = slide.querySelector('#course-instructor');
    const coursePrice = slide.querySelector('#course-price');

    // Update course details in the slide
    courseName.textContent = course.title;
    courseInstructor.textContent = "Instructor: " + course.instructor;
    coursePrice.textContent = "Price: " + course.price;

    // Show the slide
    slide.style.display = 'block';

    // Add event listener to the close button
    const closeButton = slide.querySelector('#close-slide-btn');
    closeButton.addEventListener('click', closeCourseDetailAndShowIndex);

    // Add event listener to close the slide when clicking anywhere besides the slide
    document.body.addEventListener('click', closeSlideOnClickOutside);
}

// Function to add event listeners to course cards
function addCourseCardListeners() {
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(courseCard => {
        courseCard.addEventListener('click', function() {
            // Retrieve course details from the clicked course card
            const course = {
                title: this.querySelector('h3').textContent,
                instructor: this.querySelector('p:nth-of-type(2)').textContent.split(': ')[1],
                price: this.querySelector('.price-button').textContent
            };

            // Open course detail slide with the retrieved course details
            openCourseDetail(course);
        });
    });
}

// Call addCourseCardListeners function when the page loads
window.onload = addCourseCardListeners;

// Function to add event listeners to course cards
function addCourseCardListeners() {
    const courseCards = document.querySelectorAll('.course-card');

    courseCards.forEach(courseCard => {
        courseCard.addEventListener('click', function() {
            // Retrieve course details from the clicked course card
            const course = {
                title: this.querySelector('h3').textContent,
                instructor: this.querySelector('p').textContent.split(': ')[1],
                price: this.querySelector('.price-button').textContent
            };

            // Open course detail slide with the retrieved course details
            openCourseDetail(course);
        });
    });
}

// Function to make the course card clickable when the mouse pointer is off
function makeCourseClickable(courseCard) {
    courseCard.addEventListener('mouseleave', function() {
        const courseLink = courseCard.parentElement; // Get the anchor tag
        courseLink.href = '#'; // Set the href attribute to '#' or the desired URL
    });
}

// Call necessary functions when the page loads
window.onload = function() {
    displayCourses(); // Display the sample courses
    addCourseCardListeners(); // Add event listeners to course cards

    // Add event listeners to make course cards clickable when the mouse pointer is off
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(courseCard => {
        makeCourseClickable(courseCard);
    });
};
