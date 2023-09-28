export class GlobalConstants {
    public static appTitle: string = 'FOOTBALL UPDATES';
    public static countryEngland: string = 'England';
    public static countrySpain: string = 'Spain';
    public static countryGermany: string = 'Germany';
    public static countryFrance: string = 'France';
    public static countryItaly: string = 'Italy';
    public static tableHeadings: string[] = ['', '', 'Name', 'Games', 'W', 'L', 'D', 'Goal difference', 'Points'];
    public static ten: string = '10';
    public static backButton: string = 'Back';
    public static countries: { [key: string]: string } = {
        England: 'Premier League',
        Spain: 'La Liga',
        France: 'Ligue 1',
        Germany: 'Bundesliga',
        Italy: 'Serie A',
      };
}

export const TopEuropeanLeagues = {
    'England' : 'Premier League',
    'Spain'  : 'La Liga',
    'France' : 'Ligue 1',
    'Germany' : 'Bundesliga',
    'Italy' : 'Serie A'
}
