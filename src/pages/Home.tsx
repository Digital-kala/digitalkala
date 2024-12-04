import { contentPaddingClass, Layout } from "../components";
import {
  motoCard,
  partnerOrganizationIcon,
  projectProfileCard,
  teamProfileCard,
} from "./Utils";

import { MdOutlineHandshake } from "react-icons/md";

import { PartnerProps, ProfileProps, ProgramProps } from "./props";

import teamJson from "../data/team.json";
import partnersJson from "../data/partners.json";
import programsJson from "../data/programs.json";

const hookTitleClass = "font-bold text-5xl font-['WebsiteFontBold']";
const sectionTitleClass =
  "font-bold text-3xl font-['WebsiteFontMedium'] tracking-wider text-center";

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
            <p className="!leading-7">
              Our vision is one of a digitally literate Nepal where everyone,
              regardless of their socioeconomic, geographical, or linguistic
              background, is empowered to thrive in the digital age.
            </p>
            <p className="!leading-7">
              Our mission is to bridge the digital divide by equipping
              marginalized and underprivileged communities with the knowledge
              and tools to explore and excel in the digital realm. We aim to
              provide hands-on training workshops, mentorship programs, and
              resource compilations to enable participants to secure academic
              and professional opportunities.
            </p>
            <p className="!leading-7">
              By fostering a sense of curiosity, confidence, and collaboration
              between educators and learners, we aim to create a community of
              lifelong learners who are able to deploy their digital awareness
              and skills to successfully navigate the ongoing digital
              revolution.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0C3457] py-[20vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-white"}>Our Moto</div>
          <div className="grid grid-cols-4 gap-10 text-white/70">
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              MdOutlineHandshake
            )}
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              MdOutlineHandshake
            )}
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              MdOutlineHandshake
            )}
            {motoCard(
              "Moto",
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              MdOutlineHandshake
            )}
          </div>
        </div>
      </div>

      <div
        className="bg-[#0C3457] py-[20vh] flex flex-col justify-center"
        id="project"
      >
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-white"}>Our Programs</div>
          <div className="flex overflow-x-auto snap-x">
            <div className="grid grid-flow-col auto-cols-max gap-10">
              {programsJson.map((program: ProgramProps, idx: number) =>
                projectProfileCard(
                  idx,
                  program.name,
                  program.description,
                  program.image
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-[20vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div
            className={sectionTitleClass + " flex justify-center text-[#0C3457"}
          >
            Our Partners
          </div>
          <div className="grid grid-cols-6 gap-12 gap-y-24 text-justify">
            {partnersJson.map((partner: PartnerProps, idx: number) =>
              partnerOrganizationIcon(
                idx,
                partner.name,
                partner.logo,
                partner.websiteUrl
              )
            )}
          </div>
        </div>
      </div>

      <div
        className="bg-[#A5BDD1] py-[20vh] flex flex-col justify-center"
        id="team"
      >
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-[#0C3457]"}>Our Team</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamJson.map((profile: ProfileProps, idx: number) =>
              teamProfileCard(
                idx,
                profile.name,
                profile.role,
                profile.imageUrl,
                profile.linkedinUrl
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
