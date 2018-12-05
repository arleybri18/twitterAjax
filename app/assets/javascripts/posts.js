  function PostNewView() {
    alert("Hola Jade")
  }

  function PostIndexView() {
    $('form').submit(function (e) {
      e.preventDefault()
      var $form = $(this);
      var url = $form.attr('action');

      $.ajax({
        type: "POST",
        url: url,
        data: $form.serialize(), // serializes the form's elements.
        dataType: 'json',
        success: function (data) {

          $('tbody').append(`<tr><td>${data.id}</td><td>${data.title}</td></tr>`)
          $(':input[type=submit]').prop('disabled', false)
        }
      });
      $form.trigger('reset')
    })
    $('boton-post').on('click',function(e){
      e.preventDefault()
            $.ajax({
              type: "GET",
              url: '/',
              dataType: 'json',
              success: function (data) {

               console.log(data)
              }
            });
    })
  }

  // Post.prototype.load = function(){
  //   alert("Hola Jade")
  // }
