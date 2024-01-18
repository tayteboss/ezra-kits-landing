import insightsCardSufficeStyling from "@/utils/insightsCardSufficeStyling";

type Props = {
  title: string;
  subTitle: string;
  link?: string | boolean;
  useSufficeTitleStyle?: boolean;
};

const InsightsCardStat = (props: Props) => {
  const { title, subTitle, link = false, useSufficeTitleStyle = false } = props;

  const subTitleStyles =
    "secondary-font inline-block text-[3px] text-secondary colour-animation";

  const undefinedTitle = title.includes("undefined");

  return (
    <div className="items-left flex flex-col items-start justify-start">
      {!undefinedTitle && (
        <div className="secondary-font colour-animation mb-2 text-[20px] leading-[0] tracking-tight text-foreground">
          {useSufficeTitleStyle
            ? insightsCardSufficeStyling(title)
            : title || ""}
        </div>
      )}
      {link && subTitle ? (
        <a
          href="/"
          target="_blank"
          className={`${subTitleStyles} duration-250 hover:text-foreground`}
        >
          {subTitle}
        </a>
      ) : (
        <p className={subTitleStyles}>{subTitle}</p>
      )}
    </div>
  );
};

export default InsightsCardStat;
