// eslint-disable-next-line no-unused-vars
const [_, news] = require(`./news.json`);

const clonedNews = { ...news };
clonedNews.component = { ...news.component };
clonedNews.data = { ...news.data };

clonedNews.component = {
  name: `NewsPreviewFancy`,
  url: `http://asdf`,
};
clonedNews.data.updated = `Sunday, 14. April 2019`;
clonedNews.data.headline = `${news.data.headline} [UPDATE]`;
clonedNews.data.img = {
  alt: ``,
  dominantColor: `#fff`,
  height: 200,
  width: 300,
  url: `http://asdf`,
};

module.exports = clonedNews;
