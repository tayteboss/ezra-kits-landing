type Props = {
  isActive: boolean;
};

const MaskShapeOne = (props: Props) => {
  const { isActive } = props;

  return (
    <svg
      width="65"
      height="89"
      viewBox="0 0 65 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.358887"
        width="63.76"
        height="88.052"
        fill={isActive ? `#E4E4E4` : `#F0EFEF`}
        stroke={isActive ? `#D4D4D8` : `#F0EFEF`}
        className="duration-300"
      />
    </svg>
  );
};

export default MaskShapeOne;
