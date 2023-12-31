import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar_container flex justify-between py-2 items-center px-7 flex-wrap">
      <div className="logo_nav">
        <img
          src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
          alt="logo"
          className="w-48"
        />
      </div>
      <div className="navbar_item  list-none ">
        <ul className="flex flex-row text-[14px]  text-black  gap-6 cursor-pointer">
          <li>
            <a href="#">Buy</a>
          </li>
          <li>
            <a href="#">Sell</a>
          </li>
          <li>
            <a href="#">Rent</a>
          </li>
          <li>
            <a href="#">Mortgage</a>
          </li>
          <li>
            <a href="#">Find Relaltons</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="#"> Privacy</a>
          </li>
        </ul>
      </div>
      <div className="manage_rentals_advertise list-none flex gap-6 text-base underline-offset-2 underline cursor-pointer">
        <li>Manage rentals</li>
        <li> Advertise</li>
      </div>
      <div className="login_signup list-none  flex gap-6 items-center cursor-pointer">
        <li className="text-[14px]"> Log in </li>
        <li className="text-base rounded-full bg-black   text-white px-[16px] py-2  font-medium">
          {" "}
          Sign up
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
