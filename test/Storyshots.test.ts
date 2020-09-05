import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  storyKindRegex: /^((?!.*?VariableFlatList).)*$/,
});
