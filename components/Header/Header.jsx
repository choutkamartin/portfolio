import { Link } from "components/Link";
import { Button } from "components/Button";
import { useRouter } from "next/router";
import { Bars3Icon, MoonIcon } from "@heroicons/react/24/solid";
import { useTranslation } from "next-i18next";
import ScrollIndicator from "components/ScrollIndicator.jsx/ScrollIndicator";
import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Header = () => {
  const router = useRouter();
  const path = router.asPath;
  const { t } = useTranslation("header");
  const [open, cycleOpen] = useCycle(false, true);

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
      <div className="flex items-center justify-between py-8 lg:hidden">
        <img src="/Logo_10.svg" width="60px" height="40px" alt="" />
        <div className="flex space-x-4">
          <Button style="primary" size="lg" onClick={cycleOpen}>
            <Bars3Icon className="h-6 w-6 text-black" />
          </Button>
        </div>
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                className="absolute top-0 left-0 h-screen w-full bg-black/30"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              ></motion.div>
              <motion.aside
                className="absolute left-0 top-0 z-50 h-screen w-1/2 bg-gray-50 shadow"
                initial={{ width: 0 }}
                animate={{
                  width: 300,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.7, duration: 0.3 },
                }}
              >
                <motion.div
                  className="flex h-full flex-col justify-between px-12 py-8"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  <div>
                    <motion.div
                      className="mb-12 text-black"
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                    >
                      <img
                        src="/Logo_10.svg"
                        width="60px"
                        height="40px"
                        alt=""
                      />
                    </motion.div>
                    <div className="flex flex-col space-y-4">
                      {links.map(({ name, href, id }) => (
                        <motion.div
                          className="block"
                          key={href}
                          whileHover={{ scale: 1.1 }}
                          variants={itemVariants}
                          onClick={cycleOpen}
                        >
                          <Link href={href} as="link">
                            {name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="flex flex-col space-y-8"
                    whileHover={{ scale: 1.1 }}
                    variants={itemVariants}
                  >
                    <Button
                      href="/second-page"
                      as="link"
                      size="xl"
                      style="secondary"
                    >
                      <MoonIcon className="h-6 w-6 text-black" />
                    </Button>
                    <Button
                      as="link"
                      size="xl"
                      style="primary"
                      href={path}
                      locale={router.locale == "cs" ? "en" : "cs"}
                    >
                      {router.locale == "cs" ? "EN" : "CS"}
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
