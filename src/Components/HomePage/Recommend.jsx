import pic1 from "./../Img/ipimg1.jpeg";
const Recommend = () => {
  return (
    <div className="bg-[#001c06] px-[5%] py-[4%] text-white">
      <div className="flex justify-between">
        <div className="w-[50%]">
          <div className="uppercase font-bold text-7xl">
            Choose your product
          </div>
          <div className="py-[3%]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>
          <div className="py-[3%]">
            <button className="px-8 py-4 bg-[#ff9f29] font-bold text-black  text-xl">
              More Products
            </button>
          </div>
          <div className="font-bold text-2xl text-end">NEW PLANTS 2022</div>
          <div className="py-4">
            <img src={pic1} alt="" className="w-full" />
          </div>
          <div className="flex justify-between">
            <div className="text-8xl font-bold text-[#ff9f29]">$74</div>
            <div className="w-[30%] text-end pt-4 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="font-bold text-2xl text-end uppercase pt-[10%]">
            new product 2022
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
