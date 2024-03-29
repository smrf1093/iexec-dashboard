import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  return (
    <div className="text-center py-4 footer" style={{ backgroundColor: "#282c34" }}>
      
      <ul className="d-flex justify-content-center list-unstyled p-0 m-0">
        <li className="mx-2">
          <Image
            src="/icons/github-icon.svg"
            alt="github"
            width="28"
            height="29"
            className="grow"
          />
        </li>
        <li className="mx-2">
          <Image
            src="/icons/twitter-icon.svg"
            alt="twitter"
            width="28"
            height="28"
            className="grow"
          />
        </li>
        <li className="mx-2">
          <Image
            src="/icons/youtube-icon.svg"
            alt="youtube"
            width="28"
            height="29"
            className="grow"
          />
        </li>
        <li className="mx-2">
          <Image
            src="/icons/linkedin-icon.svg"
            alt="linkedin"
            width="28"
            height="32"
            className="grow"
          />
        </li>
      </ul>
    </div>
  );
};
