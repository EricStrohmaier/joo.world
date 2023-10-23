import { FC, SVGProps, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { SetStateAction } from "react";
import { useTheme } from "../../../logic/queries/useTheme";
import { usePublish } from "../../../logic/mutations";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  const [input, setInput] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState("short"); // Default to Short Form
  const { darkMode } = useTheme();
  const button = darkMode
    ? "bg-primaryDark text-textDark"
    : "bg-primaryLight text-textLight border-gray-300";

  const textstyle = darkMode
    ? "bg-backgroundDark text-textDark"
    : "bg-backgroundLight text-textLight";

  const handleFormatChange = (format: SetStateAction<string>) => {
    setSelectedFormat(format);
  };

  const publish = usePublish();

  const handleSend = async () => {
    // add tags?
    // add Handle Title and Images add tags!! default Tags...?
    const baseEvent = {
      kind: selectedFormat === "short" ? 1 : 30023, // Short or Long Form
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
    <div className="w-full">
      <RadioGroup value={selectedFormat} onChange={handleFormatChange}>
        <div className="my-3 text-left">
          <div className={`inline-flex w-full ${button} border rounded-[70px] px-2 shadow-sm py-1 text-sm font-medium hover:bg-opacity-50`}>
            Choose Format
          </div>
          <div className="mt-2">
            <RadioGroup.Option value="short">
              {({ active }) => (
                <button
                  onClick={() => handleFormatChange("short")}
                  className={`${
                    active ? "bg-primaryLight text-textLight" : "text-textLight"
                  } group flex  items-center rounded-md px-2 py-2 text-sm`}
                >
                  {selectedFormat === "short" ? (
                    <CheckIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  ) : null}
                  Short Textnote
                </button>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option value="long">
              {({ active }) => (
                <button
                  onClick={() => handleFormatChange("long")}
                  className={`${
                    active ? "bg-primaryLight text-textLight" : "text-textLight"
                  } group flex max-w-[150px] w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  {selectedFormat === "long" ? (
                    <CheckIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                  ) : null}
                  Long Blog Post
                </button>
              )}
            </RadioGroup.Option>
          </div>
        </div>
      </RadioGroup>
      {selectedFormat === "short" ? (
        <div className="mb-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`w-full min-h-[120px] h-full p-2 rounded-2xl focus:outline-none ${textstyle}`}
            placeholder="Dynamic Questions will be rendered here"
          />
        </div>
      ) : (
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
            className={`w-full min-h-[120px] h-full p-2 rounded-2xl focus:outline-none ${textstyle}`}
            placeholder="What's your story today?"
          />
        </div>
      )}
      <div className="flex justify-end">
        <div className="flex">
          <button className={`border rounded-[70px] p-1 px-2 mr-2 shadow-sm text-sm ${button}`}>
            Save Draft
          </button>
          <button className={`border rounded-[70px] p-1 px-2 shadow-sm text-sm ${button}`} onClick={handleSend}>
            Publish
          </button>
        </div>
      </div>
    </div>
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
