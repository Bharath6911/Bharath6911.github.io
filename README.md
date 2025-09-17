# Bharath Mummadi - Portfolio Website 🚀

A modern, responsive portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and dynamic content
- **Mobile Navigation**: Hamburger menu with smooth transitions
- **Time-based Greeting**: Dynamic greeting based on time of day
- **Project Showcase**: Featured projects with live links and descriptions
- **Skills Timeline**: Interactive timeline for experience and education
- **Achievement Counter**: Animated counters for accomplishments
- **Contact Section**: Easy ways to get in touch
- **Performance Optimized**: Next.js Image optimization and lazy loading

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Timeline**: [React Vertical Timeline](https://github.com/stephane-monnot/react-vertical-timeline)
- **Counters**: [React CountUp](https://github.com/glennreyes/react-countup)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bharath6911/Bharath6911.github.io.git
   cd bharath-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
bharath-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── favicon.ico
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── Navbar.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   ├── me.jpeg
│   └── *.svg
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update personal information** in `src/app/page.tsx`
2. **Replace profile image** in `public/me.jpeg`
3. **Modify projects data** in the projects array
4. **Update contact information** in the footer
5. **Customize colors** in `tailwind.config.js`
6. **Update resume link** in the navbar

## 🚀 Deployment

This portfolio is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Manual Deployment

```bash
npm run build
npm run export
```

The static files will be generated in the `out/` directory.

## 📱 Sections

- **Hero/About**: Introduction with profile image and call-to-action
- **Skills**: Technology stack and expertise areas
- **Experience**: Timeline of education and work experience
- **Projects**: Showcase of featured projects with live links
- **Achievements**: Counters for accomplishments and workshops
- **Learning**: Current learning goals and focus areas
- **Contact**: Get in touch section with social links

## 🙏 Credits & Inspiration

This portfolio was inspired by and draws design elements from:

- **[Om Prakash](https://omprakas.me/)** - Clean design patterns and layout inspiration
- **[Gourab Gorai](https://gourabgorai.netlify.app/)** - Interactive elements and animation concepts

Special thanks to these developers for creating beautiful portfolios that served as inspiration for this project. Their work helped shape the visual design and user experience of this portfolio.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: [mummadibharath9966@gmail.com](mailto:mummadibharath9966@gmail.com)
- **LinkedIn**: [Bharath Mummadi](https://www.linkedin.com/in/bharath-mummadi-8a8515270)
- **GitHub**: [Bharath6911](https://github.com/Bharath6911)

---

⭐ **If you found this portfolio helpful, please consider giving it a star!**
