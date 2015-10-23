"use strict"
var React = require("react"),

    FullSchedule = require('../components/schedule/fullSchedule.react');

var Schedule = React.createClass({

    render() {
        return (
            <div className="content container main" style={{paddingTop:'100px'}}>

              <FullSchedule />

            </div>
        );
    }
});

module.exports = Schedule;
