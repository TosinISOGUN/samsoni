import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  twitterHandle?: string;
}

const SEO = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage,
  twitterHandle = "@samsoniwater",
}: SEOProps) => {
  const siteTitle = "SAMSONI Water";
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} — Clean Water Delivered in Lagos`;
  const defaultDescription = "SAMSONI — NAFDAC-certified (Reg No: E1-6702L) pure water delivered to homes, offices, and events across Lagos. Sachet, bottled, and dispenser water.";
  const metaDescription = description || defaultDescription;
  const siteUrl = "https://samsoni.com.ng"; // Placeholder, updated in crawl phase
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={fullCanonical} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
    </Helmet>
  );
};

export default SEO;
