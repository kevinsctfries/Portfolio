import fs from "fs";
import path from "path";
import Link from "next/link";
import styles from "./blog.module.scss";

function parseFrontmatter(fileContents: string) {
  const match = fileContents.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return { frontmatter: {}, content: fileContents };

  const frontmatterBlock = match[1];
  const content = fileContents.slice(match[0].length);

  const frontmatter: Record<string, string> = {};
  for (const line of frontmatterBlock.split("\n")) {
    const [key, ...rest] = line.split(":");
    if (key && rest.length > 0) {
      frontmatter[key.trim()] = rest.join(":").trim();
    }
  }

  return { frontmatter, content };
}

export default function BlogIndex() {
  const postsDir = path.join(process.cwd(), "src", "blog-posts");

  const posts = fs
    .readdirSync(postsDir)
    .filter(file => file.endsWith(".mdx"))
    .map(filename => {
      const slug = filename.replace(/\.mdx$/, "");
      const fileContents = fs.readFileSync(
        path.join(postsDir, filename),
        "utf8"
      );
      const { frontmatter } = parseFrontmatter(fileContents);

      return {
        slug,
        title: frontmatter.title || "Untitled",
        desc: frontmatter.desc || "No Description",
        publishedAt: frontmatter.publishedAt || new Date().toISOString(),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  return (
    <div className={styles.container}>
      <main>
        <header>
          <Link href="/" className="button">
            Home
          </Link>
        </header>
        <h1>My Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug} className={styles.postItem}>
              <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
                <span>
                  Published: {new Date(post.publishedAt).toLocaleDateString()}
                </span>
                <p>{post.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
