const facilities = (app) => {
  app.get('/facilities', (req, res) => res.send('/facilities'))
  app.post('/facilities/:query', (req, res) => {
    const {query} = req.params;
    console.log(query);
    res.json(query)
  })
}

export default facilities