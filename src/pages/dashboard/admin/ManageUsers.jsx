/* eslint-disable no-unused-vars */
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  useGetUserQuery,
  useUpdateUserRoleMutation,
} from "@/redux/services/AdminService";
import toast, { Toaster } from "react-hot-toast";

const ManageUsers = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  const [updateRole] = useUpdateUserRoleMutation();

  const handleRoleChange = async (id, role) => {
    toast.promise(updateRole({ id, payload: { role } }), {
      loading: "Updating Role...",
      success: <b>Role changed!</b>,
      error: <b>Role did not changed.</b>,
    });
  };
  return (
    <div className="w-full dashboard-section">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container p-2 mx-auto sm:p-4 text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Manage Users
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="bg-gray-300">
              <tr className="text-left">
                <th className="p-3">Client Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Role</th>
                <th className="p-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((user) => (
                <tr
                  key={user._id}
                  className="border-b border-opacity-20 border-gray-300 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{user.first_name + " " + user.last_name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user?.email}</p>
                  </td>
                  <td className="p-3">
                    <p>
                      {user.role === "user" ? (
                        <span className="px-3 py-1 font-semibold rounded-md bg-indigo-600 text-gray-50">
                          <span>User</span>
                        </span>
                      ) : user.role === "admin" ? (
                        <span className="px-3 py-1 font-semibold rounded-md bg-green-600 text-gray-50">
                          <span>Admin</span>
                        </span>
                      ) : (
                        <span className="px-3 py-1 font-semibold rounded-md bg-blue-600 text-gray-50">
                          <span>University Admin</span>
                        </span>
                      )}
                    </p>
                  </td>
                  <td className="p-3 text-right flex gap-2">
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className="bg-indigo-600 w-[6.5rem]">
                          Change Role
                        </MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem
                            onClick={() => handleRoleChange(user._id, "admin")}
                          >
                            Admin
                          </MenubarItem>
                          <MenubarItem
                            onClick={() => handleRoleChange(user._id, "user")}
                          >
                            User
                          </MenubarItem>
                          <MenubarItem
                            onClick={() =>
                              handleRoleChange(user._id, "university-admin")
                            }
                          >
                            University Admin
                          </MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
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

export default ManageUsers;
