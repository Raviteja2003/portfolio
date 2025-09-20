import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#111111] text-white font-bold p-4 flex flex-col items-center gap-2 lg:flex-row justify-between lg:px-8">
      <p>
        Made with ❤️ by Ravi Teja
      </p>
      <div>
        skills logos by{" "}
        <a
          href="https://icons8.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          ICONS8
        </a>
      </div>
    </footer>
  );
};

export default Footer;
