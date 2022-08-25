import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";
import { useState } from "react";
const Service = () => {
  const [ser1, setSer1] = useState(false);
  const [ser2, setSer2] = useState(false);
  const [ser3, setSer3] = useState(false);
  const [ser4, setSer4] = useState(false);
  const klik1 = () => {
    setSer1(!ser1);
  };
  const klik2 = () => {
    setSer2(!ser2);
  };
  const klik3 = () => {
    setSer3(!ser3);
  };
  const klik4 = () => {
    setSer4(!ser4);
  };
  return (
    <div className="px-[5%] py-[5%]">
      <div className="text-center font-bold uppercase md:text-6xl text-4xl">
        Our Service
      </div>
      <div>
        <div className={ser1 ? "md:flex pt-10 w-full" : "flex pt-10 w-full"}>
          <div
            className={
              ser1
                ? "md:w-[30%] md:text-6xl text-xl font-bold"
                : "md:w-full md:text-6xl text-xl font-bold"
            }
          >
            HOW OUR TEAM SERVE YOU WELL
          </div>
          {ser1 && (
            <div className="md:w-[70%] md:text-xl md:pl-[10%] pt-2 md:pt-0 ">
              We always give the best advice to our customers they want
              something interesting. Recommend good plants and serve customers
              in a friendly manner because we can develop into what we are today
            </div>
          )}

          <div className="flex justify-end">
            <div className={ser1 && "pt-10 "} onClick={klik1}>
              {!ser1 ? (
                <AiOutlineDownCircle className="text-6xl" />
              ) : (
                <AiOutlineUpCircle className="text-6xl" />
              )}
            </div>
          </div>
        </div>
        <div className="pt-[2%]">
          <hr className="border-1 border-black" />
        </div>
      </div>
      <div>
        <div className={ser2 ? "md:flex pt-10 w-full" : "flex pt-10 w-full"}>
          <div
            className={
              ser2
                ? "md:w-[30%] md:text-6xl text-xl font-bold"
                : "md:w-full md:text-6xl text-xl font-bold"
            }
          >
            FAST AND ACCURATE PLANT DELIVERY
          </div>
          {ser2 && (
            <div className="md:w-[70%] md:text-xl md:pl-[10%] pt-2 md:pt-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga
              magni repellendus quasi quo tenetur consequatur nam corporis ad
              illo doloremque aliquam, iste fugit vero placeat atque pariatur
              voluptas praesentium?
            </div>
          )}

          <div className="flex justify-end">
            <div className={ser2 && "pt-10 "} onClick={klik2}>
              {!ser2 ? (
                <AiOutlineDownCircle className="text-6xl" />
              ) : (
                <AiOutlineUpCircle className="text-6xl" />
              )}
            </div>
          </div>
        </div>
        <div className="pt-[2%]">
          <hr className="border-1 border-black" />
        </div>
      </div>
      <div>
        <div className={ser3 ? "md:flex pt-10 w-full" : "flex pt-10 w-full"}>
          <div
            className={
              ser3
                ? "md:w-[30%] md:text-6xl text-xl font-bold"
                : "md:w-full md:text-6xl text-xl font-bold"
            }
          >
            PLANT FRESHNESS COMES FIRST
          </div>
          {ser3 && (
            <div className="md:w-[70%] md:text-xl md:pl-[10%] pt-2 md:pt-0 ">
              We always give the best advice to our customers they want
              something interesting. Recommend good plants and serve customers
              in a friendly manner because we can develop into what we are today
            </div>
          )}

          <div className="flex justify-end">
            <div className={ser3 && "pt-10 "} onClick={klik3}>
              {!ser3 ? (
                <AiOutlineDownCircle className="text-6xl" />
              ) : (
                <AiOutlineUpCircle className="text-6xl" />
              )}
            </div>
          </div>
        </div>
        <div className="pt-[2%]">
          <hr className="border-1 border-black" />
        </div>
      </div>
      <div>
        <div className={ser4 ? "md:flex pt-10 w-full" : "flex pt-10 w-full"}>
          <div
            className={
              ser4
                ? "md:w-[30%] md:text-6xl text-xl font-bold"
                : "md:w-full md:text-6xl text-xl font-bold"
            }
          >
            SUITABILITY IN PROVIDING THE RIGHT FERTILIZER
          </div>
          {ser4 && (
            <div className="md:w-[70%] md:text-xl md:pl-[10%] pt-2 md:pt-0 ">
              We always give the best advice to our customers they want
              something interesting. Recommend good plants and serve customers
              in a friendly manner because we can develop into what we are today
            </div>
          )}

          <div className="flex justify-end">
            <div className={ser4 && "pt-10 "} onClick={klik4}>
              {!ser4 ? (
                <AiOutlineDownCircle className="text-6xl" />
              ) : (
                <AiOutlineUpCircle className="text-6xl" />
              )}
            </div>
          </div>
        </div>
        <div className="pt-[2%]">
          <hr className="border-1 border-black" />
        </div>
      </div>
    </div>
  );
};

export default Service;
