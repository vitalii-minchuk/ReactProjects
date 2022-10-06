import logo from '../../assets/logo.png'

function Header() {
  return (
    <header className='bg-light'>
      <div className="container">
        <nav className='navbar mb-4 p-0'>
          <a className='navbar-brand' href="/">
              <img className='mr-2 w-25' src={logo} alt="logo" />
          </a>
        </nav>

      </div>

    </header>
  )
}

export default Header