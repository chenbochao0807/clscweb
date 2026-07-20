import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";

export const siteConfig: SiteConfig = {
	title: "CLSC 壢中科研",
	subtitle: "壢中科研社，聚焦科學研究。",
	siteUrl: "https://clhs.dpdns.org/",
	defaultDescription: "CLSC 壢中科研是國立中央大學附屬中壢高中科研社，分享社團介紹、最新活動、教學資源與研究成果。",
	defaultOgImage: "/banner.jpg",
	googleSiteVerification: "",
	bingSiteVerification: "",
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
			name: "社團介紹",
			url: "/about/",
		},
		{
			name: "文章總覽",
			url: "/archive/",
		},
		{
			name: "幹部介紹",
			url: "/members/",
		},
		{
			name: "教材資源",
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
		{
			name: "下載中心",
			url: "/downloads/",
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "/logo.png",
	name: "CLSC 壢中科研",
	bio: "國立中央大學附屬中壢高級中學科研社。",
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/chenbochao0807/clscweb",
		},
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://www.instagram.com/clsc_17th/",
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

