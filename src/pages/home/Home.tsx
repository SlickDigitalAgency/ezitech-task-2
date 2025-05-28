import ClientLogo from '@/components/home/client/ClientLogo';
import Hero from '@/components/home/hero/Hero';
import { About } from '@/components/home/about/About';
import { clientLogos } from '@/constants/client/ClientLogoData';
import Blog from '@/components/blog/Blog';
import Testimonial from '@/components/testimonial/Testimonial';
import FeatureSection from '@/components/home/features/Features';
import Experience from '@/components/home/experience/Experience';
import Excellence from '@/components/home/excellence/Excellence';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero/>
      {/* Client Logo Section */}
      <ClientLogo logos={clientLogos} />
      {/* About Section */}
      <About />
       {/* Experience Section */}
       <Experience/>
        {/* Excellence Section */}
        <Excellence/>
       {/* Feature Section */}
      <FeatureSection/>
      {/* Testimonial Section */}
      <Testimonial/>
      {/* Blog Section */}
        <Blog />
    </div>
  );
};

export default Home;