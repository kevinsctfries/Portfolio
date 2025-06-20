import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "./client";

export const revalidate = 30;

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return (
    <main className="">
      <h1 className="">Posts</h1>
      <ul className="">
        {posts.map(post => (
          <li className="" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <h2 className="">{post.title}</h2>
              <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
