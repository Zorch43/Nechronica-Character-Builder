//contains definitions for all data object classes 
//used by the character creator
//also contains database of catalogue items

//global variables
const timings = ["Auto", "Action", "Rapid", "Check", "Damage", "See Effect"];
const PartLocations = ["Any", "Head", "Arms", "Torso", "Legs"];
const partTypes = ["Basic", "Armament", "Mutation", "Enhancement", "Treasure"];
const deployments = ["Eden", "Elysium", "Limbo"];
const fetterTargetGroups = ["Fetters", "Savant", "Neutral"];
//filled by JSON(P)
const premonitions = JSON.parse(dollPremonitionsJSON);
const memoryFragments = JSON.parse(dollMemoriesJSON);
const dollPositions = JSON.parse(dollPositionsJSON);
const dollClasses = JSON.parse(dollClassesJSON);
const dollSkills = JSON.parse(dollSkillsJSON);
const dollParts = JSON.parse(dollPartsJSON);
const fetterTypes = [];
const treasures = [];

//doll constructor
function Doll(nextId)
{
	this.id = nextId;//doll id
	this.created = false;//whether character creation has finished
	this.name = "";//doll name
	this.age = 0;//doll age
	this.favor = 0;//current unspent favor
	this.favorSpent = 0;//spent favor
	this.premonition = -1;//premonition id
	this.fragments = [];//list of fragments of memory
	this.classPosition = -1;//position class id
	this.classPrimary = -1;//primary class id
	this.classSecondary = -1;//secondary class id
	this.skills = [-1, -1, -1, -1];//list of all skills from position and classes
	this.rpu = 1;//unallocated reinforcement points
	this.rpa = 0;//allocated armament points
	this.rpm = 0;//allocated mutation points
	this.rpe = 0;//allocated enhancement points
	this.parts = [];//list of all parts
	this.treasures = [];//list of all treasures
	this.fetters = [];//list of all fetters
	this.deployment = -1;//initial deployment
}

//minimized skill constructor
function Skill(skillId)
{
	this.id = skillId;//skill id from catalogue
	this.used = false;//whether this skill has been used (when relevant)
	this.favorRefund = 0;//favor refund for purchased skills
}
//full skill constructor for catalogue
function DollSkill(id, classId, name, cost, timing, rangeMin, rangeMax, 
	effectText, flavorText, flavorImage)
{
	this.id = id;//skill catologue id
	this.classId = classId;//position or class that has this skill
	this.name = name;//the name of the skill
	
	if(cost == -1){
		this.cost = "None"
	}
	else if(cost == -2){
		this.cost = "See Effect"
	}
	else{
		this.cost = cost;//skill AP cost
	}
	
	this.timing = timings[timing];//what timing the skill uses
	this.usable = timing > 1 && timing < 5;//whether to display the 'used' checkbox
	
	if(rangeMin == -1 || rangeMax == -1){
		this.range = "Self";
	}
	else if(rangeMin == -2 || rangeMax == -2){
		this.range = "See Effect";
	}
	else if(rangeMin == rangeMax){
		this.range = rangeMin;
	}
	else{
		this.range = rangeMin + "-" + rangeMax;//effect range
	}
	
	this.effectText = effectText;//skill effect text (array)
	this.flavorText = flavorText;//skill flavor text
	this.flavorImage = flavorImage;//skill image
	
	this.special = false;//whether this skill can be taken by impure class combos.
	this.restricted = false;//whether this skill can be purchased without owning  skill's class
	this.clockwork = false;//whether to grant a t3 enhancement
	this.extremeMutation = false;//whether to grant a t3 mutation
}

//minimized part
function Part(partId, partLocation){
	this.id = partId;//part id from catalogue
	this.partLocation = partLocation;//part location from array (when relevant)
	this.damaged = false;//whether this part is currently damaged
	this.used = false;//whether this part's ability has been used (when relevant)
}
//full part constructor for catalogue
function DollPart(id, type, tier, partLocation, name, cost, 
	timing, rangeMin, rangeMax, effectText, flavorText, flavorImage)
{
	this.id = id;//part catologue id
	this.type = partTypes[type];//part type
	this.tier = tier;//part tier
	this.partLocation = partLocation[partLocation];//part location
	this.name = name;//the name of the part
	
	if(cost == -1){
		this.cost = "None"
	}
	else if(cost == -2){
		this.cost = "See Effect"
	}
	else{
		this.cost = cost;//skill AP cost
	}
	
	this.timing = timings[timing];//what timing the part uses
	this.usable = timing > 1 && timing < 5;//whether to display the 'used' checkbox
	
	if(rangeMin == -1 || rangeMax == -1){
		this.range = "Self";
	}
	else if(rangeMin == -2 || rangeMax == -2){
		this.range = "See Effect";
	}
	else if(rangeMin == -3 || rangeMax == -3){
		this.range = "None";
	}
	else if(rangeMin == rangeMax){
		this.range = rangeMin;
	}
	else{
		this.range = rangeMin + "-" + rangeMax;//effect range
	}
	
	this.effectText = effectText;//part effect text (array)
	this.flavorText = flavorText;//part flavor text
	this.flavorImage = flavorImage;//part image
}
//treasure constructor
function Treasure(name, flavorText, partLocation){
	this.name = name;//name of the treasure
	this.flavorText = flavorText;//treasure flavor text
	this.partLocation = partLocation;//where the treasure is located
}
//class constructor
function DollClass(id, name, rpa, rpm, rpe, flavorText, flavorImage){
	this.id = id;//class id
	this.name = name;//class name
	this.rpa = rpa;//armaments
	this.rpm = rpm;//mutations
	this.rpe = rpe;//enhancements
	this.flavorText = flavorText;//class flavortext (array)
	this.flavorImage = flavorImage;//class image
}

//position constructor
function DollPosition(id, name, flavorText, flavorImage){
	this.id = id;//position id
	this.name = name;//position name
	this.rpa = 0;
	this.rpm = 0;
	this.rpe = 0;
	this.flavorText = flavorText;//position flavor text (array)
	this.flavorImage = flavorImage;//position image;
}

//memory fragment constructor
function MemoryFragment(id, name, description, flavorImage){
	this.id = id;//fragment id
	this.name = name;//fragment name
	this.description = description;//content of memory
	this.flavorImage = flavorImage;
}

//premonition constructor
function Premonition(id, name, description, flavorImage){
	this.id = id;//premonition id
	this.name = name;//premonition name
	this.description = description;//description of premonition
	this.flavorImage = flavorImage;
}

//minimized fetter constructor
function Fetter(){
	this.type = -1;//fetter type id
	this.target = "";//fetter target
	this.madness = 3;//current madness points
}

//fetter type
function FetterType(id, targetGroup, name, flavorText, flavorImage, 
	madName, effect,  madFlavorText,  madFlavorImage)
	{
	this.id = id;
	this.targetGroup = fetterTargetGroups[targetGroup];
	this.name = name;
	this.flavorText = flavorText;
	this.flavorImage = flavorImage;
	this.madName = madName;
	this.madFlavorText = madFlavorText;
	this.madFlavorImage = madFlavorImage;
	this.effect = effect;
}
//list query function
function getById(id, list){
	for(let i=0; i < list.length; i++){
		if(list[i].id == id){
			return list[i];
		}
	}
}

