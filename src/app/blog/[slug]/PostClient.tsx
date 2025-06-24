"use client";

import React, { useEffect, useState } from "react";
import { compileMDX } from "next-mdx-remote/rsc";

export default function PostClient({ markdown }: { markdown: string }) {
  const [Content, setContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    compileMDX<{}>({
      source: markdown,
      options: { parseFrontmatter: false },
    }).then(({ content }) => setContent(content));
  }, [markdown]);

  if (!Content) {
    return <p>Loading…</p>;
  }

  return <>{Content}</>;
}
