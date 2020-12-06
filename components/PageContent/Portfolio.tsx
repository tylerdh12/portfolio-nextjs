import React from "react";
import ProjectCard from "../Elements/ProjectCard";

export const Portfolio = () => {
  const projects = [
    {
      id: 0,
      path: "/random_quotes",
      group: "School",
      project_name: "Random Quotes Generator",
      description:
        "This app displays random quotes each time a button is clicked or a certain timeout has passed.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_link: "https://random-quotes.jsstack.dev/",
      github_link:
        "https://github.com/tylerdh12/TeamTreehouse-Random_Quotes_Generator-Unit-1-Project",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_1/Random-Quotes-Generator.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_1/Random-Quotes-Generator-2.png",
      ],
      status: "Complete",
    },
    {
      id: 1,
      path: "/list_pagination",
      group: "School",
      project_name: "List Pagination and Filtering",
      description:
        "This app takes a list of students and demonstrates a pagination list.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_link: "https://pagination.jsstack.dev/",
      github_link:
        "https://github.com/tylerdh12/TeamTreehouse-List_Pagination_and_Filtering-Unit-2-Project",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_2/Pagination-Project.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_2/Pagination-Project-2.png",
      ],
      status: "Complete",
    },
    {
      id: 2,
      path: "/interactive_form",
      group: "School",
      project_name: "Interactive Form",
      description:
        "This app has regex form validation and conditional behaviors. The form actually works.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_link: "https://interactiveform.jsstack.dev/",
      github_link:
        "https://github.com/tylerdh12/TeamTreehouse-Interactive_Form-Unit_3_Project",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_3/Interactive-Form-Project.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_3/Interactive-Form-Project-2.png",
      ],
      status: "Complete",
    },
    {
      id: 3,
      path: "/object_oriented_game",
      group: "School",
      project_name: "Phrase Hunter Game Show",
      description:
        "This app is a game that is based on 'hangman'. It uses Object-Oriented Programming and uses classes for game state. New games generate a new phrase for each game",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_link: "https://gameshow.jsstack.dev/",
      github_link:
        "https://github.com/tylerdh12/TeamTreehouse-OOP_Game_Show_App-Unit_4_Project",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_4/Game-Show-Project.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_4/Game-Show-Project-2.png",
      ],
      status: "Complete",
    },
    {
      id: 4,
      path: "/employee_directory",
      group: "School",
      project_name: "Employee Directory",
      description:
        "This application pulls its data from a Random user generator API. It allows for searching based on user information.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_link: "https://employee-dir.jsstack.dev/",
      github_link: "https://github.com/tylerdh12/Project-5-TeamTreehouse-FSJ",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_5/Employee-Directory-Project.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_5/Employee-Directory-Project-2.png",
      ],
      status: "Complete",
    },
    {
      id: 5,
      path: "/password_generator",
      group: "Personal",
      project_name: "Password Generator",
      description:
        "This is just a little tool that generates a password based on the length you choose with lower case, upper case, symbols, and numbers.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live_link: "https://passwordgen.jsstack.dev/",
      github_link: "https://github.com/tylerdh12/PasswordGenerator",
      image_urls: [
        "./images/projects/personal_project/Password-Generator.png",
        "./images/projects/personal_project/Password-Generator-2.png",
      ],
      status: "Complete",
    },
    {
      id: 6,
      path: "/color_palette",
      group: "Personal",
      project_name: "Color Palette",
      description:
        "This is a project that uses React and local state to manage a color palette",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Local-State"],
      live_link: "https://colors.jsstack.dev/",
      github_link: "https://github.com/tylerdh12/Color-Palette-React",
      image_urls: [
        "./images/projects/personal_project/ColorPalette-1.png",
        "./images/projects/personal_project/ColorPalette-2.png",
        "./images/projects/personal_project/ColorPalette-3.png",
      ],
      status: "Complete",
    },
    {
      id: 7,
      path: "/harvest_guardian_app",
      group: "Personal",
      project_name: "Harvest Guardian",
      description: "Gardening app to help keep track of your plants",
      technologies: [
        "Expo",
        "Custom REST Api",
        "React Native",
        "StyledComponents",
        "TypeScript",
        "Reanimated",
        "MongoDB",
        "Mongoose",
      ],
      live_link: "https://expo.io/@tylerdh12/Harvest_Guardian",
      github_link: "https://github.com/tylerdh12/Harvest-Guardian",
      image_urls: [
        "./images/projects/personal_project/Harvest-Guardian-1.png",
        "./images/projects/personal_project/Harvest-Guardian-2.png",
        "./images/projects/personal_project/Harvest-Guardian-3.png",
        "./images/projects/personal_project/Harvest-Guardian-4.png",
        "./images/projects/personal_project/Harvest-Guardian-5.png",
        "./images/projects/personal_project/Harvest-Guardian-6.png",
        "./images/projects/personal_project/Harvest-Guardian-7.png",
        "./images/projects/personal_project/Harvest-Guardian-8.png",
      ],
      status: "Complete",
    },
    {
      id: 8,
      path: "/react_app_using_flickr_api",
      group: "School",
      project_name: "REACT APP using Flickr API",
      description:
        "This is a project that uses the Flickr API and React as the framework",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      live_link: "https://flickr.jsstack.dev/",
      github_link: "https://github.com/tylerdh12/Project-7-TeamTreehouse-FSJ",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_7/Flickr_api.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_7/Flickr_api_2.png",
      ],
      status: "Complete",
    },
    {
      id: 9,
      path: "/library_manager",
      group: "School",
      project_name: "Library Management Console",
      description:
        "This is a project that uses pug design template design, and express for the back end",
      technologies: ["HTML", "CSS", "JavaScript", "PUG", "Express"],
      live_link: "https://library-manager-pro.herokuapp.com/",
      github_link: "https://github.com/tylerdh12/Project-8-Treehouse-FSJ",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_8/Library-Manager-1.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_8/Library-Manager-2.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_8/Library-Manager-3.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_8/Library-Manager-4.png",
      ],
      status: "Incomplete",
    },
    {
      id: 10,
      path: "/courses_rest_api",
      group: "School",
      project_name: "Courses REST API",
      description:
        "This is a project that uses Express and Node to create a Backend for a Courses application that will have User Auth and will show courses with CRUD function.",
      technologies: ["HTML", "CSS", "JavaScript", "Express", "Sequelize ORM"],
      live_link: "https://courses-pro.herokuapp.com/",
      github_link: "https://github.com/tylerdh12/Course_API",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_9/Courses-API.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_9/Courses-API-2.png",
      ],
      status: "Complete",
    },
    {
      id: 11,
      path: "/courses_react_frontend",
      group: "School",
      project_name: "Courses FullStack React App",
      description:
        "This is a project that uses React for the Frontend and Express for the backend. This project is the Visual Layer (frontend) of the previous REST API created in my Unit 9 Project. This application is a Fullstack web application demonstrating React Routing, Client Login, and the CRUD operations that need to be available in a FullStack application.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "JS-Cookies"],
      live_link: "https://courses.jsstack.dev/",
      github_link: "https://github.com/tylerdh12/Course_App",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_10/Courses-Project.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_10/Courses-Project-2.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_10/Courses-Project-3.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_10/Courses-Project-4.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/unit_projects/project_10/Courses-Project-5.png",
      ],
      status: "Complete",
    },
    {
      id: 20,
      path: "/redux_scoreboard",
      group: "Misc",
      project_name: "Scoreboard",
      description: "This is a project that uses React with Redux for state.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      live_link: "https://scoreboard.jsstack.dev/",
      github_link: "https://github.com/tylerdh12/FSJS-Scoreboard",
      image_urls: [
        "./images/projects/treehouse_projects/fsjs_techdegree/course_projects/scoreboard/ScoreBoard-with-Redux-1.png",
        "./images/projects/treehouse_projects/fsjs_techdegree/course_projects/scoreboard/ScoreBoard-with-Redux-2.png",
      ],
      status: "inComplete",
    },
  ];
  return (
    <div id="portfolio-section">
      <div>
        <div id="portfolio" className="portfolio-container">
          <div className="portfolio-label">Personal Projects</div>
          <ul className="personal-projects">
            {projects.map((project) => {
              if (project.group === "Personal")
                return <ProjectCard key={project.id} project={project} />;
            })}
          </ul>
        </div>
        <div id="portfolio" className="portfolio-container">
          <div className="portfolio-label">School Projects</div>
          <ul className="personal-projects">
            {projects.map((project) => {
              if (project.group === "School")
                return <ProjectCard key={project.id} project={project} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
