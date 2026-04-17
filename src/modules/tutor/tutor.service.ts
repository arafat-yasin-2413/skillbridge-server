import { prisma } from "../../lib/prisma";

const createTutorProfile = async (payload: {
    name: string;
    bio: string;
    hourlyRate: number;
    availability: string;
    userId: string;
}) => {

    console.log(payload)
    const result = await prisma.tutorProfile.create({
        data: payload
    })
    return result;
    
};

const getAllTutors = async () => {
    return prisma.tutorProfile.findMany({
        include: {
            categories: true,
            reviews: true,
        },
    });
};

export const tutorServices = {
    getAllTutors,
    createTutorProfile,
};
