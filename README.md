
# Gestion des événements hybrides

Ce projet est une plateforme moderne permettant de gérer des événements hybrides (en ligne et en présentiel). 
L'application offre des fonctionnalités pour les organisateurs et les participants, facilitant la création, 
la gestion et l'inscription aux événements.

## Objectifs

- Permettre aux organisateurs de créer, modifier et supprimer des événements.
- Gérer les participants aux événements avec différentes options de participation.
- Offrir une interface utilisateur moderne et responsive.

## Fonctionnalités principales

1. **Gestion des événements** :
   - Création, modification et suppression d'événements.
   - Ajout des détails d'un événement : nom, description, date, mode (en ligne ou présentiel), lien.
   - Suivi des participants inscrits.

2. **Gestion des participants** :
   - Inscription des participants via un formulaire (nom, email, mode de participation).
   - Consultation des événements auxquels un participant est inscrit.

3. **Affichage des événements** :
   - Recherche et filtres sur la liste des événements.
   - Vue des détails d'un événement.

## Technologies utilisées

### Backend
- **Node.js** avec **Express.js** pour la gestion des API.
- **MongoDB** comme base de données.
- **Mongoose** pour la modélisation des données.

### Frontend
- **React.js** avec **Tailwind CSS** pour un design moderne.
- **Axios** pour les appels API.
- **Recharts** pour les statistiques des participants.

## Structure des modèles MongoDB

### Modèle `Event`
```javascript
{
  title: String,
  description: String,
  date: Date,
  mode: String, // "en ligne" ou "présentiel"
  lien: String,
  listeParticipants: [ObjectId]
}
```

### Modèle `Participant`
```javascript
{
  name: String,
  email: String,
  modeParticipation: String, // "individual" ou "group"
  eventRef: ObjectId
}
```

## API Endpoints

### Gestion des événements
- **POST** `/api/events` : Créer un événement.
- **GET** `/api/events` : Obtenir tous les événements.
- **GET** `/api/events/:id` : Obtenir les détails d'un événement.
- **PUT** `/api/events/:id` : Modifier un événement.
- **DELETE** `/api/events/:id` : Supprimer un événement.

### Gestion des participants
- **POST** `/api/participants` : Inscrire un participant à un événement.
- **GET** `/api/participants` : Obtenir tous les participants.

## Installation

### Prérequis
- Node.js (v14 ou plus)
- MongoDB

### Étapes
1. Clonez le dépôt :
   ```bash
   git clone <URL_DU_DEPOT>
   cd <NOM_DU_PROJET>
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
   - Créez un fichier `.env` :
     ```env
     PORT=9091
     DB_URL=mongodb://localhost:27017/db_event
     ```

4. Démarrez l'application :
   ```bash
   npm start
   ```

## Tests

- Utilisez **Postman** pour tester les API.
- Vérifiez manuellement les fonctionnalités de l'application.

## Contributions

Les contributions sont les bienvenues. Veuillez soumettre une pull request ou signaler des problèmes.

---

Développé par **Oussama HAJJIRI** et supervisé par **Pr. Abdelmajid BOUSSELHAM**.
