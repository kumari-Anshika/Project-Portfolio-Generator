# Developer Portfolio Generator

A Next.js application that converts Markdown resume/portfolio content into a customizable live portfolio preview.

<img width="1536" height="1024" alt="ss" src="https://github.com/user-attachments/assets/01d6cad3-aace-4584-be6c-c92cf4895e3b" />


## Features

- Paste Markdown
- Upload `.md` files
- Live preview
- GitHub-Flavored Markdown support
- Light, Dark and Blue themes
- Responsive layout
- Reset sample content
- GitHub-ready project structure

## Tech Stack

- Next.js
- React
- Tailwind CSS
- React Markdown
- remark-gfm
- JavaScript

## Requirements

Install Node.js and npm.

Check:

```bash
node -v
npm -v
```

## Installation

Open the extracted project in VS Code.

Run:

```bash
npm install
```

Then:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## GitHub upload

Create a new repository on GitHub named `portfolio-generator`.

Then run these commands from the project folder:

```bash
git init
git add .
git commit -m "Initial portfolio generator project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio-generator.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Important

The current application converts Markdown and previews it in the browser. It does not automatically create GitHub repositories or push generated websites through the GitHub API. That functionality requires GitHub authentication/OAuth and API integration and can be added as a later feature.

## Project structure

```text
portfolio-generator/
│
├── app/
│   ├── page.js
│   ├── layout.js
│   └── globals.css
│
├── components/
│   ├── MarkdownEditor.jsx
│   ├── PortfolioPreview.jsx
│   └── ThemeSwitcher.jsx
│
├── public/
│   └── favicon.svg
│
├── styles/
│   └── theme.css
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── package.json
├── postcss.config.mjs
└── README.md
```
