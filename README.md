# Playwright CI/CD Pipeline — Best Buy Demo

A test-automation framework using Playwright for end-to-end testing of the “Best Buy” demo site, fully integrated with CI/CD workflows.

## 🚀 Features

- Browser-based E2E tests (UI flows) written in TypeScript  
- Pre-configured CI/CD pipeline (GitHub Actions) to run tests automatically on commit/pull request  
- Organized folder structure:
  - `tests/` — test specs  
  - `fixtures/` — test data / mock data  
  - `.github/workflows/` — CI/CD configuration  
- Flexible config via `playwright.config.ts`

## 🛠️ Setup & Running Tests

```bash
git clone https://github.com/MarwanSultan/playwright_ci_cd_pipeline_best_buy.git
cd playwright_ci_cd_pipeline_best_buy
npm install
npx playwright install  # installs required browsers
npx playwright test     # run all tests
