package main

import (
	"log"
	"personal-site/pkg/app"
	"personal-site/pkg/dependencies/memory"
)

func main() {
	bookRetriever := memory.NewBookRetriever()

	app := app.New(bookRetriever)

	if err := app.Run(); err != nil {
		log.Fatal(err)
	}
}
