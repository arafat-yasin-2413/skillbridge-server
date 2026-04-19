import { prisma } from "../../lib/prisma";

const createTutorProfile = async (payload: {
    userName: string;
    bio: string;
    hourlyRate: number;
    availability: string;
    userId: string;
}) => {
    try {
        console.log('payload in service: ', payload)
        const result = await prisma.tutorProfile.create({
            data: {
                name: payload.userName,
                bio: payload.bio,
                hourlyRate: payload.hourlyRate,
                availability: payload.availability,
                user: {
                    connect: {
                        id: payload.userId,
                    },
                },
            },
        });

        console.log("CREATED TUTOR:", result);
        return result;
    } catch (err) {
        console.error("❌ TUTOR CREATE FAILED:", err);
        throw err;
    }
};

const getAllTutors = async () => {
    return prisma.tutorProfile.findMany();
};




export const tutorServices = {
    getAllTutors,
    createTutorProfile,
};
