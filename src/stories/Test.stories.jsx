import { rest } from 'msw'
import { Test } from './Test'

// export const SuccessBehavior = () => <Test />

// SuccessBehavior.parameters = {
//   msw: [
//     rest.get('/user', (req, res, ctx) => {
//       return res(
//         ctx.json({
//           firstName: 'Neil',
//           lastName: 'Maverick',
//         })
//       )
//     }),
//   ],
// }

export default {
  title: 'Example/Test',
  component: Test,
  parameters: { 
    docs: { 
      page: null 
    } 
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Test />;

export const Primary = Template.bind({});
