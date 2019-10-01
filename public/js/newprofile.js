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

    function captureUserData(event) {
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

      addNewUser(
        newUser.username,
        newUser.password,
        newUser.email,
        newUser.email,
        newUser.address,
        newUser.addressLine2,
        newUser.city,
        newUser.state,
        newUser.zipcode,
        newUser.country
      );

      console.log(newUser);
      // addNewUser(newUser);
    }

    function addNewUser(username, password, email, name, address, addressLine2, city, state, zipcode, country) {
      $.post("/api/signup", {
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
      }).then(function (data) {
        console.log(data)
        window.location.replace(data)
      })
    }
    captureUserData();
  });
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
  // function getUsers() {
  //   $.get("/api/signup", function (data) {
  //     console.log(data);
  //   });
  // }
});