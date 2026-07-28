"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PortfolioPreview({ markdown, theme }) {
  const previewClass =
    theme === "theme-dark"
      ? "bg-gray-900 text-white border-gray-700"
      : theme === "theme-blue"
        ? "bg-blue-50 text-blue-950 border-blue-200"
        : "bg-white text-slate-900 border-slate-200";

  return (
    <div
      id="portfolio"
      className={`preview rounded-lg border p-6 ${previewClass}`}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
