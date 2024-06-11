document.addEventListener("DOMContentLoaded", function () {
  let inp = document.querySelectorAll(".check");
  let btnSub = document.getElementById("btnSub");
  let form = document.querySelector("form");
  const cardValidation = {
    name: "^[aA-zZаА-яЯ]+$",
    phone: "[0-9+]",
    email: "[aA-zZ0-9@.]",
  };

  //   debugger;
  inp.forEach((el) => {
    const nameValue = el.getAttribute("name");
    if (nameValue == "name") {
      el.dataset.pattern = cardValidation["name"];
    } else if (nameValue == "phone") {
      el.dataset.pattern = cardValidation["phone"];
    } else if (nameValue == "email") {
      el.dataset.pattern = cardValidation["email"];
    }
  });
  /*
  inp.forEach((el) => {
    if (el.hasAttribute("name")) {
      const nameValue = el.getAttribute("name");

      console.log(Object.keys(cardValidation));
      Object.keys(cardValidation).forEach((key) => {
        if (key == nameValue) {
          el.dataset.pattern = cardValidation[key];
        }
      });
    }
  });
  */

  inp.forEach((el) => {
    el.addEventListener("input", function (event) {
      // if (el.hasAttribute.name == 'firstName') {
      //     el.setAttribute(firstName, cardValidation.name)
      // }

      if (event.target.value.length === 0) {
        el.classList.add("err");
      } else {
        el.classList.remove("err");
      }
    });
  });

  form.addEventListener("submit", checkInputs);

  function checkInputs(event) {
    inp.forEach((el) => {
      //   event.preventDefault();
      const patt = new RegExp(el.dataset.pattern);
      //   const patt = el.dataset.pattern;
      let valueInput = el.value;
      console.log(patt);
      console.log(valueInput);

      if (el.value.length > 0 && patt.test(valueInput) == true) {
        // el.classList.add("succ");
        console.log(patt.test(valueInput));
      } else {
        event.preventDefault();
        el.classList.add("err");
        console.log("Страница не обновилась");
      }
    });
  }
});
