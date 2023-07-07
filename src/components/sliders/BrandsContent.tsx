const brands = ["nike", "adidas", "puma", "coq"];

const Brands = () =>
  [...brands, ...brands].map((s) => (
    <div
      key={s}
      style={{
        backgroundColor: "black",
      }}
    >
      <div className="slider__item_content">
        <div className="label">
          <img src={`assets/svg/${s}.svg`} alt="" />
        </div>
        <div className="action">Voir tout ⌲</div>
      </div>
    </div>
  ));

export const BrandsContent = () => (
  <>
    <Brands />
  </>
);

BrandsContent.displayName = "Components_Slider_BrandsContent";
