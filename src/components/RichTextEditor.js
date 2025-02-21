 
import { useState, useEffect } from "react";
import "../index.css";

export default function RichTextEditor() {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (text.trim()) {
      setShowSuggestions(true);
      setSuggestions(`Consider revising this part: "${text.split(" ").slice(-5).join(" ")}"`);
    } else {
      setShowSuggestions(false);
    }
  }, [text]);

  const formatText = (command, value = null) => {
    document.execCommand(command, false, value);
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="editor-container">
      <header className="header">
        <h1 className="title">✨ Rich Text Editor ✨</h1>
        <button onClick={handleThemeToggle} className="theme-toggle">
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </header>

      <div className="toolbar">
        <button onClick={() => formatText("bold")} className="btn">𝐁</button>
        <button onClick={() => formatText("italic")} className="btn">𝘐</button>
        <button onClick={() => formatText("underline")} className="btn">𝘜</button>
        <button onClick={() => formatText("insertUnorderedList")} className="btn">• List</button>
        <button onClick={() => formatText("createLink", prompt("Enter URL:"))} className="btn">🔗 Link</button>
        <button onClick={() => formatText("insertImage", prompt("Enter Image URL:"))} className="btn">🖼️ Image</button>
        <button onClick={() => formatText("formatBlock", "pre")} className="btn">💻 Code</button>
      </div>

      <div
        contentEditable
        className="text-area"
        placeholder="Start typing here..."
        onInput={(e) => setText(e.currentTarget.innerHTML)}
      ></div>

      {showSuggestions && (
        <div className="suggestion-panel">
          💡 {suggestions}
        </div>
      )}

      <h2 className="preview-title">🔎 Live Preview:</h2>
      <div className="preview" dangerouslySetInnerHTML={{ __html: text }}></div>
    </div>
  );
}
