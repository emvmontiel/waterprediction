const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// Toggle sidebar
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})

// jQuery for dropdown box
$(".dropdown-el").click(function (e) {
	e.preventDefault();
	e.stopPropagation();
	$(this).toggleClass("expanded");
	$("#" + $(e.target).attr("for")).prop("checked", true);
  });
  $(document).click(function () {
	$(".dropdown-el").removeClass("expanded");
  });

// Prediction result from backend
document.getElementById('result').innerText = "";