<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>offres_emploi</title>
</head>
<body>

<h1>offres_emploi. disponibles</h1>

<div id="offresContainer"></div>

<button id="btnSearch">Voir les offres pour Travailleurs</button>

<script>
    // SIMULATION DE DONNÉES (En attendant une base de données)
    const offresEmploi = [
        { id: 1, titre: "Maçon expérimenté", entreprise: "Construction Moderne SARL", region: "Dakar", salaire: "200,000 FCFA" },
        { id: 2, titre: "Technicien Agricole", entreprise: "Fermes du Sine", region: "Thiès", salaire: "150,000 FCFA" },
        { id: 3, titre: "Serveur polyvalent", entreprise: "Restaurant Le Gourmet", region: "Dakar", salaire: "120,000 FCFA" },
        { id: 4, titre: "Chauffeur de camion", entreprise: "Transport Express", region: "Saint-Louis", salaire: "180,000 FCFA" },
        { id: 5, titre: "Électricien qualifié", entreprise: "Énergie Plus", region: "Dakar", salaire: "220,000 FCFA" }
    ];

    // Fonction pour afficher les offres dynamiquement
    function chargerOffres() {
        const container = document.getElementById('offresContainer');
        container.innerHTML = ''; // Vide le conteneur avant d'ajouter

        offresEmploi.forEach(offre => {
            const div = document.createElement('div');
            div.textContent = `${offre.titre} chez ${offre.entreprise} à ${offre.region} - ${offre.salaire}`;
            container.appendChild(div);
        });
    }

    // Redirection au clic sur le bouton
    document.getElementById('btnSearch').addEventListener('click', () => {
        localStorage.setItem('userRole', 'travailleur');
        // Corriger la redirection en enlevant espace et #
        window.location.href = "offres_emploi.html";
        alert("Redirection vers les offres pour Travailleurs...");
    });

    window.onload = chargerOffres;
</script>

</body>
</html>


