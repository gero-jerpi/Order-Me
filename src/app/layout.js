import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  favicon: '/logo.ico'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">

      <head>
        <link rel="icon" href="/logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>OrderMe</title>
        <meta name="description" content= "OrderMe transformará tu experiencia en restaurantes, facilita a tus clientes la realización de pedidos desde sus teléfonos escaneando un código QR,  Olvídate de esperar al mozo, la cuenta o recibir la orden incorrecta." />
      </head>

      <body className={inter.className}>

        {children}

      </body>

    </html>
  )
}
