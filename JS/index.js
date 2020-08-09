setInterval(changeBanners, 5000);

function changeBanners() {
  if (banner1.classList.contains("hidden")) {
    banner1.classList.remove("hidden");
    banner2.classList.add("hidden");
  } else {
    banner2.classList.remove("hidden");
    banner1.classList.add("hidden");
  }
}
