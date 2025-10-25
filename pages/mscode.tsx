import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { CartProvider } from '@/context/CartContext'
import Layout from '@/components/layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  console.log('Rendering App component');
  return (
    <CartProvider>
      <Layout>
        {process.env.NODE_ENV==='development' &&(
          <div style={{ backgroundColor:'lightgray',padding: '10px' }}>
            Development MOde
            </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}