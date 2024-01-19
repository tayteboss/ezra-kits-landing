import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      href="https://tayte.co/"
      className="rounded-full border-1 border-system-foreground bg-system-background px-5 py-1 font-twkLausanne450 text-[16px] duration-250 hover:bg-system-accent"
    >
      Sign up
    </Link>
  );
};

export default LoginButton;
