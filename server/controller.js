const getAll = (req, res, next) => {
  const db = req.app.get('db');

  db.get_inventory()
    .then(response => {
      res.status(200).send(response);
      //   console.log();
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const create = (req, res, next) => {
  const db = req.app.get('db');
  const { name, price, img } = req.body;

  db.create_product([name, price, img])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
      console.log(`Something went wrong!`);
    });
};

const del = (req, res, next) => {
  const db = req.app.get('db');

  db.delete_product(req.params.id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

const update = (req, res, next) => {
  const db = req.app.get('db');
  const { id } = req.params;
  const { name, price } = req.body;

  db.update_product([ id, name, price])
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

module.exports = {
  getAll,
  create,
  del,
  update
};
