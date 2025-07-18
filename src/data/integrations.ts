// src/data/integrations.ts

export type IntegrationItem = {
  title: string;
  href: string;
  id: string;
};

export const integrations: IntegrationItem[] = [
  {
    id: "google-analytics",
    title: "Google Analytics",
    href: "https://developers.google.com/analytics",
  },
  {
    id: "google-maps",
    title: "Google Maps",
    href: "https://www.google.com/maps",
  },
  {
    id: "wordpress",
    title: "WordPress",
    href: "https://wordpress.org",
  },
  { id: "strapi", title: "Stapi", href: "https://stapi.io" },
  { id: "shopify", title: "Shopify", href: "https://shopify.com" },
  {
    id: "woocommerce",
    title: "WooCommerce",
    href: "https://woocommerce.com",
  },
  { id: "stripe", title: "Stripe", href: "https://stripe.com" },
  { id: "paypal", title: "Paypal", href: "https://paypal.com" },
  { id: "brevo", title: "Brevo", href: "https://brevo.com" },
  {
    id: "mailchimp",
    title: "Mailchimp",
    href: "https://mailchimp.com",
  },
  { id: "rankmath", title: "Rank Math", href: "https://rankmath.com" },
  { id: "yoastseo", title: "Yoast SEO", href: "https://yoast.com" },
];
