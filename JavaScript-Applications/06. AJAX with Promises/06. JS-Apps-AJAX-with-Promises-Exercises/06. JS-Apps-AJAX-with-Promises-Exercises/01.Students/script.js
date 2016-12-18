$(document).ready(function () {
    const kinveyKey = "kid_BJ-3lu-fe";
    const kinveyURL = "https://baas.kinvey.com/appdata/"+kinveyKey + "/students";
    const username = "guest";
    const password = "guest";
    const base64auth = btoa(username+":"+password);
    const authHeader = {"Authorization":"Basic " + base64auth};
    const contentType = "application/json";

    let result = $('#results');

    $('#btnLoad').on('click', loadStudents);
    $('#btnAdd').on('click', createStudent);

    function createStudent() {
        let studentData = getStudentData();
        let postRequest = {
            method: "POST",
            url: kinveyURL,
            headers: authHeader,
            contentType: contentType,
            data:studentData
        };
        $.ajax(postRequest).then(loadStudents).catch(displayError);
    }
    function getStudentData() {
        let selector = $('#addStudentFrom');
        let ID = selector.find('.ID').val();
        let FirstName = selector.find('.FirstName').val();
        let LastName = selector.find('.LastName').val();
        let FacultyNumber = selector.find('.FacultyNumber').val();
        let Grade = selector.find('.Grade').val();

        return JSON.stringify({
            'ID':ID,
            'FirstName':FirstName,
            'LastName':LastName,
            'FacultyNumber':FacultyNumber,
            'Grade':Grade
        });
    }
    function loadStudents() {
		let tr = result.find("tr:not(:first-child)");
		tr.remove();

        $.ajax({
            url: kinveyURL,
            headers: authHeader
        }).then(displayStudents).catch(displayError)
    }
    function displayStudents(students) {
        students.sort((a,b)=> a.ID - b.ID);
        for (let student of students) {
            result.append($('<tr>')
                .append($('<td>')
                    .text(student.ID))
                .append($('<td>')
                    .text(student.FirstName))
                .append($('<td>')
                    .text(student.LastName))
                .append($('<td>')
                    .text(student.FacultyNumber))
                .append($('<td>')
                    .text(student.Grade)));
        }
    }
    
    function displayError(error) {
        console.log(error);
    }
});