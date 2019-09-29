$(document).ready(function() {
  $("#signUpProject").on("click", function() {
    // var idToGrab = $(this).attr("data-id");
    // console.log(idToGrab);
    // const url = "/api/projects/" + idToGrab;
    // console.log(url);

    getProjects();

    function getProjects() {
      $.get("/api/projects", function(data) {
        console.log(data);
      });
    }
    // $.ajax({
    //   method: "PUT",
    //   url: "/api/projects",
    //   data: peopleNeeded
    // });
  });
});
