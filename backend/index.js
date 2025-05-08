const express = require('express');
const dotenv = require('dotenv');
const PaymentRoutes = require('./PaymentRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Mount the payment routes.
app.use('/api/payments', Payme);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




