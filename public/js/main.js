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

    function captureFormData(event) {
      if (
        !title ||
        !category ||
        !description ||
        !people_needed ||
        !date ||
        !location
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
      addPost(newPost);
    }

    function addPost(postData) {
      $.post("/api/posts", postData)
        .then(getPosts);
        console.log("THIS IS THE POST DATA" + postData)

    }

    function getPosts() {
      $.get("/api/posts", function(data) {
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
