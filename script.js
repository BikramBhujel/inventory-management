// Hardcoded users for login authentication
const users = [
    { username: 'admin', password: 'password123' }
];

// Array to store inventory records
const records = [];

// Login function
function login(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if user exists
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        // Show dashboard and hide login section
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('dashboard-section').style.display = 'block';
    } else {
        alert('Invalid login credentials!');
    }
}

// Add record function
function addRecord(event) {
    event.preventDefault(); // Prevent form submission

    // Create a new record object
    const record = {
        id: document.getElementById('id_number').value,
        name: document.getElementById('name').value,
        program: document.getElementById('program').value,
        country: document.getElementById('country').value,
        equipment: document.getElementById('equipment').value,
        model: document.getElementById('model').value,
        assignmentDate: document.getElementById('assignment_date').value,
        replacementDue: document.getElementById('replacement_due').value,
    };

    // Add the record to the records array
    records.push(record);
    updateTable(); // Refresh the table
}

// Update table with records
function updateTable() {
    const tableBody = document.querySelector('#inventory-table tbody');
    tableBody.innerHTML = ''; // Clear existing rows

    // Populate the table with updated records
    records.forEach((record, index) => {
        const row = `<tr>
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.program}</td>
            <td>${record.country}</td>
            <td>${record.equipment}</td>
            <td>${record.model}</td>
            <td>${record.assignmentDate}</td>
            <td>${record.replacementDue}</td>
            <td><button onclick="deleteRecord(${index})">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

// Delete a record by index
function deleteRecord(index) {
    records.splice(index, 1); // Remove record from the array
    updateTable(); // Refresh the table
}
