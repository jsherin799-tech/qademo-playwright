# QADemo Playwright Test Automation Framework

A scalable, maintainable End-to-End (E2E) UI test automation framework for [qademo.com](https://qademo.com) built using **Playwright** and **TypeScript** with the **Page Object Model (POM)** pattern.

---

## 🚀 Features

- **Page Object Model (POM):** Clean separation between page elements/actions and test logic.
- **Robust Locators:** Uses resilient `data-testid` selectors to prevent strict-mode violations and flaky tests.
- **Cross-Browser Support:** Configured for Chrome/Chromium execution with cross-browser capability.
- **CI/CD Integrated:** Automated workflow setup using GitHub Actions.
- **HTML Reporting:** Detailed test results, execution logs, and failure artifacts (screenshots/videos).

---

## 📁 Project Structure

```text
├── .github/
│   └── workflows/
│       └── playwright.yml     # GitHub Actions CI/CD configuration
├── pages/                     # Page Object classes
│   ├── AdminPage.ts
│   ├── CartPage.ts
│   ├── HomePage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/                     # Test suites
│   ├── admin.spec.ts
│   ├── cart.spec.ts
│   ├── login.spec.ts
│   ├── products.spec.ts
│   └── qademo.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts        # Playwright test runner configuration
└── README.md
