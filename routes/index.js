import { getRecords } from "../services/record.service.js";
import { Router } from "express";

const router = Router();

router.get('/records/:messageId', (req, res, next) => {
    if (!req.params.messageId) {
        const error = new Error('Missing messageId');
        error.statusCode = 400;
        error.data = {
            Status: 'Missing messageId',
            Message: 'Please provide messageId'
        };
        throw error;
    }
    if (!req.query.requestRecord) {
        const error = new Error('Missing requestRecord');
        error.statusCode = 400;
        error.data = {
            Status: 'Missing requestRecord',
            Message: 'Please provide requestRecord'
        };
        throw error;
    }
    next();
}, getRecords);

export default router;