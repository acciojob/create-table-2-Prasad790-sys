function createTable() {
    // Prompt for number of rows
    const rows = prompt('Input number of rows');
    // Prompt for number of columns
    const columns = prompt('Input number of columns');

    // Get the table element
    const table = document.getElementById('myTable');
    table.innerHTML = ''; // Clear any existing table content

    // Convert inputs to integers
    const rowCount = parseInt(rows, 10);
    const colCount = parseInt(columns, 10);

    // Create table rows and cells
    for (let i = 0; i < rowCount; i++) {
        const row = document.createElement('tr');
        
        for (let j = 0; j < colCount; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row-${i} Column-${j}`; // Set cell text
            row.appendChild(cell);
        }
        
        table.appendChild(row);
    }
}
