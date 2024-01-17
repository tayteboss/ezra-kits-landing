import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      href="https://tayte.co/"
      className="text-[16px rounded-full border-1 border-system-foreground bg-system-background px-5 py-1 font-twkLausanne450 duration-250 hover:bg-system-accent"
    >
      Sign up
    </Link>
  );
};

export default LoginButton;
