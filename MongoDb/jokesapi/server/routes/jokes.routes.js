const JokeController = require("../controller/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.findallJokes);
    app.get("/api/jokes/:id", JokeController.findOneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateExistingJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteAnExistingJoke);
};