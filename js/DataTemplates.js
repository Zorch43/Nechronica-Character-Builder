//contains definitions for all data object classes 
//used by the character creator
//also contains database of catalogue items

//global variables
const timings = ["Auto", "Action", "Rapid", "Check", "Damage", "See Effect"];
const PartLocations = ["Any", "Head", "Arms", "Torso", "Legs"];
const partTypes = ["Basic", "Armament", "Mutation", "Enhancement", "Treasure"];
const deployments = ["Eden", "Elysium", "Limbo"];
const fetterTargetGroups = ["Fetters", "Savant", "Neutral"];
//filled by template functions
const premonitions = [];
const memoryFragments = [];
const dollPositions = [];
const dollClasses = [];
const dollSkills = [];
const dollParts = [];
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
	this.skills = [];//list of all skills from position and classes
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
	this.classId;//position or class that has this skill
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
	this.partLocation = partLocation;//part location id from array (when relevant)
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
	this.flavorText = flavorText;//class flavortext
	this.flavorImage = flavorImage;//class image
}

//position constructor
function DollPosition(id, name, flavorText, flavorImage){
	this.id = id;//position id
	this.name = name;//position name
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

//template-fillers
//master
function createTemplates(){
	createPositions();
	createClasses();
	createSkills();
	createPremonitions();
	createMemoryFragments();
}

//position templates
function createPositions(){
	dollPositions.push(new DollPosition(0, "Alice"
	["There are some Dolls that are never able to get used to fighting."
	+ "	Though their lives have been ones of unending battle for countless"
	+ "days, countless years, the memory of tranquil times remains in their"
	+ "	hearts. It is for this reason that they remain human even now.",
	"Your faintly remaining memories point to a completely different self"
	+ "	and a different world. Every day is a battle. Every day is fear."
	+ "	However, you mustn't let the battles and fear into your heart."
	+ "	That is the most terrifying thing. Even if your Sisters call you"
	+ "	a hindrance, you have to be a lovely trembling girl. Even if you"
	+ "	have the power to fight you were not born to fight. If you let"
	+ "	yourself be distorted by despair, isn’t there no meaning to being you?",
	"Even if you are no help in fights, you are an important key to saving"
	+ "	your Sisters. You mustn’t be consumed by conflict and fear. You"
	+ "	shall continue striving for the everyday your Sisters are meant to return to."], 
	"../Content/Positions/Alice.png"));
	
	dollPositions.push(new DollPosition(1, "Automaton"
	["Though you have a heart, you have suppressed it. In battle, you are"
	+ "	no more than the gear of a machine. Dolls are Dolls, after all."
	+ "	It is only proper that dead corpses should have dead hearts."
	+ "	Those things you could not protect while you still lived, you protect now.",
	"It hurts, it’s cruel, it’s hard, it’s sad; even wishes have ended"
	+ "	within you and the world.",
	"Salvation is: Acceptance.",
	"You killed the self you gained and now accept the world and your Sisters"
	+ "	as they are. You give up yourself and bury many things. If you don’t"
	+ "	want, don’t love, don’t turn around, nothing should be painful."
	+ "	Because as long as you devote yourself to the function your Sisters"
	+ "	want, you will have a place to be.",
	"However, you can’t kill it all. Sometimes your irrepressible heart"
	+ "	will overflow and make you suffer. The only ones who worry about"
	+ "	you in those times are your Sisters. Even more reason for you to"
	+ "	devote yourself to being the shield protecting them. So that they"
	+ "	shall not become like you. So that your own heart doesn’t die off"
	+ "	in the end."], 
	"../Content/Positions/Automaton.png"));
	
	dollPositions.push(new DollPosition(2, "Court",
	["Strength does not arise only when wielding a weapon. To think and to"
	+ "	know are also strengths. Within this ruined world, it is not"
	+ "	a strength easily understood... but you cultivate it nonetheless."
	+ "	Things could be no other way.",
	"One must not be at the mercy of one’s emotions. Calm decisions and"
	+ "	analyses are always important.",
	"You are neither unfeeling nor cold-hearted. However, you know how"
	+ "	foolish it is to let one be controlled by one’s emotions. Fear"
	+ "	and despair, hatred and sadness all just disturb proper reasoning."
	+ "	Showing tears and smiles only when you can afford to is enough.",
	"That is why you regulate yourself. Not burying, but regulating."
	+ "	To create a time to cry, and to create a time to laugh afterwards."
	+ "	Not to discard your heart, but to protect it you concentrate all"
	+ "	your strength."],
	"../Content/Positions/Court.png"));
	
	dollPositions.push(new DollPosition(3, "Holic",
	["To have an ego is to embrace one's selfishness and desires. There"
	+ "	are things that you want. Are those power? Love? Your past? If you"
	+ "	find one of them, you'll want another. If you find ten, you'll"
	+ "	want a hundred more. Even then, you won't be satisfied. Even then.",
	"A self is an ego. Even in a dead body, even in a worldwide wasteland,"
	+ "	the sprouts of desire bloom.",
	"The important things are emotions are desires.",
	"That’s right. To protect yourself, harmony between you and your"
	+ "	Sisters is necessary. A truly, truly important factor. However, is"
	+ "	there really a need for you to hold back your desires? You shall"
	+ "	exercise your desires and whims through selfishness to a degree"
	+ "	that you won’t be forsaken by them and dance through the world"
	+ "	according to your desires.",
	"Power, love, victory, the past, treasures. Even in such a world,"
	+ "	there are things you want. And if you want, you shall act, fight,"
	+ "	and go mad. To go mad in search of gains will become the shield"
	+ "	protecting you from true despair and madness."],
	"../Content/Positions/Holic.png"));
	
	dollPositions.push(new DollPosition(4, "Junk",
	["You have found strength in the things you have given up. But there"
	+ "	are those you refuse to surrender. You could hardly lose any more"
	+ "	of your body. But there are surely things you have not lost. Though"
	+ "	you struggle in vain, covered in scars, you persevere.",
	"You have correctly grasped the nature of this world."
	+ "	Of this hopeless world.",
	"Is giving up all that’s left?",
	"But you chose to struggle on without giving up. Without losing hope"
	+ "	in the face of everything trying to throw you into despair. Even"
	+ "	if you lost it, you’d still act as though you hadn’t.",
	"The despair your Sisters will likely encounter is something you are"
	+ "	already beyond. Even if you can’t overcome it, we shall say that"
	+ "	you have. Your role is to not let your Sisters give up.",
	"There’s no need to cleverly raise their spirits. It’s enough to show"
	+ "	them that even so you have come to fight."],
	"../Content/Positions/Junk.png"));
	
	dollPositions.push(new DollPosition(5, "Sorority",
	["That others depend upon you is not a burden. It is your strength."
	+ "	Though your body has long been dead, others still rely upon it."
	+ "	For as long as they do, you shall lead the way. Even if there's"
	+ "	nothing left of you but your feet.",
	"Even if you don’t know the truth about the world, you should be able"
	+ "	to understand your Sisters’ hearts.",
	"Feelings, restraint, fear, madness.",
	"You can see your Sister’s hearts more clearly than anybody else."
	+ "	You will likely protect them by supporting them and guiding their"
	+ "	way. Suppress the small quarrels and make their hearts into one.",
	"… You have to lead them in battles, taking care of their relations"
	+ "	and make them harmonious. Being a manager is hard, but the position"
	+ "	with responsibility should make you stronger, too. Surely at some"
	+ "	point you will acquire the strength to set aside madness and stand"
	+ "	up to despair. For your beloved Sisters. Through your beloved Sisters."],
	"../Content/Positions/Sorority.png"));
}

//class templates
function createClasses(){
	dollClasses.push(new DollClass(6, "Baroque", 0, 2, 0,
	["Deformed Dolls.",
	"Manufactured mutants.",
	"Shaped to another's whim.",
	"Woven from twisted flesh.",
	"The specialty of this Class is mutation.",
	"They are chimeras created from a multitude of corpses. Their"
	+ "	incomprehensible bodies possess incomprehensible abilities."
	+ "	There are many whom are particularly swift.",
	"Your misinformed body is equipped with many unlikely organs and"
	+ "	expresses, by all rights, impossible movements. By merely distorting"
	+ "	your form as you wish, you should become a sufficiently strange"
	+ "	being. You might say that the only things you shall not forget are"
	+ "	to acquire 1 attack method and to decide on a concept for your"
	+ "	misformation.",
	"You, who are covered in mutation parts, are expected to engage in the"
	+ "	front lines as a monster.",
	"You, who wield both strong attacks and defences, shall serve well"
	+ "	enough as both shield and sword for your Sisters."],
	"../Content/Classes/Baroque.png"));
	
	dollClasses.push(new DollClass(7, "Gothic", 0, 1, 1,
	["Heretical Dolls.",
	"The natural enemy of the dead.",
	"Dolls built to oppose the Undead.",
	"Cannibals in their right mind.",
	"The specialty of this Class is all manner of heresy. Eaters of the"
	+ "	dead, they strike fear into other Undead as the apex predators of"
	+ "	the food chain.",
	"What you have been given is a heretical power even amongst the dead."
	+ "	You excel at the power to revive yourself. For this reason,"
	+ "	rushing into the enemy lines to throw them into chaos or becoming"
	+ "	a decoy to reduce the attacks your Sisters in the back receive is"
	+ "	your goal. Unstoppable means of movement, a high maximum action"
	+ "	value, area attacks, stagger effects and so on will surely help"
	+ "	you.",
	"The meat slices won’t fly all the way to the back rows.",
	"You show your true worth when you throw yourself at the enemy, make"
	+ "	even the dead shrink back and devour them all as your bizarre"
	+ "	hunger commands."],
	"../Content/Classes/Gothic.png"));
	
	dollClasses.push(new DollClass(8, "Requiem", 2, 0, 0,
	["Dolls that use firearms",
	"Requiems of the end.",
	"Fantasias for those without souls.",
	"The sole notes heard within this world.",
	"The specialty of this Class is range. Created to defend important"
	+ "	positions, they also excel as guerrillas. The report of their"
	+ "	guns are the only melodies that resound within this ruined world,"
	+ "	like bells tolling for those whom they lay to rest.",
	"Your duty is to destroy the enemies in positions your Sisters cannot"
	+ "	reach, not to protect yourself. Being in Elysium or Eden is fine,"
	+ "	but you will likely need the courage to go forward into the Limbo"
	+ "	sometimes."],
	"../Content/Classes/Requiem.png"));
	
	dollClasses.push(new DollClass(9, "Romanesque", 0, 0, 2,
	["Dancing Dolls.",
	"Princesses of the netherworld.",
	"Corpses trapped in a tarantella.",
	"Beloved playthings, cast away",
	"The specialty of this Class is adroit mobility. When they were alive,"
	+ "	they danced for others' pleasure- dances as precise as clockwork,"
	+ "	down to the movements of their fingertips. And now, just as they"
	+ "	were then, they shall be beloved once again.",
	"You can play special roles in various game states.",
	"Quick movement, precision strikes, hindering enemies, dodging or"
	+ "	repelling attacks.",
	"You can specialise in all of them.",
	"You should lead enemies astray with tricky movements at the front"
	+ "	line and repeat precise attacks.",
	"Just like your skills cover many things, enhancement parts can"
	+ "	contain all sorts of effects (attacks, defences and control over"
	+ "	the stage.",
	"From this combination your place will change."],
	"../Content/Classes/Romanesque.png"));
	
	dollClasses.push(new DollClass(10, "Stacy", 1, 1, 0,
	["The most conventional of Dolls.",
	"Corpses that move even now.",
	"Soldiers that are dead even now.",
	"And yet they walk even now.",
	"The specialty of this Class is immortality. They are designed"
	+ "	foremost for the stoutness of their bodies. All the menace of the"
	+ "	walking dead are embodied in the Stacies.",
	"You are the wall of the Sisters. The shield that protects your"
	+ "	hurting Sisters. You mustn’t fear being hurt. You shall stand in"
	+ "	the Limbo, and acquire many ways to regenerate, defend, and hinder"
	+ "	to negate the enemies’ attacks as much as possible. Also, if you"
	+ "	gain effects that activate when you take damage, chain them to"
	+ "	activate even stronger effects.",
	"Of course, you may not forget that the strongest defence is an attack."
	+ "	You should also wield an appropriate means of attacking from what"
	+ "	you can gather"],
	"../Content/Classes/Stacy.png"));
	
	dollClasses.push(new DollClass(11, "Thanatos", 1, 0, 1,
	["Dolls made for battle.",
	"Warriors that fight eternal.",
	"Incarnations of death and destruction.",
	"Leading roles upon the stage of slaughter.",
	"The specialty of this Class is combat power.",
	"They are corpses made weapons, designed completely for their offensive"
	+ "	ability. Burning with fury despite the chill of their dead flesh,"
	+ "	they are as storms of destruction.",
	"Means of melee attacks that use strength and skill are your centre."
	+ "	You should attain melee attacks as powerful as possible. Then, to"
	+ "	destroy enemies, we recommend to be in Limbo.",
	"Raising your maximum action points and getting ways to support should"
	+ "	also help your attacks a lot.",
	"You should focus on going around dealing as much damage to enemies"
	+ "	as you can. In addition, most enemies will hold on to their means"
	+ "	of attack until they are completely destroyed. Without forgetting"
	+ "	to end each one, decimate the enemy one after another."],
	"../Content/Classes/Thanatos.png"));
	
	dollClasses.push(new DollClass(12, "Psychedelic", 0, 0, 1,
	["ESPer Dolls.",
	"Diversiform distortions.",
	"The anamneses of madness.",
	"Abilities beyond comprehension",
	"The specialty of this Class is the paranormal. Their powers essentially"
	+ "	distort the laws of nature. Amongst all the pallor of the dead,"
	+ "	the Psychedelics shine singularly bright... like jewels ripe for"
	+ "	the taking."],
	"../Content/Classes/Psychedelic.png"));
}

//position and class skills
function createSkills(){
	
	//Alice skills
	dollSkills.push(new DollSkill(0, 0, "Angel of Eden", 2, 1, -1, -1, 
	["Regardless of your current place on the Battle Map, you are instantly"
	+ "	transported to Eden.",
	"This is not considered to be Movement."], 
	"You are the inhabitants of paradise, the place where you are is the paradise.", 
	"../Content/Skills/AngelOfEden.png"));
	
	dollSkills.push(new DollSkill(1, 0, "Healing", -1, 0, -2, -2, 
	["Other Sisters' Conversation Checks toward you all gain +1 to their rolls."], 
	"A girl's smile is a glow in the dark. You have the power to shatter"
	+ "	the mind filled with madness.", 
	"../Content/Skills/Healing.png"));
	
	dollSkills.push(new DollSkill(2, 0, "Maiden", 0, 2, 0, 0, 
	["Make a Conversation Check with one of your sisters."], 
	"Your slight words and gestures are not those of a killing machine."
	+ "	Will they be a refreshing agent for a rough heart?", 
	"../Content/Skills/Maiden.png"));
	
	dollSkills.push(new DollSkill(3, 0, "Prayer", 0, 1, -2, -2, 
	["This Maneuver takes effect 5 Count after the time that it is announced.",
	"As long as you do not gain any Madness Points or have any Parts"
	+ "	damaged during this time period, all of your Sisters may remove a"
	+ "	Madness Point from a Fetter of their choice.", 
	"This Maneuver may be used only once per Turn, and only if the"
	+ "	remaining Count is greater than 5."], 
	"No matter if they come true or not, your prayers will definitely reach"
	+ "	everyone. Your wish will surely come true. No one will be unhappy."
	+ " Find the way for everyone to be saved.", 
	"../Content/Skills/Prayer.png"));
	
	dollSkills.push(new DollSkill(4, 0, "Princess", 0, 4, 0, 1, 
	["This Skill can only be used when you take damage.",
	"Your target sister	receives -1 to the Cost of their next Action"
	+ "	(minimum 0.)"], 
	"When sisters are injured, they cannot stay fair. They know that you"
	+ "	are to be protected.",
	"../Content/Skills/Princess.png"));
	
	dollSkills.push(new DollSkill(5, 0, "Undefeatable Heart", -1, 0, -1, -1, 
	["When you make a Conversation Check, you may add +1 to the die roll."], 
	"What you have is a strong heart, no desire to lose to despair, as"
	+ "	long as you can believe it, hope will not disappear.",
	"../Content/Skills/UndefeatableHeart.png"));
	
	dollSkills.push(new DollSkill(6, 0, "Warm Smile", -1, 0, -2, -2, 
	["When you roll a Critical Success on a Conversation Check, the target"
	+ "	may remove a Madness Point from her Fetter towards you.",
	"This still counts towards the Fragments of Memory limit on the"
	+ "	maximum number of Madness Points removable during a Phase."], 
	"Your gestures, your facial expressions are sparkling. That light"
	+ "	shines brightly within the soul of the person who talks with you."
	+ "	They will cast away their heavily sickened feelings.",
	"../Content/Skills/WarmSmile.png"));
	
	//Automaton skills
	dollSkills.push(new DollSkill(7, 1, "Cover", -2, 0, 0, 1, 
	["Once per Turn, when one of your Sisters declares an Action Maneuver,"
	+ "	if you both agree, the cost of the declared Maneuver can be"
	+ "	reduced to 0 in exchange for reducing your Action value by 1."], 
	"If you do not mistake the timing, a small amount of help will have a"
	+ "	great effect. You are not fighting alone.",
	"../Content/Skills/Cover.png"));
	
	dollSkills.push(new DollSkill(8, 1, "Foes are Foes", -1, 0, -1, -1, 
	["If a Spirit Attack is made against you, the Attack Check must have a"
	+ "	result of 7 or higher to hit."], 
	"You will have compassion later. You will someday apologize. But for"
	+ "	now, everyone will be broken.",
	"../Content/Skills/FoesAreFoes.png"));
	
	dollSkills.push(new DollSkill(9, 1, "Heart of Ice", -1, 0, -1, -1, 
	["You gain +1 to the die roll on Madness Checks."], 
	"Calm down. Be cool. Believe in yourself. Believe in a friend. Do not"
	+ "	doubt. Do not be afraid.",
	"../Content/Skills/HeartOfIce.png"));
	
	dollSkills.push(new DollSkill(10, 1, "I am a Doll", -1, 0, -1, -1, 
	["During the Battle Phase, only for one Turn, ignore all effects of"
	+ "	the states of Madness."], 
	"That body is a Doll. Your heart is a Doll. The Doll does not feel"
	+ "	pain. Your heart...",
	"../Content/Skills/IAmADoll.png"));
	
	dollSkills.push(new DollSkill(11, 1, "Prisoner in Limbo", -1, 0, -1, -1, 
	["If you are in Limbo at the end of the turn during the Battle Phase,"
	+ "	even if your AP has reached a negative value, you may ignore that"
	+ "	and recover to your maximum AP at the start of the next turn."], 
	"Hell is right for you. Because enemies can understand you more than"
	+ "	allies. Limbo is where the Doll belongs. Drawn to Hell, long for"
	+ "	paradise even if it is torn apart.",
	"../Content/Skills/PrisonerInLimbo.png"));
	
	dollSkills.push(new DollSkill(12, 1, "Reckless", -2, 0, -1, -1, 
	["As the Cost of this Skill, damage one of your own Basic Parts of your choice.",
	"You may reroll the die for an Action Check, Attack Check, or"
	+ "	Dismemberment Check."], 
	"The results earned by abusing your body. You are already dead, so"
	+ "	you can do it.",
	"../Content/Skills/Reckless.png"));
	
	dollSkills.push(new DollSkill(13, 1, "Tears of Blood", -2, 0, -1, -1, 
	["When you are hit by a Spirit Attack, you may ignore the Madness"
	+ "	Points incurred.", 
	"For each Madness Point ignored, one of your Basic Parts"
	+ "	of your choice is damaged.", 
	"If you have no Basic Parts remaining, this Skill is no longer effective."], 
	"All right, nothing is painful. You will not bother anything."
	+ "	No matter how much of you breaks in the fight.",
	"../Content/Skills/TearsOfBlood.png"));

	//court skills
	dollSkills.push(new DollSkill(14, 2, "Advice", 0, 3, 0, 2, 
	["Support 1 or Hinder 1."], 
	"Small words and signs will still negate large damage. It will be a"
	+ "	small but big chance.",
	"../Content/Skills/Advice.png"));
	
	dollSkills.push(new DollSkill(15, 2, "Anticipate", 0, 2, 0, 3, 
	["Target \"Rapid\", \"Damage\", or \"Check\" Maneuver.", 
	"Cancel the effects of one."], 
	"It is important to know about the enemy that appeared. It also helps"
	+ "	tactics to instantly see the enemy's war potential and offensive"
	+ "	power.",
	"../Content/Skills/Anticipate.png"));
	
	dollSkills.push(new DollSkill(16, 2, "Composure", -1, 0, -1, -1, 
	["You can gain +1 to the die roll on Action Checks."], 
	"Calm behavior, there are things that make things move a lot. Your"
	+ "	calm view should be an important starting point.",
	"../Content/Skills/Composure.png"));
	
	dollSkills.push(new DollSkill(17, 2, "Foresight", 1, 1, 0, 1, 
	["The Cost of the target's next Action decreases by 1 (minimum 0.)"], 
	"By knowing the movements of enemies and ally in advance, you can act"
	+ "	with the minimum necessary movement.",
	"../Content/Skills/Foresight.png"));
	
	dollSkills.push(new DollSkill(18, 2, "Restraint", -2, 0, -1, -1, 
	["When you fail (or critically fail) a Madness Check, you may change"
	+ "	the result to a Success.", 
	"As the cost of this Skill, damage one of your Basic Parts of your"
	+ "	choice."], 
	"Loss of, distortion of mind. Let's cheat. With loss of body and"
	+ "	distortion of the body. Pain is proof of sanity...even such a"
	+ "	distorted philosophy is useful for regulating you now.",
	"../Content/Skills/Restraint.png"));
	
	dollSkills.push(new DollSkill(19, 2, "Scapegoat", -2, 0, -1, -1, 
	["When one of your Sisters fails (or critically fails) a Madness Check,"
	+ "	you may change the result to a Success.", 
	"As the cost of this Skill, add a Madness Point to one of your"
	+ "	Fetters of your choice."], 
	"You are sensitive to look at the world. Not only in battle, but in"
	+ "	human relationships. You know what you should do. Brutally. Firmly.",
	"../Content/Skills/Scapegoat.png"));
	
	dollSkills.push(new DollSkill(20, 2, "Tactics", -1, 0, -2, -2, 
	["At the beginning of the Battle Phase, you may observe the arrangement"
	+ "	of enemies and move a Doll of your choice to any Area other than"
	+ "	Tartarus."], 
	"Strategy based on position and traction. Everyone is driven by the"
	+ "	promise of victory for a flexible team.",
	"../Content/Skills/Tactics.png"));
	
	//holic skills
	dollSkills.push(new DollSkill(21, 3, "Carnage", -2, 3, -1, -1, 
	["As the Cost of this Skill, add a Madness Point to a Fetter of your"
	+ "	choice.", 
	"Support 3."], 
	"No, it's not like this, it should be like this. Desire, obsession,"
	+ "	thoughts. They can distort physical laws.",
	"../Content/Skills/Carnage.png"));
	
	dollSkills.push(new DollSkill(22, 3, "Drawn to Tartarus", -1, 0, -1, -1, 
	["During the Battle Phase, when you declare a Movement Maneuver that"
	+ "	targets yourself in the direction towards Tartarus, the Cost of"
	+ "	the Maneuver is decreased by -1 (minimum 0.)"], 
	"Your soul searches for darkness, for that is where you are.",
	"../Content/Skills/DrawnToTartarus.png"));
	
	dollSkills.push(new DollSkill(23, 3, "Fall Into Hades", -2, 1, -1, -1, 
	["As the Cost of this Skill, add a Madness Point to a Fetter of your"
	+ "choice.",
	"You are instantly transported from your current position on the map"
	+ "	to Hades. This is not considered a Movement Maneuver."], 
	"The place where the broken girl was born. It must surely be Hell.",
	"../Content/Skills/FallIntoHades.png"));
	
	dollSkills.push(new DollSkill(24, 3, "Fury", -2, 4, -1, -1, 
	["You may only use this Skill when you deal damage.",
	"As the Cost of this Skill, add a Madness Point to a Fetter of your"
	+ " choice.",
	"Add +2 to the damage dealt."], 
	"Because of you. Unforgivable. Unforgivable. Absolutely not allowed."
	+ "	You will break it apart. You will shatter it.",
	"../Content/Skills/Fury.png"));
	
	dollSkills.push(new DollSkill(25, 3, "Insane Swiftness", -1, 0, -1, -1, 
	["When one of your Fetters is in a state of Madness during the Battle"
	+ "	Phase, you gain a +1 to the die roll on Attack Checks."], 
	"Madness. Makes. You. Strong.",
	"../Content/Skills/InsaneSwiftness.png"));
	
	dollSkills.push(new DollSkill(26, 3, "Impulse", -2, 0, -1, -1, 
	["Once per Turn, when you declare a Maneuver, instead of paying the"
	+ "	normal cost for the Maneuver, you may instead add a Madness Point"
	+ "	to a Fetter of your choice as the cost."], 
	"Still it can move. It is not over yet. Another stroke, another step:"
	+ "	Show yourself moving while breaking yourself.",
	"../Content/Skills/Impulse.png"));
	
	dollSkills.push(new DollSkill(27, 3, "Limits of Madness", 0, 4, -1, -1, 
	["You may remove a Madness Point from a Fetter of your choice."
	+ "	However, if any of your Sisters are in the same Area as you, they"
	+ "	must add a Madness Point to a Fetter of their choice."], 
	"You will not suppress your madness. Do not mind the staring eyes"
	+ "	around you. Spit it out! They do not have to approach it if they"
	+ "	do not wish to see it!",
	"../Content/Skills/LimitsOfMadness.png"));

	//junk skills
	dollSkills.push(new DollSkill(28, 4, "Damaged Goods", -1, 0, -1, -1, 
	["During the Battle Phase, at the end of the Turn and when Treasure"
	+ "	is damaged, you do not add Madness Points."], 
	"You are half broken. Because it is broken, it will not break any"
	+ "	more. Days of fighting? You wonder what was before that...",
	"../Content/Skills/DamagedGoods.png"));
	
	dollSkills.push(new DollSkill(29, 4, "Defender of Eden", -1, 0, -2, -2, 
	["When you are in Eden or Elysium, all Maneuvers used by enemies"
	+ "	which are in Eden have their Action Point cost increased by 1.",
	"This Skill remains in effect even if you are completely Annihilated."], 
	"These defiled men cannot be allowed to trample this place."
	+ "	You will not let them.",
	"../Content/Skills/DefenderOfEden.png"));
	
	dollSkills.push(new DollSkill(30, 4, "Dweller in hades", -1, 0, -1, -1, 
	["During the Battle Phase, if you are in Hades, you gain +1 to the"
	+ "	die roll on Attack Checks."], 
	"Hell is right for you. Because enemies can understand you better"
	+ "	than allies.",
	"../Content/Skills/DwellerInHades.png"));
	
	dollSkills.push(new DollSkill(31, 4, "Even Unto Tartarus", -1, 0, -1, -1, 
	["During the Battle Phase, if you are in Tartarus, all your Action"
	+ "	Maneuver’s Costs are decreased by 1 (to a minimum of 1)."], 
	"Your pain will not stop even if you all fall into madness."
	+ "	You will be their strength!",
	"../Content/Skills/EvenUntoTartarus.png"));
	
	dollSkills.push(new DollSkill(32, 4, "Follow", 0, 2, -1, -1, 
	["This Skill can only be used when one of your Sisters uses a"
	+ "	Movement Maneuver.",
	"Move 1."], 
	"Behavior that has been repeated many times. It's fixed in your brain"
	+ "	by now. Instinct.",
	"../Content/Skills/Follow.png"));
	
	dollSkills.push(new DollSkill(33, 4, "Lame Beast", -1, 0, -1, -1, 
	["For every Hit Location of yours in which all Parts have been"
	+ "	damaged, you gain +1 to Attack Checks you make."], 
	"What is broken is nothing but a shackle. The harvest for"
	+ "	replacements is now.",
	"../Content/Skills/LameBeast.png"));
	
	dollSkills.push(new DollSkill(34, 4, "Struggle", -1, 0, -1, -1, 
	["When you voluntarily take a Madness Point in order to reroll a die,"
	+ "	you gain +1 to the die roll."], 
	"You will never fail. Even this body has given up, but you absolutely"
	+ "	will not give up until the end!",
	"../Content/Skills/Struggle.png"));
	
	//sorority skills
	dollSkills.push(new DollSkill(35, 5, "Gathering in Elysium", 2, 2, -2, -2, 
	["Regardless of their current place on the Battle Map, all your sisters,"
	+ "	including you, are instantly transported to Elysium.",
	"This is not considered a Movement Maneuver."], 
	"The girl's gatherings can not be messy to anyone. It can not be"
	+ "	disturbed. Even in battle.",
	"../Content/Skills/GatheringInElysium.png"));
	
	dollSkills.push(new DollSkill(36, 5, "Grace", -1, 0, -2, -2, 
	["When you voluntarily take a Madness Point in order to reroll a die,"
	+ "	one sister of your choice (excluding you) may make a Conversation"
	+ "	Check with you as the target."], 
	"Your standing behavior is beautiful and perfect, the girls who see"
	+ "	it will make your feelings clearer.",
	"../Content/Skills/Grace.png"));
	
	dollSkills.push(new DollSkill(37, 5, "Order", 2, 3, -2, -2, 
	["All your sisters upon the Battle Map, including you, may make a"
	+ "	single Attack Maneuver of their choice with Rapid Timing."], 
	"You teach it to everyone. Timing is matched with the meaning of your"
	+ "	shout and attacks fly all at once. Do not allow enemies to fight back.",
	"../Content/Skills/Order.png"));
	
	dollSkills.push(new DollSkill(38, 5, "Secret Whisper", -1, 0, -2, -2, 
	["At the beginning and end of the Battle Phase, one sister of your"
	+ "	choice (excluding you) may make a Conversation Check with you as"
	+ "	the target."], 
	"Secret conversation of girls. A small topic. A little negativity."
	+ "	A little friendship. But that is what makes bonds bloom.",
	"../Content/Skills/SecretWhisper.png"));
	
	dollSkills.push(new DollSkill(39, 5, "Self-Control", -1, 0, -1, -1, 
	["If you are afflicted with Madness, you gain +1 to the die roll on"
	+ "	Conversation and Madness Checks."], 
	"You are responsible. Everyone who will not be allowed to escape,"
	+ "	for example, will take your hand and stand up.",
	"../Content/Skills/Self-Control.png"));
	
	dollSkills.push(new DollSkill(40, 5, "Sister\'s Kiss", 1, 2, 0, 0, 
	["This Skill is only usable against Savants.",
	"The target Savant loses 4 Action Points."], 
	"A distorted girl standing in front of you may also be a sister."
	+ "	Let me cuddle and let me down the raised fist…",
	"../Content/Skills/SistersKiss.png"));
	
	dollSkills.push(new DollSkill(41, 5, "Tough Love", -1, 0, -2, -2, 
	["When one of your Sisters has a Part damaged by an Attack Maneuver"
	+ "	you used, she may remove a Madness Point from a Fetter she has"
	+ "	which is in a state of Madness."], 
	"If they have a weak heart, they will break. You have to become a"
	+ "	demon. A scar is better than ruin.",
	"../Content/Skills/ToughLove.png"));
	
	//baroque skills
	let dollSkill = new DollSkill(42, 6, "Mutated being", -1, 0, -1, -1, 
	["During the Battle Phase, when you are hit with an Attack that did"
	+ "	not roll a Critical Success, you may choose which Location it"
	+ "	hits (unless you have lost all Parts from that Location.)"], 
	"That body no longer has the shape of a person. Therefore it will not"
	+ "	accept attacks against people.",
	"../Content/Skills/MutatedBeing.png");
	dollSkill.special = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(43, 6, "Crystallization", 1, 4, -1, -1, 
	["You may ignore any \"Dismember\", \"Explosive\", and \"Move\""
	+ "	properties associated with an attack you've been hit by",
	"This Maneuver can be used any number of times per Turn."], 
	"Unusual body fluid flowing in a heteromorphic body. If it touches"
	+ "	the outside air it will crystallize and harden. It will be cut"
	+ "	and it will absorb the explosion. Indeed the body of a monster,"
	+ "	but it is a useful body",
	"../Content/Skills/Crystallization.png");
	dollSkill.usable = false;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(44, 6, "Extreme mutation", -1, 5, -1, -1, 
	["When you learn this skill, you may acquire an additional Tier 3"
	+ "	Mutation.",
	"This is not limited by your Reinforcement Points, and you may"
	+ "	regenerate it as normal."], 
	"The irregular curse that you have been put in is beyond the limits"
	+ "	of the body. It is a miracle that you keep your mind.",
	"../Content/Skills/ExtremeMutation.png");
	dollSkill.extremeMutation = true;
	dollSkills.push(dollSkill);
	
	dollSkills.push(new DollSkill(45, 6, "Instrument of Evil", -1, 0, -1, -1, 
	["When you declare an Attack Maneuver, you may declare the use of" 
	+ " this Skill to increase the damage by 1.", 
	"However, the \"Dismember\", \"Explosive\", \"Chain Attack\" and" 
	+ " \"Area Attack\" properties are all lost."], 
	"Imitate and reinforce your body with the original weapon attack" 
	+ " organs and express it as a more violent weapon. The power of" 
	+ " destruction would have increased, but its awkwardness is not an" 
	+ " essential ratio.",
	"../Content/Skills/InstrumentOfEvil.png"));
	
	dollSkills.push(new DollSkill(46, 6, "Karmic Corpe", -1, 0, -1, -1, 
	["At the end of the Battle Phase, you may regenerate two Parts of" 
	+ " your choice."], 
	"It was cut off repeatedly, shot, destroyed and destroyed. It is" 
	+ " engraved and you wonder what has been done since it broke down a" 
	+ " little bit now",
	"../Content/Skills/KarmicCorpse.png"));
	
	dollSkills.push(new DollSkill(47, 6, "Mad Demon", -1, 0, -1, -1, 
	["When you make an Attack Check for an Unarmed Attack Maneuver, you" 
	+ " may add +1 to the die roll."], 
	"Your body is dominated by its own combat instinct, the world" 
	+ " fighting is dyed incrimson, fighting with nails, tearing with" 
	+ " fangs.",
	"../Content/Skills/MadDemon.png"));
	
	dollSkills.push(new DollSkill(48, 6, "Regeneration", 1, 4, -1, -1, 
	["Defend 1. You may use this Skill any number of times per Turn," 
	+ " but only once per Attack."], 
	"Your body will return to its original state by itself. Any attack" 
	+ " will only slow the movement.",
	"../Content/Skills/Regeneration.png"));
	
	dollSkills.push(new DollSkill(49, 6, "Super Strength", -1, 0, -1, -1, 
	["Your Unarmed and Melee Attacks deal +1 damage."], 
	"The muscular strength of the deceased which is unlikely to be human," 
	+ " it is further enhanced and raised. A monster put in a narrow arm" 
	+ " is always waiting for the time of liberation.",
	"../Content/Skills/SuperStrength.png"));
	
	//gothic skills
	dollSkill = new DollSkill(50, 7, "Voracity", 0, 2, -1, -1, 
	["Regenerate a Reinforcement Part of yours that was damaged."], 
	"Eating corpses, you will recover even an unusual feature, even from" 
	+ " the original body.",
	"../Content/Skills/Voracity.png");
	dollSkill.special = true;
	dollSkills.push(dollSkill);
	
	dollSkills.push(new DollSkill(51, 7, "Delight in Corruption", 0, 4, -1, -1, 
	["You may use a \"Rapid\", \"Check\" or \"Damage\" maneuver that you" 
	+ " have already used one more time."], 
	"When someone is hurt, including even yourself, you do not think you" 
	+ " will gain a sense of amnestic uplifting.",
	"../Content/Skills/DelightInCorruption.png"));
	
	dollSkills.push(new DollSkill(52, 7, "Feast of Flesh", 1, 1, -1, -1, 
	["Regenerate a Basic Part of yours that was damaged."], 
	"You eat dead flesh. Ingested meat will be self contained. That is a" 
	+ " sight that many dead people will feel awkwardness about.",
	"../Content/Skills/FeastOfFlesh.png"));
	
	dollSkills.push(new DollSkill(53, 7, "Lick Jowls", 0, 2, 0, 1, 
	["Hinder Move 1."], 
	"Awkward appetite eyes, tongue crawling the lips, dripping saliva." 
	+ " Any deceased person has to stop his or her feet moving from that" 
	+ " aspect.",
	"../Content/Skills/LickJowls.png"));
	
	dollSkills.push(new DollSkill(54, 7, "Predator", 2, 4, 0, 0, 
	["Stagger all enemies in the same Area as you."], 
	"The horrors who eat the dead who the enemies instinctively fear." 
	+ " Even deadly weapons without ego can not stop fearing you.",
	"../Content/Skills/Predator.png"));
	
	dollSkills.push(new DollSkill(55, 7, "Rip and Tear", -1, 0, -1, -1, 
	["The effect of your Jaws and Fists changes to " 
	+ "\"Unarmed Attack 1 + Dismember.\""], 
	"Your body specialized in predation is a body to capture the prey," 
	+ " to rip it, to eat it. Not to strengthen but have a deadly effect.",
	"../Content/Skills/RipAndTear.png"));
	
	dollSkills.push(new DollSkill(56, 7, "Ultimate Predator", -1, 0, 0, 0, 
	["When you succeed with a Range 0 Unarmed Attack, if the number of" 
	+ " Parts the target has remaining is no greater than  the result of" 
	+ " the Attack Check minus five, all of the target's Parts are" 
	+ " instantly broken (however, Legions are not affected.)"], 
	"Regardless of size, eating that can crush the swallowed body inside." 
	+ " Sometimes digestion can not catch up, but it is not a big deal.",
	"../Content/Skills/UltimatePredator.png"));
	
	dollSkills.push(new DollSkill(57, 7, "Vile Repast", -1, 0, -2, -2, 
	["When you cause the target of your Attack to make a Dismemberment" 
	+ " Check, they receive a penalty of -2 to the die roll."], 
	"Your blade is a knife that cuts meals. Your claws are tearing." 
	+ " Your teeth are eating. None escape.",
	"../Content/Skills/VileRepast.png"));
	
	//Requiem skills
	dollSkill = new DollSkill(58, 8, "Magic Bullet", -1, 0, -1, -1, 
	["During the Battle Phase, when you make a Ranged Attack Maneuver," 
	+ " its maximum range increases by +1."], 
	"The dead are not suitable for shooting guns, but you are special" 
	+ " made.To the enemies far away from usual, the bullet pierces.",
	"../Content/Skills/MagicBullet.png");
	dollSkill.special = true;
	dollSkills.push(dollSkill);
	
	dollSkills.push(new DollSkill(59, 8, "Concentration", 2, 2, -1, -1, 
	["Until the end of the Turn, all your Attack Checks gain +1 to the" 
	+ " die roll."], 
	"Sharpen the senses and aim for the opponent's weakness. Aimed shots" 
	+ " will probably set off enemies.",
	"../Content/Skills/Concentration.png"));
	
	dollSkills.push(new DollSkill(60, 8, "Gun God", -1, 0, -1, -1, 
	["When you make an Attack Check for a Ranged Attack Maneuver, you" 
	+ " may add +1 to the die roll."], 
	"Your eyes and gun are connected. It is different from the shambling" 
	+ " zombie soldiers. It surely penetrates what you want.",
	"../Content/Skills/GunGod.png"));
	
	dollSkills.push(new DollSkill(61, 8, "Gun Kata", 2, 3, 0, 1, 
	["Hinder 2. Afterwards, you may make a Ranged Attack 1 against the" 
	+ " same target."], 
	"Combat fighting strategy using guns. The basics are two pistols, but" 
	+ " the dead can use this fighting technique for every gun battle.",
	"../Content/Skills/GunKata.png"));
	
	dollSkills.push(new DollSkill(62, 8, "Hand of Death", 0, 2, -1, -1, 
	["You may use an Attack Maneuver of your choice as if its Timing were" 
	+ " \"Rapid\"."], 
	"Your blow is always the prince of death. The enemies who shoot and" 
	+ " show at exquisite times are always after you.",
	"../Content/Skills/HandOfDeath.png"));
	
	dollSkills.push(new DollSkill(63, 8, "Lullaby", -1, 0, -1, -1, 
	["During the Battle Phase, you may take a penalty of -1 to the" 
	+ " Attack Check of a Ranged Attack. If you do, the Cost of the" 
	+ " Maneuver is decreased by 1 (minimum 1.)"], 
	"It will not stop. Especially in the battlefield. There is no song if" 
	+ " the voice is interrupted. Continuously, heavy, let the guns sing.",
	"../Content/Skills/Lullaby.png"));
	
	dollSkills.push(new DollSkill(64, 8, "Rear Guard\'s Pride", -1, 0, -1, -1, 
	["When you roll a Critical Failure on a Ranged or Blast Attack,"
	+ " treat it as if it were a normal failure."], 
	"Shoot enemies from behind a friend. Because you believe in them," 
	+ " you can concentrate on the spirit of the Rear Guard. You cannot" 
	+ " disapprove such trust with just a mistake.",
	"../Content/Skills/RearGuardsPride.png"));
	
	dollSkills.push(new DollSkill(65, 8, "Trusted Compainion", 1, 2, -1, -1, 
	["You may regenerate a single damaged Part that can perform a Melee " 
	+ " Attack or Ranged Attack Maneuver."], 
	"There is a weapon that you believe in. No matter how it breaks or" 
	+ " bends, it can not betray you, it will respond to you.",
	"../Content/Skills/TrustedCompanion.png"));
	
	//Romanesque skills
	dollSkill = new DollSkill(66, 9, "Battle Maiden", -1, 0, -1, -1, 
	["Your Maximum Action Points increase by +2."], 
	"Your dance is as fast as the dead. The surroundings are all so late" 
	+ " that this blur can barely be seen.",
	"../Content/Skills/BattleMaiden.png");
	dollSkill.special = true;
	dollSkills.push(dollSkill);
	
	dollSkills.push(new DollSkill(67, 9, "Caress", 0, 2, 0, 0, 
	["Stagger."], 
	"Tickling of sensuality. If maiden's fingers crawl, the flesh of the" 
	+ " dead will also be crankless and will tremble from the pleasure" 
	+ " of the moment.",
	"../Content/Skills/Caress.png"));
	
	dollSkill = new DollSkill(68, 9, "Clockwork", -1, 5, -1, -1, 
	["When you learn this skill, you may acquire an additional Tier 3" 
	+ " Enhancement.",
	"This is not limited by your Reinforcement Points, and you may" 
	+ " regenerate it as normal."], 
	"The body is made up of gears and screws. There is little blood and" 
	+ " meat to move you.",
	"../Content/Skills/Clockwork.png");
	dollSkill.clockwork = true;
	dollSkills.push(dollSkill);
	
	dollSkills.push(new DollSkill(69, 9, "Dance of Death", 0, 3, -1, -1, 
	["You may reroll the die for an Attack Check."], 
	"Because it is a body that enables precise movement, shoot down the" 
	+ " place where it can be done. Ensure weaknesses of enemies with" 
	+ " fine applications.",
	"../Content/Skills/DanceOfDeath.png"));
	
	dollSkills.push(new DollSkill(70, 9, "Deranged Gears", -1, 0, -2, -2, 
	["All enemies that roll a Critical Failure within the same Area as" 
	+ " you in have their damage of the resulting attack increased by 1."], 
	"Unbelievable dance is an appropriate comedy. You can not forgive" 
	+ " halfway abominations. You have to change it to the clown of clown" 
	+ " that can be laughed at least.",
	"../Content/Skills/DerangedGears.png"));
	
	dollSkills.push(new DollSkill(71, 9, "One\'s Many Charms", -1, 0, -1, -1, 
	["The cost of your Basic Parts \"Forearm\" and \"Foot\" decreases by 1" 
	+ " (to a minimum of 0.)"], 
	"Your limbs dance swiftly. If you are ready to dance together, you" 
	+ " will have a polite ball in the middle of battle.",
	"../Content/Skills/OnesManyCharms.png"));
	
	dollSkills.push(new DollSkill(72, 9, "Tuning", 0, 2, 0, 0, 
	["Choose a damaged Part on the target. Until the end of the Turn, the" 
	+ " target may use Maneuvers associated with that damaged Part as if" 
	+ " it were not damaged. (However, this does not recover Maneuvers" 
	+ " that were used up or are not repeatable.)"], 
	"It is comforting to be danced even if it does not clear. You know" 
	+ " the art of forcibly moving a broken one.",
	"../Content/Skills/Tuning.png"));
	
	dollSkills.push(new DollSkill(73, 9, "Waltz", 1, 2, -1, -1, 
	["Until the end of the Turn, every Attack which targets you receives" 
	+ " a penalty of -1 to the Attack Check (if it is an Area Attack, the" 
	+ " penalty only applies to hitting you.)",
	"If this Skill is used multiple times during the same Turn, the" 
	+ " penalty does not increase."], 
	"Dance princess on the battlefield. The dancing flying attacks that" 
	+ " are driven into you will be forgotten. It is difficult to stop" 
	+ " dancing figures.",
	"../Content/Skills/Waltz.png"));
	
	//Stacy Skills
	dollSkill = new DollSkill(74, 10, "Crawling Flesh", 0, 3, 0, 2, 
	["You may only use this Skill while you aredamaged.",
	"Hinder 3."], 
	"Cut off, blown away, even torn off pieces of meat. They will" 
	+ " wiggle at your will and stop enemies.",
	"../Content/Skills/CrawlingFlesh.png");
	dollSkill.special = true;
	dollSkills.push(dollSkill);
	
	dollSkills.push(new DollSkill(75, 10, "Corpse Style", -2, 2, 0, 1, 
	["As the Cost of this Skill, break one of your Basic Parts.",
	"Support 2 or Hinder 2."], 
	"Grab the opponent with his own arms. If you are dead and throw your" 
	+ " jaw to bite people from afar, it's a natural tactic.",
	"../Content/Skills/CorpseStyle.png"));
	
	dollSkills.push(new DollSkill(76, 10, "Made to be Broken", -1, 0, -1, -1, 
	["Add +1 to all die rolls for Attack Checks and Dismemberment" 
	+ " Checks. However, at the end of the Battle Phase and each Turn of" 
	+ " combat, you must damage one of your own Parts of your choice.",
	"This cannot be manipulated by Maneuvers that affect Costs."], 
	"You are excellent, but a clear failed work. The body will collapse" 
	+ " as battle rages on.",
	"../Content/Skills/MadeToBeBroken.png"));
	
	dollSkills.push(new DollSkill(77, 10, "Meat Shield", 0, 4, 0, 1, 
	["If the damage received by the target is caused by an Attack" 
	+ " Maneuver, you may negate any number and combination of effects" 
	+ " other than damage of your choosing of an attack (Area, Chain," 
	+ " Dismemberment, Explosive, Stagger, and more specific effects are" 
	+ " included)."], 
	"Instantly use yourself as a shield and counter the aftermath. Is it" 
	+ " because of your preparation or is it a dull sense of despair?",
	"../Content/Skills/MeatShield.png"));
	
	dollSkills.push(new DollSkill(78, 10, "Organ Donor", -1, 0, -2, -2, 
	["At the end of the Battle Phase, you and all of your Sisters can" 
	+ " regenerate their damaged \"Entrails\" parts."], 
	"You do not want to imagine what kind of body this is. Your body" 
	+ " will regenerate only the organs in a short time. Even if it" 
	+ " hollowed out, baked or eaten.",
	"../Content/Skills/OrganDonor.png"));
	
	dollSkills.push(new DollSkill(79, 10, "Protect", 0, 4, 0, 1, 
	["When the target takes damage, you may take that damage in her" 
	+ " place.",
	"You may use this Skill any number of times per Turn.",
	"However, this cannot be used against the damage caused by the" 
	+ " \"Area\" attack effect."], 
	"You are always a shield for everyone without hesitation. You can" 
	+ " defend your sisters.",
	"../Content/Skills/Protect.png"));
	
	dollSkills.push(new DollSkill(80, 10, "Remain Dead", 0, 2, -1, -1, 
	["Regenerate a Basic Part of yours that was damaged."], 
	"Wherever there is a lost part, by reconnecting it is restored." 
	+ " Your body will not stop being you. Surely, forever.",
	"../Content/Skills/RemainDead.png"));
	
	dollSkills.push(new DollSkill(81, 10, "Unfazed", -1, 0, -1, -1, 
	["During the Battle Phase, if your Parts are damaged, you may" 
	+ " continue to use Maneuvers they enable until the end of the Turn."], 
	"Your body keeps on functioning even if it becomes disjointed." 
	+ " This does not hinder it from killing in battle.",
	"../Content/Skills/Unfazed.png"));
	
	//Thanatos Skills
	dollSkill = new DollSkill(82, 11, "Unlimited Destruction", 0, 4, -1, -1, 
	["Only usable on a target to whom you deal damage.",
	"As long as your current Action Point value is not zero or less," 
	+ " until the next Count, you may use all your available Attack" 
	+ " Maneuvers once each against the same target at their original" 
	+ " Timings, aside from the Maneuver that dealt initial damage" 
	+ " (ignore the difference between your current Action Point value" 
	+ " and the Count)."], 
	"An undead technique of throwing all your strikes upon an enemy to" 
	+ " destroy them completely.",
	"../Content/Skills/UnlimitedDestruction.png");
	dollSkill.special = true;
	dollSkills.push(dollSkill);
	
	dollSkills.push(new DollSkill(83, 11, "Calamity", 2, 4, -1, -1, 
	["You may only use this Skill when you deal damage with a Melee" 
	+ " Attack.",
	"Add the \"Area Attack\" property to this damage. You do not take" 
	+ " damage from this \"Area Attack.\""], 
	"Your existence is a tornado of death. Weapons and madness raging in" 
	+ " places where you cut and you'll be drawn into a whirlpool of" 
	+ " destruction.",
	"../Content/Skills/Calamity.png"));
	
	dollSkills.push(new DollSkill(84, 11, "Dead on Target", -1, 0, -1, -1, 
	["During the Battle Phase, if you roll 6 on an Attack Check, you may" 
	+ " choose which Location to deal damage to."], 
	"The blow that always gives a fatal injury to the enemy. It is an" 
	+ " inevitability rather than a coincidence.",
	"../Content/Skills/DeadOnTarget.png"));
	
	dollSkills.push(new DollSkill(85, 11, "Drama of Death", -1, 0, -1, -1, 
	["During the Battle Phase, when you and another Sister target an" 
	+ " enemy with Attack Maneuvers, you may add +1 to the die roll for" 
	+ " your Attack Check and +1 to your Damage."], 
	"Even with breathing stopped, bodies that observe timing and" 
	+ " maximize effect with simultaneous attacks. It is meaningful" 
	+ " to breathe together.",
	"../Content/Skills/DramaOfDeath.png"));
	
	dollSkills.push(new DollSkill(86, 11, "Instantaneous", -1, 0, -1, -1, 
	["During the Battle Phase, when you declare an Attack Maneuver, no" 
	+ " one other than you can perform Maneuvers at the 'Check' and" 
	+ " 'Rapid' timings in response."], 
	"Ultra high speed blow. It is impossible for anyone to prevent it.",
	"../Content/Skills/Instantaneous.png"));
	
	dollSkills.push(new DollSkill(87, 11, "God of Death", -1, 0, -1, -1, 
	["When making an Attack Check with a Melee Attack Maneuver, you may" 
	+ " add +1 to the die roll."], 
	"Sprint and hit. Your arms, eyes and brain were scrutinized and" 
	+ " polished to bring about death and destruction.",
	"../Content/Skills/GodOfDeath.png"));
	
	dollSkills.push(new DollSkill(88, 11, "Judgment", -1, 3, -1, -1, 
	["Use this Skill only during your own Melee Attack Maneuver\'s" 
	+ " Attack Check. The die result of the Attack Check becomes 6," 
	+ " and no effect can change this result."], 
	"There is a blow that cannot be stopped. Liberated from bad luck, it" 
	+ " will bring an ending.",
	"../Content/Skills/Judgment.png"));
	
	dollSkills.push(new DollSkill(89, 11, "Quenn of the Underworld", -1, 0, -1, -1, 
	["Hinder Move' Maneuvers used by Legions have no effect on you.",
	"Furthermore, Legions must roll a 7 or higher on Attack Checks made" 
	+ " against you to hit."], 
	"No matter how many they arrange, their dead fingers cannot even" 
	+ " touch you.",
	"../Content/Skills/QueenOfTheUnderworld.png"));
	
	//Pychedelic Skills
	dollSkill = new DollSkill(90, 12, "Vortex of Destruction", -2, 2, -2, -2, 
	["Unavailable until the end of the first Turn.",
	"As the Cost of this Skill, add a Madness Point to all of your" 
	+ " Fetters that are not in a state of Madness.",
	"Each being on the Stage of Battle chooses and breaks four Parts." 
	+ " (Legions are completely annihilated.)"], 
	"\"The most Terrible Thing\" that was suppressed inside you will" 
	+ " overflow and destroy everything that is visible to you." 
	+ " Even yourself.",
	"../Content/Skills/VortexOfDestruction.png");
	dollSkill.special = true;
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(91, 12, "Distorted Power", 3, 2, 0, 2, 
	["You may use this skill even if completely Annihilated.",
	"The target chooses and breaks two Parts belong to it." 
	+ " (Legions simply take 2 damage.)"], 
	"The most obvious destructive supernatural ability distorting what" 
	+ " we have seen with the power of will, twisting, invisible" 
	+ " violence of splitting overrun the enemy and turn it into meat" 
	+ " blocks or scraps.",
	"../Content/Skills/DistortedPower.png");
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(92, 12, "Embrace of Souls", 2, 1, 0, 2, 
	["You may use this skill even if completely Annihilated.",
	"The target may remove a Madness Point from one of their Fetters.",
	"Afterwards, add a Madness Point to one of your Fetters that is not" 
	+ " in a state of Madness."], 
	"Your soul cannot be caught in the cage of flesh. Gently slip out, you" 
	+ " can touch the soul of the precious person directly. Cuddling to" 
	+ " share that suffering.",
	"../Content/Skills/EmbraceOfSouls.png");
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(93, 12, "Pawn\'s Gambit", 2, 1, 0, 1, 
	["You may use this skill even if completely Annihilated.",
	"Move 1.",
	"The target of the Move loses 2 Action Points" 
	+ " (even if the Move is Hindered.)"], 
	"Power of strong will, blow away the target opponent that has a special" 
	+ " influence even to gravity with a gust of force. Beat on it, even" 
	+ " miserable sense of upside down shows a big gap?",
	"../Content/Skills/PawnsGambit.png");
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(94, 12, "Shared Loss", 3, 2, 0, 1, 
	["This skill is only usable on Horrors.",
	"Choose one of your Hit Locations.",
	"For every broken Part of yours in that Hit Location, the target" 
	+ " chooses and destroy a Part of its own."], 
	"The destruction that you received is projected onto the enemy\'s" 
	+ " ego and misunderstood... Effective attacks only for those with" 
	+ " only a very low self are not destroyed and they can not be used.",
	"../Content/Skills/SharedLoss.png");
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(95, 12, "Throne of the Void", -1, 0, -1, -1, 
	["You may ignore Hinder and Hinder Move effects originating from" 
	+ " the same Area as you are in."], 
	"Slightly, but your body is always floating, making sure that your" 
	+ " body does not get caught out in movements, such as undocumented" 
	+ " handouts.",
	"../Content/Skills/ThroneOfTheVoid.png");
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(96, 12, "Twist of Fate", -2, 3, 0, 3, 
	["You may use this skill only when you are the target of an attack.",
	"As the Cost of this Skill, add a Madness Point to a Fetter of your choice.",
	"Regardless of the result of the Attack Check, the attack is considered" 
	+ " a failure."], 
	"Eyes to see the future. Power too heavy for the mind in one's heart." 
	+ " At the price of pain to the soul, the power to avoid only the worst" 
	+ " crisis.",
	"../Content/Skills/TwistOfFate.png");
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
	dollSkill = new DollSkill(97, 12, "WillToRefuse", 2, 4, 0, 1, 
	["You may use this skill even if completely Annihilated.",
	"Defend 1.",
	"You may use this Skill any number of times per Turn, but only once" 
	+ " per Attack."], 
	"You can bounce off the unexpected future that produces results just by" 
	+ " thinking. Do not let the blade ease your important things to bullets.",
	"../Content/Skills/WillToRefuse.png");
	dollSkill.restricted = true;
	dollSkills.push(dollSkill);
	
}

//premonitions
function createPremonitions(){
	
	premonitions.push(new Premonition(0, "Catastrophe",
	"It's just as well you don't remember any more of that tragedy, malice," 
	+ " and betrayal. But, in order to understand what is happening right" 
	+ " now, you have no choice but to...",
	"../Content/Premonitions/Catastrophe.png"));
	
	premonitions.push(new Premonition(1, "Despair",
	"It's possible your life then was worse than your unlife is now. Yet you" 
	+ " must remember, so that you can take measures to never return to days" 
	+ " like those...",
	"../Content/Premonitions/Despair.png"));
	
	premonitions.push(new Premonition(2, "Trapped",
	"You suddenly remembered something, and it's as if it cast you into hell." 
	+ " What an unreasonable fate... yet if you grasp all of that unreason," 
	+ " perhaps you can prevail over it.",
	"../Content/Premonitions/Trapped.png"));
	
	premonitions.push(new Premonition(3, "Doll",
	"It is not under your own volition that you walk, weep, or reason. So" 
	+ " long as you do not know your own past, it shall not be your own will" 
	+ " that directs you.",
	"../Content/Premonitions/Doll.png"));
	
	premonitions.push(new Premonition(4, "Sinner",
	"You wish to atone for a sin you have committed. It was a sin that can" 
	+ " never be forgiven. But, unless you recover your memory, neither can" 
	+ " you atone and move on.",
	"../Content/Premonitions/Sinner.png"));
	
	premonitions.push(new Premonition(5, "Loss",
	"Long ago, you lost something. It remains lost even now. It wasn't your" 
	+ " life or your memory... it was something even more important than" 
	+ " those.",
	"../Content/Premonitions/Loss.png"));
	
	premonitions.push(new Premonition(6, "Seeker",
	"There is something you must have. Without it, there's no hope for you." 
	+ " How frustrating. Particularly that you can't remember what it was.",
	"../Content/Premonitions/Seeker.png"));
	
	premonitions.push(new Premonition(7, "Inversion",
	"The 'you' here now isn't the same as the 'you' that existed then. You" 
	+ " have to remember who you were in the past. Only then can you return" 
	+ " to the way you were.",
	"../Content/Premonitions/Inversion.png"));
	
	premonitions.push(new Premonition(8, "Hope",
	"You're sure you knew something incredible. A secret that could defeat" 
	+ " the Necromancers and change the world. If somehow you were to regain" 
	+ " that memory...",
	"../Content/Premonitions/Hope.png"));
	
	premonitions.push(new Premonition(9, "Happiness",
	"The warmth of the sun. The joy of being loved. All those moments of" 
	+ " contentment. Even if it's only within your heart, you want that" 
	+ " happiness back.",
	"../Content/Premonitions/Happiness.png"));
	
}

//fragments of memory
function createMemoryFragments(){
	memoryFragments.push(new MemoryFragment(0, "Blue Sky",
	`The sky used to be blue. Even though the one you see now is stained the color
of lead... you know it was once a pure, bright blue. It was something you took
for granted. But you'll never be able to see that sky again.`,
	"../Content/Memories/BlueSky.png"));
	
	memoryFragments.push(new MemoryFragment(1, "Mother\'s Hands",
	`You have a memory of warm hands embracing you. They were your mother's.
You don't remember her name or face, but you remember that hug. Beyond
just that memory, you wish that someday, you could embrace your mother for
real.`,
	"../Content/Memories/MothersHands.png"));
	
	memoryFragments.push(new MemoryFragment(2, "Sweet Lips",
	`You remember the touch of soft lips upon yours. You don't remember when it
was, or whose lips they were, but you remember that kiss. Would the sisters by
your side have lips that sweet?`,
	"../Content/Memories/SweetLips.png"));
	
	memoryFragments.push(new MemoryFragment(3, "Hidden Room",
	`You'd locked yourself inside a cramped room. Outside, someone was
wandering around searching for you. They mustn't find you. They mustn't find
you. But from the other side of the door, you heard them coming. And then...`,
	"../Content/Memories/HiddenRoom.png"));
	
	memoryFragments.push(new MemoryFragment(4, "Bloodbath",
	`A metallic scent tickled your nose as you sat alone in a pool of red blood. Body
parts were lying around you. You didn't remember whose they were. Nor why
you were alone in such a place. Could it be...`,
	"../Content/Memories/Bloodbath.png"));
	
	memoryFragments.push(new MemoryFragment(5, "In the Rain",
	`You were standing in the pouring rain. Except for the sound of raindrops, you
don't remember anything around you. The rain was dark, but it did not burn
you, simply soaked your body and left you shivering. Yet you miss it terribly.`,
	"../Content/Memories/InTheRain.png"));
	
	memoryFragments.push(new MemoryFragment(6, "Loneliness",
	`Everyone kept their distance from you, giggling maliciously. You don't
remember what you'd done, why they were laughing at you... but you never
want to see eyes like those again. You never want to be abandoned by the
companions you have now.`,
	"../Content/Memories/Loneliness.png"));
	
	memoryFragments.push(new MemoryFragment(7, "Smile",
	`A smile from the heart. A smile of true happiness. You don't know whose smile
it was... someone important to you, your family, maybe even yourself reflected
in the mirror. Yet it keeps returning to your mind.`,
	"../Content/Memories/Smile.png"));
	
	memoryFragments.push(new MemoryFragment(8, "Letter",
	`You remember taking a letter out of the mailbox. It had something to do with
what you've become now... but you don't remember what the letter said. It must
have come from someone important to you. Or maybe...`,
	"../Content/Memories/Letter.png"));
	
	memoryFragments.push(new MemoryFragment(9, "Silhouette",
	`A dark shadow towered over you. It did terrible things to you. The memory
makes you want to reach inside your head and tear it away. You despise that
shadow. It was the one who brought you back from the dead... there's no doubt
about it.`,
	"../Content/Memories/Silhouette.png"));
	
	memoryFragments.push(new MemoryFragment(10, "Flower Garden",
	`A flower garden in full bloom. Were you making a crown of flowers, or just
singing while you strolled through? In that place, where the flowers stretched
on forever, you're certain you were happy. Sometimes, you can't help but
withdraw into daydreams of it.`,
	"../Content/Memories/FlowerGarden.png"));
	
	memoryFragments.push(new MemoryFragment(11, "Father\'s Arms",
	`A father's strong arms. The rough feeling of his beard against your face. You
remember those arms holding your delicate body closely. The owner of those
arms is surely gone, but you still carry those warm feelings for emotional
support.`,
	"../Content/Memories/FathersArms.png"));
	
	memoryFragments.push(new MemoryFragment(12, "Blossoming Love",
	`Bittersweet memories of pure love. You're not sure who it was you loved, but
that feeling certainly remains, waiting quietly within you. The thought of it still
leaves your body shaking with pain.`,
	"../Content/Memories/BlossomingLove.png"));
	
	memoryFragments.push(new MemoryFragment(13, "Curse",
	`There was a person you could never forgive, so you performed a ceremony
charged with your hate. Always, forever, as long as you still woke, you cursed
their name. In turn, you cursed yourself just as completely - an eye for an eye.`,
	"../Content/Memories/Curse.png"));
	
	memoryFragments.push(new MemoryFragment(14, "Song",
	`You don't know where it came from, but you remember a single song perfectly.
It's just a song you whistled or hummed to yourself, but it's very dear to you.
Sometimes the lyrics you think you remember change, bit by bit.`,
	"../Content/Memories/Song.png"));
	
	memoryFragments.push(new MemoryFragment(15, "Cake",
	`You gorged yourself on sweet, sweet cake. Fluffy sponge cake, with melting
cream and brightly-colored fruit. There's none of that left in this world, though.
If you found some, could your tongue even taste it?`,
	"../Content/Memories/Cake.png"));
	
	memoryFragments.push(new MemoryFragment(16, "Flames",
	`Brightly blazing flames engulfed your surroundings. In that flickering wave of
heat, you felt more intoxicated than frightened. You want to feel those flames,
that intoxication, one more time. Unfortunately, this is a world where even
flammable things are scarce...`,
	"../Content/Memories/Flames.png"));
	
	memoryFragments.push(new MemoryFragment(17, "Cut",
	`While doing housework, you cried and panicked at the smallest cut, every time
you pricked your finger on a needle or a knife. To the you of today, who can
even be torn to shreds, that sort of scratch means very little…`,
	"../Content/Memories/Cut.png"));
	
	memoryFragments.push(new MemoryFragment(18, "White Room",
	`A white room. Medication, needles, people clad all in white. Were those
emaciated limbs really yours? You couldn't move them then, but now that
you're dead…`,
	"../Content/Memories/WhiteRoom.png"));
	
	memoryFragments.push(new MemoryFragment(19, "Black House",
	`The eerie silhouette of a ruined black mansion sometimes comes to mind. You
remember curiosity pushing you to enter the house, though you knew you
shouldn't. But what happened after that... you can't recall.`,
	"../Content/Memories/BlackHouse.png"));
	
	memoryFragments.push(new MemoryFragment(20, "Chains",
	`Locked behind iron bars, chained to a hard bed. Every day was misery. You
were a butterfly with your wings plucked off. You're still chained to somebody,
even now that you're dead. Even if you seem to be free, you're a puppet. How
long are you fated to dance on these strings?`,
	"../Content/Memories/Chains.png"));
	
	memoryFragments.push(new MemoryFragment(21, "Starry Sky",
	`You watched the moon and stars in the sky. Back then, you thought the night
sky was beautiful – now it's just... darkness. The eyes of the dead see pain and
sadness clearer than anything else.`,
	"../Content/Memories/StarrySky.png"));
	
	memoryFragments.push(new MemoryFragment(22, "Girl",
	`There was one other girl beside you. You've forgotten her name, her face, even
how you knew her. But you could never forget her smile. You loved her. You
loved the dear friend who showed you that smile.`,
	"../Content/Memories/Girl.png"));
	
	memoryFragments.push(new MemoryFragment(23, "Treasure",
	`There was one object you treasured more than anything. What exactly was
that item? Could it be one of the treasures you carry now? You and it are surely
bound together by fate.`,
	"../Content/Memories/Treasure.png"));
	
	memoryFragments.push(new MemoryFragment(24, "Funeral Service",
	`Who was it that died? Everybody is crying, mourning, inconsolable. What about
you? The face in the memorial photograph that used to loom large in your
memory has faded, but it was certainly a funeral for someone important to you.`,
	"../Content/Memories/FuneralService.png"));
	
	memoryFragments.push(new MemoryFragment(25, "Funeral Service",
	`Who was it that died? Everybody is crying, mourning, inconsolable. What about
you? The face in the memorial photograph that used to loom large in your
memory has faded, but it was certainly a funeral for someone important to you.`,
	"../Content/Memories/FuneralService.png"));
	
	memoryFragments.push(new MemoryFragment(26, "Party",
	`All your friends and family gathered for a wonderfully fun party. You're certain
that was one of your happiest times. Recalling that happiness now only
torments you.`,
	"../Content/Memories/Party.png"));
	
	memoryFragments.push(new MemoryFragment(27, "Pet Dog",
	`It wasn't a person, but was precious family to you all the same. You remember
its barks, its breathing, the feeling of its tongue and fur, even its name. All of 
those still remain, untouched, in your mind.`,
	"../Content/Memories/PetDog.png"));
	
	memoryFragments.push(new MemoryFragment(28, "Wings",
	`You were high, high in the sky, looking down on the world below you, though
you can't remember the scenery too well. You were definitely flying through
that sky. What's happened since then? Can you fly now?`,
	"../Content/Memories/Wings.png"));
	
	memoryFragments.push(new MemoryFragment(29, "Everyday Life",
	`Your daily routine was a bit plain and tedious, yes, but you wouldn't want to
change those happy times. You believed that life would surely last forever... but
this body and this world don't match those days at all, do they?`,
	"../Content/Memories/EverydayLife.png"));
	
	memoryFragments.push(new MemoryFragment(30, "Thrown Away",
	`You were broken, abandoned, and buried. You screamed, raged, and cursed
the outrageous unfairness of it all. But in the future, things would be different.
Surely, after all this... surely your hopes will... there's no way...`,
	"../Content/Memories/ThrownAway.png"));
	
	memoryFragments.push(new MemoryFragment(31, "Apology",
	`You hurt someone important to you and never got to say a single word in
apology. You're dead, but still exist here, so surely that person does too. You
still need to apologize to that person. You have to`,
	"../Content/Memories/Apology.png"));
	
	memoryFragments.push(new MemoryFragment(32, "Monetary Greed",
	`Wondrous magical pieces of paper... with them, you could obtain anything you
wanted. You remember what they were called... "Money." You used to collect
those pieces of paper by any means necessary. A person's worth could be
measured in how many they held. They must still be somewhere in this world,
right?`,
	"../Content/Memories/MonetaryGreed.png"));
	
	memoryFragments.push(new MemoryFragment(33, "Death",
	`A life ended before your eyes. You don't remember how, but that life belonged
to someone dearly important to you. Now, you've died, too, but you're still
walking around. Could the same thing have happened to that person?`,
	"../Content/Memories/Death.png"));
	
	memoryFragments.push(new MemoryFragment(34, "Birthplace",
	`The sights of your hometown, the place where you were born, grew, and
played. There's no longer any such place, except in your mind. But you'd never
forget the scenery of that, your safest, most important place...`,
	"../Content/Memories/Birthplace.png"));
	
	memoryFragments.push(new MemoryFragment(35, "Wish",
	`You had an unfulfilled dream. Could that wish ever come true? It hurts your
heart to think of it now. You don't know why, there's certainly no excuse, but...
you can't even remember that wish.`,
	"../Content/Memories/Wish.png"));
	
	memoryFragments.push(new MemoryFragment(36, "Water",
	`You were immersed in pure, clean water. Were you swimming? Did you plunge
in to your death? Whichever the case, you remember the experience fondly,
and being soaked brings that happiness back.`,
	"../Content/Memories/Water.png"));
	
	memoryFragments.push(new MemoryFragment(37, "Knitting",
	`You were knitting something. Who was it for? What were you knitting? A
muffler? Gloves? A sweater...? Your fingers still remember how to knit. If you
had wool and needles, even now, you should be able to knit something…`,
	"../Content/Memories/Knitting.png"));
	
	memoryFragments.push(new MemoryFragment(38, "Gratitude",
	`There was a kind person you owe a debt of gratitude to. You never managed to
thank them like you should have... when you meet again, the first thing you'll
do is say those words. Oh, but... just who was that person? What sort of
person were they?`,
	"../Content/Memories/Gratitude.png"));
	
	memoryFragments.push(new MemoryFragment(39, "Fragrance of Soil",
	`You enjoyed caring for flowers. Transplanting them, fertilizing them, watering
them... Everything to do with gardening, really.You spent your life secluded with
the fragrance of soil and flowering plants... but the flowers you remember no
longer exist in this world.`,
	"../Content/Memories/FragranceOfSoil.png"));
	
	memoryFragments.push(new MemoryFragment(40, "God",
	`There was a being who you offered up prayers to. You believed that praying
would bring you happiness. Are you happy as you are now? If you're not
happy, perhaps you just didn't pray enough.`,
	"../Content/Memories/God.png"));
	
	memoryFragments.push(new MemoryFragment(41, "Classroom",
	`Blackboards, chairs, desks... everyone sat there, playing, talking, and studying.
You want to return to that room. You wonder where everyone else went... and where you are.`,
	"../Content/Memories/Classroom.png"));
	
	memoryFragments.push(new MemoryFragment(42, "Futon",
	`Dozing on a futon in the morning sun. All the happiness you needed was right
there, in your memories of a warm futon. But this world has long since woken
you up.`,
	"../Content/Memories/Futon.png"));
	
	memoryFragments.push(new MemoryFragment(43, "Dresser",
	`Your face reflected in the mirror, doing your best to be pretty. Using lipstick for
the first time, changing your hairstyles, applying makeup... Oh, but now you've
got the face of a corpse. Can this Doll's face ever be a substitute?`,
	"../Content/Memories/Dresser.png"));
	
	memoryFragments.push(new MemoryFragment(44, "Operating Table",
	`Tied to an operating table, your eyes wide open in fear. Your mouth gagged –
you can't even scream. Blood-drenched doctors draw ever closer. Shining
scalpels inch closer and closer to your skin, your skin–!`,
	"../Content/Memories/OperatingTable.png"));
	
	memoryFragments.push(new MemoryFragment(45, "Stalker",
	`Something was shadowing you. Strange little phenomena piled up over time,
and you'd often wake up horribly panicked. Who or what was following you,
you never knew, but... there, outside the window, outside..!`,
	"../Content/Memories/Stalker.png"));
	
	memoryFragments.push(new MemoryFragment(46, "Envy",
	`Envy. Envy. Why is everyone smiling, even though you were that unhappy?
They must be happy. Envy. Envy. More than all else, you're jealous of your own
self, back when you were still happy`,
	"../Content/Memories/Envy.png"));
	
	memoryFragments.push(new MemoryFragment(47, "Hikkikomori",
	`The world outside was too frightening. Everyone there could only hurt you. So
you locked yourself away in a little room. You never needed to leave.
Nevertheless... you were dragged out. Of course, the outside world is still too
scary. You just want to go home to your room.`,
	"../Content/Memories/Hikkikomori.png"));
	
	memoryFragments.push(new MemoryFragment(48, "Shower",
	`A nozzle that poured nice hot water over you. Humming while you bathed. The
scent of soap. You want to feel those things again. But when you try to bathe
now, parts of your body start to collapse, and all you can do is sigh and
reminisce.`,
	"../Content/Memories/Shower.png"));
	
	memoryFragments.push(new MemoryFragment(49, "Gunshot",
	`Out of nowhere, you heard an explosive sound. The inside of your chest felt
hot. You turned around right away, and you... don't remember what happened
next. Sounds like that are part of daily life now.`,
	"../Content/Memories/Gunshot.png"));
	
	memoryFragments.push(new MemoryFragment(50, "Library",
	`Books arranged in well-organized lines. Rows and rows of titles. Reading for
pleasure and learning for pleasure. The knowledge you found there was
everything to you. Shut tight in that quiet place, that's where you belong`,
	"../Content/Memories/Library.png"));
	
	memoryFragments.push(new MemoryFragment(51, "Mask",
	`You were a liar. Nobody truly trusted you, and you would never trust them. Can
you rely on any of your sisters today? You know it's absolutely necessary to
trust somebody, somewhere. Even so, you...`,
	"../Content/Memories/Mask.png"));
	
	memoryFragments.push(new MemoryFragment(52, "All Alone",
	`You were lonely all the time, and wished for friends. Somewhere in this whole
rotten world, there must be a friend you can confide in. There must be at least
one wonderful thing about this time.`,
	"../Content/Memories/AllAlone.png"));
	
	memoryFragments.push(new MemoryFragment(53, "Musical Performance",
	`You played an instrument every day. You don't have it anymore, and don't
remember the names of the songs you used to know. You can still hum some
of them, though, and if that instrument still existed, you're sure your fingers
would remember how to play.`,
	"../Content/Memories/MusicalPerformance.png"));
	
	memoryFragments.push(new MemoryFragment(54, "Snow",
	`Cold, white, airy fragments. You remember days when they fell from the sky
and covered everything in pure white. All that falls in this world is black ash.
Will there ever be a day when the snow falls again?`,
	"../Content/Memories/Snow.png"));
	
	memoryFragments.push(new MemoryFragment(55, "Sports",
	`You loved to move your body. Even in desperate conflicts, you may just be
happy for the chance to exercise. But this body never tires, feels pain, or grows
at all. How are you supposed to use it now?`,
	"../Content/Memories/Sports.png"));
	
	memoryFragments.push(new MemoryFragment(56, "Twin",
	`Your body was half of a whole. Another child who shared your face was born
on the same day as you. There was a mysterious bond between the two of you
- somehow, you always knew what the other was doing. That's why, even in
this world, you know the other half of you is out there somewhere.`,
	"../Content/Memories/Twin.png"));
	
	memoryFragments.push(new MemoryFragment(57, "Caged Bird",
	`A poor little bird, trapped behind bars. You let that caged bird go. Now, you're
just like that bird, imprisoned in a body that can never die. Someday, will
someone have pity and set you free?`,
	"../Content/Memories/CagedBird.png"));
	
	memoryFragments.push(new MemoryFragment(58, "Doll",
	`A cute Doll fell over and broke. Its limbs were ripped off, bent in bizarre
directions. What a pitiful memory. Oh, but when you think of it now... you're just
like that pathetic broken Doll, aren't you?`,
	"../Content/Memories/Doll.png"));
	
	memoryFragments.push(new MemoryFragment(59, "The View from the Window",
	`Memories of quietly gazing out through the window. What was it that you
watched, again? Whatever it was, it was always a beautiful view, and you
yearned to go outside into it. At the very least, you know it wasn't this place.`,
	"../Content/Memories/TheViewFromTheWindow.png"));
	
	memoryFragments.push(new MemoryFragment(60, "Fortune Telling",
	`You remember predictions of good fortune. Someone promised you good luck.
Those words told you that your luck would surely make you happy. That might
have been nothing but a childish game, but those precious words still support
you now.`,
	"../Content/Memories/FortuneTelling.png"));
	
	memoryFragments.push(new MemoryFragment(61, "Holding Hands",
	`Holding hands with somebody. You don't remember who that was - only the
sense of security it brought. If you could feel relief by touching that hand,
maybe you can find it again with one of your companions now. Perhaps you
can feel that warmth again, even in cold, clammy hands.`,
	"../Content/Memories/HoldingHands.png"));
	
	memoryFragments.push(new MemoryFragment(62, "Starvation",
	`A memory of constant, aching hunger in a time when you weren't able to eat.
Your stomach withered. You longed to bite, to chew.
IwanttoeatIwanttoeatIwanttoeat. That's right, back then... even your own hand
would do...`,
	"../Content/Memories/Starvation.png"));
	
	memoryFragments.push(new MemoryFragment(63, "Humiliation",
	`Recurring memories of being humiliated and disgraced. They shredded your
pride. You played along, but even so... All you remember clearly is the feeling
of your skin crawling and the sense of overwhelming anxiety. If you were
resurrected in this world, then surely, people like them were too.`,
	"../Content/Memories/Humiliation.png"));
	
	memoryFragments.push(new MemoryFragment(64, "Cute Clothes",
	`A cute outfit you wore in your memories. Your face is unclear - just those
clothes reflected in the mirror. One day, your heart was throbbing. You had to
display them to somebody... but to who? And where are those clothes now?`,
	"../Content/Memories/CuteClothes.png"));
	
	memoryFragments.push(new MemoryFragment(65, "Cooking",
	`You made meals. Cutting vegetables, stirring a pot, cracking eggs, stir-frying
meat. At first, you couldn't really make anything, but gradually, you became
much better.You can't remember the taste of any of those dishes, though. Was
what you made really that delicious?`,
	"../Content/Memories/Cooking.png"));
	
	memoryFragments.push(new MemoryFragment(66, "Bully",
	`When you got irritated, when you felt like it, you harassed weaker people.
That's right- you had friends. And you would all surround that weakling and
play with them. Kicking, pulling hair, putting things on their head... that sure
was fun.`,
	"../Content/Memories/Bully.png"));
	
	memoryFragments.push(new MemoryFragment(67, "Painting",
	`There was a picture you'd started to paint. Everyone praised you as you made
it. It was wonderful. Magnificent. But you've already forgotten just what kind of
painting it was...`,
	"../Content/Memories/Painting.png"));
	
	memoryFragments.push(new MemoryFragment(68, "Lust",
	`The flames of desire burning inside of you. Your entire body flushed with heat,
longing for the pleasures of love. It still aches in your mind, sometimes. Can
your dead body ever satisfy those desires?`,
	"../Content/Memories/Lust.png"));
	
	memoryFragments.push(new MemoryFragment(69, "The Living Dead",
	`There it was. It turned to pursue you. You ran, screaming, desperately
searching for an escape, but were torn to pieces alive by the hands of a living corpse. 
How pitiful. That's right. The thing from back then, the thing thatravaged your body so, 
was surely one of the Undead.`,
	"../Content/Memories/TheLivingDead.png"));
	
	memoryFragments.push(new MemoryFragment(70, "Dozing",
	`A cozy nap. You need to wake up, but don't want to get out from the futon. The
morning sun is leaking through the window. Birds are singing. Those were the
sensations of awakening from sleep. But not in this world...`,
	"../Content/Memories/Dozing.png"));
	
	memoryFragments.push(new MemoryFragment(71, "Conversation",
	`You remember a relaxed conversation with a friend. You talked about fashion,
the weather, the people you liked, disliked, and loved... Whenever you have a
good chat now, you remember that talk, and tears of envy start to fall.`,
	"../Content/Memories/Conversation.png"));
	
	memoryFragments.push(new MemoryFragment(72, "The Dead Rise",
	`You were grieving over someone's death. They died right before your eyes,
though you can't remember who it was. But then... their corpse started moving
again. You, who thought that that person revived, were attacked by their nails
and teeth.`,
	"../Content/Memories/TheDeadRise.png"));
	
	memoryFragments.push(new MemoryFragment(73, "Game",
	`Day in and day out, you played the same game. What sort of game? Why were
you playing it? You don't remember. All you remember is your unbroken gaze
at the screen, and how you regretted every time you left that room, even to
sleep.`,
	"../Content/Memories/Game.png"));
	
	memoryFragments.push(new MemoryFragment(74, "Sold",
	`Something was sold. What was it - blood, or hair, or organs? Or small buds or
petals? You sold it to somebody who was very happy with it. You have the
money for... what was it, again?`,
	"../Content/Memories/Sold.png"));
	
	memoryFragments.push(new MemoryFragment(75, "Study",
	`You have to study and get good grades. You have to show everyone that you
excel. If you don't... Well, what redeeming qualities would you have? You're not
sure. There must have been some, right?`,
	"../Content/Memories/Study.png"));
	
	memoryFragments.push(new MemoryFragment(76, "Happy Times",
	`Ah, happiness. Such fun, happy days. You were afraid that happiness might
end some day. It seems now like those times could have been nothing but a
pleasant dream. The memories inside you now are just like dreams. But... how
can you tell where they meet?`,
	"../Content/Memories/HappyTimes.png"));
	
	memoryFragments.push(new MemoryFragment(77, "Burial",
	`Heaps of earth are falling down around you. The soil covering your limbs is
cold, and then lukewarm, and even though you're conscious, the dirt keeps
coming down. You can't move your body, or even your face. You are plunging
beneath the earth.`,
	"../Content/Memories/Burial.png"));
	
	memoryFragments.push(new MemoryFragment(78, "Shopping",
	`Holding various things in your hands. Gazing into display windows. Checking
the contents of your purse, over and over. Shopping sure was fun. You wonder
who you were with, that time – who shared that happy day with you.`,
	"../Content/Memories/Shopping.png"));
	
	memoryFragments.push(new MemoryFragment(79, "Amusement Park",
	`Were you there with family? Friends? Someone you loved? The noisy
amusement park in that wonderful memory was like another world. Colorful
rides. Crowds of happy people. Where is that place now? Is there any trace of
it left?`,
	"../Content/Memories/AmusementPark.png"));
	
	memoryFragments.push(new MemoryFragment(80, "Tea Party",
	`Birds chirping, a beautiful garden, white chairs and a white table. Black tea
poured from a teapot. Sweet-smelling cookies. Enjoyable friendly chats. Sweet
memories from that time you lived as a young girl. It's those memories that
allow you to continue on as a young girl.`,
	"../Content/Memories/TeaParty.png"));
	
	memoryFragments.push(new MemoryFragment(81, "Secret",
	`You had a horrible, shameful secret, one you could never share with anybody,
one that must never be known. Oh, but... you've forgotten what it was. Is there
somebody else who still knows it?`,
	"../Content/Memories/Secret.png"));
	
	memoryFragments.push(new MemoryFragment(82, "Flowerbed",
	`You tended to a flowerbed – fertilized it, watered it, protected it from pests, so
that beautiful flowers could grow there, and you could watch them blossom.
You spent a long time working hard for that goal, but... the rest seems to have been 
washed from your memory. How is that flowerbed faring today?`,
	"../Content/Memories/Flowerbed.png"));
	
	memoryFragments.push(new MemoryFragment(83, "Ghost",
	`You remember an encounter with something inexplicable. Strange sounds. An
otherworldly light, casting bizarre shadows. It terrified you then... but now it just
seems like a pleasant fairy tale. After all, now you're the very same kind of
being you were frightened of.`,
	"../Content/Memories/Ghost.png"));
	
	memoryFragments.push(new MemoryFragment(84, "Refuge",
	`Was it an attic? A closet? A dresser? Wherever it was, you were creating your
own tiny world inside. You locked yourself away in that world just for you. Will
you need another refuge like that here?`,
	"../Content/Memories/Refuge.png"));
	
	memoryFragments.push(new MemoryFragment(85, "Separation",
	`There's somebody you must meet again – a treasured person you were
separated from. You don't remember them well, but you're certain you would if
you found them again. If only that person still exists, you won't forget them...`,
	"../Content/Memories/Separation.png"));
	
	memoryFragments.push(new MemoryFragment(86, "Story",
	`You remember writing a few of your own stories – were you a novelist or a
poet? Will you ever write another story? Perhaps even the story of your own
life? Maybe if you read that, you could recall everything about yourself.`,
	"../Content/Memories/Story.png"));
	
	memoryFragments.push(new MemoryFragment(87, "Big Brother",
	`You had a kind older brother. You always fawned on him. Admired him. To you,
he was more important than anyone else. The ideal person. And you can't
even remember his name. Even though you think you'd recognize him if you
met up with him...`,
	"../Content/Memories/BigBrother.png"));
	
	memoryFragments.push(new MemoryFragment(88, "Lost Child",
	`You were completely lost, all on your own. You didn't understand what was
happening – you just stumbled through that unfamiliar place, crying. All you
saw was darkness. On and on you wandered – nothing but strangers. Still, that
time, there was one kind person...`,
	"../Content/Memories/LostChild.png"));
	
	memoryFragments.push(new MemoryFragment(89, "Beach",
	`Crashing waves. An expanse of white sand. A sea that stretched out endlessly.
Now and then, fish leapt up from beneath its surface. That sea still exists in
your memories. It must be somewhere in the world. Is the ocean still as full of
life as it used to be?`,
	"../Content/Memories/Beach.png"));
	
	memoryFragments.push(new MemoryFragment(90, "War",
	`You ran, fleeing the war. You didn't want to accept reality, and you saw the
shell flying at you as a bird. You reached your hand out to that bird...`,
	"../Content/Memories/War.png"));
	
	memoryFragments.push(new MemoryFragment(91, "Handling a Corpse",
	`Someone important to you died. No, that's not right - they're only sleeping. You
just had to wake them up. After all, you woke up even though you were dead,
so they must still be sleeping out there somewhere.`,
	"../Content/Memories/HandlingACorpse.png"));
	
	memoryFragments.push(new MemoryFragment(92, "Medicine",
	`You've got to take it. You've got to take that medicine, or you'll break. You'll
break. Your body will fall apart. Your mind will shatter. Hurry. Hurry and take it
faster. You've got to find it now. If you don't, if, if, ififififififififif–`,
	"../Content/Memories/Medicine.png"));
	
	memoryFragments.push(new MemoryFragment(93, "Insects",
	`That's right. You hated them. You hated the insects that skittered or flitted
about. Your hatred for those creatures was overpowering. Those disgusting,
cursed creatures. So you spent your time in rooms where they could never
reach you. But now...`,
	"../Content/Memories/Insects.png"));
	
	memoryFragments.push(new MemoryFragment(94, "A Visit from Death",
	`You can't recall their name or face, but someone precious to you died. Their
death was incredibly painful, and the loss left a gaping hole in your heart. But
now that you've died and been resurrected, you're glad that person had a
chance to die properly, unlike you.`,
	"../Content/Memories/AVisitFromDeath.png"));
	
	memoryFragments.push(new MemoryFragment(95, "Lie",
	`You told a lie. What lie, you can't recall... but you tricked somebody, and you're
sure that they died because of it. Is that person still deceived now? If you could
only meet them, if you could tell the truth…`,
	"../Content/Memories/Lie.png"));
	
	memoryFragments.push(new MemoryFragment(96, "The World After Death",
	`You died, and at that moment, you saw a world different from this one. You're
certain of it. Then something dragged you forcibly back here. But if a person
dies in this world, you're sure they'll go to that reality.`,
	"../Content/Memories/TheWorldAfterDeath.png"));
	
	memoryFragments.push(new MemoryFragment(97, "Angel of Slaughter",
	`You were trained to kill people. Without any questions, you murdered countless
others, and were praised only for your work. You now live in a world where you
can never die. A world where you can keep killing forever. Perhaps if you keep
killing, more and more and more, you'll be praised again.`,
	"../Content/Memories/AngelOfSlaughter.png"));
	
	memoryFragments.push(new MemoryFragment(98, "Necromancer",
	`You remember a few sparse details about "them," the person who made you
this way. Do you feel grateful, I wonder? Even though you're clearly just a toy
to them?`,
	"../Content/Memories/Necromancer.png"));
	
	memoryFragments.push(new MemoryFragment(99, "The Last War",
	`You have a bystander's knowledge of humanity's last days. From what
perspective? However faintly... you remember those terrible events. Just how
foolish and tragic were they?`,
	"../Content/Memories/TheLastWar.png"));
	
}

///
