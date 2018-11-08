$(document).ready(function () {
  // Get all burgers on page load/refresh
  $.ajax({
    type: 'GET',
    url: '/',
    success: response => {
      console.log('successful GET')
    }
  })

  $('#eat, #make').hide()

  // Add a burger
  $(document).on('submit', '.create-form', function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault()

    const newRestaurant = {
      restaurant_name: $('#restName').val().trim(),
      location: $('#location').val().trim(),
      cuisine: $('#cuisine').val().trim()
    }

    $.ajax('/api/restaurants', {
      method: 'POST',
      data: newRestaurant
    }).then(function (response) {
      console.log('restaurant added ')
      window.location = '/'
    })
  })

  $(document).on('click', '.doneBtn', function (event) {
    const id = $(this).data('id')
    const updateData = {
      id: id,
      notes: $('#id' + id + 'notes').val(),
      date: $('#id' + id + 'date').val()
    }
    console.log(updateData)
    // Send the DELETE request.
    $.ajax(`/api/restaurants/${updateData.id}/${updateData.notes}/${updateData.date}`, {
      type: 'PUT',
      data: updateData
    })
      .then(result => {
        console.log('updated ' + result.insertId)
        // Reload the page to get the updated list
        window.location = '/'
      })
  })
})
