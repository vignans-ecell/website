import { BookOpen, Users, Download, Briefcase } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Startup Guides",
      description: "Comprehensive guides on planning, market research, and funding strategies.",
      link: ""
    },
    {
      icon: Briefcase,
      title: "Workshop Resources",
      description: "Access PPTs and other resources from past workshops and expert sessions.",
      link: ""
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "Connect with experienced entrepreneurs and industry experts.",
      link: "connect"
    },
    {
      icon: Download,
      title: "Templates & Tools",
      description: "Download essential templates for pitch decks, financial models, and more.",
      link: "tools-and-templates"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Resources</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to start and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <a
              href={resource.link}
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center justify-center text-center"
            >
              <resource.icon className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <a
                href={resource.link}
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Learn More →
              </a>
            </a>
          ))}
        </div>

        <div className="mt-16 bg-indigo-900 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Entrepreneurial Journey?
          </h3>
          <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
            Join our community and get access to all resources, events, and networking opportunities.
          </p>
          <button className="bg-white text-indigo-900 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors">
            Become a Member
          </button>
        </div>
      </div>
    </section>
  );
}