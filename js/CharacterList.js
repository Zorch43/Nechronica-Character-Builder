function loadCharacterList()
{	
	let content =
	`<h4 class='necro-bar mt-4'>Character List</h5>
	<div id='charlist' class='p-4'>`;
	
	

	let listContent = "";
	let listData = loadData();
	let nextId = listData.charList.length;
	
	//TODO: load from cookie JSON
	for(let i = 0; i < listData.charList.length; i++)
	{
		listData.charList[i].id = i;//set id = index
		//temp refactoring fixes
		/*
		for(let s = 0; s < listData.charList[i].skills.length; s++){
			listData.charList[i].skills[s] = new Skill(listData.charList[i].skills[s]);
		}
		*/
		listContent += listItemHTML(listData.charList[i]);
	}
	saveData(listData);
	content += listContent;
	content += 
	`<button type='button' class='btn btn-dark' onclick='createDoll(${nextId})'>+ New Doll +</button>
	</div>`;
	
	$('#mainContainer').html(content);
}
function listItemHTML(doll)
{
	let classPosition = getById(doll.classPosition, dollPositions);
	let classPrimary = getById(doll.classPrimary, dollClasses);
	let classSecondary = getById(doll.classSecondary, dollClasses);
	let content = 
		`<div class='doll-list-item necro-box rounded' role="button" onclick="viewDoll(${doll.id})">
			<div class='rounded bg-black text-white p-2'>
				<h5 class='text-outline'>${doll.name}</h5>
				<div class='rounded text-dark p-2'>
					<p>${classPosition.name} /// ${classPrimary.name} /// ${classSecondary.name}</p>
					<button type='button' class='btn btn-dark' 
						onclick='deleteDoll(${doll.id})'>- Delete -</button>
				</div>
			</div>
		</div>`;
		
	return content;
}

//doll CRUD functions
function createDoll(nextId)
{
	//create new doll for character creation
	characterWIP = new Doll(nextId);
	//start character creation
	startCharacterCreation();
}
function saveDoll(){
	let data = loadData();
	let update = false;
	for(let i = 0; i < data.charList.length; i++){
		if(characterWIP.id == data.charList[i].id){
			data.charList[i] = characterWIP;
			update = true;
			break;
		}
	}
	if(!update){
		data.charList.push(characterWIP);
	}
	saveData(data);
}
function deleteDoll(id)
{
	let data = loadData();
	for(let i = 0; i < data.charList.length; i++){
		if(data.charList[i].id == id){
			data.charList.splice(i,1);
			break;
		}
	}
	saveData(data);
	loadCharacterList();
}