$(document).ready(function () {
	$('#addBtn').click(function () {
		let val = $('#productInput').val().trim()
		if (val !== '') {
			$('#shoppingList').append(`<li class="list-group-item">${val}</li>`)
			$('#productInput').val('')
		}
	})

	$('#removeLastBtn').click(function () {
		$('#shoppingList li:last').remove()
	})

	$(document).on('click', '#shoppingList li', function () {
		let li = $(this)
		let text = li.text()

		li.fadeOut(150, function () {
			li.html(`<input type='text' class='edit' value='${text}'>`)
			li.fadeIn(150)

			$('.edit')
				.focus()
				.keypress(function (e) {
					if (e.which === 13) {
						// Enter
						let newText = $(this).val()
						li.fadeOut(150, function () {
							li.text(newText)
							li.fadeIn(150)
						})
					}
				})
		})

		li.toggleClass('active')
	})

	$('#addStartBtn').click(function () {
		let val = $('#productInput').val().trim()
		if (val !== '') {
			$('#shoppingList').prepend(`<li class="list-group-item">${val}</li>`)
			$('#productInput').val('')
		}
	})

	$('#addEndBtn').click(function () {
		let val = $('#productInput').val().trim()
		if (val !== '') {
			$('#shoppingList').append(`<li class="list-group-item">${val}</li>`)
			$('#productInput').val('')
		}
	})

	$('#clearBtn').click(function () {
		$('#shoppingList').empty()
	})

	$('#restoreBtn').click(function () {
		$('#shoppingList').html(`
            <li class="list-group-item">Chleb</li>
            <li class="list-group-item">Masło</li>
            <li class="list-group-item">Mleko</li>
        `)
	})

	$('#colorBtn').click(function () {
		$('#shoppingList li:even').css('background-color', '#e6ffe6')
	})

	$('#shoppingList').sortable()
	$('#shoppingList').disableSelection()

	$('#sortBtn').click(function () {
		let items = $('#shoppingList li').get()

		items.sort((a, b) => $(a).text().localeCompare($(b).text()))

		$('#shoppingList').empty().append(items)
	})

	$('#filterBtn').click(function () {
		let filter = $('#filterInput').val().toLowerCase()

		$('#shoppingList li').each(function () {
			let text = $(this).text().toLowerCase()
			$(this).toggle(text.includes(filter))
		})
	})
})
