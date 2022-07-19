let image1 = new Image()
image1.src="./image/produk1.jpeg"

let image2 = new Image()
image2.src="./image/produk2.jpeg"

let image3 = new Image()
image3.src="./image/produk3.jpeg"

let step=1
function slideit(){
	document.images.slide.src=eval("image"+step+".src")
	if (step<3)
		step++
	else
		step=1
		setTimeout("slideit()",3000)
		
}
slideit()