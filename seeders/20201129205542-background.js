'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
return queryInterface.bulkInsert('backgrounds', [{
  name:'Acolyte',
  desc: "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric-performing sacred rites is not the same thing as channeling divine power. Choose a god, a pantheon of gods, or some other quasi-divine being from among those listed in \"Fantasy-Historical Pantheons\" or those specified by your GM, and work with your GM to detail the nature of your religious service. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.",
  skillProf: 'Insight, Religion',
  toolProf: "None",
  lang: "Two of your choice",
  equipment: "A holy symbol (a gift to you when you entered the priesthood), a prayer book or prayer wheel, 5 sticks of incense, vestments, a set of common clothes, and a pouch containing 15 gp",
  feat: "Shelter of the Faithful",
  featDesc: "As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle. You might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple.",
  createdAt: new Date(),
  updatedAt: new Date() 
},
{
  name:'Charlatan',
  desc: "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It’s a useful talent and one that you’re perfectly willing to use for your advantage. You know what people want and you deliver, or rather, you prom ise to deliver. Common sense should steer people away from things that sound too good to be true, but com m on sense seem s to be in short supply when you’re around. The bottle of pink-colored liquid will surely cure that unseemly rash, this ointment—nothing more than a bit of fat with a sprinkle of silver dust—can restore youth and vigor, and there’s a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.",
  skillProf: 'Deception, Slight of Hand',
  toolProf: "Disguise Kit and Forgery Kit",
  lang: "None",
  equipment:"A set of fine clothes, a disguise kit, tools of the con of your choice (ten stoppered bottles filled with colored liquid, a set of weighted dice, a deck of marked cards, or a signet ring of an imaginary duke), and a belt pouch containing 15 gp",
  feat: "Flase Identity",
  featDesc: "You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of docum ent or the handwriting you are trying to copy.",
  createdAt: new Date(),
  updatedAt: new Date() 
},
{
  name:"Criminal",
  desc:"You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other crim inals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
  skillProf:"Deception, Stealth",
  toolProf:"One type of gaming set, thieves' tools",
  lang: "None",
  equipment: "A crowbar, a set of common clothes with a hood, and a belt pouch containing 15gp.", 
  feat:"Criminal Contact",
  featDesc:"You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.",
  createdAt: new Date(),
  updatedAt: new Date(), 
},
{
  name:"Entertainer",
  desc:"You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.",
  skillProf:"Acrobatics, Performance",
  toolProf:"Disguise kit, one type of musical instrument",
  lang:"None",
  equipment:"A musical instrument (one of your choice), the favor of an admirer (love letter, lock of hair, or trinket), a costume, and a belt pouch containing 15 gp", 
  feat:"By Popular Demand",
  featDesc:"You can always find a place perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble’s court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you.",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name:"Folk Hero",
  desc:"You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
  skillProf:"Animal Handling, Survival",
  toolProf: "One type of artisan's tools, vehicles(land)",
  lang:"None",
  equipment:"A set of artisan's tools (one of your choice), a shovel, an iron pot, a set of ocmmon clothes, and a belt pouch containing 10 gp", 
  feat:"Defining Event",
  featDesc:"You previously pursued a simple profession among the peasantry, perhaps as a farmer, miner, servant, shepherd, woodcutter, or gravedigger. But something happened that set you on a different path and marked you for greater things. Choose or randomly determine a defining event that marked you as a hero of the people",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name:"Guild Artisan",
  desc:"You are a member of an artisan’s guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
  skillProf: "Insight, Persuasion",
  toolProf: "One type of artisan's tools" ,
  lang:"One of your choice",
  equipment:"A set of artisan's tools (one of your choice), a letter of introduction from your guild, a set of travel's clothes, and a belt pouch containing 15 gp", 
  feat:"Guild Business",
  featDesc:"Guilds are generally foundin cities large enough to support several artisans practicing the same trade. However, your guild might in stead be a loose network of artisans who eahc owrk in a different village within a larger realm. Work with your DM to determine the nature of your guild. You can select your guild business from the Guild Business table or roll randomly.",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name:"Hermit",
  desc:"You lived in seclusion--either in a sheltered community such as a monastery, or entirely alone--for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for",
  skillProf:"Medicine, Religion",
  toolProf:"Herbalism Kit",
  lang:"One of your choice",
  equipment:"A scroll case stuffed full of notes from your studies or prayers, a winter blanket, a set of common clothes, an herbalism kit, and 5 gp", 
  feat:"Life of Seclusion",
  featDesc:"What was the reason for your isolation, and what changed to allow you to end your solitude? You can work with your DM to determine the exact nature of your seclusion, or you can choose or roll on the table below to determine the reason behind your seclusion.",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name:"Noble",
  desc:"You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a form er merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own—it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you. Is your family old and established, or was your title only recently bestowed? How much influence do they wield, and over what area? What kind of reputation does your family have among the other aristocrats of the region? How do the common people regard them? W hat’s your position in the family? Are you the heir to the head of the family? Have you already inherited the title? How do you feel about that responsibility? Or are you so far down the line of inheritance that no one cares what you do, as long as you don’t embarrass the family? How does the head of your family feel about your adventuring career? Are you in your family’s good graces, or shunned by the rest of your family? Does your family have a coat of arms? An insignia you might wear on a signet ring? Particular colors you wear all the time? An animal you regard as a symbol of your line or even a spiritual member of the family? These details help establish your family and your title as features of the world of the campaign.",
  skillProf:"History, Persuasion",
  toolProf: "One type of gaming set",
  lang:"One of your choce",
  equipment:"A set of fine clothes, a signet ring, a scroll of pedigree, anda purse containing 25 gp", 
  feat:"Position of Priviledge",
  featDesc:"Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name:"Outlander",
  desc:"You grew up in the wilds, far from civilization and the com forts of town and technology. You’ve witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don’t know the specific features of the terrain, you know the ways of the wild.",
  skillProf:"Athletics, Survival",
  toolProf:"One type of musical instrument",
  lang:"One of your choice",
  equipment:"A staff, a hunting trap, a trophy from an animal you killed, a set of traveler's clothes, and a belt pouch containing 10 gp", 
  feat:"Wanderer",
  featDesc:"You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name:"Sage",
  desc:"You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study",
  skillProf:"Arcana, History",
  toolProf:"None",
  lang:"Two of your choice",
  equipment:"A bottle of black ink, a quill, a small knife, a letter from a dead colleague posing a quesiton you have not yet been able to answer, a set of common clothes, and a belt pouch containing 10 gp", 
  feat:"Researcher",
  featDesc:"When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature. Your DM might rule that the knowledge you seek is secreted away in an almost inaccessible place, or that it simply cannot be found. Unearthing the deepest secrets of the multiverse can require an adventure or even a whole campaign.",
  createdAt: new Date(),
  updatedAt: new Date(),
}, 
{
  name:"Sailor",
  desc:"You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottom less depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new. Discuss the nature of the ship you previously sailed with your Dungeon Master. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is it missing and presumed lost with all hands? What were your duties on board—boatswain, captain, navigator, cook, or some other position? Who were the captain and first mate? Did you leave your ship on good terms with your fellows, or on the run?",
  skillProf:"Athletics, Perception",
  toolProf:"Navigator's tools, vehicles(water)",
  lang: "None",
  equipment:"A belaying pin (club), 50 feet of silk rope, a lucky charm such as a rabbit foot or a small stone with a hole in the center (or you may roll for a random trinket on the Trinkets table in chapter 5), a set of common clothes, and a belt pouch containing 10 gp", 
  feat:"Ship's Passage",
  featDesc:"When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you’re calling in a favor, you can’t be certain of a schedule or route that will meet your every need. Your Dungeon Master will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage.",
  createdAt: new Date(),
  updatedAt: new Date(),
}, 
{
  name:"Soldier",
  desc:"War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war. When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, or a mercenary company.",
  skillProf:"Athletics, Intimidation",
  toolProf:"One type of gaming set, vechiles(land)",
  lang:"None",
  equipment:"An insignia of rank, a trophy taken from a fallen enemy (a dagger, broken blade, or a piece of a banner), a set of bone dice or deck of cards, a set of common clothes, and a belt pouch containing 10 gp", 
  feat:"Military Rank",
  featDesc:"You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized.",
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name:"Urchin",
  desc:"You grew up on the streets alone, orphaned, and poor. You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls w ho might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of m edicine or a place to recuperate. You’ve survived despite all odds, and did so through cunning, strength, speed, or som e com bination of each. You begin your adventuring career with enough money to live modestly but securely for at least ten days. H ow did you com e by that money? W hat allowed you to break free of your desperate circum stances and embark on a better life?",
  skillProf:"Sleight of Hand, Stealth", 
  toolProf:"Disguise kit, thieves' tools", 
  lang: "None", 
  equipment: "A small knife, a map of the city you grew up in, a pet mouse, a token to remember your parents by, a set of common clothes, and a belt pouch containing 10 gp", 
  feat: "City Secrets", 
  featDesc:"You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.", 
  createdAt: new Date(),
  updatedAt: new Date(),
}], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
