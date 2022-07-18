//global variables

let characterWIP = new Doll(-1);//current character creation data
let premonitionsPopulated = false;
let memoryFragmentsPopulated = false;
let fragmentDisplayId = "";
let memorySlot = -1;
let positionsPopulated = false;
let classesPopulated = false;
let partsPopulated = false;
let selectedPart = null;
let selectedPartIndex = -1;
let treasuresPopulated = false;
//content loader
function startCharacterCreation(){
	let content=
	`
	<!-- Nav tabs -->
	<ul class="nav nav-tabs d-flex ml-3 mr-3">
	  <li class="nav-item flex-fill">
		<a class="nav-link active" data-toggle="tab" href="#name-age" id="name-age-tab">Name & Age</a>
	  </li>
	  <li class="nav-item flex-fill">
		<a class="nav-link" data-toggle="tab" href="#memories" id="memories-tab">Memories</a>
	  </li>
	  <li class="nav-item flex-fill">
		<a class="nav-link" data-toggle="tab" href="#position" id="position-tab" onclick="populatePositions('position-picker')">Position</a>
	  </li>
	  <li class="nav-item flex-fill">
		<a class="nav-link" data-toggle="tab" href="#classes" id="classes-tab" onclick="populateClasses('class-picker')">Classes</a>
	  </li>
	  <li class="nav-item flex-fill">
		<a class="nav-link" data-toggle="tab" href="#r-points" id="r-points-tab" onclick="updateRPoints()">Reinforcement</a>
	  </li>
	  <li class="nav-item flex-fill">
		<a class="nav-link" data-toggle="tab" href="#parts" id="parts-tab" onclick="updateParts()">Parts</a>
	  </li>
	  <li class="nav-item flex-fill">
		<a class="nav-link" data-toggle="tab" href="#treasure" id="treasure-tab" onclick="updateTreasure()">Treasure</a>
	  </li>
	  <li class="nav-item flex-fill">
		<a class="nav-link creation-tab" data-toggle="tab" href="#deployment" id="deployment-tab">Deployment</a>
	  </li>
	</ul>

	<!-- Tab panes -->
	<div class="tab-content">
		<div class="tab-pane container active" id="name-age">
			<div class="mt-3 p-3 border rounded">
				<p class="pl-3 pr-3 pt-3">
					Your name can be a nickname, a Japanese name, a 
					foreign name, a number, or anything you like. 
					Since you're all made from corpses, often from 
					who knows where, it doesn't have to make sense. 
					Names are often bestowed upon you by the 
					Necromancers. Don't worry yourselves over them.
				</p>
				<div class="pl-3 pt-3 form-inline">
					<label for="cc-name">Name:</label>
					<input class="form-control mr-2 ml-2" id="cc-name" onchange="setName('cc-name')">
					<button type="button" class="btn btn-secondary" onclick ="randomName('cc-name')">Random</button>
				</div>
				<div class="pl-3 pt-3 form-inline">
					<label for="cc-age">Age:</label>
					<input type="number" class="form-control mr-2 ml-2" style="width:70px" id="cc-age" onchange="setAge('cc-age')">
					<button type="button" class="btn btn-secondary" onclick="randomAge('cc-age')">Random</button>
				</div>
				<p class="p-3">
					"Age" refers to the age you were when you died, 
					and is usually between 8 and 17.
				</p>
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-danger col-2">Cancel</button>
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('memories-tab')">Next</button>
				</div>
			</div>
		</div>
		<div class="tab-pane container fade" id="memories">
			<div class="mt-3 p-3 border rounded">
				<p class="pl-3 pr-3 pt-3">
					Though Dolls have lost most of their memories of 
					their previous life, they have not lost them all.
					Just a few memories of their previous life remain.
					These meager scraps are thus known as "Fragments 
					of Memory."
				</p>
				<p class="pl-3 pr-3">
					Dolls possess but two of these "Fragments of 
					Memory" when they are newly awakened.
				</p>
				<p class="pl-3 pr-3">
					These are the foundation of your Doll. They are 
					the patches that hold the heart of your Doll 
					together.
				</p>
				<div class="pl-3 pr-3 pt-3 form-inline">
					<label for="cc-memory-1">Memory Fragment 1</label>
					<div class="border rounded col ml-2 mr-2" style="height:80px" id="cc-memory-1"></div>
					<button type="button" class="btn btn-secondary mr-2" data-toggle="modal" data-target="#memory-picker" onclick ="pickMemory('cc-memory-1', '0')">Pick</button>
					<button type="button" class="btn btn-secondary" onclick ="randomMemory('cc-memory-1', '0')">Random</button>
				</div>
				<div class="pl-3 pr-3 pt-3 form-inline">
					<label for="cc-memory-2">Memory Fragment 2</label>
					<div class="border rounded col ml-2 mr-2" style="height:80px" id="cc-memory-2"></div>
					<button type="button" class="btn btn-secondary mr-2" data-toggle="modal" data-target="#memory-picker" onclick ="pickMemory('cc-memory-2', '1')">Pick</button>
					<button type="button" class="btn btn-secondary" onclick ="randomMemory('cc-memory-2', '1')">Random</button>
				</div>
				<div class="pl-3 pr-3 pt-3 form-inline">
					<label for="cc-premonition">Premonition</label>
					<div class="border rounded col ml-2 mr-2" style="height:80px" id="cc-premonition">
						
					</div>
					<button type="button" class="btn btn-secondary mr-2" data-toggle="modal" data-target="#premonition-picker" onclick ="pickPremonition('premonition-picker', 'premonition-list', 'cc-premonition')">Pick</button>
					<button type="button" class="btn btn-secondary" onclick ="randomPremonition('cc-premonition')">Random</button>
				</div>
				<p class="p-3">
					As game sessions take place, the Dolls will
					reacquire their lost memories. But they can carry
					only a vague suspicion of what these memories
					will reveal to them. These "Premonitions" serve
					as a guide towards their former lives.
				</p>
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('name-age-tab')">Back</button>
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('position-tab')">Next</button>
				</div>
			</div>
		</div>
		<div class="tab-pane container fade" id="position">
			<div class="mt-3 p-3 border rounded">
				<p>Dolls do not wander the world on their own; they have sisters with them. Amongst their
					fellow sisters, each of the Dolls fills a spiritual role- this is known as their Position.</p>
				<p>Select a skill from any of the positions below to set your doll's position.</p>
				<div class="row">
					<div class="col-3">
						<div class="sticky-top">
							<table class="table table-borderless table-dark sticky-top">
								<thead>
									<tr>
										<th style="width:64px">Position:</th>
										<th style="">Skill:</th>
									<tr>
								</thead>
								<tbody>
									<tr>
										<td id="selectedPosition">None</td>
										<td id="selectedPositionSkill">None</td>
									</tr>
								</tbody>
							</table>
							<button class="btn btn-danger" onclick="resetPosition()" style="width:100%">Reset</button>
						</div>
					</div>
					<div class="col" id="position-picker">
						
					</div>
				</div>
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('memories-tab')">Back</button>
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('classes-tab')">Next</button>
				</div>
			</div>
		</div>
		<div class="tab-pane container fade" id="classes">
			<div class="mt-3 p-3 border rounded">
				<p>Undead are created with a variety of types of armament.</p>
				<p>In order that they may oppose the Undead, Dolls themselves are given reinforcements.</p>
				<p>Select three skills from up to two classes.  The skills selected will determine your primary and secondary classes.
				  The selected classes determine the Doll's starting reinforcement points.  A classes' special skill may only be taken if 
				  that class is selected for both the primary and secondary class.</p>
				<div class="row">
					<div class="col-3">
						<div class="sticky-top">
							<table class="table table-dark">
								<thead>
									<tr>
										<th style="width:64px">Class:</th>
										<th style="">Skill:</th>
									<tr>
								</thead>
								<tbody>
									<tr>
										<td id="selectedClass1" rowspan="2">None</td>
										<td id="selectedSkill1">None</td>
									</tr>
									<tr>
										<td id="selectedSkill2">None</td>
									</tr>
									<tr>
										<td id="selectedClass2">None</td>
										<td id="selectedSkill3">None</td>
									</tr>
								</tbody>
							</table>
							<table class="table table-dark">
								<tbody>
									<tr>
										<th>Armaments:</th>
										<td id="class-rpa">0</td>
									</tr>
									<tr>
										<th>Mutations:</th>
										<td id="class-rpm">0</td>
									</tr>
									<tr>
										<th>Enhancements:</th>
										<td id="class-rpe">0</td>
									</tr>
								</tbody>
							</table>
							<button class="btn btn-danger" onclick="resetClass()" style="width:100%">Reset</button>
						</div>
						
					</div>
					<div class="col" id="class-picker">
						
					</div>
				</div>
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('position-tab')">Back</button>
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('r-points-tab')">Next</button>
				</div>
			</div>
		</div>
		<div class="tab-pane container fade" id="r-points">
			<div class="mt-3 p-3 border rounded">
				<p>
					Classes possess point values divided among "Armaments", "Mutations", and
					"Enhancements." These are Reinforcement Points, and determine which manner of
					special Parts can be used to reinforce a Doll's body.
				</p>
				<div class="d-flex justify-content-center">
					
					<div class="col-6">
						<h4 id="r-point-instructions" class="text-nowrap">Assign one reinforcement point to any category:</h4> 
						<table id="rp-allocation-table" class="table table-dark">
							<tbody>
								<tr>
									<th style="width:80%">
										Armaments:
										<p class="font-italic small font-weight-light">
											Weapons, guns and other offensive equipment. 
											Frequently attached to the arms.
										</p>
									</th>
									<td class="font-weight-bolder text-outline text-white text-monospace align-middle">
										<span id="rpa-minus" role="button" class="mr-1 disabled" onclick="unassignRPoint('a')">-</span>
										<span class="" id="total-rpa">0</span>
										<span id="rpa-plus" role="button" class="ml-1" onClick="assignRPoint('a')">+</span>
									</td>
								</tr>
								<tr>
									<th style="width:80%">
										Mutations:
										<p class="font-italic small font-weight-light">
											Special bodily organs. They warp one's appearance, 
											but possess great power.
										</p>
									</th>
									<td class="font-weight-bolder text-outline text-white text-monospace align-middle">
										<span id="rpm-minus"role="button" class="mr-1 disabled" onclick="unassignRPoint('m')">-</span>
										<span id="total-rpm">0</span>
										<span id="rpm-plus" role="button" class="ml-1" onClick="assignRPoint('m')">+</span>
									</td>
								</tr>
								<tr>
									<th style="width:80%">
										Enhancements:
										<p class="font-italic small font-weight-light">
											Mechanical parts attached to the body, 
											often made of metal or plastic.
										</p>
									</th>
									<td class="font-weight-bolder text-outline text-white text-monospace align-middle">
										<span id="rpe-minus" role="button" class="mr-1 disabled" onclick="unassignRPoint('e')">-</span>
										<span id="total-rpe">0</span>
										<span id="rpm-plus" role="button" class="ml-1" onClick="assignRPoint('e')">+</span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('classes-tab')">Back</button>
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('parts-tab')">Next</button>
				</div>
			</div>
		</div>
		<div class="tab-pane container fade" id="parts">
			<div class="mt-3 p-3 border rounded">
				<p>After determining your Reinforcement Points, you may select Reinforcement Parts.</p>
				<p>Parts refer to pieces of a Doll's body. Prior to this step of creation, Dolls have three
				parts in each of their Head, Arms, Torso and Legs - a total of 12. These are their Basic
				Parts. Reinforcement Parts are special Parts that can be acquired in addition to these.</p>
				<p>In addition to the three categories of Reinforcement Parts, they are divided into three tiers. 
				For every three reinforcement points in a category, Dolls gain one tier 1, one tier 2, and one tier 3 reinforcement point.
				Each reinforcement point can be used to purchase a point of that tier or lower from its category.</p>
				<div class="row">
					<div id="parts-summary" class="col">
						<div class="sticky-top">
							<div id="remaining-points">
								<table class="table table-dark">
									<tbody>
										<tr>
											<th style="width:120px">Armaments:</th>
											<td id="tiered-rpa"></td>
										</tr>
										<tr>
											<th>Mutations:</th>
											<td id="tiered-rpm"></td>
										</tr>
										<tr>
											<th>Enhancements:</th>
											<td id="tiered-rpe"></td>
										</tr>
									</tbody>
								</table>
							</div>
							<button type="button" class="btn btn-danger" style="width:100%" onclick="resetParts()">Reset</button>
							<div class="row mt-3">
								<div id="partCol1" class="col">
									
								</div>
								<div id="partCol2" class="col">
									
								</div>
							</div>
						</div>
					</div>
					<div id="part-picker" class="col-8">
						
					</div>
				</div>
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('r-points-tab')">Back</button>
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('treasure-tab')">Next</button>
				</div>
			</div>
		</div>
		<div class="tab-pane container fade" id="treasure">
			<div class="mt-3 p-3 border rounded">
				<p>Though Dolls may be dead, they are still girls.</p>
				<p>They each possess a single trinket as girls would. These are precious belongings where
				the Hearts of the Dolls are kept, and are known as Treasures.</p>
				<p>Treasures are treated as a Part. Below is listed the Part data for a "Treasure."</p>
				<p>You may generate a random treasure, pick from a list, or create your own by editing the title and flavor text of the treasure. 
				Then assign the treasure to the location of your choice.</p>
				<div class="d-flex justify-content-center">
					<div class="col">

					</div>
					<div class="col-8">
						<div id="treasure" class="rounded border p-2 mb-1 text-black-50 necro-item">
							<div class="d-flex">
								<img id="treasureImage" src="Content/Parts/Treasure.png" class="mr-2 rounded tile-64">
								<div class="">
									<input id="treasureName" onchange="editTreasure()" class="form-control treasure-title mb-1">
									<div class="form-inline">
										<span>Location: </span>
										<select id="treasureLocation" onchange="editTreasure()" class="form-control treasure-location ml-1 mr-1">
											<option value="Head">Head</option>
											<option value="Arms">Arms</option>
											<option value="Torso">Torso</option>
											<option value="Legs">Legs</option>
										</select>
										<span>/// Timing: Auto /// Cost: None /// Range: None</span>
									</div>
								</div>
							</div>
							<div class="border border-right-0 border-bottom-0 p-2 mt-1 bg-white text-black-50">
								<p>Your Treasure.</p>
								<p>At the end of the Battle Phase, you
								may remove one Madness Point from a Fetter of your
								choice.</p>
								<p> If this Part is destroyed, immediately remove it
								from your Owned Parts.</p>
								<textarea id="treasureFlavor" rows="3" onchange="editTreasure()" class="form-control font-italic lighter small">

								</textarea>
							</div>
						</div>
					</div>
					<div class="col">
						<button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#treasure-picker">Pick</button>
						<button type="button" class="btn btn-dark" onclick="pickRandomTreasure()"><i class="fas fa-dice"></i></button>
					</div>
				</div>
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('parts-tab')">Back</button>
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('deployment-tab')">Next</button>
				</div>
			</div>
		</div>
		<div class="tab-pane container fade" id="deployment">
			<div class="mt-3 p-3 border rounded">
				<div class="row">
					<div class="col">
						<p>The final step is to decide your Initial Deployment.</p>
						<p>This is the area of the Battle Map in which your Doll 
						is placed at the beginning of combat. Choose one of 
						"Eden", "Elysium" or "Limbo."</p>
						<p>If you have many short range attacks, "Limbo" is advisable, whereas if you specialize in
						attacks with a range of 1 or 2 "Elysium" is a wise choice, and if you have attacks with a
						range of 3 or greater "Eden" is best.</p>
						<p>You can change your Initial Deployment between sessions. If you are displeased with
						your current Initial Deployment, talk to the Necromancer between sessions about changing it.</p>
					</div>
					<div class="col-3">
						<h4 class="necro-bar">Initial Deployment</h4>
						<div class="bg-black rounded text-white p-1 pl-4 pr-4" style="margin-top:-16px">
							<div class="bg-white rounded-lg text-dark p-2 mb-1" style="width:100%">
								<div class="form-check">
									<label for="ipeden" class="form-check-label">
										<input class="form-check-input" type="radio" id="ipeden" name="initialplacement" value="option1" onclick="setDeployment(0)">Eden
									</label>
								</div>
							</div>
							<div class="bg-white rounded-lg text-dark p-2 mb-1" style="width:100%">
								<div class="form-check">
									<label for="ipelysium" class="form-check-label">
										<input class="form-check-input" type="radio" id="ipelysium" name="initialplacement" value="option2" onclick="setDeployment(1)">Elysium
									</label>
								</div>
							</div>
							<div class="bg-white rounded-lg text-dark p-2 mb-1" style="width:100%">
								<div class="form-check">
									<label for="iplimbo" class="form-check-label">
										<input class="form-check-input" type="radio" id="iplimbo" name="initialplacement" value="option3" onclick="setDeployment(2)">Limbo
									</label>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				<div class="d-flex justify-content-between mt-3">
					<button type="button" class="btn btn-dark col-2" onclick="clickLink('treasure-tab')">Back</button>
					<button type="button" class="btn btn-success col-2" onClick="finishCreation()">Finish</button>
				</div>
			</div>
		</div>
	</div>
	`;
	$('#mainContainer').html(content);
}
//utilities
function clickLink(linkId){
	document.getElementById(linkId).click();
}

//pickers
//random age
function randomAge(agefieldId){
	let age = 8 + Math.floor(Math.random() * 10);
	document.getElementById(agefieldId).value = age;
	setAge(ageFieldId);
}

//random name
function randomName(nameFieldId){
	let rand = randomNames[Math.floor(randomNames.length * Math.random())];
	document.getElementById(nameFieldId).value = rand;
	setName(nameFieldId);
}
//set name data
function setName(nameFieldId){
	characterWIP.name = document.getElementById(nameFieldId).value.replace(/(\r\n|\n|\r)/gm,"");
}
//set age data
function setAge(ageFieldId){
	characterWIP.age = document.getElementById(ageFieldId).value.replace(/(\r\n|\n|\r)/gm,"");
}

//random memory
function randomMemory(displayId, slotNumber){
	let rand = memoryFragments[Math.floor(Math.random() * memoryFragments.length)];

	//update data
	characterWIP.fragments[slotNumber] = rand.id;
	//update form
	document.getElementById(displayId).innerHTML = buildMemory(rand, false);
}
//pick memory from list
function pickMemory(displayId, slotNumber){
	//populate modal list
	populateMemoryPicker();
	//set display target
	fragmentDisplayId = displayId;
	//set data target
	memorySlot = slotNumber;
}

function populateMemoryPicker(){
	if(!memoryFragmentsPopulated){
		let content = "";
		for(let i = 0; i < memoryFragments.length; i++){
			content += buildMemory(memoryFragments[i], true);
		}
		document.getElementById("memory-list").innerHTML = content;
	}
}
function buildMemory(memory, clickable){
	
	let clickableCode = "";
	if(clickable){
		clickableCode = `role="button" onclick="setMemory(${memory.id})"`;
	}
	
	let content = 
	`
	<div class="row" ${clickableCode}>
		<div class="border col-3 d-flex" style="height:80px"><h4 class="my-auto mx-auto text-center font-weight-bold">${memory.name}</h4></div>
		<div class="border pl-1 pr-1 col d-flex" style="height:80px"><p class="small font-italic my-auto">${memory.description}</p></div>
	</div>
	`;
	
	return content;
}
function setMemory(memoryId){
	//get memory object
	let memory = memoryFragments[memoryId];
	//update data
	characterWIP.fragments[memorySlot] = memory;
	//update form
	document.getElementById(fragmentDisplayId).innerHTML = buildMemory(memory, false);
	//close modal
	$("#memory-picker").modal('hide');
}

//random premonition
function randomPremonition(){
	let premonition = premonitions[Math.floor(Math.random() * premonitions.length)];
	//update data
	characterWIP.premonition = premonition;
	//update form
	document.getElementById("cc-premonition").innerHTML = buildPremonition(premonition, false);
}
function pickPremonition(){
	//populate list of premonitions
	populatePremonitionPicker();
}
//populate list of premonitions
function populatePremonitionPicker(){
	if(!premonitionsPopulated){
		let content = "";
		for(let i = 0; i < premonitions.length; i++){
			content += buildPremonition(premonitions[i], true);
		}
		document.getElementById("premonition-list").innerHTML = content;
		
	}
}
function buildPremonition(premonition, clickable){
	let clickableCode = "";
	if(clickable){
		clickableCode = `role="button" onclick="setPremonition(${premonition.id})"`;
	}
	let code = 
	`
	<div class="row" ${clickableCode}>
		<div class="border col-3 d-flex" style="height:80px"><h4 class="my-auto mx-auto text-center font-weight-bold">${premonition.name}</h4></div>
		<div class="border pl-1 pr-1 col d-flex" style="height:80px"><p class="small font-italic my-auto">${premonition.description}</p></div>
	</div>
	`;
	return code;
}
function setPremonition(premonitionId){
	//get premonition object
	let premonition = premonitions[premonitionId];
	//update data
	characterWIP.premonition = premonition;
	//update form
	document.getElementById("cc-premonition").innerHTML = buildPremonition(premonition, false);
	//close modal
	$("#premonition-picker").modal('hide');
}

function populatePositions(displayId){
	if(!positionsPopulated){
		populateClassSelector(displayId, dollPositions);
		positionsPopulated = true;
	}
}

function populateClasses(displayId){
	if(!classesPopulated){
		populateClassSelector(displayId, dollClasses);
		classesPopulated = true;
	}
	displayClassSkills();
}

function populateClassSelector(displayId, classList){
	let content = "";
	for(let i = 0; i < classList.length; i++){
		content += buildClass(classList[i], displayId);
	}
	document.getElementById(displayId).innerHTML = content;

	$('#' + displayId + ' .collapse').on('show.bs.collapse', function(e) {
	  var $card = $(this).closest('.card');
	  var $open = $($(this).data('parent')).find('.collapse.show');
	  
	  var additionalOffset = 0;
	  if($card.prevAll().filter($open.closest('.card')).length !== 0)
	  {
			additionalOffset =  $open.height();
	  }
	  $('html,body').animate({
		scrollTop: $card.offset().top - additionalOffset
	  }, 500);
	});
}

function buildClass(dollClass, displayId){
	let collapseName = "collapse" + dollClass.name;
	let classDescription = "";
	for(let i = 0; i < dollClass.flavorText.length; i++){
		classDescription += `<p>${dollClass.flavorText[i]}</p>`;
	}
	let imgSrc = "Content/Classes/" + dollClass.flavorImage;
	let imgSrcPrev = "Content/Classes/" + "preview_" + dollClass.flavorImage;
	let rPointContent = "";
	let isPosition = true;
	if(dollClass.rpa > 0 || dollClass.rpm > 0 || dollClass.rpe > 0){
		isPosition = false;
		rPointContent = `
		<table class="table table-dark">
			<tbody>
				<tr>
					<th>Armaments:</th>
					<td>${dollClass.rpa}</td>
				</tr>
				<tr>
					<th>Mutations:</th>
					<td>${dollClass.rpm}</td>
				</tr>
				<tr>
					<th>Enhancements:</th>
					<td>${dollClass.rpe}</td>
				</tr>
			</tbody>
		</table>
		`;
	}
	let classSkills = populateClassSkills(dollClass.id, isPosition);
	let content = 
	`
	<div class="card">
	  <div class="card-header p-0">
		<a class="btn btn-light col-12 text-left class-preview" 
			style="background-image: url('${imgSrcPrev}')" 
			data-toggle="collapse" href="#${collapseName}">
		  <h4>${dollClass.name}</h4>
		</a>
	  </div>
		<div id=${collapseName} class="collapse" data-parent="#${displayId}">
			<div class="card-body row">
				<div class="col-4">
					<img class="card-img-top" src=${imgSrc}>
					${rPointContent}
					<div class="card-text">
						${classDescription}
					</div>
				</div>
				<div class="col">
					${classSkills}
					
				</div>
			</div>
	  </div>
	</div>
	`;
	return content;
}

function populateClassSkills(classId, isPosition){
	
	let content = "";
	for(let i = 0; i < dollSkills.length; i++){
		let skill = dollSkills[i];
		
		if(skill.classId == classId){
			content += buildSkill(skill, isPosition);
		}
	}
	return content;
}

function buildSkill(skill, isPosition){
	let imgSrc = "Content/Skills/" + skill.flavorImage;
	let effectText = "";
	for(let i = 0; i < skill.effectText.length; i++){
		effectText += `<p>${skill.effectText[i]}</p>`;
	}
	let special = "";
	if(skill.special == true){
		special = `
		<span class="rounded bg-dark text-white pl-1 pr-1 mr-1">Special: </span>
		`;
	}
	content =
	`
	<div id="skill-${skill.id}" class="rounded border p-2 mb-1 text-black-50 necro-item" role="button" onclick="setSkill(${skill.classId},${skill.id},${isPosition})">
		<div class="d-flex">
			<img src=${imgSrc} class="mr-2 rounded" style="width:64px; height:64px;">
			<div class="">
				<h5>${special}${skill.name}</h5>
				<p>Timing: ${skill.timing} /// Cost: ${skill.cost} /// Range: ${skill.range}</p>
			</div>
		</div>
		<div class="border border-right-0 border-bottom-0 p-2 mt-1 bg-white text-black-50">
			${effectText}
			<p class="font-italic lighter small">
				${skill.flavorText}
			</p>
		</div>
	</div>
	`;
	return content;
}

function setSkill(classId, skillId, isPosition){
	if(isPosition){
		setPositionSkill(classId, skillId);
	}
	else{
		setClassSkill(classId, skillId);
	}
}

function setPositionSkill(positionId, skillId){
	if(skillId == characterWIP.skills[0]){
		characterWIP.classPosition = -1;
		characterWIP.skills[0] = -1;
	}
	else{
		characterWIP.classPosition = positionId;
		characterWIP.skills[0] = skillId;//position skill takes first position
	}
	
	displayPositionSkill();
}

function displayPositionSkill(){
	if(characterWIP.classPosition > -1){
		let position = null;
		for(let i = 0; i < dollPositions.length; i++){
			if(characterWIP.classPosition == dollPositions[i].id){
				position = dollPositions[i];
				break;
			}
		}
		document.getElementById("selectedPosition").innerHTML = position.name;
	}
	else{
		document.getElementById("selectedPosition").innerHTML = "None";
	}
	
	if(characterWIP.skills[0] > -1){
		let skill = null;
		for(i = 0; i < dollSkills.length; i++){
			if(characterWIP.skills[0] == dollSkills[i].id){
				skill = dollSkills[i];
			}
		}
		document.getElementById("selectedPositionSkill").innerHTML = skill.name;
		//disable all position skills
		$('#position-picker .necro-item').addClass('disabled');
		$('#position-picker .necro-item').removeClass('active');
		//set selected skill as active
		$('#skill-' + characterWIP.skills[0]).addClass('active');
		$('#skill-' + characterWIP.skills[0]).removeClass('disabled');
		
	}
	else{
		document.getElementById("selectedPositionSkill").innerHTML = "None";
		//enable all position skills
		$('#position-picker .necro-item').removeClass('disabled');
		//unselect last selected position skill
		$('#position-picker .necro-item').removeClass('active');
	}
}
function resetPosition(){
	characterWIP.classPosition = -1;
	characterWIP.skills[0] = -1;
	displayPositionSkill();
}

function setClassSkill(classId, skillId){
	//if skillId matches any of the selected skills,
	//clear that skill, then adjust skill array and classes
	let fixArray = false;
	for(let i = 1; i < 4; i++){
		if(characterWIP.skills[i] == skillId){
			characterWIP.skills[i] = -1;
			fixArray = true;
		}
	}
	
	if(fixArray){
		//if the first slot is empty, move the second skill to the first
		if(characterWIP.skills[1] == -1){
			characterWIP.skills[1] = characterWIP.skills[2];
			characterWIP.skills[2] = -1;
		}
		//if only the second slot is empty, and the primary and secondary classes match, 
		//move the third skill to the second slot and remove the secondary class.
		if(characterWIP.skills[2] == -1 
			&& characterWIP.classPrimary == characterWIP.classSecondary){
			characterWIP.skills[2] = characterWIP.skills[3];
			characterWIP.skills[3] = -1;
			characterWIP.classSecondary = -1;
		}
		//if there is no skill in the third position, clear the secondary class
		if(characterWIP.skills[3] == -1){
			characterWIP.classSecondary = -1;
		}
		//if there are no skills in the first or second slots, 
		//swap primary and secondary classes
		if(characterWIP.skills[1] == -1 && characterWIP.skills[2] == -1){
			characterWIP.classPrimary = characterWIP.classSecondary;
			classSecondary = -1;
			characterWIP.skills[1] = characterWIP.skills[3];
			characterWIP.skills[3] = -1;
		}
	}
	//otherwise, add skill to best place in array
	else{
		//if first slot is open, put skill there and set primary class
		if(characterWIP.skills[1] == -1){
			characterWIP.skills[1] = skillId;
			characterWIP.classPrimary = classId;
		}
		//if second slot is open, and classId matches primary class,
		//place skill in slot
		else if(characterWIP.skills[2] == -1 
			&& classId == characterWIP.classPrimary){
			characterWIP.skills[2] = skillId;
		}
		//else if matches secondary class,
		//place skill in slot, then swap classes and slots 1 and 3
		else if(characterWIP.skills[2] == -1
			&& classId == characterWIP.classSecondary){
			characterWIP.skills[2] = skillId;
			characterWIP.classSecondary = characterWIP.classPrimary;
			characterWIP.classPrimary = classId;
			let skillTemp = characterWIP.skills[1];
			characterWIP.skills[1] = characterWIP.skills[3];
			characterWIP.skills[3] = skillTemp;
		}
		//else place in third slot and set secondary class
		else{
			characterWIP.skills[3] = skillId;
			characterWIP.classSecondary = classId;
		}
	}
	displayClassSkills();//update display
}

function displayClassSkills(){
	//get class and skill data objects
	let class1 = null;
	let class2 = null;
	for(let i = 0; i < dollClasses.length; i++){
		if(characterWIP.classPrimary == dollClasses[i].id){
			class1 = dollClasses[i];
		}
		if(characterWIP.classSecondary == dollClasses[i].id){
			class2 = dollClasses[i];
		}
		if(class1 != null && class2 != null){
			break;
		}
	}
	let skills = [null, null, null];
	let skillsFound = 0;
	for(let i = 0; i < dollSkills.length; i++){
		for(let s = 0; s < skills.length; s++){
			if(characterWIP.skills[s+1] == dollSkills[i].id){
				skills[s] = dollSkills[i];
				skillsFound++;
				break;
			}
		}
		if(skillsFound >= 3){
			break;
		}
	}
	
	//update display of primary class
	$('#selectedClass1').text(class1 != null ? class1.name : "None");
	//update display of secondary class
	$('#selectedClass2').text(class2 != null ? class2.name : "None");
	//update display of skills
	$('#selectedSkill1').text(skills[0] != null ? skills[0].name : "None");
	$('#selectedSkill2').text(skills[1] != null ? skills[1].name : "None");
	$('#selectedSkill3').text(skills[2] != null ? skills[2].name : "None");
	//update total reinforcement points
	$('#class-rpa').text((class1 != null ? class1.rpa : 0) 
						+ (class2 != null ? class2.rpa : 0)
						+ characterWIP.rpa);
	$('#class-rpm').text((class1 != null ? class1.rpm : 0) 
						+ (class2 != null ? class2.rpm : 0)
						+ characterWIP.rpm);
	$('#class-rpe').text((class1 != null ? class1.rpe : 0) 
						+ (class2 != null ? class2.rpe : 0)
						+ characterWIP.rpe);
	//update skill items
	//enable all items
	//deselect all items
	$('#class-picker .necro-item').removeClass('active disabled');
	
	//if skill is selected, set active
	for(let i = 0; i < skills.length; i++){
		if(skills[i] != null){
			$('#skill-' + skills[i].id).addClass('active');
		}
	}

	//if all skill slots are filled,
	if(skills[0] != null && skills[1] != null && skills[2] != null){
		//disable all non-selected skills
		$('#class-picker .necro-item:not(.active)').addClass('disabled');
	}
	//if secondary class is set,
	else if(class2 != null){
		//disable skills not from primary or secondary classes
		//and both classes' special skills
		$('#class-picker .necro-item:not('
		+ '#collapse' + class1.name + ' .necro-item,'
		+ '#collapse' + class2.name + ' .necro-item),' 
		+ '#collapse' + class1.name + ' .necro-item:first-child,'
		+ '#collapse' + class2.name + ' .necro-item:first-child')
		.addClass('disabled');
		
		//if primary and secondary classes are different,
		if(class1.id != class2.id){//note: probably unneccesary
			//disable both classes' special skills
			$('#collapse' + class1.name + ' .necro-item:first-child,'
			+ '#collapse' + class1.name + ' .necro-item:first-child')
			.addClass('disabled');
		}
		
	}
	//if special skill is selected,
	else if((skills[0] != null && skills[0].special) 
		|| (skills[1] != null && skills[1].special)){
		//disable skills from other classes	
		$('#class-picker .necro-item:not(' 
		+ '#collapse' + class1.name + ' .necro-item)')
		.addClass('disabled');
	}
	//if only a primary class is set,
	else if(class1 != null){
		//disable special skills from other classes
		$('#class-picker .necro-item:first-child:not(' 
		+ '#collapse' + class1.name + ' .necro-item)')
		.addClass('disabled');
	}
}
function resetClass(){
	characterWIP.classPrimary = -1;
	characterWIP.classSecondary = -1;
	characterWIP.skills.splice(1,3, -1, -1, -1);
	displayClassSkills();
}

function updateRPoints(){
	let totals = getRPointTotals();
	//update total reinforcement points
	$('#total-rpa').text(totals[0]);
	$('#total-rpm').text(totals[1]);
	$('#total-rpe').text(totals[2]);
	//show and hide buttons
	//hide all buttons
	$('#rp-allocation-table td>span:nth-child(1), #rp-allocation-table td>span:nth-child(3)').addClass('fade disabled');
	//if at least 1 unallocated rp, show all plus buttons
	if(characterWIP.rpu > 0){
		$('#rp-allocation-table td>span:nth-child(3)').removeClass('fade disabled');
		$('#r-point-instructions').text("Assign one reinforcement point to any category:");
	}
	else{
		$('#r-point-instructions').text("Reinforcement point allocated.");
	}
	//for each category with at least 1 point invested, show minus button
	if(characterWIP.rpa > 0){
		$('#rpa-minus').removeClass('fade disabled');
	}
	if(characterWIP.rpm > 0){
		$('#rpm-minus').removeClass('fade disabled');
	}
	if(characterWIP.rpe > 0){
		$('#rpe-minus').removeClass('fade disabled');
	}	
}
function assignRPoint(category){
	if(category == 'a'){
		characterWIP.rpa++;
	}
	else if(category == 'm'){
		characterWIP.rpm++;
	}
	else if(category == 'e'){
		characterWIP.rpe++;
	}
	characterWIP.rpu--;
	updateRPoints();
}

function unassignRPoint(category){
	if(category == 'a'){
		characterWIP.rpa--;
	}
	else if(category == 'm'){
		characterWIP.rpm--;
	}
	else if(category == 'e'){
		characterWIP.rpe--;
	}
	characterWIP.rpu++;
	updateRPoints();
}

function updateParts(){
	//one-time setup
	if(!partsPopulated){
		partsPopulated = true;
		let content = "";
		content += buildPartTiers("Armament");
		content += buildPartTiers("Mutation");
		content += buildPartTiers("Enhancement");
		
		$('#part-picker').html(content);
		$('#part-picker .collapse').on('show.bs.collapse', function(e) {
			var $card = $(this).closest('.card');
			var $open = $($(this).data('parent')).find('.collapse.show');

			var additionalOffset = 0;
			if($card.prevAll().filter($open.closest('.card')).length !== 0)
			{
				additionalOffset =  $open.height();
			}
			$('html,body').animate({
			scrollTop: $card.offset().top - additionalOffset
			}, 500);
		});
		
		//setup basic parts
		characterWIP.parts = [
			new Part(5, "Head"),//brain
			new Part(6, "Head"),//eyes
			new Part(7, "Head"),//jaw
			new Part(2, "Arms"),//shoulder
			new Part(1, "Arms"),//forearm
			new Part(0, "Arms"),//fist
			new Part(8, "Torso"),//spine
			new Part(9, "Torso"),//entrails
			new Part(9, "Torso"),//entrails
			new Part(3, "Legs"),//bone
			new Part(3, "Legs"),//bone
			new Part(4, "Legs"),//foot
		];
	}
	//get r-points
	let rPointArray = calculateTieredRPoints();
	//update list of buyable parts
	updateBuyablePartList(rPointArray);
	//update rpoints
	updateTieredRPoints(rPointArray);
	//update list of owned parts
	updateOwnedPartList();
}
function calculateTieredRPoints(){
	//get skill list
	let parts = [];
	for(let i = 0; i < characterWIP.parts.length; i++){
		parts.push(getById(characterWIP.parts[i].id, dollParts));
	}
	//get total r-points of each tier, for each category
	//let rPointArray = [[0,0,0],[0,0,0][0,0,0]];
	let rPointArray = [[],[],[]];
	let totals = getRPointTotals();
	let bonusMut = false;
	let bonusEnh = false;
	//find bonus points
	for(let i = 0; i < characterWIP.skills.length; i++){
		let skill = getById(characterWIP.skills[i], dollSkills);
		if(skill != null){
			if(skill.extremeMutation){
				bonusMut = true;
			}
			if(skill.clockwork){
				bonusEnh = true;
			}
		}
	}
	//calculate r-point array
	for(let c = 0; c < rPointArray.length; c++){
		for(let i = 0; i < totals[c];){
			//t1
			rPointArray[c].push(1);
			i++;
			//t2
			if(i < totals[c]){
				rPointArray[c].push(2);
				i++;
			}
			//t3
			if(i < totals[c]){
				rPointArray[c].push(3);
				i++;
			}
		}
	}
	if(bonusMut){
		rPointArray[1].push(3);
	}
	if(bonusEnh){
		rPointArray[2].push(3);
	}
	
	//for each reinforcement part,
	for(let i = 0; i < parts.length; i++){
		let part = parts[i];
		if(part.type == "Basic"){
			continue;
		}
		//determine category index
		let c = 0;
		if(part.type == "Mutation"){
			c = 1;
		}
		else if(part.type == "Enhancement"){
			c = 2;
		}
		//spend the most appropriate r-point
		//TODO: improve algorithm by spending in descending tier order
		let bestVal = 0;
		let bestIndex = -1;
		for(let r = 0; r < rPointArray[c].length; r++){
			let tier = rPointArray[c][r]; 
			if(part.tier <= tier && (tier <  bestVal || bestIndex == -1)){
				bestVal = tier;
				bestIndex = r;
			}
		}
		rPointArray[c][bestIndex] *= -1;//mark as spent
	}
	
	//return r-point remainder array
	return rPointArray
}
function updateBuyablePartList(rPointArray){
	//find the highest tier in each category
	let tiers = [0,0,0];
	//for each category
	for(let c = 0; c < rPointArray.length; c++){
		//find the highest value
		let bestValue = 0;
		for(let i = 0; i < rPointArray[c].length; i++){
			if(rPointArray[c][i] > bestValue){
				bestValue = rPointArray[c][i];
				if(bestValue == 3){
					break;
				}
			}
		}
		tiers[c] = bestValue;
	}
	//reset active state for all item
	$('#part-picker .necro-item').removeClass('active')
	//set active state for all owned reinforcement points
	for(let i = 0; i < characterWIP.parts.length; i++){
		$('#part' + characterWIP.parts[i].id).addClass('active');
	}
	//disable un-purchaseable parts for each category
	updateBuyablePartCategory("Armament", tiers[0]);
	updateBuyablePartCategory("Mutation", tiers[1]);
	updateBuyablePartCategory("Enhancement", tiers[2]);
	
}
function updateBuyablePartCategory(categoryName, maxTier){
	for(let t = 1; t <= 3; t++){
		if(maxTier >= t){
			$(`#${categoryName}-${t} .necro-item`).removeClass('disabled');
		}
		else{
			$(`#${categoryName}-${t} .necro-item:not(.active)`).addClass('disabled');
		}
	}
}
function updateOwnedPartList(){
	let headList = getPartsInLocation("Head");
	let armsList = getPartsInLocation("Arms");
	let torsoList = getPartsInLocation("Torso");
	let legsList = getPartsInLocation("Legs");
	
	let headContent = buildPartLocation(headList, "Head");
	let armsContent = buildPartLocation(armsList, "Arms");
	let torsoContent = buildPartLocation(torsoList, "Torso");
	let legsContent = buildPartLocation(legsList, "Legs");
	
	//rearrange tables if neccessary
	let colContent1 = "";
	let colContent2 = "";
	
	//if any one category is longer than the other categories combined (+ wiggle room + account for headers and margins),
	//move its column-mate to the other column (at the end)
	if(headList.length >= armsList.length + torsoList.length + legsList.length){
		colContent1 = headContent;
		colContent2 = armsContent + torsoContent + legsContent;
	}
	else if(armsList.length >= headList.length + torsoList.length + legsList.length){
		colContent1 = headContent + torsoContent + legsContent;
		colContent2 = armsContent;
	}	
	else if(torsoList.length >= headList.length + armsList.length + legsList.length){
		colContent1 = torsoContent;
		colContent2 = headContent + armsContent + legsContent;
	}	
	else if(legsList.length >= headList.length + armsList.length + torsoList.length){
		colContent1 = headContent + armsContent + torsoContent;
		colContent2 = legsContent;
	}		
	//if the sum of a column is significantly larger (x2) than the sum of the other column,
	//switch columns
	else if(headList.length + torsoList.length >= 2 * (armsList.length + legsList.length)
		|| 2 * (headList.length + torsoList.length) <= armsList.length + legsList.length){
		colContent1 = headContent + armsContent;
		colContent2 = torsoContent + legsContent;
	}
	//if no rearrangement needed, put in default columns
	else{
		colContent1 = headContent + torsoContent;
		colContent2 = armsContent + legsContent;
	}
	
	//display tables
	$('#partCol1').html(colContent1);
	$('#partCol2').html(colContent2);
}
function getPartsInLocation(partLocation){
	let list = [];
	for(let i = 0; i < characterWIP.parts.length; i++){
		if(characterWIP.parts[i].partLocation == partLocation){
			list.push(getById(characterWIP.parts[i].id, dollParts));
		}
	}
	return list;
}
function buildPartLocation(list, partLocation){
	let partList = "";
	for(let i = 0; i < list.length; i++){
		partList += buildPartSummary(list[i]);
	}
	let content =
	`
	<table class="table table-sm thead-dark table-bordered">
		<thead class="thead-dark">
			<tr>
				<th>${partLocation}</th>
			</tr>
		</thead>
		<tbody>
			${partList}
		</tbody>
	</table>
	`;
	return content;
}
function buildPartSummary(part){
	return `<tr><td>${part.name}</td></tr>`;
}
function buildPartTiers(type){
	let content = "";
	for(let i = 1; i <= 3; i++){
		content += buildPartCategory(type, i);
	}
	return content;
}
function buildPartCategory(type, tier){
	let collapseName = type + "-" + tier;
	let categoryParts = buildCategoryParts(type, tier);
	let content = 
	`
	<div class="card">
		<div class="card-header p-0">
			<a class="btn btn-light col-12 text-center"  
				data-toggle="collapse" href="#${collapseName}">
			  <h4>Tier ${tier} ${type}s</h4>
			</a>
		</div>
		<div id=${collapseName} class="collapse" data-parent="#part-picker">
			<div class="card-body">
				${categoryParts}
			</div>
		</div>
	</div>
	`;
	return content;
}
function buildCategoryParts(type, tier){
	let content = "";
	for(let i = 0; i < dollParts.length; i++){
		let part = dollParts[i];
		if(part.type == type && part.tier == tier){
			content += buildPart(dollParts[i]);
		}
	}
	return content;
}
function buildPart(part){
	let imgSrc = "Content/Parts/" + part.flavorImage;
	let effectText = "";
	for(let i = 0; i < part.effect.length; i++){
		effectText += `<p>${part.effect[i]}</p>`;
	}
	let content = 
	`
	<div id="part${part.id}" class="rounded border p-2 mb-1 text-black-50 necro-item" role="button" onclick="buyPart(${part.id})">
		<div class="d-flex">
			<img src=${imgSrc} class="mr-2 rounded" style="width:64px; height:64px;">
			<div class="">
				<h5>${part.name}</h5>
				<p>Location: ${part.partLocation} /// Timing: ${part.timing} /// Cost: ${part.cost} /// Range: ${part.range}</p>
			</div>
		</div>
		<div class="border border-right-0 border-bottom-0 p-2 mt-1 bg-white text-black-50">
			${effectText}
			<p class="font-italic lighter small">
				${part.flavorText}
			</p>
		</div>
	</div>
	`;
	return content;
}
function updateTieredRPoints(rPointsArray){
	updateTieredRPointsCategory("tiered-rpa", rPointsArray[0]);
	updateTieredRPointsCategory("tiered-rpm", rPointsArray[1]);
	updateTieredRPointsCategory("tiered-rpe", rPointsArray[2]);	
}
function updateTieredRPointsCategory(displayId, points){
	let content = "";
	for(let i = 0; i < points.length; i++){
		if(points[i] == -3){
			content += `<i class="fas fa-dice-three spent"></i> `;
		}
		else if(points[i] == -2){
			content += `<i class="fas fa-dice-two spent"></i> `;
		}
		else if(points[i] == -1){
			content += `<i class="fas fa-dice-one spent"></i> `;
		}
		else if(points[i] == 1){
			content += `<i class="fas fa-dice-one"></i> `;
		}
		else if(points[i] == 2){
			content += `<i class="fas fa-dice-two"></i> `;
		}
		else if(points[i] == 3){
			content += `<i class="fas fa-dice-three"></i> `;
		}
	}
	
	$('#' + displayId).html(content);
}
function getRPointTotals(){
	let class1 = null;
	let class2 = null;
	for(let i = 0; i < dollClasses.length; i++){
		if(characterWIP.classPrimary == dollClasses[i].id){
			class1 = dollClasses[i];
		}
		if(characterWIP.classSecondary == dollClasses[i].id){
			class2 = dollClasses[i];
		}
		if(class1 != null && class2 != null){
			break;
		}
	}
	let rpaTotal = (class1 != null ? class1.rpa : 0) 
						+ (class2 != null ? class2.rpa : 0)
						+ characterWIP.rpa;
	let rpmTotal = (class1 != null ? class1.rpm : 0) 
						+ (class2 != null ? class2.rpm : 0)
						+ characterWIP.rpm;
	let rpeTotal = (class1 != null ? class1.rpe : 0) 
						+ (class2 != null ? class2.rpe : 0)
						+ characterWIP.rpe;
	return [rpaTotal, rpmTotal, rpeTotal];
}
function buyPart(partId){
	let part = getById(partId, dollParts);
	//get the index of the owned part (if it exists)
	let ownedIndex = -1;
	for(let i = 0; i < characterWIP.parts.length; i++){
		if(characterWIP.parts[i].id == partId){
			ownedIndex = i;
			break;
		}
	}
	//if part can be placed in any location,
	if(part.partLocation == "Any"){
		//set selected part
		selectedPart = part;
		selectedPartIndex = ownedIndex;
		//if the part was already owned, add option to remove part
		if(ownedIndex >= 0){
			$('#set-loc-remove').removeClass('fade');
		}
		else{
			$('#set-loc-remove').addClass('fade');
		}
		
		//open modal to pick location, or remove the part
		$('#part-location-picker').modal();
		
	}
	else{
		if(ownedIndex >= 0){
			//if part is already owned, remove it
			characterWIP.parts.splice(ownedIndex, 1);
		}
		else{
			//if part is not owned, add to list of parts
			characterWIP.parts.push(new Part(partId, part.partLocation));
		}
		//update  parts and rpoints
		updateParts();
	}
}
function placePart(partLocation){
	//remove selected part (if able)
	if(selectedPartIndex >= 0){
		characterWIP.parts.splice(selectedPartIndex, 1);
	}
	//add the part to the corresponding location
	if(partLocation != ''){
		characterWIP.parts.push(new Part(selectedPart.id, partLocation));
	}
	//update parts
	updateParts();
}
function resetParts(){
	for(let i = 0; i < characterWIP.parts.length;){
		if(getById(characterWIP.parts[i].id, dollParts).type != "Basic"){
			characterWIP.parts.splice(i, 1);
		}
		else{
			i++;
		}
	}
	updateParts();
}

function updateTreasure(){
	if(!treasuresPopulated){
		treasuresPopulated = true;
		let content = "";
		for(let i = 0; i < dollTreasures.length; i++){
			content += buildTreasure(dollTreasures[i], i);
		}
		$('#treasure-picker .modal-body').html(content);
		//set default treasure
		pickTreasure(0);
	}
	
}
function buildTreasure(treasure, index){
	let imgSrc = "../Content/Treasures/" + treasure.flavorImage;
	let content = 
	`
	<div class="rounded border p-2 mb-1 text-black-50 necro-item" role="button" data-dismiss="modal" onclick="pickTreasure(${index})">
		<div class="d-flex">
			<img src=${imgSrc} class="mr-2 rounded tile-64">
			<div class="">
				<h5>${treasure.name}</h5>
				<p>Location: Any /// Timing: Auto /// Cost: None /// Range: None</p>
			</div>
		</div>
		<div class="border border-right-0 border-bottom-0 p-2 mt-1 bg-white text-black-50">
			<p class="font-italic lighter small">
				${treasure.flavorText}
			</p>
		</div>
	</div>	
	`;
	return content;
}
function pickTreasure(index){
	let treasure = dollTreasures[index];
	let imgSrc = "../Content/Treasures/" + treasure.flavorImage;
	//save to character
	characterWIP.treasures[0] = treasure;
	//update treasure display
	$('#treasureImage').attr("src", imgSrc);
	$('#treasureName').val(treasure.name);
	$('#treasureFlavor').val(treasure.flavorText);
	$('#treasureLocation').val(treasure.partLocation).change();
}
function pickRandomTreasure(){
	let random = Math.floor(Math.random() * dollTreasures.length);
	pickTreasure(random);
}
function editTreasure(){
	let name = $('#treasureName').val();
	let partLocation = $('#treasureLocation').val();
	let flavorText = $('#treasureFlavor').val();
	let flavorImage = $('#treasureImage').attr("src");
	
	characterWIP.treasures[0] = new Treasure(name, partLocation, flavorText, flavorImage);
}
function setDeployment(zoneId){
	characterWIP.deployment = zoneId;
}
function finishCreation(){
	//save characterWIP to character list
	saveDoll();
	//load character list
	loadCharacterList();
}


