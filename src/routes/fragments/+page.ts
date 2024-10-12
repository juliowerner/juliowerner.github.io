export async function load(): Promise<{
	fragments: { meta: { title: string; date: string; tags: string[] }; path: string }[];
}> {
	const markdownFragments = Object.entries(import.meta.glob('/src/routes/fragments/*.md'));

	const fragments = await Promise.all(
		markdownFragments.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);
			return {
				meta: metadata,
				path: postPath
			};
		})
	);
	const output = { fragments };

	return output;
}
