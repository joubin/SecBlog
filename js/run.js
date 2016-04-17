const tagline = "Software, Security, Technology"
const title = "Joubin Jabbari"

class CreateLogo extends React.Component {
  render() {
    return (
      <div className="logo" id="logo">
        <h1>{title}</h1>
        <h2 className="tagline">{tagline}</h2>
      </div>
    )
  }
}


class Menu extends React.Component{

  constructor() {
    super()
    this.menuItems = [
      {
        text: 'hello',
        path: '/path/to/somewhere',
      },
      {
        text: 'menu item',
        path: '/path/to/elsewhere',
      },
      'separator',
      {
        text: 'other menu item',
        path: '/path/to/otherplace',
      },
    ]
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button className="navbar-toggle collapsed"
                data-target="#bs-example-navbar-collapse-1"
                data-toggle="collapse"
                type="button">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>
            <div className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="#">Link <span className="sr-only">(current)</span></a>
                </li>
                <li>
                  <a href="#">Link</a>
                </li>
                <li className="dropdown">
                  <a aria-expanded="false" className="dropdown-toggle"
                    data-toggle="dropdown" href="#" role="button">Dropdown<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu" role="menu">
                    {this.menuItems.map(item => (
                      item instanceof Object ?
                        <li>
                          <a href={item.path}>{item.text}</a>
                        </li>
                      :
                        <li className="divider"></li>
                    ))}
                  </ul>
                </li>
              </ul>
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input className="form-control" placeholder="Search" type="text" />
                </div>
                <button className="btn btn-default" type="submit">Submit</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#">Link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }

}

class App extends React.Component {
  render() {
    return (
      <div id="page">
        <div id="logo">
          <CreateLogo />
        </div>
        <div id="menu">
          <Menu />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.body)
