import { Request, Response } from "express";
import { tutorServices } from "./tutor.service";

const createTutorProfile = async (req: Request, res: Response) => {
    try {
        // TODO: get user id from token and send it to the service
        const userId = "hbvnjpaqdd";
        const result = await tutorServices.createTutorProfile({...req.body,
            userId}
        );
        
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({
            message: "Tutor creation failed",
            details: error,
        });
    }
};

const getTutors = async (req: Request, res: Response) => {
    try {
        const result = await tutorServices.getAllTutors();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
            message: "Tutor get operation failed",
            details: error,
        });
    }
};

export const tutorControllers = {
    getTutors,
    createTutorProfile,
};
