# Student Connect - The Ultimate Collaboration Platform 🚀

Welcome to **Student Connect**, a dynamic platform designed to bring students together to showcase their projects, collaborate, and network with like-minded individuals. Whether you're looking for teammates, inspiration, or a space to present your work, Student Connect has got you covered!

## 🎥 Project Demo

[![Watch the Demo](https://drive.google.com/uc?id=1hp_tZ7fg58cf1V4UmAbSKWiPCtY2qfS8)](https://youtu.be/P53qlysC1MI) Click the Above Visual for Demo

## 🌟 Features
- 🔐 **Flexible Authentication** - Sign in with Google **or** with email & password.
- 👤 **Student Profiles** - Create and edit a rich profile (name, USN, branch, year, interests/tags, and social links) via a guided multi-step form.
- 🔎 **Discover & Search** - Browse fellow students and filter by name, USN, branch, year, or tags.
- 💬 **Direct Messaging** - Chat one-on-one with other students through the built-in chat popup.
- 🤝 **Networking Hub** - Connect with peers and find collaborators.
- 🛡 **Admin Panel** - A protected dashboard for administrators to manage the platform.

## 🛠 Technologies Used
- **Next.js 15** (App Router) - Fast and scalable React framework
- **React 19** & **TypeScript** - For type safety and a better developer experience
- **Tailwind CSS** + **Radix UI** - Modern, accessible styling
- **NextAuth.js v5 (Auth.js)** - Authentication (Google OAuth + Credentials)
- **Prisma** + **MongoDB** - Type-safe data access over a MongoDB Atlas database
- **bcryptjs** - Secure password hashing

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Prerequisites
- **Node.js** (v18.18 or newer) — download from [nodejs.org](https://nodejs.org/).
- A **MongoDB** database (e.g. a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster).
- A **Google OAuth client** from the [Google Cloud Console](https://console.cloud.google.com/) (only required for Google sign-in).

### 1. Clone & install
```bash
git clone https://github.com/your-repo/student-connect.git
cd student-connect
npm install
```

### 2. Configure environment variables
Create a `.env` file in the project root with the following keys:

```bash
# MongoDB connection string
DATABASE_URL="mongodb+srv://<user>:<password>@<cluster>.mongodb.net/student_connect"

# NextAuth secret — generate one with: npx auth secret
AUTH_SECRET="your-generated-secret"

# Google OAuth credentials (from Google Cloud Console)
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

# JSON array of admin emails that can access /admin
ADMINS=["admin@example.com"]
```

> **Google OAuth note:** In the Google Cloud Console, add `http://localhost:3000/api/auth/callback/google` (and your production URL) to the **Authorized redirect URIs**.

### 3. Generate the Prisma client
```bash
npx prisma generate
```

### 4. Start the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure
```
src/
├── app/              # Next.js App Router pages & API routes
│   ├── login/        # Sign in / sign up (Google + email/password)
│   ├── profile/      # Profile creation
│   ├── editProfile/  # Profile editing
│   ├── student/      # Student & messaging routes
│   └── admin/        # Admin-only dashboard
├── components/       # UI and feature components
├── lib/              # Auth config, db client, utilities
├── auth.ts           # NextAuth setup (providers, callbacks)
├── middleware.ts     # Route protection & admin gating
└── routes.ts         # Auth / protected / admin route definitions
```

## 📚 Learn More
To learn more about Next.js, check out the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [NextAuth.js (Auth.js) Docs](https://authjs.dev) - Authentication for Next.js.
- [Prisma Docs](https://www.prisma.io/docs) - Next-generation ORM.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

> **Deploying to Vercel:** Add all the environment variables above in **Project Settings → Environment Variables**, then deploy. For more details, check out the [deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).

## 🏆 Contributing
We welcome contributions! 🚀 If you'd like to contribute:
1. Fork the repo.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push your changes: `git push origin feature-branch-name`
5. Open a pull request!

## 📜 License
This project is licensed under the **MIT License**.

---

Made with ❤️ by **Student Connect Team** ✨
