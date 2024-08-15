 // Fetch data from the API
 fetch('http://164.92.244.59:3000/teamMembersClient/get?page=1&limit=2')
 .then(response => response.json())
 .then(data => {
     const teamsContainer = document.getElementById('teams');
     teamsContainer.innerHTML = ''; 

     const results = data.results;

     results.forEach(result => {
         const card = document.createElement('div');
         card.className = 'card1';

         card.innerHTML = `
             <div class="image">
                 <img src="${result.image}" alt="">
             </div>
             <div class="texts">
                 <h3>${result.name}</h3>
                  <p style="padding-top: 10px;">${result.track}</p>
                 <p class="paragraph2">${result.description}</p>
             </div>
             <div class="icons">
                 <a href="${result.facebook}">
                     <i class="fa-brands fa-facebook fa-xl" style="color: #050505;"></i>
                 </a>
                 <a href="${result.linkedin}">
                     <i class="fa-brands fa-linkedin fa-xl" style="color: #000000;"></i>
                 </a>
                 ${result.behanceOrGithub ? `<a href="${result.behanceOrGithub}">
                     <i class="fa-brands fa-github fa-xl" style="color: #050505;"></i>
                 </a>` : ''}
             </div>
         `;

         teamsContainer.appendChild(card);
     });
 })
 .catch(error => console.error('Error fetching data:', error));