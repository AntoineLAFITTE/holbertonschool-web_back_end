import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 1245;

// Use the router for all routes
app.use('/', router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
