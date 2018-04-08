/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/vue';
import { registerStories } from 'vue-storybook'
import { configure } from '@storybook/vue';

const req = require.context('./', true, /\.vue$/)

function loadStories() {
  req.keys().forEach((filename) => {
    registerStories(req, filename, storiesOf, {withKnobs, withNotes, action, text})
  })
}

loadStories()
/* eslint-enable react/react-in-jsx-scope */
