
    const app = Vue.createApp({
      data() {
        return {
          superheros: [],
          searchQuery: '',
        };
      },
      computed: {
        // Filtrer les superhéros en fonction de la recherche
        filteredSuperheros() {
          return this.superheros.filter(hero =>
            hero.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        },
      },
      methods: {
        // Naviguer vers la page de détail
        goToDetail(id) {
          window.location.href = `détail.html?id=${id}`;
        },
      },
      mounted() {
        // Récupérer les données des superhéros
        axios
          .get(
            'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
          )
          .then(response => {
            this.superheros = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
    });

    app.mount('#app');
  

    