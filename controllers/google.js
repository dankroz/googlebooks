const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        const { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=", {
                params
            })
            .then(results =>
                results.data.items.filter(
                    result =>
                        result.items.volumeInfo.title &&
                        result.items.volumeInfo.authors &&
                        result.items.volumeInfo.description &&
                        result.items.volumeInfo.imageLinks.thumbnail &&
                        result.items.volumeInfo.infoLink
                )
            )
            .then(apiBooks =>
                db.Book.find().then(dbBooks =>
                    apiBooks.filter(apiBook =>
                        dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
                    )
                )
            )
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    }
};