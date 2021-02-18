import ThingList from './components/ThingList.js'

function App() {
  const driverState = {
    apiUrl: 'http://localhost:3000/drivers',
    listKey: 'drivers',
    itemKey: 'driver'
  }

  const tripState = {
    apiUrl: 'http://localhost:3000/trips',
    listKey: 'trips',
    itemKey: 'trip'
  }

  const reviewState = {
    apiUrl: 'http://localhost:3000/reviews',
    listKey: 'reviews',
    itemKey: 'review'
  }

  return (
    <div className="App">
      <header className="App-header">
      <ThingList data={driverState} />
        <ThingList data={tripState} />
        <ThingList data={reviewState} />
      </header>
    </div>
  );
}

export default App;