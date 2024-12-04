import React from "react";
import { IconType } from "react-icons";
import { handleURLClick } from "../components";

import { IoLogoLinkedin } from "react-icons/io5";

export function partnerOrganizationIcon(
  index: number,
  name: string,
  logoURL: string,
  websiteURL?: string
) {
  return (
    <div
      key={`partner-${index}`}
      className={"space-y-4 col-span-1 " + (websiteURL && " cursor-pointer")}
      onClick={() => websiteURL && handleURLClick(websiteURL)}
    >
      <img
        src={logoURL}
        className="h-[15vh] rounded-xl py-2 object-contain w-full"
      />
      <center className="text-xs leading-5">{name} </center>
    </div>
  );
}

export function motoCard(title: string, description: string, icon: IconType) {
  return (
    <div className="col-span-1 bg-white/20 rounded-xl p-8 space-y-5 shadow shadow-white/30 drop-shadow-lg relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center ">
          {React.createElement(icon, { className: "text-[#0C3457] w-7 h-7" })}
        </div>
      </div>
      <div className="text-xl font-bold text-center">{title}</div>
      <p className="text-sm text-justify">{description}</p>
    </div>
  );
}

export function projectProfileCard(
  idx: number,
  name: string,
  description: string,
  image?: string
) {
  return (
    <div
      key={`project-${idx}`}
      className="snap-start col-span-1 bg-white/20 rounded-xl p-4 space-y-4 text-white shadow shadow-white/30 drop-shadow-lg w-96 mb-0.5"
    >
      <img
        src={
          image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNItRCgZBEtOjEeVdZA7HYM1xb0SxdlxwLw&s"
        }
        alt="hero"
        className="h-[30vh] w-full bg-white rounded-lg prevent-select object-cover"
      />
      <div className="space-y-2 py-3">
        <div className="text-lg font-bold">{name}</div>
        <p className="text-xs text-justify">{description}</p>
      </div>
    </div>
  );
}

export function teamProfileCard(
  idx: number,
  name: string,
  role: string,
  image?: string,
  linkedInURL?: string
) {
  return (
    <div
      key={`team-${idx}`}
      className="col-span-1 bg-[#0C3457] rounded-xl p-4 space-y-4 text-white shadow shadow-black/80 drop-shadow-lg hoverFloat mb-0.5"
    >
      <img
        src={
          image ||
          "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg"
        }
        alt="hero"
        className="h-[30vh] w-full bg-white rounded-lg prevent-select object-cover"
      />
      <div className="space-y-2 pt-3">
        <div className="text-lg font-bold">{name}</div>
        <div className="flex justify-between">
          <div className="text-xs mt-auto">{role}</div>
          {linkedInURL && (
            <IoLogoLinkedin
              size={20}
              className="cursor-pointer hover:text-[#FFC632] mt-auto"
              onClick={() => handleURLClick(linkedInURL)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
