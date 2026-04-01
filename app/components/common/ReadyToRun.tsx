export default function ReadyToRun({ ctaText = "Get started for free" }) {
  return (
    <section className="w-full bg-darkblue py-24">
      <div className="container mx-auto space-y-7 px-4">
        <h1 className="font-bold text-white md:text-5xl text-3xl">
          Ready to run buttery-smooth virtual sessions?
        </h1>
        <p className="text-white font-light md:text-3xl text-xl">
          It’s time to experience Butter for yourself!
        </p>
        <button
          type="button"
          aria-label={ctaText}
          className="w-full bg-white text-darkblue mt-10 font-medium md:text-2xl text-xl rounded-2xl py-4 
                     hover:bg-white/15 hover:text-white duration-150 ease-linear focus:outline-none focus:ring-2 focus:ring-white"
        >
          {ctaText}
        </button>
      </div>
    </section>
  );
}
