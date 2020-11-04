import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import {robots} from  '../robots'
import './App.css'
import Scroll from '../components/Scroll'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
      return response.json()
    })
    .then(users => {
      this.setState({robots:users})
    })
  }

  onSearchChange=(event)=>{
    // console.log(event.target.value);
    this.setState({searchfield:event.target.value})
    // console.log(this.state);
    
  }

  render() {
    const {robots,searchfield} = this.state
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (robots.length === 0){
      return <h1>Loading...</h1>
    }
    else {
  return (
    <div className="tc">
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}}
}

export default App
