import {
  Menu,
  ProductsContent,
  BrandsContent,
  SportsContent,
  Catalog,
  WebExclu,
  BrandExclu,
  Exclu,
} from "./components/";

function App() {
  return (
    <main className="">
      <section className="position-relative">
        <div className="position-absolute absolute-centering">
          <img src="assets/svg/i.svg" alt="" />
        </div>
        <div className="grid-col-6 h-100">
          <div className="d-flex p-1 justify-content-center  bg-yellow">
            <div className="align-self-center">
              <div>
                <div className="vstack text-center p-1 gap-1">
                  <div>
                    <img src="assets/svg/countdown.svg" alt="" />
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
            className="bg-no-repeat bg-size-cover bg-position-center"
            style={{
              backgroundColor: "black",
              backgroundImage: "url(assets/svg/boxe.svg)",
            }}
          ></div>
        </div>
      </section>
      <section>
        <div className="align-self-center justify-content-center d-flex">
          <div className="d-none d-md-flex font-size-0">
            <img src="assets/jpg/good-plan.jpg" alt="" className="img-fluid" />
          </div>
          <div className="bg-white d-flex flex-direction-column p-2 text-center">
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
                    <div className="text-uppercase font-weight-700">
                      nakamura
                    </div>
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
        </div>
      </section>
      <section>
        <Menu />
      </section>
      <section className="d-none-md bg-grey-lighter">
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
      <section
        style={{ backgroundColor: "var(--semantics-white-bg)" }}
        className="d-none-md"
      >
        <div className="vstack ">
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
      <Exclu />
      <section>
        <div className="slider products ps-0">
          <ProductsContent />
        </div>
        <div className="bg-grey-lighter p-2">
          <button className="btn">Toute la sélection</button>
        </div>
      </section>
      <BrandExclu />
      <section>
        <div className="slider gap-1">
          <BrandsContent />
        </div>
      </section>
      <WebExclu />
      <section>
        <div className="slider gap-1">
          <SportsContent />
        </div>
      </section>
      <section>
        <Catalog />
      </section>
    </main>
  );
}

export default App;
