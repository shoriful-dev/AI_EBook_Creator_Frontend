import Navber from '../components/layout/Navber';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import Testimonials from '../components/landing/Testimonials';

const LandingPage = () => {
  return (
    <>
      <div className="mb-[100vh]">
        <Navber />
        <Hero />
        <Features />
        <Testimonials />
      </div>
    </>
  );
};

export default LandingPage;
