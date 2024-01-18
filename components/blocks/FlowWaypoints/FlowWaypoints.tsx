import ArrowIcon from "@/components/svgs/ArrowIcon";

const FlowWaypoints = () => {
  return (
    <div className="mb-6 md:mb-10">
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <p className="w-[85px] text-center text-[14px] leading-tight text-system-foreground md:w-auto md:text-[18px]">
          Design beautifully
        </p>
        <ArrowIcon />
        <p className="w-[85px] text-center text-[14px] leading-tight text-system-foreground opacity-50 md:w-auto md:text-[18px]">
          Update automatically
        </p>
        <ArrowIcon />
        <p className="w-[75px] text-center text-[14px] leading-tight text-system-foreground opacity-50 md:w-auto md:text-[18px]">
          Share with a click
        </p>
      </div>
    </div>
  );
};

export default FlowWaypoints;
