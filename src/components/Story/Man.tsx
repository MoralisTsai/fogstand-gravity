import React from 'react';

import { man } from 'static';
import { Url } from 'ts/Url';
import { compose } from 'helpers';

import { withStory } from './hoc/withStory';

import { ContentInnerText } from 'components/_Shared/Story';
import { ArticleEnd } from 'components/_Shared/ArticleEnd';
import { InnerNav } from 'components/_Shared/InnerNav';

const Man: React.FC<{}> = () => {
  return (
    <>
      {
        man.content.map((current, index) => (
          <ContentInnerText
            key={index.toString()}
          >
            {current}
          </ContentInnerText>
        ))
      }
      <ArticleEnd />
      <InnerNav
        left={{
          text: '鄧曉蔚',
          path: Url.WEI,
        }}
        right={{
          text: '周王',
          path: Url.WANG,
        }}
      />
    </>
  )
};

export default compose(
  <P extends {}>(
    BaseComponent: React.ComponentType<P>,
  ): React.FC<P> => (props) => (
    <BaseComponent
      {...props}
      character={man}
    />
  ),
  withStory,
)(Man);
