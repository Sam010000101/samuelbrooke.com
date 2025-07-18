// src/components/iconMap.tsx
import {
  GoogleAnalyticsIcon,
  GoogleMapsIcon,
  WordPressIcon,
  StapiIcon,
  ShopifyIcon,
  WooCommerceIcon,
  StripeIcon,
  PaypalIcon,
  BrevoIcon,
  MailchimpIcon,
  RankMathIcon,
  YoastSEOIcon,
} from "@/icons";

export const integrationIconMap: Record<string, React.ReactNode> = {
  "google-analytics": <GoogleAnalyticsIcon className="text-[#00d8ff]" />,
  wordpress: <WordPressIcon className="text-[#00769d]" />,
  "google-maps": <GoogleMapsIcon />,
  strapi: <StapiIcon />,
  shopify: <ShopifyIcon />,
  woocommerce: <WooCommerceIcon />,
  stripe: <StripeIcon />,
  paypal: <PaypalIcon />,
  brevo: <BrevoIcon />,
  mailchimp: <MailchimpIcon />,
  rankmath: <RankMathIcon />,
  yoastseo: <YoastSEOIcon />,
};
