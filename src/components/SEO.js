import React from "react";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const Component = (props) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const title = props.title || data.site.siteMetadata.defaultTitle;
      return (
        <Helmet
          htmlAttributes={{
            lang: "en",
          }}
          titleTemplate={`%s - ${data.site.siteMetadata.company}`}
        >
          <title>{title}</title>
          {props.children}
        </Helmet>
      );
    }}
  />
);
const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        defaultTitle
        company
      }
    }
  }
`;

Component.defaultProps = {
  keywords: [],
  lang: "en",
  meta: [],
};

export default Component;
