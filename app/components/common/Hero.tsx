import Image from "next/image";
export default function Hero() {
  return (
    <div className="   bg-primary-200  md:pt-24  pt-6 ">
      <div className=" max-w-[1280px] text-center mx-auto space-y-5 ">
        <h1 className=" text-secondary md:text-7xl text-3xl font-black  ">
          Run more engaging sessions. Get better outcomes.
        </h1>
        <p className=" max-w-[641px] mx-auto md:text-lg text-sm">
          Effortlessly plan, run and recap super-engaging workshops, trainings,
          and meetings with Butter’s built-in agenda planner, integrated
          collaboration tools and auto-generated recaps—all in one place.
        </p>
      </div>
      <div className=" flex items-center justify-center    relative z-10  mt-5 gap-x-4">
        <button className=" bg-black rounded-2xl    md:px-5  px-2 py-6  cursor-pointer  flex items-center justify-center   gap-x-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 16 16"
          >
            <g fill="none" fillRule="evenodd" clipRule="evenodd">
              <path
                fill="#f44336"
                d="M7.209 1.061c.725-.081 1.154-.081 1.933 0a6.57 6.57 0 0 1 3.65 1.82a100 100 0 0 0-1.986 1.93q-1.876-1.59-4.188-.734q-1.696.78-2.362 2.528a78 78 0 0 1-2.148-1.658a.26.26 0 0 0-.16-.027q1.683-3.245 5.26-3.86"
                opacity={0.987}
              ></path>
              <path
                fill="#ffc107"
                d="M1.946 4.92q.085-.013.161.027a78 78 0 0 0 2.148 1.658A7.6 7.6 0 0 0 4.04 7.99q.037.678.215 1.331L2 11.116Q.527 8.038 1.946 4.92"
                opacity={0.997}
              ></path>
              <path
                fill="#448aff"
                d="M12.685 13.29a26 26 0 0 0-2.202-1.74q1.15-.812 1.396-2.228H8.122V6.713q3.25-.027 6.497.055q.616 3.345-1.423 6.032a7 7 0 0 1-.51.49"
                opacity={0.999}
              ></path>
              <path
                fill="#43a047"
                d="M4.255 9.322q1.23 3.057 4.51 2.854a3.94 3.94 0 0 0 1.718-.626q1.148.812 2.202 1.74a6.62 6.62 0 0 1-4.027 1.684a6.4 6.4 0 0 1-1.02 0Q3.82 14.524 2 11.116z"
                opacity={0.993}
              ></path>
            </g>
          </svg>
          sign up with Google.
        </button>
        <button className=" bg-white  cursor-pointer rounded-2xl  py-6 px-4">
          Sign Up for free
        </button>
      </div>
      <div className=" w-full relative   my-10  px-10 flex items-center justify-center bg-white ">
        <Image
          src={"/hero-vidoe-thumbnails.svg"}
          alt="Hero"
          width={1280}
          height={300}
        />
        <div
          className=" absolute left-1/2 rounded-full bg-white 
         py-2 px-3 md:px-10 md:py-9
        flex items-center gap-x-4 justify-center z-10 top-1/2 -translate-y-1/2  -translate-x-1/2 "
        >
          <Image
            src={"/play.svg"}
            width={54}
            height={54}
            alt="play"
            className=" md:size-14 size-8"
          />
          <h3 className=" cursor-pointer text-secondary  md:text-3xl  font-bold">
            Take a 2 min. tour
          </h3>
        </div>
      </div>
    </div>
  );
}

