import '../styles/globals.css'



function MyApp({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}


export async function getInitialProps({ locale }) {
  console.log("hola mundo locale")
  console.log(locale);
  return {
    props: { }, // will be passed to the page component as props
  }
}


export default MyApp
