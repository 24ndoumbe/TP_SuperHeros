
// Charger la navbar
   /* fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navbar-placeholder').innerHTML = data;
      })
      .catch(error => console.error('Erreur Navbar :', error));*/

    // Application Vue.js pour afficher les biographies des super-héros
    Vue.createApp({
        data() {
          return {
            superheros: [],  // Liste des super-héros
            superherosLoaded: false  // Indicateur que les données sont chargées
          };
        },
        mounted() {
          // Charger les super-héros depuis l'API
          axios
            .get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then(response => {
              this.superheros = response.data;  // Stocker les super-héros récupérés
              this.superherosLoaded = true;  // Marquer que les super-héros sont chargés
            })
            .catch(error => console.error('Erreur API :', error));
        }
      }).mount('#app');