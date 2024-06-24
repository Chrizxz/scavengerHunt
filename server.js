import express from 'express';
import ejs from 'ejs';
import colors from 'colors';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();
const app = express();

// frontend files
app.use(express.static('public'));

// start the server
const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Server started on `.blue + `Port: ${port}`.cyan.underline);
});