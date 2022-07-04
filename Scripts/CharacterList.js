function loadCharacterList()
{
	let container = document.getElementById("mainContainer");
	
	let content =
	"<h4 class='necro-bar mt-4'>Character List</h5>"
	+"<div id='charlist' class='p-4'>";
	
	

	let listContent = "";
	let listData = loadData();
	//TODO: load from cookie JSON
	for(let i = 0; i < listData.charList.length; i++)
	{
		listContent += listItemHTML(listData.charList[i]);
	}
	content += listContent;
	content += 
	"<button type='button' class='btn btn-dark' onclick='createNewCharacter()'>+ New Doll +</button>"
	+ "</div>";
	
	container.innerHTML = content;
}
function listItemHTML(item)
{
	let content = 
		"<div class='necro-box mb-3'>"
		+ "<div class='rounded bg-black text-white p-2'>"
		+ "<h5 class='text-outline'>" + "Character Name" + "</h5>"
		+ "<div class='rounded bg-white text-dark p-2'>"
		+ "<p>Position /// Primary Class /// Secondary Class</p>"
		+ "<p>Armaments: 0 /// Mutations: 0 /// Enhancements: 0</p>"
		+ "</div></div></div>";
		
	return content;
}
function createNewCharacter(nextId)
{
	//get data
	let data = loadData();
	//add new character to list
	
	data.charList[data.charList.length] = newChar; 
	//save data
	//reload character list
}