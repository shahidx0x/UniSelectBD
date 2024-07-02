import { selectCurrentUserId } from "@/redux/features/AuthSlice";
import { useGetUserByIdQuery } from "@/redux/services/UserService";
import { useSelector } from "react-redux";
import ReactImagePickerEditor from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";
import { useEffect, useState } from "react";
import useForm from "@/hooks/useForm";

const config2 = {
  borderRadius: "8px",
  language: "en",
  width: "330px",
  height: "250px",
  objectFit: "contain",
  compressInitial: null,
};
const Profile = () => {
  const userId = useSelector(selectCurrentUserId);
  const data = useGetUserByIdQuery(userId).data;
  const [imageSrc, setImageSrc] = useState();
  const initialImage = imageSrc || data?.data?.image

  const styles = {
    position: "relative",
    height: "0px",
    width: "0px",
    float: "left",
  };
  let initialValues = {
    first_name: '',
    last_name:'',
    contact:'',
    email: "",
    address:''
  };

  const { formData, handleChange, handleSubmit } = useForm(initialValues);
  const submitForm = () => {
    const fields = ['first_name', 'last_name', 'email', 'contact', 'zip', 'state', 'address'];
    fields.forEach(field => {
      if (formData[field] === '') {
        formData[field] = data?.data?.[field];
      }
    });
    if(imageSrc){
      formData.image = imageSrc;
    }
    console.log(formData);
  }

  return (
    <div>
      <section className="dashboard-section h-screen">
        <form
        onSubmit={handleSubmit(submitForm)}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <ReactImagePickerEditor
                      config={config2}
                      imageSrcProp={initialImage}
                      imageChanged={(newDataUri) => {
                        setImageSrc(newDataUri);
                      }}
                    />
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
          
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                 
                  className="input-field"
                  defaultValue={data?.data?.first_name}
                  onChange={handleChange}
                />
                <div data-lastpass-icon-root="" style={styles}></div>
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Last name"
                  className="input-field"
                  defaultValue={data?.data?.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3 flex flex-col">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  defaultValue={data?.data?.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3 flex flex-col">
                <label htmlFor="email" className="text-sm">
                  Contact
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Contact"
                  className="input-field"
                  defaultValue={data?.data?.contact}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder=""
                  className="input-field"
                  defaultValue={data?.data?.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder=""
                  className="input-field"
                  defaultValue={data?.data?.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  State / Province
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  placeholder=""
                  className="input-field"
                  defaultValue={data?.data?.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  placeholder=""
                  className="input-field"
                  defaultValue={data?.data?.zip}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="p-4 bg-indigo-400 rounded-md text-white">Save</button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Profile;
