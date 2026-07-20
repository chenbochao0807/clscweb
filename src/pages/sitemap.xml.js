import { getCollection } from "astro:content";
import { siteConfig } from "@/config";
import { getCategoryList, getSortedPosts, getTagList } from "@utils/content-utils";

function escapeXml(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;");
}

function absolute(pathname) {
	return new URL(pathname, siteConfig.siteUrl).href;
}

function urlEntry(loc, lastmod, images) {
	let xml = `  <url><loc>${escapeXml(loc)}</loc>`;
	if (lastmod) xml += `<lastmod>${escapeXml(lastmod)}</lastmod>`;
	for (const image of images || []) {
		xml += `<image:image><image:loc>${escapeXml(image.loc)}</image:loc>`;
		if (image.title) xml += `<image:title>${escapeXml(image.title)}</image:title>`;
		if (image.caption) xml += `<image:caption>${escapeXml(image.caption)}</image:caption>`;
		xml += `</image:image>`;
	}
	xml += `</url>`;
	return xml;
}

export async function GET() {
	const posts = await getSortedPosts();
	const tags = await getTagList();
	const categories = await getCategoryList();
	const achievements = await getCollection("achievements");
	const now = new Date().toISOString();

	const entries = [];
	const achievementImages = [];
	const staticPages = [
		"/",
		"/about/",
		"/archive/",
		"/downloads/",
		"/friends/",
		"/join/",
		"/members/",
		"/resources/",
	];

	for (const page of staticPages) {
		entries.push(urlEntry(absolute(page), now));
	}

	for (const post of posts) {
		entries.push(
			urlEntry(
				absolute(`/posts/${post.slug}/`),
				post.data.updated?.toISOString() ?? post.data.published.toISOString(),
				post.data.image
					? { loc: absolute(post.data.image), title: post.data.title, caption: post.data.description || post.data.title }
					: undefined,
			),
		);
	}

	for (const tag of tags) {
		entries.push(urlEntry(absolute(`/tags/${encodeURIComponent(tag.name)}/`), now));
	}

	for (const category of categories) {
		if (category.url.includes("/uncategorized/")) continue;
		entries.push(urlEntry(absolute(`/categories/${encodeURIComponent(category.name)}/`), now));
	}

	entries.push(urlEntry(absolute(`/categories/uncategorized/`), now));

	for (const achievement of achievements) {
		if (achievement.data.photo) {
			achievementImages.push({
					loc: absolute(achievement.data.photo),
					title: `${achievement.data.competition} ${achievement.data.award}`,
					caption: achievement.data.year,
			});
		}
	}

	entries.push(urlEntry(absolute("/achievements/"), now, achievementImages));

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join("\n")}
</urlset>`;

	return new Response(xml, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
			"Cache-Control": "public, max-age=0, s-maxage=3600",
		},
	});
}