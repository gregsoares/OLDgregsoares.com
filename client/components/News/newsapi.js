const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('011006ae2f7943a384746ede6819f216');

// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  category: 'politics',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);

  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

// To query everything
// You must include at least one q, source, or domain
newsapi.v2.everything({
  q: 'headlines',
  sources: 'bbc-news,the-verge',
  domains: 'bbc.co.uk,techcrunch.com',
  page: 2
}).then(response => {
  console.log(response.articles);

  /*for (let obj in response.articles.length) {
    //console.log(obj.title)
    console.log(obj[2]);

  }*/

  //console.log(titles);
  //console.log(response.articles.title[0])
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

// To query sources
// All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });