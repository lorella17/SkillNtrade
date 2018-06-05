     $(document).ready(function () {



         function skillSubmit(data) {
             // console.log("naaathing");
             // console.log(data);
             $.post("/api/skills", data).then( (res) => {
                 console.log(res);
                 window.location.href = '/skills'

             });

         }

         $('#skillForm').on('submit', function (event) {
             event.preventDefault();
             console.log('why');

             let data = {
                 name: $('#skillName').val().trim(),
                 email: $('#skillEmail').val().trim(),
                 skills: $('#skill').val().trim(),
                 category: $('#skillCategory').val().trim(),
                 title: $('#skillTitle').val().trim(),
                 compensation: $('#skillCompensation').val().trim(),
                 location: $('#skillLocation').val().trim(),
                 description: $('#skillDescription').val().trim()
             };


             skillSubmit(data)

         });

         var $btns = $('.filterButton').on('click', function () {
             if (this.id === 'all'){
                 $('#parent > div').fadeIn(450);
             }else{
                 var $el = $('.' + this.id).fadeIn(450);
                 $('parent > div').not($el).hide();
             }
                 $btns.removeClass ('active');
                $(this).addClass('active')
         });
         $('#search').on('input', function () {
             $btns.removeClass ('active');
             var matcher = new RegExp($(this).val(), 'gi');
             $('.skill').show().not(function () {
                 return matcher.test($(this).find('.name, .email, .skill, .category, .location, .compensation, .title, .description').text())
             }).hide();
         });

         $(document).on('click', '.skill', function () {
             console.log(`task has been clicked`);
             const name = $('#modalName');
             const title = $('#modalTitle');
             const category = $('#modalCategory');
             const skill = $('#modalSkill');

             const location = $('#modalLocation');


             const email = $('#modalEmail');
             const compensation = $('#modalCompensation');

             name.html(`${$(this).attr('data-name')}`);
             title.html(`Title: ${$(this).attr('data-title')}`);
             category.html(`Category: ${$(this).attr('data-category')}`);
             skill.html(`Skill: ${$(this).attr('data-skill')}`);
             compensation.html(`Compensation: ${$(this).attr('data-compensation')}`);

             location.html(`Location: ${$(this).attr('data-location')}`);


             email.html(`Email: ${$(this).attr('data-email')}`);


             $('#myModal').modal('show');

         })

     });