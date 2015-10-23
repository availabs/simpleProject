"use strict"
var React = require("react");

var Events = React.createClass({

    getInitialState:function(){
        return {
          events:[
            {
              name:'greatful dead',
              img:"http://www.rockcellarmagazine.com/wp-content/uploads/2015/08/grateful-dead-and-company-tour-2015-poster.jpg",

            },
            {
              name:'wwe',
              img:"http://orig05.deviantart.net/da0c/f/2012/321/9/0/wwe__smackdown_poster_by_idesignwrestlingstuf-d5l8rgz.png",

            },
            {
              name:'darius rucker',
              img:"http://www.musicrow.com/wp-content/uploads/2015/07/Darius-Rucker-2015.jpg",
            },
            {
              name:'shania',
              img:"http://barsnbands.net/media/poster/2015/03/11/shania.JPG",
            }
          ]
        }
    },

    render:function() {
        var event = this.state.events.map(function(event){
          return (
              <div className='col-lg-4'>

                  <img src={event.img} style={{width:'100%'}} />

              </div>
          )

        })

        return (
          <div className="row">
            <h4>Upcoming Events</h4>
            {event}
          </div>
        );
    }
});

module.exports = Events;
