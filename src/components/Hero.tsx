import { Rocket, Users, Calendar, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 min-h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] mix-blend-overlay bg-cover opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Turn Your Ideas Into Reality
          </h1>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Join the most dynamic entrepreneurship community on campus. <br /> Connect, learn, and build your future with like-minded innovators.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-indigo-900 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {[
            { icon: Users, text: "500+ Active Members" },
            { icon: Calendar, text: "Weekly Events" },
            { icon: Rocket, text: "20+ Startups Launched" },
            { icon: BookOpen, text: "Expert Mentorship" }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm">
              <item.icon className="h-10 w-10 mb-4" />
              <span className="text-lg font-medium text-center">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}