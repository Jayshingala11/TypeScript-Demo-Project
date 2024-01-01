$(document).ready(function () {
  $(".loginForm").submit(function (event) {
    event.preventDefault();

    const email = $(".loginForm input[name=email]").val();
    const password = $(".loginForm input[name=password]").val();
    console.log(typeof email);
    console.log(typeof password);


    $.ajax({
      url: "/auth/postLogin",
      type: "POST",
      data: {
        email,
        password,
      },
      success: function (response) {
        if (response.success) {
          const userId = response.data;
          window.location.href = `/admin-products?userId=${userId}`;
        } else {
          alert(response.error);
        }
      },
    });
  });
});
