"use client";

import { useState } from "react";
import MarkdownEditor from "../components/MarkdownEditor";
import PortfolioPreview from "../components/PortfolioPreview";
import ThemeSwitcher from "../components/ThemeSwitcher";

const defaultMarkdown = `# Anshika

## MCA Student

### About Me
Passionate MCA student interested in Full Stack Development and modern web technologies.

### Skills
- React
- JavaScript
- Next.js
- Node.js
- MongoDB
- Tailwind CSS

### Projects

#### FinTrackify
Personal expense tracking application built with React and modern web technologies.

#### Developer Portfolio
Responsive developer portfolio generated from Markdown content.

### Education
**MCA** - Shri Ramswaroop Memorial University, Lucknow

### Contact
- Email: anshika@example.com
- GitHub: https://github.com/
- LinkedIn: https://linkedin.com/
`;

export default function Home() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [theme, setTheme] = useState("theme-light");

  const handleFile = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".md")) {
      alert("Please select a Markdown (.md) file.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      setMarkdown(String(e.target?.result || ""));
    };

    reader.readAsText(file);
  };

  const resetPortfolio = () => {
    setMarkdown(defaultMarkdown);
    setTheme("theme-light");
  };

  return (
    <main className={`${theme} min-h-screen`}>
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8">
        <header className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Markdown → Website
          </p>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Developer Portfolio Generator
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-base opacity-70 md:text-lg">
            Write or upload Markdown and instantly turn it into a clean,
            responsive developer portfolio.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-3">
          <label className="cursor-pointer rounded-lg border bg-white px-4 py-2 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            Choose .md File
            <input
              type="file"
              accept=".md,text/markdown"
              onChange={handleFile}
              className="hidden"
            />
          </label>

          <ThemeSwitcher theme={theme} setTheme={setTheme} />

          <button
            type="button"
            onClick={resetPortfolio}
            className="rounded-lg border bg-white px-4 py-2 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Reset
          </button>
        </div>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="panel rounded-2xl border p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-bold">Markdown Editor</h2>
              <span className="text-xs opacity-60">.md supported</span>
            </div>

            <MarkdownEditor
              markdown={markdown}
              setMarkdown={setMarkdown}
            />
          </div>

          <div className="panel rounded-2xl border p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-xl font-bold">Portfolio Preview</h2>
              <span className="text-xs opacity-60">Live</span>
            </div>

            <PortfolioPreview
              markdown={markdown}
              theme={theme}
            />
          </div>
        </section>

        <footer className="mt-8 text-center text-sm opacity-60">
          Built with Next.js, React, Tailwind CSS and React Markdown.
        </footer>
      </div>
    </main>
  );
}
