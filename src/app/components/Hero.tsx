import { ChevronRight } from 'lucide-react';
import transparentLogo from '../../imports/transparent_logo.png';
import logo3 from '../../imports/logo_3.png';
import logo4 from '../../imports/logo_4.png';
import logo6 from '../../imports/logo_6.png';
import logo7 from '../../imports/logo_7.png';
import logo9 from '../../imports/logo_9.png';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <img src={transparentLogo} alt="SwitchTabs" className="h-[320px] md:h-[400px] mx-[0px] my-[-164px]" />
          </div>

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 shadow-sm">
            <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
            <span className="text-sm text-gray-700">Now available for Shopify</span>
          </div>

          <h1 className="mx-auto mb-6 max-w-4xl text-5xl md:text-6xl lg:text-7xl tracking-tight text-gray-900">
            <span className="font-bold">84% of visitors</span> open more than 2 tabs
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-gray-600 leading-relaxed"> <strong>Intelligence</strong> and <strong>Recovery</strong> strategies to convert that untabbed opportunity.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://apps.shopify.com/switchtabs"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 text-white shadow-lg hover:bg-blue-700 transition-all hover:shadow-xl"
            >
              Install On Shopify
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://switchtabs.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border-2 border-gray-300 bg-white px-8 py-4 text-gray-700 hover:border-gray-400 transition-all"
            >
              Book Demo
            </a>
          </div>

          <div className="mx-auto max-w-5xl">
            <BrowserTabsVisual />
          </div>

          <TrustedByBrands />
        </div>
      </div>
    </section>
  );
}

function BrowserTabsVisual() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="rounded-t-lg border border-b-0 border-gray-300 bg-gray-100 p-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 flex gap-2 ml-4">
            <Tab label="Home" active />
            <Tab label="Product A" />
            <Tab label="Cart" badge="2" />
            <Tab label="Reviews" />
            <Tab label="Compare" />
          </div>
        </div>
      </div>
      <div className="rounded-b-lg border border-gray-300 bg-white p-12 shadow-2xl">
        <div className="grid grid-cols-3 gap-6 opacity-60">
          <div className="h-32 rounded bg-gray-200 animate-pulse"></div>
          <div className="h-32 rounded bg-gray-200 animate-pulse delay-100"></div>
          <div className="h-32 rounded bg-gray-200 animate-pulse delay-200"></div>
        </div>
      </div>

      <div className="absolute -right-8 top-1/2 -translate-y-1/2 rounded-lg border border-blue-300 bg-blue-50 p-4 shadow-lg">
        <div className="text-sm font-medium text-blue-900">🎯 Tab Activity Tracked</div>
        <div className="text-xs text-blue-700 mt-1">5 tabs • 2.4min session</div>
      </div>
    </div>
  );
}

function Tab({ label, active, badge }: { label: string; active?: boolean; badge?: string }) {
  return (
    <div className={`relative flex items-center gap-2 rounded-t-lg px-4 py-2 ${active ? 'bg-white border-t border-x border-gray-300' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}>
      <span className="text-sm text-gray-700">{label}</span>
      {badge && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
          {badge}
        </span>
      )}
    </div>
  );
}

function TrustedByBrands() {
  const brands = [
    { name: 'Brand 1', logo: logo3, size: 'h-20' },
    { name: 'Brand 2', logo: logo4, size: 'h-12' },
    { name: 'Brand 3', logo: logo6, size: 'h-20' },
    { name: 'Brand 4', logo: logo7, size: 'h-12' },
    { name: 'Brand 5', logo: logo9, size: 'h-20' },
  ];

  return (
    <div className="mt-16">
      <p className="mb-6 text-sm text-gray-500 uppercase tracking-wide">Trusted by growing eCommerce brands</p>
      <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
        {brands.map((brand) => (
          <div key={brand.name} className={brand.size}>
            <img src={brand.logo} alt={brand.name} className="h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
