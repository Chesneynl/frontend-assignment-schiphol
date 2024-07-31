import debounce from "lodash/debounce";

import { useMemo, useState } from "react";
import { Input } from "@components/ui";
import type { Flight } from "utils/types/flights";
import { filterFlightsByDestination } from "@helpers/flights";

type Props = {
    setFilteredFlights: (flights: Flight[] | null) => void;
};

function SearchFlightsForm({ setFilteredFlights }: Props) {
    const [hasError, setHasError] = useState(false);
    const [destination, setDestination] = useState("");
    const [flights, setFlights] = useState<Flight[] | null>(null);

    const debouncedFetchData = useMemo(
        () =>
            debounce((searchQuery: string) => {
                fetch("/flights.json", {
                    method: "GET"
                })
                    .then(response => response.json())
                    .then(result => {
                        const filteredFlights = filterFlightsByDestination(
                            result.flights,
                            searchQuery
                        );
                        setFilteredFlights(filteredFlights);

                        setFlights(result.flights);
                        setHasError(false);
                    })
                    .catch(() => {
                        setFlights(null);
                        setHasError(true);
                    });
            }, 250),
        [setFlights]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value;

        setDestination(searchQuery);

        if (searchQuery.length < 3) return;

        if (!flights) {
            debouncedFetchData(searchQuery);
        } else {
            const filteredFlights = filterFlightsByDestination(flights, searchQuery);
            setFilteredFlights(filteredFlights);
        }
    };

    return (
        <div className="bg-schiphol-blue py-10 md:py-20">
            <h1 className="text-center text-4xl text-white md:text-6xl">Waar wil je naartoe?</h1>
            <div className="mx-5 mt-10 rounded-lg bg-white p-5 shadow-md md:mx-auto md:max-w-4xl">
                <Input
                    label="Plaats van bestemming"
                    name="destination"
                    placeholder="bijv. San Francisco"
                    required
                    value={destination}
                    onChange={handleInputChange}
                />

                {hasError && (
                    <div className="mt-3 text-dark-red">
                        Er is een fout opgetreden probeer het later opnieuw.
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchFlightsForm;
