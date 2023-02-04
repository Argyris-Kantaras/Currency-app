import axios from "axios";

const latestRates = function (setState, setLoading) {
  let listCurrencies = [];
  const options = {
    method: "GET",
    url: "https://currencyscoop.p.rapidapi.com/latest",
    headers: {
      "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      "X-RapidAPI-Host": "currencyscoop.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      listCurrencies = Object.entries(response.data.response.rates);

      //   listCurrencies.push(currency);

      setLoading(false);
      setState(listCurrencies);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default latestRates;
