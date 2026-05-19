import { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { Check } from 'lucide-react';

const pricingTiers = [
  { sessions: 10000, price: 0, tier: 'Free' },
  { sessions: 50000, price: 49, tier: 'Starter' },
  { sessions: 100000, price: 99, tier: 'Growth' },
  { sessions: 250000, price: 199, tier: 'Professional' },
  { sessions: 500000, price: 349, tier: 'Scale' },
  { sessions: 1000000, price: 599, tier: 'Enterprise' },
];

export function PricingSlider() {
  const [tierIndex, setTierIndex] = useState(1);
  const currentTier = pricingTiers[tierIndex];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
            Simple, usage-based pricing
          </h2>
          <p className="text-lg text-gray-600">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 shadow-xl">
          <div className="mb-8">
            <div className="mb-6 text-center">
              <div className="mb-2 text-sm text-gray-600">Monthly Sessions</div>
              <div className="text-5xl text-gray-900">
                {currentTier.sessions.toLocaleString()}
                {tierIndex === pricingTiers.length - 1 && '+'}
              </div>
            </div>

            <Slider.Root
              className="relative flex h-6 w-full touch-none items-center"
              value={[tierIndex]}
              onValueChange={(value) => setTierIndex(value[0])}
              max={pricingTiers.length - 1}
              step={1}
            >
              <Slider.Track className="relative h-2 w-full grow rounded-full bg-gray-200">
                <Slider.Range className="absolute h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
              </Slider.Track>
              <Slider.Thumb
                className="block h-6 w-6 rounded-full bg-white border-2 border-blue-600 shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-200"
                aria-label="Sessions"
              />
            </Slider.Root>
          </div>

          <div className="text-center mb-8 py-8 border-y border-gray-200">
            <div className="mb-2 text-sm text-gray-600">{currentTier.tier} Plan</div>
            {currentTier.price === 0 ? (
              <div className="text-5xl text-gray-900">Free</div>
            ) : tierIndex === pricingTiers.length - 1 ? (
              <div className="text-3xl text-gray-900">Contact Sales</div>
            ) : (
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl text-gray-900">${currentTier.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
            )}
          </div>

          <div className="space-y-3 mb-8">
            <Feature text="Cross-tab tracking & analytics" />
            <Feature text="Automated recovery strategies" />
            <Feature text="Real-time dashboard" />
            <Feature text={tierIndex >= 2 ? "Priority support" : "Email support"} />
            <Feature text={tierIndex >= 3 ? "Custom recovery flows" : "Standard recovery flows"} />
            {tierIndex >= 4 && <Feature text="Dedicated account manager" />}
            {tierIndex >= 5 && <Feature text="White-glove onboarding & custom integrations" />}
          </div>

          <button className="w-full rounded-lg bg-blue-600 px-6 py-4 text-white hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
            {currentTier.price === 0 ? 'Start Free' : tierIndex === pricingTiers.length - 1 ? 'Contact Sales' : 'Get Started'}
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          All plans include 14-day free trial • No credit card required
        </p>
      </div>
    </section>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
        <Check className="h-4 w-4 text-blue-600" />
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
