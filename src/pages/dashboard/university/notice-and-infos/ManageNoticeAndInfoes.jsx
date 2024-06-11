import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

import "react-image-picker-editor/dist/index.css";

import NoticeManagementRow from "./NoticeManagementRow";

const ManageNoticeAndInfoes = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const styles = {
    position: "relative",
    height: "0px",
    width: "0px",
    float: "left",
  };

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
                <p className="font-medium">
                  University Notice Update and Managment
                </p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci fuga autem eum!
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full">
                  <label htmlFor="firstname" className="text-sm font-medium">
                    Notice Subject
                  </label>
                  <input
                    id="notice subject"
                    type="text"
                    placeholder="noteice subject"
                    className="input-field border"
                  />
                  <div data-lastpass-icon-root="" style={styles}></div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm font-medium">
                    Notice Content
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
            <button className="button">Publish</button>
          </div>
        </section>
      </div>
      <div className="hidden sm:flex flex-col justify-start items-start">
        <table className="w-full whitespace-nowrap">
          <thead
            aria-label="table heading"
            className="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b "
          >
            <tr>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-40">
                Title
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-64">
                Description
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-64">
                Actions
              </th>
              <th className="text-base font-medium leading-4 text-gray-600 2xl:pl-36 2xl:pr-20 pr-2 lg:pr-5" />
            </tr>
          </thead>
          <tbody className="w-full text-left">
            <NoticeManagementRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageNoticeAndInfoes;
