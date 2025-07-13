# Chibay Landing Page

A modern, responsive React landing page for Chibay tech startup featuring glassmorphic design, animated backgrounds, and interactive components.

## Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Glassmorphic UI**: Semi-transparent elements with backdrop blur effects
- **Animated Backgrounds**: Custom animated orb components with dynamic gradients
- **Interactive Carousel**: Product showcase with smooth navigation
- **Contact Form**: Validated form with success notifications
- **Modern Stack**: React 19, Tailwind CSS, Vite, and modern UI components

## Tech Stack

- **Framework**: React 19
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI (shadcn/ui)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Carousel**: Embla Carousel
- **Notifications**: Sonner
- **Package Manager**: pnpm

## Project Structure

```
chibay-landing/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui components
│   │   ├── About.jsx        # About Us section
│   │   ├── Contact.jsx      # Contact form section
│   │   ├── CustomOrb.jsx    # Animated orb component
│   │   ├── CustomProfileCard.jsx # Profile card component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Founders.jsx     # Founders section
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Navbar.jsx       # Navigation component
│   │   └── Products.jsx     # Products carousel
│   ├── App.css             # Global styles
│   ├── App.jsx             # Main app component
│   └── main.jsx            # Entry point
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd chibay-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173/chibay-landing/`

## Deployment to GitHub Pages

1. **Update package.json**
   - Replace `yourusername` in the homepage field with your GitHub username
   - Replace `chibay-landing` with your repository name if different

2. **Build and deploy**
   ```bash
   npm run deploy
   # or
   pnpm run deploy
   # or
   yarn deploy
   ```

3. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to Pages section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Your site will be available at `https://yourusername.github.io/chibay-landing/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run predeploy` - Build before deployment
- `npm run deploy` - Deploy to GitHub Pages

## Customization

### Colors and Branding
- Update the color palette in `src/App.css`
- Modify the gradient colors in the Orb components
- Change the brand name and logo in the Navbar component

### Content
- Update founder information in `src/components/Founders.jsx`
- Modify product details in `src/components/Products.jsx`
- Edit company information in `src/components/About.jsx`
- Update contact details in `src/components/Contact.jsx`

### Styling
- Customize Tailwind configuration in `tailwind.config.js`
- Add custom CSS in `src/App.css`
- Modify component-specific styles in individual component files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Features

- Optimized images with proper sizing
- Lazy loading for off-screen content
- Efficient animations with CSS transforms
- Minimal bundle size with tree shaking

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact the development team or create an issue in the repository.

