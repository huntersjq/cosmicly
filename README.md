# 🌙 Cosmicly | Personalized Astrology & Cosmic Insights

Cosmicly is a high-end, interactive astrology platform designed to provide users with deep insights into their astral journey. Built with a focus on premium aesthetics, smooth animations, and global reach.

## ✨ Core Features

- **Daily & Monthly Horoscopes**: Personalized readings for all 12 zodiac signs.
- **Cosmic Insights**:
  - **Natal Chart Reports**: Comprehensive analysis of planetary positions at birth.
  - **Soulmate & Future Baby Sketches**: Fun, interactive readings with visual components.
  - **Compatibility Tests**: Explore relationships through astral alignment.
- **Expert Guidance**: Connect with professional astrologers for 1-on-1 consultations.
- **Astrology Masterclasses**: Courses to help users master the secrets of the stars.
- **Multilingual Support**: Fully localized in English, Chinese (中文), and Spanish (Español).
- **Theme Modes**: Beautifully crafted Light and Dark modes with glassmorphism components.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Shadcn/UI](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Internationalization**: Custom React Context-based i18n system.

## 🛠️ Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/huntersjq/cosmicly.git
    cd cosmicly
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view the app.

## 📦 Deployment

This project is configured for **Static Export** and is optimized for deployment on **GitHub Pages**.

### GitHub Actions Deployment

The repository includes a `.github/workflows/deploy.yml` file that automates the deployment process:

1.  Push changes to the `main` branch.
2.  GitHub Actions will automatically:
    - Install dependencies.
    - Build the static site (`npm run build`).
    - Export the site to the `out/` directory.
    - Deploy the content to GitHub Pages.

### Manual Export

To manually generate the static site:

```bash
npm run build
```

The static files will be located in the `out/` folder.

## 📄 License

This project is created for demonstration and portfolio purposes. All design inspirations from Hint.app remain the property of their respective owners.
