import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconMail from "@/assets/icons/IconMail.svg";
import IconQQ from "@/assets/icons/IconQQ.svg";
import IconWechat from "@/assets/icons/IconWechat.svg";
import { translateFor } from "@/i18n/utils";
import type { Props } from "astro";

type Translator = ReturnType<typeof translateFor>;

export interface Social {
  name: string;
  href?: string;
  copyValue?: string;
  linkTitle: (t: Translator) => string | string[] | undefined;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "Github",
    href: "https://github.com/zhangxiaohh",
    linkTitle: (t: Translator) => t("socials.github"),
    icon: IconGitHub,
  },
  {
    name: "WeChat",
    copyValue: "vento040624",
    linkTitle: (t: Translator) => t("socials.wechat") || "WeChat",
    icon: IconWechat,
  },
  {
    name: "QQ",
    copyValue: "210567852",
    linkTitle: (t: Translator) => t("socials.qq") || "QQ",
    icon: IconQQ,
  },
  {
    name: "Mail",
    copyValue: "210567852@qq.com",
    linkTitle: (t: Translator) => t("socials.mail"),
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS: Social[] = [
  {
    name: "复制链接",
    href: "javascript:(function(){navigator.clipboard.writeText(window.location.href);alert('链接已复制，粘贴到微信发送给朋友吧！');})();",
    linkTitle: (t: Translator) => { void t; return "复制链接分享"; },
    icon: IconWechat,
  },
  {
    name: "QQ",
    href: "https://connect.qq.com/widget/shareqq/index.html?url=",
    linkTitle: (t: Translator) => { void t; return "分享到QQ"; },
    icon: IconQQ,
  },
  {
    name: "邮件",
    href: "mailto:?subject=来看看这篇有趣的文章&body=我发现了一篇很棒的文章，分享给你：",
    linkTitle: (t: Translator) => { void t; return "通过邮件分享"; },
    icon: IconMail,
  },
];
