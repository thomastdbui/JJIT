// components/MapViewer.tsx

"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Layout, Data } from "plotly.js"; // or "plotly.js"


const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const AVAILABLE_YEARS = Array.from({ length: 2023 - 1998 }, (_, i) => 1998 + i);

export default function MapViewer() {
  const [year, setYear] = useState<number>(2020);

//   const [plotData, setPlotData] = useState<null>(null);
  const [plotData, setPlotData] = useState<{
    data: Data[];
    layout: Partial<Layout>;
  } | null>(null);


  useEffect(() => {
    fetch(`/maps/${year}.json`)
      .then((res) => res.json())
      .then(setPlotData)
      .catch(() => setPlotData(null));
  }, [year]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">
        Climate & GDP by State - {year}
      </h1>
      <select
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        className="mb-4 border px-3 py-2 rounded"
      >
        {AVAILABLE_YEARS.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {plotData ? (
        <Plot
          data={plotData.data}
          layout={plotData.layout}
          useResizeHandler
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
