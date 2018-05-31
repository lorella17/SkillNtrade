$('document').ready( () => {
    console.log(`why isn't this working????`);
    const data = {
        name: $('#taskName').val(),
        email: $('#taskEmail').val(),
        tasks: $('#tasks').val(),
        compensation: $('#taskCompensation').val(),
        category: $('#taskCategory option:selected').text(),
        location: $('#taskLocation').val()
    };
    function taskSubmit(event) {

        event.preventDefault();


        console.log(data);
        $.post("/api/tasks", data).then( () => {
            window.location.href = '/tasks'
        });
    }
    console.log('recognizing js');
    $('#addTask').on('click', taskSubmit(event));

});

