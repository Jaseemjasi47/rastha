import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
    const siteTitle = 'Rastha - United Solutions';
    const defaultDescription = 'Rastha - Your gateway to world-class travel experiences. Explore destinations, packages, and more.';
    const defaultImage = '/assets/rastha_logo.png';

    return (
        <Helmet>
            <title>{`${title} | ${siteTitle}`}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
