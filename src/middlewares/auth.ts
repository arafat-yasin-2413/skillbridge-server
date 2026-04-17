

export enum UserRole {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
    ADMIN   = "ADMIN",
}

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string;
                email: string;
                name: string;
                role: string;
                emailVerified: boolean;
            };
        }
    }
}


