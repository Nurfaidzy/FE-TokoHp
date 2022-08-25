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
      <div className="text-center font-bold uppercase text-6xl">
        Our Service
      </div>
      <div>
        <div className="flex pt-10 w-full">
          <div
            className={
              ser1 ? "w-[30%] text-6xl font-bold" : "w-full text-6xl font-bold"
            }
          >
            HOW OUR TEAM SERVE YOU WELL
          </div>
          {ser1 && (
            <div className="w-[70%] text-xl pl-[10%]">
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
        <div className="flex pt-10 w-full">
          <div
            className={
              ser2 ? "w-[30%] text-6xl font-bold" : "w-full text-6xl font-bold"
            }
          >
            FAST AND ACCURATE PLANT DELIVERY
          </div>
          {ser2 && (
            <div className="w-[70%] text-xl pl-[10%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              eveniet commodi, id ea iste praesentium eaque laudantium corrupti,
              alias fugit accusamus, recusandae et repellendus asperiores
              obcaecati! Quo deleniti consectetur nostrum!
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
        <div className="flex pt-10 w-full">
          <div
            className={
              ser3 ? "w-[30%] text-6xl font-bold" : "w-full text-6xl font-bold"
            }
          >
            PLANT FRESHNESS COMES FIRST
          </div>
          {ser3 && (
            <div className="w-[70%] text-xl pl-[10%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              perspiciatis eveniet nostrum ab quis beatae reprehenderit est
              debitis distinctio, enim nesciunt unde voluptatibus, ipsum harum,
              placeat illum reiciendis veniam modi!
            </div>
          )}

          <div className="flex justify-end">
            <div className={ser3 && "pt-10"} onClick={klik3}>
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
        <div className="flex pt-10 w-full">
          <div
            className={
              ser4 ? "w-[30%] text-6xl font-bold" : "w-full text-6xl font-bold"
            }
          >
            SUITABILITY IN PROVIDING THE RIGHT FERTILIZER
          </div>
          {ser4 && (
            <div className="w-[70%] text-xl pl-[10%]">
              We always give the best advice to our customers they want
              something interesting. Recommend good plants and serve customers
              in a friendly manner because we can develop into what we are today
            </div>
          )}

          <div className="flex justify-end">
            <div className={ser4 && "pt-10"} onClick={klik4}>
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
