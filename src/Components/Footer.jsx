const Footer = () => {
  return (
    <>
      <div className="px-[5%] bg-[#001c06] py-[3%] text-white uppercase md:flex ">
        <div className="md:w-[60%]">
          <div>
            <div className="font-bold">Contact</div>
            <div className="pt-4">(123)4567 1234 - (567) 1234 1234</div>
          </div>
          <div>
            <div className="font-bold pt-4">Address</div>
            <div className="pt-4 md:w-[40%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-3 md:gap-40 ">
          <div>
            <ol>
              <li className="font-bold md:pt-0 pt-4">Menu</li>
              <li className="md:pt-4">Galery</li>
              <li className="md:pt-4">Category</li>
              <li className="md:pt-4">Best Offer</li>
              <li className="md:pt-4">Promo</li>
              <li className="md:pt-4">Contact</li>
            </ol>
          </div>
          <div>
            <ol>
              <li className="font-bold pt-4 md:pt-0">FAQ</li>
              <li className="md:pt-4">Paymant</li>
              <li className="md:pt-4">Order</li>
              <li className="md:pt-4">Manage Delivery</li>
            </ol>
          </div>
          <div>
            <ol>
              <li className="font-bold pt-4 md:pt-0">Support</li>
              <li className="md:pt-4">Call of delivery</li>
              <li className="md:pt-4">Online Chat</li>
              <li className="md:pt-4">Call center</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="bg-[#001c06] text-white text-center py-[2%]">
        C 2021-2022, ALL RIGHTS RESERVED
      </div>
    </>
  );
};

export default Footer;
