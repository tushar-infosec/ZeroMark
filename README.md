<p align="center">
  <img src="assets/screenshots/banner.png" alt="ZeroMark Banner" width="700"/>
</p>

<h1 align="center">🔐 ZeroMark</h1>

<p align="center">
  <b>Deterministic Password Obfuscation Tool</b><br/>
  Transform memorable passwords into scrambled, secure outputs — without storing anything.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT License"/>
</p>

<p align="center">
  <a href="https://tushar-infosec.github.io/ZeroMark/">🌐 Live Demo</a> •
  <a href="#-features">✨ Features</a> •
  <a href="#-how-it-works">⚙️ How It Works</a> •
  <a href="#-getting-started">🚀 Getting Started</a>
</p>

---

## 📸 Screenshots

<p align="center">
  <img src="assets/screenshots/step1.png" alt="ZeroMark Home Screen" width="380"/>
  &nbsp;&nbsp;
  <img src="assets/screenshots/step2.png" alt="ZeroMark Encryption Screen" width="380"/>
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔑 **Password Obfuscation** | Converts memorable passwords into deterministic scrambled outputs |
| 🎯 **Deterministic Output** | Same input always produces the same encrypted output |
| 🛡️ **Zero Data Storage** | Nothing is stored — your privacy is fully respected |
| 🌐 **URL-Safe Mode** | Toggle to generate URL-compatible encrypted passwords |
| 👁️ **Show/Hide Password** | Toggle visibility of your input password |
| 📊 **Character Counter** | Real-time character count with 20-char max limit |
| 🎨 **Matrix Rain Background** | Animated cyberpunk-style matrix rain effect |
| ✨ **3D Card Tilt** | Interactive glassmorphic card with mouse-tracking tilt effect |
| 💚 **Mouse Glow Effect** | Dynamic neon glow that follows your cursor |

---

## ⚙️ How It Works

ZeroMark uses a **deterministic obfuscation algorithm** (not cryptographic encryption) to transform your input:

```
Input: "tushar@123"
         ↓
   Hash Calculation (polynomial rolling hash)
         ↓
   Character Shifting (based on hash + position)
         ↓
   Reverse + Signature Append
         ↓
Output: "564Bvdjwxv#Z"
```

> ⚠️ **Important:** This is a deterministic obfuscation tool, not a cryptographic encryption system. It is designed to create obscured versions of memorable passwords for everyday use.

---

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Edge, Safari)
- No server or build tools required!

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tushar-infosec/ZeroMark.git
   ```

2. **Navigate to the project**
   ```bash
   cd ZeroMark
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   start index.html        # Windows
   open index.html          # macOS
   xdg-open index.html      # Linux
   ```

That's it! No dependencies, no build step. 🎉

---

## 📁 Project Structure

```
ZeroMark/
├── index.html              # Main application page
├── styles.css              # All styles (glassmorphism, animations, layout)
├── js/
│   └── ui-effects.js       # Mouse glow + 3D tilt interactions
├── assets/
│   ├── profile.jpg          # Developer avatar
│   └── screenshots/         # README screenshots
│       ├── banner.png
│       ├── step1.png
│       └── step2.png
├── README.md                # This file
├── LICENSE                  # MIT License
├── CONTRIBUTING.md          # Contribution guidelines
└── .gitignore               # Git ignore rules
```

---

## 🎨 Tech Stack

- **HTML5** — Semantic markup & canvas element for matrix rain
- **CSS3** — Glassmorphism, CSS custom properties, backdrop-filter, gradients
- **Vanilla JavaScript** — Zero dependencies, pure JS for all logic & effects
- **Canvas API** — Matrix rain background animation

---

## 🤝 Contributing

Contributions are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) before submitting a PR.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<p align="center">
  <img src="assets/profile.jpg" alt="Tushar Mumbre" width="100" style="border-radius: 50%;"/>
</p>

<p align="center">
  <b>Tushar Mumbre</b><br/>
  Cybersecurity Enthusiast & Developer
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/tushar-mumbre-a7615a28a/">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/>
  </a>
  <a href="https://github.com/tushar-infosec">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
  </a>
</p>

---

<p align="center">
  ⭐ If you found this useful, consider giving it a star!
</p>
