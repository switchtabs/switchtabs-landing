import { ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <h3 className="mb-4 text-xl text-white">SwitchTabs</h3>
            <p className="text-gray-400 leading-relaxed">
              Intelligence and recovery for multi-tab shoppers. Turn hidden behavior into revenue.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wide text-gray-400">Product</h4>
            <ul className="space-y-2">
              <FooterLink href="https://switchtabs.com/#intelligence">Intelligence</FooterLink>
              <FooterLink href="https://switchtabs.com/#recovery">Recovery</FooterLink>
              <FooterLink href="https://switchtabs.com/#pricing">Pricing</FooterLink>
              <FooterLink href="https://switchtabs.com/docs">Documentation</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wide text-gray-400">Company</h4>
            <ul className="space-y-2">
              <FooterLink href="https://switchtabs.com/about">About</FooterLink>
              <FooterLink href="https://switchtabs.com/blog">Blog</FooterLink>
              <FooterLink href="https://switchtabs.com/careers">Careers</FooterLink>
              <FooterLink href="https://switchtabs.com/contact">Contact</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm uppercase tracking-wide text-gray-400">Legal</h4>
            <ul className="space-y-2">
              <FooterLink href="https://switchtabs.com/privacy">Privacy Policy</FooterLink>
              <FooterLink href="https://switchtabs.com/terms">Terms of Service</FooterLink>
              <FooterLink href="https://switchtabs.com/security">Security</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2026 SwitchTabs. All rights reserved.
            </p>

            <div className="flex gap-4 items-center">
              <a
                href="https://apps.shopify.com/switchtabs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors"
              >
                Install On Shopify
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-gray-400 hover:text-white transition-colors">
        {children}
      </a>
    </li>
  );
}
