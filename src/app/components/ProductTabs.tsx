import { useState } from 'react';
import { BarChart3, Bell, Sparkles, Zap } from 'lucide-react';

type TabType = 'intelligence' | 'recovery';

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState<TabType>('intelligence');

  return (
    <section className="bg-white py-24 px-6 mx-[0px] my-[-87px]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-lg border border-gray-300 bg-gray-50 p-1 shadow-sm">
            <button
              onClick={() => setActiveTab('intelligence')}
              className={`flex items-center gap-2 rounded-md px-8 py-4 transition-all ${
                activeTab === 'intelligence'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart3 className="h-5 w-5" />
              <span>INTELLIGENCE</span>
            </button>
            <button
              onClick={() => setActiveTab('recovery')}
              className={`flex items-center gap-2 rounded-md px-8 py-4 transition-all ${
                activeTab === 'recovery'
                  ? 'bg-white text-violet-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Zap className="h-5 w-5" />
              <span>RECOVERY</span>
            </button>
          </div>
        </div>

        {activeTab === 'intelligence' ? <IntelligenceContent /> : <RecoveryContent />}
      </div>
    </section>
  );
}

function IntelligenceContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <div>
        <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
          Know what shoppers do across tabs
        </h2>
        <p className="mb-6 text-lg text-gray-600 leading-relaxed">
          SwitchTabs tracks cross-tab behavior in real-time, revealing hidden patterns and intent signals that traditional analytics miss.
        </p>
        <ul className="space-y-4">
          <Feature
            icon={<BarChart3 className="h-5 w-5 text-blue-600" />}
            title="Cross-tab journey mapping"
            description="See the complete story of how shoppers navigate multiple tabs"
          />
          <Feature
            icon={<Sparkles className="h-5 w-5 text-blue-600" />}
            title="Intent signals & patterns"
            description="Identify high-intent behaviors and comparison shopping"
          />
          <Feature
            icon={<BarChart3 className="h-5 w-5 text-blue-600" />}
            title="Session-level insights"
            description="Understand tab sequences, timing, and abandonment triggers"
          />
        </ul>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl">
        <DashboardMockup />
      </div>
    </div>
  );
}

function RecoveryContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-2 items-center">
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-violet-50 to-white p-8 shadow-xl">
        <RecoveryMockup />
      </div>

      <div>
        <h2 className="mb-4 text-4xl md:text-5xl text-gray-900">
          Recover lost attention automatically
        </h2>
        <p className="mb-6 text-lg text-gray-600 leading-relaxed">
          Dynamic interventions that bring shoppers back when they drift across tabs — without being intrusive.
        </p>
        <ul className="space-y-4">
          <Feature
            icon={<Bell className="h-5 w-5 text-violet-600" />}
            title="Smart push notifications"
            description="Contextual alerts that re-engage at the perfect moment"
          />
          <Feature
            icon={<Sparkles className="h-5 w-5 text-violet-600" />}
            title="Dynamic tab content"
            description="Update tab titles and favicons to recapture attention"
          />
          <Feature
            icon={<Zap className="h-5 w-5 text-violet-600" />}
            title="Adaptive on-page elements"
            description="Trigger intelligent prompts based on cross-tab behavior"
          />
        </ul>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <li className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </li>
  );
}

function DashboardMockup() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-blue-200 bg-white p-4">
        <div className="mb-2 text-sm text-gray-600">Active Sessions</div>
        <div className="text-3xl text-gray-900">1,247</div>
        <div className="text-sm text-green-600">↑ 23% from last week</div>
      </div>

      <div className="rounded-lg border border-blue-200 bg-white p-4">
        <div className="mb-3 text-sm text-gray-600">Top Tab Patterns</div>
        <div className="space-y-2">
          <TabPattern label="Home → Product → Cart" percentage={68} />
          <TabPattern label="Product → Compare → Product" percentage={45} />
          <TabPattern label="Cart → Shipping → Reviews" percentage={32} />
        </div>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-600 p-4 text-white">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5" />
          <span>Live: 89 multi-tab shoppers now</span>
        </div>
      </div>
    </div>
  );
}

function RecoveryMockup() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-violet-200 bg-white p-4">
        <div className="mb-3 flex items-center gap-2">
          <Bell className="h-5 w-5 text-violet-600" />
          <span className="text-sm text-gray-600">Recovery Events (Last Hour)</span>
        </div>
        <div className="text-3xl text-gray-900">342</div>
      </div>

      <div className="space-y-2">
        <RecoveryEvent
          type="Tab Update"
          message='Changed title to "🔥 Still here? Get 10% off"'
          time="2m ago"
        />
        <RecoveryEvent
          type="Push Alert"
          message="Sent: Cart items selling fast notification"
          time="5m ago"
        />
        <RecoveryEvent
          type="On-page Prompt"
          message="Triggered: Return-to-cart widget"
          time="8m ago"
        />
      </div>

      <div className="rounded-lg border border-violet-200 bg-violet-600 p-4 text-white">
        <div className="mb-1 text-sm opacity-90">Recovery Rate</div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl">34.7%</span>
          <span className="text-sm text-violet-200">of abandoned tabs</span>
        </div>
      </div>
    </div>
  );
}

function TabPattern({ label, percentage }: { label: string; percentage: number }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-gray-700">{label}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 rounded-full bg-gray-200">
        <div className="h-2 rounded-full bg-blue-600" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}

function RecoveryEvent({ type, message, time }: { type: string; message: string; time: string }) {
  return (
    <div className="rounded-lg border border-violet-100 bg-white p-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm text-violet-700">{type}</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
      <div className="text-sm text-gray-600">{message}</div>
    </div>
  );
}
