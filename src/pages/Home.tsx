import {
  contentPaddingClass,
  Layout,
  Carousel,
  TestimonialCarousel,
} from "../components";

import {
  motoCard,
  partnerOrganizationIcon,
  programProfileCard,
  teamProfileCard,
} from "./Utils";

import { MdOutlineHandshake } from "react-icons/md";

import { ProfileProps } from "./props";

import partnersJson from "../data/partners.json";
import programsJson from "../data/programs.json";
import teamJson from "../data/team.json";
import testimonialJson from "../data/testimonials.json";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import participantsImage from "../assets/image/background/participants.jpg";

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
          <div className="space-y-20">
            <div className={sectionTitleClass}>Our Vision</div>
            <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-2">
              <div className="space-y-5 text-justify col-span-1 m-auto">
                <p className="!leading-7">
                  Our vision is to build a digitally literate and empowered
                  Nepal where everyone, regardless of their background, has the
                  knowledge, skills, and confidence to thrive in the digital
                  age.
                </p>
              </div>
              <div className="col-span-1">
                <DotLottieReact
                  src="https://lottie.host/029ba928-3d5e-4f97-81d5-6f30e254d7fd/6OzgIYdvsf.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>

          <div className="space-y-20">
            <div className={sectionTitleClass}>Our Mission</div>
            <div className="grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-2">
              <div className="col-span-1 m-auto">
                <DotLottieReact
                  src="https://lottie.host/e04ccce9-5176-401e-a6c0-ad5f72c9aa2a/DKfyztdCJC.lottie"
                  loop
                  autoplay
                />
              </div>
              <div className="space-y-5 text-justify col-span-1">
                <p className="!leading-7">
                  Digital Kala strives towards bridging the digital divide by
                  equipping marginalized communities with the knowledge and
                  tools to successfully navigate the digital realm.
                </p>
                <p className="!leading-7">
                  We hope to create a community where everyone is able to
                  leverage digital tools, technologies, and platforms to foster
                  their personal and professional growth. We aim to provide
                  hands-on training workshops, mentorship programs, and tailored
                  resources to participants to enable them to secure academic
                  and professional opportunities.
                </p>
                <p className="!leading-7">
                  In addition to providing growth opportunities, we also hope
                  for Digital Kala to advocate for digital safety. We want to
                  achieve this by making participants aware of the threats and
                  issues they may face online while simultaneously preparing
                  them to take actions against said issues and safeguard
                  themselves.
                </p>
                <p className="!leading-7">
                  By integrating growth opportunities with a strong emphasis on
                  digital safety, we aim to cultivate a generation of digitally
                  empowered citizens who are not only aware of their rights and
                  responsibilities but also able to utilize digital tools
                  responsibly and effectively. We aspire to work with
                  policy-level stakeholders to create frameworks that promote
                  digitals rights, ensure inclusion, and set standards for
                  responsible digital citizenship.
                </p>
                <p className="!leading-7">
                  Our mission is to build a community of educators and learners
                  who can safely and responsibly participate in the ongoing
                  digital revolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0C3457] py-[15vh] flex flex-col justify-center">
        <div className={contentPaddingClass + " space-y-20"}>
          <div className={sectionTitleClass + " text-white"}>Our Moto</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-8 sm:space-y-0 gap-10 sm:gap-20 md:gap-10 text-white/70">
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
          backgroundImage: `linear-gradient(rgba(12, 52, 87, 0.8), rgba(12, 52, 87, 0.9)), url(${participantsImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={contentPaddingClass + " flex justify-around"}>
          <div
            className={
              sectionTitleClass + " text-lg md:text-5xl  text-white space-y-5"
            }
          >
            <div>10+</div>
            <div className="text-base">Programs</div>
          </div>

          <div
            className={
              sectionTitleClass + " text-lg md:text-5xl text-white space-y-5"
            }
          >
            <div>10+</div>
            <div className="text-base">Programs</div>
          </div>

          <div
            className={
              sectionTitleClass + " text-lg md:text-5xl text-white space-y-5"
            }
          >
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
          <TestimonialCarousel items={testimonialJson} />
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
