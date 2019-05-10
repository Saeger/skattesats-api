// const puppeteer = require('puppeteer');
const fetch = require('node-fetch');
const logger = require('../logger');

const yearsService = async (req, res) => {
  const url = 'https://www.skatteverket.se/st-api/rest/v1/kommuner';
  let years;

  await fetch(url)
    .then(response => response.json())
    .then((json) => {
      years = {
        years: Object.keys(json)
      };

      logger.debug(json);

      res.json(years);
    });
};

module.exports = yearsService;
