import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function UniversityInformation() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
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
            <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
              <div className="flex flex-col justify-start items-start w-full space-y-8">
                <div className="flex justify-start items-start">
                  <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    Reviews
                  </p>
                </div>
                <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                  <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-row justify-between items-start">
                      <p className="text-xl md:text-2xl font-medium leading-normal text-gray-800">
                        An Outstanding Institution: Green University of
                        Bangladesh
                      </p>
                      <button className="ml-4 md:hidden">
                        <svg
                          className={"transform rotate-180"}
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15 12.5L10 7.5L5 12.5"
                            stroke="#1F2937"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="cursor-pointer mt-2 md:mt-0">
                      <svg
                        width="152"
                        height="24"
                        viewBox="0 0 152 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M17.5598 24.4285C17.3999 24.4291 17.2422 24.3914 17.0998 24.3185L11.9998 21.6485L6.89982 24.3185C6.73422 24.4056 6.5475 24.4444 6.3609 24.4307C6.1743 24.4169 5.9953 24.3511 5.84425 24.2407C5.6932 24.1303 5.57616 23.9797 5.50644 23.8061C5.43671 23.6324 5.4171 23.4427 5.44982 23.2585L6.44982 17.6285L2.32982 13.6285C2.20128 13.5002 2.1101 13.3394 2.06605 13.1632C2.02201 12.987 2.02677 12.8022 2.07982 12.6285C2.13778 12.4508 2.2444 12.2928 2.38757 12.1726C2.53075 12.0525 2.70475 11.9748 2.88982 11.9485L8.58982 11.1185L11.0998 5.98849C11.1817 5.81942 11.3096 5.67683 11.4687 5.57706C11.6279 5.47729 11.812 5.42438 11.9998 5.42438C12.1877 5.42438 12.3717 5.47729 12.5309 5.57706C12.6901 5.67683 12.8179 5.81942 12.8998 5.98849L15.4398 11.1085L21.1398 11.9385C21.3249 11.9648 21.4989 12.0425 21.6421 12.1626C21.7852 12.2828 21.8919 12.4408 21.9498 12.6185C22.0029 12.7922 22.0076 12.977 21.9636 13.1532C21.9196 13.3294 21.8284 13.4902 21.6998 13.6185L17.5798 17.6185L18.5798 23.2485C18.6155 23.436 18.5968 23.6297 18.526 23.8069C18.4551 23.9841 18.335 24.1374 18.1798 24.2485C17.9987 24.3754 17.7807 24.4387 17.5598 24.4285V24.4285Z"
                            fill="#1F2937"
                          />
                        </g>
                        <g clipPath="url(#clip1)">
                          <path
                            d="M49.5598 24.4285C49.3999 24.4291 49.2422 24.3914 49.0998 24.3185L43.9998 21.6485L38.8998 24.3185C38.7342 24.4056 38.5475 24.4444 38.3609 24.4307C38.1743 24.4169 37.9953 24.3511 37.8443 24.2407C37.6932 24.1303 37.5762 23.9797 37.5064 23.8061C37.4367 23.6324 37.4171 23.4427 37.4498 23.2585L38.4498 17.6285L34.3298 13.6285C34.2013 13.5002 34.1101 13.3394 34.0661 13.1632C34.022 12.987 34.0268 12.8022 34.0798 12.6285C34.1378 12.4508 34.2444 12.2928 34.3876 12.1726C34.5307 12.0525 34.7047 11.9748 34.8898 11.9485L40.5898 11.1185L43.0998 5.98849C43.1817 5.81942 43.3096 5.67683 43.4687 5.57706C43.6279 5.47729 43.812 5.42438 43.9998 5.42438C44.1877 5.42438 44.3717 5.47729 44.5309 5.57706C44.6901 5.67683 44.8179 5.81942 44.8998 5.98849L47.4398 11.1085L53.1398 11.9385C53.3249 11.9648 53.4989 12.0425 53.6421 12.1626C53.7852 12.2828 53.8919 12.4408 53.9498 12.6185C54.0029 12.7922 54.0076 12.977 53.9636 13.1532C53.9196 13.3294 53.8284 13.4902 53.6998 13.6185L49.5798 17.6185L50.5798 23.2485C50.6155 23.436 50.5968 23.6297 50.526 23.8069C50.4551 23.9841 50.335 24.1374 50.1798 24.2485C49.9987 24.3754 49.7807 24.4387 49.5598 24.4285V24.4285Z"
                            fill="#1F2937"
                          />
                        </g>
                        <g clipPath="url(#clip2)">
                          <path
                            d="M81.5598 24.4285C81.3999 24.4291 81.2422 24.3914 81.0998 24.3185L75.9998 21.6485L70.8998 24.3185C70.7342 24.4056 70.5475 24.4444 70.3609 24.4307C70.1743 24.4169 69.9953 24.3511 69.8443 24.2407C69.6932 24.1303 69.5762 23.9797 69.5064 23.8061C69.4367 23.6324 69.4171 23.4427 69.4498 23.2585L70.4498 17.6285L66.3298 13.6285C66.2013 13.5002 66.1101 13.3394 66.0661 13.1632C66.022 12.987 66.0268 12.8022 66.0798 12.6285C66.1378 12.4508 66.2444 12.2928 66.3876 12.1726C66.5307 12.0525 66.7047 11.9748 66.8898 11.9485L72.5898 11.1185L75.0998 5.98849C75.1817 5.81942 75.3096 5.67683 75.4687 5.57706C75.6279 5.47729 75.812 5.42438 75.9998 5.42438C76.1877 5.42438 76.3717 5.47729 76.5309 5.57706C76.6901 5.67683 76.8179 5.81942 76.8998 5.98849L79.4398 11.1085L85.1398 11.9385C85.3249 11.9648 85.4989 12.0425 85.6421 12.1626C85.7852 12.2828 85.8919 12.4408 85.9498 12.6185C86.0029 12.7922 86.0076 12.977 85.9636 13.1532C85.9196 13.3294 85.8284 13.4902 85.6998 13.6185L81.5798 17.6185L82.5798 23.2485C82.6155 23.436 82.5968 23.6297 82.526 23.8069C82.4551 23.9841 82.335 24.1374 82.1798 24.2485C81.9987 24.3754 81.7807 24.4387 81.5598 24.4285V24.4285Z"
                            fill="#1F2937"
                          />
                        </g>
                        <g clipPath="url(#clip3)">
                          <path
                            d="M113.56 24.4285C113.4 24.4291 113.242 24.3914 113.1 24.3185L108 21.6485L102.9 24.3185C102.734 24.4056 102.548 24.4444 102.361 24.4307C102.174 24.4169 101.995 24.3511 101.844 24.2407C101.693 24.1303 101.576 23.9797 101.506 23.8061C101.437 23.6324 101.417 23.4427 101.45 23.2585L102.45 17.6285L98.3298 13.6285C98.2013 13.5002 98.1101 13.3394 98.0661 13.1632C98.022 12.987 98.0268 12.8022 98.0798 12.6285C98.1378 12.4508 98.2444 12.2928 98.3876 12.1726C98.5307 12.0525 98.7047 11.9748 98.8898 11.9485L104.59 11.1185L107.1 5.98849C107.182 5.81942 107.31 5.67683 107.469 5.57706C107.628 5.47729 107.812 5.42438 108 5.42438C108.188 5.42438 108.372 5.47729 108.531 5.57706C108.69 5.67683 108.818 5.81942 108.9 5.98849L111.44 11.1085L117.14 11.9385C117.325 11.9648 117.499 12.0425 117.642 12.1626C117.785 12.2828 117.892 12.4408 117.95 12.6185C118.003 12.7922 118.008 12.977 117.964 13.1532C117.92 13.3294 117.828 13.4902 117.7 13.6185L113.58 17.6185L114.58 23.2485C114.616 23.436 114.597 23.6297 114.526 23.8069C114.455 23.9841 114.335 24.1374 114.18 24.2485C113.999 24.3754 113.781 24.4387 113.56 24.4285V24.4285Z"
                            fill="#1F2937"
                          />
                        </g>
                        <g clipPath="url(#clip4)">
                          <path
                            d="M135.146 16.911L131.052 12.9355L136.734 12.1081L137.256 12.032L137.488 11.558L139.998 6.42798L139.998 6.42798L140 6.42443L140.004 6.4329L142.544 11.5529L142.777 12.0225L143.296 12.0981L148.978 12.9255L144.883 16.901L144.502 17.2708L144.595 17.7934L145.595 23.4234L145.595 23.4234L145.597 23.4356L145.605 23.4463L145.56 24.4285L145.556 23.4474L145.564 23.4326L140.464 20.7626L140 20.5197L139.536 20.7626L134.436 23.4326L134.434 23.4334L135.434 17.8034L135.527 17.2808L135.146 16.911Z"
                            stroke="#1F2937"
                            strokeWidth="2"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                          <clipPath id="clip1">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(32)"
                            />
                          </clipPath>
                          <clipPath id="clip2">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(64)"
                            />
                          </clipPath>
                          <clipPath id="clip3">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(96)"
                            />
                          </clipPath>
                          <clipPath id="clip4">
                            <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(128)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  {/* className={"md:block " + (menu1 ? "block" : "hidden")} */}
                  <div className={"md:block block"}>
                    <p className="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">
                      I recently had the opportunity to explore Green University
                      of Bangladesh (GUB), and I must say it exceeded my
                      expectations in many ways. From its academic offerings to
                      its campus environment, GUB stands out as a beacon of
                      higher education in the region.
                    </p>

                    <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                      <div>
                        <img
                          src="https://i.ibb.co/QcqyrVG/Mask-Group.png"
                          alt="girl-avatar"
                        />
                      </div>
                      <div className="flex flex-col justify-start items-start space-y-2">
                        <p className="text-base font-medium leading-none text-gray-800">
                          Anna Kendrick
                        </p>
                        <p className="text-sm leading-none text-gray-600">
                          14 July 2021
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <JoditEditor
                ref={editor}
                value={content}
                tabIndex={1}
                onBlur={(newContent) => setContent(newContent)}
                onChange={(newContent) => {
                  setContent(newContent);
                }}
              />
              <button className="p-3 bg-indigo-500 text-white rounded mt-5">
                Post a Review
              </button>
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
