const SPRITES = [

    // WATER
    {name:"Water",variant:"Normal"},
    {name:"Water",variant:"Gold"},
    {name:"Water",variant:"Pink"},
    {name:"Water",variant:"Purple"},
    {name:"Water",variant:"Rainbow"},

    // EARTH
    {name:"Earth",variant:"Normal"},
    {name:"Earth",variant:"Gold"},
    {name:"Earth",variant:"Pink"},
    {name:"Earth",variant:"Purple"},
    {name:"Earth",variant:"Rainbow"},

    // FIRE
    {name:"Fire",variant:"Normal"},
    {name:"Fire",variant:"Gold"},
    {name:"Fire",variant:"Pink"},
    {name:"Fire",variant:"Purple"},
    {name:"Fire",variant:"Rainbow"},

    // AIR
    {name:"Air",variant:"Normal"},
    {name:"Air",variant:"Gold"},
    {name:"Air",variant:"Pink"},
    {name:"Air",variant:"Purple"},
    {name:"Air",variant:"Rainbow"},

    // FISHY
    {name:"Fishy",variant:"Normal"},
    {name:"Fishy",variant:"Gold"},
    {name:"Fishy",variant:"Pink"},
    {name:"Fishy",variant:"Purple"},
    {name:"Fishy",variant:"Rainbow"},

    // DUCK
    {name:"Duck",variant:"Normal"},
    {name:"Duck",variant:"Gold"},
    {name:"Duck",variant:"Pink"},
    {name:"Duck",variant:"Purple"},
    {name:"Duck",variant:"Rainbow"},

    // GHOST
    {name:"Ghost",variant:"Normal"},
    {name:"Ghost",variant:"Gold"},
    {name:"Ghost",variant:"Pink"},
    {name:"Ghost",variant:"Purple"},
    {name:"Ghost",variant:"Rainbow"},

    // DEMON
    {name:"Demon",variant:"Normal"},
    {name:"Demon",variant:"Gold"},
    {name:"Demon",variant:"Pink"},
    {name:"Demon",variant:"Purple"},
    {name:"Demon",variant:"Rainbow"},

    // KING
    {name:"King",variant:"Normal"},
    {name:"King",variant:"Gold"},
    {name:"King",variant:"Pink"},
    {name:"King",variant:"Purple"},
    {name:"King",variant:"Rainbow"},

    // AURA
    {name:"Aura",variant:"Normal"},
    {name:"Aura",variant:"Gold"},
    {name:"Aura",variant:"Pink"},
    {name:"Aura",variant:"Purple"},
    {name:"Aura",variant:"Rainbow"},

    // STRIKER
    {name:"Striker",variant:"Normal"},
    {name:"Striker",variant:"Gold"},
    {name:"Striker",variant:"Pink"},
    {name:"Striker",variant:"Purple"},
    {name:"Striker",variant:"Rainbow"},

    // DREAM
    {name:"Dream",variant:"Normal"},
    {name:"Dream",variant:"Gold"},
    {name:"Dream",variant:"Pink"},
    {name:"Dream",variant:"Purple"},
    {name:"Dream",variant:"Rainbow"},

    // PUNK
    {name:"Punk",variant:"Normal"},
    {name:"Punk",variant:"Gold"},
    {name:"Punk",variant:"Pink"},
    {name:"Punk",variant:"Purple"},
    {name:"Punk",variant:"Rainbow"},

    // BOSS
    {name:"Boss",variant:"Normal"},
    {name:"Boss",variant:"Gold"},
    {name:"Boss",variant:"Pink"},
    {name:"Boss",variant:"Purple"},
    {name:"Boss",variant:"Rainbow"},

    // SEVEN
    {name:"Seven",variant:"Normal"},
    {name:"Seven",variant:"Gold"},
    {name:"Seven",variant:"Pink"},
    {name:"Seven",variant:"Purple"},
    {name:"Seven",variant:"Rainbow"},

    // BATMAN
    {name:"Batman",variant:"Normal"},
    {name:"Batman",variant:"Gold"},
    {name:"Batman",variant:"Pink"},
    {name:"Batman",variant:"Purple"},
    {name:"Batman",variant:"Rainbow"},

    // GRIM REAPER
    {name:"Grim Reaper",variant:"Normal"},
    {name:"Grim Reaper",variant:"Gold"},
    {name:"Grim Reaper",variant:"Pink"},
    {name:"Grim Reaper",variant:"Purple"},
    {name:"Grim Reaper",variant:"Rainbow"},

    // ZERO POINT
    {name:"Zero Point",variant:"Normal"},
    {name:"Zero Point",variant:"Gold"},
    {name:"Zero Point",variant:"Pink"},
    {name:"Zero Point",variant:"Purple"},
    {name:"Zero Point",variant:"Rainbow"},

    // SPECIALS
    {name:"Burnt Peanut",variant:"Normal"},
    {name:"Mini Jr.",variant:"Normal"},
    {name:"Pollo",variant:"Normal"}
];

function getImagePath(sprite){
    const cleanName = sprite.name.replace(/\s+/g,"_");
    return `sprites/${cleanName}_${sprite.variant}.png`;
}
