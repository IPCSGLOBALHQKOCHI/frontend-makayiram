const Table = () => {
  const data = [
    { room: 'Orion', season: 11750, Peak: 15275,'NYE on MAP': 20275 },
    { room: 'Gemini room', season: 12750, Peak: 16575, 'NYE on MAP': 21575 },
    { room: 'Gemini Suite', season: 14700, Peak: 19110, 'NYE on MAP': 24110 },
    { room: 'Capricon Apt', season: 23900, Peak: 31070, 'NYE on MAP': 41070 },
    { room: 'Taurus Cottage', season: 27600, Peak: 35880, 'NYE on MAP': 48380 }
  ];

  return (
    <div className="overflow-x-auto md:rounded-lg text-sm md:text-base text-start">
      <table className="table-auto md:rounded-lg w-full border-collapse border-2 border-gray-300 h-96">
        <thead className='rounded-lg'>
          <tr className="bg-gray-200">
            <th className="border-2 border-gray-400 px-4 py-2 text-center font-bold text-xl">Room</th>
            <th className="border-2 border-gray-400 px-4 py-2 text-center font-bold text-xl">Regular season</th>
            <th className="border-2 border-gray-400 px-4 py-2 text-center font-bold text-xl">Peak season</th>
            <th className="border-2 border-gray-400 px-4 py-2 text-center font-bold text-xl">NYE on MAP</th>
          </tr>
        </thead>
        <tbody className='rounded-lg'>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border-2 border-gray-300 px-4 py-2 text-center font-medium text-xl">{row.room}</td>
              <td className="border-2 border-gray-300 px-4 py-2 text-center font-medium text-xl">{row.season}</td>
              <td className="border-2 border-gray-300 px-4 py-2 text-center font-medium text-xl">{row.Peak}</td>
              <td className="border-2 border-gray-300 px-4 py-2 text-center font-medium text-xl">{row['NYE on MAP']}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className='text-lg font-bold pt-4'>* Tariff shown is calculated in INR. </p>
    </div>
  );
};

export default Table;