"use client";

import React, { useEffect, useState } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";

const aliasMap: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  jsx: "jsx",
  tsx: "tsx",
  html: "html",
  css: "css",
  json: "json",
  plaintext: "plaintext",
};

function normalizeLang(raw: string) {
  return aliasMap[raw] || raw;
}

export default function PostClient({ markdown }: { markdown: string }) {
  const [Content, setContent] = useState<React.ReactNode>(null);

  const CodeBlock = ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLElement>) => {
    const rawLang = className?.replace("language-", "") || "plaintext";
    const language = normalizeLang(rawLang);

    const code = String(children).trim();

    return (
      <SyntaxHighlighter
        language={language}
        style={atomOneDark as any}
        PreTag="div"
        className="codeBlock"
        showLineNumbers
        lineNumberStyle={{
          minWidth: "2em",
          paddingRight: "1em",
          color: "var(--color-muted",
        }}
        customStyle={{
          borderRadius: "1rem",
          padding: "1rem",
          marginBottom: "1.5rem",
          fontSize: "0.9rem",
        }}
        {...props}>
        {code}
      </SyntaxHighlighter>
    );
  };

  useEffect(() => {
    compileMDX({
      source: markdown,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
      components: {
        code: CodeBlock,
      },
    }).then(({ content }) => setContent(content));
  }, [markdown]);

  if (!Content) return <p>Loading…</p>;
  return <>{Content}</>;
}
