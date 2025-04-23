import Link from 'next/link';
import { CheckIcon } from './Icons';

const pricingPlans = [
  {
    name: 'Free',
    price: '0',
    description: 'Basic tools to create a simple resume',
    features: [
      '1 resume',
      'Basic templates',
      'Essential sections',
      'PDF downloads',
      'Limited customization',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '19',
    description: 'Everything you need for your job search',
    features: [
      'Unlimited resumes',
      'All premium templates',
      'AI content writer',
      'Keyword optimization',
      'Multiple download formats',
      'Advanced customization',
      'Cover letter generator',
      '24/7 customer support',
    ],
    cta: 'Get Premium',
    highlighted: true,
  },
  {
    name: 'Team',
    price: '49',
    description: 'For career coaches and HR teams',
    features: [
      'Everything in Premium',
      'Team dashboard',
      'Client management',
      'Branded templates',
      'Analytics and reporting',
      'API access',
      'Dedicated account manager',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Choose the perfect plan for you
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`rounded-lg shadow-lg divide-y divide-gray-200 ${plan.highlighted ? 'border-2 border-primary ring-2 ring-primary ring-opacity-50' : 'border border-gray-200'}`}>
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-bold text-gray-900">{plan.name}</h2>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  {plan.price !== '0' && <span className="text-base font-medium text-gray-500">/month</span>}
                </p>
                <p className="mt-4 text-sm text-gray-500">{plan.description}</p>
                <Link 
                  href="/register" 
                  className={`mt-8 block w-full rounded-md py-3 px-6 text-center text-base font-medium ${
                    plan.highlighted
                      ? 'bg-primary text-white hover:bg-indigo-700'
                      : 'bg-white text-primary border border-primary hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-sm font-medium text-gray-900 tracking-wide">What's included</h3>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <CheckIcon />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 