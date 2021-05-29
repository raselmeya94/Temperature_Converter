function convert() {
	var degrees = document.getElementById("degrees").value;
	if (document.getElementById("type").value == "CtoF") {
		document.getElementById("result").innerHTML = `${(degrees * 1.8) + 32}°F`;
	}
  else if (document.getElementById("type").value=="CtoK"){
    document.getElementById("result").innerHTML=`${
			parseFloat(degrees) + 273.15
		}°K`;
  }
  else if (document.getElementById("type").value == "CtoR") {
		document.getElementById("result").innerHTML = `${	degrees *0.8
		}°R`;
	}
  else if (document.getElementById("type").value == "FtoC") {
		document.getElementById("result").innerHTML = `${(degrees - 32) / 1.8}°C`;
	}
  else if (document.getElementById("type").value == "FtoK") {
		document.getElementById("result").innerHTML = `${(degrees - 32) / 1.8 + 273.15
		}°K`;
  }
  else if (document.getElementById("type").value == "FtoR") {
		document.getElementById("result").innerHTML = `${	(degrees-32)/2.25
		}°R`;
	}
  else if (document.getElementById("type").value=="KtoC"){
    document.getElementById("result").innerHTML=`${parseFloat(degrees) - 273.15}°C`;
  }
  else if (document.getElementById("type").value == "KtoF") {
		document.getElementById("result").innerHTML = `${	(degrees - 273.15) * 1.8 + 32
		}°F`;
	}
  else if (document.getElementById("type").value == "KtoR") {
		document.getElementById("result").innerHTML = `${	(degrees-273.15)*.8
		}°R`;
	}
  else if (document.getElementById("type").value == "RtoC") {
		document.getElementById("result").innerHTML = `${	(degrees *.25)
		}°C`;
	}
  else if (document.getElementById("type").value == "RtoF") {
		document.getElementById("result").innerHTML = `${	(degrees * 2.25) + 32
		}°F`;
	}
  else if (document.getElementById("type").value == "RtoK") {
		document.getElementById("result").innerHTML = `${	(degrees * 1.25) + 273.15
		}°K`;
	}
}
