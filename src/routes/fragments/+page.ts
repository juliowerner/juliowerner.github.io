export async function load(): Promise<{
	fragments: { meta: { title: string; date: string; tags: string[], content: unknown }; path: string }[];
}> {
	const markdownFragments = Object.entries(import.meta.glob('/src/routes/fragments/*.md'));

	const fragments = await Promise.all(
		markdownFragments.map(async ([path, resolver]) => {
			const fragment = await resolver();
            const metadata = fragment.metadata;
            const content = fragment.default;
			const postPath = path.slice(11, -3);
			return {
				meta: metadata,
				path: postPath,
                content:content,
			};
		})
	);
	const output = { fragments };
    //order by date latest first
    output.fragments.sort((a,b) => {
        return new Date(b.meta.date) - new Date(a.meta.date);
    });

	return output;
}
