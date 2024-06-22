import {
  useDeleteRegisterdUniversityMutation,
  useGetRegisterUniversityQuery,
  useUpdateUniversityRegistrationStatusMutation,
} from "@/redux/services/AdminService";
import { useRegisterMutation } from "@/redux/services/AuthService";
import toast, { Toaster } from "react-hot-toast";

const ManageUniversity = () => {
  const { data } = useGetRegisterUniversityQuery();
  const [rejectUniversity] = useDeleteRegisterdUniversityMutation();
  const [updateStatus] = useUpdateUniversityRegistrationStatusMutation();
  const handleReject = (id) => {
    toast.promise(rejectUniversity({ id }), {
      loading: "please wait ....",
      success: "successfully reject",
      error: "rejection failed",
    });
  };
  const [register] = useRegisterMutation();
  const handleAccept = async (payload, id) => {
    try {
      register(payload).then((res) => {
        console.log(res.status);
        if (res.status !== 201) {
          toast.error("registration failed");
        } else {
          updateStatus({ id, payload: { status: "approved" } }).then((res) => {
            if (res.status === 200) {
              toast.success("status update success");
            } else {
              toast.error("status update failed ");
            }
          });
        }
      });
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="w-full dashboard-section">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Manage Requested University
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
                <th className="p-3">Documents</th>
                <th className="p-3">Manager Name</th>
                <th className="p-3">University Name</th>
                <th className="p-3">Address</th>
                <th className="p-3">Contact Number</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((each) => (
                <tr
                  key={each._id}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <a
                      href={each.permission_latter}
                      className="text-blue-500 underline"
                    >
                      view verified documents
                    </a>
                  </td>
                  <td className="p-3">
                    <p>{each.full_name}</p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-600">
                      {each.university_name || "demo university"}
                    </p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-600">{each.address}</p>
                  </td>
                  <td className="p-3">
                    <p className="text-gray-600">{each.contact_number}</p>
                  </td>

                  <td className="p-3 text-right gap-2 flex">
                    <span
                      onClick={() => handleReject(each._id)}
                      className="px-3 py-1 font-semibold rounded-md bg-red-600 text-gray-50 cursor-pointer"
                    >
                      <span>Reject</span>
                    </span>
                    <span
                      onClick={() =>
                        handleAccept(
                          {
                            first_name: each.full_name,
                            last_name: "u",
                            email: each.email,
                            role: "university-admin",
                            contact_number: each.contact_number,
                            gender: "",
                            address: each.address,
                            password: "123456",
                          },
                          each._id
                        )
                      }
                      className="px-3 py-1 font-semibold rounded-md bg-green-600 text-gray-50 cursor-pointer"
                    >
                      <span>Approve</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="items-center space-y-2 text-xs sm:space-y-0 sm:space-x-3 sm:flex">
          <span className="block">
            Page {data?.meta?.currentPage} of {data?.meta?.totalPages}
          </span>
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

export default ManageUniversity;
