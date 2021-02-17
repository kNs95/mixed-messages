const monsterName = [
    'Tyranatir',
    'Rapidolux',
    'Felix',
    'Monstruozo',
    'Bagini',
    'Cudovix',
    'Sacculus',
    'Protectus',
    'Orustelix',
    'Prodas',
    'Bigul',
    'Smilux',
    'Cytlat',
    'Ravee',
    'Strumos',
    'Helius',
    'Greplix',
    'Ustrop',
    'Banix',
    'Tweplius',
    'Nidoflar',
    'Kliomas',
    'Jeecee',
    'Guteg',
    'Cheeckus',
    'Humatlir',
    'Domler',
    'Doomix',
    'Stantlex',
    'Furius'
];

const monsterType = [
    'Fire',
    'Ground',
    'Wind',
    'Ice',
    'Grass',
    'Rock',
    'Water',
    'Toxic',
    'Gas',
    'Psychic'
];

const fireSkill = [
    "Blaze: Sets your enemy on fire inflicting huge fire-damage.",
    "Spark: Initiate a spark in your enemy's soul causing them to suffer inner-damage",
    "Pyroblast: Shots a massive flame at your enemy that knocks them away and deal massive damage."
];

const groundSkill = [
    "Root: Roots your enemy so they cannot move or attack.",
    "Earthquake: Initiate an earthquake that makes your enemy unstable and deals damage to them.",
    "Lavashot: Open the earth to gain lots of lava and shot it at your enemy dealing massive damage."
];

const windSkill = [
    "Tornado: Creates a massive tornado that throws your enemy into the air and damages them.",
    "Blow-Strike: Blows fast wind at your enemy dealing damage and making them struggle to breath",
    "Speedrun: Use the wind to grant you mega-speed which allows you to strike at your enemy quickly"
];

const iceSkill = [
    "Blizzard: Initiate blizzard around your enemy that deals massive damage to them.",
    "Ice-Block: Freeze yourself to temporary become immune to all incoming attacks.",
    "Freeze: Freezes your enemy making them being unable to move or attack."
];

const grassSkill = [
    "Leech-Leaf: Shots a leaf at your enemy leeching their life.",
    "Nettle-Wrap: Wraps your enemy into nettle causing massive damage.",
    "Cane: Throws bunch of canes at your enemy that stuns them and deal damage."
];

const rockSkill = [
    "Rock-Throw: Throw a rock at your enemy dealing massive damage to them.",
    "Stone: Drop a stone at your enemy's head which stuns them",
    "Pebble-Storm: Initiate a pebble-storm around your enemy that blinds them and deals damage."
];

const waterSkill = [
    "Hydro-Pump: Shot a hydro-pump at your enemy dealing massive damage to them.",
    "Sink: Create a pool nearby your enemy and put them into it making them sink.",
    "Swim-Away: Swim away at very fast speed to avoid any attacks."
];

const toxicSkill = [
    "Toxins: Shot lots of toxins at your enemy that deals massive damage to them.",
    "Poison: Poison your enemy's soul with poison that deals inner damage to them.",
    "Toxic-Defense: Wrap yourself with friendly-toxins that absorb any incoming damage."
];

const gasSkill = [
    "Evaporate: Turn yourself into an invisible gas, your enemy can't see you!",
    "Gas-Mask: Wear a gas-mask that makes you immune to all damages and effects from your enemmy.",
    "Sleepy-Spread: Spread lots of friendly gas around your enemy that puts them to sleep."
];

const psychicSkill = [
    "Telekinesis: Become able to control any physicas objact around you.",
    "Mind-Reading: Read your enemy's mind to find out what their next step is going to be.",
    "Full-Control: Invade your enemy's brain and take control of their mind."
];

function yourNewMonster(){
    const yourMonster = [Math.floor(Math.random() * monsterName.length)];
    const yourMonstersType = [Math.floor(Math.random() * monsterType.length)];
    const yourMonstersSkill = [Math.floor(Math.random() * fireSkill.length)];
    console.log("Your monster is: " + monsterName[yourMonster]);
    console.log("Your " + monsterName[yourMonster] + "'s type is: " + monsterType[yourMonstersType]);
    if(monsterType[yourMonstersType] === 'Fire') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + fireSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Ground') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + groundSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Wind') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + windSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Ice') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + iceSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Grass') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + grassSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Rock') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + rockSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Water') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + waterSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Toxic') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + toxicSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Gas') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + gasSkill[yourMonstersSkill]);
    }
    else if(monsterType[yourMonstersType] === 'Psychic') {
        console.log("Your " + monsterName[yourMonster] + " has a skill! It is: " + psychicSkill[yourMonstersSkill]);
    }
    console.log("You can now use your " + monsterName[yourMonster] + " to fight with other monsters!");
};

yourNewMonster();

