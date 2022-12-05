import * as NextLink from "next/link";
import { joinClassNames } from "utils/helpers";
import { DEFAULT, SIZE, STYLE } from "components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Link({
  size,
  children,
  icon,
  style,
  pattern,
  active,
  className,
  as,
  ...props
}) {
  const Inner = () => {
    return (
      <span className="relative">
        <span
          className={joinClassNames(
            "link link-underline link-underline-yellow",
            active
              ? "font-medium text-black dark:text-white"
              : "font-normal text-gray-600 dark:text-gray-200"
          )}
        >
          {icon && <FontAwesomeIcon icon={icon} />}
          {children}
        </span>
        {active && (
          <div className="absolute right-2/4 mt-2 h-2 w-2 translate-x-2/4 bg-sky-400" />
        )}
      </span>
    );
  };

  switch (as) {
    case "link":
      return (
        <NextLink
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style || "primary"],
            className
          )}
          {...props}
        >
          <Inner />
        </NextLink>
      );
    default:
      return (
        <a
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style || "primary"]
          )}
          {...props}
        >
          <Inner />
        </a>
      );
  }
}
