import { Select } from "@components/ui";
import { useState } from "react";
import { sortAndLimitFlights } from "@helpers/flights";
import type { Flight, FlightSort } from "utils/types/flights";
import { FlightCard } from "@components/flights";

type Props = {
    filteredFlights: Flight[] | null;
};

function FlightsOverview({ filteredFlights }: Props) {
    const [sort, setSort] = useState<FlightSort>("date");

    if (!filteredFlights) return null;

    if (filteredFlights.length === 0) {
        return (
            <div className="mx-auto mt-5 text-center md:max-w-4xl">
                <p>Geen vluchten gevonden</p>
            </div>
        );
    }

    const sortedFlights = sortAndLimitFlights(filteredFlights, sort);

    return (
        <div className="mx-auto mt-5 flex flex-col gap-3 px-5 md:max-w-4xl">
            <div className="flex max-w-96">
                <Select
                    label="Sorteer op"
                    name="sort"
                    options={[
                        {
                            value: "date",
                            label: "Datum"
                        },
                        {
                            value: "time",
                            label: "Tijd"
                        }
                    ]}
                    value={sort}
                    onChange={e => setSort(e.target.value as FlightSort)}
                    required
                />
            </div>
            <div className="gap-4 md:grid md:grid-cols-3">
                {sortedFlights.map(flight => (
                    <FlightCard key={`${sort}-${flight.flightIdentifier}`} flight={flight} />
                ))}
            </div>
        </div>
    );
}

export default FlightsOverview;
