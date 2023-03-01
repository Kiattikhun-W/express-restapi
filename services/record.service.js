import { Router } from "express";
import data from "../models/dataJson.js";

const { response } = data;
const router = Router();

export const getRecords = ((req, res) => {
    if (!response.find(x => x.headerDate.messageId === Number(req.params.messageId))) {
        const error = new Error('MessageId not found');
        error.statusCode = 400;
        error.data = {
            Status: 'MessageId not found',
            Message: 'Please provide valid messageId'
        };
        throw error;
    }

    return res.status(200).json(response.find(x => x.headerDate.messageId === Number(req.params.messageId)));

});

export default router;