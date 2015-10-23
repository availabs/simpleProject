"use strict"
var React = require("react");

var CurrentSong = React.createClass({

    getInitialState:function(){
        return {
          songs:[
            {
              name:'Magic Bus',
              artist:'The Who',

            }
          ]
        }
    },

    render:function() {
        var songs = this.state.songs.map(function(song){
          return (
              <div className='row'>
                <div className='col-md-12'>
                  {song.name}<br/>{song.artist}
                </div>
              </div>
          )

        })

        return (
          <div className="row">
            <h4>Recent Songs</h4>
            {songs}
          </div>
        );
    }
});

module.exports = CurrentSong;
