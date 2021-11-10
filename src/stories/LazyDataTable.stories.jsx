import { LazyDataTable } from 'react-ive-tables'
import { Card } from 'primereact/card'

export default {
    title: 'Table/LazyDataTable',
    component: LazyDataTable,
    parameters: {
        docs: {
            page: null
        }
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) =>
    <div style={{ paddingBottom: "1rem", paddingTop: "1.5rem" }} className={"p-grid p-fluid p-justify-center"}>
        <div className="p-col-12 p-lg-12 p-xl-12">
            <LazyDataTable {...args} />
        </div>
    </div>

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    dataUrl: "/getTableData/",
    columnOrder: ["firstName",
        "middleName",
        "isActive",
        "balance",
        "age",
        "eyeColor",
        "gender",
        "company",
        "email",
        "phone"]
};