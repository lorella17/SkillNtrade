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

             // let name = $('#skillName').val().trim();
             let data = {
                 name: $('#skillName').val().trim(),
                 email: $('#skillEmail').val().trim(),
                 skills: $('#skill').val().trim(),
                 category: $('#skillCategory').val().trim(),
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
                 return matcher.test($(this).find('.name, .email, .skill, .category, .description').text())
             }).hide();
         })

     });