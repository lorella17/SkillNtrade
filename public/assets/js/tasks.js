$(document).ready( function() {

    function taskSubmit(data) {



        console.log(data);
        $.post("/api/tasks", data).then( data => {
            console.log(data);
            window.location.href = '/tasks'
        });
    }
    console.log('recognizing js');
    $('#taskForm').on('submit', function(event) {
        let data = {
            name: $('#taskName').val().trim(),
            email: $('#taskEmail').val().trim(),
            tasks: $('#tasks').val().trim(),
            title: $('#taskTitle').val().trim(),
            compensation: $('#taskCompensation').val().trim(),
            deadline: $('#taskDeadline').val().trim(),
            category: $('#taskCategory ').val().trim()
        };

        event.preventDefault();
        taskSubmit(data)
    });
    //
    // const options = {
    //     valueNames: [
    //         'title',
    //         'category',
    //         'deadline',
    //         { data: ['id']},
    //         {attr: 'data-timestamp', name: 'timestamp'}
    //     ],
    //     page: 10,
    //     pagination: true
    // };
    // var taskList = new List('taskList', options)

    var $btns = $('.filterButton').on('click', function(){
        if(this.id === 'all'){
            $('#parent > div').fadeIn(450);
        }else{
            var $el = $('.' + this.id).fadeIn(450);
            $('#parent > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active')
    });

    $('#search').on('input', function() {
        $btns.removeClass('active');
        var matcher = new RegExp($(this).val(), 'gi');
        $('.task').show().not(function(){
            return matcher.test($(this).find('.name, .title, .tasks, .deadline, .compensation').text())
        }).hide();
    })

});

