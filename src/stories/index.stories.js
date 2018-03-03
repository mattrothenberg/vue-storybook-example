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

// const generateStories = (group, vueComponent) => {
//   if (!vueComponent.__stories) return
//   vueComponent.__stories.forEach(story => {
//     group.add(story.name, () => ({
//       components: {
//         [vueComponent.name]: vueComponent
//       },
//       template: story.template
//     }))
//   })
// }

// generateStories(MyButtonStories, MyButton)

/* eslint-enable react/react-in-jsx-scope */
