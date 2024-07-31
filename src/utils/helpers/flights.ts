import { Flight, FlightSort } from 'utils/types/flights';

export const sortFlights = (flights: Flight[], key: FlightSort, order = 'asc', maxFlights = 5) => {
    return flights
        .sort((a, b) => {
            const valueA = a[key];
            const valueB = b[key];

            let comparison = 0;

            if (key === 'date') {
                const dateA = new Date(valueA);
                const dateB = new Date(valueB);

                if (!isNaN(dateA.getTime()) && !isNaN(dateB.getTime())) {
                    comparison = dateA.getTime() - dateB.getTime();
                }
            }

            if (key === 'expectedTime') {
                const timeToMinutes = (time: string): number => {
                    const [hours, minutes] = time.split(':').map(Number);
                    return hours * 60 + minutes;
                };
                const timeA = timeToMinutes(valueA);
                const timeB = timeToMinutes(valueB);

                comparison = timeA - timeB;
            }

            return order === 'asc' ? comparison : -comparison;
        })
        .slice(0, maxFlights);
};
