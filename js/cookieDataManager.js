function loadData()
{
	//check for cookie
	//if cookie exists,
	//and JSON value exists,
	//load data from cookie
	let data = getCookie("savedData");
	if(data == "")
	{
		//otherwise, create data and add to cookie
		saveData(constructData());
		return loadData();
	}
	return JSON.parse(data);
}

function saveData(data)
{
	//serialize data into JSON, 
	//then save to cookie
	let dataString = JSON.stringify(data);
	setCookie("savedData", dataString, 90);
}

function constructData()
{
	let data = 
	{
		charList:[]
	};
	
	return data;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  let sameSite = "SameSite=Strict;";
  document.cookie = cname + "=" + cvalue + ";" + sameSite + expires + ";path=/";
}
function getCookie(cname) 
{
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
