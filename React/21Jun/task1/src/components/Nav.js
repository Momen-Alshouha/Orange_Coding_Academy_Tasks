function Nav() {

    return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
            <li className="nav-item">
            <a className="nav-link active" >Home
                <span className="visually-hidden">(current)</span>
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" >Features</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" >Pricing</a>
            </li>
            <li className="nav-item">
            <a className="nav-link">About</a>
            </li>
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu">
                <a className="dropdown-item" >Action</a>
                <a className="dropdown-item" >Another action</a>
                <a className="dropdown-item" >Something else here</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item">Separated link</a>
            </div>
            </li>
        </ul>
        <form className="d-flex">
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
         </div>
        </nav>
    );
}

export default Nav;