import EachWishCard from "./cards/EachWishCard";
import EachWishList from "./cards/EachWishList";

export default function WishList() {
  return (
    <div className="dashboard-section overflow-scroll no-scrollbar">
      <div className="hidden sm:flex flex-col justify-start items-start">
        <table className="w-full whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                LOGO
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                NAME
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                CONTACT
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                LOCATIONS
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10" />
            </tr>
          </thead>
          <tbody className="w-full text-left">
            <EachWishList />
          </tbody>
        </table>
      </div>

      <div className=" flex justify-center items-center">
        <div className="sm:hidden flex flex-col justify-start items-start ">
          <EachWishCard />
          <EachWishCard />
        </div>
      </div>
    </div>
  );
}
