import { configure, addDecorator } from '@storybook/react'
import backgrounds from '@storybook/addon-backgrounds';

addDecorator(
  backgrounds([
    { name: "white", value: "#ffffff", default: true },
    { name: "uconnec-main", value: '#52b7c1'},
    { name: "black", value: "#000000" },
    { name: "pink", value: "#ff00ff" },
  ])
)

const req = require.context(
  '../src/components',
  true,
  /\.stories\.(js|jsx)$/,
)

function loadStories() {
  req.keys().forEach(filename => {
    req(filename)
  })
}

configure(loadStories, module);
