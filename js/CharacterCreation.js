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

