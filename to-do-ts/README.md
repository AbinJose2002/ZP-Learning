# ✅ TypeScript To-Do App

A simple and responsive **To-Do List** application built using **TypeScript**, **HTML**, and **CSS**. This project helps users manage tasks with an intuitive UI and demonstrates the power of TypeScript for building scalable front-end applications.

---

## 📸 Demo

![Screenshot](./assets/screenshot.png)

---

## 🚀 Features

- ✅ Add new tasks  
- 🗑️ Delete existing tasks  
- ✏️ Mark tasks as complete/incomplete  
- 💾 Data persistence using `localStorage`  
- 💻 Responsive design for mobile and desktop  
- 🔐 Type-safe architecture using TypeScript  

---

## 🛠️ Tech Stack

- **TypeScript**
- **HTML5**
- **CSS3 / SCSS (optional)**
- **LocalStorage API**

---

## 📁 Folder Structure

typescript-todo-app/
│
├── public/
│ └── index.html
│
├── src/
│ ├── app.ts # Main TypeScript logic
│ └── styles.css # Basic styling
│
├── dist/ # Transpiled JavaScript output
│
├── tsconfig.json # TypeScript config
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/typescript-todo-app.git
cd typescript-todo-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Build the project
bash
Copy
Edit
npx tsc
4. Run locally
You can open public/index.html in a browser, or serve it using a local server like:

bash
Copy
Edit
npx live-server public
⚙️ TypeScript Config (tsconfig.json)
json
Copy
Edit
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true
  }
}
🔒 Type Definitions Example
ts
Copy
Edit
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
🧪 Future Enhancements
✏️ Task editing

🗂️ Task categories

☁️ Cloud sync / Firebase integration

🎨 Dark mode toggle

📆 Due date reminder

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Made with ❤️ by Your Name

yaml
Copy
Edit

---

### ✅ Changes made:
- Fixed incorrect indentations and bullet points.
- Corrected Markdown formatting (code blocks, headings, bullet spacing).
- Ensured proper syntax highlighting for code.
- Removed extra `yaml`, `Copy`, `Edit` words that were mistakenly included.

Let me know if you'd like a version with badges or a versioning section too!