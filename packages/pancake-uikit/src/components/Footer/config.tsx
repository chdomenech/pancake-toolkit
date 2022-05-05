import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Blog",
        href: 'https://medium.com/@tovaswap',
      },
      {
        label: "Community",
        href: 'https://info.tovaswap.com/contact-us/telegram',
      },
      {
        label: "TVS",
        href: 'https://info.tovaswap.com/tokenomics/tvs',
      }
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: 'https://info.tovaswap.com/contact-us/customer-support',
      },
      {
        label: "Troubleshooting",
        href: 'https://info.tovaswap.com/help/troubleshooting',
      },
      {
        label: "Guides",
        href: 'https://info.tovaswap.com/get-started',
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: 'https://github.com/tovaswap1',
      },
      {
        label: "Documentation",
        href: 'https://info.tovaswap.com',
      },
      {
        label: "Audits",
        href: 'https://info.tovswap.com/help/faq#is-tovaswap-safe-has-tovaswap-been-audited',
      }
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/tovaswap",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "Español",
        href: "https://t.me/tovaswap",
      }
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/user/tovaswap",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/tovaswap1",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
