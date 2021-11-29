var selectedRow = null
/* this function handles html form submission*/
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
/*get the input data*/
function readFormData() {
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["email"] = document.getElementById("email").value;
    formData["country"] = document.getElementById("country").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

/*After HTML form submission, create a new record dynamically in HTML table with the following function*/

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.country;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
/*Reset the HTML form with the following JavaScript function*/
function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("country").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

/*edit operation for each row in HTML table with the following JavaScript function*/
/*for edit operation, we populate HTML form with row data*/

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("country").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

/*After edit operation, we need to show updated data in an HTML table*/
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.country;
    selectedRow.cells[3].innerHTML = formData.city;
}

/*Handled delete operation with the following function*/
/*we are using deleteRow() function to delete row from HTML table*/

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
/*added validation to the firstName field*/
function validate() {
    isValid = true;
    if (document.getElementById("firstName").value == "") {
        isValid = false;
        document.getElementById("firstNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
            document.getElementById("firstNameValidationError").classList.add("hide");
    }
    return isValid;
}