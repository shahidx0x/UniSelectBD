const NoticeManagementRow = () => {
  return (
    <tr className="border-gray-200 border-b">
      <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-28">
        <p className=" text-base leading-4 text-gray-800 p-5">
          Jet black sportsmen shoes
        </p>
      </th>
      <th className="my-10 pl-6 lg:pl-20 2xl:pl-52">
        <p className="font-normal">short description of the course</p>
      </th>
      <th className="my-10 pl-4 lg:pl-12  2xl:pl-56">
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
          <p>Remove Notice</p>
        </button>
      </th>
    </tr>
  );
};

export default NoticeManagementRow;
