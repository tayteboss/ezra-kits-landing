const ChevronIcon = ({ color = "#B2B2B2" }) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0.999878L1.5 5.99988L6.5 10.9999"
        stroke={color}
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="duration-300"
      />
    </svg>
  );
};

export default ChevronIcon;
