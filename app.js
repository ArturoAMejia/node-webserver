import express from 'express'
import hbs from 'hbs'
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


const app = express()
const port = process.env.PORT | 8080

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Handlebars
app.set("view engine", "hbs")
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Arturo Mejía',
    titulo: 'Curso de Node'
  })
})


app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Arturo Mejía',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Arturo Mejía',
    titulo: 'Curso de Node'
  })
})
app.get('*', (req, res) => {
  res.send('404 | Page not found')
})

console.log(__dirname);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})