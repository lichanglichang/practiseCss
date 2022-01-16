import tabsStyle from "./tabs.module.less";

const Table = () => {
  return (
    <>
      <br />
      <table className={tabsStyle.table}>
        <caption>标题</caption>
        <thead>
          <tr className={tabsStyle.firstTab}>
            <th>柜次</th>
            <th>品类</th>
            <th>收货方</th>
          </tr>
        </thead>
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

      <br />
      <hr />
      <div className={tabsStyle.table2}>
        <table cellPadding={10} cellSpacing={10}>
          <caption>这里是标题</caption>
          <thead>
            <tr className={tabsStyle.firstTab}>
              <th>柜次</th>
              <th>品类</th>
              <th>收货方</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2} colSpan={2}>张三</td>
              <td>挖掘机</td>
            </tr>
            <tr>
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
      </div>
    </>
  );
};
export default Table;

// 使用less module，不使用会有什么问题，该怎么解决
// 与禅道样式差距多点不一样
