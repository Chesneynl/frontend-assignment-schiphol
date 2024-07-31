import { useMemo, useState } from "react";
import { Input } from "@components/ui";
import type { Flight } from "utils/types/flights";

import debounce from "lodash/debounce";

type Props = {
    destination: string;
    flights: Flight[] | null;
    setDestination: (destination: string) => void;
    setFlights: (flights: Flight[] | null) => void;
};

function SearchFlightsForm({ destination, flights, setDestination, setFlights }: Props) {
    const [hasError, setHasError] = useState(false);

    const debouncedFetchData = useMemo(
        () =>
            debounce(() => {
                fetch("/flights.json", {
                    method: "GET"
                })
                    .then(response => response.json())
                    .then(result => {
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

        if (searchQuery.length > 2 && !flights) {
            debouncedFetchData();
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
