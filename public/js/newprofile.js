$(document).ready(function() {
  $("#signup").on("click", function(event) {
    event.preventDefault();

  
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
        $.post("/api/signup", newUserData)
          .then(getUsers(newUserData));
          console.log("THIS IS THE POST DATA" + newUserData)
  
      }
  
      function getUsers() {
        $.get("/api/signup", function(data) {
          console.log(data);
          // for (var i = 0; i < data.length; i++) {
          //   rowsToAdd.push(createAuthorRow(data[i]));
          // }
          // renderAuthorList(rowsToAdd);
          // nameInput.val("");
        });

    const username = $("#newUsername")
      .val()
      .trim();
    const password = $("#newPassword")
      .val()
      .trim();
    const email = $("#newEmail")
      .val()
      .trim();
    const name = $("#newName")
      .val()
      .trim();
    const address = $("#newStreetAddress")
      .val()
      .trim();
    const addressLine2 = $("#newStreetAddressLine2")
      .val()
      .trim();
    const city = $("#newCity")
      .val()
      .trim();
    const state = $("#newState")
      .val()
      .trim();
    const zipCode = $("#newZipCode")
      .val()
      .trim();
    const country = $("#newCountry")
      .val()
      .trim();

    function captureNewUserData() {
      if (
        !username ||
        !password ||
        !email ||
        !name ||
        !address ||
        !city ||
        !state ||
        !zipCode ||
        !country
      ) {
        return;
      }

      const newUser = {
        username: username,
        password: password,
        email: email,
        name: name,
        address: address,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zipCode: zipCode,
        country: country
      };

      console.log(newUser);
      addNewUser(newUser);
    }

    function addNewUser(newUserData) {
      $.post("/api/users", newUserData).then(getUsers(newUserData));
      console.log("THIS IS THE POST DATA" + newUserData);
    }

    function getUsers() {
      $.get("/api/users", function(data) {
        console.log(data);
      });
    }
    captureNewUserData();
  });
});
