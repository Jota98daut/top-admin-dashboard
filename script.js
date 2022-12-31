const projectsDiv = document.querySelector('.projects');

const githubButton = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" /></svg>';
const starButton = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" /></svg>';
const viewButton = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" /></svg>';
const shareButton = '<svg style="width:24px;height:24px" viewBox="0 0 24 24"><path fill="currentColor" d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" /></svg>'

const projects = [
  {name: "Battlefield", description: "A dynamic battleship game with 4 different variants: Terrestrial, Aerial, Water, and Underwater. Writen in Python Flask and React.", link: "https://github.com/proyecto-unrc-2022/Battlefield"},
  {name: "Prode", description: "Sports prediction web app writen in Ruby Sinatra.", link: "https://github.com/Jota98daut/Prode-AYDS2022-DRR"},
  {name: "AI 2048 Game", description: "Neural Network trained by a minimax algorithm to play the popular game '2048'", link: "https://github.com/disenho-de-algoritmos-unrc-2022/trabajo-practico-2-d-autilio-rojo-rossi"},
  {name: "Landing Page", description: "Project: Landing Page for The Odin Project's Foundations", link: "https://github.com/Jota98daut/top-landing-page"},
  {name: "Algorithm Design assignment", description: "University assignment writen in Java to evaluate programming techniques such as Dynamic Programming.", link: "https://github.com/disenho-de-algoritmos-unrc-2022/trabajo-practico-1-d-autilio-rojo-rossi"},
  {name: "Admin Dashboard", description: "Project: Admin Dashboard for The Odin Project's Intermediate HTML and CSS Course.", link: "https://github.com/Jota98daut/top-admin-dashboard"},
];

const announcements = [
  {title: "Site Maintenance", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis turpis ac leo posuere rutrum quis a quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vitae est condimentum, pellentesque urna ut, scelerisque magna."},
  {title: "Community Share Day", content: "Sed eget neque tempor, laoreet arcu id, vestibulum sapien. Nulla mollis mi non massa scelerisque pretium. Fusce dignissim aliquam nunc ac lobortis."},
  {title: "Update privacy policy", content: "Aliquam venenatis, libero consectetur iaculis eleifend, lectus tellus euismod nibh, eget volutpat nunc diam in neque. Integer eleifend ex quis fringilla dictum. Vivamus mi est, facilisis sit amet venenatis eget, porta a ex."},
];

projects.forEach(createCard);

function createCard(project) {
  /*
   *  <div class="card">
   *    <h1>Name</h1>
   *    <p>Description</p>
   *    <div class="card-buttons">
   *      <button><svg></button>
   *      <button><svg></button>
   *      <button><svg></button>
   *    </div>
   */
  let card = document.createElement('div');
  card.classList.add('card');

  let name = document.createElement('h1');
  name.textContent = project.name;
  card.appendChild(name);

  let description = document.createElement('p');
  description.textContent = project.description;
  card.appendChild(description);

  let cardButtons = document.createElement('div');
  cardButtons.classList.add('card-buttons'); 
  [githubButton, starButton, viewButton, shareButton].forEach(buttonSVG => {
    let button = document.createElement('button');
    button.innerHTML = buttonSVG;
    cardButtons.appendChild(button);
  });
  card.appendChild(cardButtons);

  projectsDiv.appendChild(card);
}
