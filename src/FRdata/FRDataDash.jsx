import "../Dashboard/Dashboard.css";
function FRDataDash(props) {
  return (
    <>
      <ul className="fR">
        <i
          class="fa fa-user-md fa-3x"
          style={{ color: "#adb5bd" }}
          aria-hidden="true"
        ></i>
        {props.tittle}
        <button className="accBtn">{props.accpbtn}</button>
        <button className="decBtn">{props.decbtn}</button>
      </ul>
    </>
  );
}
export default FRDataDash;
