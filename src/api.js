/* eslint-disable */
const axios = require('axios').default;

export default {
  getNews() {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=endangered%20species&from=2019-09-09&sortBy=publishedAt&apiKey=MyApiKey'
      )
      .then(response => {
        const news = response.data.articles;
        localStorage.news = JSON.stringify(news);
      });
  },

  getAnimal() {
    axios.get('https://some-random-api.ml/img/dog').then(response => {
      const animal = response.data.link;
      localStorage.animal = JSON.stringify(animal);
    });
  }
};
