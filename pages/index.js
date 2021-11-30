import Head from 'next/head';
import Nav from '../components/Nav';
import Order from '../components/Order';
import Reviews from '../components/Reviews';
import Foods from '../components/Foods';
import Step from '../components/Step';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-base-200">
      <Head>
        <title>Spicy Foods</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </Head>
    <Nav/>
    <Foods/>
    <Reviews/>
    <Step/>
    <Order/>
    <Footer/>
    </div>
  )
}
