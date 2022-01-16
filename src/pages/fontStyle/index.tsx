import styels from "./index.module.less"
const FontStyle = () => {
    return (
        <>
            <div className={styels.wordContent}>这里是我外部下载的ttf格式字体</div>
            <svg style={{ height: "300px", width: "300px" }} version="1.1">
                <polyline points="100 10,40 180,190 60,10 60,160 180" style={{ fill: "blue", stroke: "blue", strokeWidth: "1" }} />
            </svg>
            <hr />
            <svg className={styels.circular} viewBox="25 25 50 50">
                <circle className={styels.path} cx="50" cy="50" r="20" fill="none" />
            </svg>
        </>


    )
}
export default FontStyle;