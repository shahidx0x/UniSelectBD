/* eslint-disable react/prop-types */
const CardItem = ({ href, imgSrc, imgAlt, title, description }) => (
  <a
    href={href}
    aria-label="View Item"
    className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
  >
    <div className="flex flex-col h-full">
      <img src={imgSrc} className="object-cover w-full h-48" alt={imgAlt} />
      <div className="flex-grow border border-t-0 rounded-b">
        <div className="p-5">
          <h6 className="mb-2 font-semibold leading-5">{title}</h6>
          <p className="text-sm text-gray-900">{description}</p>
        </div>
      </div>
    </div>
  </a>
);

const UniversityList = () => {
  const items = [
    {
      href: "/",
      imgSrc:
        "https://th.bing.com/th/id/OIP.w5sOBombO8j3E6ZtU7wvAQHaE8?rs=1&pid=ImgDetMain",
      imgAlt: "University of Dhaka",
      title: "University of Dhaka",
      description:
        "The University of Dhaka is the oldest university in Bangladesh and is known for its academic excellence and historical significance.",
    },
    {
      href: "/",
      imgSrc:
        "https://www.uom.lk/sites/default/files/archi/images/217397398_10219127785533434_6983343300974185932_n_0.jpg",
      imgAlt: "Bangladesh University of Engineering and Technology",
      title: "Bangladesh University of Engineering and Technology (BUET)",
      description:
        "BUET is one of the most prestigious institutions for higher education in Bangladesh, particularly in the fields of engineering and architecture.",
    },
    {
      href: "/",
      imgSrc:
        "https://th.bing.com/th/id/OIP.ODV9j26ItPViTxKb8SgSgAHaFX?rs=1&pid=ImgDetMain",
      imgAlt: "University of Rajshahi",
      title: "University of Rajshahi",
      description:
        "Located in Rajshahi, this university is renowned for its research and education in science and humanities.",
    },
    {
      href: "/",
      imgSrc:
        "https://th.bing.com/th/id/R.427fb40db26959a9e7ae5b1b834bfcab?rik=YcqFdfyFOD6T9w&pid=ImgRaw&r=0",
      imgAlt: "Jahangirnagar University",
      title: "Jahangirnagar University",
      description:
        "Jahangirnagar University is the only fully residential university in Bangladesh and is well-known for its natural beauty and academic rigor.",
    },
    {
      href: "/",
      imgSrc:
        "https://th.bing.com/th/id/R.84e51d570f714220b4f292af54260842?rik=em6HGd8zsRO5cA&pid=ImgRaw&r=0",
      imgAlt: "University of Chittagong",
      title: "University of Chittagong",
      description:
        "Situated in the picturesque hills of Chittagong, this university offers a serene environment for academic pursuits.",
    },
    {
      href: "/",
      imgSrc:
        "https://i.pinimg.com/736x/9c/f2/78/9cf2781851f305e2c2e67bbe24c14612--west-university-bangladesh.jpg",
      imgAlt: "North South University",
      title: "North South University",
      description:
        "North South University is the first private university in Bangladesh and is recognized for its quality education and modern facilities.",
    },
    {
      href: "/",
      imgSrc:
        "https://th.bing.com/th/id/R.9e67d70d4e1309672ea05e76c5860152?rik=HDv%2bJRZu%2bRifvQ&pid=ImgRaw&r=0",
      imgAlt: "BRAC University",
      title: "BRAC University",
      description:
        "BRAC University aims to provide a broad-based education with a focus on professional development for students.",
    },
    {
      href: "/",
      imgSrc:
        "https://i0.wp.com/bdexamhelp.com/wp-content/uploads/2019/11/56587O.png?fit=1200%2C680&quality=95&strip=all&ssl=1",
      imgAlt: "Institute of Business Administration, University of Dhaka",
      title: "Institute of Business Administration (IBA), University of Dhaka",
      description:
        "IBA is the premier business school in Bangladesh, known for producing top business professionals and leaders.",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Institution
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Discover</span>
          </span>{" "}
          the top university of bangladesh
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Bangladesh offers a world-renowned education system with top-class
          universities that foster creativity and excellence.
        </p>
      </div>
      <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
        {items.map((item, index) => (
          <CardItem
            key={index}
            href={item.href}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default UniversityList;
