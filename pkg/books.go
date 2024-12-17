package pkg

type Book struct {
	Title string `json:"title"`
	Author string `json:"author"`
	Link string `json:"link"`
	Rating int `json:"rating"`
	Summary string `json:"summary"`
	PersonalTake string `json:"personalTake"`
	YearRead int `json:"yearRead"`
}

type BookRetriever interface {
	GetBooks() ([]Book, error)
}