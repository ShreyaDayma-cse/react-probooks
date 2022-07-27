import React, { Component } from 'react'
import './App.css'
import HomeComponent from './component/HomeComponent'
import SearchComponent from './component/SearchComponent'
import axios from 'axios'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
 

 export default class App extends Component {
  constructor(){
    super();
    this.state = {
      books : [],
      obj: {type: "", id:""}
    }
  }
  
  
  componentDidMount = () => {
    let api = "https://reactnd-books-api.udacity.com/books";
    let token;
    if (!token) {
      token = localStorage.token = Math.random().toString(36).substr(-8)
    }
    const headers = {
      'Accept': 'application/json',
      'Authorization': token
    }
    axios.get(api, { headers })
      .then((res) => {
        let newBooks = []
        res.data.books.forEach((book) => {
          let obj = { id: book.id, title: book.title, author: book.authors[0], img: book.imageLinks.thumbnail, type: "all" }
          newBooks.push(obj)
        })
        this.setState({
          books: [...newBooks]
        })
        console.log(this.state.books);
      })
      .catch(err => {
        console.log(err);
      })
    }
  

  setBookSearch = (e) => {
    let newObj = this.state.obj
    newObj.type = e.type
    newObj.id = e.id
    this.setState({
      obj: newObj
    })
    console.log(this.state.obj);
  }



   render() {
    if(this.state.books.length === 0){
      return(
        <div className='load'>
          <img src = "https://i0.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif?fit=880%2C440&ssl=1" alt="loading"></img>
        </div>
      )
    }
     return (
       <div className='App'>
        <Router>
          <Routes>
            <Route exact path ="/" element = {<HomeComponent books={this.state.books} sobj={this.state.obj}/>}/>
            <Route path="/search" element = {<SearchComponent books={this.state.books} type={this.setBookSearch} />}/>
          </Routes>
        </Router>

       </div>
     )
   }
 }
 