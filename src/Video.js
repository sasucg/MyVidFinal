import React, {Component} from "react"
import vid from "./abc.mp4"
import PlayerBar from "./PlayerBar"




class Video extends Component{
    
    constructor(){
        super();
        this.state = {
            duration: 179,
            currentTime: 0,
            isPlaying: false,
            currentVolume: 50,
            isFullscreen: false,
        }
        this.myRef = React.createRef();
        this.playVideo = this.playVideo.bind(this)
        this.stopVideo = this.stopVideo.bind(this)
        this.handleVolumeChange = this.handleVolumeChange.bind(this)
    }

    playVideo() {
        const node = this.myRef.current;
        node.play();
        
        this.setState(lastOp => { 
            return {
                isPlaying: true,
                currentTime: lastOp.currentTime + 1
            }
        })
      }


    stopVideo() {
        const node = this.myRef.current;
        node.pause();
        this.setState(lastOp => {
            return {
                isPlaying: false
            }
        })
    }
    
    handleVolumeChange = (event) => {
        const node = event.target.value;
        this.setState({ currentVolume: node});
        this.myRef.current.volume = node/100;
      }
   
    handleTimeUpdate = (e) => {
        this.setState({ currentTime: e.target.currentTime });
    }

    handleCurrentTimeChange = (newTime) => {
        this.myRef.current.currentTime = newTime;
        this.setState({ currentTime: newTime });
    }

    toggleFullscreen = () => 
    {
        const node = this.myRef.current;
        if(!this.isFullscreen){
            node.requestFullscreen();
        }
        else
           node.exitFullscreen()
    }
    


    render(){
        return(
            <div>

            <video ref={this.myRef} className="myVideo" src={vid} type="video/mp4" onTimeUpdate={this.handleTimeUpdate} />
            <div className="myControls">
            <hr/>
            Videoclipul: {parseInt(this.state.currentTime, 10)} / {this.state.duration}
            <PlayerBar 
                currentTime={this.state.currentTime}
                onCurrentTimeChange={this.handleCurrentTimeChange}
            />
 
            <button onClick={this.playVideo.bind(this)} className="btn"><i class="fas fa-play"></i></button>
            <button onClick={this.stopVideo.bind(this)} className="btn"><i class="fas fa-stop"></i></button>
            <button className="btn" onClick={this.toggleFullscreen}><i class="fas fa-arrows-alt"></i></button>


            <section id="volume-control">
                    <div className="volumbe-container">{this.props.currentVolume}</div>
                    <i class="fas fa-volume-up"> Volume</i>
                    <input
                        type="range"
                        className="volume-bar"
                        defaultValue = "50"
                        min="0"
                        max="100"
                        step="1s"
                        onChange={this.handleVolumeChange}
                        />

                        <div className="total-volume">{this.props.length}</div>
            </section>
                
                
            </div>
            </div>
    )
    }
}




export default Video