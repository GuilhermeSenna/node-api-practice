import { Challenge } from "../../domain/entities/challenge";

export interface ChallengesRepository {
    // Returns a promise that can be a 'Challenge' or null
    findById(id: string): Promise<Challenge | null>;
}