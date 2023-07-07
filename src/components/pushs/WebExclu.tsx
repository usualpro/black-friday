import { Stripe } from "../Stripe";

export const WebExclu = () => (
  <section className="push web-exclu">
    <div className="bg-yellow">
      <Stripe
        options={{
          style: {
            transform: "translate(-48%) rotate(27deg)",
          },
        }}
      />
      <Stripe
        options={{
          style: {
            transform: "translate(-53%) rotate(-24deg)",
          },
        }}
      />
      <div className="z-index-1">
        <h4 className="heading font-size-23px">
          <span className="italic">exclusivité web</span>
        </h4>
        <h3 className="heading font-size-40px">
          les sports
          <br />
          <span className="stroke">en black fridays !</span>
        </h3>
      </div>
    </div>
  </section>
);

WebExclu.displayName = "Components_Pushs_WebExclu";
