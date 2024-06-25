const InfoBox = () => {
  const facilities = [
    {
      facility: "Extensive Libraries",
      description:
        "Access to a vast collection of academic resources, digital libraries, and research materials.",
      imgSrc: "https://example.com/library-image.jpg",
    },
    {
      facility: "Advanced Laboratories",
      description:
        "State-of-the-art laboratories equipped for engineering and technological research.",
      imgSrc: "https://example.com/lab-image.jpg",
    },
    {
      facility: "Sports Complex",
      description:
        "Modern sports facilities including fields, courts, and gyms for various sports activities.",
      imgSrc: "https://example.com/sports-image.jpg",
    },
    {
      facility: "Student Accommodation",
      description:
        "Comfortable and secure residential facilities for students to reside on campus.",
      imgSrc: "https://example.com/accommodation-image.jpg",
    },
    {
      facility: "Dining Facilities",
      description:
        "A variety of dining options including cafeterias and restaurants catering to diverse culinary preferences.",
      imgSrc: "https://example.com/dining-image.jpg",
    },
    {
      facility: "Research Centers",
      description:
        "Specialized centers fostering innovation and research in various academic disciplines.",
      imgSrc: "https://example.com/research-image.jpg",
    },
    {
      facility: "Student Support Services",
      description:
        "Comprehensive services such as counseling, career guidance, and academic support.",
      imgSrc: "https://example.com/support-image.jpg",
    },
    {
      facility: "Health Services",
      description:
        "On-campus health services including clinics and medical facilities for students' health care needs.",
      imgSrc: "https://example.com/health-image.jpg",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
          >
            <div className="p-5">
              <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <p className="mb-2 font-bold">{facility.facility}</p>
              <p className="text-sm leading-5 text-gray-900">
                {facility.description}
              </p>
            </div>
            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoBox;
