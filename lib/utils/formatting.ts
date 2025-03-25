export const formatPrice = (price: number, withSymbol: boolean = true) => {
  const formattedPrice = price.toFixed(2).replace('.', ',');
  return withSymbol ? `${formattedPrice}€` : formattedPrice;
};

export const formatMonthlyPrice = (price: number, duration: number) => {
  const monthly = Math.round((price / duration) * 100) / 100;
  return formatPrice(monthly);
};

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatRoomType = (roomType: string) => {
  return roomType.replace(/-/g, ' ');
};