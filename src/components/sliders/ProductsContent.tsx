const count = 10;
const Products = () =>
  Array.from(Array(count).keys()).map((s) => (
    <div className="vstack">
      <div
        className={`d-flex justify-content-end ${
          s % 2 ? "visibility-hidden" : ""
        }`}
      >
        <span className="sticker">nouveauté</span>
      </div>
      <div className="d-flex flex-grow-1 justify-content-center">
        <div className="align-self-center vstack gap-3">
          <div className="d-flex justify-content-center">
            <img src="assets/svg/shoe.svg" alt="" className="img-fluid" />
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
          <div className="text-center">
            <span className="font-weight-400">
              <del className="font-size-12px">100,99$</del>
            </span>{" "}
            <span className="text-red font-size-20px font-weight-700">
              89,99$
            </span>
          </div>
        </div>
      </div>
    </div>
  ));

export const ProductsContent = () => <Products />;

ProductsContent.displayName = "Components_Slider_ProductsContent";
