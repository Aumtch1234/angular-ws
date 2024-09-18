// To parse this data:
//
//   import { Convert } from "./file";
//
//   const welcome = Convert.toWelcome(json);

export interface Country {
    idx:  number;
    name: string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toCountry(json: string): Country[] {
        return JSON.parse(json);
    }

    public static countryToJson(value: Country[]): string {
        return JSON.stringify(value);
    }
}
