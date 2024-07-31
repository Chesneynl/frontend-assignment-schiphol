import { describe, it, expect } from "vitest";
import { sortAndLimitFlights } from "./flights";

const originalFlights = [
    {
        flightIdentifier: "D20190401BA2761",
        flightNumber: "BA 2761",
        airport: "London Gatwick",
        date: "2022-02-21",
        expectedTime: "14:40",
        originalTime: "14:40",
        url: "/en/departures/flight/D20190401BA2761/",
        score: "155.64577"
    },
    {
        flightIdentifier: "D20190401KL1019",
        flightNumber: "KL 1019",
        airport: "London Heathrow",
        date: "2022-02-22",
        expectedTime: "14:40",
        originalTime: "14:40",
        url: "/en/departures/flight/D20190401KL1019/",
        score: "153.7487"
    },
    {
        flightIdentifier: "D20190401EZY3004",
        flightNumber: "EZY 3004",
        airport: "London Stansted",
        date: "2022-02-26",
        expectedTime: "14:45",
        originalTime: "14:45",
        url: "/en/departures/flight/D20190401EZY3004/",
        score: "156.19374"
    },
    {
        flightIdentifier: "D20190401BA435",
        flightNumber: "BA 435",
        airport: "London Heathrow",
        date: "2022-02-25",
        expectedTime: "14:55",
        originalTime: "14:55",
        url: "/en/departures/flight/D20190401BA435/",
        score: "154.88477"
    },
    {
        flightIdentifier: "D20190401EJU8874",
        flightNumber: "EJU 8874",
        airport: "London Gatwick",
        date: "2022-02-24",
        expectedTime: "15:05",
        originalTime: "15:05",
        url: "/en/departures/flight/D20190401EJU8874/",
        score: "154.88477"
    },
    {
        flightIdentifier: "D20190401EZY8876",
        flightNumber: "EZY 8876",
        airport: "London Gatwick",
        date: "2022-02-23",
        expectedTime: "15:50",
        originalTime: "15:50",
        url: "/en/departures/flight/D20190401EZY8876/",
        score: "154.88477"
    }
];

describe("sortAndLimitFlights", () => {
    describe("sorting by date", () => {
        it("returns the flights in the correct order from earliest to latest", () => {
            const flights = [...originalFlights];

            const expectedOrder = [
                flights[0], // '2022-02-21'
                flights[1], // '2022-02-22'
                flights[5], // '2022-02-23'
                flights[4] // '2022-02-24'
            ];

            expect(sortAndLimitFlights(flights, "date", "asc", 4)).toEqual(expectedOrder);
        });

        it("returns the flights in the correct order from latest to earliest", () => {
            const flights = [...originalFlights];
            const expectedOrder = [
                flights[2], // '2022-02-26'
                flights[3], // '2022-02-25'
                flights[4] // '2022-02-24'
            ];

            expect(sortAndLimitFlights(flights, "date", "desc", 3)).toEqual(expectedOrder);
        });

        it("returns the correct amount of items of the array", () => {
            const flights = [...originalFlights];
            expect(sortAndLimitFlights(flights, "date", "asc", 6)).toHaveLength(6);
        });
    });

    describe("sorting by expectedTime", () => {
        it("returns the flights in the correct order from earliest to latest", () => {
            const flights = [...originalFlights];
            const expectedOrder = [
                flights[0], // '14:40'
                flights[1], // '14:40'
                flights[2], // '14:45'
                flights[3] // '14:55'
            ];
            expect(sortAndLimitFlights(flights, "expectedTime", "asc", 4)).toEqual(expectedOrder);
        });

        it("returns the flights in the correct order from latest to earliest", () => {
            const flights = [...originalFlights];
            const expectedOrder = [
                flights[5], // '15:50'
                flights[4], // '15:05'
                flights[3] // '14:55'
            ];
            expect(sortAndLimitFlights(flights, "expectedTime", "desc", 3)).toEqual(expectedOrder);
        });

        it("returns the correct amount of items of the array", () => {
            const flights = [...originalFlights];
            expect(sortAndLimitFlights(flights, "date", "asc", 6)).toHaveLength(6);
        });
    });
});
