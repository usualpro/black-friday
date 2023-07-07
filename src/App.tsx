import { Stripe } from "./components/Stripe";
import { Menu } from "./components/Menu";
import { ProductsContent } from "./components/sliders/ProductsContent";
import { BrandsContent } from "./components/sliders/BrandsContent";
import { SportsContent } from "./components/sliders/SportsContent";
function App() {
  return (
    <main className="">
      <section style={{ height: "230px" }}>
        <div className="d-flex h-100">
          <div className="d-flex p-1 justify-content-center  bg-yellow">
            <div className="align-self-center">
              <div>
                <div className="vstack text-center p-3 ">
                  <div>
                    <h4 className="m-0">plus que</h4>
                  </div>
                  <div>
                    <span>00 00 00 00</span>
                  </div>
                  <div>
                    <h3 className="heading font-size-42px line-height-38px">
                      black
                      <br />
                      <span className="stroke">friday</span>
                      <br />
                      weeks
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex-grow-1 bg-no-repeat bg-size-cover bg-position-center"
            style={{
              backgroundColor: "black",
              backgroundImage: "url(assets/svg/boxe.svg)",
            }}
          ></div>
        </div>
      </section>
      <section>
        <div className="text-center bg-white p-2 pt-0">
          <div className="hstack justify-content-center">
            <img src="assets/svg/product-addon.svg" alt="" />
            <img src="assets/svg/bike.svg" className="img-fluid" alt="" />
          </div>

          <div className="vstack gap-2">
            <div>
              <span className="patch">-300$</span>
            </div>
            <div className="vstack gap-1">
              <div className="text-center">
                <div className="text-grey-light">
                  <div className="font-weight-400">Adulte</div>
                  <div className="text-uppercase font-weight-700">nakamura</div>
                  <div className="font-weight-400 ">
                    <div>VTT électrique E-CLIFF LTD</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <span className="font-weight-400">
                  <del className="font-size-12px">999,99$</del>
                </span>{" "}
                <span className="text-red font-size-20px font-weight-700">
                  699,99$
                </span>
              </div>
              <div className="position-relative justify-content-center gap-1 hstack">
                <span className="bull">
                  <span>4x</span>
                </span>
                <span>Ou payer en 4x sans frais</span>
              </div>
            </div>
            <div>
              <button className="btn primary">Acheter</button>
            </div>
            <div>&bull; &bull; &bull; &bull;</div>
          </div>
        </div>
      </section>
      <section>
        <Menu />
      </section>
      <section>
        <div
          className="p-2 bg-size-cover bg-no-repeat bg-position-center"
          style={{
            backgroundImage: "url(assets/svg/bg.svg)",
          }}
        >
          <div className="vstack gap-1">
            <h3 className="heading font-size-25px color-white">
              le bon plan <br />
              <span className="stroke white">du black friday</span>
            </h3>
            <div>
              <button className="btn fill">
                Toute la séléction électronique
              </button>
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "var(--semantics-white-bg)" }}>
        <div className="vstack">
          <div className="p-2">
            <div>
              <span className="patch">-60$</span>
            </div>
            <div
              className="bg-no-repeat bg-position-center bg-size-contain text-center"
              style={{ backgroundImage: "url(assets/svg/brand_symbol.svg)" }}
            >
              <img
                src="assets/svg/product.svg"
                className="img-fluid position-relative z-index-1"
                alt=""
              />
            </div>
            <div className="vstack gap-1">
              <div className="vstack gap-1">
                <div className="text-center">
                  <span className="font-weight-400">
                    <del className="font-size-12px">249,99$</del>
                  </span>{" "}
                  <span className="text-red font-size-20px font-weight-700">
                    189,99$
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-grey-light">
                    <div className="text-uppercase font-weight-700">marque</div>
                    <div className="font-weight-400 ">
                      <div>nom produit</div>
                      <div>nom produit ligne2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn">Acheter</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative overflow-hidden">
        <div
          className="bg-yellow p-2 justify-content-end vstack"
          style={{
            minHeight: "375px",
          }}
        >
          <Stripe
            options={{
              style: {
                transform: "translate(-47%) rotate(24deg)",
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
      <section>
        <div className="slider products ps-0">
          <ProductsContent />
        </div>
        <div className="bg-grey-lighter p-2">
          <button className="btn">Toute la sélection</button>
        </div>
      </section>
      <section className="position-relative overflow-hidden">
        <div
          className="bg-yellow p-2 justify-content-end vstack"
          style={{
            minHeight: "375px",
          }}
        >
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
      <section>
        <div className="slider gap-1">
          <BrandsContent />
        </div>
      </section>
      <section className="position-relative overflow-hidden">
        <div
          className="bg-yellow p-2 justify-content-end vstack"
          style={{
            minHeight: "375px",
          }}
        >
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
      <section>
        <div className="slider gap-1">
          <SportsContent />
        </div>
      </section>
      <section>
        <div className="text-center">
          <div className="font-size-0 pt-1">
            <img
              src="assets/svg/couv_dep.svg"
              alt="couv_dep"
              className="img-fluid"
            />
          </div>
          <div className="bg-yellow gap-1 p-2 vstack">
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
      </section>
    </main>
  );
}

export default App;
