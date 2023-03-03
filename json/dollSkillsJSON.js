const dollSkillsJSON = 
`
[
	{
		"id": 0,
		"classId": 0,
		"name": "Angel of Eden",
		"cost": 2,
		"timing": "Action",
		"usable": false,
		"range": "Self",
		"effectText": [
			"Regardless of your current place on the Battle Map, you are instantly transported to Eden.",
			"This is not considered to be Movement."
		],
		"flavorText": "You are the inhabitant of paradise, the place where you are is the paradise.",
		"flavorImage": "AngelOfEden.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 1,
		"classId": 0,
		"name": "Healing",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"Other Sisters\' Conversation Checks toward you all gain +1 to their rolls."
		],
		"flavorText": "A girl\'s smile is a glow in the dark. You have the power to shatter the mind filled with madness.",
		"flavorImage": "Healing.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 2,
		"classId": 0,
		"name": "Maiden",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": 0,
		"effectText": [
			"Make a Conversation Check with one of your sisters."
		],
		"flavorText": "Your slight words and gestures are not those of a killing machine. Will they be a refreshing agent for a rough heart?",
		"flavorImage": "Maiden.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 3,
		"classId": 0,
		"name": "Prayer",
		"cost": 0,
		"timing": "Action",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"This Maneuver takes effect 5 Count after the time that it is announced.",
			"As long as you do not gain any Madness Points or have any Parts damaged during this time period, all of your Sisters may remove a Madness Point from a Fetter of their choice.",
			"This Maneuver may be used only once per Turn, and only if the remaining Count is greater than 5."
		],
		"flavorText": "No matter if they come true or not, your prayers will definitely reach everyone. Your wish will surely come true. No one will be unhappy. Find the way for everyone to be saved.",
		"flavorImage": "Prayer.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 4,
		"classId": 0,
		"name": "Princess",
		"cost": 0,
		"timing": "Damage",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"This Skill can only be used when you take damage.",
			"Your target sister receives -1 to the Cost of their next Action (minimum 0.)"
		],
		"flavorText": "When sisters are injured, they cannot stay fair. They know that you are to be protected.",
		"flavorImage": "Princess.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 5,
		"classId": 0,
		"name": "Undefeatable Heart",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you make a Conversation Check, you may add +1 to the die roll."
		],
		"flavorText": "What you have is a strong heart, no desire to lose to despair, as long as you can believe it, hope will not disappear.",
		"flavorImage": "UndefeatableHeart.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 6,
		"classId": 0,
		"name": "Warm Smile",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"When you roll a Critical Success on a Conversation Check, the target may remove a Madness Point from her Fetter towards you.",
			"This still counts towards the Fragments of Memory limit on the maximum number of Madness Points removable during a Phase."
		],
		"flavorText": "Your gestures, your facial expressions are sparkling. That light shines brightly within the soul of the person who talks with you. They will cast away their heavily sickened feelings.",
		"flavorImage": "WarmSmile.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 7,
		"classId": 1,
		"name": "Cover",
		"cost": "See Effect",
		"timing": "Auto",
		"usable": false,
		"range": "0-1",
		"effectText": [
			"Once per Turn, when one of your Sisters declares an Action Maneuver, if you both agree, the cost of the declared Maneuver can be reduced to 0 in exchange for reducing your Action value by 1."
		],
		"flavorText": "If you do not mistake the timing, a small amount of help will have a great effect. You are not fighting alone.",
		"flavorImage": "Cover.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 8,
		"classId": 1,
		"name": "Foes are Foes",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"If a Spirit Attack is made against you, the Attack Check must have a result of 7 or higher to hit."
		],
		"flavorText": "You will have compassion later. You will someday apologize. But for now, everyone will be broken.",
		"flavorImage": "FoesAreFoes.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 9,
		"classId": 1,
		"name": "Heart of Ice",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"You gain +1 to the die roll on Madness Checks."
		],
		"flavorText": "Calm down. Be cool. Believe in yourself. Believe in a friend. Do not doubt. Do not be afraid.",
		"flavorImage": "HeartOfIce.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 10,
		"classId": 1,
		"name": "I am a Doll",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, only for one Turn, ignore all effects of the states of Madness."
		],
		"flavorText": "That body is a Doll. Your heart is a Doll. The Doll does not feel pain. Your heart...",
		"flavorImage": "IAmADoll.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 11,
		"classId": 1,
		"name": "Prisoner in Limbo",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"If you are in Limbo at the end of the turn during the Battle Phase, even if your AP has reached a negative value, you may ignore that and recover to your maximum AP at the start of the next turn."
		],
		"flavorText": "Hell is right for you. Because enemies can understand you more than allies. Limbo is where the Doll belongs. Drawn to Hell, long for paradise even if it is torn apart.",
		"flavorImage": "PrisonerInLimbo.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 12,
		"classId": 1,
		"name": "Reckless",
		"cost": "See Effect",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"As the Cost of this Skill, damage one of your own Basic Parts of your choice.",
			"You may reroll the die for an Action Check, Attack Check, or Dismemberment Check."
		],
		"flavorText": "The results earned by abusing your body. You are already dead, so you can do it.",
		"flavorImage": "Reckless.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 13,
		"classId": 1,
		"name": "Tears of Blood",
		"cost": "See Effect",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you are hit by a Spirit Attack, you may ignore the Madness Points incurred.",
			"For each Madness Point ignored, one of your Basic Parts of your choice is damaged.",
			"If you have no Basic Parts remaining, this Skill is no longer effective."
		],
		"flavorText": "All right, nothing is painful. You will not bother anything. No matter how much of you breaks in the fight.",
		"flavorImage": "TearsOfBlood.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 14,
		"classId": 2,
		"name": "Advice",
		"cost": 0,
		"timing": "Check",
		"usable": true,
		"range": "0-2",
		"effectText": [
			"Support 1 or Hinder 1."
		],
		"flavorText": "Small words and signs will still negate large damage. It will be a small but big chance.",
		"flavorImage": "Advice.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 15,
		"classId": 2,
		"name": "Anticipate",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": "0-3",
		"effectText": [
			"Target \'Rapid\', \'Damage\', or \'Check\' Maneuver.",
			"Cancel the effects of one."
		],
		"flavorText": "It is important to know about the enemy that appeared. It also helps tactics to instantly see the enemy\'s war potential and offensive power.",
		"flavorImage": "Anticipate.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 16,
		"classId": 2,
		"name": "Composure",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"You can gain +1 to the die roll on Action Checks."
		],
		"flavorText": "Calm behavior, there are things that make things move a lot. Your calm view should be an important starting point.",
		"flavorImage": "Composure.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 17,
		"classId": 2,
		"name": "Foresight",
		"cost": 1,
		"timing": "Action",
		"usable": false,
		"range": "0-1",
		"effectText": [
			"The Cost of the target\'s next Action decreases by 1 (minimum 0.)"
		],
		"flavorText": "By knowing the movements of enemies and ally in advance, you can act with the minimum necessary movement.",
		"flavorImage": "Foresight.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 18,
		"classId": 2,
		"name": "Restraint",
		"cost": "See Effect",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you fail (or critically fail) a Madness Check, you may change the result to a Success.",
			"As the cost of this Skill, damage one of your Basic Parts of your choice."
		],
		"flavorText": "Loss of, distortion of mind. Let\'s cheat. With loss of body and distortion of the body. Pain is proof of sanity...even such a distorted philosophy is useful for regulating you now.",
		"flavorImage": "Restraint.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 19,
		"classId": 2,
		"name": "Scapegoat",
		"cost": "See Effect",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When one of your Sisters fails (or critically fails) a Madness Check, you may change the result to a Success.",
			"As the cost of this Skill, add a Madness Point to one of your Fetters of your choice."
		],
		"flavorText": "You are sensitive to look at the world. Not only in battle, but in human relationships. You know what you should do. Brutally. Firmly.",
		"flavorImage": "Scapegoat.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 20,
		"classId": 2,
		"name": "Tactics",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"At the beginning of the Battle Phase, you may observe the arrangement of enemies and move a Doll of your choice to any Area other than Tartarus."
		],
		"flavorText": "Strategy based on position and traction. Everyone is driven by the promise of victory for a flexible team.",
		"flavorImage": "Tactics.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 21,
		"classId": 3,
		"name": "Carnage",
		"cost": "See Effect",
		"timing": "Check",
		"usable": true,
		"range": "Self",
		"effectText": [
			"As the Cost of this Skill, add a Madness Point to a Fetter of your choice.",
			"Support 3."
		],
		"flavorText": "No, it\'s not like this, it should be like this. Desire, obsession, thoughts. They can distort physical laws.",
		"flavorImage": "Carnage.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 22,
		"classId": 3,
		"name": "Drawn to Tartarus",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, when you declare a Movement Maneuver that targets yourself in the direction towards Tartarus, the Cost of the Maneuver is decreased by 1 (minimum 0.)"
		],
		"flavorText": "Your soul searches for darkness, for that is where you are.",
		"flavorImage": "DrawnToTartarus.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 23,
		"classId": 3,
		"name": "Fall Into Hades",
		"cost": "See Effect",
		"timing": "Action",
		"usable": false,
		"range": "Self",
		"effectText": [
			"As the Cost of this Skill, add a Madness Point to a Fetter of yourchoice.",
			"You are instantly transported from your current position on the map to Hades. This is not considered a Movement Maneuver."
		],
		"flavorText": "The place where the broken girl was born. It must surely be Hell.",
		"flavorImage": "FallIntoHades.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 24,
		"classId": 3,
		"name": "Fury",
		"cost": "See Effect",
		"timing": "Damage",
		"usable": true,
		"range": "Self",
		"effectText": [
			"You may only use this Skill when you deal damage.",
			"As the Cost of this Skill, add a Madness Point to a Fetter of your choice.",
			"Add +2 to the damage dealt."
		],
		"flavorText": "Because of you. Unforgivable. Unforgivable. Absolutely not allowed. You will break it apart. You will shatter it.",
		"flavorImage": "Fury.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 25,
		"classId": 3,
		"name": "Insane Swiftness",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When one of your Fetters is in a state of Madness during the Battle Phase, you gain a +1 to the die roll on Attack Checks."
		],
		"flavorText": "Madness. Makes. You. Strong.",
		"flavorImage": "InsaneSwiftness.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 26,
		"classId": 3,
		"name": "Impulse",
		"cost": "See Effect",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"Once per Turn, when you declare a Maneuver, instead of paying the normal cost for the Maneuver, you may instead add a Madness Point to a Fetter of your choice as the cost."
		],
		"flavorText": "Still it can move. It is not over yet. Another stroke, another step: Show yourself moving while breaking yourself.",
		"flavorImage": "Impulse.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 27,
		"classId": 3,
		"name": "Limits of Madness",
		"cost": 0,
		"timing": "Damage",
		"usable": true,
		"range": "Self",
		"effectText": [
			"You may remove a Madness Point from a Fetter of your choice. However, if any of your Sisters are in the same Area as you, they must add a Madness Point to a Fetter of their choice."
		],
		"flavorText": "You will not suppress your madness. Do not mind the staring eyes around you. Spit it out! They do not have to approach it if they do not wish to see it!",
		"flavorImage": "LimitsOfMadness.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 28,
		"classId": 4,
		"name": "Damaged Goods",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, at the end of the Turn and when Treasure is damaged, you do not add Madness Points."
		],
		"flavorText": "You are half broken. Because it is broken, it will not break any more. Days of fighting? You wonder what was before that...",
		"flavorImage": "DamagedGoods.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 29,
		"classId": 4,
		"name": "Defender of Eden",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"When you are in Eden or Elysium, all Maneuvers used by enemies which are in Eden have their Action Point cost increased by 1.",
			"This Skill remains in effect even if you are completely Annihilated."
		],
		"flavorText": "These defiled men cannot be allowed to trample this place. You will not let them.",
		"flavorImage": "DefenderOfEden.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 30,
		"classId": 4,
		"name": "Dweller in Hades",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, if you are in Hades, you gain +1 to the die roll on Attack Checks."
		],
		"flavorText": "Hell is right for you. Because enemies can understand you better than allies.",
		"flavorImage": "DwellerInHades.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 31,
		"classId": 4,
		"name": "Even Unto Tartarus",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, if you are in Tartarus, all your Action Maneuver’s Costs are decreased by 1 (to a minimum of 1)."
		],
		"flavorText": "Your pain will not stop even if you all fall into madness. You will be their strength!",
		"flavorImage": "EvenUntoTartarus.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 32,
		"classId": 4,
		"name": "Follow",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": "Self",
		"effectText": [
			"This Skill can only be used when one of your Sisters uses a Movement Maneuver.",
			"Move 1."
		],
		"flavorText": "Behavior that has been repeated many times. It\'s fixed in your brain by now. Instinct.",
		"flavorImage": "Follow.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 33,
		"classId": 4,
		"name": "Lame Beast",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"For every Hit Location of yours in which all Parts have been damaged, you gain +1 to Attack Checks you make."
		],
		"flavorText": "What is broken is nothing but a shackle. The harvest for replacements is now.",
		"flavorImage": "LameBeast.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 34,
		"classId": 4,
		"name": "Struggle",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you voluntarily take a Madness Point in order to reroll a die, you gain +1 to the die roll."
		],
		"flavorText": "You will never fail. Even this body has given up, but you absolutely will not give up until the end!",
		"flavorImage": "Struggle.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 35,
		"classId": 5,
		"name": "Gathering in Elysium",
		"cost": 2,
		"timing": "Rapid",
		"usable": true,
		"range": "See Effect",
		"effectText": [
			"Regardless of their current place on the Battle Map, all your sisters, including you, are instantly transported to Elysium.",
			"This is not considered a Movement Maneuver."
		],
		"flavorText": "The girl\'s gatherings can not be messy to anyone. It can not be disturbed. Even in battle.",
		"flavorImage": "GatheringInElysium.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 36,
		"classId": 5,
		"name": "Grace",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"When you voluntarily take a Madness Point in order to reroll a die, one sister of your choice (excluding you) may make a Conversation Check with you as the target."
		],
		"flavorText": "Your standing behavior is beautiful and perfect, the girls who see it will make your feelings clearer.",
		"flavorImage": "Grace.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 37,
		"classId": 5,
		"name": "Order",
		"cost": 2,
		"timing": "Check",
		"usable": true,
		"range": "See Effect",
		"effectText": [
			"All your sisters upon the Battle Map, including you, may make a single Attack Maneuver of their choice with Rapid Timing."
		],
		"flavorText": "You teach it to everyone. Timing is matched with the meaning of your shout and attacks fly all at once. Do not allow enemies to fight back.",
		"flavorImage": "Order.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 38,
		"classId": 5,
		"name": "Secret Whisper",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"At the beginning and end of the Battle Phase, one sister of your choice (excluding you) may make a Conversation Check with you as the target."
		],
		"flavorText": "Secret conversation of girls. A small topic. A little negativity. A little friendship. But that is what makes bonds bloom.",
		"flavorImage": "SecretWhisper.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 39,
		"classId": 5,
		"name": "Self-Control",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"If you are afflicted with Madness, you gain +1 to the die roll on Conversation and Madness Checks."
		],
		"flavorText": "You are responsible. Everyone who will not be allowed to escape, for example, will take your hand and stand up.",
		"flavorImage": "Self-Control.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 40,
		"classId": 5,
		"name": "Sister\'s Kiss",
		"cost": 1,
		"timing": "Rapid",
		"usable": true,
		"range": 0,
		"effectText": [
			"This Skill is only usable against Savants.",
			"The target Savant loses 4 Action Points."
		],
		"flavorText": "A distorted girl standing in front of you may also be a sister. Let me cuddle and let me down the raised fist…",
		"flavorImage": "SistersKiss.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 41,
		"classId": 5,
		"name": "Tough Love",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"When one of your Sisters has a Part damaged by an Attack Maneuver you used, she may remove a Madness Point from a Fetter she has which is in a state of Madness."
		],
		"flavorText": "If they have a weak heart, they will break. You have to become a demon. A scar is better than ruin.",
		"flavorImage": "ToughLove.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 42,
		"classId": 6,
		"name": "Mutated being",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, when you are hit with an Attack that did not roll a Critical Success, you may choose which Location it hits (unless you have lost all Parts from that Location.)"
		],
		"flavorText": "That body no longer has the shape of a person. Therefore it will not accept attacks against people.",
		"flavorImage": "MutatedBeing.png",
		"special": true,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 43,
		"classId": 6,
		"name": "Crystallization",
		"cost": 1,
		"timing": "Damage",
		"usable": false,
		"range": "Self",
		"effectText": [
			"You may ignore any \'Dismember\', \'Explosive\', and \'Move\' properties associated with an attack you\'ve been hit by",
			"This Maneuver can be used any number of times per Turn."
		],
		"flavorText": "Unusual body fluid flowing in a heteromorphic body. If it touches the outside air it will crystallize and harden. It will be cut and it will absorb the explosion. Indeed the body of a monster, but it is a useful body",
		"flavorImage": "Crystallization.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 44,
		"classId": 6,
		"name": "Extreme mutation",
		"cost": "None",
		"timing": "See Effect",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you learn this skill, you may acquire an additional Tier 3 Mutation.",
			"This is not limited by your Reinforcement Points, and you may regenerate it as normal."
		],
		"flavorText": "The irregular curse that you have been put in is beyond the limits of the body. It is a miracle that you keep your mind.",
		"flavorImage": "ExtremeMutation.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": true
	},
	{
		"id": 45,
		"classId": 6,
		"name": "Instrument of Evil",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you declare an Attack Maneuver, you may declare the use of this Skill to increase the damage by 1.",
			"However, the \'Dismember\', \'Explosive\', \'Chain Attack\' and \'Area Attack\' properties are all lost."
		],
		"flavorText": "Imitate and reinforce your body with the original weapon attack organs and express it as a more violent weapon. The power of destruction would have increased, but its awkwardness is not an essential ratio.",
		"flavorImage": "InstrumentOfEvil.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 46,
		"classId": 6,
		"name": "Karmic Corpse",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"At the end of the Battle Phase, you may regenerate two Parts of your choice."
		],
		"flavorText": "It was cut off repeatedly, shot, destroyed and destroyed. It is engraved and you wonder what has been done since it broke down a little bit now",
		"flavorImage": "KarmicCorpse.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 47,
		"classId": 6,
		"name": "Mad Demon",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you make an Attack Check for an Unarmed Attack Maneuver, you may add +1 to the die roll."
		],
		"flavorText": "Your body is dominated by its own combat instinct, the world fighting is dyed incrimson, fighting with nails, tearing with fangs.",
		"flavorImage": "MadDemon.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 48,
		"classId": 6,
		"name": "Regeneration",
		"cost": 1,
		"timing": "Damage",
		"usable": true,
		"range": "Self",
		"effectText": [
			"Defend 1. You may use this Skill any number of times per Turn, but only once per Attack."
		],
		"flavorText": "Your body will return to its original state by itself. Any attack will only slow the movement.",
		"flavorImage": "Regeneration.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 49,
		"classId": 6,
		"name": "Super Strength",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"Your Unarmed and Melee Attacks deal +1 damage."
		],
		"flavorText": "The muscular strength of the deceased which is unlikely to be human, it is further enhanced and raised. A monster put in a narrow arm is always waiting for the time of liberation.",
		"flavorImage": "SuperStrength.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 50,
		"classId": 7,
		"name": "Voracity",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": "Self",
		"effectText": [
			"Regenerate a Reinforcement Part of yours that was damaged."
		],
		"flavorText": "Eating corpses, you will recover even an unusual feature, even from the original body.",
		"flavorImage": "Voracity.png",
		"special": true,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 51,
		"classId": 7,
		"name": "Delight in Corruption",
		"cost": 0,
		"timing": "Damage",
		"usable": true,
		"range": "Self",
		"effectText": [
			"You may use a \'Rapid\', \'Check\' or \'Damage\' maneuver that you have already used one more time."
		],
		"flavorText": "When someone is hurt, including even yourself, you do not think you will gain a sense of amnestic uplifting.",
		"flavorImage": "DelightInCorruption.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 52,
		"classId": 7,
		"name": "Feast of Flesh",
		"cost": 1,
		"timing": "Action",
		"usable": false,
		"range": "Self",
		"effectText": [
			"Regenerate a Basic Part of yours that was damaged."
		],
		"flavorText": "You eat dead flesh. Ingested meat will be self contained. That is a sight that many dead people will feel awkwardness about.",
		"flavorImage": "FeastOfFlesh.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 53,
		"classId": 7,
		"name": "Lick Jowls",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"Hinder Move 1."
		],
		"flavorText": "Awkward appetite eyes, tongue crawling the lips, dripping saliva. Any deceased person has to stop his or her feet moving from that aspect.",
		"flavorImage": "LickJowls.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 54,
		"classId": 7,
		"name": "Predator",
		"cost": 2,
		"timing": "Damage",
		"usable": true,
		"range": 0,
		"effectText": [
			"Stagger all enemies in the same Area as you."
		],
		"flavorText": "The horrors who eat the dead who the enemies instinctively fear. Even deadly weapons without ego can not stop fearing you.",
		"flavorImage": "Predator.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 55,
		"classId": 7,
		"name": "Rip and Tear",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"The effect of your Jaws and Fists changes to \'Unarmed Attack 1 + Dismember.\'"
		],
		"flavorText": "Your body specialized in predation is a body to capture the prey, to rip it, to eat it. Not to strengthen but have a deadly effect.",
		"flavorImage": "RipAndTear.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 56,
		"classId": 7,
		"name": "Ultimate Predator",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": 0,
		"effectText": [
			"When you succeed with a Range 0 Unarmed Attack, if the number of Parts the target has remaining is no greater than  the result of the Attack Check minus five, all of the target\'s Parts are instantly broken (however, Legions are not affected.)"
		],
		"flavorText": "Regardless of size, eating that can crush the swallowed body inside. Sometimes digestion can not catch up, but it is not a big deal.",
		"flavorImage": "UltimatePredator.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 57,
		"classId": 7,
		"name": "Vile Repast",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"When you cause the target of your Attack to make a Dismemberment Check, they receive a penalty of -2 to the die roll."
		],
		"flavorText": "Your blade is a knife that cuts meals. Your claws are tearing. Your teeth are eating. None escape.",
		"flavorImage": "VileRepast.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 58,
		"classId": 8,
		"name": "Magic Bullet",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, when you make a Ranged Attack Maneuver, its maximum range increases by +1."
		],
		"flavorText": "The dead are not suitable for shooting guns, but you are special made.To the enemies far away from usual, the bullet pierces.",
		"flavorImage": "MagicBullet.png",
		"special": true,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 59,
		"classId": 8,
		"name": "Concentration",
		"cost": 2,
		"timing": "Rapid",
		"usable": true,
		"range": "Self",
		"effectText": [
			"Until the end of the Turn, all your Attack Checks gain +1 to the die roll."
		],
		"flavorText": "Sharpen the senses and aim for the opponent\'s weakness. Aimed shots will probably set off enemies.",
		"flavorImage": "Concentration.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 60,
		"classId": 8,
		"name": "Gun God",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you make an Attack Check for a Ranged Attack Maneuver, you may add +1 to the die roll."
		],
		"flavorText": "Your eyes and gun are connected. It is different from the shambling zombie soldiers. It surely penetrates what you want.",
		"flavorImage": "GunGod.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 61,
		"classId": 8,
		"name": "Gun Kata",
		"cost": 2,
		"timing": "Check",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"Hinder 2. Afterwards, you may make a Ranged Attack 1 against the same target."
		],
		"flavorText": "Combat fighting strategy using guns. The basics are two pistols, but the dead can use this fighting technique for every gun battle.",
		"flavorImage": "GunKata.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 62,
		"classId": 8,
		"name": "Hand of Death",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": "Self",
		"effectText": [
			"You may use an Attack Maneuver of your choice as if its Timing were \'Rapid\'."
		],
		"flavorText": "Your blow is always the prince of death. The enemies who shoot and show at exquisite times are always after you.",
		"flavorImage": "HandOfDeath.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 63,
		"classId": 8,
		"name": "Lullaby",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, you may take a penalty of -1 to the Attack Check of a Ranged Attack. If you do, the Cost of the Maneuver is decreased by 1 (minimum 1.)"
		],
		"flavorText": "It will not stop. Especially in the battlefield. There is no song if the voice is interrupted. Continuously, heavy, let the guns sing.",
		"flavorImage": "Lullaby.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 64,
		"classId": 8,
		"name": "Rear Guard\'s Pride",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you roll a Critical Failure on a Ranged or Blast Attack, treat it as if it were a normal failure."
		],
		"flavorText": "Shoot enemies from behind a friend. Because you believe in them, you can concentrate on the spirit of the Rear Guard. You cannot disapprove such trust with just a mistake.",
		"flavorImage": "RearGuardsPride.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 65,
		"classId": 8,
		"name": "Trusted Companion",
		"cost": 1,
		"timing": "Rapid",
		"usable": true,
		"range": "Self",
		"effectText": [
			"You may regenerate a single damaged Part that can perform a Melee  Attack or Ranged Attack Maneuver."
		],
		"flavorText": "There is a weapon that you believe in. No matter how it breaks or bends, it can not betray you, it will respond to you.",
		"flavorImage": "TrustedCompanion.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 66,
		"classId": 9,
		"name": "Battle Maiden",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"Your Maximum Action Points increase by +2."
		],
		"flavorText": "Your dance is as fast as the dead. The surroundings are all so late that this blur can barely be seen.",
		"flavorImage": "BattleMaiden.png",
		"special": true,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 67,
		"classId": 9,
		"name": "Caress",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": 0,
		"effectText": [
			"Stagger."
		],
		"flavorText": "Tickling of sensuality. If maiden\'s fingers crawl, the flesh of the dead will also be crankless and will tremble from the pleasure of the moment.",
		"flavorImage": "Caress.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 68,
		"classId": 9,
		"name": "Clockwork",
		"cost": "None",
		"timing": "See Effect",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When you learn this skill, you may acquire an additional Tier 3 Enhancement.",
			"This is not limited by your Reinforcement Points, and you may regenerate it as normal."
		],
		"flavorText": "The body is made up of gears and screws. There is little blood and meat to move you.",
		"flavorImage": "Clockwork.png",
		"special": false,
		"restricted": false,
		"clockwork": true,
		"extremeMutation": false
	},
	{
		"id": 69,
		"classId": 9,
		"name": "Dance of Death",
		"cost": 0,
		"timing": "Check",
		"usable": true,
		"range": "Self",
		"effectText": [
			"You may reroll the die for an Attack Check."
		],
		"flavorText": "Because it is a body that enables precise movement, shoot down the place where it can be done. Ensure weaknesses of enemies with fine applications.",
		"flavorImage": "DanceOfDeath.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 70,
		"classId": 9,
		"name": "Deranged Gears",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"All enemies that roll a Critical Failure within the same Area as you in have their damage of the resulting attack increased by 1."
		],
		"flavorText": "Unbelievable dance is an appropriate comedy. You can not forgive halfway abominations. You have to change it to the clown of clowns that can be laughed at least.",
		"flavorImage": "DerangedGears.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 71,
		"classId": 9,
		"name": "One\'s Many Charms",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"The cost of your Basic Parts \'Forearm\' and \'Foot\' decreases by 1 (to a minimum of 0.)"
		],
		"flavorText": "Your limbs dance swiftly. If you are ready to dance together, you will have a polite ball in the middle of battle.",
		"flavorImage": "OnesManyCharms.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 72,
		"classId": 9,
		"name": "Tuning",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": 0,
		"effectText": [
			"Choose a damaged Part on the target. Until the end of the Turn, the target may use Maneuvers associated with that damaged Part as if it were not damaged. (However, this does not recover Maneuvers that were used up or are not repeatable.)"
		],
		"flavorText": "It is comforting to be danced even if it does not clear. You know the art of forcibly moving a broken one.",
		"flavorImage": "Tuning.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 73,
		"classId": 9,
		"name": "Waltz",
		"cost": 1,
		"timing": "Rapid",
		"usable": true,
		"range": "Self",
		"effectText": [
			"Until the end of the Turn, every Attack which targets you receives a penalty of -1 to the Attack Check (if it is an Area Attack, the penalty only applies to hitting you.)",
			"If this Skill is used multiple times during the same Turn, the penalty does not increase."
		],
		"flavorText": "Dance princess on the battlefield. The dancing flying attacks that are driven into you will be forgotten. It is difficult to stop dancing figures.",
		"flavorImage": "Waltz.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 74,
		"classId": 10,
		"name": "Crawling Flesh",
		"cost": 0,
		"timing": "Check",
		"usable": true,
		"range": "0-2",
		"effectText": [
			"You may only use this Skill while you aredamaged.",
			"Hinder 3."
		],
		"flavorText": "Cut off, blown away, even torn off pieces of meat. They will wiggle at your will and stop enemies.",
		"flavorImage": "CrawlingFlesh.png",
		"special": true,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 75,
		"classId": 10,
		"name": "Corpse Style",
		"cost": "See Effect",
		"timing": "Rapid",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"As the Cost of this Skill, break one of your Basic Parts.",
			"Support 2 or Hinder 2."
		],
		"flavorText": "Grab the opponent with his own arms. If you are dead and throw your jaw to bite people from afar, it\'s a natural tactic.",
		"flavorImage": "CorpseStyle.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 76,
		"classId": 10,
		"name": "Made to be Broken",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"Add +1 to all die rolls for Attack Checks and Dismemberment Checks. However, at the end of the Battle Phase and each Turn of combat, you must damage one of your own Parts of your choice.",
			"This cannot be manipulated by Maneuvers that affect Costs."
		],
		"flavorText": "You are excellent, but a clear failed work. The body will collapse as battle rages on.",
		"flavorImage": "MadeToBeBroken.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 77,
		"classId": 10,
		"name": "Meat Shield",
		"cost": 0,
		"timing": "Damage",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"If the damage received by the target is caused by an Attack Maneuver, you may negate any number and combination of effects other than damage of your choosing of an attack (Area, Chain, Dismemberment, Explosive, Stagger, and more specific effects are included)."
		],
		"flavorText": "Instantly use yourself as a shield and counter the aftermath. Is it because of your preparation or is it a dull sense of despair?",
		"flavorImage": "MeatShield.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 78,
		"classId": 10,
		"name": "Organ Donor",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "See Effect",
		"effectText": [
			"At the end of the Battle Phase, you and all of your Sisters can regenerate their damaged \'Entrails\' parts."
		],
		"flavorText": "You do not want to imagine what kind of body this is. Your body will regenerate only the organs in a short time. Even if it hollowed out, baked or eaten.",
		"flavorImage": "OrganDonor.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 79,
		"classId": 10,
		"name": "Protect",
		"cost": 0,
		"timing": "Damage",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"When the target takes damage, you may take that damage in her place.",
			"You may use this Skill any number of times per Turn.",
			"However, this cannot be used against the damage caused by the \'Area\' attack effect."
		],
		"flavorText": "You are always a shield for everyone without hesitation. You can defend your sisters.",
		"flavorImage": "Protect.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 80,
		"classId": 10,
		"name": "Remain Dead",
		"cost": 0,
		"timing": "Rapid",
		"usable": true,
		"range": "Self",
		"effectText": [
			"Regenerate a Basic Part of yours that was damaged."
		],
		"flavorText": "Wherever there is a lost part, by reconnecting it is restored. Your body will not stop being you. Surely, forever.",
		"flavorImage": "RemainDead.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 81,
		"classId": 10,
		"name": "Unfazed",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, if your Parts are damaged, you may continue to use Maneuvers they enable until the end of the Turn."
		],
		"flavorText": "Your body keeps on functioning even if it becomes disjointed. This does not hinder it from killing in battle.",
		"flavorImage": "Unfazed.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 82,
		"classId": 11,
		"name": "Unlimited Destruction",
		"cost": 0,
		"timing": "Damage",
		"usable": true,
		"range": "Self",
		"effectText": [
			"Only usable on a target to whom you deal damage.",
			"As long as your current Action Point value is not zero or less, until the next Count, you may use all your available Attack Maneuvers once each against the same target at their original Timings, aside from the Maneuver that dealt initial damage (ignore the difference between your current Action Point value and the Count)."
		],
		"flavorText": "An undead technique of throwing all your strikes upon an enemy to destroy them completely.",
		"flavorImage": "UnlimitedDestruction.png",
		"special": true,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 83,
		"classId": 11,
		"name": "Calamity",
		"cost": 2,
		"timing": "Damage",
		"usable": true,
		"range": "Self",
		"effectText": [
			"You may only use this Skill when you deal damage with a Melee Attack.",
			"Add the \'Area Attack\' property to this damage. You do not take damage from this \'Area Attack.\'"
		],
		"flavorText": "Your existence is a tornado of death. Weapons and madness raging in places where you cut and you\'ll be drawn into a whirlpool of destruction.",
		"flavorImage": "Calamity.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 84,
		"classId": 11,
		"name": "Dead on Target",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, if you roll 6 on an Attack Check, you may choose which Location to deal damage to."
		],
		"flavorText": "The blow that always gives a fatal injury to the enemy. It is an inevitability rather than a coincidence.",
		"flavorImage": "DeadOnTarget.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 85,
		"classId": 11,
		"name": "Drama of Death",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, when you and another Sister target an enemy with Attack Maneuvers, you may add +1 to the die roll for your Attack Check and +1 to your Damage."
		],
		"flavorText": "Even with breathing stopped, bodies that observe timing and maximize effect with simultaneous attacks. It is meaningful to breathe together.",
		"flavorImage": "DramaOfDeath.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 86,
		"classId": 11,
		"name": "Instantaneous",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"During the Battle Phase, when you declare an Attack Maneuver, no one other than you can perform Maneuvers at the \'Check\' and \'Rapid\' timings in response."
		],
		"flavorText": "Ultra high speed blow. It is impossible for anyone to prevent it.",
		"flavorImage": "Instantaneous.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 87,
		"classId": 11,
		"name": "God of Death",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"When making an Attack Check with a Melee Attack Maneuver, you may add +1 to the die roll."
		],
		"flavorText": "Sprint and hit. Your arms, eyes and brain were scrutinized and polished to bring about death and destruction.",
		"flavorImage": "GodOfDeath.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 88,
		"classId": 11,
		"name": "Judgment",
		"cost": "None",
		"timing": "Check",
		"usable": true,
		"range": "Self",
		"effectText": [
			"Use this Skill only during your own Melee Attack Maneuver\'s Attack Check. The die result of the Attack Check becomes 6, and no effect can change this result."
		],
		"flavorText": "There is a blow that cannot be stopped. Liberated from bad luck, it will bring an ending.",
		"flavorImage": "Judgment.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 89,
		"classId": 11,
		"name": "Queen of the Underworld",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"\'Hinder Move\' Maneuvers used by Legions have no effect on you.",
			"Furthermore, Legions must roll a 7 or higher on Attack Checks made against you to hit."
		],
		"flavorText": "No matter how many they arrange, their dead fingers cannot even touch you.",
		"flavorImage": "QueenOfTheUnderworld.png",
		"special": false,
		"restricted": false,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 90,
		"classId": 12,
		"name": "Vortex of Destruction",
		"cost": "See Effect",
		"timing": "Rapid",
		"usable": true,
		"range": "See Effect",
		"effectText": [
			"Unavailable until the end of the first Turn.",
			"As the Cost of this Skill, add a Madness Point to all of your Fetters that are not in a state of Madness.",
			"Each being on the Stage of Battle chooses and breaks four Parts. (Legions are completely annihilated.)"
		],
		"flavorText": "\'The most Terrible Thing\' that was suppressed inside you will overflow and destroy everything that is visible to you. Even yourself.",
		"flavorImage": "VortexOfDestruction.png",
		"special": true,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 91,
		"classId": 12,
		"name": "Distorted Power",
		"cost": 3,
		"timing": "Rapid",
		"usable": true,
		"range": "0-2",
		"effectText": [
			"You may use this skill even if completely Annihilated.",
			"The target chooses and breaks two Parts belong to it. (Legions simply take 2 damage.)"
		],
		"flavorText": "The most obvious destructive supernatural ability distorting what we have seen with the power of will, twisting, invisible violence of splitting overrun the enemy and turn it into meat blocks or scraps.",
		"flavorImage": "DistortedPower.png",
		"special": false,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 92,
		"classId": 12,
		"name": "Embrace of Souls",
		"cost": 2,
		"timing": "Action",
		"usable": false,
		"range": "0-2",
		"effectText": [
			"You may use this skill even if completely Annihilated.",
			"The target may remove a Madness Point from one of their Fetters.",
			"Afterwards, add a Madness Point to one of your Fetters that is not in a state of Madness."
		],
		"flavorText": "Your soul cannot be caught in the cage of flesh. Gently slip out, you can touch the soul of the precious person directly. Cuddling to share that suffering.",
		"flavorImage": "EmbraceOfSouls.png",
		"special": false,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 93,
		"classId": 12,
		"name": "Pawn\'s Gambit",
		"cost": 2,
		"timing": "Action",
		"usable": false,
		"range": "0-1",
		"effectText": [
			"You may use this skill even if completely Annihilated.",
			"Move 1.",
			"The target of the Move loses 2 Action Points (even if the Move is Hindered.)"
		],
		"flavorText": "Power of strong will, blow away the target opponent that has a special influence even to gravity with a gust of force. Beat on it, even miserable sense of upside down shows a big gap?",
		"flavorImage": "PawnsGambit.png",
		"special": false,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 94,
		"classId": 12,
		"name": "Shared Loss",
		"cost": 3,
		"timing": "Rapid",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"This skill is only usable on Horrors.",
			"Choose one of your Hit Locations.",
			"For every broken Part of yours in that Hit Location, the target chooses and destroy a Part of its own."
		],
		"flavorText": "The destruction that you received is projected onto the enemy\'s ego and misunderstood... Effective attacks only for those with only a very low self are not destroyed and they can not be used.",
		"flavorImage": "SharedLoss.png",
		"special": false,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 95,
		"classId": 12,
		"name": "Throne of the Void",
		"cost": "None",
		"timing": "Auto",
		"usable": false,
		"range": "Self",
		"effectText": [
			"You may ignore \'Hinder\' and \'Hinder Move\' effects originating from the same Area as you are in."
		],
		"flavorText": "Slightly, but your body is always floating, making sure that your body does not get caught out in movements, such as undocumented handouts.",
		"flavorImage": "ThroneOfTheVoid.png",
		"special": false,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 96,
		"classId": 12,
		"name": "Twist of Fate",
		"cost": "See Effect",
		"timing": "Check",
		"usable": true,
		"range": "0-3",
		"effectText": [
			"You may use this skill only when you are the target of an attack.",
			"As the Cost of this Skill, add a Madness Point to a Fetter of your choice.",
			"Regardless of the result of the Attack Check, the attack is considered a failure."
		],
		"flavorText": "Eyes to see the future. Power too heavy for the mind in one\'s heart. At the price of pain to the soul, the power to avoid only the worst crisis.",
		"flavorImage": "TwistOfFate.png",
		"special": false,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	},
	{
		"id": 97,
		"classId": 12,
		"name": "Will To Refuse",
		"cost": 2,
		"timing": "Damage",
		"usable": true,
		"range": "0-1",
		"effectText": [
			"You may use this skill even if completely Annihilated.",
			"Defend 1.",
			"You may use this Skill any number of times per Turn, but only once per Attack."
		],
		"flavorText": "You can bounce off the unexpected future that produces results just by thinking. Do not let the blade ease your important things to bullets.",
		"flavorImage": "WillToRefuse.png",
		"special": false,
		"restricted": true,
		"clockwork": false,
		"extremeMutation": false
	}
]
`;