import { useState } from 'react';
import { Button, Input } from '@components/ui';
import { Flight, FlightSort } from 'utils/types/flights';
import Select from '@components/ui/Select';
import { sortFlights } from 'utils/helpers/flights';

type Props = {
    setFlights: (flights: Flight[] | null) => void;
};

type QueryProps = {
    destination: string;
    sort: FlightSort;
};

function SearchFlightsForm({ setFlights }: Props) {
    const [query, setQuery] = useState<QueryProps>({
        destination: '',
        sort: 'date',
    });
    const [hasError, setHasError] = useState(false);
    const canSubmit = query.destination.length > 2;

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!canSubmit) return;

        fetch('/flights.json', {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((result) => {
                const filteredFlights = result.flights.filter((flight: Flight) =>
                    flight.airport.toLowerCase().includes(query.destination.toLowerCase()),
                );
                const sortedFlights = sortFlights(filteredFlights, query.sort);

                setFlights(sortedFlights);
                setHasError(false);
            })
            .catch(() => {
                setFlights(null);
                setHasError(true);
            });
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                method="post"
                encType="multipart/form-data"
                className="flex flex-col md:flex-row w-full items-end gap-3 mb-10"
            >
                <Input
                    label="Plaats van bestemming"
                    name="destination"
                    placeholder="bijv. San Francisco"
                    required
                    value={query.destination}
                    onChange={(e) =>
                        setQuery({
                            ...query,
                            destination: e.target.value,
                        })
                    }
                />
                <Select
                    label="Sorteer op"
                    name="sort"
                    options={[
                        { value: 'date', label: 'Datum' },
                        { value: 'time', label: 'Tijd' },
                    ]}
                    value={query.sort}
                    onChange={(e) =>
                        setQuery({
                            ...query,
                            sort: e.target.value as FlightSort,
                        })
                    }
                    required
                />
                <Button disabled={!canSubmit}>Zoeken</Button>
            </form>
            {hasError && <div className="mt-3 text-dark-red">Er is een fout opgetreden probeer het later opnieuw.</div>}
        </div>
    );
}

export default SearchFlightsForm;
