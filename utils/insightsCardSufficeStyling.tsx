const insightsCardSufficeStyling = (title: string) => {
  let suffix = "";
  let titleWithoutSuffix = "";

  if (title.length > 3) {
    suffix = title.slice(-1);
    titleWithoutSuffix = title.slice(0, -1);
  } else {
    titleWithoutSuffix = title;
  }

  return (
    <span>
      {titleWithoutSuffix}
      <span className="text-4xl">{suffix}</span>
    </span>
  );
};

export default insightsCardSufficeStyling;
