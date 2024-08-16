// className="rounded px-2 shadow-lg shadow-indigo-500/40 hover:shadow-indigo-700/20"
// import { React,useState } from 'react'
import { React } from 'react'
import warehouseData from '../components/testing_data/warehouseDashMock.json'

export default function WarehouseTable() {
  const { warehouse, plant } = warehouseData;

  return (
    <div>
        <div class="flex flex-row">
            <h1 class="font-bold pr-2">Safety Stock :</h1>
            <p class="font-light">{plant.type} Plant {plant.code}</p>
        </div>
      <table border="1" cellPadding="10">
        <tbody>
          {warehouse.lanes.map((lane, laneIndex) => (
            <tr key={laneIndex}>

              {lane.rows.map((row, rowIndex) => (
                <td key={rowIndex} class='px-5'>
                {row.positions.length > 0 ? (
                  // Stack buttons inside lane-row cell
                  row.positions.slice().reverse().map((position, posIndex) => (
                    <div key={posIndex} class="flex flex-col my-0.5">
                      <button
                        style={{
                          backgroundColor: getColorFromStatus(position.pallet.pack_age_status),
                        }}
                        className="rounded px-4 shadow-lg shadow-indigo-500/40 hover:shadow-indigo-700/20"
                      >
                        {position.pallet.number}

                        <p className='text-xs opacity-30 pb-1'>
                            {position.location.layer}
                        </p>

                      </button>
                    </div>
                  ))
                ) : (
                  <button
                    style={{
                      backgroundColor: 'gray',
                    }}
                    className="rounded px-4 bg-indigo-500 opacity-20"
                    disabled
                  >
                    Empty
                  </button>
                )}
              </td>

              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Helper function to determine the color based on the status
function getColorFromStatus(status) {
  switch (status) {
    case 'green':
      return '#84cc16';
    case 'yellow':
      return '#f59e0b';
    case 'red':
      return '#b91c1c';
    default:
      return 'gray'; // Default color if status is unknown
  }
}
