const images = [{ name: "img1", value: "img/Swan/sauna-avull.jpg" }];
const image = document.querySelectorAll('[class="image-set"]');
for (let i = 0; i < image.length; i++) {
  console.log(image[i]);
  const img = images.find((i) => i.name === "img1");
  image[i].src = img.value;
}
