import budgetDB from "../assets/images/portfolio/budget-DB.jpg";
import burgerdemo from "../assets/images/portfolio/burgerdemo.jpg";
import codequiz from "../assets/images/portfolio/codequiz.jpg";
import dayplanner from "../assets/images/portfolio/dayplanner.png";
import empdirectory from "../assets/images/portfolio/empdirectory.png";
import employeetracker from "../assets/images/portfolio/employeetracker.png";
import fitness from "../assets/images/portfolio/fitness.jpg";
import myteam from "../assets/images/portfolio/myteam.png";
import notetaker from "../assets/images/portfolio/notetaker.jpg";
import passwordgen from "../assets/images/portfolio/passwordgen.png";
import weatherdashboard from "../assets/images/portfolio/weatherdashboard.jpg";
import workoutbuddies from "../assets/images/portfolio/workoutbuddies.png";

function ProjectCard(title, about, imgURL, siteURL, repoURL) {
    this.title = title;
    this.about = about;
    this.imgURL = imgURL;
    this.siteURL = siteURL;
    this.repoURL = repoURL;
};

const employeeDirCard = new ProjectCard(
    "Employee Directory",
    "An application built with React that allows the user to have quick and easy access to employee information. User may filter and search employees by name, and sorty by name, email, DOB, and phone number.",
    empdirectory,
    "https://fbabauta.github.io/employee-directory/",
    "https://github.com/fbabauta/Employee-Directory"
);

// eslint-disable-next-line no-undef
export default portfolioData;