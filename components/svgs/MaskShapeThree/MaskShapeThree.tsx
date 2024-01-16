type Props = {
  isActive: boolean;
};

const MaskShapeThree = (props: Props) => {
  const { isActive } = props;

  return (
    <svg
      width="65"
      height="89"
      viewBox="0 0 65 89"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.880859 31.88C0.880859 14.2732 15.154 0 32.7609 0C50.3677 0 64.6409 14.2732 64.6409 31.88V88.052H0.880859V31.88Z"
        fill={isActive ? `#E4E4E4` : `#F0EFEF`}
        stroke={isActive ? `#D4D4D8` : `#F0EFEF`}
        className="duration-300"
      />
    </svg>
  );
};

export default MaskShapeThree;
