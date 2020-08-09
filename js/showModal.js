
function showModal(ModalID, ImgID, ModalImgID, TextureName){
	var modal = document.getElementById(ModalID);

	// Get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById(ImgID);
	var modalImg = document.getElementById(ModalImgID);
	var captionText = document.getElementById(TextureName);

	img.onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
}