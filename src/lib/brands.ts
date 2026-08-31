/* Single source of truth — used by the homepage Brand coverage section
   and the /brands page, so the two can never drift apart. */
export const coverage = [
  {
    number: '01',
    region: 'Japanese',
    brands: ['Mazda', 'Mitsubishi', 'Toyota', 'Nissan', 'Subaru'],
  },
  { number: '02', region: 'Korean', brands: ['Hyundai', 'Kia', 'Genesis'] },
  {
    number: '03',
    region: 'American',
    brands: ['Jeep', 'Dodge', 'Chrysler', 'Ford', 'Mopar'],
  },
  { number: '04', region: 'European', brands: ['Renault', 'Peugeot'] },
  {
    number: '05',
    region: 'Chinese',
    brands: ['MG', 'BYD', 'Geely', 'Omoda', 'Jaecoo'],
  },
];

/* Homepage "Brands we supply" panel — core lines shown large, the rest
   listed as available on request. */
export const coreBrands = [
  { number: '01', name: 'Mazda' },
  { number: '02', name: 'Kia' },
  { number: '03', name: 'Hyundai' },
  { number: '04', name: 'Mitsubishi' },
  { number: '05', name: 'Mopar' },
];

export const otherBrands = ['Toyota', 'Nissan', 'MG', 'BYD', 'Geely', 'GWM'];
