$(document).ready(function () {

    function taskSubmit(data) {


        console.log(data);
        $.post("/api/tasks", data).then(data => {
            console.log(data);
            window.location.href = '/tasks'
        });
    }

    console.log('recognizing js');
    $('#taskForm').on('submit', function (event) {
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

    var $btns = $('.filterButton').on('click', function () {
        if (this.id === 'all') {
            $('#parent > div').fadeIn(450);
        } else {
            var $el = $('.' + this.id).fadeIn(450);
            $('#parent > div').not($el).hide();
        }
        $btns.removeClass('active');
        $(this).addClass('active')
    });

    $('#search').on('input', function () {
        $btns.removeClass('active');
        var matcher = new RegExp($(this).val(), 'gi');
        $('.task').show().not(function () {
            return matcher.test($(this).find('.name, .title, .tasks, .deadline, .compensation').text())
        }).hide();
    })

    $(document).on('click', '.task', function () {
        console.log(`task has been clicked`);
        const name = $('#modalName');
        const title = $('#modalTitle');
        const category = $('#modalCategory');
        const task = $('#modalTask');
        const deadline = $('#modalDeadline');
        const email = $('#modalEmail');
        const compensation = $('#modalCompensation');

        name.html(`${$(this).attr('data-name')}`);
        title.html(`Title: ${$(this).attr('data-title')}`);
        category.html(`Category: ${$(this).attr('data-category')}`);
        task.html(`Task: ${$(this).attr('data-task')}`);
        compensation.html(`Compensation: ${$(this).attr('data-compensation')}`);
        deadline.html(`Deadline: ${$(this).attr('data-deadline')}`);
        email.html(`Email: ${$(this).attr('data-email')}`);


        $('#myModal').modal('show');

    })

});

