import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
	const events = [
		{
			title: "Startup Weekend 2024",
			date: "March 15-17, 2024",
			location: "Innovation Center",
			time: "48 Hours",
			description: "Join us for an intensive 48-hour event where you'll work with teams to build and launch a startup from scratch.",
			image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
		},
		{
			title: "Venture Capital Panel",
			date: "March 22, 2024",
			location: "Business School Auditorium",
			time: "5:00 PM - 7:00 PM",
			description: "Learn from leading VCs about what they look for in startups and how to secure funding.",
			image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
		},
		{
			title: "Tech Startup Workshop",
			date: "March 29, 2024",
			location: "Tech Hub",
			time: "3:00 PM - 6:00 PM",
			description: "Hands-on workshop covering the technical aspects of launching a tech startup.",
			image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
		}
	];

	return (
		<section id="events" className="py-20 bg-gray-50 flex flex-col items-center justify-center">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Join our events to network, learn, and grow your entrepreneurial skills
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{events.map((event, index) => (
						<div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
							<div className="h-48 w-full overflow-hidden">
								<img src={event.image} alt={event.title} className="w-full h-full object-cover" />
							</div>
							<div className="p-6 grow flex flex-col">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
								<p className="text-gray-600 mb-4">{event.description}</p>
								<div className="space-y-2">
									<div className="flex items-center text-gray-500">
										<Calendar className="h-5 w-5 mr-2" />
										<span>{event.date}</span>
									</div>
									<div className="flex items-center text-gray-500">
										<MapPin className="h-5 w-5 mr-2" />
										<span>{event.location}</span>
									</div>
									<div className="flex items-center text-gray-500">
										<Clock className="h-5 w-5 mr-2" />
										<span>{event.time}</span>
									</div>
								</div>
								<div className="grow"></div>
								<button className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors">
									Register Now
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
			<a href="events" className="mt-[50px] bg-indigo-600 text-white py-2 px-3 w-full max-w-[400px] rounded-md hover:bg-indigo-700 transition-colors flex item-center justify-center">
				More Events
			</a>
		</section>
	);
}