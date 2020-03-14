const home = (app) => {
  app.get('/', (req, res) => res.send('/'))
}

export default home