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
const UniversityFeeInformaton = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [imageSrc, setImageSrc] = useState();
  console.log(imageSrc);


  const initialImage = "";
  return (
    <div>
      <div>
        <section className="dashboard-section">
          <form
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className="font-medium">University Fee Informaton</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci fuga autem eum!
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <label className="font-medium">Upload Image</label>
                <div className="col-span-full">
                  <ReactImagePickerEditor
                    config={config2}
                    imageSrcProp={initialImage}
                    imageChanged={(newDataUri) => {
                      setImageSrc(newDataUri);
                    }}
                  />
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

export default UniversityFeeInformaton;
