import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

const templates = [
  {
    id: 1,
    name: 'Professional',
    category: 'all',
    description: 'Clean and professional template suitable for most industries',
    imagePlaceholder: 'Professional Template Preview',
    popular: true,
  },
  {
    id: 2,
    name: 'Modern',
    category: 'all',
    description: 'Contemporary design with a creative touch',
    imagePlaceholder: 'Modern Template Preview',
    popular: true,
  },
  {
    id: 3,
    name: 'Executive',
    category: 'professional',
    description: 'Elegant design for senior management and executives',
    imagePlaceholder: 'Executive Template Preview',
    popular: false,
  },
  {
    id: 4,
    name: 'Creative',
    category: 'creative',
    description: 'Bold design for creative professionals',
    imagePlaceholder: 'Creative Template Preview',
    popular: true,
  },
  {
    id: 5,
    name: 'Technical',
    category: 'professional',
    description: 'Optimized for technical roles and skills',
    imagePlaceholder: 'Technical Template Preview',
    popular: false,
  },
  {
    id: 6,
    name: 'Minimalist',
    category: 'all',
    description: 'Clean and simple design that focuses on content',
    imagePlaceholder: 'Minimalist Template Preview',
    popular: true,
  },
  {
    id: 7,
    name: 'Academic',
    category: 'professional',
    description: 'Designed for academic and research positions',
    imagePlaceholder: 'Academic Template Preview',
    popular: false,
  },
  {
    id: 8,
    name: 'Entry Level',
    category: 'simple',
    description: 'Perfect for students and recent graduates',
    imagePlaceholder: 'Entry Level Template Preview',
    popular: false,
  },
  {
    id: 9,
    name: 'ATS Optimized',
    category: 'professional',
    description: 'Designed to pass through Applicant Tracking Systems',
    imagePlaceholder: 'ATS Optimized Template Preview',
    popular: true,
  },
];

const categories = [
  { name: 'All Templates', value: 'all' },
  { name: 'Professional', value: 'professional' },
  { name: 'Creative', value: 'creative' },
  { name: 'Simple', value: 'simple' },
  { name: 'Popular', value: 'popular' },
];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTemplates = activeCategory === 'popular'
    ? templates.filter(template => template.popular)
    : activeCategory === 'all'
      ? templates
      : templates.filter(template => template.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Resume Templates
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Choose from our collection of professionally designed templates
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-5">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-4 py-2 rounded-md text-sm font-medium ${
                    activeCategory === category.value
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="p-0">
                    <div className="h-48 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">{template.imagePlaceholder}</span>
                      {/* In a real implementation, use:
                      <Image 
                        src={`/images/templates/${template.id}.jpg`}
                        alt={template.name}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover"
                      /> */}
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{template.description}</p>
                    <div className="mt-4">
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Use this template
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
} 