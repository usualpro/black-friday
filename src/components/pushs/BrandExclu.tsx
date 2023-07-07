import { Stripe } from "../Stripe";

export const BrandExclu = () => (
  <section className="push brand-exclu">
    <div className="bg-yellow">
      <Stripe
        options={{
          style: {
            transform: "translate(-47%) rotate(25deg)",
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
      <h4 className="heading font-size-23px">
        <span className="italic">exclusivité web</span>
      </h4>
      <h3 className="heading font-size-40px">
        black friday sur
        <br />
        <span className="stroke">les grandes</span> marques
      </h3>
    </div>
  </section>
);

BrandExclu.displayName = "Components_Pushs_BrandExclu";
