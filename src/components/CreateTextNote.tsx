import { FC, useState } from "react";
// import { usePublish } from "nostr-hooks";
import ActionButton from "./CommonUI/ActionButton";
import { image, server } from "../public";
// import { defaultRelays } from "../actions/Relays";
import { usePublish } from "../logic/mutations";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, SVGProps, SetStateAction } from "react";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  const [input, setInput] = useState<string>("");
  //shortForm is the kind of event
  const [selectedFormat, setSelectedFormat] = useState(1); // Default to Short Form
  console.log(selectedFormat);
  const handleFormatChange = (format: SetStateAction<number>) => {
    setSelectedFormat(format);
  };
  const formats = [
    { id: 1, name: "Short Form" },
    { id: 30023, name: "Long Form" },
  ];
  const publish = usePublish();

  const handleSend = async () => {
    // Construct the event object
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
      <div className="w-full ">
        {/* <div>
          <img
            className="w-12 h-12 rounded-full mt-2"
            src="https://avatars.githubusercontent.com/u/122783162?v=4"
            alt="random pic"
          />
        </div> */}
        <div className="w-full"></div>
        <div className=" text-left mb-3">
          <Menu as="div" className=" inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-2 py-1 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
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
              <Menu.Items className="absolute  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {formats.map((format) => (
                    <Menu.Item key={format.id}>
                      {({ active }) => (
                        <button
                          onClick={() => handleFormatChange(format.id)}
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {selectedFormat === format.id ? (
                            <CheckIcon
                              className="mr-2 h-5 w-5"
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

        <div className="mb-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-32 border border-gray-300 rounded-2xl p-2 focus:outline-none focus:ring focus:border-blue-400"
            placeholder="Dynamic Questions will be renderd here"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <ActionButton title="Upload an Image" svg={image} style={"mr-2"} />
            <ActionButton title="Edit Relays" svg={server} />
          </div>
          <div className="flex">
            <ActionButton titleVisible={"Cancel"} style={"mr-2  px-2"} />
            <button onClick={handleSend}>Publish</button>
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
      className="check-circle w-6 h-6"
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
