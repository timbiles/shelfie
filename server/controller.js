const create = (req, res, next) => {
  const db = req.app.get('db');
  // const {name, price, img}

  db.get_inventory()
    .then(response => {
      res.status(200).send(response);
      console.log();
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  create
  // del,
  // getOne,
  // getAll,
  // update
};
