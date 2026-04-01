import Image from "next/image";

export default function Run() {
  return (
    <div className="  bg-violet-200 md:rounded-[80px] rounded-3xl  relative mt-48 md:mt-48">
      <div className=" relative flex flex-col md:flex-row md:px-20 px-6 py-12 md:gap-10 gap-8 items-center justify-center overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/20 blur-2xl pointer-events-none" />

        <div className="max-w-[520px] space-y-5 text-center md:text-left">
          <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
            Prepare sessions that practically run themselves
          </h3>
          <p className="text-black/70 text-base md:text-lg leading-relaxed">
            Structured sessions lead to better outcomes. Set up the perfect flow
            with a time-boxed agenda, pre-loaded tools, and a reusable team
            library.
          </p>
          <button className="inline-flex items-center gap-2 border border-black py-3 px-6 rounded-xl font-medium text-sm hover:bg-black hover:text-[#C7D0FF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
            Learn more
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <Image
          src="/wordKey/run-one.svg"
          alt="Session planning illustration"
          width={484}
          height={484}
          className="mx-auto w-full max-w-[320px] md:max-w-[484px] flex-shrink-0"
        />
      </div>
      <div className=" relative flex flex-col md:flex-row md:px-20 px-6 py-12 md:gap-10 gap-8 items-center justify-center overflow-hidden">
        <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-white/20 blur-2xl pointer-events-none" />
        <Image
          src="/wordKey/run-two.svg"
          alt="Session planning illustration"
          width={484}
          height={484}
          className="mx-auto w-full max-w-[320px] md:max-w-[484px] flex-shrink-0"
        />
        <div className="max-w-[520px] space-y-5 text-center md:text-left">
          <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight">
            Prepare sessions that practically run themselves
          </h3>
          <p className="text-black/70 text-base md:text-lg leading-relaxed">
            Structured sessions lead to better outcomes. Set up the perfect flow
            with a time-boxed agenda, pre-loaded tools, and a reusable team
            library.
          </p>
          <button className="inline-flex items-center gap-2 border border-black py-3 px-6 rounded-xl font-medium text-sm hover:bg-black hover:text-[#C7D0FF] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black">
            Learn more
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <Image
        src="/wordKey/run-paner.svg"
        alt=""
        width={393}
        height={239}
        className=" absolute md:right-10 -top-44 z-10 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
