import imgagain from "./../Img/iphone.jpg";
const Feedback = () => {
  return (
    <div className="px-[5%] py-[3%]">
      <div className="md:flex md:justify-between">
        <div className="md:w-[900px] pt-[5%] static   ">
          <div className="uppercase font-bold md:text-6xl text-2xl text-center md:text-start text-[#003906] static  ">
            their feedback after buying our product
          </div>
          <div className="pt-[5%] flex justify-center md:justify-start">
            <button as="button" className="py-4 px-6 bg-[#003906] text-white">
              See More Reviews
            </button>
          </div>
        </div>
        <div className="px-4">
          <div>
            <img
              src={imgagain}
              alt="background image"
              className="w-full pt-4 md:pt-0"
            />
          </div>
          <div className="flex justify-between font-bold pt-2 md:text-2xl">
            <div>December</div>
            <div>2022</div>
          </div>
        </div>
        <div className="md:w-[600px] md:text-start text-center pt-4 ">
          <div className="md:text-xl">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo
            corporis dolor inventore, deleniti quod dolores corrupti repudiandae
            voluptas ut in earum sit odit, nulla blanditiis perferendis aliquam
            explicabo eos!"
          </div>
          <div className="pt-4 md:pt-10 font-bold">Anonymous</div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
