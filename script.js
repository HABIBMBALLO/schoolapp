 
//creation tableau vide
var apprenants = []


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const prenom = document.getElementById('prenom');
const niveau = document.getElementById('niveau');
// const image = document.getElementById('avatar');
// const biographie = document.getElementById('biographie');
const container = document.querySelector('#container');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
	const newApprenant = {
		prenom: prenom.value,
		usename: username.value,
		// image: image.value,
		// biographie: biographie.value,
		niveau: niveau.value,
	}
	createCard(newApprenant)
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const prenomValue = prenom.value.trim();
	const emailValue = email.value.trim();
	
	
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(prenomValue === '') {
		setErrorFor(prenom, 'Username cannot be blank');
	} else {
		setSuccessFor(prenom);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}


}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}




//ajout dans tableau 
apprenants.push(newApprenant)

// affichage de la carte de lapprenant
createCard(newApprenant)

function createCard (apprenant) {
	let id = Math.random().toString()
	container.insertAdjacentHTML(
        "beforeend",
       `
        <div class="col-6">
        <div class="card mb-3 shadow-sm p-3 mb-5 bg-body rounded" style="max-width: 540px;" id="${id}">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="img/lomba.jpg" class="img-fluid rounded-start"  alt="..." style="border-radius: 23rem;">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title"> ${apprenant.prenom}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			  <p class="card-text"><small class="text-muted">Niveau :</small></p>
			  <p class="card-text"><small class="text-muted">${apprenant.niveau}</small></p>
			  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
			  <button class="btn btn-danger me-md-2 btn-supprimer" type="button" >Supprimer</button>
			  <button class="btn btn-warning" type="button">Modifier</button>
			  </div>
            </div>
          </div>
        </div>
      </div>	
       `
	   
      )
// suppression des cartes 
	  const Card = document.getElementById(`${id}`);
	  const supprimerCard = Card.querySelector(".btn-supprimer")
		supprimerCard.addEventListener('click', (e) => {
			e.preventDefault()

			Card.remove()
		})

// modifier cartes apres un click sur ce bouton 
// const newDiv = document.getElementById('div');
// const newButtons = {
// 	supprimer: document.createElement('input'),
// 	Modifier: document.createElement('input'),
// }
}





