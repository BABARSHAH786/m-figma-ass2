import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-[#252B42] ">
      <nav className="w-[1322px] h-[91px] left-[59px] relative text-white flex list-none flex-wrap  font-medium text-xl">
        <h2 className="w-[187px] h-[58px] top-[17px] left-[136px]">
          BrandName
        </h2>
        <div className="w-[858px] h-[15px] relative top-[16px] left-[214px] width-275 height-24 flex top-17">
          <div className="text-[14px] font-bold leading-[24px] text-center w-[214px] h-[24px] top-[17px] left-[21px] flex">
            <li className="mr-5 hover:text-yellow-200 hover:-translate-y-1">
              <Link href="/">Home</Link>
            </li>

            <li className="mr-5 hover:text-yellow-200 hover:-translate-y-1">
              <Link href="/about">Product</Link>{" "}
            </li>
            <li className="mr-4 hover:text-yellow-200 hover:-translate-y-1">
              <Link href="/about">Pricing</Link>{" "}
            </li>
            <li className="mr-4 hover:text-yellow-200 hover:-translate-y-1">
              <Link href="/about">Contact</Link>{" "}
            </li>
          </div>
        </div>
        {/* w-[px] h-[px] top-[px] left-[px] */}
        <div className="w-[189px] h-[40px] relative top-[16px]  gap-[45px] flex width-180 height-52 top-3 left-626 gap-45">
          <li className="text-[14px] width-41 height-22 flex mr-4 hover:text-yellow-200 hover:-translate-y-1">
            <Link href="/">Login</Link>{" "}
          </li>
          <li className="w-[214px] h-[37px] text-[14px] text-center  mr-4 bg-blue-500 hover:text-yellow-200 hover:-translate-y-1">
            <Link href="/">Join Us</Link>{" "}
          </li>
        </div>
      </nav>

      <div className="w-[1046px] h-[1028px]  left-[197px] relative text-center">
        <div className="w-[701px] h-[496px] relative top-[40px] left-[40px] ">
          <h5 className=" w-[77px] h-[24px] relative left-[210px] text-center font-bold text-lg leading-6 font-montserrat tracking-tighter text-blue-500">
            Welcome
          </h5>

          <div className="text-white text-center font-bold text-6xl leading-tight font-montserrat tracking-tighter">
            <h2 className="w-[542px] h-[160px] text-[60px] left-[40px] top-[40px] bottom-[40px] ">
              Selling on the internet like a pro
            </h2>
          </div>

          <div className="w-[510px] h-[60px] text-center">
            <h4 className=" text-white font-montserrat text-[20px] font-normal leading-[30px] tracking-[0.2px] text-center">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
          </div>

          <div className="flex w-[365px] h-[52px] gap-[10px] left-[95px] relative color-[white] text-white">
            <button className="ml-5 w-[193px] h-[52px] rounded-[5px] relative top-[15px] right-[40px] gap-[10px] bg-[#23A6F0] ">
              Get Quote Now
            </button>
            <button className="w-[193px] h-[52px] relative top-[15px] right-[40px] gap-[10px] text-[#23A6F0] text-[14px] rounded-[5px] border border-[#23A6F0]">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-[1046px] h-[292px] gap-[20px] flex">
          <div className="w-[328px] h-[292px] gap-[20px] p-[35px_40px] bg-[white] ">
            <div className="w-[70px] h-[76px] rounded-[10px] p-[22px_19px] bg-[#FFDCD1] "></div>
            <h3 className="w-[135px] h-[24px] font-bold">training Courses</h3><br></br>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div><br></br>
            <p className="w-[222px] h-[60px]  ">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[329px] h-[292px] gap-[20px] p-[35px_40px] bg-[white] ">
            <div className="w-[70px] h-[76px] rounded-[10px] p-[22px_19px] bg-[#B9EAA8] "></div>
            <h3 className="w-[168px] h-[24px] font-bold">2,769 online courses</h3><br></br>
            <div className="w-[50px] h-[2px] bg-[#E74040]"></div><br></br>
            <p className="">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[328px] h-[292px] gap-[20px] p-[35px_40px] bg-[#23A6F0] ">
            <div className="w-[70px] h-[76px] rounded-[10px] p-[22px_19px] bg-white "></div>
            <h3 className="w-[135px] h-[24px] font-bold">training Courses</h3><br></br>
            <div className="w-[50px] h-[2px] bg-white"></div><br></br>
            <p className="">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
          <div className="w-[1046] h-[92] gap-[20px]"></div>
          <div className="w-[1046] h-[92] gap-[20px]"></div>
        </div>
      </div>
    </div>
  );
}
