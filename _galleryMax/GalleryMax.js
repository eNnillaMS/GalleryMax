var galleryMax = new function() {
	this.i = 0;
	this.loadSpinner = "https://raw.github.com/eNnillaMS/GalleryMax/master/_galleryMax/load.gif";
	this.launch = function(picSourceArray, picCaptionArray){
		document.getElementById("photoGallery").innerHTML = "<div id='photoGallery_Close'></div><div id='photoGallery_Container'><div id='photoGallery_Viewer'></div><div id='photoGallery_Selector'></div></div>";
		firstPic = new Image();
		firstPic.onload = function() {
			galleryMax.init(picSourceArray, picCaptionArray, firstPic.width, firstPic.height);
		}
		firstPic.src = picSourceArray[galleryMax.i];
	}
	this.init = function(picSourceArray, picCaptionArray, x, y){
		var a = document.getElementById("photoGallery_Viewer");
		a.innerHTML = "<div id='photoGallery_PreviousImage'></div><div id='photoGallery_Frame'></div><div id='photoGallery_NextImage'></div>";
		viewerWidth = a.offsetWidth;
		viewerHeight = a.offsetHeight;
		var b = document.getElementById("photoGallery_PreviousImage");
		b.style.width = (viewerWidth * 0.10) + "px";
		var c = document.getElementById("photoGallery_Frame");
		c.innerHTML = "<div id='photoGallery_Current'></div><div id='photoGallery_Caption'><div id='photoGallery_CaptionIn'></div></div>";
		c.style.width = ((viewerWidth * 0.80) - 8) + "px";
		var d = document.getElementById("photoGallery_NextImage");
		d.style.width = (viewerWidth * 0.10) + "px";

		var e = document.getElementById("photoGallery_Selector");
		e.innerHTML = "<div id='photoGallery_ScrollLeft'></div><div id='photoGallery_ThumbFrame'></div><div id='photoGallery_ScrollRight'></div>";
		selectorWidth = e.offsetWidth;
		selectorHeight = e.offestHeight;
		var f = document.getElementById("photoGallery_ScrollLeft");
		f.style.width = (selectorWidth * 0.05) + "px";
		var g = document.getElementById("photoGallery_ThumbFrame");
		g.style.width = ((selectorWidth * 0.88) - 8) + "px";
		g.style.marginLeft = (selectorWidth * 0.01) + "px";
		g.style.marginRight = (selectorWidth * 0.01) + "px";
		var h = document.getElementById("photoGallery_ScrollRight");
		h.style.width = (selectorWidth * 0.05) + "px";
		
		var j = document.getElementById("photoGallery_Caption");
		j.style.width = c.offsetWidth + "px";
		var m = document.getElementById("photoGallery_CaptionIn");
		m.style.width = (j.offsetWidth + 15) + "px";
		j.style.width = (m.scrollWidth) + "px";
		m.innerHTML = picCaptionArray[galleryMax.i];
		
		var i = document.getElementById("photoGallery_Current");
		i.style.height = (c.offsetHeight - j.offsetHeight) + "px";
		i.innerHTML = "<img id='photoGallery_LoadSpinner' src='" + galleryMax.loadSpinner + "' /><img id='photoGallery_CurrentImage' />";
		
		var l = document.getElementById("photoGallery_LoadSpinner");
		spin = new Image();
		spin.onload = function(){
			l.style.marginLeft = ((i.offsetWidth - l.offsetWidth) / 2) + "px";
			l.style.marginRight = ((i.offsetWidth - l.offsetWidth) / 2) + "px";
			l.style.marginTop = ((i.offsetHeight - l.offsetHeight) / 2) + "px";
			l.style.marginBottom = ((i.offsetHeight - l.offsetHeight) / 2) + "px";
		}
		spin.src = galleryMax.loadSpinner;
		
		var k = document.getElementById("photoGallery_CurrentImage");
		k.src = picSourceArray[galleryMax.i];
		if (y > i.offsetHeight){
			k.style.height = i.offsetHeight + "px";
		}
		if (k.offsetWidth > i.offsetWidth){
			k.style.height = "";
			k.style.width = i.offsetWidth + "px";
		}
		//Possible need for third check, height again, resize both x and y.
		k.style.marginLeft = ((i.offsetWidth - k.offsetWidth) / 2) + "px";
		k.style.marginRight = ((i.offsetWidth - k.offsetWidth) / 2) + "px";
		k.style.marginTop = ((i.offsetHeight - k.offsetHeight) / 2) + "px";
		k.style.marginBottom = ((i.offsetHeight - k.offsetHeight) / 2) + "px";
		k.style.opacity = 1;
		document.getElementById("photoGallery").style.opacity = 1;
	}
	
	this.shutdown = function() {
		document.getElementById("photoGallery").style.opacity = 0;
		setTimeout(	function(){
			document.getElementById("photoGallery").innerHTML = "";
		}, 250);
	}
}
//ToDo LATER: Separate Core from Theme for alternate theming.