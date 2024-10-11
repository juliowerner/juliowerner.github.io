export async function load({ params }): Promise<{ content: string, title: string, date: string }> {
    const post = await import(`../${params.slug}.md`);
    const { title, date } = post.metadata;
    const content = post.default;

    return {
        content,
        title,
        date
    };
}

export async function entries(): Promise<{ slug: string }[]> {
    const markdownFragments = Object.keys(import.meta.glob('/src/routes/fragments/*.md'));
    const fragments = await Promise.all(
        markdownFragments.map(async (path) => {
            return { slug: path.slice(21, -3) };
        }));
    return fragments;
}

export const prerender = true;
