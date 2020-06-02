const formatValue = (value: number): string =>
  new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default formatValue;
