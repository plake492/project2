$(document).ready(function() {
    $("#signup").on("click", function(event) {
      event.preventDefault();
  
      const username = $("#newUsername")
        .val()
        .trim();
      const password = $("#newPassword")
        .val()
        .trim();
      const email = $("#newEmail")
        .val()
        .trim();
      const name= $("#newName")
        .val()
        .trim();
      const address = $("#newAddress")
        .val()
        .trim();

  
      function captureNewUserData(event) {
        if (
          !username ||
          !password||
          !email ||
          !name ||
          !address 
        ) {
          return;
        }
  
        const newUser = {
          username: username,
          password: password,
          email: email,
          name: name,
          address: address
        };
  
        console.log(newUser);
        addNewUser(newUser);
      }

      $("form").trigger("reset");
      
  
      function addNewUser(newUserData) {
        $.post("/api/users", newUserData)
          .then(getUsers(newUserData));
          console.log("THIS IS THE POST DATA" + newUserData)
  
      }
  
      function getUsers() {
        $.get("/api/users", function(data) {
          console.log(data);
          // for (var i = 0; i < data.length; i++) {
          //   rowsToAdd.push(createAuthorRow(data[i]));
          // }
          // renderAuthorList(rowsToAdd);
          // nameInput.val("");
        });
      }
      captureNewUserData();
    });
  });
  