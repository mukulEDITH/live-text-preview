# 📄 Rich Text Editor with AI Suggestions & Theme Switcher

A modern, responsive Rich Text Editor built with React that supports basic and advanced text formatting, live preview, AI-based real-time text suggestions (simulated), smooth CSS animations, and a light/dark theme switcher.

---

## 🚀 Features
- **Basic Text Formatting:** Bold, Italic, Underline, Lists
- **Advanced Formatting:** Insert Links, Images, and Code Blocks
- **Live Preview:** See formatted text as you type
- **AI Suggestions:** Real-time (simulated) grammar and style suggestions
- **Responsive Design:** Optimized for both desktop and mobile
- **Theme Switcher:** Toggle between light and dark modes
- **Smooth Animations:** CSS-based transitions for enhanced UX

---

## 🛠️ Project Structure
```
rich-text-editor/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── RichTextEditor.jsx
│   ├── styles/
│   │   └── styles.css
│   └── App.jsx
├── .gitignore
├── package.json
└── README.md
```

---

## 💻 Setup Instructions
### 1. Clone the Repository
```bash
git clone <your-repo-link>
cd rich-text-editor
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Application
```bash
npm start
```
The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🌗 Theme Switcher
Click the theme toggle button in the header to switch between light and dark modes. The theme affects the editor background, text color, buttons, and panels.

---

## ✨ Design Decisions
- **Functional Components & Hooks:** Chosen for simplicity and modern React best practices.
- **No External Libraries:** All features, including animations, are pure CSS and native JavaScript APIs.
- **Responsive Design:** Ensures a seamless experience on all devices.
- **AI Suggestions Simulation:** Implemented with `useEffect` to mimic real-time suggestions.
- **Theme Management:** Managed via CSS variables and React state.

---

## 📦 Deployment
You can deploy the project on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/):
```bash
npm run build
```
Upload the generated `build/` folder to your preferred platform.

---

## 🎥 Demo Video
📹 [Add your demo video link here]

---

## 🔑 License
MIT License. Feel free to use and modify as needed.

---

## 🙌 Acknowledgments
Special thanks to the open-source community for inspiring this project.
