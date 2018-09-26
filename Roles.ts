enum Faction {
    Shadow = 1,
    Hunter = 2,
    Neutral = 3
}

enum damageSubjectType{
    Role = 1,
    Area,
    singleUseCard
}

enum Color {
    Green = 1,
    White = 2,
    Black = 3
}

enum Name {
    Allie = 1,
    Bob,
    Charles,
    Daniel,
    Emi,
    Franklin,
    George,
    Unknown,
    Vampire,
    Werewolf
}
enum CardType{
    SingleUse = 1,
    Equipment
}

interface Condition {

}

interface Equipment {

}

interface GreenCard {
    color: Color;
    type: CardType;
    action(subject: Role, target:Role);
}

interface Effect{

}

interface Buff{
    activeTime: number;
    effect: Effect;
    scope: Role;
}

interface Role{
    name: Name;
    totalHP: number;
    currentHP: number;
    faction: Faction;
    currentLocation: number;
    winCondition: Condition;
    equipments:Array<Equipment>;
    killList: Array<Role>;
    buff: Buff;
    skill();
    
    setName(v : Name):void;
    getName():Name;
    
    getTotalHP():Name;
    setTotalHP(totalHP: number): void;

    getCurrentHP():number;
    setCurrentHP(v: number);

    getFaction(): Faction;
    setFaction(faction: Faction);

    getCurrentLocation(): number;
    setCurrentLocation(currentLocation:number);

    getWinCondition(): Condition;
    setWinCondition(winCondition: Condition);

    getEquipment(): Array<Equipment>;
    setEquipment(equipments: Array<Equipment>);

    getKillList(): Array<Role>;
    getKillList(killList: Array<Role>);

    getBuff(): Buff;
    setBuff(buff: Buff);
    
}

class 