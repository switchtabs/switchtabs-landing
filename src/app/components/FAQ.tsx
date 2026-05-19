import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does SwitchTabs track cross-tab behavior?',
    answer: 'SwitchTabs uses lightweight JavaScript that monitors tab visibility, focus events, and session storage. It never collects PII or browsing history outside your domain — only behavioral signals within your store.',
  },
  {
    question: 'Does this work on all eCommerce platforms?',
    answer: 'Currently optimized for Shopify with one-click installation. Support for WooCommerce, BigCommerce, and custom platforms coming soon. Contact us if you need early access.',
  },
  {
    question: 'Will it slow down my site?',
    answer: 'No. SwitchTabs loads asynchronously and weighs less than 15KB gzipped. Average performance impact is under 5ms — imperceptible to shoppers.',
  },
  {
    question: 'How are recovery strategies automated?',
    answer: 'You set rules once (e.g., "If user opens 3+ product tabs, show comparison widget"). Our engine handles the rest — tracking conditions, triggering interventions, and optimizing timing based on your conversion data.',
  },
  {
    question: 'Is this GDPR & privacy compliant?',
    answer: 'Yes. SwitchTabs is cookieless by default and respects Do Not Track signals. All data stays within your analytics dashboard. We never sell or share shopper data.',
  },
  {
    question: 'Can I customize the recovery experiences?',
    answer: 'Absolutely. Growth and higher plans include custom recovery flows, branded notifications, and A/B testing. Free and Starter plans use pre-built templates.',
  },
];

export function FAQ() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about SwitchTabs
          </p>
        </div>

        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <Accordion.Item
              key={index}
              value={`item-${index}`}
              className="rounded-lg border border-gray-200 bg-white px-6 shadow-sm overflow-hidden"
            >
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between py-5 text-left transition-all">
                  <span className="text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-gray-600 data-[state=closed]:animate-[accordion-up_200ms_ease-out] data-[state=open]:animate-[accordion-down_200ms_ease-out]">
                <div className="pb-5">{faq.answer}</div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
