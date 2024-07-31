import { useState } from "react";
import { SearchFlightsForm, FlightsOverview } from "@components/flights";
import type { Flight } from "utils/types/flights";

function App() {
    const [filteredFlights, setFilteredFlights] = useState<Flight[] | null>(null);

    return (
        <>
            <SearchFlightsForm setFilteredFlights={setFilteredFlights} />
            <FlightsOverview filteredFlights={filteredFlights} />
        </>
    );
}

export default App;
