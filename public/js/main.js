$(document).ready(function() {
  $("#submit").on("click", function(event) {
    event.preventDefault();


    const title = $("#title")
      .val()
      .trim();
    const category = $("#category")
      .val()
      .trim();
    const description = $("#description")
      .val()
      .trim();
    const peopleNeeded = $("#people_needed")
      .val()
      .trim();
    const date = $("#date")
      .val()
      .trim();
    const location = $("#location")
      .val()
      .trim();

    function captureFormData(event) {
      if (
        !title ||
        !category ||
        !description ||
        !peopleNeeded ||
        !date ||
        !location
      ) {
        return;
      }

      const newProject = {
        title: title,
        category: category,
        description: description,
        peopleNeeded: peopleNeeded,
        date: date,
        location: location
      };

      console.log(newProject);
      addProject(newProject);
    }

    function addProject(projectData) {
      $.post("/api/projects", projectData)
        .then(getProjects);
        console.log("THIS IS THE POST DATA" + projectData)

    }

    function getProjects() {
      $.get("/api/projects", function(data) {
        console.log("THIS IS THE GET DATA" + data);
        // var rowsToAdd = [];
        // for (var i = 0; i < data.length; i++) {
        //   rowsToAdd.push(createAuthorRow(data[i]));
        // }
        // renderAuthorList(rowsToAdd);
        // nameInput.val("");
      });
    }
    captureFormData();
  });
});
