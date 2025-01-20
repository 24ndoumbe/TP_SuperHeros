


// Application Vue.js pour afficher les détails d'un superhéros
Vue.createApp({
  data() {
    return {
      hero: null // Détails du superhéros
    };
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    if (id) {
      axios
        .get(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`)
        .then(response => {
          this.hero = response.data;
        })
        .catch(error => console.error('Erreur API :', error));
    }
  }
}).mount('#app');