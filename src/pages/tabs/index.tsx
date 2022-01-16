import { Tabs } from "antd";
import tabsStyle from "./tabs.module.less";
const { TabPane } = Tabs;

const TabsDemo = () => {
  console.log(tabsStyle);

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        centered
        id={tabsStyle.root}
        className={tabsStyle.baseTabs}
      >
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
      <br />
      <hr />
      <table className={tabsStyle.table}>
        <tr className={tabsStyle.firstTab}>
          <th>柜次</th>
          <th>品类</th>
          <th>收货方</th>
        </tr>
        <tbody>
          <tr>
            <td>张三</td>
            <td>18</td>
            <td>挖掘机</td>
          </tr>
          <tr>
            <td>马六</td>
            <td>20</td>
            <td>大前端</td>
          </tr>
          <tr>
            <td>张三</td>
            <td>18</td>
            <td>挖掘机</td>
          </tr>
          <tr>
            <td>马六</td>
            <td>20</td>
            <td>大前端</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default TabsDemo;

// 使用less module，不使用会有什么问题，该怎么解决
// 与禅道样式差距多点不一样
