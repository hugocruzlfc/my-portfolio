import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface ContentSectionProps {
  content: string;
}

const CodeBlock = {
  code: ({ node, inline, className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code
        className={className}
        {...props}
      >
        {children}
      </code>
    );
  },
  inline: ({ children }: any) => <code>{children}</code>,
};

export const ContentSection: React.FC<ContentSectionProps> = ({ content }) => {
  return (
    <ReactMarkdown
      components={CodeBlock}
      className="markdown-class"
    >
      {content}
    </ReactMarkdown>
  );
};
