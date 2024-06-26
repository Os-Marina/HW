window.addEventListener("load", function () {
  let menu = document.querySelector(".menu");
  let btnUp = document.querySelector(".go-top");

  btnUp.addEventListener("click", goTop);
  //   function goTop() {
  //     window.scrollTo({ top: 0, behavior: "smooth" });
  //   }

  delegate(menu, "a", "click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.hash);

    scrollToElem(target);
    setActiveMenuItem(menu, this);
  });
  let hash = window.location.hash;
  let autoTarget = hash.length > 0 ? document.querySelector(hash) : null;

  if (autoTarget !== null) {
    scrollToElem(autoTarget);
    setActiveMenuItem(menu, menu.querySelector(`[href$="${hash}"]`));
  }
});

function delegate(box, selector, eventName, handler) {
  box.addEventListener(eventName, function (e) {
    let elem = e.target.closest(selector);

    if (elem !== null && box.contains(elem)) {
      handler.call(elem, e);
    }
  });
}

function setActiveMenuItem(menu, item) {
  menu
    .querySelectorAll("a")
    .forEach((link) => link.classList.remove("menu__link-active"));
  item.classList.add("menu__link-active");
}

function scrollToElem(el) {
  let top = el.getBoundingClientRect().top - 70;

  window.scrollBy({
    top,
    behavior: "smooth",
  });
}

function goTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/*
	let a;

	if(some){
		a = 1;
	}
	else{
		a = 0;
	}

	let a = some ? 1 : 0;
*/
