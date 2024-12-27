import { contentPaddingClass } from "./utils";

import heroImage from "../assets/image/logo-white.svg";

export function NavBar({ pageTitle }: { pageTitle?: string }) {
  return (
    <nav
      className="bg-[#0C3457] w-full text-white py-5 z-50 fixed top-0"
      id={pageTitle}
    >
      <div className={contentPaddingClass}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between">
          <div className="w-[5rem]">
            <img src={heroImage} alt="hero" />
          </div>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button className="bg-[#25608F] px-6 py-2 rounded-md text-sm hoverFloat">
              Help us
            </button>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:outline-dashed"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => {
                const navbarSticky = document.getElementById("navbar-sticky");
                if (navbarSticky) {
                  navbarSticky.classList.toggle("hidden");
                }
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="md:items-center md:justify-between hidden w-full md:flex md:w-auto md:order-1 pt-5 md:pt-0"
            id="navbar-sticky"
          >
            <NavSection title={"Home"} scrollToID={"home"} />
            <NavSection title={"Project"} scrollToID={"project"} />
            <NavSection title={"Team"} scrollToID={"team"} />
            <NavSection title={"Contact"} scrollToID={"contact"} />
          </div>
        </div>
      </div>
    </nav>
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
