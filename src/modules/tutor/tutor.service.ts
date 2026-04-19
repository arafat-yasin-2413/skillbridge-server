import { prisma } from "../../lib/prisma";

const createTutorProfile = async (payload: {
    userName: string;
    bio: string;
    hourlyRate: number;
    availability: string;
    userId: string;
}) => {
    try {
        console.log("payload in service: ", payload);
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
    return prisma.tutorProfile.findMany({
        include: {
            tutorCategories: {
                include: {
                    category: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                }
            }
        }
    });
};

const assignSubject = async (userId: string) => {
    // console.log('assign subject service', userId);
    const result = await prisma.tutorProfile.update({
        where: { userId },
        data: {
            tutorCategories: {
                create: [
                    {
                        category: {
                            connect: { id: "9a8e76fe-a000-415c-8beb-370d19e7ddec" },
                        },
                    },
                    
                ],
            },
        },
    });
    return result;
};

export const tutorServices = {
    getAllTutors,
    createTutorProfile,
    assignSubject,
};
