
import './App.css';
function App() {
  return (
    <>
    <nav ClassName="navbar navbar-expand-lg navbar-light bg-light">
  <div ClassName="container-fluid">
    <a ClassName="navbar-brand" href="/">Navbar</a>
    <button ClassName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span ClassName="navbar-toggler-icon"></span>
    </button>
    <div ClassName="collapse navbar-collapse" id="navbarSupportedContent">
      <ul ClassName="navbar-nav me-auto mb-2 mb-lg-0">
        <li ClassName="nav-item">
          <a ClassName="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li ClassName="nav-item">
          <a ClassName="nav-link" href="/">Link</a>
        </li>
       
        <li ClassName="nav-item">
          <a ClassName="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form ClassName="d-flex">
        <input ClassName="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button ClassName="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  );
}

export default App;
