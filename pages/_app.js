import '../styles/globals.css';
import '../styles/index.css';
import '../styles/style.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    
      <Component {...pageProps} />
    </>
  );
}