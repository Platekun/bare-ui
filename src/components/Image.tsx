import React, { Suspense, SuspenseProps } from 'react';
import styled from 'styled-components';
import { useImage } from 'react-image';

import Stack, { IStackProps } from './Stack/Stack';
import { VERTICAL } from '../common/orientation';
import isString from '../common/isString';
import EMPTY_STRING from '../common/empty-string';

const Figure = styled.figure`
  margin: 0;
`;

type IOneOrMoreImageSources = string | Array<string>;

type IImgProps = {
  /**
   * The image source (either a remote URL or a local file resource).
   */
  source?: IOneOrMoreImageSources;
  /**
   * Description of the image. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot.
   */
  alt: string;
} & Omit<React.HTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'sizes' | 'alt' | 'placeholder'>;

const Img: React.FC<IImgProps> = props => {
  const { source = EMPTY_STRING, alt, ...imageProps } = props;

  const { src } = useImage({
    srcList: source,
  });

  return <img src={src} title={alt} alt={alt} data-testid={alt} {...imageProps} />;
};

type IImageProps = {
  /**
   * The image source (either a remote URL or a local file resource).
   */
  source?: IOneOrMoreImageSources;
  /**
   * Content to be shown while the image is loading.
   */
  placeholder?: SuspenseProps['fallback'];
  /**
   * Description of the image. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot.
   */
  alt: string;
  /**
   * A caption or legend describing the image.
   */
  caption?: React.HTMLAttributes<HTMLElement>['children'];
  /**
   * Props of the image element.
   */
  imageProps?: Omit<React.HTMLAttributes<HTMLImageElement>, 'src' | 'alt'>;
  /**
   * Props of the figure caption element.
   */
  captionProps?: React.HTMLAttributes<HTMLElement>;
} & Omit<React.HTMLAttributes<HTMLElement>, 'placeholder'> &
  IStackProps;

/**
 * A React component for displaying different types of images. It replaces the image tag and supports: "Fallingback to alternate sources when loading an image fails", "Using text or a component placeholder", "Image captioning" and "Making `alt` required".
 *
 * This component works with React Suspense by default and will suspend painting until the image is downloaded and decoded by the browser.
 */
const Image: React.FC<IImageProps> = props => {
  const { source, placeholder, alt, caption, imageProps, captionProps, orientation = VERTICAL, ...figureProps } = props;

  const captionTestId = isString(caption) ? caption : null;

  return (
    <Stack as={Figure} orientation={orientation} {...figureProps}>
      <Suspense fallback={placeholder || null}>
        <Img source={source} alt={alt} {...imageProps} />

        {caption && (
          <figcaption data-testid={captionTestId} {...captionProps}>
            {caption}
          </figcaption>
        )}
      </Suspense>
    </Stack>
  );
};

export default Image;
