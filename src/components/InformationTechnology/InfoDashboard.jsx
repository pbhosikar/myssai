export default function InfoDashboard() {
  const infoCards = [
    {
      id: 1,
      title: "Box",
      description: "SSAI's primary document repository. Click here to log in!",
      link: "www.box.com",
      bgColor: "bg-blue-600",
      isLogo: true,
    },
    {
      id: 2,
      title: "IT Help Desk",
      description: "Click here to submit IT ticket to the help desk.",
      link: "it_help@ssaihq.com",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop",
      bgColor: "bg-white",
      isLogo: false,
    },
    {
      id: 3,
      title: "Phishing Email",
      description:
        "View IT Quick Tips for details on identifying phishing emails. If you are still unsure, contact it_help@ssaihq.com.",
      link: "it_help@ssaihq.com",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=200&fit=crop",
      bgColor: "bg-indigo-950",
      isLogo: false,
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: "Gerard Alleyne",
      title: "IT Manager",
      mobile: "301-867-6320",
      email: "gerard.alleyne@ssaihq.com",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Vikas Mishra",
      title: "Windows Architect",
      mobile: "301-867-6284",
      email: "vikas.mishra@ssaihq.com",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    },
  ]

  return (
    <div className="w-full flex justify-center items-center gap-12">
      {/* Info Cards Section */}
      <div className="flex gap-4">
        {infoCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            style={{ width: "258.663px", height: "312.90px" }}
          >
            {/* Image/Logo Section */}
            <div className={`${card.bgColor} h-32 flex items-center justify-center`}>
              {card.isLogo ? (
                <span className="text-white text-6xl font-bold">box</span>
              ) : (
                <img src={card.image || "/placeholder.svg"} alt={card.title} className="w-full h-full object-cover" />
              )}
            </div>

            {/* Content Section */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">{card.description}</p>
              <a
                href={card.link.startsWith("http") ? card.link : `mailto:${card.link}`}
                className="text-blue-500 text-sm font-medium hover:underline"
              >
                {card.link}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="w-96">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Meet the Team</h2>

        <div className="space-y-10">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex gap-6 items-start">
              {/* Profile Image */}
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover flex-shrink-0"
              />

              {/* Member Info */}
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-700">{member.title}</p>
                <p className="text-sm text-gray-700">Mobile: {member.mobile}</p>
                <a href={`mailto:${member.email}`} className="text-sm text-blue-500 hover:underline">
                  {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
