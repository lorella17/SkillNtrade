     $(document).ready(function () {


         function skillSubmit(data) {
             console.log("naaathing");
             console.log(data);
             $.post("/api/skills", data).then( () => {
                 window.location.href = '/skills'
             });

         }

         $('#skillForm').on('submit', function (event) {
             event.preventDefault();
             console.log('why');

             let name = $('#skillName').val().trim();
             let data = {
                 name: name,
                 email: $('#skillEmail').val().trim(),
                 skills: $('#skills').val().trim(),
                 // compensation: $('#skillCompensation').val().trim(),
                 category: $('#skillCategory').val().trim(),
                 location: $('#skillLocation').val().trim(),
                 description: $('#skillDescription').val().trim()
             };


             skillSubmit(data)
         })

     });