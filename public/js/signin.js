$(document).ready(function() {
  $("#signin").on("click", function(event) {
    event.preventDefault();

    var username = $("#username")
      .val()
      .trim();
    const password = $("#password")
      .val()
      .trim();

    function captureUserData() {
      if (!username || !password) {
        return;
      }

      const user = {
        username: username,
        password: password
      };

      console.log(user);
    }

    //   function addNewUser(newUserData) {
    //     $.post("/api/users", newUserData)
    //       .then(getUsers(newUserData));
    //       console.log("THIS IS THE POST DATA" + newUserData)
    //   }

    //   function getUsers() {
    //     $.get("/api/users", function(data) {
    //       console.log(data);
    //       for (var i = 0; i < data.length; i++) {
    //         rowsToAdd.push(createAuthorRow(data[i]));
    //       }
    //       // renderAuthorList(rowsToAdd);
    //       // nameInput.val("");
    //     });
    //   }
    captureUserData();
  });
});
