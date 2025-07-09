import express from 'express';
import dotenv from 'dotenv';
import sequelize from './src/config/database.js';
import characterRoutes from './routes/characterRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/characters', characterRoutes);

const PORT = process.env.PORT || 4000;



sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
  });
});