import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './BookComponent'

export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }
    onSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    setBookType = (e) => {
        this.props.type(e)
    }
    render() {
        return (
            <>
                <div className="search-head">
                    <Link to="/">&lt;-</Link>
                    <input type="text" placeholder="Search by title or author" onChange={this.onSearch} />
                </div>
                <h1>{this.props.books.filter((book) => {
                    return book.title.toLowerCase().includes(this.state.search)
                }).length} books found</h1><br />
                <div className="search-res">
                    {
                        this.props.books.filter((book) => {
                            return book.title.toLowerCase().includes(this.state.search)
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
            </>
        )
    }
}