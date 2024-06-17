const ManageAdminsAndRole = () => {
  return (
    <div className="w-full dashboard-section">
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Manage Admins and roles
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Invoice #</th>
                <th className="p-3">Client</th>
                <th className="p-3">Issued</th>
                <th className="p-3">Due</th>
                <th className="p-3 text-right">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Microsoft Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$15,792</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Tesla Inc.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$275</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Coca Cola co.</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$8,950,500</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
              <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50">
                <td className="p-3">
                  <p>97412378923</p>
                </td>
                <td className="p-3">
                  <p>Nvidia Corporation</p>
                </td>
                <td className="p-3">
                  <p>14 Jan 2022</p>
                  <p className="text-gray-600">Friday</p>
                </td>
                <td className="p-3">
                  <p>01 Feb 2022</p>
                  <p className="text-gray-600">Tuesday</p>
                </td>
                <td className="p-3 text-right">
                  <p>$98,218</p>
                </td>
                <td className="p-3 text-right">
                  <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                    <span>Pending</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
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
      </div>
    </div>
  );
};

export default ManageAdminsAndRole;
