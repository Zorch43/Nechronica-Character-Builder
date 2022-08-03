//Global variables

function viewDoll(id){
	let data = loadData();
	let doll = getById(id, data.charList);
	
	if(doll != null){
		characterWIP = doll;
		let premonition = buildMemoryFragmentListItem(getById(doll.premonition, premonitions));
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
			</div>
			<div class="col card">
			
			</div>
		</div>
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
		content += buildSkillListItem(doll.skills[i]);
	}
	return content;
}
function buildSkillListItem(skill){
	let skillFull = getById(skill.id, dollSkills);
	let imgSrc = "Content/Skills/" + skillFull.flavorImage;
	let effectText = "";
	for(let i = 0; i < skillFull.effectText.length; i++){
		effectText += `<p>${skillFull.effectText[i]}</p>`;
	}
	let usedToggle = "";
	if(skillFull.usable){
		let checkId = `skillUsedCheck${skill.id}`;
		let checked = "";
		if(skill.used){
			checked = "checked";
		}
		usedToggle=
		`
		<div class="form-check">
		  <label class="form-check-label">
			<input id='skillUsedCheck${skill.id}' type="checkbox" class="form-check-input" 
			${checked} onchange="setSkillUsedState('skillUsedCheck${skill.id}', ${skill.id})">Used
		  </label>
		</div>
		`;
	}
	let content = 
	`
	<div class="rounded border p-2 mb-1 text-black-5 necro-item row">
		<div class="col-lg p-0">
			
			<div class="d-flex">
				<img src=${imgSrc} class="mr-2 rounded tile-64">
				<div class="">
					<h5>${skillFull.name}</h5>
					<p>Timing: ${skillFull.timing} /// Cost: ${skillFull.cost} /// Range: ${skillFull.range}</p>
				</div>
			</div>
			${usedToggle}
		</div>
		<div class="border border-right-0 border-bottom-0 p-2 mt-1 bg-white text-black-50 col-lg">
			${effectText}
		</div>
	</div>
	`;
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
			<div class="pr-3 pl-3">
				${headParts}
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<h5 class="necro-bar">Arms</h5>
			<div class="pr-3 pl-3">
				${armParts}
			</div>
		</div>
		<img src="Content/CharSheetArm.png" id="necro-arm">
	</div>
	<div class="row">
		<img src="Content/CharSheetTorso.png" id="necro-torso">
		<div class="col">
			<h5 class="necro-bar-flat">Torso</h5>
			<div class="pr-3 pl-3">
				${torsoParts}
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<h5 class="necro-bar">Legs</h5>
			<div class="pr-3 pl-3">
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
			content += buildPartListItem(doll.parts[i]);
		}
	}
	for(let i = 0; i < doll.treasures.length; i++){
		if(doll.treasures[i].partLocation == partLocation){
			content += buildTreasureListItem(doll.treasures[i]);
		}
	}
	return content;
}
function buildPartListItem(part){
	let fullPart = getById(part.id, dollParts);
	let imgSrc = "Content/Parts/" + fullPart.flavorImage;
	let effectText = "";
	for(let i = 0; i < fullPart.effect.length; i++){
		effectText += `<p>${fullPart.effect[i]}</p>`;
	}
	let usedToggle = "";
	if(fullPart.usable){
		let checked = "";
		if(part.used){
			checked = "checked";
		}
		usedToggle=
		`
		<div class="form-check-inline">
		  <label class="form-check-label">
			<input id='partUsedCheck${part.id}' type="checkbox" class="form-check-input" 
			${checked} onchange="setPartUsedState('partUsedCheck${part.id}', ${part.id})">Used
		  </label>
		</div>
		`;
	}
	let damageChecked = "";
	if(part.damaged){
		damageChecked = "checked";
	}
	let damageToggle = 
	`
	<div class="form-check-inline">
	  <label class="form-check-label">
		<input id='partDmgCheck${part.id}' type="checkbox" class="form-check-input" 
		${damageChecked} onchange="setPartDmgState('partDmgCheck${part.id}', ${part.id})">Damaged
	  </label>
	</div>
	`;
	let content = 
	`
	<div class="rounded border p-2 mb-1 text-black-5 necro-item row">
		<div class="col-lg p-0">
			<div class="d-flex">
				<img src=${imgSrc} class="mr-2 rounded tile-64">
				<div class="">
					<h5>${fullPart.name}</h5>
					<p>Timing: ${fullPart.timing} /// Cost: ${fullPart.cost} /// Range: ${fullPart.range}</p>
				</div>
			</div>
			${damageToggle}
			${usedToggle}
		</div>
		<div class="border border-right-0 border-bottom-0 p-2 mt-1 bg-white text-black-50 col-lg">
			${effectText}
		</div>
	</div>
	`;
	return content;
}
function buildTreasureListItem(treasure){
	let content = ""
	
	return content;
}
function setSkillUsedState(checkId, skillId){
	let skill = getById(skillId, characterWIP.skills);
	skill.used = $("#" + checkId).is(":checked");
	saveDoll(characterWIP);
}
function setPartUsedState(checkId, partId){
	let part = getById(partId, characterWIP.parts);
	part.used = $("#" + checkId).is(":checked");
	saveDoll(characterWIP);
}
function setPartDmgState(checkId, partId){
	let part = getById(partId, characterWIP.parts);
	part.damaged = $("#" + checkId).is(":checked");
	saveDoll(characterWIP);
}