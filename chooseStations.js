// the sample test input
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

let appropriateStations = [];
function chooseStations(stations)
{
  for (const station of stations)
  {
    let [name , capacity, type] = station;
    if (capacity >= 20 && (type === 'school' || type === 'community centre'))
    {
      appropriateStations.push(name);
    }
  }
  return appropriateStations
}

console.log(chooseStations(stations));