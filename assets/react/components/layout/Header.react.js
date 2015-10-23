var React = require("react");

var Header = React.createClass({
	render() {
		return (
				<nav className="navbar navbar-default navbar-fixed-top">
					<div className="container">
						<div className="navbar-header page-scroll">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="#page-top">
								<img id="navLogo" src="http://wcdbfm.com/images/wcdb_menu.png" />
							</a>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<ul className="nav navbar-nav navbar-right">
										<li className="page-scroll">
												<a href="/#/">Home</a>
										</li>
										<li className="dropdown">
												<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">DJs <span className="caret"></span></a>
												<ul className="dropdown-menu">
														<li><a href="/#/schedule">Schedule</a>
														</li>
														<li role="separator" className="divider"></li>
														<li><a href="/#/listenlive">Listen Live</a>
														</li>
												</ul>
										</li>
										<li className="dropdown">
												<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Station Info <span className="caret"></span></a>
												<ul className="dropdown-menu">
														<li><a href="#">Become a DJ</a>
														</li>
														<li role="separator" className="divider"></li>
														<li><a href="#">Events</a>
														</li>
														<li role="separator" className="divider"></li>
														<li><a href="#">Pictures</a>
														</li>
														<li role="separator" className="divider"></li>
														<li><a href="#">Links</a>
														</li>
												</ul>
										</li>
										<li className="hidden">
												<a href="#page-top"></a>
										</li>

										<li className="page-scroll">
												<a href="#blog">Blog</a>
										</li>
								</ul>
						</div>
				</div>
		</nav>
		);
	}
});

module.exports = Header;
