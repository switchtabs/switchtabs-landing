import { Hero } from './components/Hero';
import { ProductTabs } from './components/ProductTabs';
import { PricingSlider } from './components/PricingSlider';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProductTabs />
      <PricingSlider />
      <FAQ />
      <Footer />
    </div>
  );
}