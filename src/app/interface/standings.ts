export interface Standings {
    rank: number;
    team: {
        logo: string;
        name: string;
        id: number;
    };
    all: {
        logo: string;
        played: number;
        win: number;
        lose: number;
        draw: number;
    };
    goalsDiff: number;
    points: number;
}