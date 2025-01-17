import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import ReadLink from '../components/read-link';

const PostPreview = ({ post }) => (
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 1rem;
      padding-bottom: 1rem;

      :first-of-type {
        margin-top: 1rem;
      }
    `}
  >
    <Link
      to={post.slug}
      css={css`
        margin: 1rem 1rem 0 0;
        flex-basis: 20%;
      `}
    >
      <Image
        css={css`
          * {
            margin-top: 0;
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </Link>
    <div
      css={css`
        flex-basis: 80%;
      `}
    >
      <h3>
        <Link to={post.slug}>{post.title}</Link>
      </h3>
      <p>{post.excerpt}</p>
      <ReadLink to={post.slug}>read this port &rarr;</ReadLink>
    </div>
  </article>
);

export default PostPreview;
