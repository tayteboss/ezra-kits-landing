"use client";

import ClockIcon from "@/components/svgs/ClockIcon";
import CopyIcon from "@/components/svgs/CopyIcon";
import DeleteIcon from "@/components/svgs/DeleteIcon";
import ElipsisIcon from "@/components/svgs/ElipsisIcon";
import PlusIcon from "@/components/svgs/PlusIcon";
import SettingsIcon from "@/components/svgs/SettingsIcon";
import ThemeIcon from "@/components/svgs/ThemeIcon";
import { Button as NextUIButton } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  title?: string;
  isActive?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  handleClick?: () => void;
  theme?:
    | "primary"
    | "secondary"
    | "tiertary"
    | "white"
    | "transparant"
    | "dark"
    | "gray"
    | "icon";
  icon?:
    | boolean
    | "clock"
    | "theme"
    | "settings"
    | "plus"
    | "copy"
    | "chevron-left"
    | "delete"
    | "elipsis";
  linkUrl?: false | string;
  iconSide?: "left" | "right";
  size?: "default" | "small" | "large";
  fullWidth?: boolean;
  noClickHandle?: boolean;
  useKitTheme?: boolean;
};

const Button = (props: Props) => {
  const {
    title,
    isActive,
    isLoading,
    isDisabled,
    handleClick,
    theme = "secondary",
    icon = false,
    linkUrl = false,
    size = "default",
    fullWidth = true,
    noClickHandle = false,
    iconSide = "left",
    useKitTheme = false,
  } = props;

  const router = useRouter();

  const handleIconSelect = () => {
    switch (icon) {
      case "clock":
        return <ClockIcon />;
      case "theme":
        return <ThemeIcon />;
      case "settings":
        return <SettingsIcon />;
      case "plus":
        return <PlusIcon />;
      case "chevron-left":
        return <ChevronLeft />;
      case "elipsis":
        return <ElipsisIcon />;
      case "copy":
        return <CopyIcon />;
      case "delete":
        return <DeleteIcon />;
      default:
        return false;
    }
  };

  const coreStyles = `${
    size === "default"
      ? `${
          fullWidth ? "w-full" : "w-auto"
        } text-[13px] py-2 rounded-lg px-[10px]`
      : size === "large"
        ? "py-3 flex-1 text-[13px] rounded-lg h-[50px]"
        : "text-[12px] h-auto py-[2px] rounded-full px-3 !min-w-[10px]"
  } ${
    useKitTheme ? "secondary-font" : ""
  } flex items-center justify-center font-medium !duration-300`;
  let buttonStyles = "";

  if (theme === "primary") {
    buttonStyles = `bg-system-accent text-center text${
      useKitTheme ? "-" : "-system-"
    }foreground justify-center ${coreStyles}`;
  }

  if (theme === "secondary") {
    buttonStyles = `${
      isActive
        ? `bg${useKitTheme ? "-" : "-system-"}input`
        : `bg${useKitTheme ? "-" : "-system-"}background`
    } text-foreground !justify-start ${coreStyles}`;
  }

  if (theme === "tiertary") {
    buttonStyles = `${
      isActive
        ? `bg${useKitTheme ? "-" : "-system-"}foreground text${
            useKitTheme ? "-" : "-system-"
          }background`
        : `bg${useKitTheme ? "-" : "-system-"}muted text${
            useKitTheme ? "-" : "-system-"
          }foreground`
    } justify-center ${coreStyles}`;
  }

  if (theme === "white") {
    buttonStyles = `text${useKitTheme ? "-" : "-system-"}foreground bg${
      useKitTheme ? "-" : "-system-"
    }background justify-center ${coreStyles}`;
  }

  if (theme === "transparant") {
    buttonStyles = `w-auto text${
      useKitTheme ? "-" : "-system-"
    }foreground bg-transparent justify-center ${coreStyles}`;
  }

  if (theme === "dark") {
    buttonStyles = `w-auto text${useKitTheme ? "-" : "-system-"}background bg${
      useKitTheme ? "-" : "-system-"
    }foreground justify-center ${coreStyles}`;
  }

  if (theme === "gray") {
    buttonStyles = `w-auto text${useKitTheme ? "-" : "-system-"}foreground bg${
      useKitTheme ? "-" : "-system-"
    }input justify-center ${coreStyles}`;
  }

  if (theme === "icon") {
    buttonStyles = `w-auto bg-transparant justify-center h-7 !w-7 max-h-7 min-h-7 max-w-7 min-w-7 flex justify-center items-centerduration-300 !p-0 ${coreStyles}`;
  }

  const onClickHandler = () => {
    if (noClickHandle) return;

    if (linkUrl) {
      router.push(linkUrl);
    } else {
      handleClick();
    }
  };

  return (
    <NextUIButton
      disableRipple
      radius="lg"
      isLoading={isLoading}
      isDisabled={isDisabled}
      className={buttonStyles}
      startContent={icon && iconSide === "left" ? handleIconSelect() : false}
      endContent={icon && iconSide === "right" ? handleIconSelect() : false}
      onClick={onClickHandler}
    >
      {title || ""}
    </NextUIButton>
  );
};

export default Button;
