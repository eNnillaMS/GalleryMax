var galleryMax = new function() {
	this.launch = function(picSourceArray){
		document.getElementById("photoGallery").innerHTML = "<div id='photoGallery_Close'></div><div id='photoGallery_Container'><div id='photoGallery_Viewer'><div id='photoGallery_PreviousImage'></div><div id='photoGallery_Frame'><div id='photoGallery_Current'></div><div id='photoGallery_Caption'></div></div><div id='photoGallery_NextImage'></div></div><div id='photoGallery_Selector'><div id='photoGallery_ScrollLeft'></div><div id='photoGallery_Pictures'></div><div id='photoGallery_ScrollRight'></div></div></div>";
		firstPic = new Image();
		firstPic.onload = function() {
			galleryMax.init(picSourceArray);
		}
		firstPic.src = picSourceArray[0];
	}
	this.init = function(picSourceArray){
		var e = document.getElementById("photoGallery_Current");
		frameHeight = e.offsetHeight;
		frameWidth = e.offsetWidth;
		e.innerHTML = "<img id='photoGallery_LoadSpinner' src='load.gif' /><img id='photoGallery_CurrentImage' />";
		var ls = document.getElementById("photoGallery_LoadSpinner");
		ls.style.marginLeft = ((frameWidth - ls.offsetWidth) / 2) + "px";
		ls.style.marginRight = ((frameWidth - ls.offsetWidth) / 2) + "px";
		ls.style.marginTop = ((frameHeight - ls.offsetHeight) / 2) + "px";
		ls.style.marginBottom = ((frameHeight - ls.offsetHeight) / 2) + "px";
		var pic = document.getElementById("photoGallery_CurrentImage");
		pic.style.marginLeft = ((frameWidth - pic.offsetWidth) / 2) + "px";
		pic.style.marginRight = ((frameWidth - pic.offsetWidth) / 2) + "px";
		pic.style.marginTop = ((frameHeight - pic.offsetHeight) / 2) + "px";
		pic.style.marginBottom = ((frameHeight - pic.offsetHeight) / 2) + "px";
		pic.src = picSourceArray[0];
		pic.style.opacity = 1;
		document.getElementById("photoGallery").style.opacity = 1;
	}
	
	this.shutdown = function() {
		document.getElementById("photoGallery").style.opacity = 0;
	}
}
//CALCULATE SIZE OF photoGallery_Viewer
//CALCULATE WIDTHS FOR photoGallery_PreviousImage, photoGallery_Frame, AND photoGallery_NextImage
//CALCULATE SIZE OF photoGallery_Current
//CALCULATE SIZE OF photoGallery_CurrentImage
//CALCULATE MARGINS FOR photoGallery_CurrentImage AND photoGallery_LoadSpinner