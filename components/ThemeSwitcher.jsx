"use client";

export default function ThemeSwitcher({ theme, setTheme }) {
  const themes = [
    ["theme-light", "Light"],
    ["theme-dark", "Dark"],
    ["theme-blue", "Blue"]
  ];

  return (
    <div className="flex flex-wrap gap-2" aria-label="Theme selector">
      {themes.map(([value, label]) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          className={`rounded-lg border px-4 py-2 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
            theme === value
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-white text-slate-900"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
