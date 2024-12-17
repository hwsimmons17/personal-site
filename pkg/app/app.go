package app

import (
	"personal-site/pkg"
	"text/template"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type App struct {
	engine        *gin.Engine
	template      *template.Template
	bookRetriever pkg.BookRetriever
}

func New(bookRetriever pkg.BookRetriever) *App {
	engine := gin.New()
	engine.Use(
		gin.Recovery(),
	)
	gin.SetMode(gin.ReleaseMode)

	config := cors.Config{
		AllowAllOrigins:  true,
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type", "Authorization", "Content-Disposition", "Sec-Websocket-Protocol"},
		ExposeHeaders:    []string{"Content-Length", "Content-Disposition"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}
	engine.Use(cors.New(config))

	tmpl, err := template.ParseGlob("web/templates/*.html")
	if err != nil {
		panic(err)
	}

	return &App{
		engine:        engine,
		template:      tmpl,
		bookRetriever: bookRetriever,
	}
}

func (a *App) Run() error {
	a.AttachStandardRoutes()
	a.AttachAssetRoutes()
	a.AttachInterestRoutes()
	return a.engine.Run()
}

func (a *App) AttachStandardRoutes() {
	a.engine.GET("/status", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok"})
	})

	a.engine.GET("/", func(c *gin.Context) {
		if err := a.template.ExecuteTemplate(c.Writer, "home.html", nil); err != nil {
			c.String(500, err.Error())
		}
	})
}
