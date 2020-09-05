import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

const metadata = {
  title: 'Button',
  component: Button,
};

export default metadata;

const theme = {
  colors: {
    primary: '#512DA8',
    secondary: '#E91E63',
    success: '#4CAF50',
    information: '#448AFF',
    error: '#F44336',
    white: '#fff',
    default: '#212121',
  },
  headingFontFamily: ['serif', 'Times new roman'],
  bodyFontFamily: ['Helvetica'],
};

const scale = 'major-second';

export const Contained: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const ButtonWithHint: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button theme={theme} color="primary" textColor="white" scale={scale} hint="This should do something special!">
      Click me
    </Button>
  </div>
);

export const ContainedGhostWhenHovered: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const ContainedTextWhenHovered: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const ContainedGhostWhenPressed: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const ContainedTextWhenPressed: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const ContainedDisabled: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const Ghost: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      variant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const GhostContainedWhenHovered: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button theme={theme} color="primary" textColor="white" scale={scale} variant="ghost" hoverVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="secondary" textColor="white" scale={scale} variant="ghost" hoverVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="success" textColor="white" scale={scale} variant="ghost" hoverVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="ghost" hoverVariant="contained">
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="ghost"
      hoverVariant="contained"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const GhostTextWhenHovered: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="ghost"
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="ghost"
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="ghost"
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="ghost" hoverVariant="text">
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="ghost"
      hoverVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const GhostContainedWhenPressed: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button theme={theme} color="primary" textColor="white" scale={scale} variant="ghost" activeVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="secondary" textColor="white" scale={scale} variant="ghost" activeVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="success" textColor="white" scale={scale} variant="ghost" activeVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="ghost" activeVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="error" textColor="white" scale={scale} variant="ghost" activeVariant="contained">
      Click me
    </Button>
  </div>
);

export const GhostTextWhenPressed: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="ghost"
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="ghost"
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="ghost"
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="ghost" activeVariant="text">
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="ghost"
      activeVariant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const GhostDisabled: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="ghost"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="ghost"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="ghost"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      variant="ghost"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="ghost"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const Text: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      variant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="text"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const TextContainedWhenHovered: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button theme={theme} color="primary" textColor="white" scale={scale} variant="text" hoverVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="secondary" textColor="white" scale={scale} variant="text" hoverVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="success" textColor="white" scale={scale} variant="text" hoverVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="text" hoverVariant="contained">
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="text"
      hoverVariant="contained"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const TextGhostWhenHovered: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="text"
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="text"
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="text"
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="text" hoverVariant="ghost">
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="text"
      hoverVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const TextContainedWhenPressed: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button theme={theme} color="primary" textColor="white" scale={scale} variant="text" activeVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="secondary" textColor="white" scale={scale} variant="text" activeVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="success" textColor="white" scale={scale} variant="text" activeVariant="contained">
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="text" activeVariant="contained">
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="text"
      activeVariant="contained"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const TextGhostWhenPressed: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="text"
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="text"
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="text"
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button theme={theme} color="information" textColor="white" scale={scale} variant="text" activeVariant="ghost">
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="text"
      activeVariant="ghost"
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);

export const TextDisabled: React.FC = () => (
  <div style={{ display: 'grid', maxWidth: 100, gap: 16 }}>
    <Button
      theme={theme}
      color="primary"
      textColor="white"
      scale={scale}
      variant="text"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="secondary"
      textColor="white"
      scale={scale}
      variant="text"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="success"
      textColor="white"
      scale={scale}
      variant="text"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="information"
      textColor="white"
      scale={scale}
      variant="text"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
    <Button
      theme={theme}
      color="error"
      textColor="white"
      scale={scale}
      variant="text"
      disabled
      onPress={action('onPress')}
      onPressIn={action('onPressStart')}
      onPressOut={action('onPressOut')}
    >
      Click me
    </Button>
  </div>
);
