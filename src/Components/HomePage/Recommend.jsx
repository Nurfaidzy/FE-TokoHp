import pic1 from "./../Img/ipimg1.jpeg";
import pic2 from "./../Img/iphone2.png";
const Recommend = () => {
  return (
    <div className="bg-[#001c06] px-[5%] py-[4%] text-white">
      <div className="md:flex md:justify-between ">
        <div className="md:w-[50%]">
          <div className="uppercase font-bold md:text-7xl text-4xl text-center md:text-start">
            Choose your product
          </div>
          <div className="py-[3%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
          <div className="py-[3%] flex justify-center md:justify-start">
            <button className="px-8 py-4 bg-[#ff9f29] font-bold text-black  text-xl">
              More Products
            </button>
          </div>
          <div className="font-bold md:text-2xl text-4xl pt-6 md:pt-0 md:text-end text-center">
            NEW PLANTS 2022
          </div>
          <div className="py-4">
            <img src={pic1} alt="" className="w-full" />
          </div>
          <div className="flex justify-between">
            <div className="md:text-8xl text-6xl font-bold text-[#ff9f29]">
              $74
            </div>
            <div className="md:w-[30%] text-end md:pt-4 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:p-10">
          <div className="font-bold md:text-2xl text-4xl pt-6 md:pt-0 md:text-end text-center uppercase">
            new product 2022
          </div>
          <div className="flex md:justify-center pt-4">
            <img
              src={pic2}
              alt="product 2"
              className="w-full -mt-[12%] md:-mr-[20%]"
            />
          </div>
          <div className="flex justify-between">
            <div className="md:text-8xl text-6xl font-bold text-[#ff9f29]">
              $74
            </div>
            <div className="md:w-[30%] text-end md:pt-4 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
