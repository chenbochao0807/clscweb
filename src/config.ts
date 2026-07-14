import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
	title: "壢中科研 CLSC",
	subtitle: "中大壢中科研社",
	lang: "zh_TW",
	themeColor: {
		hue: 155,
		fixed: true,
	},
	banner: {
		enable: true,
		src: "/banner.jpg", 
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{
			src: "/logo.png",
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		{
      name: "首頁",
      url: "/",
    },
    {
      name: "關於",
      url: "/about/",
    },
    {
      name: "Archive",
      url: "/archive/",
    },
    {
      name: "社員",
      url: "/members/",
    },
    {
      name: "教材",
      url: "/resources/",
    },
    {
      name: "加入我們",
      url: "/join/",
    },
    {
      name: "合作夥伴",
      url: "/friends/",
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/logo.png",
	name: "壢中科研 CLSC",
	bio: "國立中央大學附屬中壢高級中學科研社",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/chenbochao0807/clscweb",
		},
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://www.instagram.com/_clsc16th_/",
		},
		{
			name: "Discord",
			icon: "fa6-brands:discord",
			url: "https://discord.gg/",
		},
		{
			name: "Facebook",
			icon: "fa6-brands:facebook",
			url: "https://www.facebook.com/CLSC.Is.Awesome/?locale=zh_TW",
		},
		{
			name: "Email",
			icon: "material-symbols:mail-rounded",
			url: "@gmail.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

