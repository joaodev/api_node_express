class HomeController {

  index(req, res) {
    res.status(200).json({
      online: true
    })
  }
}

export default new HomeController();
