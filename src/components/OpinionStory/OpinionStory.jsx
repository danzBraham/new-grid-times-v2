import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <OpinionWrapper href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </OpinionWrapper>
  );
};

const OpinionWrapper = styled.a`
  &:nth-of-type(1) {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  &:nth-of-type(2) {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  &:nth-of-type(3) {
    padding-top: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-gray-300);
  }

  &:nth-of-type(4) {
    padding-top: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    &:nth-of-type(n) {
      padding: 0;
      border: none;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  background-color: var(--color-gray-100);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 16px;

  @media ${QUERIES.tabletOnly} {
    padding: 0;
    flex-direction: column;
    gap: 8px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
