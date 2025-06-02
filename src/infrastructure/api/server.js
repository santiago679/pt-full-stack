const app = require('./app/app')
const port = process.env.PORT ?? 8020;

app.listen(port, () => {
    console.log(`Hexagonal Management Users App running on http://localhost:${port}`);
});