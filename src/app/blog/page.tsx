import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "./client";
import "./blog.scss";
import "../../styles/globals.scss";
import Background from "../../components/background/Background";

export const revalidate = 30;

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
    <main>
      <Background />
      <header>
        <Link href="/" className="button">
          Home
        </Link>
      </header>
      <ul>
        {posts.map(post => (
          <li key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2>{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
