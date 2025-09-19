# Cesar Melchor - Portfolio Website (Next.js)

A modern, SEO-optimized portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This website showcases my work as a full-stack developer and freelancer, designed to attract potential clients and demonstrate technical expertise.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **SEO Optimized**: Advanced SEO with structured data, sitemap, and meta tags
- **Responsive Design**: Mobile-first design with smooth animations
- **Performance**: Optimized images, lazy loading, and fast loading times
- **Content Management**: Contentful CMS integration for easy content updates
- **Freelance Focus**: Services, testimonials, and contact forms for client acquisition
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Analytics Ready**: Google Analytics integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **CMS**: Contentful
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-website-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_ACCESS_TOKEN=your_contentful_access_token
GOOGLE_ANALYTICS_ID=your_google_analytics_id
NEXT_PUBLIC_SITE_URL=https://cesarmelchor.me
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📝 Content Management

This website uses Contentful as a headless CMS. To set up content:

1. Create a Contentful account and space
2. Set up the following content types:
   - **About**: Personal information and bio
   - **Project**: Portfolio projects with images and descriptions
   - **Service**: Freelance services offered
   - **Testimonial**: Client testimonials

3. Add your Contentful credentials to `.env.local`

## 🎨 Customization

### Colors
The website uses a pastel color palette defined in `tailwind.config.js`. You can customize the colors by modifying the theme configuration.

### Content
- Update personal information in the components
- Modify services in `src/components/Services.tsx`
- Add/remove social links in `src/components/Footer.tsx`

### SEO
- Update meta information in `src/lib/seo.ts`
- Modify structured data in `src/app/layout.tsx`
- Update sitemap in `src/app/sitemap.ts`

## 📱 Sections

1. **Hero**: Eye-catching introduction with call-to-action
2. **About**: Personal story, skills, and experience
3. **Services**: Freelance services with pricing and timelines
4. **Projects**: Portfolio showcase with featured projects
5. **Testimonials**: Client feedback and social proof
6. **Contact**: Contact form and information

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Structured data and meta tags for search engines
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Contact

- **Email**: hello@cesarmelchor.me
- **Website**: [cesarmelchor.me](https://cesarmelchor.me)
- **GitHub**: [@zeecnla](https://github.com/zeecnla)
- **Twitter**: [@zeecnla](https://twitter.com/zeecnla)

---

Built with ❤️ by Cesar Melchor

