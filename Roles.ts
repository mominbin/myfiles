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
    currentArea: number;
    equipments:Array<Equipment>;
    killList: Array<Role>;
    buff: Buff;
    skillEnabled:boolean;
    isVisibleTo: Array<Role>;
    win():boolean;
    skill();

    setIsVisibleTo(roles : Array<Role>):void;
    getIsVisibleTo():Array<Role>;

    setName(name : Name):void;
    getName():Name;
    
    getTotalHP():Name;
    setTotalHP(totalHP: number): void;

    getCurrentHP():number;
    setCurrentHP(currentHP: number);

    getFaction(): Faction;
    setFaction(faction: Faction);

    getCurrentArea(): number;
    setCurrentArea(currentArea:number);

    getEquipment(): Array<Equipment>;
    setEquipment(equipments: Array<Equipment>);

    getKillList(): Array<Role>;
    getKillList(killList: Array<Role>);

    getBuff(): Buff;
    setBuff(buff: Buff);
    
}
class Utils{
    // get the raomd number between 1 to 10
    static getRandom():number{
        return Math.floor(Math.random()*10) + 1
    }

    static random(minNum:number,maxNum:number){
        let result = Utils.getRandom();
        if (result >= minNum && result <= maxNum){
            return result;
        } else {
            Utils.random(minNum, maxNum);
        }
    }
}
abstract class Player{
    ID: number;
    role: Role;
    phase: string;
    castDice(type: string): number{ // There are four types. 1. movement, 2. diffValueAttack, 3. fourPointDiceAttack, 4. sixPointDiceAttack
        let num:number;
        if (type == "movement"){
            num = Utils.random(1,6) + Utils.random(1, 4);
        } else if(type == "diffValueAttack"){
            num = Math.abs(Utils.random(1,6) - Utils.random(1, 4));
        } else if(type == "fourPointDiceAttack"){
            num = Utils.random(1, 4);
        } else if(type == "sixPointDiceAttack"){
            num = Utils.random(1, 6);
        }
        return num;
    }
    move(position:number){
        if(position == this.role.getCurrentArea()){
            return "error! you must leave your current area!";
        }
        this.role.setCurrentArea(position);
    }
    attack(target: Player, value: number){
        let current
        target.role.setCurrentHP(target.role.getCurrentHP() - value);
    }
}

abstract class AbstracRole implements Role{
    name: Name;
    totalHP: number;
    currentHP: number;
    faction: Faction;
    currentArea: number;
    equipments:Array<Equipment>;
    killList: Array<Role>;
    buff: Buff;
    isVisibleTo: Array<Role>;
    skillEnabled:boolean;

    constructor(name:Name, totalHP:number, faction: Faction){
        this.setName(name);
        this.setTotalHP(totalHP);
        this.setCurrentHP(this.totalHP);
        this.setFaction(faction);
        this.setCurrentArea(0);
    }
    abstract  win():boolean;
    abstract skill();

    setIsVisibleTo(roles : Array<Role>):void{
        this.isVisibleTo = roles;
    }
    getIsVisibleTo():Array<Role>{
        return this.isVisibleTo;
    }

    setSkillEnabled(enable: boolean){
        this.skillEnabled = enable;
    }
    getSkillEnabled(){
        return this.skillEnabled;
    }
    setName(name : Name):void{
        this.name = name;
    }
    getName():Name{
        return this.name;
    }
    
    getTotalHP():Name{
        return this.totalHP;
    }

    setTotalHP(totalHP: number): void{
        this.totalHP = totalHP;
    }

    getCurrentHP():number{
        return this.currentHP;
    }
    setCurrentHP(currentHP: number){
        this.currentHP = currentHP;
    }

    getFaction(): Faction{
        return this.faction;
    }
    setFaction(faction: Faction){
        this.faction = faction;
    }

    getCurrentArea(): number{
        return this.currentArea;
    }

    setCurrentArea(currentArea:number){
        this.currentArea = currentArea
    }

    getEquipment(): Array<Equipment>{
        return this.equipments;
    }
    setEquipment(equipments: Array<Equipment>){
        this.equipments = equipments;
    }

    getKillList(): Array<Role>{
        return this.killList;
    }
    setKillList(killList: Array<Role>){
        this.killList = killList;
    }

    getBuff(): Buff{
        return this.buff;
    }

    setBuff(buff: Buff){
        this.buff = buff;
    }
}

class AllieRole extends AbstracRole{
    constructor(){
        super(Name.Allie, 10, Faction.Neutral);
    }

    win(){
        //return gameOver is ture and this.currentHP > 0;
        return false;
    }

    skill(){
        //showself();
        this.currentHP = this.totalHP;
        //disableSkill();
    }
}

class BobRole extends AbstracRole{
    constructor(){
        super(Name.Bob, 10, Faction.Neutral);
    }
    
    win(){
        return this.equipments.length >= 5;
    }

    skill(){
        
    }
}
