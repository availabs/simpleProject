"use strict"
var React = require("react"),
    days=["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"],
    hours=[0,2,4,6,8,10,12,14,16,18,20,22],
    schedule = require('../../utils/data/schedule'),
    colors = {
      'Metal':'#ccc',
      'EDM':'#ec2d46',
      'Urban':'#00f',
      'Alternative':'#0f0',
      'Black Metal':'#e65c00',
      'Gospel':'#808000',
      'News':'#FF6699',
      'Reggae':'#47B224',
      'World':'#669900',
      'Automation':'#CCFF66',
      'Sports':'#999966',
      'Random':'#99CCFF',
      'Training Show':'#666699',
      'Hardcore':'#353543',
      'Specialty':'#801A00',
      'Jazz':'#3366CC',
      'R&B':'#754719',
      'Vinyl':'#242400',
      'Talk':'#339966',
      'Pop':'#FF9933',
      'Indie Rock':'#33CC33'
    };


var Show = React.createClass({
  render(){
    var showStyle = {
      position:'absolute',
      width:'12.95%',
      top:155+(62*this.props.data.startTime),
      height:(60*this.props.data.duration),
      backgroundColor:colors[this.props.data.department],
      textAlign:'center',
    }

    return (
      <div className='col-xs-12 showbox' style={showStyle}>
        {this.props.data.djName}<br />
        {this.props.data.startTime}<br />
        {this.props.data.duration}

      </div>
    )
  }

})

var Day = React.createClass({

    getDefaultProps(){
      return {
        name:'No Day',
        sched:[]
      }
    },

    render() {
        var scope = this;
        var shows = this.props.sched.map(function(show){

          return(
            <Show data={show} />
          )
        })

        return (
            <div className="row">
              <div style={{width:'100%',textAlign:'center'}}>
              {this.props.name}
              </div>
              <div className='row'>

                { shows }
              </div>


            </div>
        );
    }
});

var FullSchedule = React.createClass({



    render:function() {
        var displaydays=days.map(function(d){
          return (
            <div style={{textAlign:'center',width:'14.1%',marginRight:0,display:'inline-block'}}>
              <Day name={d} sched={schedule[d] || [] }/>
            </div>
          )
        })
        return (
          <div className="row outer">
            {displaydays}
          </div>
        );
    }
});

module.exports = FullSchedule;
