import { useState } from 'react';
import { SearchFlightsForm, FlightsOverview } from '@components/flights';
import { Flight } from 'utils/types/flights';

function App() {
    const [flights, setFlights] = useState<Flight[] | null>(null);

    return (
        <div className="p-5">
            <SearchFlightsForm setFlights={setFlights} />
            <FlightsOverview flights={flights} />
        </div>
    );
}

export default App;
