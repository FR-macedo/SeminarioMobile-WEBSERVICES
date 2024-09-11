import express from 'express';
import cors from 'cors';
import sequelize from './config/database';
import productRoutes from './routes/products';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando!');
});
console.log(process.env.DB_HOST);

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado!');
}).catch((error) => {
  console.error('Erro ao sincronizar o banco de dados:', error);
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
