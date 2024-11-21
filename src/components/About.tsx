import { Calendar, Award, Target, Users } from 'lucide-react';

export default function About() {
  const achievements = [
    {
      icon: Users,
      number: "1000+",
      text: "Students Supported",
      description: "Mentored and guided through their entrepreneurial journey"
    },
    {
      icon: Award,
      number: "$2M+",
      text: "Funding Raised",
      description: "Total funding secured by our student startups"
    },
    {
      icon: Calendar,
      number: "50+",
      text: "Annual Events",
      description: "Including workshops, seminars, and networking sessions"
    },
    {
      icon: Target,
      number: "25+",
      text: "Industry Partners",
      description: "Leading companies supporting our initiatives"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Founded in 2014, we are the premier entrepreneurship cell dedicated to fostering innovation 
            and entrepreneurial spirit among students. Our mission is to transform ideas into successful 
            ventures through mentorship, resources, and networking opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
              <item.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{item.number}</div>
              <div className="text-lg font-semibold text-gray-800 mb-2">{item.text}</div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-6">
                To create a thriving ecosystem where student entrepreneurs can transform their innovative 
                ideas into successful ventures, contributing to the global startup community while 
                developing essential entrepreneurial skills.
              </p>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                Learn More
              </button>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}