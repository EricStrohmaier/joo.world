import { useNavigate } from "react-router-dom";
import LayoutPage from "../components/LayoutPage";

export const CreateUser = () => {
 
  const navigate = useNavigate();

  /// In your React app
const sendCredentialsToExtension = () => {
  const dataToSend = {
    message: 'Hello from the React app!',
    someData: 42
  };

  // Send a message to the content script in the current tab
  window.postMessage(
    {
      type: 'myMessageType',
      data: dataToSend
    },
    '*'
  );
  console.log('Button clicked, sending data to extension:', dataToSend);

};

// Listen for messages from the extension
window.addEventListener('message', (event) => {
  if (event.source === window && event.data.type === 'extensionResponse') {
    const response = event.data.response;
    console.log('Received response from extension:', response);
  }
});


  

  return (
    <LayoutPage>
      <div className="flex justify-center min-h-full">
        <div className="flex flex-col items-center flex-1 px-4 my-12 md:justify-center sm:px-6 lg:px-20 xl:px-24 ">
          <div className="w-full max-w-md mx-auto ">
            <div className="mt-12">
              <button
                type="button"
                onClick={sendCredentialsToExtension} // Trigger the function to send credentials
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-purple-800 px-3 py-1.5 text-white"
              >
                <span className="text-sm font-semibold leading-6 md:text-lg">
                  Add Browser Extension
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );
};
