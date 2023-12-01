import { FC, useState } from "react";
import { Switch } from "@headlessui/react";
import { SetStateAction } from "react";
import { useTheme } from "../../../logic/theme/useTheme";
import { usePublish } from "nostr-hooks";
import { defaultRelays, getRelayList } from "../../../logic/contextStore/Nostr";

interface CreateTextNoteProps {}

const CreateTextNote: FC<CreateTextNoteProps> = () => {
  const [input, setInput] = useState<string>("");
  const [selectedFormat, setSelectedFormat] = useState("short"); // Default to Short Form
  const { darkMode } = useTheme();
  const userRelays = getRelayList(defaultRelays);
  const publish = usePublish(userRelays);

  const button = darkMode
    ? "bg-primaryLight text-textLight border-gray-300"
    : "bg-primaryDark text-textDark";

  const textstyle = darkMode
    ? "bg-backgroundDark text-textDark"
    : "bg-backgroundLight text-textLight";

  const handleFormatChange = (format: SetStateAction<string>) => {
    setSelectedFormat(format);
  };


  const handleSend = async () => {
    // add tags?
    // add Handle Title and Images add tags!! default Tags...?
    const baseEvent = {
      kind: selectedFormat === "short" ? 1 : 30023, 
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
      <div className="mb-5">
        <Switch.Group>
          <div className="flex items-center">
            <Switch.Label className="mr-4">Switch Content Type</Switch.Label>
            <Switch
              checked={selectedFormat === "long"}
              onChange={() =>
                handleFormatChange(
                  selectedFormat === "short" ? "long" : "short"
                )
              }
              className={`${
                selectedFormat === "long" ? "bg-purple-600" : `${button}`
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none `}
            >
              <span
                className={`${
                  selectedFormat === "long" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
            <div className="ml-3 text-sm font-semibold">
              {selectedFormat === "long" ? "Long Format" : "Short Format"}
            </div>
          </div>
        </Switch.Group>
      </div>

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
          <button
            className={`border rounded-[70px] p-1 px-2 mr-2 shadow-sm text-sm ${button}`}
          >
            Save Draft
          </button>
          <button
            onClick={handleSend}
            className={`border rounded-[70px] p-1 px-2 shadow-sm text-sm ${button}`}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTextNote;
