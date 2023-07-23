export const formatCurrency = (amount: number, currency: string) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const formatUSD = (amount: number) => {
  return formatCurrency(amount, 'USD');
};

export const getPercentage = (amount: number, total: number) => {
  return (amount / total) * 100;
};

export const getDiscountPercentage = (
  originalPrice: number,
  salePrice: number
) => {
  return getPercentage(originalPrice - salePrice, originalPrice);
};
