import { Stripe } from "../Stripe";

export const Exclu = () => (
  <section className="push exclu">
    <div
      className="bg-yellow p-2 justify-content-end vstack"
      style={{
        minHeight: "375px",
      }}
    >
      <Stripe
        options={{
          style: {
            transform: "translate(-47%) rotate(20deg)",
          },
        }}
      />
      <div>
        <h3 className="heading font-size-40px">
          sélection
          <br />
          <span className="stroke">exceptionnelle</span>
        </h3>
      </div>
    </div>
  </section>
);
