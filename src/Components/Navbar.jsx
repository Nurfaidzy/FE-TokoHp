import React from "react";
import {
  BiCart,
  BiSearch,
  BiUserCircle,
  BiDotsVerticalRounded,
} from "react-icons/bi";
const Navbar = () => {
  const [Nav, setNav] = React.useState(false);
  const klik = () => {
    setNav(!Nav);
  };
  return (
    <>
      <div>
        <div className="flex font-bold text-xl justify-between py-2 px-2 md:invisible visible">
          <div className="">Toko</div>
          <div>
            <BiDotsVerticalRounded onClick={klik} />
          </div>
        </div>
      </div>
      <div className="md:px-[5%] md:py-[2%] md:visible invisible  ">
        <div className="flex justify-between ">
          <div className="font-bold text-2xl">Toko</div>
          <div>
            <ol className="flex gap-20 pt-4">
              <li>Home</li>
              <li>Product</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact Us</li>
            </ol>
          </div>
          <div>
            <ol className="flex gap-3 pt-4 text-xl ">
              <li>
                <BiCart />
              </li>
              <li>
                <BiSearch />
              </li>
              <li>
                <BiUserCircle />
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
