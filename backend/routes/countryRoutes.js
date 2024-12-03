import { Router } from 'express';
import { findCountryData } from '../helpers.js';

const countryRoutes = Router();

countryRoutes.get('/get-countries', async (req, res) => {
  const url = process.env.DN_API_URL + 'AvailableCountries';

  try {
    const response = await fetch(url);
    const countries = await response.json();

    res.status(200).send(countries);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

countryRoutes.get('/get-countries/:countryCode', async (req, res) => {
  const { countryCode } = req.params;
  
  try {
    const resCountry = await fetch(process.env.DN_API_URL + 'CountryInfo/' + countryCode);
    const country = await resCountry.json();

    const resPopulation = await fetch(process.env.CN_API_URL + 'population/');
    const population = await resPopulation.json();

    const resFlags = await fetch(process.env.CN_API_URL + 'flag/images/');
    const flags = await resFlags.json();

    const data = findCountryData(country, population, flags);

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
})

export default countryRoutes;