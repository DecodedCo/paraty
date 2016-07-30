// 1. When someone submits a form:
jQuery("form").submit(function() {
  // 2. Perform an AJAX request ($ is a shortcut for jQuery):
  $.ajax({
    // 3. Where to send data: use the URL from the form's action attribute
    url: $("form").attr("action"),
    // 4. Send the data from the input (with out id)
    data: $("form").serialize(),
    // 5. What to do if data submits successfully:
    success: function(result){
      // 6. Hide the form now the user has given us information in (and change the message).
      $("form").hide();
      $("section").append("<h2>Thank you for rating!</h2><h2><button onClick='location.reload()'>Rate another beer</button> <button onClick='window.location.assign(\"https://decd.co/paraty-results\")'>View results</button>");
    } // END success
  }); // END ajax
  // 7. Allow form to submit without reloading the page
  event.preventDefault();
}) // END submit

$("form").after("<button onClick='window.location.assign(\"https://decd.co/paraty-results\")'>View results</button>");