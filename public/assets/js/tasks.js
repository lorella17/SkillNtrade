$(document).ready( () => {
    console.log(`why isn't this working????`);
    const taskSubmit = event => {
        event.preventDefault();
        const data = {
            email: $('#taskEmail').val().trim(),
            name: $('#taskName').val().trim(),
            category: $('#taskCategory option:selected').text().trim(),
            location: $('#taskLocation').val().trim(),
            compensation: $('#taskCompensation').val().trim(),
            tasks: $('#tasks').val().trim()
        };
        console.log(data);
    };
    console.log('recognizing js');
    $(document).on('submit', '#taskForm', taskSubmit());


});

