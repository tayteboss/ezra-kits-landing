import { useState } from "react";

type Props = {
  letter?: string;
  leftAlign?: boolean;
  noBorderBottom?: boolean;
  noBorderRight?: boolean;
  description?: string;
};

const DescriptionCell = (props: Props) => {
  const { noBorderBottom, noBorderRight, description } = props;

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
      className={`${borderStyles} col-span-1 flex h-full flex-col justify-end p-5 duration-250`}
      onMouseOut={() => handleColourChange()}
      style={{ background: `var(--${colour}-background)` }}
    >
      <p
        className="font-twkLausanne450 text-[18px] text-system-foreground"
        style={{ color: `var(--${colour}-foreground)` }}
      >
        {description || ""}
      </p>
    </div>
  );
};

export default DescriptionCell;
