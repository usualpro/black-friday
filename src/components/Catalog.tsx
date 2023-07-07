import { Stripe } from "./Stripe";

export const Catalog = () => (
  <div className="catalog">
    <div>
      <Stripe
        options={{
          style: {
            transform: "translate(-52%) rotate(45deg)",
          },
        }}
      />
      <Stripe
        options={{ style: { transform: "translate(-46%) rotate(-36deg)" } }}
      />
    </div>

    <div className="font-size-0 pt-1 position-relative">
      <img src="assets/svg/couv_dep.svg" alt="couv_dep" className="img-fluid" />
    </div>
    <div className="bg-yellow flex-grow-1 d-flex justify-content-center align-items-center position-relative">
      <div className=" gap-1 p-2 d-flex flex-direction-column">
        <div>
          <h3 className="heading font-size-60px">
            <span className="italic color-white">E-</span>
            catalogue
          </h3>
          <div className="font-size-14px">
            Découvrez notre toute dernière sélection running
          </div>
        </div>
        <div>
          <button className="btn">Découvrir</button>
        </div>
      </div>
    </div>
  </div>
);

Catalog.displayName = "Components_Catalog";
