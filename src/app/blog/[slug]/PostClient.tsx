"use client";

import React, { useEffect, useState } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={atomOneDark as any}
        PreTag="div"
        className="codeBlock"
        showLineNumbers
        lineNumberStyle={{
          minWidth: "2em",
          paddingRight: "0.5em",
          color: "var(--text-color-alt)",
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
