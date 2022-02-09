import { NextPage } from 'next';
import Head from 'next/head'
import AboutUs from '../components/aboutUs';

const About: NextPage = () => {
  return (
      <>
      <Head>
        <title>About Us</title>
      </Head>
      <main>
          <section>
            <h1>About Us</h1>
          <AboutUs/>
          </section>
      </main>
      </>
  );
};

export default About;
