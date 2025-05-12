import "./styles.scss";
import "animate.css";

const app = document.getElementById("app");

app.innerHTML = `
<div class="container animate__animated animate__fadeIn">
<h1 class="animate__animated animate__fadeInDown">Vamsi Krishna Dhulipalla</h1>
<p class="subtitle animate__animated animate__fadeInUp">Front-End Developer | React | JavaScript | Angular</p>
<p class="description animate__animated animate__fadeInUp">Building interactive and responsive web applications with modern technologies.</p>

<div class="section animate__animated animate__zoomIn">
<h2>Projects</h2>
<div class="project-card animate__animated animate__fadeInLeft">
<h3>Weather Dashboard</h3>
<a href="https://github.com/vamsi1111/weather-dashboard" target="_blank">View on GitHub</a>
</div>
<div class="project-card animate__animated animate__fadeInRight">
<h3>Job Application Tracker</h3>
<a href="https://github.com/vamsi1111/job-application-tracker" target="_blank">View on GitHub</a>
</div>
<div class="project-card animate__animated animate__fadeInLeft">
<h3>Data Visualization Dashboard</h3>
<a href="https://github.com/vamsi1111/data-viz-dashboard" target="_blank">View on GitHub</a>
</div>
</div>

<div class="section animate__animated animate__slideInUp">
<h2>Skills</h2>
<p>React, JavaScript, Angular, HTML, CSS, SASS, Bootstrap, Webpack</p>
</div>

<div class="section animate__animated animate__fadeInUp">
<h2>Contact</h2>
<div class="contact-info animate__animated animate__pulse animate__infinite">
<p>Email: <a href="mailto:vamsikrishnadhulipalla4@gmail.com">vamsikrishnadhulipalla4@gmail.com</a></p>
<p>Phone: <a href="tel:(470)457-4358">(470)457-4358</a></p>
</div>
<form id="contactForm" class="animate__animated animate__fadeInUp">
<input type="text" id="name" placeholder="Your Name" class="animate__animated animate__fadeInLeft" required />
<input type="email" id="email" placeholder="Your Email" class="animate__animated animate__fadeInRight" required />
<textarea id="message" placeholder="Your Message" class="animate__animated animate__fadeInUp" required></textarea>
<button type="submit" class="animate__animated animate__rubberBand">Send Message</button>
</form>
</div>
</div>
`;

document.getElementById("contactForm").addEventListener("submit", (e) => {
e.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

if (name && email && message) {
alert(`Thank you, ${name}! Your message has been sent.`);
document.getElementById("contactForm").reset();
} else {
alert("Please fill in all fields.");
}
});