"use client"
import { Tabs, TabsProps } from "antd";

const onChange = (key: string) => {
  console.log(key);
};

const Work = () => {
  return (
    <div className="lg:px-44 md:px-10 lg:mt-20 dark:bg-gray-900">
      {/* Heading */}
      <div className="flex items-center space-x-2">
        <h3 className="text-[#6A7282] dark:text-gray-300">Our Work</h3>
        <span className="w-12 h-[1px] bg-green-500"></span>
      </div>
      <div>
        <h1 className=" text-2xl lg:text-4xl text-[#1b2027] font-semibold mt-4 mb-4 dark:text-gray-300">Projects</h1>
        <h1 className="text-xl text-[#4A5565]">Building the future of the construction industry, one project at a time.</h1>
      </div>
      {/*Tab*/}
      <div className="mt-8">
        <Tabs className="custom-tabs" defaultActiveKey="1" items={items} onChange={onChange}/>
      </div>
    </div>
  );
};

export default Work;


const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'All',
    children: 'Content of Tab Pane 1',
  },
  {
    key: '2',
    label: 'Buildings',
    children: 'Content of Tab Pane 2',
  },
  {
    key: '3',
    label: 'Residential',
    children: 'Content of Tab Pane 3',
  },
  {
    key: '4',
    label: 'Hospitality',
    children: 'Content of Tab Pane 4',
  },
  {
    key: '5',
    label: 'Public Buildings',
    children: 'Content of Tab Pane 5',
  },
  {
    key: '6',
    label: 'Heavy Industrial',
    children: 'Content of Tab Pane 6',
  },
  {
    key: '7',
    label: 'Renovation',
    children: 'Content of Tab Pane 7',
  },
];
