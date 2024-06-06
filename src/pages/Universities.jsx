import { PageHeader } from "@/components/PageHeader";

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
                <option>hello</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Program Level</label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>hello</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Course</label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-black   transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>hello</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Subject</label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-blacktransition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>hello</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-full mb-4">
              <label className="font-bold font-mono">Institute Type </label>
              <select className="flex-grow w-full h-12 px-4 mb-3 text-black   transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-gray-300 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <option>hello</option>
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
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        The doctor said
                      </h6>
                      <p className="text-sm text-gray-900">
                        Sportacus andrew weatherall goose Refined gentlemen
                        super mario des lynam alpha trion zap rowsdower.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        Skate ipsum dolor
                      </h6>
                      <p className="text-sm text-gray-900">
                        Bulbasaur Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        They urge you
                      </h6>
                      <p className="text-sm text-gray-900">
                        A flower in my garden, a mystery in my panties. Heart
                        attack never stopped old Big Bear.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        Baseball ipsum dolor
                      </h6>
                      <p className="text-sm text-gray-900">
                        Bro ipsum dolor sit amet gaper backside single track,
                        manny Bike epic clipless. Schraeder drop gondy.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        The doctor said
                      </h6>
                      <p className="text-sm text-gray-900">
                        Sportacus andrew weatherall goose Refined gentlemen
                        super mario des lynam alpha trion zap rowsdower.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        Skate ipsum dolor
                      </h6>
                      <p className="text-sm text-gray-900">
                        Bulbasaur Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        They urge you
                      </h6>
                      <p className="text-sm text-gray-900">
                        A flower in my garden, a mystery in my panties. Heart
                        attack never stopped old Big Bear.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="/"
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
              >
                <div className="flex flex-col h-full">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    className="object-cover w-full h-48"
                    alt=""
                  />
                  <div className="flex-grow border border-t-0 rounded-b">
                    <div className="p-5">
                      <h6 className="mb-2 font-semibold leading-5">
                        Baseball ipsum dolor
                      </h6>
                      <p className="text-sm text-gray-900">
                        Bro ipsum dolor sit amet gaper backside single track,
                        manny Bike epic clipless. Schraeder drop gondy.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
