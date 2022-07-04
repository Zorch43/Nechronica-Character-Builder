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
const fragments = [];
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
	this.cost = cost;//skill AP cost
	this.timing = timings[timing];//what timing the skill uses
	this.usable = timing > 1;//whether to display the 'used' checkbox
	this.rangeMin = rangeMin;//skill minimum range
	this.rangeMax = rangeMax;//skill maximum range
	this.special = false;//whether this skill can be taken by impure class combos.
	this.restricted = false;//whether this skill can be purchased without owning  skill's class
	this.clockwork = false;//whether to grant a t3 enhancement
	this.extremeMutation = false;//whether to grant a t3 mutation
	this.effectText = effectText;//skill effect text
	this.flavorText = flavorText;//skill flavor text
	this.flavorImage = flavorImage;//skill image
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
	this.cost = cost;//part AP cost
	this.timing = timings[timing];//what timing the part uses
	this.usable = timing > 1;//whether to display the 'used' checkbox
	this.rangeMin = rangeMin;//part range minimum
	this.rangeMax = rangeMax;//part range maximum
	this.effectText = effectText;//part effect text
	this.flavorText = flavorText;//part flavor text
	this.flavorImage = flavorImage;//part image
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
function MemoryFragment(id, name, content, flavorImage){
	this.id = id;//fragment id
	this.name = name;//fragment name
	this.content = content;//content of memory
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
}

//position templates
function createPositions(){
	dollPositions.add(new DollPosition(0, "Alice"
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
	
	dollPositions.add(new DollPosition(1, "Automaton"
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
	
	dollPostions.add(new DollPosition(2, "Court",
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
	
	dollPositions.add(new DollPosition(3, "Holic",
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
	
	dollPositions.add(new DollPosition(4, "Junk",
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
	
	dollPositions.add(new DollPosition(5, "Sorority",
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
	dollClasses.add(new DollClass(6, "Baroque", 0, 2, 0,
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
	
	dollClasses.add(new DollClass(7, "Gothic", 0, 1, 1,
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
	
	dollClasses.add(new DollClass(8, "Requiem", 2, 0, 0,
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
	
	dollClasses.add(new DollClass(9, "Romanesque", 0, 0, 2,
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
	
	dollClasses.add(new DollClass(10, "Stacy", 1, 1, 0,
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
	
	dollClasses.add(new DollClass(11, "Thanatos", 1, 0, 1,
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
	
	dollClasses.add(new DollClass(12, "Psychedelic", 0, 0, 1,
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
	//DollSkill(id, classId, name, cost, timing, rangeMin, rangeMax, 
	//effectText (Array), flavorText, flavorImage)
	//cost:-1 = 'none'
	//cost:-2 = 'see effect'
	//rangeMin:-1 = 'self'
	//rangeMin:-2 = 'see effect'
	
	//Alice skills
	dollSkills.add(new DollSkill(0, 0, "Angel of Eden", 2, 1, -1, -1, 
	["Regardless of your current place on the Battle Map, you are instantly"
	+ "	transported to Eden.",
	"This is not considered to be Movement."], 
	"You are the inhabitants of paradise, the place where you are is the paradise.", 
	"../Content/Skills/AngelOfEden.png"));
	
	dollSkills.add(new DollSkill(1, 0, "Healing", -1, 0, -2, -2, 
	["Other Sisters' Conversation Checks toward you all gain +1 to their rolls."], 
	"A girl's smile is a glow in the dark. You have the power to shatter"
	+ "	the mind filled with madness.", 
	"../Content/Skills/Healing.png"));
	
	dollSkills.add(new DollSkill(2, 0, "Maiden", 0, 2, 0, 0, 
	["Make a Conversation Check with one of your sisters."], 
	"Your slight words and gestures are not those of a killing machine."
	+ "	Will they be a refreshing agent for a rough heart?", 
	"../Content/Skills/Maiden.png"));
	
	dollSkills.add(new DollSkill(3, 0, "Prayer", 0, 1, -2, -2, 
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
	
	dollSkills.add(new DollSkill(4, 0, "Princess", 0, 4, 0, 1, 
	["This Skill can only be used when you take damage.",
	"Your target sister	receives -1 to the Cost of their next Action"
	+ "	(minimum 0.)"], 
	"When sisters are injured, they cannot stay fair. They know that you"
	+ "	are to be protected.",
	"../Content/Skills/Princess.png"));
	
	dollSkills.add(new DollSkill(5, 0, "Undefeatable Heart", -1, 0, -1, -1, 
	["When you make a Conversation Check, you may add +1 to the die roll."], 
	"What you have is a strong heart, no desire to lose to despair, as"
	+ "	long as you can believe it, hope will not disappear.",
	"../Content/Skills/UndefeatableHeart.png"));
	
	dollSkills.add(new DollSkill(6, 0, "Warm Smile", -1, 0, -2, -2, 
	["When you roll a Critical Success on a Conversation Check, the target"
	+ "	may remove a Madness Point from her Fetter towards you.",
	"This still counts towards the Fragments of Memory limit on the"
	+ "	maximum number of Madness Points removable during a Phase."], 
	"Your gestures, your facial expressions are sparkling. That light"
	+ "	shines brightly within the soul of the person who talks with you."
	+ "	They will cast away their heavily sickened feelings.",
	"../Content/Skills/WarmSmile.png"));
	
	//Automaton skills
	dollSkills.add(new DollSkill(7, 1, "Cover", -2, 0, 0, 1, 
	["Once per Turn, when one of your Sisters declares an Action Maneuver,"
	+ "	if you both agree, the cost of the declared Maneuver can be"
	+ "	reduced to 0 in exchange for reducing your Action value by 1."], 
	"If you do not mistake the timing, a small amount of help will have a"
	+ "	great effect. You are not fighting alone.",
	"../Content/Skills/Cover.png"));
	
	dollSkills.add(new DollSkill(8, 1, "Foes are Foes", -1, 0, -1, -1, 
	["If a Spirit Attack is made against you, the Attack Check must have a"
	+ "	result of 7 or higher to hit."], 
	"You will have compassion later. You will someday apologize. But for"
	+ "	now, everyone will be broken.",
	"../Content/Skills/FoesAreFoes.png"));
	
	dollSkills.add(new DollSkill(9, 1, "Heart of Ice", -1, 0, -1, -1, 
	["You gain +1 to the die roll on Madness Checks."], 
	"Calm down. Be cool. Believe in yourself. Believe in a friend. Do not"
	+ "	doubt. Do not be afraid.",
	"../Content/Skills/HeartOfIce.png"));
	
	dollSkills.add(new DollSkill(10, 1, "I am a Doll", -1, 0, -1, -1, 
	["During the Battle Phase, only for one Turn, ignore all effects of"
	+ "	the states of Madness."], 
	"That body is a Doll. Your heart is a Doll. The Doll does not feel"
	+ "	pain. Your heart...",
	"../Content/Skills/IAmADoll.png"));
	
	dollSkills.add(new DollSkill(11, 1, "Prisoner in Limbo", -1, 0, -1, -1, 
	["If you are in Limbo at the end of the turn during the Battle Phase,"
	+ "	even if your AP has reached a negative value, you may ignore that"
	+ "	and recover to your maximum AP at the start of the next turn."], 
	"Hell is right for you. Because enemies can understand you more than"
	+ "	allies. Limbo is where the Doll belongs. Drawn to Hell, long for"
	+ "	paradise even if it is torn apart.",
	"../Content/Skills/PrisonerInLimbo.png"));
	
	dollSkills.add(new DollSkill(12, 1, "Reckless", -2, 0, -1, -1, 
	["As the Cost of this Skill, damage one of your own Basic Parts of your choice.",
	"You may reroll the die for an Action Check, Attack Check, or"
	+ "	Dismemberment Check."], 
	"The results earned by abusing your body. You are already dead, so"
	+ "	you can do it.",
	"../Content/Skills/Reckless.png"));
	
	dollSkills.add(new DollSkill(13, 1, "Tears of Blood", -2, 0, -1, -1, 
	["When you are hit by a Spirit Attack, you may ignore the Madness"
	+ "	Points incurred.", 
	"For each Madness Point ignored, one of your Basic Parts"
	+ "	of your choice is damaged.", 
	"If you have no Basic Parts remaining, this Skill is no longer effective."], 
	"All right, nothing is painful. You will not bother anything."
	+ "	No matter how much of you breaks in the fight.",
	"../Content/Skills/TearsOfBlood.png"));

	//court skills
	dollSkills.add(new DollSkill(14, 2, "Advice", 0, 3, 0, 2, 
	["Support 1 or Hinder 1."], 
	"Small words and signs will still negate large damage. It will be a"
	+ "	small but big chance.",
	"../Content/Skills/Advice.png"));
	
	dollSkills.add(new DollSkill(15, 2, "Anticipate", 0, 2, 0, 3, 
	["Target \"Rapid\", \"Damage\", or \"Check\" Maneuver.", 
	"Cancel the effects of one."], 
	"It is important to know about the enemy that appeared. It also helps"
	+ "	tactics to instantly see the enemy's war potential and offensive"
	+ "	power.",
	"../Content/Skills/Anticipate.png"));
	
	dollSkills.add(new DollSkill(16, 2, "Composure", -1, 0, -1, -1, 
	["You can gain +1 to the die roll on Action Checks."], 
	"Calm behavior, there are things that make things move a lot. Your"
	+ "	calm view should be an important starting point.",
	"../Content/Skills/Composure.png"));
	
	dollSkills.add(new DollSkill(17, 2, "Foresight", 1, 1, 0, 1, 
	["The Cost of the target's next Action decreases by 1 (minimum 0.)"], 
	"By knowing the movements of enemies and ally in advance, you can act"
	+ "	with the minimum necessary movement.",
	"../Content/Skills/Foresight.png"));
	
	dollSkills.add(new DollSkill(18, 2, "Restraint", -2, 0, -1, -1, 
	["When you fail (or critically fail) a Madness Check, you may change"
	+ "	the result to a Success.", 
	"As the cost of this Skill, damage one of your Basic Parts of your"
	+ "	choice."], 
	"Loss of, distortion of mind. Let's cheat. With loss of body and"
	+ "	distortion of the body. Pain is proof of sanity...even such a"
	+ "	distorted philosophy is useful for regulating you now.",
	"../Content/Skills/Restraint.png"));
	
	dollSkills.add(new DollSkill(19, 2, "Scapegoat", -2, 0, -1, -1, 
	["When one of your Sisters fails (or critically fails) a Madness Check,"
	+ "	you may change the result to a Success.", 
	"As the cost of this Skill, add a Madness Point to one of your"
	+ "	Fetters of your choice."], 
	"You are sensitive to look at the world. Not only in battle, but in"
	+ "	human relationships. You know what you should do. Brutally. Firmly.",
	"../Content/Skills/Scapegoat.png"));
	
	dollSkills.add(new DollSkill(20, 2, "Tactics", -1, 0, -2, -2, 
	["At the beginning of the Battle Phase, you may observe the arrangement"
	+ "	of enemies and move a Doll of your choice to any Area other than"
	+ "	Tartarus."], 
	"Strategy based on position and traction. Everyone is driven by the"
	+ "	promise of victory for a flexible team.",
	"../Content/Skills/Tactics.png"));
	
	//holic skills
	dollSkills.add(new DollSkill(21, 3, "Carnage", -2, 3, -1, -1, 
	["As the Cost of this Skill, add a Madness Point to a Fetter of your"
	+ "	choice.", 
	"Support 3."], 
	"No, it's not like this, it should be like this. Desire, obsession,"
	+ "	thoughts. They can distort physical laws.",
	"../Content/Skills/Carnage.png"));
	
	dollSkills.add(new DollSkill(22, 3, "Drawn to Tartarus", -1, 0, -1, -1, 
	["During the Battle Phase, when you declare a Movement Maneuver that"
	+ "	targets yourself in the direction towards Tartarus, the Cost of"
	+ "	the Maneuver is decreased by -1 (minimum 0.)"], 
	"Your soul searches for darkness, for that is where you are.",
	"../Content/Skills/DrawnToTartarus.png"));
	
	dollSkills.add(new DollSkill(23, 3, "Fall Into Hades", -2, 1, -1, -1, 
	["As the Cost of this Skill, add a Madness Point to a Fetter of your"
	+ "choice.",
	"You are instantly transported from your current position on the map"
	+ "	to Hades. This is not considered a Movement Maneuver."], 
	"The place where the broken girl was born. It must surely be Hell.",
	"../Content/Skills/FallIntoHades.png"));
	
	dollSkills.add(new DollSkill(24, 3, "Fury", -2, 4, -1, -1, 
	["You may only use this Skill when you deal damage.",
	"As the Cost of this Skill, add a Madness Point to a Fetter of your"
	+ " choice.",
	"Add +2 to the damage dealt."], 
	"Because of you. Unforgivable. Unforgivable. Absolutely not allowed."
	+ "	You will break it apart. You will shatter it.",
	"../Content/Skills/Fury.png"));
	
	dollSkills.add(new DollSkill(25, 3, "Insane Swiftness", -1, 0, -1, -1, 
	["When one of your Fetters is in a state of Madness during the Battle"
	+ "	Phase, you gain a +1 to the die roll on Attack Checks."], 
	"Madness. Makes. You. Strong.",
	"../Content/Skills/InsaneSwiftness.png"));
	
	dollSkills.add(new DollSkill(26, 3, "Impulse", -2, 0, -1, -1, 
	["Once per Turn, when you declare a Maneuver, instead of paying the"
	+ "	normal cost for the Maneuver, you may instead add a Madness Point"
	+ "	to a Fetter of your choice as the cost."], 
	"Still it can move. It is not over yet. Another stroke, another step:"
	+ "	Show yourself moving while breaking yourself.",
	"../Content/Skills/Impulse.png"));
	
	dollSkills.add(new DollSkill(27, 3, "Limits of Madness", 0, 4, -1, -1, 
	["You may remove a Madness Point from a Fetter of your choice."
	+ "	However, if any of your Sisters are in the same Area as you, they"
	+ "	must add a Madness Point to a Fetter of their choice."], 
	"You will not suppress your madness. Do not mind the staring eyes"
	+ "	around you. Spit it out! They do not have to approach it if they"
	+ "	do not wish to see it!",
	"../Content/Skills/LimitsOfMadness.png"));

	//junk skills
	dollSkills.add(new DollSkill(28, 4, "Damaged Goods", -1, 0, -1, -1, 
	["During the Battle Phase, at the end of the Turn and when Treasure"
	+ "	is damaged, you do not add Madness Points."], 
	"You are half broken. Because it is broken, it will not break any"
	+ "	more. Days of fighting? You wonder what was before that...",
	"../Content/Skills/DamagedGoods.png"));
	
	dollSkills.add(new DollSkill(29, 4, "Defender of Eden", -1, 0, -2, -2, 
	["When you are in Eden or Elysium, all Maneuvers used by enemies"
	+ "	which are in Eden have their Action Point cost increased by 1.",
	"This Skill remains in effect even if you are completely Annihilated."], 
	"These defiled men cannot be allowed to trample this place."
	+ "	You will not let them.",
	"../Content/Skills/DefenderOfEden.png"));
	
	dollSkills.add(new DollSkill(30, 4, "Dweller in hades", -1, 0, -1, -1, 
	["During the Battle Phase, if you are in Hades, you gain +1 to the"
	+ "	die roll on Attack Checks."], 
	"Hell is right for you. Because enemies can understand you better"
	+ "	than allies.",
	"../Content/Skills/DwellerInHades.png"));
	
	dollSkills.add(new DollSkill(31, 4, "Even Unto Tartarus", -1, 0, -1, -1, 
	["During the Battle Phase, if you are in Tartarus, all your Action"
	+ "	Maneuver’s Costs are decreased by 1 (to a minimum of 1)."], 
	"Your pain will not stop even if you all fall into madness."
	+ "	You will be their strength!",
	"../Content/Skills/EvenUntoTartarus.png"));
	
	dollSkills.add(new DollSkill(32, 4, "Follow", 0, 2, -1, -1, 
	["This Skill can only be used when one of your Sisters uses a"
	+ "	Movement Maneuver.",
	"Move 1."], 
	"Behavior that has been repeated many times. It's fixed in your brain"
	+ "	by now. Instinct.",
	"../Content/Skills/Follow.png"));
	
	dollSkills.add(new DollSkill(33, 4, "Lame Beast", -1, 0, -1, -1, 
	["For every Hit Location of yours in which all Parts have been"
	+ "	damaged, you gain +1 to Attack Checks you make."], 
	"What is broken is nothing but a shackle. The harvest for"
	+ "	replacements is now.",
	"../Content/Skills/LameBeast.png"));
	
	dollSkills.add(new DollSkill(34, 4, "Struggle", -1, 0, -1, -1, 
	["When you voluntarily take a Madness Point in order to reroll a die,"
	+ "	you gain +1 to the die roll."], 
	"You will never fail. Even this body has given up, but you absolutely"
	+ "	will not give up until the end!",
	"../Content/Skills/Struggle.png"));
	
	//sorority skills
	dollSkills.add(new DollSkill(35, 5, "Gathering in Elysium", 2, 2, -2, -2, 
	["Regardless of their current place on the Battle Map, all your sisters,"
	+ "	including you, are instantly transported to Elysium.",
	"This is not considered a Movement Maneuver."], 
	"The girl's gatherings can not be messy to anyone. It can not be"
	+ "	disturbed. Even in battle.",
	"../Content/Skills/GatheringInElysium.png"));
	
	dollSkills.add(new DollSkill(36, 5, "Grace", -1, 0, -2, -2, 
	["When you voluntarily take a Madness Point in order to reroll a die,"
	+ "	one sister of your choice (excluding you) may make a Conversation"
	+ "	Check with you as the target."], 
	"Your standing behavior is beautiful and perfect, the girls who see"
	+ "	it will make your feelings clearer.",
	"../Content/Skills/Grace.png"));
	
	dollSkills.add(new DollSkill(37, 5, "Order", 2, 3, -2, -2, 
	["All your sisters upon the Battle Map, including you, may make a"
	+ "	single Attack Maneuver of their choice with Rapid Timing."], 
	"You teach it to everyone. Timing is matched with the meaning of your"
	+ "	shout and attacks fly all at once. Do not allow enemies to fight back.",
	"../Content/Skills/Order.png"));
	
	dollSkills.add(new DollSkill(38, 5, "Secret Whisper", -1, 0, -2, -2, 
	["At the beginning and end of the Battle Phase, one sister of your"
	+ "	choice (excluding you) may make a Conversation Check with you as"
	+ "	the target."], 
	"Secret conversation of girls. A small topic. A little negativity."
	+ "	A little friendship. But that is what makes bonds bloom.",
	"../Content/Skills/SecretWhisper.png"));
	
	dollSkills.add(new DollSkill(39, 5, "Self-Control", -1, 0, -1, -1, 
	["If you are afflicted with Madness, you gain +1 to the die roll on"
	+ "	Conversation and Madness Checks."], 
	"You are responsible. Everyone who will not be allowed to escape,"
	+ "	for example, will take your hand and stand up.",
	"../Content/Skills/Self-Control.png"));
	
	dollSkills.add(new DollSkill(40, 5, "Sister\'s Kiss", 1, 2, 0, 0, 
	["This Skill is only usable against Savants.",
	"The target Savant loses 4 Action Points."], 
	"A distorted girl standing in front of you may also be a sister."
	+ "	Let me cuddle and let me down the raised fist…",
	"../Content/Skills/SistersKiss.png"));
	
	dollSkills.add(new DollSkill(41, 5, "Tough Love", -1, 0, -2, -2, 
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
	dollSkills.add(dollSkill);
	
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
	dollSkills.add(dollSkill);
	
	dollSkill = new DollSkill(44, 6, "Extreme mutation", -1, 5, -1, -1, 
	["When you learn this skill, you may acquire an additional Tier 3"
	+ "	Mutation.",
	"This is not limited by your Reinforcement Points, and you may"
	+ "	regenerate it as normal."], 
	"The irregular curse that you have been put in is beyond the limits"
	+ "	of the body. It is a miracle that you keep your mind.",
	"../Content/Skills/ExtremeMutation.png");
	dollSkill.extremeMutation = true;
	dollSkills.add(dollSkill);
	
	dollSkills.add(new DollSkill(45, 6, "Instrument of Evil", -1, 0, -1, -1, 
	["When you declare an Attack Maneuver, you may declare the use of" 
	+ " this Skill to increase the damage by 1.", 
	"However, the \"Dismember\", \"Explosive\", \"Chain Attack\" and" 
	+ " \"Area Attack\" properties are all lost."], 
	"Imitate and reinforce your body with the original weapon attack" 
	+ " organs and express it as a more violent weapon. The power of" 
	+ " destruction would have increased, but its awkwardness is not an" 
	+ " essential ratio.",
	"../Content/Skills/InstrumentOfEvil.png"));
	
	dollSkills.add(new DollSkill(46, 6, "Karmic Corpe", -1, 0, -1, -1, 
	["At the end of the Battle Phase, you may regenerate two Parts of" 
	+ " your choice."], 
	"It was cut off repeatedly, shot, destroyed and destroyed. It is" 
	+ " engraved and you wonder what has been done since it broke down a" 
	+ " little bit now",
	"../Content/Skills/KarmicCorpse.png"));
	
	dollSkills.add(new DollSkill(47, 6, "Mad Demon", -1, 0, -1, -1, 
	["When you make an Attack Check for an Unarmed Attack Maneuver, you" 
	+ " may add +1 to the die roll."], 
	"Your body is dominated by its own combat instinct, the world" 
	+ " fighting is dyed incrimson, fighting with nails, tearing with" 
	+ " fangs.",
	"../Content/Skills/MadDemon.png"));
	
	dollSkills.add(new DollSkill(48, 6, "Regeneration", 1, 4, -1, -1, 
	["Defend 1. You may use this Skill any number of times per Turn," 
	+ " but only once per Attack."], 
	"Your body will return to its original state by itself. Any attack" 
	+ " will only slow the movement.",
	"../Content/Skills/Regeneration.png"));
	
	dollSkills.add(new DollSkill(49, 6, "Super Strength", -1, 0, -1, -1, 
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
	dollSkills.add(dollSkill);
	
	dollSkills.add(new DollSkill(51, 7, "Delight in Corruption", 0, 4, -1, -1, 
	["You may use a \"Rapid\", \"Check\" or \"Damage\" maneuver that you" 
	+ " have already used one more time."], 
	"When someone is hurt, including even yourself, you do not think you" 
	+ " will gain a sense of amnestic uplifting.",
	"../Content/Skills/DelightInCorruption.png"));
	
	dollSkills.add(new DollSkill(52, 7, "Feast of Flesh", 1, 1, -1, -1, 
	["Regenerate a Basic Part of yours that was damaged."], 
	"You eat dead flesh. Ingested meat will be self contained. That is a" 
	+ " sight that many dead people will feel awkwardness about.",
	"../Content/Skills/FeastOfFlesh.png"));
	
	dollSkills.add(new DollSkill(53, 7, "Lick Jowls", 0, 2, 0, 1, 
	["Hinder Move 1."], 
	"Awkward appetite eyes, tongue crawling the lips, dripping saliva." 
	+ " Any deceased person has to stop his or her feet moving from that" 
	+ " aspect.",
	"../Content/Skills/LickJowls.png"));
	
	dollSkills.add(new DollSkill(54, 7, "Predator", 2, 4, 0, 0, 
	["Stagger all enemies in the same Area as you."], 
	"The horrors who eat the dead who the enemies instinctively fear." 
	+ " Even deadly weapons without ego can not stop fearing you.",
	"../Content/Skills/Predator.png"));
	
	dollSkills.add(new DollSkill(55, 7, "Rip and Tear", -1, 0, -1, -1, 
	["The effect of your Jaws and Fists changes to " 
	+ "\"Unarmed Attack 1 + Dismember.\""], 
	"Your body specialized in predation is a body to capture the prey," 
	+ " to rip it, to eat it. Not to strengthen but have a deadly effect.",
	"../Content/Skills/RipAndTear.png"));
	
	dollSkills.add(new DollSkill(56, 7, "Ultimate Predator", -1, 0, 0, 0, 
	["When you succeed with a Range 0 Unarmed Attack, if the number of" 
	+ " Parts the target has remaining is no greater than  the result of" 
	+ " the Attack Check minus five, all of the target's Parts are" 
	+ " instantly broken (however, Legions are not affected.)"], 
	"Regardless of size, eating that can crush the swallowed body inside." 
	+ " Sometimes digestion can not catch up, but it is not a big deal.",
	"../Content/Skills/UltimatePredator.png"));
	
	dollSkills.add(new DollSkill(57, 7, "Vile Repast", -1, 0, -2, -2, 
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
	dollSkills.add(dollSkill);
	
	dollSkills.add(new DollSkill(59, 8, "Concentration", 2, 2, -1, -1, 
	["Until the end of the Turn, all your Attack Checks gain +1 to the" 
	+ " die roll."], 
	"Sharpen the senses and aim for the opponent's weakness. Aimed shots" 
	+ " will probably set off enemies.",
	"../Content/Skills/Concentration.png"));
	
	dollSkills.add(new DollSkill(60, 8, "Gun God", -1, 0, -1, -1, 
	["When you make an Attack Check for a Ranged Attack Maneuver, you" 
	+ " may add +1 to the die roll."], 
	"Your eyes and gun are connected. It is different from the shambling" 
	+ " zombie soldiers. It surely penetrates what you want.",
	"../Content/Skills/GunGod.png"));
	
	dollSkills.add(new DollSkill(61, 8, "Gun Kata", 2, 3, 0, 1, 
	["Hinder 2. Afterwards, you may make a Ranged Attack 1 against the" 
	+ " same target."], 
	"Combat fighting strategy using guns. The basics are two pistols, but" 
	+ " the dead can use this fighting technique for every gun battle.",
	"../Content/Skills/GunKata.png"));
	
	dollSkills.add(new DollSkill(62, 8, "Hand of Death", 0, 2, -1, -1, 
	["You may use an Attack Maneuver of your choice as if its Timing were" 
	+ " \"Rapid\"."], 
	"Your blow is always the prince of death. The enemies who shoot and" 
	+ " show at exquisite times are always after you.",
	"../Content/Skills/HandOfDeath.png"));
	
	dollSkills.add(new DollSkill(63, 8, "Lullaby", -1, 0, -1, -1, 
	["During the Battle Phase, you may take a penalty of -1 to the" 
	+ " Attack Check of a Ranged Attack. If you do, the Cost of the" 
	+ " Maneuver is decreased by 1 (minimum 1.)"], 
	"It will not stop. Especially in the battlefield. There is no song if" 
	+ " the voice is interrupted. Continuously, heavy, let the guns sing.",
	"../Content/Skills/Lullaby.png"));
	
	dollSkills.add(new DollSkill(64, 8, "Rear Guard\'s Pride", -1, 0, -1, -1, 
	["When you roll a Critical Failure on a Ranged or Blast Attack,"
	+ " treat it as if it were a normal failure."], 
	"Shoot enemies from behind a friend. Because you believe in them," 
	+ " you can concentrate on the spirit of the Rear Guard. You cannot" 
	+ " disapprove such trust with just a mistake.",
	"../Content/Skills/RearGuardsPride.png"));
	
	dollSkills.add(new DollSkill(65, 8, "Trusted Compainion", 1, 2, -1, -1, 
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
	dollSkills.add(dollSkill);
	
	dollSkills.add(new DollSkill(67, 9, "Caress", 0, 2, 0, 0, 
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
	dollSkills.add(dollSkill);
	
	dollSkills.add(new DollSkill(69, 9, "Dance of Death", 0, 3, -1, -1, 
	["You may reroll the die for an Attack Check."], 
	"Because it is a body that enables precise movement, shoot down the" 
	+ " place where it can be done. Ensure weaknesses of enemies with" 
	+ " fine applications.",
	"../Content/Skills/DanceOfDeath.png"));
	
	dollSkills.add(new DollSkill(70, 9, "Deranged Gears", -1, 0, -2, -2, 
	["All enemies that roll a Critical Failure within the same Area as" 
	+ " you in have their damage of the resulting attack increased by 1."], 
	"Unbelievable dance is an appropriate comedy. You can not forgive" 
	+ " halfway abominations. You have to change it to the clown of clown" 
	+ " that can be laughed at least.",
	"../Content/Skills/DerangedGears.png"));
	
	dollSkills.add(new DollSkill(71, 9, "One\'s Many Charms", -1, 0, -1, -1, 
	["The cost of your Basic Parts "Forearm" and "Foot" decreases by 1" 
	+ " (to a minimum of 0.)"], 
	"Your limbs dance swiftly. If you are ready to dance together, you" 
	+ " will have a polite ball in the middle of battle.",
	"../Content/Skills/OnesManyCharms.png"));
	
	dollSkills.add(new DollSkill(72, 9, "Tuning", 0, 2, 0, 0, 
	["Choose a damaged Part on the target. Until the end of the Turn, the" 
	+ " target may use Maneuvers associated with that damaged Part as if" 
	+ " it were not damaged. (However, this does not recover Maneuvers" 
	+ " that were used up or are not repeatable.)"], 
	"It is comforting to be danced even if it does not clear. You know" 
	+ " the art of forcibly moving a broken one.",
	"../Content/Skills/Tuning.png"));
	
	dollSkills.add(new DollSkill(73, 9, "Waltz", 1, 2, -1, -1, 
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
	dollSkills.add(dollSkill);
	
	dollSkills.add(new DollSkill(75, 10, "Corpse Style", -2, 2, 0, 1, 
	["As the Cost of this Skill, break one of your Basic Parts.",
	"Support 2 or Hinder 2."], 
	"Grab the opponent with his own arms. If you are dead and throw your" 
	+ " jaw to bite people from afar, it's a natural tactic.",
	"../Content/Skills/CorpseStyle.png"));
	
	dollSkills.add(new DollSkill(76, 10, "Made to be Broken", -1, 0, -1, -1, 
	["Add +1 to all die rolls for Attack Checks and Dismemberment" 
	+ " Checks. However, at the end of the Battle Phase and each Turn of" 
	+ " combat, you must damage one of your own Parts of your choice.",
	"This cannot be manipulated by Maneuvers that affect Costs."], 
	"You are excellent, but a clear failed work. The body will collapse" 
	+ " as battle rages on.",
	"../Content/Skills/MadeToBeBroken.png"));
	
	dollSkills.add(new DollSkill(77, 10, "Meat Shield", 0, 4, 0, 1, 
	["If the damage received by the target is caused by an Attack" 
	+ " Maneuver, you may negate any number and combination of effects" 
	+ " other than damage of your choosing of an attack (Area, Chain," 
	+ " Dismemberment, Explosive, Stagger, and more specific effects are" 
	+ " included)."], 
	"Instantly use yourself as a shield and counter the aftermath. Is it" 
	+ " because of your preparation or is it a dull sense of despair?",
	"../Content/Skills/MeatShield.png"));
	
	dollSkills.add(new DollSkill(78, 10, "Organ Donor", -1, 0, -2, -2, 
	["At the end of the Battle Phase, you and all of your Sisters can" 
	+ " regenerate their damaged \"Entrails\" parts."], 
	"You do not want to imagine what kind of body this is. Your body" 
	+ " will regenerate only the organs in a short time. Even if it" 
	+ " hollowed out, baked or eaten.",
	"../Content/Skills/OrganDonor.png"));
	
	dollSkills.add(new DollSkill(79, 10, "Protect", 0, 4, 0, 1, 
	["When the target takes damage, you may take that damage in her" 
	+ " place.",
	"You may use this Skill any number of times per Turn.",
	"However, this cannot be used against the damage caused by the" 
	+ " \"Area\" attack effect."], 
	"You are always a shield for everyone without hesitation. You can" 
	+ " defend your sisters.",
	"../Content/Skills/Protect.png"));
	
	dollSkills.add(new DollSkill(80, 10, "Remain Dead", 0, 2, -1, -1, 
	["Regenerate a Basic Part of yours that was damaged."], 
	"Wherever there is a lost part, by reconnecting it is restored." 
	+ " Your body will not stop being you. Surely, forever.",
	"../Content/Skills/RemainDead.png"));
	
	dollSkills.add(new DollSkill(81, 10, "Unfazed", -1, 0, -1, -1, 
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
	dollSkills.add(dollSkill);
	
	dollSkills.add(new DollSkill(83, 11, "Calamity", 2, 4, -1, -1, 
	["You may only use this Skill when you deal damage with a Melee" 
	+ " Attack.",
	"Add the \"Area Attack\" property to this damage. You do not take" 
	+ " damage from this \"Area Attack.\""], 
	"Your existence is a tornado of death. Weapons and madness raging in" 
	+ " places where you cut and you'll be drawn into a whirlpool of" 
	+ " destruction.",
	"../Content/Skills/Calamity.png"));
	
	dollSkills.add(new DollSkill(84, 11, "Dead on Target", -1, 0, -1, -1, 
	["During the Battle Phase, if you roll 6 on an Attack Check, you may" 
	+ " choose which Location to deal damage to."], 
	"The blow that always gives a fatal injury to the enemy. It is an" 
	+ " inevitability rather than a coincidence.",
	"../Content/Skills/DeadOnTarget.png"));
	
	dollSkills.add(new DollSkill(85, 11, "Drama of Death", -1, 0, -1, -1, 
	["During the Battle Phase, when you and another Sister target an" 
	+ " enemy with Attack Maneuvers, you may add +1 to the die roll for" 
	+ " your Attack Check and +1 to your Damage."], 
	"Even with breathing stopped, bodies that observe timing and" 
	+ " maximize effect with simultaneous attacks. It is meaningful" 
	+ " to breathe together.",
	"../Content/Skills/DramaOfDeath.png"));
	
	dollSkills.add(new DollSkill(86, 11, "Instantaneous", -1, 0, -1, -1, 
	["During the Battle Phase, when you declare an Attack Maneuver, no" 
	+ " one other than you can perform Maneuvers at the 'Check' and" 
	+ " 'Rapid' timings in response."], 
	"Ultra high speed blow. It is impossible for anyone to prevent it.",
	"../Content/Skills/Instantaneous.png"));
	
	dollSkills.add(new DollSkill(87, 11, "God of Death", -1, 0, -1, -1, 
	["When making an Attack Check with a Melee Attack Maneuver, you may" 
	+ " add +1 to the die roll."], 
	"Sprint and hit. Your arms, eyes and brain were scrutinized and" 
	+ " polished to bring about death and destruction.",
	"../Content/Skills/GodOfDeath.png"));
	
	dollSkills.add(new DollSkill(88, 11, "Judgment", -1, 3, -1, -1, 
	["Use this Skill only during your own Melee Attack Maneuver\'s" 
	+ " Attack Check. The die result of the Attack Check becomes 6," 
	+ " and no effect can change this result."], 
	"There is a blow that cannot be stopped. Liberated from bad luck, it" 
	+ " will bring an ending.",
	"../Content/Skills/Judgment.png"));
	
	dollSkills.add(new DollSkill(89, 11, "Quenn of the Underworld", -1, 0, -1, -1, 
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
	dollSkills.add(dollSkill);
	
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
	dollSkills.add(dollSkill);
	
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
	dollSkills.add(dollSkill);
	
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
	dollSkills.add(dollSkill);
	
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
	dollSkills.add(dollSkill);
	
	dollSkill = new DollSkill(95, 12, "Throne of the Void", -1, 0, -1, -1, 
	["You may ignore Hinder and Hinder Move effects originating from" 
	+ " the same Area as you are in."], 
	"Slightly, but your body is always floating, making sure that your" 
	+ " body does not get caught out in movements, such as undocumented" 
	+ " handouts.",
	"../Content/Skills/ThroneOfTheVoid.png");
	dollSkill.restricted = true;
	dollSkills.add(dollSkill);
	
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
	dollSkills.add(dollSkill);
	
	dollSkill = new DollSkill(97, 12, "WillToRefuse", 2, 4, 0, 1, 
	["You may use this skill even if completely Annihilated.",
	"Defend 1.",
	"You may use this Skill any number of times per Turn, but only once" 
	+ " per Attack."], 
	"You can bounce off the unexpected future that produces results just by" 
	+ " thinking. Do not let the blade ease your important things to bullets.",
	"../Content/Skills/WillToRefuse.png");
	dollSkill.restricted = true;
	dollSkills.add(dollSkill);
	
}