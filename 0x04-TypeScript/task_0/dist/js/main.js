// Create two students
var student1 = {
    firstName: 'Mama',
    lastName: 'Danger',
    age: 19,
    location: 'Douala',
};
var student2 = {
    firstName: 'Dissou',
    lastName: 'Bare',
    age: 25,
    location: 'Brazzaville',
};
// Create an array containing the two students
var studentsList = [student1, student2];
// Render a table using Vanilla JavaScript
var renderTable = function () {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    // Create an header for the table
    var headerRow = document.createElement('tr');
    var firstNameHeader = document.createElement('th');
    var lastNameHeader = document.createElement('th');
    var ageHeader = document.createElement('th');
    var locationHeader = document.createElement('th');
    // Fill the corresponding values for the header
    firstNameHeader.textContent = 'First Name';
    lastNameHeader.textContent = 'Last Name';
    ageHeader.textContent = 'Age';
    locationHeader.textContent = 'Location';
    // Apply left alignment to the header cells
    firstNameHeader.style.textAlign = 'left';
    lastNameHeader.style.textAlign = 'left';
    ageHeader.style.textAlign = 'left';
    locationHeader.style.textAlign = 'left';
    // Append to the header of the table
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(lastNameHeader);
    headerRow.appendChild(ageHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);
    // Traverse studentsList array and create a row with each student
    studentsList.forEach(function (student) {
        // Create a row in the table
        var row = document.createElement('tr');
        // Create a cell for each student property
        var firstNameCell = document.createElement('td');
        var lastNameCell = document.createElement('td');
        var ageCell = document.createElement('td');
        var locationCell = document.createElement('td');
        // Fill the corresponding values of each cell
        firstNameCell.textContent = student.firstName;
        lastNameCell.textContent = student.lastName;
        ageCell.textContent = student.age.toString();
        locationCell.textContent = student.location;
        // Append the cells to the row
        row.appendChild(firstNameCell);
        row.appendChild(lastNameCell);
        row.appendChild(ageCell);
        row.appendChild(locationCell);
        // Append the row to the body of the table
        tbody.appendChild(row);
    });
    // Add inline CSS to style the table
    table.style.borderCollapse = 'collapse';
    table.style.width = '50%';
    table.style.border = '1px solid #ddd';
    // Style the table header
    thead.style.backgroundColor = '#f2f2f2';
    // Append the header & the body to the table
    table.appendChild(thead);
    table.appendChild(tbody);
    // Append the table to the body of the document
    document.body.appendChild(table);
};
renderTable();
//# sourceMappingURL=main.js.map