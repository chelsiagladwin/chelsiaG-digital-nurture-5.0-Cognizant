import { courses } from "./data.js";


// Destructuring

courses.forEach(course => {
    const { name, credits } = course;
    console.log(name, credits);
});

// map()

const formattedCourses = courses.map(
    course =>
        `${course.code} — ${course.name} (${course.credits} credits)`
);

console.log(formattedCourses);

// filter()

const fourCreditCourses = courses.filter(
    course => course.credits >= 4
);

console.log(
    "Courses with >=4 credits:",
    fourCreditCourses.length
);

// reduce()

const totalCredits = courses.reduce(
    (sum, course) => sum + course.credits,
    0
);

console.log("Total Credits:", totalCredits);



const grid = document.querySelector(".course-grid");
const total = document.getElementById("total-credits");
const search = document.getElementById("search-courses");
const sortBtn = document.getElementById("sort-btn");
const selected = document.getElementById("selected-course");

let currentCourses = [...courses];

/* Render Function */

const renderCourses = (courseList) => {

    grid.innerHTML = "";

    courseList.forEach(course => {

        const article = document.createElement("article");

        article.className = "course-card";

        article.dataset.id = course.id;

        article.innerHTML = `
            <h3>${course.name}</h3>
            <p>${course.code}</p>
            <p>Credits: ${course.credits}</p>
        `;

        grid.appendChild(article);

    });

    const credits = courseList.reduce(
        (sum, course) => sum + course.credits,
        0
    );

    total.textContent =
        `Total Credits: ${credits}`;
};

renderCourses(currentCourses);



search.addEventListener("input", e => {

    const keyword =
        e.target.value.toLowerCase();

    const filtered =
        currentCourses.filter(course =>
            course.name
            .toLowerCase()
            .includes(keyword)
        );

    renderCourses(filtered);

});



sortBtn.addEventListener("click", () => {

    currentCourses.sort(
        (a, b) => b.credits - a.credits
    );

    renderCourses(currentCourses);

});



grid.addEventListener("click", event => {

    const card =
        event.target.closest(".course-card");

    if (!card) return;

    const id = Number(card.dataset.id);

    const course =
        currentCourses.find(
            c => c.id === id
        );

    selected.textContent =
        `Selected Course: ${course.name} | Grade: ${course.grade}`;

});
