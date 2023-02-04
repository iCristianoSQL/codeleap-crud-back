const router = require("express").Router();
const Item = require("../models/Item");

router.post("/", async (req, res) => {
  const { userName, title, content, createdAt } = req.body;

  if (!userName) {
    return res.status(422).json({ error: "The name field is required" });
  }
  if (!title) {
    return res.status(422).json({ error: "The title field is required" });
  }
  if (!content) {
    return res.status(422).json({ error: "The content field is required" });
  }

  const item = {
    userName,
    title,
    content,
    createdAt,
  };

  try {
    await Item.create(item);
    res.status(201).json({ message: "Pessoa inserida no sistema com sucesso" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/", async (req, res) => {
  try {
    const item = await Item.find();
    res.status(200).json(item);
    console.log('pegaram')
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const item = await Item.findOne({ _id: id });

    if (!item) {
      return res.status(422).json({ error: "Please choose a valid id" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const { userName, title, content, createdAt } = req.body;

  const item = {
    userName,
    title,
    content,
    createdAt,
  };

  try {
    const updateItem = await Item.updateOne({ _id: id }, item);

    if (updateItem.matchedCount === 0) {
      return res.status(422).json({ error: "Please choose a valid id" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  const item = await Item.findOne({ _id: id });

  if (!item) {
    return res.status(422).json({ error: "Please choose a valid id" });
  }
  
  try {
    await Item.deleteOne({_id: id})
    res.status(500).json({message: 'User removed successfully'})
  } catch (error) {
    res.status(500).json({ error });
  }

});

module.exports = router;
