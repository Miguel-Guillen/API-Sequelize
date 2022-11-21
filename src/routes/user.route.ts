import { Router } from 'express'
import { deleteUser, getUsers, newUser, searchUser, updateUser } from '../controllers/user.controller';
import validateAdmin from './validate.token';

const router = Router();

router.get('/', validateAdmin, getUsers);
router.get('/search', validateAdmin, searchUser);
router.post('/', validateAdmin, newUser);
router.put('/', validateAdmin, updateUser);
router.delete('/', validateAdmin, deleteUser);

export default router;