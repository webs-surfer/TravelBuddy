# 🌍 AI Travel Buddy - React + TypeScript + Vite

An **AI-powered personal travel assistant** web application built with **React, TypeScript, and Vite**.  
The platform provides two experiences:
- **Visitor Mode** → Public homepage with details about the platform, About Us, Membership, and Contact.  
- **Member Mode** → Once logged in, users can chat with the AI, view trip dashboards, compare travel options, and access smart travel features.

---

## ✨ Features
- 🔑 **Authentication (Login / Signup)** → Redirects users to personalized experience.  
- 🤖 **AI Travel Chat** → Friendly, seamless conversation to plan trips.  
- 📊 **Dashboard** → View past trips, expenditure, and insights.  
- 🏨 **Features Tab** → Hotel, restaurant, and cab comparison + nearby attractions.  
- 👤 **Profile Settings** → Update personal details and travel preferences.  
- 🎨 **Design Theme** → Calm **teal & sky-blue gradient** background to reflect trust, safety, and travel vibes.  

---

## 🚀 Tech Stack
- **Frontend**: React + TypeScript + Vite  
- **Styling**: Tailwind CSS  
- **State Management**: Context API / Redux (optional)  
- **Database**: Firebase / MongoDB (for user profiles & preferences)  
- **APIs**: Google Maps, OpenWeather, TripAdvisor, Uber/Ola  
- **Linting**: ESLint + Prettier + Type-checked configs  

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ai-travel-buddy.git
cd ai-travel-buddy
2. Install dependencies
bash
Copy code
npm install
3. Run the development server
bash
Copy code
npm run dev
4. Build for production
bash
Copy code
npm run build
📂 Project Structure
csharp
Copy code
.
├── src
│   ├── components     # Reusable components
│   ├── pages          # Pages (Home, About, Dashboard, Features, Profile)
│   ├── contexts       # Auth & Preference context
│   ├── assets         # Images & static files
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public             # Static files
├── tsconfig.json
├── vite.config.ts
└── package.json
📏 Linting & Code Quality
This project uses ESLint with TypeScript-aware rules.

Example config:

js
Copy code
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
📜 License
MIT License © 2025 [NovaCore]