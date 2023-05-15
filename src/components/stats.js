const stats = [
    { name: 'Tryck', value: '1050', unit: 'hPa' },
    { name: 'Förbrukning senaste 5 min', value: '0.4', unit: 'l' },
    { name: 'Motortemp', value: '70', unit: '°C'},
    // { name: 'Effekt', value: '0.85', unit: 'λ' },
  ]
  
//   const stats = [
//     { name: 'Total Subscribers', stat: '71,897' },
//     { name: 'Avg. Open Rate', stat: '58.16%' },
//     { name: 'Avg. Click Rate', stat: '24.57%' },
//   ]
  
  export default function Example() {
    return (
      <div>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.value} {item.unit}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }

//   export default function Stats() {
//     return (
//       <div className="rounded bg-white">
//         <div className="mx-auto max-w-7xl">
//           <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-3">
//             {stats.map((stat) => (
//               <div key={stat.name} className="px-4 py-6 sm:px-6 lg:px-8">
//                 <p className="text-sm font-medium leading-6 text-gray-600">{stat.name}</p>
//                 <p className="mt-2 flex items-baseline gap-x-2">
//                   <span className="text-4xl font-semibold tracking-tight text-gray-900">{stat.value}</span>
//                   {stat.unit ? <span className="text-sm text-gray-600">{stat.unit}</span> : null}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     )
//   }
  