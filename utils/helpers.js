import { useRouter } from "next/router";

export const joinClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const getLocalizedText = (obj) => {
  const router = useRouter();
  if (router.locale === "cs") {
    return obj.cs;
  } else {
    return obj.en;
  }
};
