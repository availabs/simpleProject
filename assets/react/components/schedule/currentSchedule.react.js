"use strict"
var React = require("react");

var CurrentSchedule = React.createClass({

    getInitialState:function(){
        return {
          shows:[
            {
              day:'Monday',
              time:'4:00pm',
              djName:'Julie',
              showName:'some tunes to stare at the sun to',
              dept:'Alt Rock',
              showLogo:'/images/heat.jpg'
            },
            {
              day:'Monday',
              time:'6:00pm',
              djName:'Heat',
              showName:'Penguins',
              dept:'Alt Rock'
            }
          ]
        }
    },

    render:function() {
        var shows = this.state.shows.map(function(show){
          return (
              <div className='row'>
                <div className='col-md-4'>
                  <img src={show.showLogo ? show.showLogo : '/images/WCDBLogo2.png'} style={{width:'100%'}} />
                </div>
                <div className='col-md-8'>
                <h4>{show.day} {show.time}</h4>
                {show.djName}<br/>
                {show.showName}<br />
                {show.dept}
                </div>
              </div>
          )

        })

        return (
          <div className="row">
            {shows}
          </div>
        );
    }
});

module.exports = CurrentSchedule;
