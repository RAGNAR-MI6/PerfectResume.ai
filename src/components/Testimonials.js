const testimonials = [
  {
    content: "PerfectResume.ai completely transformed my job search. After months of no responses using my old resume, I got 3 interview calls within a week of using this AI-powered tool!",
    author: "Sarah J.",
    position: "Marketing Manager",
    company: "Tech Inc."
  },
  {
    content: "The AI suggestions made my accomplishments sound so much more professional. The keyword optimization definitely helped me get past the ATS systems. Landed my dream job at a Fortune 500 company!",
    author: "Michael T.",
    position: "Senior Developer",
    company: "Global Software"
  },
  {
    content: "As someone switching careers, I struggled to present my transferable skills effectively. The AI content generator highlighted my relevant experience perfectly. Worth every penny!",
    author: "Jessica R.",
    position: "Project Manager",
    company: "Innovate Co."
  },
  {
    content: "I was skeptical about using AI for my resume, but the results speak for themselves. The templates are sleek, modern and the content is tailored to each job I apply for. Game changer!",
    author: "David K.",
    position: "Financial Analyst",
    company: "Capital Investments"
  },
  {
    content: "The real-time feedback feature is incredible. It's like having a professional resume writer by your side 24/7. I've recommended this to all my friends who are job hunting.",
    author: "Emily W.",
    position: "HR Specialist",
    company: "Talent Solutions"
  },
  {
    content: "As a recent graduate with limited experience, I was worried about my resume. The AI helped me highlight my academic achievements and internships in the most impactful way possible.",
    author: "Robert P.",
    position: "Associate Consultant",
    company: "Strategy Partners"
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
            Hear from our satisfied users
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Thousands of job seekers have used PerfectResume.ai to land their dream jobs.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg px-6 py-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-full flex flex-col justify-between">
                <div>
                  <svg className="h-8 w-8 text-primary mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 