export function WorkInProgress() {
  return (
    <div className="justify-center align-middle content-center w-screen h-screen flex flex-col items-center">
      <center>Website currently under construction . . .</center>
      <div className="pt-10 pb-5 text-center text-black/80 text-2xs md:text-xs absolute bottom-0 ">
        &copy; {new Date().getFullYear()} Digital Kala. All Rights Reserved.
      </div>
    </div>
  );
}
