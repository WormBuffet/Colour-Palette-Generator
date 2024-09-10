var col1;
		var col2;
		var hsl;
		var hue;
		var sat;
		var bri;
		
		function getRandomColour() 
		{
			var colour = '#' + Math.floor(Math.random() * 16777216).toString(16);
			return colour;
		}

		function setRandomColour() 
		{
			let checkBox1 = document.getElementById("square1");
			let checkBox2 = document.getElementById("square2");
			col1 = getRandomColour();
			col2 = getRandomColour();
			
			
			if(!checkBox1.checked && !checkBox2.checked) 
			{
				$("#colourpad1").css("background-color", col1);
				$("#colourpad2").css("background-color", col2);
			}else if(!checkBox1.checked) 
			{
				$("#colourpad1").css("background-color", col1);
			}else if(!checkBox2.checked) 
			{
				$("#colourpad2").css("background-color", col2);
			}
		}
		
		// Displays Colour Codes
		function displayColours() 
		{
			let rgb = getRGB("colourpad2");
			hsl = getHSL(rgb);
            
            document.getElementById("tHEX").innerHTML = col2;
            document.getElementById("tRGB").innerHTML = rgb;
			document.getElementById("tHSL").innerHTML = hsl;
		}

        // Returns an RGB Value
		function getRGB(divName) 
		{
			rgb = document.getElementById(divName).style.backgroundColor;
			return rgb;
		}
		
		// Returns a HSL Value from an RGB Value
		function getHSL(rgb) 
		{
            let h = 0;
            let s = 0;
            let l = 0;

            // Divide rgb by 255
			let r = parseInt(rgb.substring(rgb.indexOf('(') + 1, rgb.indexOf(','))) / 255;
			let g = parseInt(rgb.substring(rgb.indexOf(',') + 1, rgb.lastIndexOf(','))) / 255;
			let b = parseInt(rgb.substring(rgb.lastIndexOf(',') + 1, rgb.indexOf(')'))) / 255;
			
			
            // Find the smallest and greatest colour value
			let colMin = Math.min(r,g,b);
            let colMax = Math.max(r,g,b);

            // Calculate difference
            let delta = colMax - colMin;

			// Get Hue, Light, and Saturation Values
            h = getHue(delta, colMax, r, g, b);
            l = getLightness(colMax, colMin);
            s = getSaturation(delta, l);

			// Multiply values by 100 to shift decimal place, and fix to one decimal place
            l = +(l * 100).toFixed(1);
            s = +(s * 100).toFixed(1);

            return "hsl(" + h + "," + s + "%," + l + "%)";
		}

        // Calculates the Hue from an RGB Value
        function getHue(delta,max,r,g,b)
        {
            // All Colours are the Same
            if(delta == 0)
            {
                return 0;
            }
            // Red is the Strongest Colour
            else if(max == r)
            {
                h = ((g - b) / delta) % 6;
            }
            // Green is the Strongest Colour
            else if(max == g)
            {
                h = (b - r) / delta + 2;
            }
            // Blue is the Strongest Colour
            else
            {
                h = (r - g) / delta + 4;
            }

            // Multiply Value by 60, then Round
            h = Math.round(h * 60);

            // Make Negative Hues Positive
            if(h < 0)
            {
                h += 360;
            }

            return h;
        }

        // Calculates a Lightness Value
        function getLightness(max, min)
        {
            l = (max + min) / 2;
            return l;
        }

        // Calculates a Saturation Value
        function getSaturation(delta, l)
        {
            if(delta == 0) 
            {
                return 0;
            }
            s = delta / (1 - (2 * l - 1));
            return Math.abs(s);
        }
		
		// Displays Complementary Colour
		function displayComp() 
		{
			$("#complementary").css("background-color", getComp());
			document.getElementById("para1").innerHTML = getComp();
		}

		// Gets the Complementary Colour
		function getComp()
		{
			let tempHue = hsl.substring(hsl.indexOf('(') + 1, hsl.indexOf(','));
			let sat = hsl.substring(hsl.indexOf(',') + 1, hsl.indexOf('%,'));
			let bri = hsl.substring(hsl.indexOf('%,') + 2, hsl.indexOf('%)'));
			hue = parseInt(tempHue) + 180;
			
			if(hue >= 360) 
			{
				hue -= 360;
			}
			
			let returnHSL = 'hsl(' + hue + ',' + sat + '%,' + bri + '%)';
			return returnHSL;
		}
		
		// Displays Triadic Colours
		function displayTriad() 
		{
			let colours = getTriad();
			$("#triad0").css("background-color", colours[0]);
			$("#triad1").css("background-color", colours[1]);
			document.getElementById("para2").innerHTML = colours[0] + ', ' + colours[1];
		}
		
		// Displays Analogous Colours
		function displayAnalog() 
		{
			let colours = getAnalogous();
			$("#analog0").css("background-color", colours[0]);
			$("#analog1").css("background-color", colours[1]);
			document.getElementById("para3").innerHTML = colours[0] + ', ' + colours[1];
		}
		
		// Displays Tetradic Colours
		function displayTetradic() 
		{
			let colours = getTetradic();
			$("#tet0").css("background-color", colours[0]);
			$("#tet1").css("background-color", colours[1]);
			$("#tet2").css("background-color", colours[2]);
			document.getElementById("para4").innerHTML = colours[0] + ', ' + colours[1] + ', ' + colours[2];
		}
		
		// Displays Alternate Shades
		function displayAlt() 
		{
			let colours = getAlt();
			for(var i = 0; i < colours.length; i++) 
			{
				$("#alt" + i).css("background-color", colours[i]);
			}
			document.getElementById("para5").innerHTML = colours;
		}
		
		// Gets the Triadic Colours
		function getTriad()
		{
			hue = hsl.substring(hsl.indexOf('(') + 1, hsl.indexOf(','));
			sat = hsl.substring(hsl.indexOf(',') + 1, hsl.indexOf('%,'));
			bri = hsl.substring(hsl.indexOf('%,') + 2, hsl.indexOf('%)'));
			tri1 = parseInt(hue) + 120;
			tri2 = parseInt(hue) + 240;
			
			if(tri1 >= 360) 
			{
				tri1 -= 360;
			}
			
			if(tri2 >= 360)
			{
				tri2 -= 360;
			}
			
			let firstTriadic = 'hsl(' + tri1 + ',' + sat + '%,' + bri + '%)';
			let secondTriadic = 'hsl(' + tri2 + ',' + sat + '%,' + bri + '%)';
			let returnTriadic = [firstTriadic, secondTriadic];
			return returnTriadic;
		}
		
		// Gets the Analogous Colours
		function getAnalogous()
		{
			hue = hsl.substring(hsl.indexOf('(') + 1, hsl.indexOf(','));
			sat = hsl.substring(hsl.indexOf(',') + 1, hsl.indexOf('%,'));
			bri = hsl.substring(hsl.indexOf('%,') + 2, hsl.indexOf('%)'));
			analog1 = parseInt(hue) + 30;
			analog2 = parseInt(hue) + 330;
			
			if(analog1 >= 360) 
			{
				analog1 -= 360;
			}
			
			if(analog2 >= 360)
			{
				analog2 -= 360;
			}
			
			var firstAnalogous = 'hsl(' + analog1 + ',' + sat + '%,' + bri + '%)';
			var secondAnalogous = 'hsl(' + analog2 + ',' + sat + '%,' + bri + '%)';
			var returnAnalogous = [firstAnalogous, secondAnalogous];
			return returnAnalogous;
		}
		
		// Gets the Tetradic Colours
		function getTetradic()
		{
			hue = hsl.substring(hsl.indexOf('(') + 1, hsl.indexOf(','));
			sat = hsl.substring(hsl.indexOf(',') + 1, hsl.indexOf('%,'));
			bri = hsl.substring(hsl.indexOf('%,') + 2, hsl.indexOf('%)'));
			tet1 = parseInt(hue) + 90;
			tet2 = parseInt(hue) + 180;
			tet3 = parseInt(hue) + 270;
			
			if(tet1 >= 360) 
			{
				tet1 -= 360;
			}
			
			if(tet2 >= 360)
			{
				tet2 -= 360;
			}
			
			if(tet3 >= 360)
			{
				tet3 -= 360;
			}
			
			var firstTetradic = 'hsl(' + tet1 + ',' + sat + '%,' + bri + '%)';
			var secondTetradic = 'hsl(' + tet2 + ',' + sat + '%,' + bri + '%)';
			var thirdTetradic = 'hsl(' + tet3 + ',' + sat + '%,' + bri + '%)';
			var returnAnalogous = [firstTetradic, secondTetradic, thirdTetradic];
			return returnAnalogous;
		}
		
		// Gets the Alternate Shades
		function getAlt()
		{
			hue = hsl.substring(hsl.indexOf('(') + 1, hsl.indexOf(','));
			sat = hsl.substring(hsl.indexOf(',') + 1, hsl.indexOf('%,'));
			bri = 95;
			var temp;
			var returnAlternate = new Array();
			
			while(bri > 5) 
			{
				temp = 'hsl(' + hue + ',' + sat + '%,' + bri + '%)';
				returnAlternate.push(temp);
				bri -= 5;
			}
			
			return returnAlternate;
		}