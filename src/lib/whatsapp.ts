const PHONE = "2348125901301";

export const getWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${PHONE}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getOrderMessage = (product: string, quantity: string, location: string) => {
  return `Hello, I'd like to order ${quantity} of ${product} to ${location}.`;
};
