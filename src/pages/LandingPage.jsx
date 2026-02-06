import Navber from '../components/layout/Navber';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
  return (
    <>
      <div>
        <Navber />
        <Hero />
        <Features />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
