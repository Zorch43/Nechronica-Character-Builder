//global variables
const randomNames = [
	"Body Water",
	"Rollers Running",
	"Prints Cat",
	"Floppy Disk Ice cream",
	"Dislike Whale",
	"Prints Fusion",
	"Leash Ice cream",
	"Breakfast Cone",
	"Horse Android",
	"Dislike Nuclear",
	"Leash Puppy",
	"Mail Horse",
	"Horse Breakfast",
	"Video games Laptop",
	"Monster Toilet",
	"Clock Trees",
	"Soda Post office",
	"Sink Video games",
	"Solar Comics",
	"Crab Shoes",
	"Ice cream Cone",
	"Puppy Male",
	"Laptop Ring",
	"Rollers Website",
	"Shoes Crab",
	"Hnads Rollers",
	"Kitty Fusion",
	"Flowers Cat",
	"Website Towel",
	"Flowers Cat",
	"Towel Flowers",
	"Plus Dislike",
	"Cat System",
	"Water Settings",
	"Website Puppy",
	"YouTube Video games",
	"Comics Drugs",
	"Dog Kitty",
	"Urine Horse",
	"Water Sink",
	"Post office Leash",
	"Sink Comics",
	"Websites Fusion",
	"Whale Ice cream",
	"Shoe System",
	"Elevator Kitty",
	"Comics Toilet",
	"Drugs Video games",
	"Light saber Flowers",
	"Fusion Horse",
	"Plus Towel",
	"Soda Drugs",
	"Comics Clock",
	"Allergies Sink",
	"Flowers Flowers",
	"Horse Plants",
	"Kitty Fusion",
	"Ice cream Cone",
	"Allergies Leash",
	"Shelf YouTube",
	"Shoes Rollers",
	"Dog Dog",
	"Cone Website",
	"Bird System",
	"Drugs Soap",
	"Ring Male",
	"Plants Shelf",
	"Video games Bird",
	"Puppy YouTube",
	"Running Websites",
	"Website Hnads",
	"Towel Nuclear",
	"Toolbox Website",
	"BBQ Poop",
	"Sink Plus",
	"Solar Plus",
	"Light saber Fusion",
	"Nuclear Clock",
	"Toilet Horse",
	"Android Elevator",
	"Solar Shelf",
	"Monster Clock",
	"Dislike Poop",
	"Soap Body",
	"Breakfast Sink",
	"Soap Crab",
	"Rollers Light saber",
	"Water Allergies",
	"Shower Drugs",
	"YouTube Flowers",
	"Sink Crab",
	"Urine Cat",
	"Urine Rollers",
	"Robot Puppy",
	"Horse Shelf",
	"Poop Video games",
	"Ice cream Whale",
	"Nuclear Elevator",
	"Cat Allergies",
	"Hnads System",
	"Hobbledehoy Mumpsimus",
	"Ecdysiast Slangwhanger",
	"Crudivore Boustrophedon",
	"Unremacadamized Klutz",
	"Gobbledygook Lagopodous",
	"Hemidemisemiquaver Ecdysiast",
	"Troglodyte Lickety-split",
	"Yahoo Hemidemisemiquaver",
	"Hobbledehoy Discombobulate",
	"Lickety-split Collop",
	"Ornery Nincompoop",
	"Mumpsimus Hobbledehoy",
	"Callipygian Maverick",
	"Hobbledehoy Skedaddle",
	"Cantankerous Collywobbles",
	"Borborygm Maverick",
	"Smellfungus Turdiform",
	"Lagopodous Codswallop",
	"Collywobbles Slangwhanger",
	"Flummox Formication",
	"Kerfuffle Batrachomyomachy",
	"Crudivore Bowyang",
	"Hoosegow Gongoozle",
	"Tatterdemalion Formication",
	"Widdershins Callipygian",
	"Gaberlunzie Nincompoop",
	"Maverick Gobbledygook",
	"Tatterdemalion Pratfall",
	"Snool Hoosegow",
	"Furbelow Skullduggery",
	"Klutz Doozy",
	"Firkin Collywobbles",
	"Gardyloo! Klutz",
	"Fatuous Gonzo",
	"Pratfall Furphy",
	"Mugwump Tatterdemalion",
	"Widdershins Snollygoster",
	"Nincompoop Discombobulate",
	"Furbelow Cantankerous",
	"Troglodyte Canoodle",
	"Rambunctious Mugwump",
	"Eructation Rambunctious",
	"Fartlek Formication",
	"Ecdysiast Eructation",
	"Goombah Batrachomyomachy",
	"Hocus-pocus Rambunctious",
	"Pandiculation Cockamamie",
	"Batrachomyomachy Eructation",
	"Batrachomyomachy Furphy",
	"Firkin Gaberlunzie",
	"Allegator Ornery",
	"Widdershins Lollygag",
	"Mumpsimus Abibliophobia",
	"Yahoo Godwottery",
	"Catercornered Gonzo",
	"Brouhaha Nincompoop",
	"Lickety-split Cantankerous",
	"Gonzo Hoosegow",
	"Yahoo Comeuppance",
	"Fard Fatuous",
	"Borborygm Flibbertigibbet",
	"Dudgeon Furbelow",
	"Doozy Hemidemisemiquaver",
	"Fartlek Brouhaha",
	"Kerfuffle Hocus-pocus",
	"Shenanigan Catercornered",
	"Nincompoop Crapulence",
	"Mollycoddle Absquatulate",
	"Ranivorous Rigmarole",
	"Mumpsimus Donnybrook",
	"Gardyloo! Bowyang",
	"Allegator Billingsgate",
	"Wabbit Anencephalous",
	"Rambunctious Hobbledehoy",
	"Mugwump Anencephalous",
	"Pettifogger Formication",
	"Hemidemisemiquaver Godwottery",
	"Mollycoddle Borborygm",
	"Bumbershoot Cockamamie",
	"Skedaddle Snickersnee",
	"Fatuous Cantankerous",
	"Discombobulate Gobbledygook",
	"Catercornered Gonzo",
	"Panjandrum Allegator",
	"Slangwhanger Argle-bargle",
	"Kerfuffle Logorrhea",
	"Pratfall Canoodle",
	"Blunderbuss Unremacadamized",
	"Gardyloo! Doozy",
	"Batrachomyomachy Allegator",
	"Crudivore Snickersnee",
	"Tatterdemalion Snool",
	"Codswallop Collop",
	"Logorrhea Lickety-split",
	"Argle-bargle Filibuster",
	"Gonzo Troglodyte",
	"Fatuous Absquatulate",
	"Dudgeon Hootenanny",
	"Hemidemisemiquaver Ecdysiast",
	"Canoodle Abibliophobia",
	"Baylor Rashan",
	"Burton Bently",
	"Hayes Vernon",
	"Braxton Zayden",
	"Luigi Dwight",
	"Hassan Rodney",
	"Ellington Duncan",
	"Adnan Will",
	"Jaiden Leaf",
	"Carson Edmund",
	"Amir Kieran",
	"Wally Eason",
	"Gian Boston",
	"Luca Orson",
	"Jeffrey Alfonse",
	"Eric Maxim",
	"Nickolas Isidore",
	"Preston Rudolph",
	"Jon Florian",
	"Jacques Judas",
	"Antony Buck",
	"Quintrell Frankie",
	"Davin Petar",
	"Gael Nathaniel",
	"Johan Thaddeus",
	"Emanuel Samir",
	"Jason Deacon",
	"Zachary Eddy",
	"Tiberius Curtis",
	"Brian Gale",
	"Marlon Luigi",
	"Mel Godwin",
	"Toryn Keegan",
	"Richie Yardley",
	"Petar Vishal",
	"Fraser Kennedy",
	"Chuck Jagger",
	"Jarvis Tariq",
	"Asa Perry",
	"Finnigan Morgan",
	"Tevin Corbin",
	"Kellan Bevan",
	"Brice Julian",
	"Rajesh Kerry",
	"Marcel Calvin",
	"Thor Hunter",
	"Gustavo Silas",
	"Link Wilfred",
	"Merick Aran",
	"Martyn Abdullah",
	"Rosanna Ciel",
	"Lacie Nisha",
	"Chrissy Jazmine",
	"Alka Judy",
	"Reilly Bernice",
	"Nerissa Sierra",
	"Elaina Rayna",
	"Irene Kylie",
	"Chastity Isha",
	"Goldie Danielle",
	"Rhianna Shawnette",
	"Justice Charlotte",
	"Selah Magdalena",
	"Jodi Hetty",
	"Rocio Maryam",
	"Jenny Lacey",
	"Shauna Ira",
	"Dena Addison",
	"Montserrat Caterina",
	"Raina Margot",
	"Nieve Mildred",
	"Julie Ilene",
	"Lacie Denise",
	"Tara Carol",
	"Kera Charlotte",
	"Vienna Pearl",
	"Opal Leila",
	"Theodora Olga",
	"Liv Avery",
	"Winifred Lianne",
	"Marcella Hallie",
	"Ivy Tammy",
	"Ryanne Melanie",
	"Brie Dana",
	"Constance Maris",
	"Fatima Emma",
	"Claire Lou",
	"Eris Lottie",
	"Carmel Margot",
	"Kera Madisyn",
	"Hepsiba Sylvie",
	"Destinee Meagan",
	"Brianna Sadhbh",
	"Sebastianne Cassandra",
	"Jody Emilee",
	"Diamond Rani",
	"Dana Iris",
	"Alka Katelyn",
	"Amelie Rhiannon",
	"Sammy Siobhan",
	"Malina Caitlyn",
	"Pippa Daniela",
	"Megan Xia",
	"Jancis Luna",
	"Maja Brogan",
	"Mollie Lyric",
	"Lucia Alma",
	"Remi Denice",
	"Odalis Kaylin",
	"Elly Shelley",
	"Jaya Imelda",
	"Tasmin Liliana",
	"Jill Chanelle",
	"Celina Camila",
	"Ruby Waverley",
	"Amaris Chenille",
	"Angelia Ashton",
	"Millicent Elaina",
	"Taylah Calliope",
	"Aimee Annabella",
	"Kaliyah Mira",
	"Kerry Star",
	"Aislinn Candis",
	"Kasey Ceanna",
	"Aileen Cressida",
	"Leonie Eimear",
	"Alyshialynn Salome",
	"Karin Nerissa",
	"Lynnette Caleigh",
	"Kaitlyn Brook",
	"Annmarie Cameron",
	"Deana Kimmy",
	"Francoise Jo",
	"Charlotte Jamiya",
	"Keana Liza",
	"Joanne Malia",
	"Honour Winifred",
	"Dulce Andromeda",
	"Kenzie Dixie",
	"Paisley Celestia",
	"Bessie Honey",
	"Lillie Aislynn",
	"Sophie Kim",
	"Cassandra Grainne",
	"Rosalie Genesis",
	"Maja Mildred",
	"Elouise Elisabeth",
	"Janis Kylie",
	"Sara Livia",
	"Delilah Maggie",
	"Letitia Rydel",
	"Darcey Heather",
	"Tala Gabriella",
	"Agnes Aileen",
	"Raegan Ethel",
	"Una Xia",
	"Jacqueline Hailey",
	"Zula Kelley",
	"Ruby Julianna",
	"Justina Eleanor",
	"Cecily Lynne",
	"Kelsey Clara",
	"Tiara Primrose",
	"Zola Beyonce",
	"Amelie Hortense",
	"Carmel Maire",
	"Prue Kaye",
	"Kali Carina",
	"Nadene Beatrix",
	"Aliyah Renee",
	"Violetta Arden",
	"Sugar Winnie",
	"Bunty Deb",
	"Cecilia Daria",
	"Octavia Lyra",
	"Farah Taya",
	"Jaime Juniper",
	"Rikki Everly",
	"Adelina Imogen",
	"Adrienne Violet",
	"Dottie Karen",
	"Cate Kasey",
	"Penny Shania",
	"Kimberley Jacquelyn",
	"Mira Autumn",
	"Zaya Sydney",
	"Reagan Stefanie",
	"Lorri Alexandra",
	"Kadence Estelle",
	"Giovanna Nia",
	"Annika Leyla",
	"Jeannie Mel",
	"Apple January",
	"Ellie Kerian",
	"Bryony Angelina",
	"Lois Kristin",
	"Isha Robin",
	"Frances Jules",
	"Sierra Sharon",
	"Xochil Toni",
	"Patricia Ellen",
	"Kaylee Cassandra",
	"Lucky Blythe",
	"Atlanta Kaylin",
	"Jenelle Lianne",
	"Dahlia Nana",
	"Sharon Stacie",
	"Alannah Esmeralda",
	"Kiara Catlin",
	"Eliza Georgette",
	"Isobel Laurel",
	"Chrystal Brynn",
	"Ashley Asha",
	"Cynthia Eudora",
	"Gena Golda",
	"Jo Paloma",
	"Taryn Kirsty",
	"Tiana Lacey",
	"Wendi Nita",
	"Aislynn Alma",
	"Henrietta Camry",
	"Aubreanna Michelle",
	"Mei Honey",
	"Anabelle Beatrice",
	"Bliss Elektra",
	"Julissa Magdalene",
	"Dulce Kit",
	"Candy Janine",
	"Guadalupe Cayla",
	"Megan Amanda",
	"Tanya Norma",
	"Ramona Jodie",
	"Venus Zyana",
	"Mariana Nishka",
	"Sherrie Mariella",
	"Anjali Joann",
	"Iliana Shary",
	"Eleanor Liberty",
	"Kelly Mae",
	"Yvaine Nishka",
	"Coco Ellen",
	"Kaylee Lindsay",
	"Lainey Elicia",
	"Sofie Elisabeth",
	"Isadora Carla",
	"Beatrice Rhiannon",
	"Perrie Nita",
	"Ashlyn Sabrina",
	"Jan Alexia",
	"Meadow Isabell",
	"Ariella Janae",
	"January Suzie",
	"Sabrina Petra",
	"Alia Jet",
	"Gabrielle Colleen",
	"Leela Meredith",
	"Odette Maggie",
	"Nicola Blake",
	"Alberta Maryam",
	"Becky Isobel",
	"Shelby Aphrodite",
	"Hester Daphne",
	"Rita Ashlee",
	"Andrea Angelina",
	"Muriel Eugenie",
	"Marcella Delores",
	"Salome Nikita",
	"Lainey Cailin",
	"Bella Aqua",
	"Carole Abrielle",
	"Hepsiba Bobbie",
	"Rae Katelyn",
	"Maribel Elaine",
	"Marisol Henrietta",
	"Elana Jude",
	"Talitha Alex",
	"Ceanna Lucia",
	"Abby Arden",
	"Daina Belinda",
	"Marlena Meryl",
	"Talitha Tatum",
	"Cyndi Kora",
	"Larissa Hazel",
	"Alberta Davida",
	"Ella Alize",
	"Yolanda Kristen",
	"Keana Violetta",
	"Angelique Karla",
	"Sandy Meadow",
	"Deirdre Zakia",
	"Eden Leonora",
	"Eudora Oriana",
	"Wendy Marla",
	"Roisin Arianne",
	"Joan Michaela",
	"Tula Debra",
	"Tiegan Senuri",
	"Deb Kaidence",
	"Mariah Cerise",
	"Cristina Keana"
];

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

//utilities
function clickLink(linkId){
	document.getElementById(linkId).click();
}

//pickers
//random age
function randomAge(agefieldId){
	let age = 8 + Math.floor(Math.random() * 10);
	document.getElementById(agefieldId).value = age;
}

//random name
function randomName(nameFieldId){
	let rand = randomNames[Math.floor(randomNames.length * Math.random())];
	document.getElementById(nameFieldId).value = rand;
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
	characterWIP.parts.push(new Part(selectedPart.id, partLocation));
	//update parts
	updateParts();
}
function resetParts(){
	for(let i = 0; i < characterWIP.parts.length; i++){
		if(getById(characterWIP.parts[i].id, dollParts).type != "Basic"){
			characterWIP.parts.splice(i, 1);
		}
	}
	updateParts();
}



