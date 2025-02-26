require('dotenv').config();  
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app= express();
const port= 3001;

app.use(cors());
app.use(express.json());



const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.get('/', (req,res) => {
  res.send('Chinook API çalıştırabildik !');
});
app.get('/track', async (req,res) => {
  try{
    const result = await pool.query('SELECT * FROM track LIMIT 20');
    res.json(result.rows);
  }catch(err){
    console.error('Veri alamadık;', err.message);
    res.status(500).send(`Veri alamadık: ${err.message}`);
  }
});
app.get('/album', async (req,res) => {
  try{
    const result= await pool.query('SELECT * FROM album LIMIT 20');
    res.json(result.rows);
  }catch{
    console.error('Albüm verilerini alamadık:', err.message);
    res.status(500).send(`Albüm verilerini alamadık: ${err.message}`);
  }
});
app.get('/artist', async (req,res) => {
  try{
    const sonuc= await pool.query('SELECT * FROM artist LIMIT 20');
    res.json(sonuc.rows);
  }catch{
    console.error('Genre verilerini alamadık:', err.message);
    res.status(500).send(`Genre sonuçlarını alamadık: ${err.message}`);
  }
});
app.get('/customer', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM customer LIMIT 20');
    res.json(result.rows);
  } catch (err) {
    console.error('Customer verileri alınamadı:', err.message);
    res.status(500).send(`Veri çekme hatası: ${err.message}`);
  }
});
app.get('/employee', async (req,res) => {
  try{
    const result= await pool.query('SELECT * FROM employee LIMIT 20');
    res.json(result.rows);
  }catch{
    console.error('Albüm verilerini alamadık:', err.message);
    res.status(500).send(`Albüm verilerini alamadık: ${err.message}`);
  }
});
app.get('/invoice', async (req,res) => {
  try{
    const result= await pool.query('SELECT * FROM invoice LIMIT 20');
    res.json(result.rows);
  }catch{
    console.error('Albüm verilerini alamadık:', err.message);
    res.status(500).send(`Albüm verilerini alamadık: ${err.message}`);
  }
});
app.get('/invoice_line', async (req,res) => {
  try{
    const result= await pool.query('SELECT * FROM invoice_line LIMIT 20');
    res.json(result.rows);
  }catch{
    console.error('Albüm verilerini alamadık:', err.message);
    res.status(500).send(`Albüm verilerini alamadık: ${err.message}`);
  }
});
app.get('/media_type', async (req,res) => {
  try{
    const result= await pool.query('SELECT * FROM media_type LIMIT 20');
    res.json(result.rows);
  }catch{
    console.error('Albüm verilerini alamadık:', err.message);
    res.status(500).send(`Albüm verilerini alamadık: ${err.message}`);
  }
});
app.get('/playlist', async (req,res) => {
  try{
    const result= await pool.query('SELECT * FROM playlist LIMIT 20');
    res.json(result.rows);
  }catch{
    console.error('Albüm verilerini alamadık:', err.message);
    res.status(500).send(`Albüm verilerini alamadık: ${err.message}`);
  }
});
app.get('/playlist_track', async (req,res) => {
  try{
    const result= await pool.query('SELECT * FROM playlist_track LIMIT 20');
    res.json(result.rows);
  }catch{
    console.error('Albüm verilerini alamadık:', err.message);
    res.status(500).send(`Albüm verilerini alamadık: ${err.message}`);
  }
});
app.listen(port,() => {
  console.log(`API ${port} portunda çalışıyor`)
});

