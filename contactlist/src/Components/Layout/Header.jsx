import logo from "../../Images/react.png"

function Header() {
  return (
    <div className="py-2 pl-2" style={{borderBottom:"1px solid #777"}}>
      <img src={logo} alt="logo" style={{height:"35px",verticalAlign:"top"}}/>
      <span className="h2 pt-4 m-2 text-white-50">React Contact List</span>
    </div>
  );
}

export default Header;