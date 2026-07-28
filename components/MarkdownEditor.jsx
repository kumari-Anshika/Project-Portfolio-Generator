"use client";

export default function MarkdownEditor({ markdown, setMarkdown }) {
  return (
    <textarea
      value={markdown}
      onChange={(event) => setMarkdown(event.target.value)}
      className="editor w-full rounded-lg border border-slate-300 bg-slate-50 p-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      placeholder="Paste your Markdown content here..."
      spellCheck="false"
      aria-label="Markdown editor"
    />
  );
}
