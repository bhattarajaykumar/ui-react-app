import { useEffect, useState } from "react"

function App() {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch("https://api.publicapis.org/entries")
      .then(response => response.json())
      .then(json => setEntries(json.entries))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <div className="App">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Entries</h1>
          <table border={1}>
            <tr>
              <th>API</th>
              <th>Description</th>
              <th>Auth</th>
              <th>HTTPS</th>
              <th>Cors</th>
              <th>Link</th>
              <th>Category</th>
            </tr>
            {entries.map(entry => (
              <tr key={entry.API}>
                <td>{entry.API}</td>
                <td>{entry.Description}</td>
                <td>{entry.Auth}</td>
                <td>{(entry.HTTPS) ? "true" : "false"}</td>
                <td>{entry.Cors}</td>
                <td>{entry.Link}</td>
                <td>{entry.Category}</td>
              </tr>
            ))}
          </table>
        </>
      )}
    </div>
  )
}

export default App