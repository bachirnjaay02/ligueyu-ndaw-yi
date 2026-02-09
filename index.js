// SIMULATION DE DONNÉES (En attendant une base de données)
const offresEmploi = [
    { id: 1, titre: "Maçon expérimenté", entreprise: "Construction Moderne SARL", region: "Dakar", salaire: "200,000 FCFA" },
    { id: 2, titre: "Technicien Agricole", entreprise: "Fermes du Sine", region: "Thiès", salaire: "150,000 FCFA" },
    { id: 3, titre: "Serveur polyvalent", entreprise: "Restaurant Le Gourmet", region: "Dakar", salaire: "120,000 FCFA" },
    { id: 4, titre: "Chauffeur de camion", entreprise: "Transport Express", region: "Saint-Louis", salaire: "180,000 FCFA" },
    { id: 5, titre: "Électricien qualifié", entreprise: "Énergie Plus", region: "Dakar", salaire: "220,000 FCFA" }
];

// UTILISATION DU DOM : Rediriger au clic
document.getElementById('btnSearch').addEventListener('click', () => {
    // On enregistre une préférence dans le Local Storage
    localStorage.setItem('userRole', 'travailleur');
    
    // On simule une navigation
    window.location.href = "#offre d'emploi.html"; 
    alert("Redirection vers les offres pour Travailleurs...");
});

// FONCTION POUR AFFICHER LES OFFRES DYNAMIQUEMENT
function chargerOffres() {
    console.log("Chargement des " + offresEmploi.length + " offres disponibles...");
    // Ici vous utiliseriez document.createElement pour remplir votre page
}

window.onload = chargerOffres;

// Fonction pour sauvegarder le profil travailleur dans le Local Storage
function sauvegarderProfil(event) {
    event.preventDefault(); // Empêche la page de se recharger

    const profil = {
        nom: document.getElementById('nomComplet').value,
        telephone: document.getElementById('tel').value,
        secteur: document.getElementById('secteurSelect').value,
        dateCreation: new Date().toLocaleDateString()
    };

    // Stockage local
    localStorage.setItem('monProfilXEUYOU', JSON.stringify(profil));
    
    alert("Profil créé avec succès pour " + profil.nom + " !");
    window.location.href = "page-confirmation.html";
}

// Exemple de filtre dynamique sur le DOM
const searchInput = document.querySelector('input[placeholder*="Rechercher"]');
if(searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const terme = e.target.value.toLowerCase();
        const offres = document.querySelectorAll('.item-offre');
        
        offres.forEach(offre => {
            const titre = offre.querySelector('h5').textContent.toLowerCase();
            offre.style.display = titre.includes(terme) ? 'block' : 'none';
        });
    });
}


// formulaire de création de profil travailleur
document.getElementById('travailleur').addEventListener('submit', function (event) {
        const form = event.target;

        // Empêche l'envoi si le formulaire est invalide
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // Simulation d'envoi de données
            const formData = {
                name: document.getElementById('fullName').value,
                phone: document.getElementById('phone').value,
                sector: document.getElementById('sector').value
            };
            console.log("Données envoyées :", formData);
            alert("Profil en cours de création pour " + formData.name);
        }

        form.classList.add('was-validated');
    }, false);

    // formulaire de création de profil employeur
    document.getElementById('employeur').addEventListener('submit', function (event) {
        const form = event.target;
        // Empêche l'envoi si le formulaire est invalide
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            // Simulation d'envoi de données    
            const formData = {
                companyName: document.getElementById('companyName').value,
                contactPhone: document.getElementById('contactPhone').value,
                industry: document.getElementById('industry').value
            };
            console.log("Données envoyées :", formData);
            alert("Profil en cours de création pour " + formData.companyName);
        }
        form.classList.add('was-validated');
    }
    , false);   
    


    // Script de validation Bootstrap simple
    (() => {
      'use strict'
      const forms = document.querySelectorAll('.needs-validation')
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
    })();