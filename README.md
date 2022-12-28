
# Blogging application - ECE Webtech project

*presentation, introduction, ...*

## Production

- Vercel URL: https://ece-web-app-desevelinges-menaud-69njurx5p-oscarui.vercel.app/
- Supabase project URL: https://app.supabase.com/project/ffcurvlfawjgbaatfpbc

## Usage

*how to start and use the application, run the tests, ...*

* Clone this repository, from your local machine:
  ```
  git clone ...
  cd ...
  ```
* Start the the application
  ```bash
  cd app
  # Install dependencies (use yarn or npm)
  npm install
  npm run build
  npm start
  ```
* Start Supabase
  ```bash
  cd supabase
  docker compose up ...
  ```
* sign in or log in to the app using email and password (issues with oauth providers outside localhost, on the hosted version of the website)

## Authors

Oscar de Sevelinges [email](mailto:oscar.desevelinges@edu.ece.fr)  
Romain Menaud [email](mailto:romain.menaud@edu.ece.fr)

## Tasks
  
**Project management:**

* Naming convention   
  2/2
* Project structure   
  2/2 Respect du template fourni
* Git   
  2/2 Utilisation du versioning avec git (commit, branches, pull...)
* Code quality   
  4/4 Respect des conventions d'écriture (indentation, fonctions...)
* Design, UX, and content   
  2/4 Design et expérince utilisateur basiques

**Application development:**

* Home page   
  *place your graduation and comments*
* Login and profile page   
  2/4 possibilité de se log avec email ou git (que en localhost pour git) et affichage du nom et du pseudo de l'utilisateur, avec possibilité de les update sur la page du profil
* New articles creation   
  6/6 possibilité d'ajouter un article si l'utilisateur est log. L'article sera ajouté à la bdd et la page sera refresh avec le nouvel article
* New comment creation   
  4/4 pareil que pour la création d'un nouvel article, mais sur la page de l'article avec la route dynamique (ex : /articles/:id)
* Resource access control   
  x (problème d'accès à la bdd si le RLS est activé)
* Article modification   
  x
* Article removal   
  2/2 possibilité pour l'auteur de supprimer son article
* Comment modification   
  x
* Comment removal   
  2/2 possibilité pour l'auteur de supprimer son commentaire
* Account settings   
  3/4 possibilité de modifier les informations de l'utilisateur (nom et pseudo) et d'update la bdd
* WYSIWYG integration   
  x
* Gravatar integration   
  x
* Light/dark theme   
  1/2 Bouton pour l'activer/désactiver (ne s'applique pas sur les parties des pages qui nécessitent de scroll down)
* Accent color selection   
  x

## Bonus

* Task title   
  *place your graduation and comments*
