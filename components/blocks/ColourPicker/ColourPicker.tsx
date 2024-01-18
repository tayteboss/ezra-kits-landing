const ColourCell = ({ colour, setActiveColour, isActive }) => {
  return (
    <button
      onClick={() => setActiveColour(colour)}
      style={{
        backgroundColor: `var(--${colour}-background)`,
        border: isActive
          ? "2px solid var(--system-secondary)"
          : colour === "white"
            ? "2px solid var(--system-input)"
            : `2px solid var(--${colour}-background)`,
      }}
      className={`h-[50px] w-full rounded-[10px] duration-300`}
    />
  );
};

const ColourPicker = (props) => {
  const { activeColour, setActiveColour } = props;

  const colours = [
    "white",
    "voilet",
    "forrest",
    "night",
    "sky",
    "yolk",
    "scarlet",
    "cacao",
  ];

  return (
    <div className="w-[300px]">
      <p className="mb-3 text-center text-[14px] text-system-secondary md:text-left">
        Colour scheme
      </p>
      <div className="grid grid-cols-4 gap-1">
        {colours.map((item, i) => (
          <ColourCell
            colour={item}
            key={i}
            setActiveColour={setActiveColour}
            isActive={activeColour === item}
          />
        ))}
      </div>
    </div>
  );
};

export default ColourPicker;
