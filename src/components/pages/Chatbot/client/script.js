/*connect this script to the OpenAI api with intellegent answers */
import bot from '../assets/bot.svg' ; /*importation de icon*/
import user from '../assets/user.svg';

const form = document.querySelector('form');/*only form in html */
const chatContainer = document.querySelector('#chat_container');

let loadInterval;

function loader(element) { /*créer une animation de chargement en ajoutant continuellement des points au contenu textuel de l'élément donné */
    element.textContent = ''; /*définir le contenu textuel de l'élément sur un espace vide en utilisant la propriété "textcontent"*/
    
    loadInterval = setInterval(() => { /*crée une fonction setInterval qui ajoutera un point toutes les 300 millisecondes au contenu textuel de l'élément en utilisant une fonction fléchée*/
      element.textContent += '.' ;
      
      if (element.textContent === '....' ) {
        element.textContent = '';
      }


    }, 300) /* repeate every 300 millisecondes*/
}

function typeText(element, text){ /*Cette fonction permet de taper du texte dans un élément HTML spécifié  ("text" IA will return) */
  let index = 0 ;
  let interval = setInterval (() => { /* setInterval  appelle une fonction anonyme toutes les 20 millisecondes */
    if(index < text.length){ /* (still tapping )verifier si index infer alors elle ajoute le caractère à la position de l'index dans la propriété "innerHTML" de l'élément spécifié, puis incrémente l'index. */
      element.innerHTML += text.charAt(index);/*propriété innerHTML permet de modifier le contenu HTML de l'élément*/
      index++;
    } else { /*  Sinon, l'intervalle est effacé avec la méthode "clearInterval"*/
      clearInterval(interval);
    }
  },20)
}
/*generate a unique id for every single message */
function generateUniqueId(){
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}
function chatStripe (isAi, value, uniqueId){ /*  crée une interface de chat avec une image représentant l'émetteur du message, le contenu du message et un identifiant unique pour chaque message. La classe "ai" est ajoutée à la balise parente si "isAi" est vrai, pour indiquer que le message est envoyer par un bot*/
  return (
    `
       <div class="wrapper ${isAi && 'ai'}">
         <div class="chat">
           <div class="profile">
             <img
               src="${isAi ? bot : user}"
               alt="${isAi ? 'bot' : 'user'}"      
              />
            </div>
            <div class="mssage" id=${uniqueId}>${value}</div>  
           </div>
         </div>    
    `
    //ligne 50 khtr mnjmtch n7ot comm ghady : /*Si "isAi" est vrai, l'image sera celle d'un bot. Sinon, elle sera celle d'un utilisateur*/
    // /*le contenu du message défini par l'argument "value".*/ ligne 53
  )
}
const handleSubmit = async (e) => { //une fonction asynchrone qui est appelée lorsqu'un formulaire est soumis. Elle prend un événement e en tant que paramètre, qui est déclenché lors de la soumission du formulaire
  e.preventDefault(); //empêche le comportement par défaut de l'événement de se produire. Dans ce cas, cela empêche la page de se recharger après la soumission du formulaire.

  const data = new FormData(form); // récupérer les données du formulaire soumis. Ces données sont stockées dans la variable data
  //user's chatstripe
  chatContainer.innerHTML += chatStripe(false, data.get('prompt')); //ajoute un élément HTML  a la variable chatContainer avec le texte saisi par l'utilisateur (qui est récupéré en utilisant data.get('prompt')
  // utilise false ce qui signifie que l'élément ajouté est un message de l'utilisateur.
  form.reset(); // la méthode reset  efface le texte saisi par l'utilisateur.
  
  //bot's chatsripe
  const uniqueId = generateUniqueId();
  chatContainer.innerHTML += chatStripe(true, " ",uniqueId); //l'élément ajouté est un message du bot. Le texte du message est un espace vide, car le bot n'a pas encore généré de réponse

  chatContainer.scrollTop = chatContainer.scrollHeight ; // défiler le conteneur de chat vers le bas afin que le message le plus récent soit toujours visible à l'écran.

  const messageDiv = document.getElementById(uniqueId);

  loader(messageDiv); // crée une animation de chargement pour simuler le temps de réponse du bot avant d'ajouter sa réponse au chat.
 // fetch data from server -> bot's response
 const response = await fetch('http://localhost:5000', { //la fonction "fetch", qui est une fonction JavaScript intégrée qui permet d'envoyer des requêtes HTTP.
    method: 'POST',                              // cette methode permet d'envoyer une requete POST aun serveur http... qui est contenir les donnees de l'utilisateur 
    headers: {
       'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      prompt: data.get('prompt')
    })
 })
 clearInterval(loadInterval);
 messageDiv.innerHTML= '';

 if(response.ok) {//la requête est réussie, le serveur renvoie une réponse JSON contenant la réponse générée par l'API OpenAI
  const data = await response.json();
  const parsedData = data.bot.trim();

  typeText(messageDiv, parsedData); // Le code JavaScript extrait la réponse de cette réponse JSON et la fait défiler sur l'écran en utilisant la fonction "typeText".
 } else { //messageDiv dans lequel le text sera afficher ili houwe parsedData
  const err = await response.text();

  messageDiv.innerHTML = "Somthing went wrong";

  alert(err);

 }
}
form.addEventListener('submit',handleSubmit); //Lorsque l'utilisateur soumet le formulaire en cliquant sur le bouton "Envoyer", l'événement de soumission du formulaire est déclenché et la fonction handleSubmit est exécutée.
form.addEventListener('keyup',(e) => { //l'événement "keyup" est un événement clavier JavaScript qui permet de détecter lorsque l'utilisateur relâche une touche du clavier signifie simplement cesser d'appuyer sur une touche de son clavier une fonction fléchée anonyme qui est déclenchée chaque fois que l'utilisateur relâche une touche .
  if (e.keyCode === 13) { //Le code 13 fait référence à la touche "Entrée" sur le clavier vérifiant si la valeur de la propriété keyCode de l'événement "keyup" est égale à 13.
    handleSubmit(e); 
  }
})

