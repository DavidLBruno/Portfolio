import express, { Router } from 'express';
import { recibirMail } from '../services/mail';

const router = Router();

router.post('/', recibirMail);

export default router;