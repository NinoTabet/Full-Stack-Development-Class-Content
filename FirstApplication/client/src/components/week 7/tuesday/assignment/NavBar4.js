function NavBar4() {
    return (
      <>
        <nav class="navbar navbar-expand-lg border-bottom border-body" data-bs-theme="dark">
          <div class="container-fluid">
            <a class="navbar-brand text-black" href="#">Brand Name</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active text-black" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">Features</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">Pricing</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-black" href="#">About</a>
                </li>
              </ul>
              <form class="d-flex" role="search" data-np-autofill-form-type="other" data-np-checked="1" data-np-watching="1">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" data-np-intersection-state="visible"/>
                <button class="btn btn-outline-dark" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default NavBar4;