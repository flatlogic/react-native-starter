# 🚀 React Native Starter - A Free Mobile App Template!

[View Docs](https://flatlogic.com/templates/react-native-starter/demo) | [Download](https://github.com/flatlogic/react-native-starter/archive/refs/heads/master.zip) | [More Templates](https://flatlogic.com/templates) | [Discord Community](https://discord.gg/flatlogic-community) | [Support Forum](https://flatlogic.com/forum)

**Originally a premium product priced at $69+, now available for free!** 🎉

Looking for a perfect codebase generator for your Startup? Try [Flatlogic AI Web App Generator](https://flatlogic.com/generator) - our new tool, sort of a template++.

---
![React Native Starter](https://i.imgur.com/vcz4bU6.png)

## 🎯 Why React Native Starter?
- **Ex-Premium**: This template was previously paid. Enjoy it for free now. 😉
- **Tons of components**: Packed with ready-to-use elements for rapid development.
- **Join the Community**: [Flatlogic Discord](https://discord.gg/flatlogic-community) is where the action happens.
- **Free Node.js Backend**: Pair it up with [this backend](https://github.com/flatlogic/nodejs-backend) to go full-stack.

---

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/flatlogic/react-native-starter.git
   cd react-native-starter
   ```
2. **Install dependencies**
   ```bash
   npm ci
   ```
3. **Run the app**
   ```bash
   npm run run:ios      # for iOS
   npm run run:android  # for Android
   ```

Use Node.js 22.23 or newer and npm. `package-lock.json` is the canonical JavaScript lock. The app uses React Native 0.86.3 and React 19.2.3, preserving the native application IDs, sample data, fonts, screens and themes.

`npm test` runs the security backport checks and component tests. `npm run lint` uses ESLint 9's flat configuration. `npm run test:coverage -- --runInBand` checks Jest coverage with the scoped glob/minimatch updates. `npm run bundle:android` and `npm run bundle:ios` build production Metro bundles without installing an SDK.

For native development, follow the [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment). iOS uses Ruby 3.3+, `bundle install`, then `cd ios && bundle exec pod install`. Native CI uses standard GitHub runners to build an Android debug APK and build/test an unsigned iOS simulator app. Its native Home-screen test captures a screenshot and exposes the resolved Gemfile/Podfile locks as review artifacts. No signing credentials or deployment are required.

### Dependency security

The raw npm audit currently reports **9 low-severity findings** from deepmerge 3.3.0 and 4.3.1; no fixed upstream versions exist for these ranges. `npm ci` applies the narrow local security backport in `scripts/patch-deepmerge.cjs`. It replaces unsafe dynamic assignments with `Object.defineProperty`, preserving each package's original merge API and versions. The script verifies the exact upstream SHA-256 of all five runtime entry points (index/CommonJS/UMD as applicable), verifies the patched bytes on subsequent installs, and fails loudly if the published source changes. Regression tests verify prototype safety and ordinary merge behavior.

The raw registry metadata remains visible: this is **not a zero-advisory graph**. `npm audit --audit-level=moderate` passes only while no moderate/high/critical findings exist. CI also requires the local backport's runtime tests; it does not suppress or disable the remaining low advisories. The source hashes are recorded in `scripts/deepmerge-inputs.json`.

---

## 🧩 Features

- Fully Responsive
- Built with React Native
- Ready-to-use Components
- 6 Color Themes
- Modular Architecture
- Authentication System
- Calendar Application
- Profile Page
- Analytics Integration (GA, Firebase, etc.)
- Signin/Signup Screens

---

## 🛠 Built With
- React Native
- Redux
- React Navigation

---

## 📦 Components
- UI Elements (Buttons, Modals, Forms)
- Authentication (Login, Signup)
- Charts
- Analytics Integration
- User Profile
- Navigation

---

## 👨‍💻 How to Contribute
- **Star this repo ⭐** - show some love.
- **Report bugs** - but be nice.
- **Join the [Discord](https://discord.gg/flatlogic-community)** - meet fellow devs.

---

## 🔥 About Flatlogic
[Flatlogic](https://flatlogic.com/ai-software-development-agent) builds modern business software so you don't have to. Our AI Software Development Agent helps you generate, deploy, and maintain enterprise applications with minimal effort.

---

> **Questions or feedback?**  
> Join our [Flatlogic Community Discord](https://discord.gg/flatlogic-community) or visit our [support forum](https://flatlogic.com/forum). We might even reply!


## License

[MIT License](LICENSE)
