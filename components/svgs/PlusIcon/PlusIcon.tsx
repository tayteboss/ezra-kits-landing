type Props = {
  color?: string;
};

const PlusIcon = (props: Props) => {
  const { color = "black" } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <g clipPath="url(#clip0_1448_205)">
        <path
          d="M10 4.16663V15.8333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="duration-300"
        />
        <path
          d="M4.16666 10H15.8333"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="duration-300"
        />
      </g>
      <defs>
        <clipPath id="clip0_1448_205">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
