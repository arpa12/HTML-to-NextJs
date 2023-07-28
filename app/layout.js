import './styles.css'
import { Inter } from 'next/font/google'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
config.autoAddCss = true;

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WOODY - Carpenter website template'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
