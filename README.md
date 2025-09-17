# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui.

## ✨ Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Works perfectly on all devices and screen sizes
- **Dark Mode**: Built-in dark mode toggle with system preference detection
- **Smooth Animations**: Beautiful Framer Motion animations throughout
- **Performance Optimized**: Fast loading with Next.js optimization
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter font
- **Dark Mode**: next-themes

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### 1. Personal Information

Update the following files with your personal information:

**Home Section** (`src/components/sections/home-section.tsx`):
- Change "Your Name" to your actual name
- Update the job title and description
- Replace social media links
- Add your profile image or update the placeholder

**About Section** (`src/components/sections/about-section.tsx`):
- Update your personal story
- Modify quick facts (location, experience, education, etc.)
- Customize core values and interests

**Contact Section** (`src/components/sections/contact-section.tsx`):
- Update contact information (email, phone, location)
- Replace social media links
- Customize the contact form action

### 2. Professional Experience

**Career Section** (`src/components/sections/career-section.tsx`):
- Replace the sample experiences with your actual work history
- Update job titles, companies, dates, and descriptions
- Modify achievements and technologies for each role

**Skills Section** (`src/components/sections/skills-section.tsx`):
- Update skill categories and proficiency levels
- Modify frameworks, libraries, and tools lists
- Adjust progress percentages to reflect your actual skills

### 3. Projects & Portfolio

**Projects Section** (`src/components/sections/projects-section.tsx`):
- Replace sample projects with your actual work
- Update project descriptions, technologies, and links
- Add real project images (replace placeholder images)
- Modify project categories as needed

### 4. Certifications & Achievements

**Certifications Section** (`src/components/sections/certifications-section.tsx`):
- Add your actual certifications
- Update credential IDs and verification links
- Modify achievements and awards
- Update skills covered by each certification

### 5. Styling & Branding

**Colors** (`src/app/globals.css`):
- The color scheme uses CSS custom properties
- Modify the color values in the `:root` and `.dark` selectors
- Update gradient colors in components for your brand colors

**Layout** (`src/app/layout.tsx`):
- Update the metadata (title, description)
- Change the favicon and other meta tags

**Navigation** (`src/components/navigation.tsx`):
- Modify the logo/brand name
- Add or remove navigation items
- Customize navigation styling

### 6. Content & Copy

- Update all text content to reflect your personality and brand
- Modify section headings and descriptions
- Customize call-to-action buttons and messages
- Update footer information

### 7. Images & Assets

- Replace the placeholder profile image
- Add real project screenshots
- Update social media icons if needed
- Add any additional assets (logos, certificates, etc.)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind config
│   │   ├── layout.tsx           # Root layout with theme provider
│   │   └── page.tsx             # Main page component
│   ├── components/
│   │   ├── ui/                  # shadcn/ui components
│   │   ├── sections/            # Page sections
│   │   │   ├── home-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   ├── skills-section.tsx
│   │   │   ├── career-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── certifications-section.tsx
│   │   │   └── contact-section.tsx
│   │   ├── navigation.tsx       # Main navigation component
│   │   └── theme-toggle.tsx     # Dark mode toggle
│   ├── providers/
│   │   └── theme-provider.tsx   # Theme context provider
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── components.json              # shadcn/ui configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Portfolio website"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with default settings

### Other Platforms

- **Netlify**: Drag and drop the `out` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automatic deployment
- **Custom Server**: Run `npm run build` and serve the generated files

## 🎯 Performance Tips

1. **Optimize Images**: Use Next.js Image component and WebP format
2. **Minimize Bundle**: Remove unused dependencies and code
3. **Lazy Loading**: Components are already optimized with intersection observer
4. **Caching**: Configure proper caching headers for static assets

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎉 Final Steps

1. **Customize all sections** with your personal information
2. **Test on different devices** to ensure responsiveness
3. **Optimize performance** by adding real images and content
4. **Deploy to your preferred platform**
5. **Share your awesome portfolio** with the world!

**Good luck with your portfolio!** 🚀
