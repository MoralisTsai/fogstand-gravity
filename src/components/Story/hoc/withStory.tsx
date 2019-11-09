import React from 'react';

import { ArticleCover } from 'components/_Shared/ArticleCover';
import { Footer } from 'components/_Shared/Footer';

import {
  ContentWrapper,
  PrefaceWrapper,
} from 'components/_Shared/Story';

import { Character } from 'ts/Character';

interface WithStoryProps {
  character: Character;
}

export const withStory = <P extends {}>(
  BaseComponent: React.ComponentType<P>,
): React.FC<P & WithStoryProps> => (props) => {
  const {
    character,
  } = props;

  return (
    <>
      <ArticleCover
        name={character.name}
        header={character.header}
        description={character.description}
        coverImg={character.cover}
      />
      <ContentWrapper>
        <PrefaceWrapper>
          {character.preface}
        </PrefaceWrapper>
        <BaseComponent
          {...props}
        />
      </ContentWrapper>
      <Footer />
    </>
  );
};
