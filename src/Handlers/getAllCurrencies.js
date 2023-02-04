import axios from "axios";
const getAllCurrencies = function (setState) {
  const allCurrenciesArray = [];
  const options = {
    method: "GET",
    url: "https://currencyscoop.p.rapidapi.com/currencies",
    headers: {
      "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      "X-RapidAPI-Host": "currencyscoop.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      for (const key in response.data.response.fiats) {
        const currency = {
          id: key,
          ...response.data.response.fiats[key],
        };
        allCurrenciesArray.push(currency);
      }

      setState(allCurrenciesArray);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export default getAllCurrencies;
