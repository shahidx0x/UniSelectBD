import { toastOption } from "@/config/toast.config";
import useForm from "@/hooks/useForm";
import { useRegisterUniversityMutation } from "@/redux/services/AuthService";
import toast, { Toaster } from "react-hot-toast";
import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import { useState } from "react";

const uploader = Uploader({
  apiKey: "public_kW15c7pEHsAvmZrfWast8DcUc2Bf",
});
const options = { multi: true };
const UniversitySignupRequest = () => {
  const initialValues = {
    permission_latter: "",
    full_name: "",
    university_name: "",
    email: "",
    contact_number: "",
    address: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(initialValues);
  const [imageUpload, setImageUpload] = useState(null);
  const [register] = useRegisterUniversityMutation();

  const submitForm = async () => {
    if (imageUpload) formData.permission_latter = imageUpload;
    try {
      const result = await toast.promise(register(formData).unwrap(), {
        loading: "Please wait...",
        success: (
          <b>Register success ! Please Check Mail for Admin Confirmfation</b>
        ),
        error: <b>Login Failed</b>,
      });
      console.log("Login successful:", result.data);
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.data?.message || "An unexpected error occurred");
    }
  };
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={toastOption}
      />
      <div className="relative">
        <img
          src="https://www.openaccessgovernment.org/wp-content/uploads/2023/05/iStock-1138138146-scaled.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  The quick, brown fox <br className="hidden md:block" />
                  jumps over a{" "}
                  <span className="text-teal-accent-400">lazy dog</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl underline font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    University Registration Request
                  </h3>
                  <form onSubmit={handleSubmit(submitForm)}>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="fullName"
                          className="inline-block mb-1 font-medium"
                        >
                          Representative Full Name
                        </label>
                        <input
                          placeholder="John Doe"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="fullName"
                          name="full_name"
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="fullName"
                          className="inline-block mb-1 font-medium"
                        >
                          University Name
                        </label>
                        <input
                          placeholder="John Doe University"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="university_name"
                          name="university_name"
                          value={formData.university_name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="email"
                          className="inline-block mb-1 font-medium"
                        >
                          University Verified Email
                        </label>
                        <input
                          placeholder="john.doe@example.org"
                          required
                          type="email"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="mb-1 sm:mb-2">
                        <label
                          htmlFor="contactNumber"
                          className="inline-block mb-1 font-medium"
                        >
                          University Contact Number
                        </label>
                        <input
                          placeholder="01811111111"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="contact_number"
                          name="contact_number"
                          value={formData.contact_number}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="">
                        <label
                          htmlFor="address"
                          className="inline-block mb-1 font-medium"
                        >
                          University Address
                        </label>
                        <input
                          placeholder="Dhaka, Bangladesh"
                          required
                          type="text"
                          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div>
                      <UploadButton
                        uploader={uploader}
                        options={options}
                        onComplete={(files) =>
                          setImageUpload(files.map((x) => x.fileUrl).join("\n"))
                        }
                      >
                        {({ onClick }) => (
                          <button
                            className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md 4 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none`}
                            onClick={onClick}
                          >
                            Upload Verified Document
                          </button>
                        )}
                      </UploadButton>
                    </div>

                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        disabled={imageUpload ? false : true}
                        className={`inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md 4 ${
                          imageUpload
                            ? "bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700"
                            : "bg-gray-500 cursor-pointer"
                        }   focus:shadow-outline focus:outline-none`}
                      >
                        Request University Registration
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySignupRequest;
