import { prisma } from "../../lib/prisma";

const createCategory = async (payload: {
    name: string;
    
}) => {

    console.log('payload in category-service -----: ',payload);
    const result = await prisma.category.create({
        data: payload
    })
    return result;
    
};

const getAllCategories = async()=>{
    return prisma.category.findMany({
        select: {
            id: true,
            name: true,
        }
    });
}


export const categoryServices = {
    createCategory,
    getAllCategories,
};
