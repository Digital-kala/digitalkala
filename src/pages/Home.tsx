import { contentPaddingClass, Layout } from "../components";
import {
  motoCard,
  partnerOrganizationIcon,
  projectProfileCard,
  teamProfileCard,
} from "./Utils";

const hookTitleClass = "font-bold text-5xl font-['WebsiteFontBold']";
const sectionTitleClass =
  "font-bold text-3xl font-['WebsiteFontBold'] tracking-wider text-center";

export function Home() {
  return (
    <Layout pageTitle="Home">
      <div
        className="bg-[#0C3457] text-white h-screen flex flex-col justify-center"
        id="home"
      >
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
              <button className="bg-[#FFC632] text-black px-12 py-3 rounded-xl text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#A5BDD1] py-[20vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass}>Our Mission</div>
          <div className="space-y-5 text-justify">
            <div>
              Our vision is one of a digitally literate Nepal where everyone,
              regardless of their socioeconomic, geographical, or linguistic
              background, is empowered to thrive in the digital age.
            </div>
            <div>
              Our mission is to bridge the digital divide by equipping
              marginalized and underprivileged communities with the knowledge
              and tools to explore and excel in the digital realm. We aim to
              provide hands-on training workshops, mentorship programs, and
              resource compilations to enable participants to secure academic
              and professional opportunities.
            </div>
            <div>
              By fostering a sense of curiosity, confidence, and collaboration
              between educators and learners, we aim to create a community of
              lifelong learners who are able to deploy their digital awareness
              and skills to successfully navigate the ongoing digital
              revolution.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0C3457] py-[20vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-white"}>Our Moto</div>
          <div className="grid grid-cols-4 gap-10 text-white/70">
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            )}
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            )}
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            )}
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            )}
          </div>
        </div>
      </div>

      <div
        className="bg-[#0C3457] py-[20vh] flex flex-col justify-center"
        id="project"
      >
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-white"}>
            Our Projects
          </div>
          <div className="flex overflow-x-auto snap-x">
            <div className="grid grid-flow-col auto-cols-max gap-10">
              {projectProfileCard(
                "Project Name",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              )}
              {projectProfileCard(
                "Project Name",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              )}
              {projectProfileCard(
                "Project Name",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              )}
              {projectProfileCard(
                "Project Name",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              )}
              {projectProfileCard(
                "Project Name",
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-white py-[20vh] flex flex-col justify-center"
        id="team"
      >
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-[#0C3457]"}>Our Team</div>
          <div className="grid grid-cols-4 gap-10">
            {teamProfileCard(
              "Labbi Karmacharya",
              "Co-Founder",
              "https://cdn.prod.website-files.com/637b58dfc65fb87428edb28a/66e9a55ccba12f51ca7b7a57_labbi-horiz.jpg"
            )}
            {teamProfileCard(
              "Aastha Acharya",
              "Co-Founder",
              "https://meformyself.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-12-at-22.38.06.png"
            )}
            {teamProfileCard(
              "Dipa Rai",
              "Co-Founder",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmN-kYNJO8f43--Mcpt8rXfhzZrvxS5VQ39w&s"
            )}
            {teamProfileCard(
              "Pooja Shrestha",
              "Role",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeDatAId3Il0jFCVAEF_Q0uzcut1QukbJBGA&s"
            )}
            {teamProfileCard(
              "Aayusha Shrestha",
              "Role",
              "https://cdn.prod.website-files.com/637b58dfc65fb87428edb28a/64e3dc675f048a1377508e37_aayusha1.png"
            )}
            {teamProfileCard(
              "Animesh Singh Basnet",
              "Role",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZSiMILQ7MCJGp7KhrLvQtxFJsFpp7IgAstw&s"
            )}
            {teamProfileCard(
              "Unika Karmacharya",
              "Intern",
              "https://women-lead.org/wp-content/uploads/2023/10/IMG_1590.jpg"
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#A5BDD1] py-[30vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " flex justify-center"}>
            Our Collaborators
          </div>
          <div className="grid grid-cols-4 gap-12 gap-y-24 text-justify">
            {partnerOrganizationIcon(
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Women_LEAD_Logotype_Vector-01.svg/640px-Women_LEAD_Logotype_Vector-01.svg.png",
              "Women LEAD Nepal"
            )}
            {partnerOrganizationIcon(
              "https://codefornepal.org/assets/img/c4n_logo.png",
              "Code for Nepal"
            )}
            {partnerOrganizationIcon(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz0BcZywTtUYwki2g-zjV7gcTrqsZ0aH8cXQ&s",
              "The Rotaract Club of Kapilvastu"
            )}
            {partnerOrganizationIcon(
              "https://play-lh.googleusercontent.com/MlHp1bg5Qxh2Ky2VQXwenKM3W1NfnDPGNwUnvebhbqZIVPX55TK61yTfFnRRzozl0kI=w600-h300-pc0xffffff-pd",
              "Mary Ward School"
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
