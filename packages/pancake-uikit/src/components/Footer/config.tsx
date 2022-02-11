import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Blog",
        href: 'https://medium.com/@tovafinance',
      },
      {
        label: "Community",
        href: "https://docs.pancakeswap.finance/contact-us/telegram",
      },
      {
        label: "TVS",
        href: 'https://docs.tovaswap.com/tokenomics/tvs',
      }
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: 'https://docs.tovaswap.com/contact-us/customer-support',
      },
      {
        label: "Troubleshooting",
        href: 'https://docs.tovaswap.com/help/troubleshooting',
      },
      {
        label: "Guides",
        href: 'https://docs.tovaswap.com/get-started',
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: 'https://github.com/TOVAFinance',
      },
      {
        label: "Documentation",
        href: 'https://docs.tovaswap.com',
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@pancakeswap-1/s/pancakeswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: 'https://docs.tovswap.com/help/faq#is-tovaswap-safe-has-tovaswap-been-audited',
      }
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/TOVAFinance",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "Español",
        href: "https://t.me/TOVAFinance",
      }
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://www.reddit.com/user/tovafinance",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/TOVAFinance/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
