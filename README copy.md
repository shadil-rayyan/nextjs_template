# Gecian Hub

[![Next.js](https://img.shields.io/badge/Next.js-13+-blue?logo=nextdotjs)](https://nextjs.org/)
[![License](https://img.shields.io/github/license/shadilrayyan/gecian_hub?style=flat-square)](LICENSE)
[![CI](https://github.com/shadilrayyan/gecian_hub/actions/workflows/ci.yml/badge.svg)](https://github.com/shadilrayyan/gecian_hub/actions/workflows/ci.yml)

A modern student portal for GECians, built with Next.js.  
This app helps students manage complaints, expenses, projects, hackathons, and more—all in one place.

---

## 🚀 Features

- 📋 Complaint management system
- 💸 Expense tracker
- 🤝 Project collaboration
- 🏆 Hackathon info & links
- 🔗 Quick access buttons to external student resources
- 🗂 Tabs and cards UI
- 🖋️ Modern design with [Geist](https://vercel.com/font)
- 🔒 TypeScript for safety

---

## 🛠️ Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/shadilrayyan/gecian_hub.git
cd gecian_hub
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ✅ Quality & Testing

- Unit tests (Jest):

  ```bash
  npm run test:unit
  ```

- End-to-end (Playwright):

  ```bash
  # first time only
  npx playwright install --with-deps
  
  npm run test:e2e
  ```

- Typecheck:

  ```bash
  npm run typecheck
  ```

See `TESTING.md` for details.

---

## 📦 Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)

---

## 🤝 Contributing

Pull requests and issues are welcome!  
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines. Please also review our [Code of Conduct](CODE_OF_CONDUCT.md) and [Security Policy](SECURITY.md).

Additional testing docs: [TESTING.md](TESTING.md)

---

## 📝 License

This project is licensed under the MIT License.

Built by CodeCompass.