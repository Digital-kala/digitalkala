import { contentPaddingClass } from "./utils";

import heroImage from "../assets/image/logo-white.svg";

export function NavBar({ pageTitle }: { pageTitle?: string }) {
  return (
    <div
      className="bg-[#0C3457] w-full text-white py-6 z-50 fixed top-0"
      id={pageTitle}
    >
      <div className={contentPaddingClass}>
        <div className="flex flex-row justify-between items-center">
          <div className="w-[5rem] col-span-3">
            <img src={heroImage} alt="hero" />
          </div>

          <div className="flex flex-row ">
            <NavSection title={"Home"} scrollToID={"home"} />
            <NavSection title={"Project"} scrollToID={"project"} />
            <NavSection title={"Team"} scrollToID={"team"} />
            <NavSection title={"Contact"} scrollToID={"contact"} />
            <button className="bg-[#25608F] px-8 py-3 rounded-xl text-sm hoverFloat">
                Help us
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavSection({
  title,
  scrollToID,
}: {
  title: string;
  scrollToID: string;
}) {
  const handleScrollToClick = () => {
    const element = document.getElementById(scrollToID);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center ">
      <div
        onClick={handleScrollToClick}
        className="gap-1.5 mr-8 flex cursor-pointer p-2 text-sm text-white hover:text-[#FFC632]"
      >
        <p className="whitespace-nowrap hover-underline-animation">{title}</p>
      </div>
    </div>
  );
}
