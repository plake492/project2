$(document).ready(function() {
    $("#signin").on("click", function(event) {
      event.preventDefault();
  
      const username = $("#username")
        .val()
        .trim();
      const password = $("#password")
        .val()
        .trim();
    
      function captureUserData(event) {
        if (
          !username ||
          !password
        ) {
          return;
        }
  
        const userData = {
          username: username,
          password: password,

        };
  
        console.log(userData);      

      loginUser(userData.username, userData.password);
      $("form").trigger("reset");
      }
    
  
      function loginUser(username, password) {
      $.post("/api/signin", {
        username: username, 
        password: password
      }).then(function(data) {
        console.log(data); 
      });
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

  