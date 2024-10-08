import React from "react";
import data from './data';
import Navbar from "./components/Navbar";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="cards">
        {data.map((trip, index) => (
          <Card
            key={index}
            title={trip.title}
            location={trip.location}
            description={trip.description}
            startDate={trip.startDate}
            endDate={trip.endDate}
            imageUrl={trip.imageUrl}
            googleMapsUrl={trip.google}
          />
        ))}
      </div>
    </div>
  );
}
