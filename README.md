SuperHéros App
Description du projet
L'application SuperHéros App permet de consulter une liste de super-héros, d'afficher leurs détails (comme leur biographie, auteur, et superpouvoirs) et de rechercher des héros correspondant à des superpouvoirs spécifiques. Elle offre une interface interactive et conviviale pour les amateurs de super-héros.

Fonctionnalités
Liste des super-héros : Affiche tous les super-héros disponibles avec leur nom et une petite image.
Détails d'un super-héros : Permet de voir des informations détaillées sur un super-héros spécifique.
SuperPower Matcher : Trouvez des super-héros en fonction des niveaux d'intelligence, de force, et de pouvoir définis par l'utilisateur à l'aide de sliders.
Biographies et auteurs : Affiche la biographie complète des super-héros et leurs créateurs.
Prérequis
Navigateur moderne (Chrome, Firefox, Edge, etc.).
Serveur local (par exemple, XAMPP, WAMP, ou tout autre serveur HTTP).
Outils utilisés
Vue.js : Framework JavaScript pour la création de l'interface utilisateur.
Axios : Pour effectuer des requêtes API et charger les données des super-héros.
Bootstrap : Pour la mise en page et le design réactif.
SuperHero API : API utilisée pour récupérer les données des super-héros.
HTML5, CSS3, JavaScript : Langages de base pour la création du projet.
Installation
Clonez le dépôt GitHub :

bash
Copier
Modifier
git clone https://github.com/votre-utilisateur/superheros-app.git
Placez le dossier dans le répertoire public de votre serveur local (exemple : C:/xampp/htdocs/).

Démarrez votre serveur local.

Ouvrez un navigateur et accédez à l'application via :

ruby
Copier
Modifier
http://localhost/superheros-app/super.html
Instructions d'utilisation
Naviguer :

Utilisez la barre de navigation pour accéder aux différentes pages :
Liste des super-héros.
Détails d'un super-héros.
SuperPower Matcher.
Auteur des super-héros.
SuperPower Matcher :

Réglez les sliders pour définir les niveaux minimums de superpouvoirs (intelligence, force, pouvoir).
Cliquez sur le bouton "Trouver des Super-héros" pour afficher les résultats correspondants.
Biographies :

Consultez la page Auteur pour voir la biographie et l'auteur des super-héros.
Structure du projet
super.html : Page principale avec la liste des super-héros.
détail.html : Page d'informations détaillées sur un super-héros.
superMatch.html : Page du SuperPower Matcher.
auteur.html : Page affichant les biographies des super-héros.
CSS et scripts :
main.css : Styles personnalisés.
scripts.js : Comportements et logique du projet.
Suggestions d'amélioration
Ajouter un système de favoris pour permettre aux utilisateurs de sauvegarder leurs super-héros préférés.
Permettre des recherches avancées avec plusieurs critères combinés.
Optimiser l'affichage pour une expérience plus fluide sur mobile.
