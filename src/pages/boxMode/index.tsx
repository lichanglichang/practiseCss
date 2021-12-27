import boxStyle from "./boxMode.module.less";
// const styles = require("./boxMode.module.less");

const BoxDemo = () => {
  return (
    <>
      <div className={boxStyle.root}>
        <div className={boxStyle.login}>
          <div className={boxStyle.loginTop}>
            <div className={boxStyle.title}>密码登录</div>
            <input type="text" className={boxStyle.user} />
            <input type="text" className={boxStyle.pwd} />
            <p>
              <span>还没有账号？</span> <span>立即注册</span>
              <span>忘记密码</span>
            </p>
            <button>登录</button>
          </div>
          <div className={boxStyle.loginBottom}>
            <div>第三方登录</div>
            <div className={boxStyle.picture}>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BoxDemo;
