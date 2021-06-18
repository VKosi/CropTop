var shape_count = 1;

function shape_load() {
	if (shape_count == 1) {
		shape_count = 0;
	}
	console.log(shape_count);
	console.log(document.getElementById("cropImageCanvas").height);
	console.log(document.getElementById("canvas"));
}

function shape_load1() {
	if (shape_count == 0) {
		shape_count = 1;
	}
	console.log(shape_count);
	console.log(document.getElementById("cropImageCanvas").height);
	console.log(document.getElementById("canvas"));
}


window.onload = function(ev) {
    var inputUpload = document.querySelector(".inputUpload");

    var canvas = document.getElementById("cropImageCanvas");
    var croppedCanvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    var croppedContext = croppedCanvas.getContext("2d");

    croppedCanvas.height = canvas.height;
    croppedCanvas.width = canvas.width;

    var img = new Image();


    inputUpload.addEventListener('change', function() {

        if (this.files && this.files[0]) {
            img.onload = function() {
                URL.revokeObjectURL(img.src); // no longer needed, free memory

                //Setup canvas
                context.globalAlpha = 0.2; //Turn transparency on
                context.beginPath();
                context.rect(0, 0, canvas.width, canvas.height);
                context.closePath();
                context.fillStyle = "black";
                context.fill();

                //Draw full image
                //x y w h
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
                if (shape_count == 1) {
                    //Draw circle
                    context.globalAlpha = 1; //Turn transparency off
                    context.strokeStyle = "black";
                    context.beginPath();
                    //x y r startAngle endAngle
                    context.arc(canvas.width / 2, canvas.height / 2, 150, 0, 2 * Math.PI);
                    context.stroke();
                    context.closePath();
                    context.fillStyle = "green";
                    context.fill();

                    context.beginPath();
                	context.arc(canvas.width / 2, canvas.height / 2, 150, 0, 2 * Math.PI);
           	    	context.clip();
                	context.drawImage(img, 0, 0, canvas.width, canvas.height);
	                croppedContext.globalAlpha = 1; //Turn transparency off
    	            croppedContext.strokeStyle = "black";
        	        croppedContext.beginPath();
            	    croppedContext.arc(75, canvas.height / 2, 150, 0, 2 * Math.PI);
                	croppedContext.stroke();
	                croppedContext.closePath();
    	            croppedContext.fillStyle = "green";
        	        croppedContext.fill();
                };
                context.drawImage(img, 0, 0, canvas.width, canvas.height);
                if (shape_count == 0) {
                	//Draw circle
                	context.globalAlpha = 1; //Turn transparency off
            	    context.strokeStyle = "black";
        	        context.beginPath();
    	            //x y r startAngle endAngle
	                context.rect(175, 250, 150, 150);
            	    context.stroke();
        	        context.closePath();
    	            context.fillStyle = "green";
	                context.fill();

        	        context.beginPath();
    	           	context.rect(175, 250, 150, 150);
	           	   	context.clip();
               		context.drawImage(img, 0, 0, canvas.width, canvas.height);
	        	    croppedContext.globalAlpha = 1; //Turn transparency off
        	        croppedContext.strokeStyle = "black";
    	   	        croppedContext.beginPath();
	           	    croppedContext.rect(175, 250, 150, 150);
               		croppedContext.stroke();
            	    croppedContext.closePath();
   	    	        croppedContext.fillStyle = "transparent";
    	  	        croppedContext.fill();
            	};

                //Draw cropped image
                

                //Draw cropped image
                //croppedContext.beginPath();
                //x y r startAngle endAngle
                //croppedContext.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
                //Use clip to create a clipping region according to the shape of a circular arc
                //croppedContext.clip();
                //x y w h
                croppedContext.drawImage(img, 0, 0, canvas.width, canvas.height);

                console.log(croppedCanvas.toDataURL("image/png"));
            };

            //w 150 h 300

            function rotate() {

	//let croppedCanvas = document.createElement("canvas");
    //let context = canvas.getContext("2d");
    //let croppedContext = croppedCanvas.getContext("2d");
	//let context = canvas.getContext("2d");
    //let croppedContext = croppedCanvas.getContext("2d");

	canvas.style.transform = `rotate(90deg)`;

}

            img.src = URL.createObjectURL(this.files[0]); // set src to blob url
        }
    });
};