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
      <div className="">
        <div className="flex font-bold text-2xl justify-between md:py-0 py-4 px-4 md:invisible visible">
          <div className="">Toko</div>
          <div>
            <BiDotsVerticalRounded onClick={klik} />
          </div>
        </div>
        {Nav && (
          <div className="flex justify-end mr-6  ">
            <ol
              className="grid grid-cols-1 gap-4 absolute text-right
             bg-[#003906] rounded-xl pl-10 py-4 pr-2 font-bold text-xl
              text-white shadow-lg"
            >
              <li>Home</li>
              <li>Product</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact Us</li>
            </ol>
          </div>
        )}
      </div>
      <div className="fixed bg-white -mt-8 pb-8 w-screen md:px-[5%] md:visible invisible ">
        <div className="flex justify-between pt-8 ">
          <div className="font-bold text-2xl">Toko</div>
          <div>
            <ol className="flex gap-20 pt-2">
              <li>Home</li>
              <li>Product</li>
              <li>Blog</li>
              <li>About</li>
              <li>Contact Us</li>
            </ol>
          </div>
          <div>
            <ol className="flex gap-3 pt-2 text-xl ">
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
