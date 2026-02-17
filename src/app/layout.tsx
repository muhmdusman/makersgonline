// import { Rubik, Rajdhani } from 'next/font/google'
import "../styles/index.scss"


// const body = Rubik({
//   weight: ['300', '400', '500', '600', '700', '800', '900'],
//   subsets: ['latin'],
//   variable: '--body-font',
// });

// const heading = Rajdhani({
//   weight: ['300', '400', '500', '600', '700'],
//   subsets: ['latin'],
//   variable: '--heading-font',
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const isDev = process.env.NODE_ENV === 'development'

  // Structured Data for SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Makers Go Online",
    "url": "https://makersgoonline.com",
    "logo": "https://makersgoonline.com/assets/img/logo.webp",
    "description": "Leading IT solutions provider offering web design, development, SEO, app deployment, and ecommerce services in Pakistan.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "NSTP, NUST, H-12",
      "addressLocality": "Islamabad",
      "addressCountry": "PK"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-328-9566356",
      "contactType": "Customer Service",
      "email": "makersgonline@gmail.com",
      "areaServed": "PK",
      "availableLanguage": ["English", "Urdu"]
    },
    "sameAs": [
      "https://www.facebook.com/makersgoonline",
      "https://www.linkedin.com/company/makersgoonline",
      "https://twitter.com/makersgoonline"
    ]
  }

  return (
    <html lang="en" suppressHydrationWarning={isDev}>
      <head>
        <meta name="description" content="Makers Go Online - Leading IT solutions provider offering web design, development, SEO, app deployment, and ecommerce services in Pakistan." />
        <meta name="keywords" content="Makers Go Online, web development Pakistan, web design, SEO services, app development, ecommerce solutions, IT services Islamabad" />
        <meta name="author" content="Makers Go Online" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link rel="canonical" href="https://makersgoonline.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rajdhani:400,500,600,700|Poppins:400,500,600,700|Rubik:400,500,600,700|family=Inter:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body suppressHydrationWarning={true} className="sc5">
        {/* <body suppressHydrationWarning={true} className={`sc5 ${body.variable} ${heading.variable}`}> */}
        {children}
      </body>
    </html>
  )
}
