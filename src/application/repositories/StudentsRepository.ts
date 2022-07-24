import {Student} from "../../domain/entities/student";

export interface StudentsRepository {
    // Returns a promise that can be a 'Student' or null
    findById(id: string): Promise<Student | null>;
}