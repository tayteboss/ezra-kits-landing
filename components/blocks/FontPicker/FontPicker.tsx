const FontPicker = (props) => {
  const { activeFont, setActiveFont } = props;

  const buttonStyles = `border-2 bg-system-input flex items-center justify-center text-[24px] rounded-[10px] duration-300 px-4 flex-grow`;
  const activeButtonStyles = `border-system-secondary`;

  return (
    <div className="flex w-[300px] flex-col">
      <p className="mb-3 text-center text-[14px] text-system-secondary md:text-left">
        Font style
      </p>
      <div className="flex flex-grow flex-col gap-1">
        <div className="flex flex-grow gap-1">
          <button
            className={`${activeFont === "Functional" ? activeButtonStyles : ""} flex-2 w-[55%] ${buttonStyles}`}
            onClick={() => setActiveFont("Functional")}
          >
            Functional
          </button>
          <button
            className={`${activeFont === "Timeless" ? activeButtonStyles : ""} w-[45%] flex-1 font-itcGaramondStdBookNarrow ${buttonStyles}`}
            onClick={() => setActiveFont("Timeless")}
          >
            Timeless
          </button>
        </div>
        <div className="flex flex-grow gap-1">
          <button
            className={`${activeFont === "Elegant" ? activeButtonStyles : ""} w-[50%] flex-1 font-gtAplinaStandardLightItalic ${buttonStyles}`}
            onClick={() => setActiveFont("Elegant")}
          >
            Elegant
          </button>
          <button
            className={`${activeFont === "Audacious" ? activeButtonStyles : ""} flex-2 w-[50%] font-helveticaNeueCondensedBlack uppercase ${buttonStyles}`}
            onClick={() => setActiveFont("Audacious")}
          >
            Audacious
          </button>
        </div>
      </div>
    </div>
  );
};

export default FontPicker;
