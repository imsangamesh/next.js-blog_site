"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";

const mdxComponents = {
  Image,
};

const RenderMdx = ({ blog }) => {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div
      className="col-span-12 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max prose-blockquote:bg-accent/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:not-italic
    
    prose-li:marker:text-accent
    
    dark:prose-invert
    dark:prose-blockquote:border-accentDark
    dark:prose-blockquote:bg-accentDark/20
    dark:prose-li:marker:text-accentDark

    first-letter:text-3xl sm:first-letter:text-5xl
    ">
      <MDXContent components={mdxComponents} />
    </div>
  );
};

export default RenderMdx;
