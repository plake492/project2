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
    const people_needed = $("#people_needed")
      .val()
      .trim();
    const date = $("#date")
      .val()
      .trim();
    const location = $("#location")
      .val()
      .trim();
      
    if (
      !title.val().trim() ||
      !category.val().trim() ||
      !description.val().tirm() ||
      !people_needed.val().trim() ||
      !date.val().tirm() ||
      !location.val().tirm()
    ) {
      return;
    }

    const newPost = {
      title: title,
      category: category,
      description: description,
      people_needed: people_needed,
      date: date,
      location: location
    };

    console.log(newPost);
  });
});
