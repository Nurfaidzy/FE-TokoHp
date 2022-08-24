import Gambar from "./../Img/iphone.jpg";

const Hero = () => {
  return (
    <div className="md:px-[5%] md:py-[5%]">
      <div className="text-8xl font-bold">
        Find The Best
        <br />
        Smartphone For You
      </div>
      <div className="md:flex pt-[5%]">
        <div className="w-[30%] bg-[#141313] text-white p-6">
          <div className="pt-8 text-4xl font-bold">
            Get The Best Smartphone For You Activity or Just Gaming
          </div>
          <div className="pt-4 font-bold text-2xl">Iphone 13</div>
          <div className="pt-4 font-bold">
            iPhone lulus sekolah film. Anda tinggal memakainya. Mempersembahkan
            mode Sinematik Pembuat film menggunakan teknik bernama rack focus —
            memindahkan fokus dari satu subjek ke subjek lain — untuk
            mengarahkan perhatian penonton. Kini iPhone memudahkan Anda untuk
            menggunakan teknik penyampaian cerita yang sama dalam video Anda.
          </div>
          <div className="pt-10 font-bold">Iphone Price</div>
          <div className=" text-6xl font-bold text-[#ff9f29]">$999</div>
        </div>
        <div className="pl-10">
          <img src={Gambar} alt="iphone" className="h-[600px]" />
        </div>
      </div>
      <div className="flex pt-4">
        <div className="w-[40%] text-4xl p-6 font-bold">
          What You Want from our product
        </div>
        <div className="pt-6 pl-[8%] p-[3%] font-bold text-lg">
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
