/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  
ma anche realizzare qualcosa di creativo!!!*/

/*
Wayne Barnett	Founder & CEO	wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	barbara-ramos-graphic-designer.jpg*/

//? costuire l'array di oggetti  */

const team = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'img/wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'img/angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'img/walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager',
    foto: 'img/angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'img/scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'img/barbara-ramos-graphic-designer.jpg',
  },
];

console.log(team);


 //
const mainParent = document.querySelector("section");
  const sectionInfo = document.querySelector("main>section>article");
for (let i = 0; i < team.length; i++) {
    
  sectionInfo.innerHTML += 
  `
  
  <div class="card row mb-3 border-0 " >
  <img src="${team[i].foto}" class="card-img-top p-0 " alt="${team[i].nome}">
  <div class="card-body text-center">
    <h5 class="card-title">${team[i].nome}</h5>
    <p class="card-text">${team[i].ruolo}</p>
    
  </div>
</div>
  
    `
  mainParent.appendChild(sectionInfo);
}
 /*<img src="${team[i].foto}" alt="${team[i].nome}"></img>
    <p>${team[i].nome}</p>
    <p>${team[i].ruolo}</p>*/