import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import ReactImagePickerEditor from "react-image-picker-editor";
import "react-image-picker-editor/dist/index.css";

const config2 = {
  borderRadius: "8px",
  language: "en",
  width: "330px",
  height: "250px",
  objectFit: "contain",
  compressInitial: null,
};
const UniversityInformationManagment = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState();
  console.log(imageSrc);

  const styles = {
    position: "relative",
    height: "0px",
    width: "0px",
    float: "left",
  };
  const initialImage = "";
  return (
    <div>
      <div>
        <section className="dashboard-section">
          <form
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12 relative"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">University Information</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci fuga autem eum!
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="flex flex-col md:flex-row gap-10 col-span-3 ">
                  <div>
                    <label className="font-medium">
                      Upload University Logo
                    </label>
                    <ReactImagePickerEditor
                      config={config2}
                      imageSrcProp={initialImage}
                      imageChanged={(newDataUri) => {
                        setImageSrc(newDataUri);
                      }}
                    />
                  </div>
                  <div>
                    <label className="font-medium">
                      Upload University Cover
                    </label>
                    <ReactImagePickerEditor
                      config={config2}
                      imageSrcProp={initialImage}
                      imageChanged={(newDataUri) => {
                        setImageSrc(newDataUri);
                      }}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="firstname" className="text-sm font-medium">
                    University Name
                  </label>
                  <input
                    id="university name"
                    type="text"
                    placeholder="university name"
                    className="input-field border"
                  />
                  <div data-lastpass-icon-root="" style={styles}></div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm font-medium">
                    Address
                  </label>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={(newContent) => {
                      setContent(newContent);
                    }}
                  />
                </div>
              </div>
            </fieldset>
          </form>
          <div className="flex gap-10 mt-5 justify-end mr-10">
            <button className="button">save</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UniversityInformationManagment;
