import data from "../../data/data";
export default (req, res) => {
  const minamount = req.body.minamount;
  const maxamount = req.body.maxamount;
  const city = req.body.city;

  if (city === "all") {
    const dd = data.datad.filter(
      (resf) => resf.amount >= minamount && resf.amount <= maxamount
    );

    res.status(200).json({ dd });
  } else {
    const dd = data.datad.filter(
      (resf) =>
        resf.amount >= minamount &&
        resf.amount <= maxamount &&
        resf.city === city
    );
    res.status(200).json({ dd });
  }
};
