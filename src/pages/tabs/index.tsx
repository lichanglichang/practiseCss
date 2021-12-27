import { Tabs } from "antd";
// import Styles from "./tabs.module.less";
const { TabPane } = Tabs;

const TabsDemo = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" centered id="">
        <TabPane tab="仪表盘" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="日程" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="待处理" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="项目" key="4">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="执行" key="5">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="贡献" key="6">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="动态" key="7">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="联系人" key="8">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </>
  );
};
export default TabsDemo;
