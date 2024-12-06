import { contentPaddingClass, Layout } from "../components";
import {
  motoCard,
  partnerOrganizationIcon,
  programProfileCard,
  teamProfileCard,
} from "./Utils";

import { MdOutlineHandshake } from "react-icons/md";

import { ProfileProps } from "./props";

import teamJson from "../data/team.json";
import partnersJson from "../data/partners.json";
import programsJson from "../data/programs.json";
import Carousel from "../components/carousel";

import participantsImage from "../assets/image/participants.jpg";

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

      <div className="bg-[#0C3457] py-[15vh] flex flex-col justify-center">
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
        className="bg-[#0C3457] pt-[10vh] flex flex-col justify-center"
        id="project"
      >
        <div className={contentPaddingClass + " space-y-16"}>
          <center>
            <hr className="w-[35%] rounded-full opacity-50" />
          </center>
          <div className="text-white text-center font-light leading-6 text-2xl relative space-y-8">
            <div className="flex items-center justify-center relative">
              <span className="text-9xl opacity-20 absolute left-[10%] lg:left-[18%] transform -translate-x-full">
                &ldquo;
              </span>
              <p className="my-auto">
                Let’s create a world where everyone has equal access to
                technology
              </p>
            </div>
            <div className="flex items-center justify-center relative">
              <p className="my-auto">
                and the digital skills required to succeed in the digital age.
              </p>
              <span className="text-9xl opacity-20 absolute right-[10%] lg:right-[18%] transform translate-x-full">
                &rdquo;
              </span>
            </div>
          </div>
          <center>
            <hr className="w-[35%] rounded-full opacity-50" />
          </center>
        </div>
      </div>

      <div className="bg-[#0C3457] py-[15vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-white"}>Our Programs</div>
          <Carousel
            items={programsJson}
            ItemTemplate={({ item }) => programProfileCard(item)}
            autoMove={false}
            numVisibleItems={3}
          />
        </div>
      </div>

      <div
        className="py-[15vh] flex flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(12, 52, 87, 0.8), rgba(12, 52, 87, 0.8)), url(${participantsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={contentPaddingClass + " space-x-20 flex justify-between"}
        >
          <div className={sectionTitleClass + " text-white pl-[10%] space-y-5"}>
            <div>10+</div>
            <div className="text-base">Programs</div>
          </div>
          <div className={sectionTitleClass + " text-white space-y-5"}>
            <div>10+</div>
            <div className="text-base">Programs</div>
          </div>
          <div className={sectionTitleClass + " text-white pr-[10%] space-y-5"}>
            <div>10+</div>
            <div className="text-base">Programs</div>
          </div>
        </div>
      </div>

      <div className="bg-white py-[15vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-[#0C3457]"}>
            Testimonials
          </div>
          <div className="flex space-x-5 px-[10%]">
            <div className="relative">
              <div className="h-[26vh] w-[20vh] rounded-lg prevent-select" />
              <div className="h-[26vh] w-[20vh] rounded-lg prevent-select absolute bottom-[1.8rem] right-5 bg-[#A5BDD1] opacity-50 drop-shadow-lg" />
              <div className="h-[26vh] w-[20vh] absolute z-10 top-0">
                <img
                  src="https://i.pinimg.com/736x/73/17/a5/7317a548844e0d0cccd211002e0abc45.jpg"
                  alt="participant"
                  className="h-full w-full rounded-lg prevent-select object-cover drop-shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-10 px-16">
              <p className="text-justify !leading-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="font-['WebsiteFontBold'] text-right">
                - Participant Name
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[#A5BDD1] py-[15vh] flex flex-col justify-center"
        id="team"
      >
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-[#0C3457]"}>Our Team</div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {teamJson.map((profile: ProfileProps) => teamProfileCard(profile))}
          </div>
        </div>
      </div>

      <div className="bg-white pt-[10vh] pb-[5vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div
            className={sectionTitleClass + " flex justify-center text-[#0C3457"}
          >
            Our Partners
          </div>
          <div className="grid grid-cols-6 gap-12 gap-y-24 text-justify">
            <Carousel
              items={partnersJson}
              ItemTemplate={({ item }) => partnerOrganizationIcon(item)}
              autoMove={true}
              numVisibleItems={6}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
