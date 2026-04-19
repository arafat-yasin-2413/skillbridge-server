import { Request, Response } from "express";
import { categoryServices } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
    try {
        const result = await categoryServices.createCategory({...req.body}
        );
        
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({
            message: "Category creation failed",
            details: error,
        });
    }
};

// const getTutors = async (req: Request, res: Response) => {
//     try {
//         const result = await tutorServices.getAllTutors();
//         return res.status(200).json(result);
//     } catch (error) {
//         return res.status(400).json({
//             message: "Tutor get operation failed",
//             details: error,
//         });
//     }
// };

const getAllCategories = async(req:Request, res:Response) =>{
    try{
        const result = await categoryServices.getAllCategories();
        return res.status(200).json(result);
    }
    catch(error) {
        return res.status(400).json({
            message: "Get Categories Request Failed",
            details: error
        })
    }
}

export const categoryControllers = {
    createCategory,
    getAllCategories,
};
