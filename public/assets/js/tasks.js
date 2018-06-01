$(document).ready( function() {
    console.log(`why isn't this working????`);

    function taskSubmit(data) {



        console.log(data);
        $.post("/api/tasks", data).then( () => {
            window.location.href = '/tasks'
        });
    }
    console.log('recognizing js');
    $('#taskForm').on('submit', function(event) {
        let name = $('#taskName').val().trim();
        let data = {
            name: name,
            email: $('#taskEmail').val().trim(),
            tasks: $('#tasks').val().trim(),
            compensation: $('#taskCompensation').val().trim(),
            category: $('#taskCategory ').val().trim(),
            location: $('#taskLocation').val().trim()
        };

        event.preventDefault();
        taskSubmit(data)
    });

});

