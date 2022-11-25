import illustrationIntro from "../img/illustration-intro.svg";

// Component
export const HeroSection = () => (
  <section>
    <div className="container mx-auto mt-10 flex flex-col-reverse items-center px-6 md:flex-row">
      {/* Text div */}
      <div className="mb-32 flex flex-col space-y-12 md:w-1/2">
        <h1 className="max-w-md text-center text-4xl font-bold md:text-left md:text-5xl">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in
          view.
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="/#"
            className="block cursor-pointer rounded-full bg-brightRed px-6 pb-3 pt-2 text-white hover:bg-brightRedLight">
            Get Started
          </a>
        </div>
      </div>

      {/* Image div */}
      <div className="md:w-1/2">
        <img src={illustrationIntro} alt="" />
      </div>
    </div>
  </section>
);
