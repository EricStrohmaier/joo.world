import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { Metadata } from "../logic/types/nostr";
import { getMyProfile } from "../logic/contextStore/Nostr";

interface EventProps {
  event: {
    pubkey: string;
    content: string;
    previewLink?: string;
    // Add other properties from your event object
  };
}

const MyEvent: React.FC<EventProps> = ({ event }) => {
  const [userMetadata, setUserMetadata] = useState<Metadata | null>(null); // Adjust the type as needed
  const defaultAvatar =
    "https://imgs.search.brave.com/LekNe868ug643HRwk12QCPnv-1Tm1Ei6MKKrRJnT25E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA1LzgzLzc2LzE0/LzM2MF9GXzU4Mzc2/MTQ1MF9sbm1OVW1J/c1ZlMWx4OTZPcU82/WUNsMXdFUXJNdnk0/VC5qcGc";

  const [isRawView, setIsRawView] = useState(false);

  useEffect(() => {
    const fetchUserMetadata = async () => {
      // Assuming getMyProfile returns some specific type, adjust as needed
      const metadata = await getMyProfile(event.pubkey);
      setUserMetadata(metadata);
    };

    fetchUserMetadata();
  }, [event.pubkey]);

  const toggleView = () => {
    setIsRawView(!isRawView);
  };

  const renderSanitizedContent = (content: string) => {
    const sanitizedContent = DOMPurify.sanitize(content, {
      ALLOWED_TAGS: ["br", "a", "img"],
      ALLOWED_ATTR: ["href", "target", "rel", "src", "alt"],
    });

    let index = 0;
    const placeholders: string[] = [];
    const replacedContent = sanitizedContent.replace(
      /(?:https?|ftp):\/\/[^\s]+/g,
      (url) => {
        placeholders.push(url);
        return `___REACT_COMPONENT_PLACEHOLDER_${index++}___`;
      }
    );

    const renderedContent = replacedContent.replace(
      /___REACT_COMPONENT_PLACEHOLDER_(\d+)___/g,
      (_, index) => {
        const url = placeholders[Number(index)];
        if (/\.(jpeg|jpg|gif|png|webp)$/.test(url)) {
          return `<img src="${url}" class="w-[45%] h-fit my-3 flex" alt="Preview Image" />`;
        } else {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#7d51fa]">${url}</a>`;
        }
      }
    );

    return <div dangerouslySetInnerHTML={{ __html: renderedContent }} />;
  };

  const sanitizeLink = (link: string) => {
    return DOMPurify.sanitize(link, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: ["href", "target", "rel"],
    });
  };

  const renderContent = () => {
    if (isRawView) {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(event, null, 2)
              .replace(/ /g, "&nbsp;")
              .replace(/\n/g, "<br>"),
          }}
        />
      );
    } else {
      return renderSanitizedContent(event.content);
    }
  };

  return (
    <div className="my-5 rounded-3xl bg-[#333333db] h-fit p-5 lg:p-10 overflow-x-scroll text-gray-300">
      <div className="flex items-center mb-3 space-x-2">
        <img
          className="w-10 h-10 rounded-full"
          src={userMetadata?.picture || defaultAvatar}
          alt="User Avatar"
        />
        <div>{userMetadata ? userMetadata.name : "Mr. Unknown"}</div>
      </div>
      <div>{renderContent()}</div>
      <div className="flex justify-between mt-3">
        {event.previewLink && (
          <div className="w-[75%] h-full">
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeLink(event.previewLink),
              }}
            />
          </div>
        )}
        <button className="px-2 py-1 bg-[#7d51fa] rounded-xl" onClick={toggleView}>View Raw data</button>
      </div>
    </div>
  );
};

export default MyEvent;
