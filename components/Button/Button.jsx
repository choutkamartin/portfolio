import Link from "next/link";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEFAULT, ICON, SIZE, STYLE } from "components/Button";
import { joinClassNames } from "utils/helpers";

export default function Button({
  size,
  children,
  icon,
  style,
  pattern,
  className,
  as,
  spin,
  ...props
}) {
  const Inner = () => {
    return (
      <>
        <span
          className={joinClassNames(
            "absolute inset-0 h-full w-full -translate-x-2 -translate-y-2 transform transition duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0",
            STYLE[style][0]
          )}
        ></span>
        <span className="absolute inset-0 h-full w-full border-2 border-black dark:border-gray-200"></span>
        <span className="relative">
          {spin && <FontAwesomeIcon icon={faSpinner} spin />}
          {icon && <FontAwesomeIcon icon={icon} />}
          {children}
        </span>
      </>
    );
  };

  switch (as) {
    case "link":
      return (
        <Link
          {...props}
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style][1],
            pattern && PATTERN,
            className
          )}
        >
          <Inner />
        </Link>
      );
    case "a":
      return (
        <a
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style][1],
            pattern && PATTERN,
            className
          )}
          {...props}
        >
          <Inner />
        </a>
      );
    default:
      return (
        <button
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style][1],
            pattern && PATTERN,
            className
          )}
          {...props}
        >
          <Inner />
        </button>
      );
      break;
  }
}
