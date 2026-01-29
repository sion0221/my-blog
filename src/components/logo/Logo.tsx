import logo from "public/logo/SION_LOG.svg";

export const Logo = () => {
  return (
    <img
      src={logo.src}
      alt="SION.LOG Logo"
      className="w-30 h-auto hover:opacity-80 transition-opacity object-contain"
    />
  );
};
