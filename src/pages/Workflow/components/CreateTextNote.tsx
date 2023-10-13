import { FC, useState } from "react";
import { usePublish } from "../../../logic/mutations";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, SVGProps, SetStateAction } from "react";
import { useTheme } from "../../../logic/queries/useTheme";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  const [input, setInput] = useState<string>("");
  //shortForm is the kind of event
  const [selectedFormat, setSelectedFormat] = useState(1); // Default to Short Form
  const { darkMode } = useTheme();
  const button = darkMode
    ? "bg-primaryDark text-textDark"
    : "bg-primaryLight text-textLight border-gray-300";

  const textstyle = darkMode
    ? "bg-backgroundDark text-textDark"
    : "bg-backgroundLight text-textLight";

  const handleFormatChange = (format: SetStateAction<number>) => {
    setSelectedFormat(format);
  };
  const formats = [
    { id: 1, name: "Short Textnote" },
    { id: 30023, name: "Long Blog Post" },
  ];
  const publish = usePublish();

  const handleSend = async () => {
    // add tags?
    // add Handle Title and Images add tags!! default Tags...?
    const baseEvent = {
      kind: selectedFormat,
      content: input,
    };
    try {
      const content = await publish(baseEvent);
      console.log(content);

      // Display a success message to the user
      alert("Event published successfully!");
    } catch (error) {
      console.error(error);

      // Display an error message to the user
      alert("An error occurred while publishing the event. Please try again.");
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="my-3 text-left ">
          <Menu as="div" className="inline-block text-left ">
            <div>
              <Menu.Button
                className={`inline-flex w-full ${button} border rounded-[70px] px-2 shadow-sm py-1 text-sm font-medium hover:bg-opacity-50`}
              >
                Choose Format
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={`absolute mt-2 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg w-fit ring-1 bg-white ring-black ring-opacity-5 focus:outline-none`}
              >
                <div className="px-1 py-1 ">
                  {formats.map((format) => (
                    <Menu.Item key={format.id}>
                      {({ active }) => (
                        <button
                          onClick={() => handleFormatChange(format.id)}
                          className={`${
                            active
                              ? `bg-primaryLight text-textLight`
                              : "text-textLight"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {selectedFormat === format.id ? (
                            <CheckIcon
                              className="w-5 h-5 mr-2"
                              aria-hidden="true"
                            />
                          ) : null}
                          {format.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {selectedFormat === 1 ? (
          <>
            {" "}
            <div className="mb-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`w-full min-h-[120px]  h-full  p-2  rounded-2xl focus:outline-none ${textstyle}`}
                placeholder="Dynamic Questions will be renderd here"
              />
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="mb-2">
              <input
                type="text"
                placeholder="Blog Title"
                className={`w-full h-full p-2 mb-2 rounded-2xl focus:outline-none ${textstyle}`}
              />
              <input
                type="text"
                placeholder="Image Url"
                className={`w-full h-full p-2 mb-2 rounded-2xl focus:outline-none ${textstyle}`}
              />
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={`w-full min-h-[120px]  h-full  p-2  rounded-2xl focus:outline-none ${textstyle}`}
                placeholder="What's your story today?"
              />
            </div>
          </>
        )}

        <div className="flex justify-end">
          <div className="flex">
            <button
              className={`border rounded-[70px] p-1 px-2 mr-2 shadow-sm  text-sm ${button}`}
            >
              Save Draft
            </button>{" "}
            <button
              className={`border rounded-[70px] p-1 px-2 shadow-sm  text-sm ${button}`}
              onClick={handleSend}
            >
              Publish
            </button>
            {/* <ActionButton titleVisible={"Publish"} style={"mr-2 px-2"} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTextNote;

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-6 h-6 check-circle"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}
