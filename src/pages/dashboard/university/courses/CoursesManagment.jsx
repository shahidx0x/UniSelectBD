import EachWishCard from "../../users/cards/EachWishCard";
import CoursesManagementRow from "./CoursesManagementRow";

export default function CoursesManagment() {
  return (
    <div className="dashboard-section overflow-scroll no-scrollbar">
      <div className="col-span-full max-w-96">
        <label htmlFor="firstname" className="text-sm font-medium">
          Courses Name
        </label>
        <input
          id="courses name"
          type="text"
          placeholder="course name"
          className="input-field border"
        />
      </div>
      <div className="col-span-full max-w-96">
        <label htmlFor="firstname" className="text-sm font-medium">
          Courses Short Description
        </label>
        <textarea
          id="courses description"
          type="text"
          placeholder="course description"
          className="input-field border"
        />
      </div>
      <button className="button my-2 mb-5">Add Courses</button>
      <div className="hidden sm:flex flex-col justify-start items-start">
        <table className="w-full whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-40">
                Name of course
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-64">
                Description
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-64">
                Actions
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-36 2xl:pr-20 pr-2 lg:pr-5" />
            </tr>
          </thead>
          <tbody className="w-full text-left">
            <CoursesManagementRow />
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
