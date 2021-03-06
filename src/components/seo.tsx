/*
This component was originally copied from Gatsby's SEO guide.
I reorganized the Helmet tag to use children instead of props.
*/

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export interface SeoProps {
  pathName: string;
  title: string;
  image?: string;
  description?: string;
  lang?: string;
}

function SEO({
  pathName,
  title,
  image = '',
  description = '',
  lang = 'en',
}: SeoProps) {
  // Query site metadata
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            keywords
            siteUrl
          }
        }
      }
    `
  );

  // Set canonical URL if pathName is provided
  const canonical = `${site.siteMetadata.siteUrl}${pathName}`;

  // Add title template if not on home page
  const fullTitle = title === 'Jack Krone' ? title : `${title} | Jack Krone`;

  // Create full image path
  const imagePath = `${site.siteMetadata.siteUrl}${image}`;

  // Need to add safari mask-icons eventually (apple-touch-icons appear to be covered by manifest plugin)
  // Fb recommends 1:1 images and at least 1080px width for OG tags; 600px width bare minimum
  // Twitter recommends 1:1 images, min 144x144px and max 4096x4096px
  return (
    <>
      <Helmet>
        <html lang={lang} /> {/* Language will probably always be en */}
        <title>{fullTitle}</title>
        {/* In future, canonical requires a way to be overriden if I'm mirroring another site's content */}
        {/* There is a gatsby plugin for canonical links that might also cover this */}
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@protajack" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:card" content="summary" />
        <meta name="keywords" content={site.siteMetadata.keywords.join(', ')} />
      </Helmet>
      {/* Helmet cannot have nested children, so following lines reuse Helmet component */}
      {description && (
        <Helmet>
          <meta name="description" content={description} />
          <meta name="twitter:description" content={description} />
          <meta property="og:description" content={description} />
        </Helmet>
      )}
      {image && (
        <Helmet>
          <meta property="og:image" content={imagePath} />
          <meta name="twitter:image" content={imagePath} />
        </Helmet>
      )}
    </>
  );
}

export default SEO;
