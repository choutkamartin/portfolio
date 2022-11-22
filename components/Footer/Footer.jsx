import { Link } from "components/Link";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("header");

  const links = [
    {
      name: "Links",
      children: [
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
          href: "/about/first-page",
          allowed: true,
        },
        {
          name: t("uses-snippets"),
          href: "/not-found",
          allowed: true,
        },
      ],
    },
  ];

  return (
    <footer className="px-4">
      <div className="mx-auto max-w-4xl border-t border-gray-300 py-16 ">
        <div className="mx-auto mb-8 max-w-4xl text-gray-400">
          PG x INDYWICH x TNKLBL x H16
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
          {links.map((item, index) => {
            return (
              <div className="flex flex-col space-y-8" key={index}>
                <h2 className="text-xl font-bold uppercase tracking-widest text-black">
                  {item.name}
                </h2>
                <ul className="flex flex-col space-y-4">
                  {item.children.map((child, index) => {
                    if (child.allowed) {
                      return (
                        <li key={index}>
                          <Link href={child.href} as="link" style="secondary">
                            {child.name}
                          </Link>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
