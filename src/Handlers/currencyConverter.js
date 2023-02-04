import axios from "axios";

function currencyConverter(from, to, amount, setState) {
  const options = {
    method: "GET",
    url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
    params: { have: from, want: to, amount: amount },
    headers: {
      "X-RapidAPI-Key": "334d0a9dc1msh6a5a4a0288659d1p127ae2jsnfada8c95af74",
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      const obj = {
        amount: response.data.new_amount,
        newCurrency: response.data.new_currency,
      };
      setState(obj);
    })
    .catch(function (error) {
      console.error(error);
    });
}
export default currencyConverter;
