import data from "../../data/data";

export default (req, res) => {
  res.status(200).json(data.datad);
};
