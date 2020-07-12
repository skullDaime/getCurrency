$( "#button" ).click(function() {
  var id = $("#researchBox").val();
    window.location.href = "/" + id + "/userDetail";
});


$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


//stile

$(document).ready(function() {
    $('.read-line-task').style.background-color = "blue";
});
