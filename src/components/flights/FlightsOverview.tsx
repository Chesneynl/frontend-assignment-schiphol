import { Flight } from 'utils/types/flights';

type Props = {
    flights: Flight[] | null;
};

function FlightsOverview({ flights }: Props) {
    if (!flights) return null;

    if (flights.length === 0) {
        return (
            <div>
                <p>Geen vluchten gevonden</p>
            </div>
        );
    }

    return (
        <>
            {flights.map((flight) => {
                const { flightIdentifier, expectedTime, score, flightNumber, airport, date, url } = flight;

                return (
                    <div
                        key={flightIdentifier}
                        className="p-5 border border-gray-200 dark:border-gray-700 rounded-md mb-5 bg-gradient-more"
                    >
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{flightNumber}</h2>
                        <p className="text-md text-gray-700 dark:text-gray-300">{expectedTime}</p>
                        <p className="text-md text-gray-700 dark:text-gray-300">{airport}</p>
                        <p className="text-md text-gray-700 dark:text-gray-300">{date}</p>
                        <p className="text-md text-gray-700 dark:text-gray-300">{url}</p>
                        <p className="text-md text-gray-700 dark:text-gray-300">{score}</p>
                    </div>
                );
            })}
        </>
    );
}

export default FlightsOverview;
