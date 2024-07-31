import { useState } from "react";
import { SearchFlightsForm, FlightsOverview } from "@components/flights";
import { Flight } from "utils/helpers2/flights";

function App() {
    const [flights, setFlights] = useState<Flight[] | null>(null);
    const [destination, setDestination] = useState<string>("");

    return (
        <>
            <SearchFlightsForm
                setFlights={setFlights}
                flights={flights}
                destination={destination}
                setDestination={setDestination}
            />
            <FlightsOverview flights={flights} destination={destination} />
        </>
    );
}

export default App;
