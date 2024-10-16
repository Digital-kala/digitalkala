import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const animationURL = "https://lottie.host/22d2de7d-c927-4728-9a88-e5ef89e76518/Z33GkkbfLT.json"

function App() {
  return (
    <>
      <div className="justify-center align-middle content-center w-screen h-screen bg-slate-50 flex flex-col items-center">
        <div className="pb-4">
          <DotLottieReact src={animationURL} autoplay loop  />
        </div>
        <center>Website currently under construction . . .</center>
      </div>
    </>
  );
}

export default App;
