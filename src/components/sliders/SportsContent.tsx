const sports = [
  {
    img: "frame3",
    label: "Football",
  },
  {
    img: "sport2",
    label: "Randonnées",
  },
  {
    img: "sport3",
    label: "Fitness",
  },
  {
    img: "sport4",
    label: "Sky",
  },
];

const Sports = () =>
  [...sports, ...sports].map((s) => (
    <div
      key={s.label}
      style={{
        backgroundImage: `url(assets/svg/${s.img}.svg)`,
      }}
    >
      <div className="slider__item_content">
        <div className="label">{s.label}</div>
        <div className="action">Voir tout ⌲</div>
      </div>
    </div>
  ));

export const SportsContent = () => <Sports />;

SportsContent.displayName = "Components_Slider_SportsContent";
