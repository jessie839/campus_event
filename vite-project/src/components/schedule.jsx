export default function Schedule() {
  return (
    <section id="schedule" className="schedule">
      <h2 className="section-title">Event Schedule</h2>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Venue</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tech Fest 2026</td>
              <td>Oct 15, 2026</td>
              <td>Auditorium</td>
              <td>Technical</td>
            </tr>
            <tr>
              <td>Cultural Day</td>
              <td>Oct 20, 2026</td>
              <td>Main Hall</td>
              <td>Cultural</td>
            </tr>
            <tr>
              <td>Sports Meet</td>
              <td>Oct 28, 2026</td>
              <td>Sports Ground</td>
              <td>Sports</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}