export const unknownHandler = (req, res, next) => {
  res.status(404).send("Seite nicht gefunden. Sorry!")
}

export const errorHandler = (err, req, res, next) => {
  console.error(err)
  res.status(500).send("Es liegt nicht an dir sondern an uns :-(")
}