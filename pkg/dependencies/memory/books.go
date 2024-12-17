package memory

import (
	"encoding/json"
	"log"
	"os"
	"personal-site/pkg"
)

type repo struct {
	books []pkg.Book
}

func NewBookRetriever() pkg.BookRetriever {
	booksJson, err := os.ReadFile("pkg/dependencies/memory/books.json")
	if err != nil {
		log.Fatal(err)
	}

	var books []pkg.Book
	err = json.Unmarshal(booksJson, &books)
	if err != nil {
		log.Fatal(err)
	}

	return &repo{
		books: books,
	}
}

func (r *repo) GetBooks() ([]pkg.Book, error) {
	return r.books, nil
}
