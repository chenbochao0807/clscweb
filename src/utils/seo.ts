import { siteConfig } from "@/config";

export type BreadcrumbItem = {
	name: string;
	url: string;
};

export type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

function ensureAbsoluteUrl(pathOrUrl: string): string {
	if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
	return new URL(pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`, siteConfig.siteUrl).href;
}

export function getCanonicalUrl(pathname: string): string {
	return ensureAbsoluteUrl(pathname);
}

export function getDefaultDescription(description?: string): string {
	return description?.trim() || siteConfig.defaultDescription;
}

export function getPageTitle(title?: string): string {
	if (!title || title.trim() === "") return siteConfig.title;
	if (title.includes(siteConfig.title)) return title;
	return `${title}｜${siteConfig.title}`;
}

export function getOpenGraphImage(image?: string): string {
	return ensureAbsoluteUrl(image || siteConfig.defaultOgImage);
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: ensureAbsoluteUrl(item.url),
		})),
	};
}

export function getOrganizationJsonLd(): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		name: siteConfig.title,
		url: siteConfig.siteUrl,
		logo: getOpenGraphImage(siteConfig.favicon[0]?.src || siteConfig.defaultOgImage),
	};
}

export function getWebSiteJsonLd(): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: siteConfig.title,
		url: siteConfig.siteUrl,
		inLanguage: siteConfig.lang.replace("_", "-"),
	};
}

export function getWebPageJsonLd(title: string, description: string, canonicalUrl: string): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "WebPage",
		name: title,
		description,
		url: canonicalUrl,
		isPartOf: {
			"@type": "WebSite",
			name: siteConfig.title,
			url: siteConfig.siteUrl,
		},
	};
}

export function getImageObjectJsonLd(imageUrl: string, name: string, description?: string): Record<string, unknown> {
	return {
		"@context": "https://schema.org",
		"@type": "ImageObject",
		contentUrl: ensureAbsoluteUrl(imageUrl),
		url: ensureAbsoluteUrl(imageUrl),
		name,
		description: description || name,
	};
}
