package app

import "github.com/gin-gonic/gin"

func (a *App) AttachInterestRoutes() {
	a.engine.GET("/interests/books", func(c *gin.Context) {
		books, err := a.bookRetriever.GetBooks()
		if err != nil {
			c.String(500, err.Error())
			return
		}

		if err := a.template.ExecuteTemplate(c.Writer, "books.html", books); err != nil {
			c.String(500, err.Error())
		}
	})

	a.engine.GET("/interests/web-design", func(c *gin.Context) {
		if err := a.template.ExecuteTemplate(c.Writer, "web-design.html", nil); err != nil {
			c.String(500, err.Error())
		}
	})
}
