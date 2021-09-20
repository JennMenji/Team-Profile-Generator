const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

// create the employee section
const createEmployeeSection = (name, id, email, role, info) => {
  if (!name) {
    return "";
  }

  return `
    <div class="card" style="width: 18rem">
        <div class="card-body">
            <h4 class="card-title">${name}</h4>
            <h5 class="card-title">${role}</h5>
            <h6 class="card-subtitle mb-2 text-muted">ID: ${id}</h6>
            <p class="card-text">
                Email: ${email} <br>
                Office Number: ${info.officenumber}
            </p>
        </div>
    </div>
`;
};

// const generateProjects = (projectsArr) => {
//   return `
//     <section class="my-3" id="portfolio">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//       <div class="flex-row justify-space-between">
//       ${projectsArr
//         .filter(({ feature }) => feature)
//         .map(({ name, description, languages, link }) => {
//           return `
//                     <div class="col-12 mb-2 bg-dark text-light p-3">
//                     <h3 class="portfolio-item-title text-light">${name}</h3>
//                     <h5 class="portfolio-languages">
//                         Built With:
//                         ${languages.join(", ")}
//                     </h5>
//                     <p>${description}</p>
//                     <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//                     </div>
//                 `;
//         })
//         .join("")}

//         ${projectsArr
//           .filter(({ feature }) => !feature)
//           .map(({ name, description, languages, link }) => {
//             return `
//                 <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//                     <h3 class="portfolio-item-title text-light">${name}</h3>
//                     <h5 class="portfolio-languages">
//                     Built With:
//                     ${languages.join(", ")}
//                     </h5>
//                     <p>${description}</p>
//                     <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//                 </div>
//             `;
//           })
//           .join("")}
//       </div>
//     </section>
//   `;
// };

module.exports = (templateData) => {
  const { name, id, email, role, ...info } = templateData;

  return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
        <!-- Bootstrap CDN Link -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
            crossorigin="anonymous"
        />
        <!-- Project Style Sheet -->
        <link rel="stylesheet" href="style.css" />
    
        <title>Team Profiles</title>
        </head>
        <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section>
        ${createEmployeeSection(name, id, email, role, info)}
        </section>
    
        <!-- Bootstrap JS CDN Link -->
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
            crossorigin="anonymous"
        ></script>
        </body>
    </html>
    `;
};

// <nav class="flex-row">
// <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
//   header.github
// }">GitHub</a>
// </nav>
// </div>
// </header>
// <main class="container my-5">
// // ${generateAbout(about)}
// // ${generateProjects(projects)}
// </main>
// <footer class="container text-center py-3">
// <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${
// header.name
// }</h3>
// </footer>
// </body>
// </html>
