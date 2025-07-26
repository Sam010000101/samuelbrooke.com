# samuel-brooke-website

![Static Image](https://github.com/Sam010000101/samuel-brooke-website/blob/main/public/hero.png)

A "one-pager" representing Samuel Brooke, freelance web engineer.

**Why?**

- To provide a concise & quick-fire overview of Sam's services.
- As a point of contact for all enquiries.
- As a single-page demo using Next.js Static Site Generation (SSG).

## Features

- serverless function to relay enquiries to my smpt email handler.

## Usage

Current configuration (while testing GitHub Pages & Cloudflare Pages):

`npm run deploy` → deploy to GitHub Pages only

`git push main` → deploy to Cloudflare Pages

## Recomendations to go further with optimisation for PageSpeed Insights

### ✅ Recommendations to go even further:

1. Audit Largest Contentful Paint (LCP)

- Run Lighthouse and check what the LCP element is.

- If it's an image or heading, ensure it’s loaded early (priority, local).

2. Use font-display: swap (you're already doing this via Next Fonts — great!)

3. Minimize JavaScript

- Consider analyzing bundle size via next build + next-analyze.

4. Preload critical assets

- If your SVG or hero image is critical, add:

```tsx
<link rel="preload" href="/your-image.svg" as="image" type="image/svg+xml" />
```

5. Reduce layout shifts (CLS)

- Make sure image dimensions are well-defined (Next Image handles this if not using fill).

## To Do

1. Bugs

- New component needs testing, bg animation not working on static site.

2. Connect enquiry form & test

3. Choose host and assign my domain name

4. Test & optimise

## Built With

[![Static Badge](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Static Badge](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en)
[![Static Badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Static Badge](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Static Badge](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Static Badge](https://img.shields.io/badge/daisyUI-1ad1a5?style=for-the-badge&logo=daisyui&logoColor=white)](https://daisyui.com/docs/use/)
[![Static Badge](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Static Badge](https://img.shields.io/badge/postcss-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org/)
[![Static Badge](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)](https://prettier.io/)

## Author

Samuel Brooke

<a href="https://uk.linkedin.com/in/sam-brooke-4bb43a13"><img src="https://github.com/Sam010000101/samuel-brooke-website/blob/main/public/icons/linkedin-icon.png" width="32" height="32" alt="LinkedIn icon"/></a>
<a href="https://uk.linkedin.com/in/sam-brooke-4bb43a13"><img src="https://github.com/Sam010000101/samuel-brooke-website/blob/main/public/icons/devto-dark.png" width="32" height="32" alt="devto icon"/></a>
<a href="https://uk.linkedin.com/in/sam-brooke-4bb43a13"><img src="https://github.com/Sam010000101/samuel-brooke-website/blob/main/public/icons/github-original.png" width="32" height="32" alt="github icon"/></a>

## License:

This project is licensed under the MIT license - see the [LICENSE.md](/LICENSE.md) file for details

![Static Badge](https://img.shields.io/badge/MIT-green?style=for-the-badge)
