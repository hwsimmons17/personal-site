package app


func (a *App) AttachAssetRoutes() {
	a.engine.Static("/assets", "assets")
}