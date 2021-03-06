import React from 'react';
import styled, { css } from '../../lib/styled-components';
import { Typography } from '../Typography';
import { MONO_FAMILY } from '../shared';

const StyledNewsCard = styled.div<{ haveImage: boolean }>`
  border: 1.5px solid #707070;
  height: 100%;
  width: 100%;
  display: flex;
  border-radius: 44px;
  flex-direction: column;
  ${p => (!p.haveImage ? 'border: 1px solid #707070;' : '')}
  .img {
    border-bottom: 1.5px solid #707070;
    padding: 1.5px;
    flex-basis: 74%;
    max-height: 74%;
    img {
      height: 100%;
      width: 100%;
      border-radius: 44px;
    }
  }
  .information {
    padding: 1rem;
    ${p =>
      !p.haveImage
        ? css`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            width: 100%;
          `
        : ''}
    .heading {
      margin-bottom: 4px;
    }
    .infos {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export interface INewsCardProps {
  heading: string;
  image?: string;
  tags: string[];
}

export const NewsCard: React.FC<INewsCardProps> = ({
  heading,
  image,
  tags,
  ...rest
}) => {
  return (
    <StyledNewsCard haveImage={Boolean(image)} {...rest}>
      {image && (
        <div className="img">
          <img src={image} alt="something" />
        </div>
      )}
      <div className="information">
        <div className="heading">
          <Typography
            as="a"
            cursor="pointer"
            fontWeight="bold"
            variant="h4"
            m="0"
            p="0"
          >
            {heading}
          </Typography>
        </div>
        <div className="infos">
          <div className="read-time">
            <Typography as="div">3 min</Typography>
          </div>
          <div className="tags">
            {tags.map((tag, index) => (
              <Typography
                key={`${heading}-${tag}-${index}`}
                color="blue"
                fontFamily={MONO_FAMILY}
                variant="default"
                as="a"
                cursor="pointer"
              >
                #{tag}{' '}
              </Typography>
            ))}
          </div>
        </div>
      </div>
    </StyledNewsCard>
  );
};
