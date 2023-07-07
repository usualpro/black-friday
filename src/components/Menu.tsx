const items = [
  "Sélection exceptionnelle",
  "Lifestyle",
  "Grandes marques",
  "Electronique",
  "Musculation",
];
const Buttons = () => (
  <div>
    {items.map((l) => (
      <button key={l}>{l}</button>
    ))}
  </div>
);
export const Menu = () => (
  <div className="menu">
    <Buttons />
  </div>
);

Menu.displayName = "Components_Menu";
