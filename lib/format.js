const currencyBRL = (value) => {
  const formattedValue = value.toLocaleString(
    'pt-BR', 
    { style: 'currency', currency: 'BRL' }
  );

    return formattedValue;
};

module.exports = currencyBRL;