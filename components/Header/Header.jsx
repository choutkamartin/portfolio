import { Link } from "components/Link";
import { Button } from "components/Button";
import { useRouter } from "next/router";
import { Bars3Icon, MoonIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";
import ScrollIndicator from "components/ScrollIndicator.jsx/ScrollIndicator";

const Header = () => {
  const router = useRouter();
  const path = router.asPath;
  const { t } = useTranslation("header");

  const links = [
    {
      name: t("home"),
      href: "/",
      allowed: true,
    },
    {
      name: t("about"),
      href: "/about-me",
      allowed: true,
    },
    {
      name: t("projects"),
      href: "/projects",
      allowed: true,
    },
    {
      name: "Fotogalerie / Snippety",
      href: "/not-found",
      allowed: true,
    },
    {
      name: t("cad-models"),
      href: "/cad-models",
      allowed: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 px-8 backdrop-blur-xl lg:px-0">
      <ScrollIndicator />
      <div className="mx-auto hidden max-w-4xl flex-col flex-wrap justify-between gap-8 border-gray-300 py-8 lg:flex lg:flex-row lg:items-center">
        <div className="flex items-center space-x-16">
          <div className="text-black">
            <img src="/Logo_10.svg" width="60px" height="40px" alt="" />
          </div>
          <nav className="flex flex-col gap-4 lg:flex-row">
            {links.map((item, index) => {
              if (item.allowed) {
                return (
                  <Link
                    href={item.href}
                    style="secondary"
                    as="link"
                    active={item.href === path ? true : false}
                    key={index}
                    className="font-medium"
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </nav>
        </div>
        <div className="flex space-x-4">
          <Button
            as="link"
            size="xl"
            style="primary"
            href={path}
            locale={router.locale == "cs" ? "en" : "cs"}
          >
            {router.locale == "cs" ? "EN" : "CS"}
          </Button>
          <Button href="/second-page" as="link" size="xl" style="secondary">
            <MoonIcon className="h-6 w-6 text-black" />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between border-b py-8 lg:hidden">
        <img src="/Logo_10.svg" width="60px" height="40px" alt="" />
        <div className="flex space-x-4">
          <Button href="/second-page" as="link" size="xl" style="secondary">
            <MoonIcon className="h-6 w-6 text-black" />
          </Button>
          <Button style="primary" size="lg">
            <Bars3Icon className="h-6 w-6 text-black" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
