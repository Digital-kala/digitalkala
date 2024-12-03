export function partnerOrganizationIcon(url: string, label: string) {
  return (
    <div className="space-y-4 col-span-1 ">
      <img
        src={url}
        className="h-[15vh] bg-white rounded-xl py-2 object-contain w-full"
      />
      <center className="text-xs">{label} </center>
    </div>
  );
}

export function motoCard(title: string, description: string) {
  return (
    <div className="col-span-1 bg-white/20 rounded-xl p-8 space-y-4 shadow shadow-white/30 drop-shadow-lg ">
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-sm">{description}</div>
    </div>
  );
}

export function projectProfileCard(name: string, description: string, image?: string ) {
  return (
    <div className="snap-start col-span-1 bg-white/20 rounded-xl p-4 space-y-4 text-white shadow shadow-white/30 drop-shadow-lg w-96 mb-0.5">
      <img
        src={image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNItRCgZBEtOjEeVdZA7HYM1xb0SxdlxwLw&s"}
        alt="hero"
        className="h-[30vh] w-full bg-white rounded-lg prevent-select object-cover"
      />
      <div className="space-y-2 py-3">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-xs">{description}</div>
      </div>
    </div>
  );
}


export function teamProfileCard(name: string, role: string, image?: string ) {
  return (
    <div className="col-span-1 bg-[#0C3457] rounded-xl p-4 space-y-4 text-white shadow shadow-black/80 drop-shadow-lg hoverFloat mb-0.5">
      <img
        src={image || "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2220431045.jpg"}
        alt="hero"
        className="h-[30vh] w-full bg-white rounded-lg prevent-select object-cover"
      />
      <div className="space-y-2 py-3">
        <div className="text-xl font-bold">{name}</div>
        <div className="text-sm">{role}</div>
      </div>
    </div>
  );
}
