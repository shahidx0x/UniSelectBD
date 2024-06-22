import { Link } from "react-router-dom";

export default function UniversityInformation() {
  return (
    <>
      <div className="hidden md:flex bg-[url('https://green.edu.bd/public/images/Student-in-PC.jpg')] bg-cover">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                  <span className="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                    >
                      <defs>
                        <pattern
                          id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7" />
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                        width="52"
                        height="24"
                      />
                    </svg>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <header className="p-4 bg-gray-100 text-gray-800">
          <div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8">
            <ul className="items-stretch hidden space-x-3 md:flex">
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#university-information"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  University Information
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#courses-information"
                  className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                >
                  Courses Information
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1 border-transparent  border-blue-600"
                >
                  University Infrustracture
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  border-transparent  border-blue-600"
                >
                  University Fee
                </a>
              </li>
            </ul>

            <button title="Button" type="button" className="p-4 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
      <div className="2xl:mx-auto 2xl:container xl:px-20 lg:px-10 px-6 py-20">
        <div className="lg:flex justify-center">
          <div className="2xl:w-7/12 lg:w-8/12 md:w-10/12">
            <img
              src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/87109249_2537946289803468_7551412655173402624_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHoErExQ-rgH9lJ4KmiFGyeQrNXukuz1YZCs1e6S7PVhvccEjzqw4-8WPm0VOfWX5bZC2nBrvxOhrjujjyHXx1e&_nc_ohc=UWWkmRH-HPoQ7kNvgFQueri&_nc_ht=scontent.fdac31-1.fna&oh=00_AYDJ74iL1G7D9WKKog4hXaXiLDoNQB9ARvIRTIVWMGtbVA&oe=669E7A74"
              alt="fingerprint recognition"
              className="lg:w-full w-auto"
            />
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-base leading-4 text-gray-500">5 feb</p>
                  <p className="text-base leading-none text-gray-500 ml-12">
                    5 min read
                  </p>
                </div>
                <div className="flex items-center">
                  <svg
                    width={64}
                    height={2}
                    viewBox="0 0 64 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M64 1H0" stroke="#6B7280" />
                  </svg>
                  <p className="text-base leading-none text-gray-500 ml-2">
                    Jeff Bill
                  </p>
                </div>
              </div>
              <div>
                <h1 className="lg:text-3xl text-2xl font-semibold mt-4 text-gray-800">
                  Green University of Bangladesh (GUB)
                </h1>
                <p className="text-base leading-6 text-gray-600 mt-2">
                  Established in 2003, Green University of Bangladesh (GUB) is a
                  prominent private university located in Dhaka. It aims to
                  provide quality education with a strong emphasis on
                  sustainability and environmental consciousness. The university
                  is accredited by the University Grants Commission (UGC) of
                  Bangladesh and maintains various national and international
                  affiliations.
                </p>
                <Link to="https://green.edu.bd/online-admission-procedure">
                  <button className="bg-indigo-500 p-3 mt-5 text-white rounded-md">
                    Apply Online
                  </button>
                </Link>

                <div>
                  <section id="university-information" className="mt-6">
                    <h2 className="text-gray-800 font-bold text-2xl">
                      University Information
                    </h2>
                    <p>
                      Established in 2003, Green University of Bangladesh (GUB)
                      is a prominent private university located in Dhaka. It
                      aims to provide quality education with a strong emphasis
                      on sustainability and environmental consciousness. The
                      university is accredited by the University Grants
                      Commission (UGC) of Bangladesh and maintains various
                      national and international affiliations.
                    </p>
                  </section>

                  <section id="courses-information" className="mt-6">
                    <h2 className="text-gray-800 font-bold text-2xl">
                      Courses Information
                    </h2>
                    <h3 className="font-semibold text-xl mt-4">
                      Undergraduate Programs
                    </h3>
                    <ul className="list-disc ml-5">
                      <li>Business Administration</li>
                      <li>Computer Science and Engineering</li>
                      <li>Electrical and Electronic Engineering</li>
                      <li>Textile Engineering</li>
                      <li>Law</li>
                      <li>English</li>
                      <li>Sociology</li>
                      <li>Economics</li>
                      <li>Environmental Science</li>
                    </ul>
                    <h3 className="font-semibold text-xl mt-4">
                      Graduate Programs
                    </h3>
                    <ul className="list-disc ml-5">
                      <li>MBA (Master of Business Administration)</li>
                      <li>
                        EMBA (Executive Master of Business Administration)
                      </li>
                      <li>LLM (Master of Laws)</li>
                      <li>Master of Computer Science and Engineering</li>
                    </ul>
                  </section>

                  <section id="university-infrastructure" className="mt-6">
                    <h2 className="text-gray-800 font-bold text-2xl">
                      University Infrastructure
                    </h2>
                    <p>
                      Green University of Bangladesh boasts modern facilities to
                      support its academic and extracurricular activities. These
                      include:
                    </p>
                    <ul className="list-disc ml-5">
                      <li>State-of-the-art classrooms and laboratories</li>
                      <li>Well-stocked library</li>
                      <li>Sports facilities</li>
                      <li>
                        Green campus initiatives aimed at reducing environmental
                        impact
                      </li>
                    </ul>
                  </section>

                  <section id="university-fees-information" className="mt-6">
                    <h2 className="text-gray-800 font-bold text-2xl">
                      University Fees Information
                    </h2>
                    <p>
                      The fee structure at Green University of Bangladesh varies
                      based on the program and level of study. Here is a general
                      overview:
                    </p>
                    <h3 className="font-semibold text-xl mt-4">
                      Undergraduate Programs
                    </h3>
                    <table className="table-auto border-collapse border border-gray-400 mt-2">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Program
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Approx. Fee per Semester (BDT)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Business Administration
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            70,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Computer Science and Engineering
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            80,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Electrical and Electronic Engineering
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            80,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Textile Engineering
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            85,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Law
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            65,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            English
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            60,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Sociology
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            60,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Economics
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            60,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Environmental Science
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            70,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <h3 className="font-semibold text-xl mt-4">
                      Graduate Programs
                    </h3>
                    <table className="table-auto border-collapse border border-gray-400 mt-2">
                      <thead>
                        <tr>
                          <th className="border border-gray-300 px-4 py-2">
                            Program
                          </th>
                          <th className="border border-gray-300 px-4 py-2">
                            Approx. Total Program Cost (BDT)
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            MBA
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            1,20,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            EMBA
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            1,50,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            LLM
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            1,00,000
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2">
                            Master of Computer Science and Engineering
                          </td>
                          <td className="border border-gray-300 px-4 py-2">
                            1,30,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-4">
                      Note: Fees are subject to change. For the most accurate
                      and up-to-date information, please visit the official
                      university website or contact the admissions office.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:ml-6 lg:mt-0 mt-7 2xl:w-3/12 lg:w-4/12 w-full flex lg:flex-col sm:flex-row flex-col items-center justify-between">
            <div className="lg:w-auto sm:w-1/2">
              <img
                src="https://static.toiimg.com/photo/82606440.cms"
                alt="flying letters"
                className="w-full"
              />
              <div className="mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="text-base leading-4 text-gray-500">5 feb</p>
                    <p className="text-base leading-none text-gray-500 ml-12">
                      5 min read
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      width={64}
                      height={2}
                      viewBox="0 0 64 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M64 1H0" stroke="#6B7280" />
                    </svg>
                    <p className="text-base leading-none text-gray-500 ml-2">
                      Jeff Bill
                    </p>
                  </div>
                </div>
                <h1 className="text-2xl font-semibold leading-6 mt-4 text-gray-800">
                  General Instructions for Eid Holidays
                </h1>
                <p className="text-base leading-6 text-gray-600 mt-2">
                  The emerge of internet of Things has brought in a need for
                  low-cost security technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
