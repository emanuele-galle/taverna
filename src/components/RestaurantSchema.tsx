import { restaurant } from '@/data/restaurant'

export default function RestaurantSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://latavernadegliamici.it'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    description: restaurant.tagline,
    url: siteUrl,
    telephone: restaurant.phone,
    email: restaurant.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Spartaco, 4',
      addressLocality: 'Milano',
      addressRegion: 'MI',
      postalCode: '20135',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.4487,
      longitude: 9.2075,
    },
    servesCuisine: ['Italiana', 'Carni alla Brace', 'Grill'],
    priceRange: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    image: [
      `${siteUrl}/images/hero/hero-fallback.jpg`,
      `${siteUrl}/images/Logo.png`,
      `${siteUrl}/images/gallery/piatti/bistecca-alla-griglia.jpg`,
      `${siteUrl}/images/gallery/ambiente/sala-principale.jpg`,
    ],
    sameAs: [restaurant.instagramUrl, restaurant.facebookUrl],
    acceptsReservations: true,
    hasMenu: `${siteUrl}/menu`,
    founder: {
      '@type': 'Person',
      name: 'Ernesto Notaro',
    },
    foundingDate: '1997',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '12:00',
        closes: '15:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '19:30',
        closes: '02:00',
      },
    ],
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'EUR',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Private dining rooms', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Air conditioning', value: true },
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/prenota`,
        actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
      },
      result: {
        '@type': 'Reservation',
        name: 'Prenotazione tavolo',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
