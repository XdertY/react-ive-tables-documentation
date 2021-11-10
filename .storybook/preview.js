import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { IntlProvider } from 'react-intl';
import { addDecorator } from '@storybook/react'
import { initializeWorker, mswDecorator } from 'msw-storybook-addon'

const { worker } = require('../src/mocks/browser')
worker.start()

export const decorators = [
  (Story) => (
    <IntlProvider locale={"bg-BG"} messages={{}}>
      <Story />
    </IntlProvider>
  ),
];

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }