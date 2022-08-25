import wp from "./../Img/wp.jpg";

const Product = () => {
  return (
    <div className="px-[5%]">
      <div className="text-center font-bold md:text-6xl text-4xl text-[#003906]">
        OUR PRODUCT COLLECTIONS
      </div>
      <div className="flex justify-center">
        <div className="md:flex pt-[5%]">
          <div className="w-full flex justify-center">
            <img src={wp} alt="wp" className="w-[1000px]" />
          </div>
          <div className="md:w-[40%] py-[8%] text-center bg-[#141313] text-white">
            <div className="font-bold md:text-6xl text-2xl">
              FIND A WIDE SELECTION OF PRODUCTS
            </div>
            <div className="pt-6 md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <hr className="border-1 border-[#a2a4a5]" />
      </div>
    </div>
  );
};

export default Product;
