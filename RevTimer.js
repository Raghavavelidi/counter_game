import React, { Component } from 'react'
import './Project.css';
class RevTimer extends Component {
    constructor(){
        super()
        this.state={
            time:10,
            count:0
        }
    }
    componentDidMount(){
      Document.title='Lets play'
        this.interval=setInterval(this.tick,1000);

    }
    tick=()=>{
         if(this.state.time!=0){
            this.setState({
                time:this.state.time-1
            })
        }
    }
    click =()=>{if(this.state.time>0){
      this.setState({count:this.state.count+1})
    }}
  render() {
    return (
      <div className='bg'>
        <h1>Click the tom image as many times as you can in {this.state.time} seconds</h1>
        {/* <img src={require("./Pic2.webp")} > */}
    <img src='https://o7web.com/cdn-cgi/image/w=307,f=auto/https://cdn-ttf.o7web.com/assets/public/img/characters/roulette/tom.png' onClick={this.click} ></img><br />
        <h2>Score:{this.state.count}</h2>
        {this.state.time===0&&
        <h2> 🎉🎉Wow!!! you beat the tom {this.state.count} Times in 10 seconds🎉🎉</h2>}
        <button onClick={()=>{
          this.setState({time:10,count:0})
        }}>👇RESTART👇</button>
      
      </div>
    )
  }
}

export default RevTimer