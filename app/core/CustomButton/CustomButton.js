import Link from "next/link";

const CustomButton = ({ btnTitle, ...props }) => {
  return (
    <Link
      className={`${props.className} customBtn px-6 py-2 bg-primary font-medium text-base text-black rounded-[100px] border-0 inline-block touch-manipulation select-none duration-300 hover:scale-105 hover:-rotate-2 shadow-custom hover:shadow-custom-hover`}
      href={props.href}
      shallow
    >
      {btnTitle}
    </Link>
  );
};

export default CustomButton;
