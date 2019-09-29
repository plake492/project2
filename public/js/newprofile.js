$(document).ready(function () {
  $("#signup").on("click", function (event) {
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
    const zipcode = $("#newZipCode")
      .val()
      .trim();
    const country = $("#newCountry")
      .val()
      .trim();

    function captureNewUserData(event) {
      if (
        !username ||
        !password ||
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
        address: address,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zipcode: zipcode,
        country: country
      };

      console.log(newUser);
      addNewUser(newUser);
    }

    function addNewUser(newUserData) {
      $.post("/api/signup", newUserData)
        .then(getUsers(newUserData));
      window.location.replace(newUserData)
      console.log("THIS IS THE POST DATA" + newUserData)

    }

    // function getUsers() {
    //   $.get("/api/signup", function (data) {
    //     console.log(data);
    //     // for (var i = 0; i < data.length; i++) {
    //     //   rowsToAdd.push(createAuthorRow(data[i]));
    //     // }
    //     // renderAuthorList(rowsToAdd);
    //     // nameInput.val("");
    //   });
    // }
    function getUsers() {
      $.get("/api/signup", function (data) {
        console.log(data);
      });
    }
    captureNewUserData();
  });
});