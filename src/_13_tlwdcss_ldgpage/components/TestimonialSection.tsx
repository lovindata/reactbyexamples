import avatarAnisha from "../img/avatar-anisha.png";
import avatarAli from "../img/avatar-ali.png";
import avatarRichard from "../img/avatar-richard.png";

// Component
export const TestimonialSection = () => (
  <section>
    <div className="mx-auto mt-32 max-w-6xl px-5 text-center">
      {/* Title */}
      <h2 className="mt-32 text-4xl font-bold">What's Different About Manage?</h2>

      {/* Testimonials */}
      <div className="mt-24 flex flex-row space-x-6">
        <Testimonial
          img={avatarAnisha}
          names="Anisha Li"
          text="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          showAlways={true}
        />
        <Testimonial
          img={avatarAli}
          names="Ali Bravo"
          text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
          showAlways={false}
        />
        <Testimonial
          img={avatarRichard}
          names="Richard Watts"
          text="“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
          showAlways={false}
        />
      </div>

      {/* Button */}
      <div className="my-16">
        <a
          href="/#"
          className="cursor-pointer rounded-full bg-brightRed px-6 pb-3 pt-2 text-white hover:bg-brightRedLight">
          Get Started
        </a>
      </div>
    </div>
  </section>
);

// Testimonial component
interface TestmonialProps {
  img: string;
  names: string;
  text: string;
  showAlways: boolean;
}
const Testimonial = (props: TestmonialProps) => {
  return props.showAlways ? (
    // If show always
    <div className="flex flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:w-1/3">
      <img src={props.img} alt="" className="-mt-14 w-16" />
      <h3 className="text-lg font-bold">{props.names}</h3>
      <p className="text-sm text-darkGrayishBlue">{props.text}</p>
    </div>
  ) : (
    // Else show only when middle viewport size
    <div className="hidden flex-col items-center space-y-6 rounded-lg bg-veryLightGray p-6 md:flex md:w-1/3">
      <img src={props.img} alt="" className="-mt-14 w-16" />
      <h3 className="text-lg font-bold">{props.names}</h3>
      <p className="text-sm text-darkGrayishBlue">{props.text}</p>
    </div>
  );
};
