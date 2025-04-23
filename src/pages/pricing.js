import Header from '../components/Header';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Simple, transparent</span>
              <span className="block text-primary">pricing plans</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Choose the perfect plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
        <Pricing />
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="lg:text-center">
              <h2 className="text-base text-primary font-semibold tracking-wide uppercase">FAQ</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </p>
            </div>
            <div className="mt-12">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Can I cancel my subscription at any time?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    Yes, you can cancel your subscription at any time. Once cancelled, you'll retain access until the end of your billing period.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Is there a free trial?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We offer a free plan with basic functionality. You can upgrade to a premium plan anytime to access advanced features.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    How do I change my plan?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    You can change your plan at any time by going to your account settings. The new plan will take effect immediately.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    Do you offer refunds?
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    We offer a 14-day money-back guarantee. If you're not satisfied with our service, you can request a refund within this period.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
} 