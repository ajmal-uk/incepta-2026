import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords, image, url }) {
    const siteTitle = 'INCEPTA 2026 | CET';
    const siteDescription = 'INCEPTA 2026: A premier technical festival focused on AI Agents & Generative AI at the College of Engineering, Trivandrum.';
    const siteUrl = 'https://incepta.cetmca.in';
    const defaultImage = '/logo.png';

    const finalTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const finalDescription = description || siteDescription;
    const finalImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={finalUrl} />
            <meta property="twitter:title" content={finalTitle} />
            <meta property="twitter:description" content={finalDescription} />
            <meta property="twitter:image" content={finalImage} />
        </Helmet>
    );
}
