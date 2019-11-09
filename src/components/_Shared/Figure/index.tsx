import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import { FontWeight, Color } from 'styles';

import { FigureProps } from './ts/Figure';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  line-height: 2;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    width: 100%;
    margin-bottom: 20px;
  }

  figcaption {
    color: ${lighten(0.35, Color.COD_GRAY)};
    font-size: .8rem;
    position: relative;
    padding-top: 20px;

    &::before {
      position: absolute;
      content: '';
      width: 100px;
      background-color: #b2dfdb;
      height: 10px;
      top: 0;
      left: 0;
      font-weight: ${FontWeight.LIGHT};
    }
  }
`;

export const Figure: React.FC<FigureProps> = (props) => {
  const {
    url,
    caption
  } = props;

  return (
    <Wrapper>
      <img
        src={url}
        alt="figure"
      />
      <figcaption>
        {caption}
      </figcaption>
    </Wrapper>
  );
};
