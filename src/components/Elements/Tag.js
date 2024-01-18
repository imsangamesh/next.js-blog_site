import { cx } from "@/src/utils";
import Link from "next/link";

const Tag = ({ link = "#", name, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all duration-300 ease text-sm sm:text-base",
        props.className
      )}>
      {name}
    </Link>
  );
};

export default Tag;