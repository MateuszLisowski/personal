import Newsletter from "../newsletter";
import Link from "next/link";
import { posts } from "./posts";
import styles from "../page.module.css";

export default function Blog() {
  return (
    <main className="flex flex-col items-center px-6 py-20 mt-40">
      <h1 className="text-4xl font-bold mb-12">Blog</h1>

      <div className="grid gap-8 w-full max-w-6xl sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-3">{post.title}</h2>

            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>

            <Link
              href={`/blog/${post.slug}`}
              className={`${styles.button} self-start`}
            >
              Czytaj więcej
            </Link>
          </div>
        ))}
      </div>
      <Newsletter />
    </main>
  );
}
