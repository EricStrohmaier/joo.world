// Declare the 'chrome' namespace for TypeScript
declare namespace browser {
    // You can add declarations for specific APIs you want to use.
    namespace runtime {
      function sendMessage(message: any, responseCallback?: (response: any) => void): void;
      // Add other relevant declarations here
    }
  
    // Add declarations for other chrome.* namespaces as needed.
    // Example:
    // namespace extension {
    //   function getURL(path: string): string;
    // }
  }
  
  // Export the 'chrome' namespace so it's available globally
  export = browser;
  