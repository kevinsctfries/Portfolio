import {
  PortableText,
  type PortableTextComponents,
  type SanityDocument,
} from "next-sanity";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Link from "next/link";
import { notFound } from "next/navigation";

import { client } from "../client";
import Background from "../../../components/background/Background";
import "./page.scss";

export const revalidate = 30;

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageUrl = urlFor(value)?.width(800).fit("max").url();
      return <img src={imageUrl ?? ""} alt={value.alt || "Post image"} />;
    },
    code: ({ value }) => {
      return (
        <div className="code-block">
          <SyntaxHighlighter
            language={value.language}
            style={gruvboxDark}
            showLineNumbers>
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
  marks: {
    code: ({ children }) => <code>{children}</code>,
  },
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug,
  });

  if (!post) {
    notFound();
  }

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main>
      <Background />
      <header>
        <Link href="/" className="button">
          Home
        </Link>
        <Link href="/blog" className="button">
          Back to posts
        </Link>
      </header>

      {postImageUrl && <img src={postImageUrl} alt={post.title} />}

      <div className="post-body">
        <h1>{post.title}</h1>
        <p>Posted: {new Date(post.publishedAt).toLocaleDateString()}</p>
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={portableComponents} />
        )}
      </div>
    </main>
  );
}
