import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import countryRoutes from './routes/countryRoutes.js';

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(countryRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});