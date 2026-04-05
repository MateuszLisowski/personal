import { posts } from "../posts";
import { notFound } from "next/navigation";
import Newsletter from "../../newsletter";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
export const dynamic = "force-static";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="flex justify-center px-6 py-20 mt-40 flex-col align-center justify-content gap-12">
      <article className="max-w-2xl w-full text-lg">
        <h1 className="text-2xl font-bold mb-6">{post.title}</h1>

        <div
          className="prose prose-lg max-w-none
          prose-p:mb-4
          prose-img:rounded-xl
          prose-img:my-6"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <Newsletter />
    </main>
  );
}
