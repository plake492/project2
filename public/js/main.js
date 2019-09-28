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
    const address = $("#streetAddress")
      .val()
      .trim();
    const addressLine2 = $("#streetAddressLine2")
      .val()
      .trim();
    const city = $("#city")
      .val()
      .trim();
    const state = $("#state")
      .val()
      .trim();
    const zipCode = $("#zipCode")
      .val()
      .trim();
    const country = $("#country")
      .val()
      .trim();

    function captureFormData() {
      if (
        !title ||
        !category ||
        !description ||
        !peopleNeeded ||
        !date ||
        !address ||
        !city ||
        !state ||
        !zipCode ||
        !country
      ) {
        return;
      }

      const newProject = {
        title: title,
        category: category,
        description: description,
        peopleNeeded: peopleNeeded,
        date: date,
        address: address,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zipCode: zipCode,
        country: country
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

  $("#signUpProject").on("click", function(event) {
    event.preventDefault();
    console.log("poop");
  });

  $("#deletePost").on("click", function(event) {
    event.preventDefault();
    console.log("why dont you work");
  });
});
