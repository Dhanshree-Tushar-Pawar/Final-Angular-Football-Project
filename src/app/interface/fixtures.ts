export interface Fixtures {
    teams: {
        home: {
            logo: string;
            name: string;
        },
        away: {
            logo: string;
            name: string;
        }
    },
    goals: {
        home: number;
        away: number;
    }
}