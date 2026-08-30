export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{5})(\d{5})/, '$1 $2');
};

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const isMobile = () => window.innerWidth < 768;

export const isTablet = () => window.innerWidth >= 768 && window.innerWidth < 1024;

export const isDesktop = () => window.innerWidth >= 1024;
