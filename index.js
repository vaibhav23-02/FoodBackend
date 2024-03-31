const express = require('express');
const cors = require('cors');
const calculate = require('./controllers/pricing');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.post('/calculate', calculate); // Route to calculate food delivery price

app.get('/', (req, res) => {
    res.redirect('/api-docs');
});

app.listen(3300, () => {
    console.log("Server is listening at \nhttp://localhost:3300");
});
