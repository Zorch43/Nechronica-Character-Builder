//Global variables
const timingIcon = "far fa-clock";
const costIcon = "far fa-compass";
const rangeIcon = "far fa-arrow-alt-circle-right";
const madnessTrue = `<i class="fas fa-heartbeat text-danger"></i>`;
const madnessFalse = `<i class="fas fa-heart"></i>`;

let fetterIndex = -1;

function viewDoll(id){
	let data = loadData();
	let doll = getById(id, data.charList);
	
	if(doll != null){
		characterWIP = doll;
		let premonition = buildMemoryFragmentListItem(getById(doll.premonition, premonitions));
		let deployment = buildDeploymentChoice();
		let favor = buildFavorDisplay();
		let karma = buildKarmaList();
		let fragmentList = buildMemoryFragmentList(doll);
		if(doll.fetters.length < 1){
			let treasureFetter = new Fetter();
			treasureFetter.target = "Treasure";
			treasureFetter.type = 2;
			doll.fetters.push(treasureFetter);
			saveDoll(doll);
		}
		let fetterList = buildDollFetterList();
		let dollPosition = getById(doll.classPosition, dollPositions);
		let dollClass1 = getById(doll.classPrimary, dollClasses);
		let dollClass2 = getById(doll.classSecondary, dollClasses);
		let skillList = buildSkillList(doll);
		let rpoints = getRPointTotals();
		let partList = buildPartList(doll);
		let content = 
		`
		<div class="row pt-3">
			<div class="col-8">
				<img src="Content/Logo.png" class="mx-auto d-block" style="width:100%">
				<h4 class="text-center font-weight-bold">Nechronica -The Long Long Sequel-</h4>
				<h5 class="necro-bar">Personal Data</h5>
				<table class="table table-sm">
					<tbody>
						<tr><th >Character Name:</th><td>${doll.name}</td></tr>
						<tr><th >Age upon Death:</th><td>${doll.age}</td></tr>
						<tr><th >Premonition:</th><td>${premonition}</td></tr>
					</tbody>
				</table>
			</div>
			<div class="col d-flex flex-column justify-content-end">
				<div class="card mb-3 flex-fill">
				
				</div>
			
			</div>
		</div>
		<div class="row pt-3">
			<div class="col-8">
				${karma}
			</div>
			<div class="col">
				${favor}
				${deployment}
			</div>
		</div>
		${fragmentList}
		<h5 class="necro-bar">Fetters</h5>
		<div id="fetter-list" class="pl-3 pr-3">
			${fetterList}
		</div>
		<button class="button btn-dark ml-3 mb-2" onclick="addFetter()">Add Fetter</button>
		<h5 class="necro-bar">Skills</h5>
		<div class="row pl-3 pr-3 text-white mb-1">
			<div class="col-lg font-weight-bold border rounded bg-black">
				<p>Position: ${dollPosition.name}</p>
			</div>
			<div class="col-lg font-weight-bold border rounded bg-black">
				<p>Primary Class: ${dollClass1.name}</p>
			</div>
			<div class="col-lg font-weight-bold border rounded bg-black">
				<p>Secondary Class: ${dollClass2.name}</p>
			</div>
		</div>
		<div class="pl-3 pr-3">
			${skillList}
		</div>
		<h5 class="necro-bar">Parts</h5>
		<div class="row pl-3 pr-3 text-white mb-1">
			<div class="col-lg font-weight-bold border rounded bg-black">
				<p>Armaments: ${rpoints[0]}</p>
			</div>
			<div class="col-lg font-weight-bold border rounded bg-black">
				<p>Mutations: ${rpoints[1]}</p>
			</div>
			<div class="col-lg font-weight-bold border rounded bg-black">
				<p>Enhancements: ${rpoints[2]}</p>
			</div>
		</div>
		${partList}
		`;
		$('#mainContainer').html(content);
		$('[data-toggle="popover"]').popover();
		
	}
}
function buildMemoryFragmentList(doll){
	let content = "";
	content += `<h5 class="necro-bar">Memory Fragments</h5>`;
	for(let i = 0; i < doll.fragments.length; i++){
		let fragment = getById(doll.fragments[i], memoryFragments);
		if(fragment != null){
			content += buildMemoryFragmentListItem(fragment);
		}
	}
	return content;
}
function buildMemoryFragmentListItem(fragment){
	let content = 
	`
	<p class="font-weight-bold border pl-1" title="" data-toggle="popover" data-trigger="hover" 
	data-placement="bottom" data-content="${fragment.description}">${fragment.name}</p>
	`;
	return content;
}
function buildSkillList(doll){
	let content = "";
	for(let i = 0; i < doll.skills.length; i++){
		content += buildListItem(doll.skills[i], "Skill");
	}
	return content;
}
function buildPartList(doll){
	
	let headParts = buildLocationPartList(doll, "Head");
	let armParts = buildLocationPartList(doll, "Arms");
	let torsoParts = buildLocationPartList(doll, "Torso");
	let legParts = buildLocationPartList(doll, "Legs");
	
	let content = 
	`
	<div class="row mt-5 pt-3">
		<img src="Content/CharSheetHead.png" id="necro-head">
		<div class="col">
			<h5 class="necro-bar-flat">Head</h5>
			<div class="">
				${headParts}
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<h5 class="necro-bar">Arms</h5>
			<div class="">
				${armParts}
			</div>
		</div>
		<img src="Content/CharSheetArm.png" id="necro-arm">
	</div>
	<div class="row">
		<img src="Content/CharSheetTorso.png" id="necro-torso">
		<div class="col">
			<h5 class="necro-bar-flat">Torso</h5>
			<div class="">
				${torsoParts}
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<h5 class="necro-bar">Legs</h5>
			<div class="">
				${legParts}
			</div>
		</div>
		<img src="Content/CharSheetLeg.png" id="necro-leg">
	</div>
	`;
	
	return content;
}
function buildLocationPartList(doll, partLocation){
	let content = "";
	for(let i = 0; i < doll.parts.length; i++){
		if(doll.parts[i].partLocation == partLocation){
			content += buildListItem(doll.parts[i], "Part");
		}
	}
	for(let i = 0; i < doll.treasures.length; i++){
		if(doll.treasures[i].partLocation == partLocation){
			content += buildListItem(doll.treasures[i], "Treasure");
		}
	}
	return content;
}

function buildListItem(item, type, active){
	let imgSrc = "";
	let defaultSrc = "none";
	let name = "";
	let timing = "";
	let cost = "";
	let range = "";
	let usedToggle = "";
	let dmgToggle = "";
	let destroyBtn = "";
	let effectText = "";
	let special = "";

	if(type == "Skill" || type == "Part"){
		let full = null;//
		//image source and part damage toggle
		if(type == "Skill"){
			full = getById(item.id, dollSkills);
			imgSrc = "Content/Skills/" + full.flavorImage;
			let skillClass = getById(full.classId, dollClasses);
			if(skillClass == null){
				skillClass = getById(full.classId, dollPositions);
			}
			defaultSrc = "Content/Skills/_placeholder_" + skillClass.name + ".png";

			if(full.special == true){
				special = 
				`
				<span class="rounded bg-dark text-white pl-1 pr-1 mr-1">Special: </span>
				`;
			}
		}
		else{
			full = getById(item.id, dollParts);
			imgSrc = "Content/Parts/" + full.flavorImage;
			defaultSrc = "Content/Parts/_placeholder_" + item.partLocation + ".png";
			let damageChecked = "";
			if(!active && item.damaged){
				damageChecked = "checked";
			}
			dmgToggle = 
			`
			<div class="form-check-inline">
			  <label class="form-check-label">
				<input id='dmgCheck${item.id}' type="checkbox" class="form-check-input" 
				${damageChecked} onchange="setDmgState(${item.id})">Damaged
			  </label>
			</div>
			`;
		}
		//basics
		name = full.name;
		timing = full.timing;
		cost = full.cost;
		range = full.range;
		//effect text
		effectText = "<p class='m-0'>";
		for(let i = 0; i < full.effectText.length; i++){
			effectText += `${full.effectText[i]}  `;
		}
		effectText += "</p>";
		
		//use toggle
		if(!active && full.usable){
			let checked = "";
			if(item.used){
				checked = "checked";
			}
			usedToggle=
			`
			<div class="form-check-inline">
			  <label class="form-check-label">
				<input id='usedCheck${type}${item.id}' type="checkbox" class="form-check-input" 
				${checked} onchange="setUsedState(${item.id}, ${type})">Used
			  </label>
			</div>
			`;
		}

	}
	else if(type == "Treasure"){
		full = getById(item.id, dollTreasures);
		
		name = item.name;
		timing = "Auto"
		cost = "None";
		range = "None";
		
		imgSrc = "Content/Treasures/" + full.flavorImage;
		defaultSrc = "Content/Treasures/_placeholder_Treasure.png";
		destroyBtn = 
		`
		<button type="button" class="btn btn-dark bg-black pt-0 pb-0 mt-1">Destroy</button>
		`;
		
		effectText = 
		`
		<p>Your Treasure.  At the end of the Battle Phase, you
		may remove one Madness Point from a Fetter of your
		choice.  If this Part is destroyed, immediately remove it
		from your Owned Parts.</p>
		`;
	}
	
	let content = 
	`
	<div class="rounded border p-2 mb-1 text-dark necro-item">
		<div class="row">
			<div class="col-lg">
				<div class="d-flex">
					<object data='${imgSrc}' type="image/png" class="tile-64 mr-2">
						<img src='${defaultSrc}' class="tile-64">
					</object>
					<!--<img src='${imgSrc}' onerror="this.style.display='${defaultSrc}'" class="tile-64 mr-2">-->
					<div class="flex-fill">
						<div class="mt-2">
							<h5 class="necro-item-header">${special}${name}</h5>
							<h5 class="mb-0"><small>
								<kbd><i class='${timingIcon}'> ${timing}</i></kbd> 
								<kbd><i class='${costIcon}'> ${cost}</i></kbd> 
								<kbd><i class='${rangeIcon}'> ${range}</i></kbd>
							</small></h5>
						</div>
						<div>
							${dmgToggle}
							${usedToggle}
							${destroyBtn}
						</div>
					</div>
				</div>
				
			</div>
			<div class="col-lg">
				<div class="border border-right-0 border-bottom-0 p-2 bg-white text-black-50 full-height">
					${effectText}
				</div>
			</div>
		</div>
	</div>
	`;
	
	return content;
}	
function setUsedState(itemId, type){
	let item = null;
	if(type == "Skill"){
		item = getById(itemId, characterWIP.skills); 
	}
	else if(type == "Part"){
		item = getById(itemId, characterWIP.parts);
	}
	item.used = ("#usedCheck" + type + itemId).is(":checked");
	saveDoll(characterWIP);
}

function setDmgState(partId){
	let part = getById(partId, characterWIP.parts);
	part.damaged = $("#partDmgCheck" + partId).is(":checked");
	saveDoll(characterWIP);
}

function buildFavorDisplay(){
	let content = 
	`
	<h5 class="necro-box-header">Favor</h5>
	<div class="necro-box">
		<div class="bg-black rounded text-white pt-3 pb-2 pr-1 pl-1 col">
			<input id="favorValue" class="form-control" type="number" value="${characterWIP.favor}" onchange="updateFavor()">
		</div>
	</div>
	`;
	return content;
}
function updateFavor(){
	characterWIP.favor = $("#favorValue").val();
	saveDoll(characterWIP);
}

function buildKarmaList(){
	let listItems = buildKarmaListItems();
	let content = 
	`
		<h5 class="necro-bar">Karma</h5>
		<div id="karmaList" class="rounded border p-2 mb-3">
			${listItems}
		</div>
	`;
	
	return content;
}
function updateKarmaList(){
	$("#karmaList").html(buildKarmaListItems());
}
function buildKarmaListItems(){
	let listItems = "";
	if(characterWIP.karma == null){
		characterWIP.karma = [];
	}
	for(let i = 0; i < characterWIP.karma.length; i++){
		listItems += buildKarmaListItem(characterWIP.karma[i], i);
	}
	listItems += `<button class="button bg-black text-white rounded" onclick="addKarma()">+ Add Karma +</button>`;
	return listItems;
}
function buildKarmaListItem(item, index){
	let karmaCheck = "";
	let karmaDone = "";
	if(item.completed){
		karmaCheck = 
		`
		<button class="button btn-success rounded border pl-3 pr-3" onclick="setKarma(${index}, false)"><i class="fas fa-check-circle"></i></button>
		`;
		karmaDone = "karma-done";
	}
	else{
		karmaCheck = 
		`
		<button class="button btn-success rounded border pl-3 pr-3" onclick="setKarma(${index}, true)"><i class="far fa-check-circle"></i></button>
		`;
	}
	
	let content = 
	`
	<div class="d-flex mb-1">
		<i class="fas fa-star pt-2"></i>
		<input id="karmaDescription${index}" class="${karmaDone} form-control flex-fill ml-2 mr-2" value="${item.description}" onchange="updateKarma(${index})">
		${karmaCheck}
		<button class="button btn-danger rounded border pl-3 pr-3" onclick="removeKarma(${index})"><i class="fas fa-trash-alt"></i></button>
	</div>
	`;
	
	return content;
}
function addKarma(){
	characterWIP.karma.push(new Karma());
	saveDoll(characterWIP);
	updateKarmaList();
}
function removeKarma(index){
	characterWIP.karma.splice(index, 1);
	saveDoll(characterWIP);
	updateKarmaList();
}
function setKarma(index, value){
	characterWIP.karma[index].completed = value;
	saveDoll(characterWIP);
	updateKarmaList();
}
function updateKarma(index){
	let description = $("#karmaDescription" + index).val();
	characterWIP.karma[index].description = description;
	saveDoll(characterWIP);
}
function buildDollFetterList(){
	let content = "";
	for(let i = 0; i < characterWIP.fetters.length; i++){
		content += buildDollFetter(i, i > 0);
	}
	return content;
}
function buildDollFetter(index, editable){
	let fetter = characterWIP.fetters[index];
	
	let fetterType = getById(fetter.type, dollFetterTypes);
	if(fetterType == null){
		characterWIP.fetters.splice(index, 1);
		saveDoll(characterWIP);
		return "";
	}
	let madnessTrack = buildFetterMadness(index, fetter.madness);
	let imgSrc = "Content/Fetters/" + fetterType.flavorImage;
	let imgSrcMad = "Content/Fetters/" + fetterType.madFlavorImage;
	let defaultSrc = "Content/Fetters/_placeholder_Fetter.png";
	
	let editBar = "";
	if(editable){
		editBar = 
		`
		<button type="button" class="rounded button btn-dark pl-2 pr-2 mb-2 mr-1" onclick="editFetter(${index})"><i class="fas fa-edit"></i></button>
		<button type="button" class="rounded button btn-danger pl-2 pr-2 mb-2" onclick="deleteFetter(${index})"><i class="fas fa-trash-alt"></i></button>
		`;
	}
	
	let fetterState = "";
	if(fetter.madness < 4){
		fetterState = "fetter-state-sane";
	}
	else{
		fetterState = "fetter-state-mad";
	}
	
	let content = 
	`
	<div id="fetter-${index}" class="rounded border bg-light p-2 mb-1 fetter ${fetterState}">
		<div class="d-flex">
			<h6 class="rounded bg-black text-white p-2">${fetter.target}</h6>
			<div class="d-flex fetter-madness-track">${madnessTrack}</div>
			<h6 class="rounded bg-black text-white p-2 fetter-sane">${fetterType.name}</h6>
			<h6 class="rounded bg-black text-danger p-2 fetter-mad">${fetterType.madName}</h6>
			<div class="flex-fill"></div>
			${editBar}
		</div>
		<div class="fetter-sane">
			<div class="d-flex">
				<object data='${imgSrc}' type="image/png" class="tile-64 mr-2">
					<img src='${defaultSrc}' class="tile-64">
				</object>
				<div class="border pl-2 pr-2 flex-fill">
					<p>${fetterType.flavorText}</p>
				</div>
			</div>
		</div>
		<div class="fetter-mad">
			<div class="d-flex">
				<object data='${imgSrcMad}' type="image/png" class="tile-64 mr-2">
					<img src='${defaultSrc}' class="tile-64">
				</object>
				<div class="border pl-2 pr-2 flex-fill">
					<p class="mb-1">${fetterType.madEffect}</p>
					<p class="font-italic small mb-0">"${fetterType.madFlavorText}"</p>
				</div>
			</div>
		</div>
	</div>
	`;
	
	return content;
}

function buildFetterMadness(index, points){
	let content = "";
	for(let i = 1; i <= 4; i++){
		content += buildFetterMadnessToggle(index, points, i);
	}
	return content;
}

function buildFetterMadnessToggle(index, points, level){
	let icon = "";
	if(level <= points){
		icon = madnessTrue;
	}
	else{
		icon = madnessFalse;
	}
	let id = `madnessToggle-${index}-${level}`;
	let content = 
	`
		<h5 id="${id}" class="fetter-chain" role="button" onclick="changeMadnessPoints(${index},${level})">${icon}</h5>
	`;
	return content;
}
function changeMadnessPoints(index, level){
	//update fetter madness points to selected level
	let newPoints = level;
	//if the level selected is active, deselect it instead
	if(level <= characterWIP.fetters[index].madness){
		newPoints--;
	}
	characterWIP.fetters[index].madness = newPoints;
	saveDoll(characterWIP);
	
	
	//change madness toggle icons
	//for each level below or equal to points, select that level
	for(let i = 1; i <= 4; i++){
		let id = `#madnessToggle-${index}-${i}`;
		if(i <= newPoints){
			$(id).html(madnessTrue);
		}
		else{
			$(id).html(madnessFalse);
		}
	}
	
	//if points = 4, enter madness
	if(newPoints == 4){
		$(`#fetter-${index}`).removeClass('fetter-state-sane');
		$(`#fetter-${index}`).addClass('fetter-state-mad');
	}
	else{
		$(`#fetter-${index}`).removeClass('fetter-state-mad');
		$(`#fetter-${index}`).addClass('fetter-state-sane');
	}
}
function addFetter(){
	editFetter(characterWIP.fetters.length);
}
function editFetter(index){
	fetterIndex = index;
	
	if(index < characterWIP.fetters.length){
		//copy fetter values to editor
		let fetter = characterWIP.fetters[index];
		let fetterType = getById(fetter.type, dollFetterTypes);
		$("#fetter-target").text(fetter.target);
		$("#fetter-target-type").val(fetterType.targetGroup).trigger("change");
		$("#fetter-type").val(fetterType.name).trigger("change");
		updateFetterTypePreview(fetterType);
	}
	else{
		//clear form; set to defaults
		$("#fetter-target").val("");
		$("#fetter-target-type").val("Doll").trigger("change");
		$("#fetter-type").val("").trigger("change");
		updateFetterTypePreview(null);
	}
	//open modal
	$("#fetter-editor").modal();
}
function deleteFetter(index){
	characterWIP.fetters.splice(index, 1);
	saveDoll(characterWIP);
	$("#fetter-list").html(buildDollFetterList());
}
function onFetterTargetTypeChange(){
	let options = "";
	let targetGroup = $("#fetter-target-type").val();
	for(let i = 0; i < dollFetterTypes.length; i++){
		let fetter = dollFetterTypes[i];
		if(targetGroup == fetter.targetGroup){
			options += `<option>${fetter.name}</option>`;
		}
	}
	$("#fetter-type").html(options);
	setRandomFetterType();
}
function onFetterTypeChange(){
	let fetterName = $("#fetter-type").val();
	let fetterGroup = $("#fetter-target-type").val();
	for(let i = 0; i < dollFetterTypes.length; i++){
		let fetter = dollFetterTypes[i];
		if(fetter.targetGroup == fetterGroup && fetter.name == fetterName){
			updateFetterTypePreview(fetter);
			break;
		}
	}
}
function updateFetterTypePreview(fetterType){
	let content = "";
	if(fetterType != null){
		let imgSrc = "Content/Fetters/" + fetterType.flavorImage;
		let imgSrcMad = "Content/Fetters/" + fetterType.madFlavorImage;
		let defaultSrc = "Content/Fetters/_placeholder_Fetter.png";
		
		content = 
		`
		<div class="">
			<div class="d-flex">
				<h6 class="rounded bg-black p-2 mb-1">
					<span class="text-white">${fetterType.name}</span>
					<span class="text-secondary"> /// </span>
					<span class="text-danger">${fetterType.madName}</span>
				</h6>
			</div>
			<div class="d-flex mb-2">
				<object data='${imgSrc}' type="image/png" class="tile-64 mr-2">
					<img src='${defaultSrc}' class="tile-64">
				</object>
				<div class="border pl-2 pr-2 flex-fill">
					<p>${fetterType.flavorText}</p>
				</div>
			</div>
			<div class="d-flex">
				<object data='${imgSrcMad}' type="image/png" class="tile-64 mr-2">
					<img src='${defaultSrc}' class="tile-64">
				</object>
				<div class="border pl-2 pr-2 flex-fill">
					<p class="mb-1">${fetterType.madEffect}</p>
					<p class="font-italic small mb-0">"${fetterType.madFlavorText}"</p>
				</div>
			</div>
		</div>
		`;
	}
	else{
		content=
		`
		<div class="">
			<div class="d-flex">
				<h6 class="rounded bg-black p-2 mb-1 text-secondary">Select a Fetter Type</h6>
			</div>
			<div class="d-flex mb-2">
				<div class="tile-64 mr-2"></div>
				<div class="border pl-2 pr-2 flex-fill"></div>
			</div>
			<div class="d-flex">
				<div class="tile-64 mr-2"></div>
				<div class="border pl-2 pr-2 flex-fill"></div>
			</div>
		</div>
		
		`;
	}
	$("#fetter-preview").html(content);
}
function saveFetter(){
	let fetter = new Fetter();
	fetter.target = $("#fetter-target").val();
	let fetterName = $("#fetter-type").val();
	let fetterGroup = $("#fetter-target-type").val();
	for(let i = 0; i < dollFetterTypes.length; i++){
		let f = dollFetterTypes[i];
		if(f.targetGroup == fetterGroup && f.name == fetterName){
			fetter.type = f.id;
			break;
		}
	}
	characterWIP.fetters[fetterIndex] = fetter;
	saveDoll(characterWIP);
	$("#fetter-list").html(buildDollFetterList());
}
function setRandomFetterType(){
	//get list of options
	let options = [];
	$("#fetter-type > option").each(function(){
		options.push($(this).text());
	});
	//get random option
	let randOption = options[Math.floor(Math.random() * options.length)];
	//set random option
	$("#fetter-type").val(randOption).trigger("change");
}
