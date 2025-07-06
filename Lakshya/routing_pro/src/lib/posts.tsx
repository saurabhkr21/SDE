// lib/posts.ts

export async function getPostBySlug(slug: string) {
    // Fake data for testing
    return {
        title: `Blog Post: ${slug}`,
        excerpt: 'This is a short excerpt from the blog post.',
        content: '<p>This is the full HTML content of the blog post.</p>',
    };
}
