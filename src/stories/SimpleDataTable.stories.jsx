import React from 'react';
import { SimpleDataTableExample } from './SimpleDataTableExample';
import SimpleDataTableDocumentation from './SimpleDataTable.mdx' 
import { rest } from 'msw'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Table/SimpleDataTable',
  component: SimpleDataTableExample,
  parameters: { 
    docs: { 
      page: SimpleDataTableDocumentation 
    } 
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <SimpleDataTableExample args={{...args}} />

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  setSelected: () => {},
  contextMenu: [
    {
        label: "update" , 
        icon: 'pi pi-fw pi-search', 
        command: (e) => {
            console.log("Item ready to be updated")
        }
    },
    {
        label: "delete" , 
        icon: 'pi pi-fw pi-trash', 
        command: (e) => {
            console.log("Item deleted")
        }
    }
]
};

export const Secondary = Template.bind({});
Secondary.args = {
    setSelected: () => {},
    showFilters: false,
    xlsx: true,
    selectionMode: "checkbox"
};