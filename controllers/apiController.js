function index(req, res) {
  res.json({
    message: "Howdy!",
    documentation_url: "",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
