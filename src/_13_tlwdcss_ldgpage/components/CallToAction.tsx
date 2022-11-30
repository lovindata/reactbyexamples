// Component
export const CallToAction = () => (
  <section className="bg-brightRed" id="cta">
    <div className="container mx-auto flex flex-col items-center justify-between space-y-12 px-6 py-24 md:flex-row md:space-y-0 md:py-12">
      {/* Header */}
      <h2 className="text-center text-5xl font-bold text-white md:max-w-xl md:text-left md:text-4xl">
        Simplify how your team works today
      </h2>

      {/* Button */}
      <a
        href="/#"
        className="cursor-pointer rounded-full bg-white px-6 pb-3 pt-2 text-brightRed shadow-2xl hover:bg-black">
        Get Started
      </a>
    </div>
  </section>
);
