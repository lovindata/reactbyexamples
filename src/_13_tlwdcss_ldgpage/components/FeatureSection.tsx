// Component
export const FeatureSection = () => (
  <section>
    <div className="container mx-auto mt-10 flex flex-col space-y-12 px-4 md:flex-row md:space-y-0">
      {/* Left item */}
      <div className="flex flex-col space-y-12 md:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold md:text-left">What's different about Manage?</h2>
        <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
          Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for
          modern digital product teams.
        </p>
      </div>

      {/* Right item */}
      <div className="mx-auto flex flex-col space-y-8 md:w-1/2">
        <Item
          index={"01"}
          header={"Track company-wide progress"}
          text={
            "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way down to the smallest of details. Never lose sight of the bigger picture again."
          }
        />
        <Item
          index={"02"}
          header={"Advanced built-in reports"}
          text={
            "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.."
          }
        />
        <Item
          index={"03"}
          header={"Everything you need in one place"}
          text={
            "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.."
          }
        />
      </div>
    </div>
  </section>
);

// Item component
interface ItemProps {
  index: string;
  header: string;
  text: string;
}
const Item = (props: ItemProps) => (
  <div className="flex flex-col space-y-3">
    {/* Header */}
    <div className="bg rounded-l-full bg-brightRedSupLight md:bg-transparent">
      <div className="flex items-center space-x-2 md:space-x-6">
        {/* Rounded index */}
        <div className="mb-auto rounded-full bg-brightRed px-4 py-2 text-white md:py-1">{props.index}</div>

        {/* Header and Text */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-bold">{props.header}</h3>
          {/* Text (only at least in medium size window)*/}
          <div className="hidden text-darkGrayishBlue md:block">{props.text}</div>
        </div>
      </div>
    </div>

    {/* Text (only at max in small size window)*/}
    <div className="text-darkGrayishBlue md:hidden">{props.text}</div>
  </div>
);
