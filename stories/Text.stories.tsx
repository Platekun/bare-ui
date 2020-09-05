import React from 'react';

import Text from '../src/components/Text';

const metadata = {
  title: 'Text',
  component: Text,
};

export default metadata;

const theme = {
  colors: {
    primary: '#512DA8',
    secondary: '#E91E63',
    success: '#4CAF50',
    information: '#448AFF',
    error: '#F44336',
    white: 'white',
    default: '#212121',
  },
  headingFontFamily: ['serif', 'Times new roman'],
  bodyFontFamily: ['Helvetica'],
};

export const AugmentedFourthScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="augmented-fourth" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="augmented-fourth" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="augmented-fourth" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="augmented-fourth" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="augmented-fourth" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="augmented-fourth" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="augmented-fourth" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="augmented-fourth" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const GoldenRatioScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="golden-ratio" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="golden-ratio" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="golden-ratio" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="golden-ratio" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="golden-ratio" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="golden-ratio" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="golden-ratio" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="golden-ratio" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const MajorSecondScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="major-second" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="major-second" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="major-second" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="major-second" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="major-second" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="major-second" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="major-second" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="major-second" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const MinorSecondScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="minor-second" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="minor-second" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="minor-second" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="minor-second" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="minor-second" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="minor-second" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="minor-second" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="minor-second" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const MajorThirdScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="major-third" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="major-third" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="major-third" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="major-third" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="major-third" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="major-third" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="major-third" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="major-third" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const MinorThirdScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="minor-third" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="minor-third" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="minor-third" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="minor-third" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="minor-third" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="minor-third" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="minor-third" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="minor-third" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const PerfectFourthScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="perfect-fourth" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="perfect-fourth" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="perfect-fourth" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="perfect-fourth" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="perfect-fourth" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="perfect-fourth" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="perfect-fourth" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="perfect-fourth" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const PerfectFifthScale: React.FC = () => (
  <div>
    <Text theme={theme} scale="perfect-fifth" size={1} color="primary" fontWeight="normal">
      This is a Heading 1
    </Text>
    <Text theme={theme} scale="perfect-fifth" size={2} color="primary" fontWeight="normal">
      This is a Heading 2
    </Text>
    <Text theme={theme} scale="perfect-fifth" size={3} color="primary" fontWeight="normal">
      This is a Heading 3
    </Text>
    <Text theme={theme} scale="perfect-fifth" size={4} color="primary" fontWeight="normal">
      This is a Heading 4
    </Text>
    <Text theme={theme} scale="perfect-fifth" size={5} color="primary" fontWeight="normal">
      This is a Heading 5
    </Text>
    <Text theme={theme} scale="perfect-fifth" size={6} color="primary" fontWeight="normal">
      This is a Heading 6
    </Text>
    <Text theme={theme} scale="perfect-fifth" size={7} color="primary" fontWeight="normal">
      This is a Parragraph
    </Text>
    <Text theme={theme} scale="perfect-fifth" size={8} color="primary" fontWeight="normal">
      This is a Small
    </Text>
  </div>
);

export const ChangingScaleOnBreakpoints: React.FC = () => (
  <div>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={1}
      color="primary"
      fontWeight="normal"
    >
      This is a Heading 1
    </Text>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={2}
      color="primary"
      fontWeight="normal"
    >
      This is a Heading 2
    </Text>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={3}
      color="primary"
      fontWeight="normal"
    >
      This is a Heading 3
    </Text>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={4}
      color="primary"
      fontWeight="normal"
    >
      This is a Heading 4
    </Text>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={5}
      color="primary"
      fontWeight="normal"
    >
      This is a Heading 5
    </Text>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={6}
      color="primary"
      fontWeight="normal"
    >
      This is a Heading 6
    </Text>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={7}
      color="primary"
      fontWeight="normal"
    >
      This is a Parragraph
    </Text>
    <Text
      theme={theme}
      scale={{ lg: 'perfect-fifth', md: 'augmented-fourth', sm: 'major-third', xs: 'major-second' }}
      size={8}
      color="primary"
      fontWeight="normal"
    >
      This is a Small
    </Text>
  </div>
);
