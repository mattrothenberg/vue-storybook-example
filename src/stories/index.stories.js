/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton.vue';
import Welcome from './Welcome.vue';

storiesOf('Welcome', module).add('to Storybook', () => ({
  components: { Welcome },
  template: '<welcome :showApp="action" />',
  methods: { action: linkTo('Button') },
}));

const MyButtonStories = storiesOf('Button', module)

if (MyButton.__stories) {
  MyButton.__stories.forEach(story => {
    MyButtonStories.add(story.name, () => ({
      components: {MyButton},
      template: story.template
    }))
  })
}
/* eslint-enable react/react-in-jsx-scope */
