const blogPosts = [
  {
    category: "Education",
    date: "15 June 2024",
    title: "Top Universities in Bangladesh for 2024",
    imageSrc:
      "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Explore the top universities in Bangladesh for 2024, covering rankings, programs offered, and facilities provided.",
    link: "/",
  },
  {
    category: "Student Life",
    date: "20 June 2024",
    title: "A Day in the Life of a Student in Dhaka",
    imageSrc:
      "https://images.pexels.com/photos/3183191/pexels-photo-3183191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Follow a student in Dhaka through their daily routine, from classes to extracurricular activities and study sessions.",
    link: "/",
  },
  {
    category: "Study Tips",
    date: "25 June 2024",
    title: "Effective Study Techniques for Bangladeshi Students",
    imageSrc:
      "https://images.pexels.com/photos/3184452/pexels-photo-3184452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Learn proven study techniques tailored for Bangladeshi students, including time management and exam preparation tips.",
    link: "/",
  },
];

const Blogs = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Education in Bangladesh
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
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Education</span>
          </span>{" "}
          in Bangladesh: Insights and Tips
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Discover insightful articles and practical tips to navigate the
          education landscape in Bangladesh.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
          >
            <img
              src={post.imageSrc}
              className="object-cover w-full h-64"
              alt=""
            />
            <div className="p-5 border border-t-0">
              <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title={post.category}
                >
                  {post.category}
                </a>
                <span className="text-gray-600">— {post.date}</span>
              </p>
              <a
                href={post.link}
                aria-label="Category"
                title={post.title}
                className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                {post.title}
              </a>
              <p className="mb-2 text-gray-700">{post.description}</p>
              <a
                href={post.link}
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
