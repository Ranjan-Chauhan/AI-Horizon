import vrImage from "../../assets/vr.png";
import robotImage from "../../assets/robot.png";
import carImage from "../../assets/car.png";
import armImage from "../../assets/robotArm.png";
import { FaArrowRight } from "react-icons/fa6";

const Blogs = () => {
  return (
    <div className="relative w-full h-[100vh] bg-no-repeat bg-cover flex items-center justify-center px-10">
      <div className="flex flex-col justify-center w-full max-w-[1200px] relative">
        {/* Left Side */}
        <div className="absolute left-0 top-[10%]">
          <h2 className="text-4xl font-bold mb-6">BLOGS</h2>
          <button className="bg-[#F6A11F] hover:bg-[#ff9500] text-white font-semibold py-2 px-4 rounded-full flex items-center gap-2">
            Read More{" "}
            <span>
              <FaArrowRight size={20} />
            </span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-10 mt-20 ml-[250px]">
          {/* Left Card */}

          <div className="">
            {/* Top Left Card */}
            <div className="col-span-1 relative z-10 ">
              <div className="w-[240px] h-[270px] bg-gradient-to-br from-[#000000] to-[#919191]  text-[#FFFFFF] text-right rounded-[2px] p-4 border-[1.5px] hover:border-[3px] hover:border-[#0085FF]">
                <h3 className="text-lg font-bold">Lets Try our new AI</h3>

                <p className="w-[190px] h-[50px] text-[14px] font-normal mt-2 mb-3">
                  Lorem ipsum amet habitasse pulvinar placerat in luctus lorem
                  vulputate.
                </p>

                <button className="text-[9px] px-[4.5px] py-[2px] rounded-[6px] border-[0.45px] font-bold bg-[#AB82BF78] border-[#FFFFFF]">
                  Read more
                </button>
                <img
                  src={vrImage}
                  alt="VR"
                  className="absolute bottom-0 left-[-98px] w-[226px] h-[226px]"
                />
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="col-span-1 relative top-[30px]">
              <div className="flex flex-col justify-between items-center">
                <div className="w-[335px] h-[217px] bg-gradient-to-br from-black via-[#200909] to-[#5c2d01] text-white p-4 rounded-[2px] flex justify-between items-start">
                  <span className="text-[9px] font-bold bg-[#DC5035] w-[60px] h-[20px] border border-[#FFFFFF] px-[4.5px] py-[2px] text-center rounded-[6px] text-[#FFFFFF]">
                    Read More
                  </span>
                  <div className="w-[198px] flex flex-col justify-start text-right">
                    <h3 className="text-lg font-bold pr-2">
                      Lets Try our new AI
                    </h3>
                    <p className="text-[13px] font-normal mt-2 w-[190px] h-[50px] ">
                      Lorem ipsum amet habitasse pulvinar placerat in luctus
                      lorem vulputate.
                    </p>
                  </div>
                </div>
                <div>
                  <img
                    src={carImage}
                    alt="Car"
                    className="absolute bottom-[-20px] left-[-30px] rotate-y-180 w-[397px] h-[213px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Top Right Card */}
            <div className="col-span-1">
              <div className="w-[240px] h-[270px] bg-black text-white p-4 rounded-xl">
                <h3 className="text-lg font-bold">Lets Try our new AI</h3>
                <p className="text-xs mt-2 mb-3">
                  Lorem ipsum amet habitasse pulvinar placerat in luctus lorem
                  vulputate.
                </p>
                <button className="text-[10px] px-2 py-[2px] rounded-full border border-white hover:bg-white hover:text-black">
                  Read more
                </button>
                <img
                  src={robotImage}
                  alt="Robot"
                  className="absolute bottom-0 right-[-40px] h-[150px]"
                />
              </div>
            </div>

            {/* Bottom Right Card */}
            <div className="col-span-1 relative top-[40px]">
              <div className="w-[240px] h-[270px] bg-black text-white p-4 rounded-xl">
                <h3 className="text-lg font-bold">Lets Try our new AI</h3>
                <p className="text-xs mt-2 mb-3">
                  Lorem ipsum amet habitasse pulvinar placerat in luctus lorem
                  vulputate.
                </p>
                <button className="text-[10px] bg-[#F6A11F] text-white px-2 py-[2px] rounded-full">
                  Explore
                </button>
                <img
                  src={armImage}
                  alt="Robot Arm"
                  className="absolute bottom-[-10px] right-[-40px] h-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
