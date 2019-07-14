import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  description?: string;
  lang?: string;
  title: string;
}

interface StaticQueryResult {
  site: {
    siteMetadata: {
      description: string;
      title: string;
      twitterHandle: string;
    };
  };
}

export const SEO: React.FC<Props> = ({ description, lang = 'en', title }) => {
  const { site } = useStaticQuery<StaticQueryResult>(
    graphql`
      query {
        site {
          siteMetadata {
            description
            title
            twitterHandle
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.twitterHandle,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
    />
  );
};
