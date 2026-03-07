import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata = {
  title: 'imArslansaas | SaaS Frontend Architect - High-Performance Landing Pages & Dashboards',
  description: 'Muhammad Arslan - SaaS Frontend Architect specializing in lightning-fast landing pages, scalable analytics dashboards, and fractional frontend engineering for founders scaling to $10k+ MRR.',
  // icon: '/icon.png',
  icons: {
    icon: '/icon.png', // Yeh public/icon.png ko point karega
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  keywords: ['SaaS', 'Frontend Developer', 'Landing Pages', 'Analytics Dashboards', 'React', 'Next.js', 'Conversion Optimization'],
  authors: [{ name: 'Muhammad Arslan' }],
  creator: 'Muhammad Arslan',
  openGraph: {
    title: 'imArslansaas | SaaS Frontend Architect',
    description: 'High-performance frontends that help SaaS founders scale to $10k+ MRR',
    url: 'https://imarslansaas.com',
    siteName: 'imArslansaas',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'imArslansaas | SaaS Frontend Architect',
    description: 'High-performance frontends that help SaaS founders scale to $10k+ MRR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: '#1a1625',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics placeholder - replace GA_MEASUREMENT_ID with your ID
              // window.dataLayer = window.dataLayer || [];
              // function gtag(){dataLayer.push(arguments);}
              // gtag('js', new Date());
              // gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
