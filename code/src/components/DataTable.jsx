import React, { useState, useMemo } from 'react';
import { CSVLink } from 'react-csv';
import './DataTable.css';

export default function DataTable({ data }) {
  const [filterText, setFilterText] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const filteredData = useMemo(() => {
    return data.filter(item =>
      Object.values(item)
        .join(' ')
        .toLowerCase()
        .includes(filterText.toLowerCase())
    );
  }, [data, filterText]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sorted;
  }, [filteredData, sortConfig]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedData.slice(start, start + rowsPerPage);
  }, [sortedData, currentPage]);

  const requestSort = key => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div className="data-table">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />
        <CSVLink data={sortedData} filename="data.csv" className="btn-export">
          Export CSV
        </CSVLink>
      </div>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map(key => (
              <th key={key} onClick={() => requestSort(key)}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
                {sortConfig.key === key ? (
                  sortConfig.direction === 'ascending' ? ' ▲' : ' ▼'
                ) : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map(item => (
            <tr key={item.id}>
              {Object.values(item).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
