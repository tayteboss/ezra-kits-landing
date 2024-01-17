import { useState } from "react";

type Props = {
  letter?: string;
  leftAlign?: boolean;
  noBorderBottom?: boolean;
  noBorderRight?: boolean;
};

const HeroCell = (props: Props) => {
  const { letter, leftAlign, noBorderBottom, noBorderRight } = props;

  const [colour, setColour] = useState("white");

  const borderStyles = `${noBorderBottom ? "" : "border-b"} ${noBorderRight ? "" : "border-r"} border-system-foreground`;

  const handleColourChange = () => {
    const colours = [
      "white",
      "yolk",
      "amber",
      "forrest",
      "sky",
      "voilet",
      "beige",
      "scarlet",
      "cacao",
      "lilac",
    ];

    const randomColour = colours[Math.floor(Math.random() * colours.length)];

    setColour(`${randomColour}`);
  };

  return (
    <div
      className={`${borderStyles} col-span-1 flex flex-col justify-between p-5 duration-250`}
      onMouseOut={() => handleColourChange()}
      style={{ background: `var(--${colour}-background)` }}
    >
      <p
        className={`${leftAlign ? "" : "text-right"} font-gtAplinaStandardLightItalic text-[7vw] leading-[0.9] text-${colour}-foreground duration-300`}
        style={{ color: `var(--${colour}-foreground)` }}
      >
        {letter || ""}
      </p>
    </div>
  );
};

export default HeroCell;
