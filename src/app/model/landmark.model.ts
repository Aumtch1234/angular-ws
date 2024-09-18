// To parse this data:
//
//   import { Convert } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface Landmark {
    idx:     number;
    name:    string;
    detail:  string;
    url:     string;
    country: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toLandmark(json: string): Landmark[] {
        return JSON.parse(json);
    }

    public static landmarkToJson(value: Landmark[]): string {
        return JSON.stringify(value);
    }
}
