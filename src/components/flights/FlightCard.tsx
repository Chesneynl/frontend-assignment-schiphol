import { Link } from "@components/ui";
import { Flight } from "utils/types/flights";

type Props = {
    flight: Flight;
};

function FlightsCard({ flight }: Props) {
    const {
        flightIdentifier,
        expectedTime,
        score,
        originalTime,
        flightNumber,
        airport,
        date,
        url
    } = flight;

    const [year, month, day] = date.split("-");
    const dutchDate = `${day}-${month}-${year}`;

    return (
        <div
            key={flightIdentifier}
            className="group relative mb-5 rounded-md border border-gray-200 p-5 pb-20 text-gray-700"
        >
            <h2 className="mb-3 text-xl font-semibold text-gray-900">{airport}</h2>
            <p>Vlucht ID: {flightIdentifier}</p>
            <p>Vlucht nr.: {flightNumber}</p>
            <p>Originele tijd: {originalTime}</p>
            <p>Verwachte tijd: {expectedTime}</p>
            <p>Datum: {dutchDate}</p>
            <div className="flex flex-row items-center gap-3">
                Score: {Math.ceil(parseFloat(score))}
            </div>
            <Link
                href={url}
                className="absolute bottom-0 left-0 mt-5 md:opacity-0 md:group-hover:opacity-100"
            >
                <span>Bekijk vlucht</span>
            </Link>
        </div>
    );
}

export default FlightsCard;
