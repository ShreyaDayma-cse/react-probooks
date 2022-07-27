import React, { Component } from 'react'
import Book from './BookComponent';
import {Link} from 'react-router-dom'

export default class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.state ={
            books: this.props.books
        }
    }
    setBookType = (e) => {
        let ind = this.state.books.findIndex(bk => bk.id === e.id)
        let newBooks = this.state.books
        newBooks[ind].type = e.type
        this.setState({
            books: [...newBooks]
        })
    }
    componentDidMount = () => {
        let obj = this.props.sobj
        if (obj.type !== "") {
            let ind = this.state.books.findIndex(bk => bk.id === obj.id)
            let newBooks = this.state.books
            newBooks[ind].type = obj.type
            this.setState({
                books: [...newBooks]
            })
        }
    }

  render() {
    return (
      <>
      <header>ProBook</header>
                <div className="home-cont">
                    <h1>&#128214;Reading ({this.state.books.filter((book) => { return book.type === "read" }).length})</h1>
                    <hr />
                    <div className="read">
                        {
                            (this.state.books.filter((book) => { return book.type === "read" }).length === 0) ?
                                "No books reading"
                                :
                                this.state.books.filter((book) => {
                                    return book.type === "read"
                                })
                                    .map((book) => {
                                        return <Book
                                            key={book.id}
                                            id={book.id}
                                            title={book.title}
                                            author={book.author}
                                            img={book.img}
                                            setBook={this.setBookType}
                                        />
                                    })
                        }
                    </div>
                    <h1>&#128077;Like ({this.state.books.filter((book) => { return book.type === "like" }).length})</h1>
                    <hr />
                    <div className="like">
                        {
                            (this.state.books.filter((book) => { return book.type === "like" }).length === 0) ?
                                "No books liked"
                                :
                                this.state.books.filter((book) => {
                                    return book.type === "like"
                                })
                                    .map((book) => {
                                        return <Book
                                            key={book.id}
                                            id={book.id}
                                            title={book.title}
                                            author={book.author}
                                            img={book.img}
                                            setBook={this.setBookType}
                                        />
                                    })
                        }
                    </div>
                    <h1>&#128078;Dislike ({this.state.books.filter((book) => { return book.type === "dislike" }).length})</h1>
                    <hr />
                    <div className="dislike">
                        {
                            (this.state.books.filter((book) => { return book.type === "dislike" }).length === 0) ?
                                "No books disliked"
                                :
                                this.state.books.filter((book) => {
                                    return book.type === "dislike"
                                })
                                    .map((book) => {
                                        return <Book
                                            key={book.id}
                                            id={book.id}
                                            title={book.title}
                                            author={book.author}
                                            img={book.img}
                                            setBook={this.setBookType}
                                        />
                                    })
                        }
                    </div>

                </div>
                <Link to="/search" className="search-btn">+</Link>
      </>
    )
  }
}
