import React from "react";
import { Pie } from "react-chartjs-2";

export default function DataGraphic(props) {
  const { data, labels } = props;
  return (
    <>
      <Pie
        data={{
          labels: labels,
          datasets: [
            {
              label: "Dataset 1",
              data: data,
              backgroundColor: [
                "rgba(202, 206, 4, 0.637)",
                "rgba(0, 162, 255, 0.801)",
                "rgba(129, 2, 2, 0.671)",
                "rgba(2, 129, 80, 0.671)",
              ],
              borderWidth: 2,
            },
          ],
        }}
      />
    </>
  );
}
