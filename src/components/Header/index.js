import logosvg from '../../svg/logo.svg'

const Header = () => {
  
  return (
    <>
      <header>
        <div className="logo">
          <img src={logosvg} alt="" />
        </div>
        <div className="search"></div>
        <div className="menu"></div>
      </header>
    </>
  );
}

export default Header;