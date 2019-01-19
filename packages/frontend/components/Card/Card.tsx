import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../components/Typography';
import { space, SpaceProps } from 'styled-system';
import { MONO_FAMILY } from '../../components/shared';
import { Button } from '../../components/Button';
import { GithubIcon } from '../../components/Icons/GithubIcon';
import { UpVoteIcon } from '../../components/Icons/UpVoteIcon';

const StyledCard = styled.div<SpaceProps>`
  box-shadow: 1px 4px 9px rgba(0, 0, 0, 0.16);
  height: 300px;
  width: 400px;
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  padding: 16px;
  ${space}
`;

export interface Props extends SpaceProps {
  heading?: string;
  tags?: string[];
  content?: string;
}

export const Paper = StyledCard;

export const Card: React.FC<Props> = ({ content, children, heading, tags }) => {
  return (
    <StyledCard>
      {tags && (
        <div
          css={`
            margin: 10px 0 0 0;
            flex: 0.7;
          `}
        >
          {tags.map((tag, index) => (
            <Typography
              key={`${heading}-${tag}-${index}`}
              color="blue"
              fontFamily={MONO_FAMILY}
              variant="default"
            >
              #{tag}{' '}
            </Typography>
          ))}
        </div>
      )}
      {heading && (
        <div
          css={`
            flex: 1;
          `}
        >
          <Typography my="1" variant="h2">
            {heading}
          </Typography>
        </div>
      )}
      {content && (
        <div
          css={`
            flex: 2;
          `}
        >
          <Typography lineHeight="1.75rem" my="3" variant="p">
            {content}
          </Typography>
        </div>
      )}
      <div
        css={`
          flex: 1;
          display: flex;
        `}
      >
        <div
          css={`
            flex: 1;
          `}
        >
          <Button m={0} px={4} p={2}>
            View
          </Button>
        </div>
        <div
          css={`
            flex: 2;
          `}
        >
          <div
            css={`
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
            `}
          >
            <Button variant="icon" m={0} p={2}>
              <UpVoteIcon
                css={`
                  margin-right: 5px;
                `}
              />{' '}
              100
            </Button>
            <Button variant="icon" m={0} p={2}>
              <GithubIcon />
            </Button>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};
