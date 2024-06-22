import { PageHeader } from "@/components/PageHeader";
import { Link } from "react-router-dom";

export const Universities = () => {
  return (
    <>
      <div>
        <PageHeader />
        <div className="grid grid-col-1 xl:grid-cols-6 md:px-28">
          <div className="col-span-4 xl:col-span-2 py-20 shadow rounded-xl px-5">
            <p className="py-5 text-xl font-bold font-mono">
              Filters / Search your desired university
            </p>
            <div className="flex flex-col items-center w-full mb-4 md:flex-row">
              <input
                placeholder="Search By University Name"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Search
              </a>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Disciplines</label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-black   transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>Bachelor</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Program Level</label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>Bsc</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Course</label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-black   transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>Computer Science</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Subject</label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-blacktransition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>Software Engineering</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Institute Type </label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-black   transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>Technology</option>
              </select>
            </div>
          </div>
          <div className="col-span-4 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex py-5 flex justify-end">
              <span className="block">Page 2 of 4</span>
              <div className="space-x-1">
                <button
                  title="previous"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
                >
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  title="next"
                  type="button"
                  className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow"
                >
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:grid-cols-2">
              <Link
                to="/university/information"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://yt3.ggpht.com/a/AATXAJyCmLZtiHymnAU-voD0G6qTXkpAO_4avQ1Qkw=s900-c-k-c0xffffffff-no-rj-mo"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        Green University
                      </h6>
                      <p className="text-sm text-gray-900">
                        Green University of Bangladesh (GUB) (Bengali: গ্রিন
                        ইউনিভার্সিটি অব বাংলাদেশ) is a private university in
                        Dhaka, Bangladesh.
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
