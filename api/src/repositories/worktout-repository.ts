import { Prisma, Workout } from "@prisma/client";

export interface WorkoutRepository{
    create(data: Prisma.WorkoutCreateInput): Promise<Workout>;
    delete(id: string): Promise<any>;
    getCompletedWorkouts(isCompleted: boolean): Promise<Workout[]>
    getNoCompletedWorkouts(isCompleted: boolean): Promise<Workout[]>
}