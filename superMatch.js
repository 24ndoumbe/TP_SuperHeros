
Vue.createApp({
    data() {
      return {
        superheros: [],              // Liste complète des superhéros
        powerLevels: {               // Niveaux minimums pour chaque superpouvoir
          intelligence: 50,
          strength: 50,
          power: 50,
        },
        matchingHeroes: [],          // Super-héros correspondant aux critères
        heroesLoaded: false,         // Indicateur que les données des héros ont été chargées
      };
    },
    methods: {
      findHeroes() {
        // Filtrer les super-héros selon les niveaux minimums définis
        this.matchingHeroes = this.superheros.filter(hero => {
          return (
            hero.powerstats.intelligence >= this.powerLevels.intelligence &&
            hero.powerstats.strength >= this.powerLevels.strength &&
            hero.powerstats.power >= this.powerLevels.power
          );
        });
      },
    },
    mounted() {
      // Charger les données des super-héros depuis l'API
      axios
        .get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
        .then(response => {
          this.superheros = response.data;
          this.heroesLoaded = true;
        })
        .catch(error => console.error('Erreur API :', error));
    },
  }).mount('#app');