import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: '10 Resume Mistakes to Avoid in 2023',
    excerpt: 'Learn about the most common resume mistakes that could be holding you back from landing your dream job.',
    date: 'June 15, 2023',
    author: 'Sarah Johnson',
    category: 'Resume Tips',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How to Optimize Your Resume for ATS Systems',
    excerpt: 'Discover techniques to ensure your resume passes through Applicant Tracking Systems and reaches human recruiters.',
    date: 'May 28, 2023',
    author: 'Michael Chen',
    category: 'Job Search',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'The Power of AI in Modern Resume Creation',
    excerpt: 'Explore how artificial intelligence is transforming the way job seekers create and customize their resumes.',
    date: 'May 10, 2023',
    author: 'Jessica Williams',
    category: 'Technology',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Career Changing? How to Highlight Transferable Skills',
    excerpt: 'Tips for showcasing your transferable skills when moving to a new industry or role.',
    date: 'April 22, 2023',
    author: 'Robert Taylor',
    category: 'Career Advice',
    readTime: '8 min read',
  },
  {
    id: 5,
    title: 'Writing Impactful Achievement Statements for Your Resume',
    excerpt: 'Learn how to craft powerful achievement statements that showcase your value to potential employers.',
    date: 'April 5, 2023',
    author: 'Emily Rodriguez',
    category: 'Resume Tips',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Resume Trends for 2023 and Beyond',
    excerpt: 'Stay ahead of the curve with these emerging resume trends that will make your application stand out.',
    date: 'March 18, 2023',
    author: 'David Thompson',
    category: 'Job Search',
    readTime: '6 min read',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="bg-white py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Resume Tips & Career Advice</span>
              <span className="block text-primary">From Industry Experts</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Insights, strategies, and actionable advice to help you create the perfect resume and advance your career.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400">
                    Blog Image Placeholder
                    {/* In a real implementation, use:
                    <Image 
                      src={`/images/blog/${post.id}.jpg`}
                      alt={post.title}
                      width={600}
                      height={320}
                      className="h-48 w-full object-cover"
                    /> */}
                  </div>
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">
                      {post.category}
                    </p>
                    <Link href={`/blog/${post.id}`} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                    </Link>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary hover:bg-indigo-50">
              Load more articles
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 