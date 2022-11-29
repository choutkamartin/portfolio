import { useRouter } from "next/router";

export const joinClassNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const getLocalizedText = (obj) => {
  const router = useRouter();
  if (obj != undefined) {
    if (router.locale === "cs") {
      return obj.cs != undefined ? obj.cs : null;
    } else {
      return obj.en != undefined ? obj.en : null;
    }
  } else {
    return "";
  }
};
