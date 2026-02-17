import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://taverna.fodivps2.cloud'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/menu`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/prenota`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/galleria`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/chi-siamo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contatti`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/cookie`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}
