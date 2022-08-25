import Gambar from "./../Img/iphone.jpg";

const Hero = () => {
  return (
    <div className="md:px-[5%] px-4 md:py-[5%] py-[15%]">
      <div className="md:text-8xl text-4xl font-bold text-[#013508]">
        Find The Best
        <br />
        Smartphone For You
      </div>
      <div className="font-bold pt-[2%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
      <div className="md:flex  pt-[3%]">
        <div className="md:w-[30%] bg-[#141313] text-white p-6">
          <div className="md:pt-8 md:text-4xl text-2xl font-bold">
            Get The Best Smartphone For You Activity or Just Gaming
          </div>
          <div className="pt-4 font-bold text-2xl">Iphone 13</div>
          <div className="pt-4 md:font-bold ">
            iPhone lulus sekolah film. Anda tinggal memakainya. Mempersembahkan
            mode Sinematik Pembuat film menggunakan teknik bernama rack focus —
            memindahkan fokus dari satu subjek ke subjek lain — untuk
            mengarahkan perhatian penonton. Kini iPhone memudahkan Anda untuk
            menggunakan teknik penyampaian cerita yang sama dalam video Anda.
          </div>
          <div className="pt-10 font-bold">Iphone Price</div>
          <div className=" text-6xl font-bold text-[#ff9f29]">$999</div>
        </div>
        <div className="md:pl-10 pl-0 pt-4">
          <img src={Gambar} alt="iphone" className="md:h-[600px]" />
        </div>
      </div>
      <div className="md:flex pt-4">
        <div className="md:w-[40%] text-4xl p-6 font-bold">
          What You Want from our product
        </div>
        <div className="md:pt-6 pl-[8%] md:p-[3%] md:font-bold text-lg">
          Sistem kamera yang jauh lebih andal. Layar yang begitu responsif,
          setiap interaksi terasa baru lagi. Chip ponsel pintar paling cepat di
          dunia. Istimewa kokohnya. Dan lompatan besar dalam kekuatan baterai.
          Ayo jadi Pro.
        </div>
      </div>
    </div>
  );
};

export default Hero;
