const EachWishList = () => {
  return (
    <tr className="border-gray-200 border-b  ">
      <th>
        <img
          className="my-10 pl-4 lg:pl-10 2xl:pl-20"
          src="https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png"
          alt="shoe"
        />
      </th>
      <th className="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
        <p className=" text-base leading-4 text-gray-800">
          Jet black sportsmen shoes
        </p>
      </th>
      <th className="my-10  pl-6 lg:pl-20 2xl:pl-52">
        <p className>$90</p>
      </th>
      <th className="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
        <a
          href="javascript:void(0)"
          className="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline"
        >
          View details
        </a>
      </th>
      <th className="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800">
          <p>Remove Item</p>
        </button>
      </th>
    </tr>
  );
};

export default EachWishList;
