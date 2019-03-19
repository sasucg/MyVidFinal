import React, {Component} from "react"
import Video from "./Video"

class PlayerBar extends Component {
    constructor()
    {

        super()
        this.state = {
            value: 0
        }
        this.handlePlay = this.handlePlay.bind(this)
        this.increment = this.increment.bind(this)
        this.changemyBar = this.changemyBar.bind(this)

    }

    handlePlay(){
       
        if(this.state.value)
            return}
    

    increment(prevState){
        console.log(this.state.value)
        this.setState(prevState => ({value: prevState.value + 1}));

    }


    changemyBar(){


        setInterval(this.increment, 1000);
    }

    handleCurrentTime = (e) => {
         this.props.onCurrentTimeChange(e.target.value)
    }
    render(){


        

        return(
            <div>
                <input type="range" min="1" max="179" value={this.props.currentTime} onChange={this.handleCurrentTime} className="slider"  />
        
            </div>
        )

    }




}




export default PlayerBar