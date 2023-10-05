// Define an interface named Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: 'Mama',
  lastName: 'Danger',
  age: 19,
  location: 'Douala',
};

const student2: Student = {
  firstName: 'Dissou',
  lastName: 'Bare',
  age: 25,
  location: 'Brazzaville',
};

// Create an array containing the two students
const studentsList: Student[] = [ student1, student2 ];

// Render a table using Vanilla JavaScript
const renderTable = () => {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  // Create an header for the table
  const headerRow = document.createElement('tr');
  const firstNameHeader = document.createElement('th');
  const lastNameHeader = document.createElement('th');
  const ageHeader = document.createElement('th');
  const locationHeader = document.createElement('th');

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
  studentsList.forEach((student: Student) => {
    // Create a row in the table
    const row = document.createElement('tr');

    // Create a cell for each student property
    const firstNameCell = document.createElement('td');
    const lastNameCell = document.createElement('td');
    const ageCell = document.createElement('td');
    const locationCell = document.createElement('td');

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
}

renderTable();
