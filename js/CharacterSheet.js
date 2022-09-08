//Global variables
const timingIcon = "far fa-clock";
const costIcon = "far fa-compass";
const rangeIcon = "far fa-arrow-alt-circle-right";
function viewDoll(id){
	let data = loadData();
	let doll = getById(id, data.charList);
	
	if(doll != null){
		characterWIP = doll;
		let premonition = buildMemoryFragmentListItem(getById(doll.premonition, premonitions));
		let deployment = buildDeploymentChoice();
		let favor = buildFavorDisplay();
		let fragmentList = buildMemoryFragmentList(doll);
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
				${favor}
				${deployment}
			
			</div>
		</div>
		${fragmentList}
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
		<div class="bg-black rounded text-white p-2 col">
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