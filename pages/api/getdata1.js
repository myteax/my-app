import data from "../../data/data";

export default (req, res) => {
  const id = req.body.id;
  console.log(id);

  const dd = data.datad.filter((resf) => resf.id == id);
  console.log(dd);
  res.status(200).json({ dd });
};
