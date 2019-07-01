import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Books"
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: [],
    searchItem: "",
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  getBooks = () => {
    API.getBooks(this.state.searchItem)
      .then(res =>
        this.setState({
          books: res.data,
        })
      )
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    toast.info("Searching books... !");
    this.getBooks();
  };

  pleaseSavetheBook = id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    }).then(() => this.getBooks());
  };

  render() {
    return (
      <Container fluid>
        <Jumbotron />
        <Row>
          <Col size="md-12">

            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              >
              </Input>
              <FormBtn
                onClick={this.handleFormSubmit}
                searchItem={this.state.searchItem}
              >
                Search
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
            <h1>Results</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    link={book.volumeInfo.infoLink}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    Button={() => (
                      <FormBtn onClick={() => this.pleaseSavetheBook(book.id)}>
                        Save
                      </FormBtn>
                    )}
                  />
                ))}

                <List />
                ) : (
              <div className="mockup-content">
                  <h2 className="heading-title text-center">
                    {this.state.message}
                  </h2>
                </div>
            )}
        </Row>
      </Container>

          );
        }
      }
      
      export default Search;
