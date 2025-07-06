// app/blog/[slug]/page.tsx

// import { getPostBySlug } from '@/lib/posts';
import { getPostBySlug } from '@/lib/posts';
import { Metadata } from 'next';

interface PageParams {
    params: { slug: string };
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    return {
        title: post.title,
        description: post.excerpt,
    };
}

// Blog post page
export default async function BlogPost({ params }: PageParams) {
    const post = await getPostBySlug(params.slug);

    if (!post) return <div>Post not found</div>;

    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
    );
}
