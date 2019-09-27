// const API = {
//   saveProject: function(projects) {
//     return $.ajax({
//       type: "POST",
//       url: "api/projects",
//       data: JSON.stringify(projects)
//     });
//   },
//   getProjects: function() {
//     return $.ajax({
//       url: "api/projects",
//       data: JSON.stringify(projects)
//     });
//   },
//   deleteProject: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id.id,
//       type: "DELETE"
//     });
//   }
// };

$(document).ready(function() {
  $("#submit").on("click", function(event) {
    alert("why dont you work");
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

    function captureFormData() {
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
    captureFormData();

    function addProject(projectData) {
      $.post("/api/projects", projectData).then(getProjects);
      console.log("THIS IS THE POST DATA" + projectData);
    }

    function getProjects() {
      $.get("/api/projects", function(data) {
        console.log("THIS IS THE GET DATA" + data);
      });
    }
  });

  $("#deletePost").on("click", function(event) {
    event.preventDefault();
    console.log("why dont you work");
    // const idToDelete = $(this)
    // .parent()
    // .attr("data-id");
    //   event.preventDefault();

    //   function deleteProject() {
    //     return $.ajax({
    //       url: "api/projects/" + this.id,
    //       type: "DELETE"
    //     }).then(function() {});
    //   }
    //   deleteProject(this.data-id);
  });
});

// const handleDeleteBtnClick = function() {
//   const idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteProjects(idToDelete).then(function() {});
// };

// // Add event listeners to the submit and delete buttons
// // $submitBtn.on("click", handleFormSubmit);
// $("#deleteButton").on("click", handleDeleteBtnClick);
