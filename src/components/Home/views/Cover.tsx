import React from 'react';
import styled from 'styled-components';

import { Color, FontWeight } from 'styles';
import { getFontSize } from 'helpers';
import Avatar from 'assets/front-cover.jpg';

/** Style */

const OuterWrapper = styled.div`
  background-image: url(${Avatar});
  background-size: cover;
  min-height: calc(100vh - 140px);
  position: relative;
`;

const InnerContent = styled.div`
  background-color: ${Color.WHITE};
  padding: 20px 25px;
  position: absolute;
  bottom: 30px;
  left: 50px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 4rem;
  color: ${Color.COD_GRAY};
  font-weight: ${FontWeight.BLACK};
  line-height: 1.1;
  letter-spacing: 10px;
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.THIN};
  letter-spacing: 5px;
  margin-bottom: 10px;
`;

const SaidBy = styled.p`
  ${getFontSize('EXTRA_SMALL')};
  font-weight: ${FontWeight.BOLD};
  letter-spacing: 5px;
`;

/** End */

export const Cover = () => {
  return (
    <>
      <OuterWrapper />
      <InnerContent>
        <Title>
          FOGSTAND
      <br />
          GRAVITY
      </Title>
        <Subtitle>
          期望立霧工作坊能如同燈塔般
          <br />
          指引霧裡霧外的人們尋回認根的價值
        </Subtitle>
        <SaidBy>
          -陳雯俐-
        </SaidBy>
      </InnerContent>
    </>
  );
};