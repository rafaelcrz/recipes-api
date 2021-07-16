const jsonfile = require("jsonfile");
const file = "resources/recipes.json";

exports.get = (req, res, next) => {
  jsonfile
    .readFile(file)
    .then((obj) => 
      {
        console.dir(obj);
        res.status(200).send(obj);
      }
    )
    .catch((error) => 
      {
        console.error(error)
        res.status(400).send(
          {
            "error": "not-found"
          }
        )
      }
    );
};