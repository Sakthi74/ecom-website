import insta from "/src/assets/Vector.png";
import twitter from "/src/assets/Vector (1).png";
import fb from "/src/assets/facebook-f 1.png";
const Footer = () => {
  return (
    <>
      <div className="flex p-10 bg-green-400">
        <div className="flex-col">
          <span className="text-white text-md  ml-2 font-bold">SAKTHI</span>
          <span className="  font-dog text-md ml-2">Fruits</span>
          <ul className=" font-semibold text-black p-5 gap-2 cursor-pointer">
            <li className=" hover:text-blue-600 ">FOR YOU</li>
            <li className=" hover:text-blue-600 ">FRUITS</li>
            <li className=" hover:text-blue-600">VEGTABLES</li>
            <li className=" hover:text-blue-600">SEASON SPECIALS</li>
          </ul>
        </div>
        <div className="flex-col">
          <span className="text-white text-md font-bold ml-3">SUPPORT📞</span>

          <ul className=" font-semibold text-black p-5 gap-2 cursor-pointer">
            <li className=" hover:text-blue-600 ">HELP CENTER</li>
            <li className=" hover:text-blue-600 ">TERMS OF USE</li>
            <li className=" hover:text-blue-600 ">PRIVACY POLICY</li>
            <li className=" hover:text-blue-600 ">PRODUCT COMPLIANCE</li>
          </ul>
        </div>

        <div className="p-3 ml-4">
          <h1 className="font-bold ml-36 p-1  ">ABOUT</h1>
          <p>
            Welcome to Sakthi Fruits and Vegetables! Your <br></br>one-stop
            online shop for the freshest, high-quality , <br></br> delivered
            straight to your doorstep.Shop with us for <br></br> convenient,
            healthy living!
          </p>
        </div>
        <div className="p-4 ml-12">
          <div className="  ">
            <h1 className="ml-3">Follow us on</h1>
            <div className=" flex gap-6 cursor-pointer p-3">
              <img
                src={insta}
                className="hover:scale-105 hover:bg-blue-600"
              ></img>
              <img src={fb} className="hover:scale-105 hover:bg-blue-600"></img>
              <img
                src={twitter}
                className="hover:scale-105 hover:bg-blue-600"
              ></img>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Send Feedback"
              className="p-3 rounded-md"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
