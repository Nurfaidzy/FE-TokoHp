import {
  DiDocker,
  DiCss3,
  DiCisco,
  DiHaskell,
  DiJavascript1,
  DiLinux,
} from "react-icons/di";
const Workcompany = () => {
  return (
    <>
      <div className="px-[5%] md:flex md:justify-between pt-[10%]">
        <div className="md:text-6xl text-xl font-bold uppercase text-center md:text-start md:w-[40%] text-[#003906] ">
          Let's work together to build a beatiful room
        </div>
        <div className="md:w-[60%] md:pl-[45%] pt-10 md:pt-0 text-center md:text-start">
          <div className="font-bold text-sm">
            Contact us below to work together to build your project
          </div>
          <div className="pt-4">
            <button className="bg-[#003906] text-white w-full h-[50px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="px-[5%] font-bold md:text-lg md:pt-[5%] pt-[10%]">
        <div className="text-center">We work with various companies</div>
        <div className="flex justify-between md:text-6xl text-2xl text-[#777272] md:py-10 py-5 md:px-[10%]">
          <DiDocker />
          <DiCss3 />
          <DiCisco />
          <DiHaskell />
          <DiJavascript1 />
          <DiLinux />
        </div>
      </div>
    </>
  );
};

export default Workcompany;
