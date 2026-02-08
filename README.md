# FitnessPro

A Next.js application with Vercel Speed Insights integration for fitness tracking.

## Features

- 🚀 Built with Next.js 15 (App Router)
- 📊 Vercel Speed Insights integration for performance monitoring
- 🎨 Styled with Tailwind CSS
- ⚡ TypeScript for type safety
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, pnpm, yarn, or bun package manager

### Installation

Install the dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
# or
pnpm build
# or
yarn build
# or
bun build
```

### Production

Start the production server:

```bash
npm start
# or
pnpm start
# or
yarn start
# or
bun start
```

## Vercel Speed Insights

This application includes Vercel Speed Insights integration to monitor real user performance metrics. The `SpeedInsights` component is integrated in the root layout (`src/app/layout.tsx`).

### What Speed Insights Tracks

- **First Contentful Paint (FCP)**: Time when the first content is rendered
- **Largest Contentful Paint (LCP)**: Time when the largest content element is rendered
- **Cumulative Layout Shift (CLS)**: Visual stability of the page
- **First Input Delay (FID)**: Interactivity and responsiveness
- **Time to First Byte (TTFB)**: Server response time

### Viewing Speed Insights Data

1. Deploy your app to Vercel
2. Go to your project dashboard on Vercel
3. Navigate to the **Speed Insights** tab
4. View real-time performance metrics from your users

## Project Structure

```
.
├── src/
│   └── app/
│       ├── layout.tsx          # Root layout with SpeedInsights component
│       ├── page.tsx             # Home page
│       └── globals.css          # Global styles
├── public/                      # Static assets
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
└── next.config.js               # Next.js configuration
```

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy! Your app will be live with Speed Insights automatically enabled

Alternatively, you can deploy using the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

See [LICENSE](./LICENSE) for more information.
