import './tableTitle.scss'
export default function TableTitle(props) {
    let titleMsg = props.homePage ? "Going Bad This Week!" : "List of Everything"

    return (
        <div className="table-title">{titleMsg}</div>
    )
}