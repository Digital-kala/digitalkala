import React from "react";

import { v4 as uuidv4 } from "uuid";

import { PartnerProps, ProfileProps, ProgramProps } from "./props";
import { handleURLClick } from "../components";

import { Fade } from "react-awesome-reveal";

import { IconType } from "react-icons";
import { IoLogoLinkedin } from "react-icons/io5";

export function partnerOrganizationIcon(partner: PartnerProps) {
  return (
    <Fade>
      <div
        key={`partner-${uuidv4()}`}
        className={
          "space-y-4 col-span-1 " +
          (partner.websiteUrl &&
            " cursor-pointer hover:rounded-lg hover:outline-slate-300 hover:outline-dashed")
        }
        onClick={() => partner.websiteUrl && handleURLClick(partner.websiteUrl)}
      >
        <img
          src={partner.logo}
          className="h-[15vh] rounded-xl py-2 object-contain w-full"
        />
        <center className="text-xs leading-5 h-[4vh]">{partner.name} </center>
      </div>
    </Fade>
  );
}

export function motoCard(title: string, description: string, icon: IconType) {
  return (
    <div className="col-span-1 bg-white/20 rounded-xl p-8 space-y-5 shadow shadow-white/30 drop-shadow-lg relative">
      <div className="text-xl font-bold text-center">{title}</div>
      <p className="text-sm text-justify pb-6">{description}</p>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center ">
          {React.createElement(icon, { className: "text-[#0C3457] w-7 h-7" })}
        </div>
      </div>
    </div>
  );
}

export function programProfileCard(program: ProgramProps) {
  return (
    <div
      key={`program-${uuidv4()}`}
      className="snap-start col-span-1 w-[26%] bg-white/20 rounded-xl space-y-4 text-white shadow shadow-white/30 drop-shadow-lg mb-auto"
    >
      <Fade>
        <img
          src={
            program?.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNItRCgZBEtOjEeVdZA7HYM1xb0SxdlxwLw&s"
          }
          alt="hero"
          className="h-[30vh] w-full rounded-t-xl prevent-select object-cover"
        />
        <div className="space-y-2 py-3  p-4">
          <div className="text-lg font-bold">{program.name}</div>
          <p className="text-xs text-justify">{program.description}</p>
        </div>
      </Fade>
    </div>
  );
}

export function teamProfileCard(profile: ProfileProps) {
  return (
    <div
      key={`team-${uuidv4()}`}
      className="col-span-1 bg-[#0C3457] rounded-xl p-4 space-y-4 text-white shadow shadow-black/80 drop-shadow-lg hoverFloat mb-0.5"
    >
      <img
        src={
          profile?.imageUrl ||
          "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg"
        }
        alt="hero"
        className="h-[30vh] w-full bg-white rounded-lg prevent-select object-cover"
      />
      <div className="space-y-2 pt-3">
        <div className="text-lg font-bold">{profile.name}</div>
        <div className="flex justify-between">
          <div className="text-xs mt-auto">{profile.role}</div>
          {profile.linkedinUrl && (
            <IoLogoLinkedin
              size={20}
              className="cursor-pointer hover:text-[#FFC632] mt-auto"
              onClick={() => handleURLClick(profile.linkedinUrl || "")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
