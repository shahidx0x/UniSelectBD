const EachWishCard = () => {
  return (
    <div>
      <div className="border-gray-200 border-b pb-10">
        <div className="px-4 flex flex-col jusitfy-center items-start mt-10">
          <div>
            <img
              src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png"
              alt="shoe"
            />
          </div>
        </div>
        <div className="px-4 mt-6 flex justify-between w-full  jusitfy-center items-center">
          <div>
            <p className="w-36 text-base leading-6 text-gray-800">
              Jet black sportsmen shoes
            </p>
          </div>
          <div>
            <p className="text-base font-semibold leading-4 text-gray-800">
              $90
            </p>
          </div>
        </div>
        x
        <div className="px-4 mt-6 flex justify-between w-full jusitfy-center items-center">
          <div>
            <a
              href="javascript:void(0)"
              className="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"
            >
              View details
            </a>
          </div>
          <div>
            <button className="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800">
              <p>Remove Item</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachWishCard;
