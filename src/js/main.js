"use strict";



console.log(`Dear recruiter, I know this is not a killer code, but I am the person that learns a lot.`);

const list = document.querySelector('.projects-list--js');

fetch('https://api.github.com/users/JMPaulus/repos?sort=updated&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const { description, homepage, html_url, name } = repo;
      console.log(repo);
      list.innerHTML += `
        <li class="project">
          <div class="project__container">
          <img class="project__logo" src="assets/img/GitHub middle.png" alt="glasses counter">
          <h3 class="project__title">${name}</h3>
          ${
            description ? `<p class="project__description">${description}</p>`: 'No description'
           }
          </div>
          <div class="project__footer">
          ${
        homepage ? `<a class="project__link project__link--demo" href="${homepage}" "target="_blank" rel="nofollow noreferrer" title="demo: ${name}">Demo</a>` : ''
          }
          
          <a class="project__link project__link--code" href="${html_url}"target="_blank" rel="nofollow noreferrer" title="code: ${name}">Github</a> </div>
          </li>
     `;
    }
  })
  .catch(err => {
    console.log(err);
  })
