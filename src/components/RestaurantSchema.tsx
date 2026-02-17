import { restaurant } from '@/data/restaurant'

export default function RestaurantSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: restaurant.name,
    description: restaurant.tagline,
    url: 'https://taverna.fodivps2.cloud',
    telephone: restaurant.phone,
    email: restaurant.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Spartaco, 4',
      addressLocality: 'Milano',
      addressRegion: 'MI',
      postalCode: '20154',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.4544,
      longitude: 9.1748,
    },
    servesCuisine: ['Italiana', 'Carni alla Brace', 'Toscana'],
    priceRange: '\u20AC\u20AC-\u20AC\u20AC\u20AC',
    image: 'https://taverna.fodivps2.cloud/images/Logo.png',
    sameAs: [restaurant.instagramUrl, restaurant.facebookUrl],
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
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
