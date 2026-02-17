export const restaurant = {
  name: 'La Taverna degli Amici',
  tagline: 'Qualità, esperienza e cultura dell\'ospitalità',
  address: 'Via Spartaco, 4, 20154 Milano MI',
  phone: '+39 02 55194005',
  phoneDisplay: '02 5519 4005',
  whatsapp: '390255194005',
  email: 'info@latavernadegliamici.it',
  instagram: 'tavernadegliamici',
  instagramUrl: 'https://www.instagram.com/tavernadegliamici/',
  facebook: 'latavernadegliamicimilano',
  facebookUrl: 'https://www.facebook.com/latavernadegliamicimilano/',
  founding: 1997,
  openingHours: [
    { days: 'Lunedì - Sabato', lunch: '12:00 - 15:00', dinner: '19:30 - 02:00' },
    { days: 'Domenica', lunch: 'Chiuso', dinner: 'Chiuso' },
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5!2d9.1748!3d45.4544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI3JzE1LjgiTiA5wrAxMCcyOS4zIkU!5e0!3m2!1sit!2sit!4v1234567890',
  maxGuestsPerBooking: 12,
  bookingTimeSlots: {
    lunch: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30'],
    dinner: ['19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'],
  },
} as const
