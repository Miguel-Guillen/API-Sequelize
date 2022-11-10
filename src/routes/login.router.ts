import { Router } from 'express'
import { login, register } from '../controllers/auth.controller';

const router = Router();

router.post('/', login);
router.post('/', register);

export default router;