import { contentPaddingClass, Layout } from "../components";

const hookTitleClass = "font-bold text-5xl font-['WebsiteFontBold']";

export function Home() {
  return (
    <Layout pageTitle="Home">
      <div className="bg-[#0C3457] text-white h-screen flex flex-col justify-center" id="home">
        <div className={contentPaddingClass}>
          <div className="space-y-5 prevent-select">
            <div className={hookTitleClass}>Empowering Through</div>
            <div className="flex flex-row">
              <div className={hookTitleClass}>Education</div>
              <div className="text-base pl-4 slide-up">
                Explore Digital Literacy With Us
              </div>
            </div>
            
            <div className="pt-4">
              <button className="bg-[#FFC632] text-black px-12 py-3 rounded-lg text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#A5BDD1] h-screen flex flex-col justify-center">
        <div className={contentPaddingClass}>
          <div>
            Let’s create a world where everyone has equal access to technology
            and the digital skills required to succeed in the digital age.
          </div>
        </div>
      </div>
    </Layout>
  );
}
