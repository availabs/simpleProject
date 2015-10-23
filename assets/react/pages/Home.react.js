"use strict"
var React = require("react"),
    CurrentSchedule = require('../components/schedule/CurrentSchedule.react'),
    CurrentSong = require('../components/widget/recentSongs.react'),
    Events = require('../components/events/event.react');

var Home = React.createClass({

    render() {
        return (
            <div className="container main" style={{paddingTop:30}}>
              <section id="portfolio" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>90.9FM WCDB - The Capital Districts Best</h2>
                            <hr className="star-primary" />
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <CurrentSchedule />
                      </div>

                      <div className="col-md-4">
                      <CurrentSong />
                      </div>
                    </div>
                    <div className="row">
                    <div className="col-lg-12">
                      <Events />
                    </div>
                    </div>
                </div>

              </section>
            </div>
        );
    }
});

module.exports = Home;
