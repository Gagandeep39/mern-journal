import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Post GET Route');
});

export default router;