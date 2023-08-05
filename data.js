let data = [
    { img: "/assests/pexels-aviz-3912486.jpg", name: "Diamond Ring" },
    { img: "/assests/pexels-the-glorious-studio-10983783.jpg", name: "Earrings" },
    { img: "/assests/one.jpg", name: "Diamond Ring" },
    { img: "/assests/greengem.jpg", name: "Diamond gem Stone ring" },
    { img: "/assests/ear.jpg", name: "Diamond Earrings" },
    { img: "/assests/earring.jpg", name: "Gold Set" },
    { img: "/assests/kl.jpg", name: "Abigail Necklace " },
    { img: "/assests/gold.jpg", name: "Golden Oval Citrine Gold Ring -" },
  ];

  let visibleItem = 4;

  function updateHtml(elem) {
    return `<div class="card">
      <img src="${elem.img}" alt="images">
      <div class="price">
        <h3>${elem.name}</h3>
        <i class="ri-bookmark-line"></i>
      </div>
    </div>`;
  }

  function showNextProducts() {
    const endIndex = Math.min(visibleItem + 2, data.length);
    for (let i = visibleItem; i < endIndex; i++) {
      const elem = data[i];
      document.querySelector(".container-wrapper").innerHTML += updateHtml(elem);
    }
    visibleItem = endIndex;
    if (visibleItem >= data.length) {
      document.querySelector("#load").setAttribute("disabled", "true");
    }
  }

  // Initial load
  data.slice(0, visibleItem).forEach(function (elem) {
    document.querySelector(".container-wrapper").innerHTML += updateHtml(elem);
  });

  document.querySelector("#load").addEventListener("click", showNextProducts);