export const Table = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Task Description</th>
          <th>Task Priority</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Write internship report</td>
          <td>7</td>
        </tr>
        <tr>
          <td>Vet resume</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Finish outstanding jobs</td>
          <td>10</td>
        </tr>
      </tbody>
    </table>
  );
};
