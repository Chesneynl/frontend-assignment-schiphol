import type { Flight, FlightSort } from "utils/types/flights";

function sortDate(a: string, b: string) {
    const dateA = new Date(a);
    const dateB = new Date(b);

    if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
        return dateA.getTime() - dateB.getTime();
    }

    return 0;
}

function sortTime(a: string, b: string) {
    const timeToMinutes = (time: string): number => {
        const [hours, minutes] = time.split(":").map(Number);
        return hours * 60 + minutes;
    };

    const timeA = timeToMinutes(a);
    const timeB = timeToMinutes(b);

    return timeA - timeB;
}

export const sortAndLimitFlights = (
    flights: Flight[],
    key: FlightSort,
    order = "asc",
    maxFlights = 5
) => {
    return flights
        .sort((a: Flight, b: Flight) => {
            let comparison = 0;

            if (key === "date") {
                comparison = sortDate(a[key], b[key]);
            } else if (key === "expectedTime") {
                comparison = sortTime(a[key], b[key]);
            }

            return order === "asc" ? comparison : -comparison;
        })
        .slice(0, maxFlights);
};
