export default function Members() {
  const members = [
    {
      name: "Sarah Chen",
      role: "President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      company: "TechStart",
      year: "Senior"
    },
    {
      name: "James Wilson",
      role: "Vice President",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      company: "InnovateLab",
      year: "Junior"
    },
    {
      name: "Maya Patel",
      role: "Events Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      company: "FutureVision",
      year: "Senior"
    },
    {
      name: "David Kim",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      company: "CodeCraft",
      year: "Junior"
    }
  ];

  return (
    <section id="members" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate leaders driving innovation and entrepreneurship on campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg aspect-square mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">{member.company}</p>
                    <p className="text-sm">{member.year}</p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>

        <a href="team" className="mt-[50px] bg-indigo-600 text-white py-2 px-3 w-full max-w-[400px] rounded-md hover:bg-indigo-700 transition-colors flex item-center justify-center">
          Meet Full Team
        </a>
      </div>
    </section>
  );
}