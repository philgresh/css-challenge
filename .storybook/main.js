const glob = require('glob');

const EXAMPLE_FOLDER = 'example';
const STORIES_GLOB = 'src/**/*.stories.@(js|jsx|ts|tsx)';
const MDXES_GLOB = 'src/**/*.stories.mdx';
const STORIES_MINUS_EXAMPLES_GLOB = `src/**/${EXAMPLE_FOLDER}/*.stories.@(js|jsx|ts|tsx)`;
const MDXES_MINUS_EXAMPLES_GLOB = `src/**/${EXAMPLE_FOLDER}/*.stories.mdx'`;

// options is optional
const storiesFiles = () => {
  const options = {};
  if (process.env.STORYBOOK_ENV === 'production')
    options.ignore = [STORIES_MINUS_EXAMPLES_GLOB, MDXES_MINUS_EXAMPLES_GLOB];

  // Find stories
  const stories = glob.sync(STORIES_GLOB, options).map((file) => `../${file}`);
  const mdxes = [];
  // const mdxes = glob.sync(MDXES_GLOB, options).map((file) => `../${file}`);

  return [...stories, ...mdxes];
};

module.exports = {
  stories: async (list) => [...list, ...storiesFiles()],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
