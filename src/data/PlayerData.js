//player object attr: name, headshotSrc, country, goals, assists
//country codes from: https://en.wikipedia.org/wiki/List_of_FIFA_country_codes
var players = [];

const pepeMap = new Map();
pepeMap.set('2022', {
  appearances: 4,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
pepeMap.set('2018', {
  appearances: 4,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
pepeMap.set('2014', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 1,
  yellowCards: 0,
});
pepeMap.set('2010', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Pepe',
  lastName: '',
  headshotSrc: require('../assets/Pepe.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 2,
  assists: 0,
  position: 'DEF',
  relevance: 9,
  worldCups: pepeMap,
  blurb:
    'In the 2022 world cup, he became the oldest player to score at the knock-out stage in the world cup with a goal against Switzerland.',
});
const DalotMap = new Map();
DalotMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Diogo',
  lastName: 'Dalot',
  headshotSrc: require('../assets/DiogoDalot.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 1,
  position: 'DEF',
  relevance: 6,
  worldCups: DalotMap,
  blurb:
    'Dalot is a physically strong defender known for his speed. He has good dribbling skills  and is highly involved in counter attacks making crosses or long passes',
});
const RubenMap = new Map();
RubenMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Ruben',
  lastName: 'Diaz',
  headshotSrc: require('../assets/Ruben.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 6,
  worldCups: RubenMap,
  blurb:
    'Diaz is physically intelligent player that caqn win position and then make smart breakout passes. He has a very good passing range nad can dictate play from the back',
});
const GuerrerioMap = new Map();
GuerrerioMap.set('2022', {
  appearances: 4,
  goals: 1,
  assists: 2,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
GuerrerioMap.set('2018', {
  appearances: 4,
  goals: 0,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Raphael',
  lastName: 'Guerrerio',
  headshotSrc: require('../assets/Guerrerio.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 1,
  assists: 3,
  position: 'DEF',
  relevance: 5,
  worldCups: GuerrerioMap,
  blurb:
    'Guerreiro is known to have versatility in which position he plays. While he primarily plays as a defender, he has also played midfielder positions.',
});
const PereiraMap = new Map();
PereiraMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Danilo',
  lastName: 'Pereira',
  headshotSrc: require('../assets/Pereira.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 2,
  worldCups: PereiraMap,
  blurb:
    'Despite being a part of the Portuguese 2018 world cup team, he did not play any games due to injury. When healthy, he is known for his physicality and ability to dominate in aerial duels.',
});
const PalhinhaMap = new Map();
PalhinhaMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Joao',
  lastName: 'Palhinha',
  headshotSrc: require('../assets/Palhinha.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: PalhinhaMap,
  blurb:
    'Palhinha excels at breaking up opposition attacks, and intercepting passes. He plays well under pressure, a feat shown during the 2022 world cup qualifiers where he came in for Ruben Neves to hold a close 1-0 lead.',
});
const BrunoMap = new Map();
BrunoMap.set('2022', {
  appearances: 4,
  goals: 2,
  assists: 3,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
BrunoMap.set('2018', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Bruno',
  lastName: 'Fernandes',
  headshotSrc: require('../assets/Bruno.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 2,
  assists: 3,
  position: 'MID',
  relevance: 7,
  worldCups: BrunoMap,
  blurb:
    'Fernandes is a direct energetic box-to-box playmaker who can take on defenders. He is prone to turnovers as he takes a lot of risks with his plays. While being a playmaker, he also has a goalscorers touch, frequently shooting outside the penalty area.',
});
const CarvalhoMap = new Map();
CarvalhoMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
CarvalhoMap.set('2018', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
CarvalhoMap.set('2014', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'William',
  lastName: 'Carvalho',
  headshotSrc: require('../assets/Carvalho.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 6,
  worldCups: CarvalhoMap,
  blurb:
    'A defensive midfielder that is versatile in how they are deployed. Known for his passing range and accuracy. Plays the game with high physicality. He has high decision making skills.',
});
const VitnhaMap = new Map();
VitnhaMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Vitinha',
  lastName: '',
  headshotSrc: require('../assets/vitnha.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: VitnhaMap,
  blurb:
    'His excellent dribbling skills and ball control helps him be a threatening playmaker. He can progress the ball quickly and has the ability to get balls in dangerous locations with his passes. He excels in counter-pressing and is very quick-witted when creating counter attacks.',
});
const ASilvaMap = new Map();
ASilvaMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Antonio',
  lastName: 'Silva',
  headshotSrc: require('../assets/ASilva.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 2,
  worldCups: ASilvaMap,
  blurb:
    'Silva is a physically strong hard tackling player. He is hard to play against and uses physicality to his advantage. His physicality also helps him win back possession of the ball. He is an effective passer and his passes can help dictate play',
});
const nunoMap = new Map();
nunoMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Nuno',
  lastName: 'Mendes',
  headshotSrc: require('../assets/nuno.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 2,
  worldCups: nunoMap,
  blurb:
    'Known for his offensive capabilities, speed and technical qualities. He has an excellent crossing ability to help create dangerous scoring chances. He has a physical prowess that allows him to beat opponents to the ball.',
});
const CanceloMap = new Map();
CanceloMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Joao',
  lastName: 'Cancello',
  headshotSrc: require('../assets/Cancelo.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 2,
  worldCups: CanceloMap,
  blurb:
    'Known for his speed, energy and offensive capabilities. He has good dribbling skills and crossing abilities that help him make plays. Despite his offensive strengths, he struggles at positioning, and defensive skills.',
});

const RNevesMap = new Map();
RNevesMap.set('2022', {
  appearances: 5,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Ruben',
  lastName: 'Neves',
  headshotSrc: require('../assets/RNeves.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: RNevesMap,
  blurb:
    'Defensive midfielder who can also support attacks. He has accurate passing skills, great vision and good positioning. He has a good first touch that allows him to control the ball and has good decision making. He has a good long range shooting ability.',
});

const MNunesMap = new Map();
MNunesMap.set('2022', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Matheus',
  lastName: 'Nunes',
  headshotSrc: require('../assets/Mnunes.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 3,
  worldCups: MNunesMap,
  blurb:
    'Nunes has a good passing range. He can make many different types of passes depending on the situation and as a great playmaker. He has the ability to carry the ball and make effective runs using his speed and strength. Nunes has a strength in his knowledge of the game and can easily read plays.',
});

const OtavioMap = new Map();
OtavioMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Otavio',
  lastName: '',
  headshotSrc: require('../assets/otavio.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 2,
  worldCups: OtavioMap,
  blurb:
    'A winger that is not known for his goal threat but focuses instead on speed, agility, movement to overwhelm defenders. He will drag defenders towards him before picking the right time to make an effective pass. He creates plenty of scoring chances.',
});

const MarioMap = new Map();
MarioMap.set('2022', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
MarioMap.set('2018', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Joao',
  lastName: 'Mario',
  headshotSrc: require('../assets/Mario.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: MarioMap,
  blurb:
    'He is a high volume goalscorer with a great finishing touch. He does a great job at moving the ball and connecting the midfield to the attack. While being a goalscorer, he is also a high volume passer that often creates dangerous scoring chances. Overall he is a diverse attacker.',
});

const ronaldoMap = new Map();
ronaldoMap.set('2022', {
  appearances: 5,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
ronaldoMap.set('2018', {
  appearances: 4,
  goals: 4,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
ronaldoMap.set('2014', {
  appearances: 3,
  goals: 1,
  assists: 1,
  trophies: 0,
  redCards: 1,
  yellowCards: 0,
});
ronaldoMap.set('2010', {
  appearances: 4,
  goals: 1,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
ronaldoMap.set('2006', {
  appearances: 6,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});

players.push({
  firstName: 'Cristiano',
  lastName: 'Ronaldo',
  headshotSrc: require('../assets/ronaldo.png'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 8,
  assists: 6,
  position: 'FWD',
  relevance: 10,
  worldCups: ronaldoMap,
  blurb:
    'Ronaldo is a versatile attacker that is constantly dangerous. His strength and jumping ability helps him win aerial battles. He has high speed and agility that allows him to get past most defenders. He is a generational talent with excellent dribbling abilities and can be very tricky to cover with his feints.',
  rating: 90,
});

const andreSilvaMap = new Map();
andreSilvaMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Andre',
  lastName: 'Silva',
  headshotSrc: require('../assets/andreSilva.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'FWD',
  relevance: 3,
  worldCups: andreSilvaMap,
  blurb:
    'Silva is very effective at linking up the play and aiding progression of the ball into the offensive zone. He has a great first touch that allows him to control the ball efficiently when played to him. He is intelligent in where he attacks and notices gaps in the opposition defense often and berates them.',
});

const BsilvaMap = new Map();
BsilvaMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
BsilvaMap.set('2018', {
  appearances: 5,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Bernardo',
  lastName: 'Silva',
  headshotSrc: require('../assets/Bsilva.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 0,
  assists: 0,
  position: 'FWD',
  relevance: 6,
  worldCups: BsilvaMap,
  blurb:
    'Silva is an elegant and creative playmaker. He is known for his technique, acceleration and speed which aids in his palaymaking. He is known as an intelligent player and will make smart passes and has an easy time helping retain possession.',
});

const felixMap = new Map();
felixMap.set('2022', {
  appearances: 4,
  goals: 1,
  assists: 2,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Joao',
  lastName: 'Felix',
  headshotSrc: require('../assets/Felix.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 1,
  assists: 2,
  position: 'FWD',
  relevance: 6,
  worldCups: felixMap,
  blurb:
    'Highly skillful technical player. He is creative and very precise with his dribbling and touch on the ball all aided to help his talent in finishing. He scored his first world cup goal in the 2022 world cup against Ghana.',
});

const LeaoMap = new Map();
LeaoMap.set('2022', {
  appearances: 5,
  goals: 2,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'JRafael',
  lastName: 'Leao',
  headshotSrc: require('../assets/Leao.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 2,
  assists: 0,
  position: 'FWD',
  relevance: 7,
  worldCups: LeaoMap,
  blurb:
    'Leao is seen as a highly skillful player capable of playing on either flank. He is a proficient dribbler that can burst out with speed catching defenders off guard. He has an eye for goal and has an accurate shot.',
});

const HortaMap = new Map();
HortaMap.set('2022', {
  appearances: 3,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Ricardo',
  lastName: 'Horta',
  headshotSrc: require('../assets/Horta.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 1,
  assists: 0,
  position: 'FWD',
  relevance: 6,
  worldCups: HortaMap,
  blurb:
    'Wide range of skills with good awareness of the field and intelligent play. He has an impressive ability to beat defenders one-on-one. He has shown the ability to score in an eye-catching manner.',
});

const RamosMap = new Map();
RamosMap.set('2022', {
  appearances: 4,
  goals: 3,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Goncalo',
  lastName: 'Ramos',
  headshotSrc: require('../assets/Ramos.png.webp'),
  country: 'POR',
  countryPic: require('../assets/flag_portugal.png'),
  goals: 3,
  assists: 1,
  position: 'FWD',
  relevance: 8,
  worldCups: RamosMap,
  blurb:
    'He has great awareness and understanding of the game. He is great at rotating positions to benefit the ball holder with his movement. His ability to attack space and create further space with his movement helps him be a dangerous offensive threat. ',
});

const FoythMap = new Map();
FoythMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Juan',
  lastName: 'Foyth',
  headshotSrc: require('../assets/Foyth.png.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 2,
  worldCups: FoythMap,
  blurb:
    'Foyth has a tendency to dribble the ball out of the defensive zone. His strength is in a possession oriented system that relies on defenders bringing the ball up field. He is a fantastic dribbler that can outwork multiple oppositions and create space by himself.',
});

const TagliaficoMap = new Map();
TagliaficoMap.set('2022', {
  appearances: 6,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
TagliaficoMap.set('2018', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Nicolas',
  lastName: 'Tagliafico',
  headshotSrc: require('../assets/Tagliafico.png.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 6,
  worldCups: TagliaficoMap,
  blurb:
    'Tagliafico has an extraordinary amount of stamina. He is a reliable defensemen who excels in one-on-one defensive situations. He is not afraid to engage in tackles and challenges and often breaks up opposition plays.',
});

const RomeroMap = new Map();
RomeroMap.set('2022', {
  appearances: 7,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 2,
});
players.push({
  firstName: 'Cristian',
  lastName: 'Romero',
  headshotSrc: require('../assets/Romero.png.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 5,
  worldCups: RomeroMap,
  blurb:
    'He has a solid defensive and tactical game. He can be an aggressive defender pushing defensive lines high up. He is aggressive and looks to press and win the ball back. He is also known for sweeping the ball.',
});

const OtamendiMap = new Map();
OtamendiMap.set('2022', {
  appearances: 7,
  goals: 0,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 2,
});
OtamendiMap.set('2018', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 2,
});
OtamendiMap.set('2010', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Nicolas',
  lastName: 'Otamendi',
  headshotSrc: require('../assets/Otamendi.png.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 1,
  position: 'DEF',
  relevance: 8,
  worldCups: OtamendiMap,
  blurb:
    'Otamendi’s defining characteristic is his strength. He is  a powerful athlete capable of outmuscling any forward. He is great with possession of the ball and is great at making passes',
});

const LisandroMap = new Map();
LisandroMap.set('2022', {
  appearances: 5,
  goals: 0,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Lisandro',
  lastName: 'Martinez',
  headshotSrc: require('../assets/Lisandro.png.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 1,
  position: 'DEF',
  relevance: 5,
  worldCups: LisandroMap,
  blurb:
    'He is an aggressive defender that is versatile in how he is deployed. He is a ball playing defender that is known for his range of passing and composure of the ball. He is an imposing defender who uses speed to excel in and win battles.',
});

const MontielMap = new Map();
MontielMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 3,
});
players.push({
  firstName: 'Gonzalo',
  lastName: 'Montiel',
  headshotSrc: require('../assets/Montiel.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 1,
  position: 'DEF',
  relevance: 5,
  worldCups: MontielMap,
  blurb:
    'Has good vision and can make quick passes with quick decision making. He is very press resistant and shown to hold up when pressured. He is calculated and knows when to put pressure on the opponent.',
});

const PezzellaMap = new Map();
PezzellaMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'German',
  lastName: 'Pezzella',
  headshotSrc: require('../assets/Pezzella.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 1,
  position: 'DEF',
  relevance: 5,
  worldCups: PezzellaMap,
  blurb:
    'Pezzella excels in his defensive duties. He is strong in tackling, aerial duels and ability to read the game and make interceptions. He is a highly physical presence that outworks oppositions to win duels and retrieve the puck back from oppositions.',
});

const MolinaMap = new Map();
MolinaMap.set('2022', {
  appearances: 7,
  goals: 1,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Nahuel',
  lastName: 'Molina',
  headshotSrc: require('../assets/Molina.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 1,
  assists: 1,
  position: 'DEF',
  relevance: 7,
  worldCups: MolinaMap,
  blurb:
    'Molina is known for his quickness and allows him to cover ground efficiently both offensively and defensively. His crossing ability is a notable aspect of his game. He is comfortable taking on opponents and advancing the ball up the field.',
});

const papuMap = new Map();
papuMap.set('2022', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Papu',
  lastName: 'Gomez',
  headshotSrc: require('../assets/papu.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 4,
  worldCups: papuMap,
  blurb:
    'Is known for his speed. He is quick with his feet and has an explosive acceleration. He is a creative technically gifted player and a hard worker. He is a goalscorer with his agility and accurate long range shot. He is a versatile attacker.',
});

const enzoMap = new Map();
enzoMap.set('2022', {
  appearances: 7,
  goals: 1,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Enzo',
  lastName: 'Fernandez',
  headshotSrc: require('../assets/enzo.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 1,
  assists: 1,
  position: 'MID',
  relevance: 7,
  worldCups: enzoMap,
  blurb:
    'Fernandez is a versatile midfielder. He can break plays up easily and dictates tempo. Fernandez operates centrally and fights for control for the center. He is combative in midfield duels and protects space and his backline efficiently.',
});

const ParedesMap = new Map();
ParedesMap.set('2022', {
  appearances: 5,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 2,
});
players.push({
  firstName: 'Leandro',
  lastName: 'Paredes',
  headshotSrc: require('../assets/Paredes.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 6,
  worldCups: ParedesMap,
  blurb:
    'Paredes tends to organize play from deep in his own half. His passing and vision of the field helps compensate for his shortcomings in speed. While making risky passes, he has a high success rate of passing which can be attributed to his quick decision making.',
});

const dePaulMap = new Map();
dePaulMap.set('2022', {
  appearances: 7,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Rodrigo',
  lastName: 'De Paul',
  headshotSrc: require('../assets/dePaul.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: dePaulMap,
  blurb:
    'He is versatile in his deployment. He is known for his impressive passing range and ability to dictate play from deep if needed. He creates space for teammates with smart sharp turns and being a proficient ball carrier. His defensive capabilities are not his strong suit.',
});

const acunaMap = new Map();
acunaMap.set('2022', {
  appearances: 6,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 3,
});
acunaMap.set('2018', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Marcos',
  lastName: 'Acuna',
  headshotSrc: require('../assets/acuna.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 7,
  worldCups: acunaMap,
  blurb:
    'Acuna is a sound defensive player and can often prevent forwards from beating him one-on-one. He is great at holding his ground and not letting the opposition beat him. When battling for the ball, more often then not he wins.',
});

const PalaciosMap = new Map();
PalaciosMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Exequiel',
  lastName: 'Palacios',
  headshotSrc: require('../assets/Palacios.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: PalaciosMap,
  blurb:
    'He is an elegant dribbler with a lot of speed. He has a directness to his game and ball control to motor away from opponents and drive the team forward. Defensively he can easily disrupt opposition plays.',
});

const AlmadaMap = new Map();
AlmadaMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Thiago',
  lastName: 'Almada',
  headshotSrc: require('../assets/almada.jpg'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 2,
  worldCups: AlmadaMap,
  blurb:
    'Almada is a quick footed fast thinking player. He uses the ball very well in tight spaces. Almada has strengths to both be a creative playmaker and a goalscorer but does not excel in either role. However, his capability to perform both roles at a decent level is a threat.',
});

const GuidoMap = new Map();
GuidoMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Guido',
  lastName: 'Rodriguiez',
  headshotSrc: require('../assets/Guido.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 2,
  worldCups: GuidoMap,
  blurb:
    'He excels at winning possession when defending one-on-one by tackling and pressing the attacker. He defends well, anticipating opposition movement and never makes it easy for the attacker to beat him.',
});

const AllisterMap = new Map();
AllisterMap.set('2022', {
  appearances: 6,
  goals: 1,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Alexis',
  lastName: 'Mac Allister',
  headshotSrc: require('../assets/Allister.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 1,
  assists: 1,
  position: 'MID',
  relevance: 7,
  worldCups: AllisterMap,
  blurb:
    'He focuses on linking up midfield, wingers and strikers. He possesses great first touch and manipulates the ball well. He helps control play and break out attacks. Often his game revolves around recycling possession with low tempo passes and timing attacks in moments of opposition defensive weakness.',
});

const AlvarezMap = new Map();
AlvarezMap.set('2022', {
  appearances: 7,
  goals: 4,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Julian',
  lastName: 'Alvarez',
  headshotSrc: require('../assets/Alvarez.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 4,
  assists: 0,
  position: 'FWD',
  relevance: 8,
  worldCups: AlvarezMap,
  blurb:
    'Alavarez is direct, quick and has a high conversion rate of unconventional chances. He is a good link-up player with technique and vision to play quick passes and one-touch football. His strength lies in first touch. ',
});

const messiMap = new Map();
messiMap.set('2022', {
  appearances: 7,
  goals: 7,
  assists: 3,
  trophies: 1,
  redCards: 0,
  yellowCards: 1,
});
messiMap.set('2018', {
  appearances: 4,
  goals: 1,
  assists: 2,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
messiMap.set('2014', {
  appearances: 7,
  goals: 4,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
messiMap.set('2010', {
  appearances: 5,
  goals: 0,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
messiMap.set('2006', {
  appearances: 3,
  goals: 1,
  assists: 1,
  trophies: 0,
  redCards: 1,
  yellowCards: 0,
});

players.push({
  firstName: 'Lionel',
  lastName: 'Messi',
  headshotSrc: require('../assets/messi.png'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 10,
  assists: 20,
  position: 'FWD',
  relevance: 10,
  worldCups: messiMap,
  blurb:
    'Messei has great agility and is a very evasive player. He excels in short bursts of acceleration that enable him to retain control of the ball when dribbling at speed. He is a prolific goal scorer known for his finishing, positioning, quick reactions and ability to make attacking runs.',
  rating: 99,
});

const CorreaMap = new Map();
CorreaMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Angel',
  lastName: 'Correa',
  headshotSrc: require('../assets/Correa.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'FWD',
  relevance: 3,
  worldCups: CorreaMap,
  blurb:
    'Correa holds good skill, pace and low center of gravity, aside from a good technique and first touch. Correa’s known for making quick changes of direction and nimble dribbling to navigate through tight defensive situations. His agility helps him create scoring opportunities.',
});

const DybalaMap = new Map();
DybalaMap.set('2022', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
DybalaMap.set('2018', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Paulo',
  lastName: 'Dybala',
  headshotSrc: require('../assets/Dybala.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'FWD',
  relevance: 4,
  worldCups: DybalaMap,
  blurb:
    'Dybala is a quick, creative, elegant and agile player with excellent technical ability. He is known for his powerful and accurate shots from outside the box. Due to his speed on the ball, positioning and intelligent movement, he excels during counter attacks.',
});

const MartinezMap = new Map();
MartinezMap.set('2022', {
  appearances: 6,
  goals: 0,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Lautaro',
  lastName: 'Martinez',
  headshotSrc: require('../assets/Martinez.webp'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 0,
  assists: 0,
  position: 'FWD',
  relevance: 6,
  worldCups: MartinezMap,
  blurb:
    'Starting out as a defender, he later made the transition to become a forward. He is a dynamic, quick and agile player that is a threat as a goalscorer. He is known for his elegant play style with excellent dribbling skills with clinical finishing ability.',
});

const ChulMap = new Map();
ChulMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
ChulMap.set('2018', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Hong',
  lastName: 'Chul',
  headshotSrc: require('../assets/Chul.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 2,
  worldCups: ChulMap,
  blurb:
    'Chul is skilled in defending through intercepting passes and preventing opposing wingers from advancing. He has good ball control and passing ability that helps initiate attacks from the defense.',
});

const jinsuMap = new Map();
jinsuMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Kim',
  lastName: 'Jin-su',
  headshotSrc: require('../assets/jinsu.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 1,
  position: 'DEF',
  relevance: 6,
  worldCups: jinsuMap,
  blurb:
    'He is known for his attacking contributions as a defender. He often joins the attack and can support the teams offensive plays. A key aspect of his play is his ability to deliver accurate crosses into the box.',
});

const minjaeMap = new Map();
minjaeMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Kim',
  lastName: 'Min-jae',
  headshotSrc: require('../assets/minjae.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 4,
  worldCups: minjaeMap,
  blurb:
    'Has notable strength, speed and flexibility. Kim has a strong predictive ability in defense. His long passes are accurate which enables him to create quick counterattacks. His aerial ability and positioning are excellent allowing him to easily break up opposition attacks and start offensive play.',
});

const moonhwanMap = new Map();
moonhwanMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Kim',
  lastName: 'Moon-hwan',
  headshotSrc: require('../assets/moonhwan.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 4,
  worldCups: moonhwanMap,
  blurb:
    'He is defensively sound, and excels defensively in one-on-one situations. He intercepts passes and makes timely tackles.',
});

const youngGwonMap = new Map();
youngGwonMap.set('2022', {
  appearances: 4,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
youngGwonMap.set('2018', {
  appearances: 3,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
youngGwonMap.set('2014', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Kim',
  lastName: 'Young-gwon',
  headshotSrc: require('../assets/youngGwon.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 2,
  assists: 0,
  position: 'DEF',
  relevance: 8,
  worldCups: youngGwonMap,
  blurb:
    'In the 2018 world cup, Kim Younggwon showed great leadership skills and helped lead the South Korean defenders. He scored against the Germans in the same world cup for his first goal. He also played major roles in South Korean’s 2014 and 2022 runs.',
});

const KwonMap = new Map();
KwonMap.set('2022', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Kwon',
  lastName: 'Kyung-won',
  headshotSrc: require('../assets/Kwon.png'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 4,
  worldCups: KwonMap,
  blurb:
    'Kwon  is comfortable with possession of the ball and can distribute the ball accurately from the back. He is great at intercepting the oppositions passes and can create quick passes to create a breakout the other direction.',
});

const yoonMap = new Map();
yoonMap.set('2022', {
  appearances: 0,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Yoon',
  lastName: 'Jong-gyu',
  headshotSrc: require('../assets/yoon.png'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'DEF',
  relevance: 1,
  worldCups: yoonMap,
  blurb:
    'Jonggyu is a solid defender that can hold his own without getting overwhelmed by his opposition. However, he does not excel at breaking up opposition plays. His strength lies in joining the attack and providing outlet passes.',
});

const inbeomMap = new Map();
inbeomMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Hwang',
  lastName: 'In-beom',
  headshotSrc: require('../assets/inbeom.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 6,
  worldCups: inbeomMap,
  blurb:
    'Hwang thrives attacking through the middle. He is effective in the box-to-box. Some of the notable strengths of Hwangs game is his precision passing, aggressive tackling, possession composure and willingness to take on defenders.',
});

const guesungMap = new Map();
guesungMap.set('2022', {
  appearances: 4,
  goals: 2,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Cho',
  lastName: 'Gue-sung',
  headshotSrc: require('../assets/guesung.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'FWD',
  relevance: 7,
  worldCups: guesungMap,
  blurb:
    'Cho does not have a lot of pace. His two-footed dribbling ability and ability to shoot with either foot is a strength as it makes him unpredictable. Cho tends to play centrally and looks to score goals inside the box.',
});

const uijoMap = new Map();
uijoMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Hwang',
  lastName: 'Ui-jo',
  headshotSrc: require('../assets/uijo.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'FWD',
  relevance: 7,
  worldCups: uijoMap,
  blurb:
    'Hwang is known for his goal-scoring ability. He often goes to find scoring opportunities and finishing chances inside the box. He also is effect with his movement off the ball. He can make intelligent runs to create space for himself and his teammates making him a dynamic presence in the attacking unit.',
});

const jaesungMap = new Map();
jaesungMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
jaesungMap.set('2018', {
  appearances: 3,
  goals: 0,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Lee',
  lastName: 'Jae-Sung',
  headshotSrc: require('../assets/jaesung.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 1,
  position: 'MID',
  relevance: 7,
  worldCups: jaesungMap,
  blurb:
    'Known for his technical ability, Lee Jaesung has good ball control and passing skills, he is a hard worker that not only has offensive contributions but is defensively responsible.',
});

const heechanMap = new Map();
heechanMap.set('2022', {
  appearances: 2,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
heechanMap.set('2018', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Hwang',
  lastName: 'Hee-Chan',
  headshotSrc: require('../assets/heechan.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 1,
  assists: 1,
  position: 'FWD',
  relevance: 7,
  worldCups: heechanMap,
  blurb:
    'Hwang is known for his speed, pace and dribbling ability. He is very agile and has a goal scoring instinct making him dangerous on the counter attack and rush. He is capable of linking play between the midfield and attack.',
});

const jeongMap = new Map();
jeongMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Jeong',
  lastName: 'Woo-Yeong',
  headshotSrc: require('../assets/jeong.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 6,
  worldCups: jeongMap,
  blurb:
    'Wooyeong is talented at timing his runs into space and can get open for scoring opportunities. He is a patient but opportunistic player knowing when to strike. His high intelligence and ability to see the field helps him find opportunities to score that others may struggle with.',
});

const hoonMap = new Map();
hoonMap.set('2022', {
  appearances: 1,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Kwon',
  lastName: 'Chang-Hoon',
  headshotSrc: require('../assets/hoon.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 2,
  worldCups: hoonMap,
  blurb:
    'Changhoon has great ball control and dribbling skills. He can maneuver in tight areas  and create opportunities. Kwan is mainly a playmaker and provides key creative passes to others. He can help create many high danger scoring chances.',
});

const kanginMap = new Map();
kanginMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Lee',
  lastName: 'Kang-in',
  headshotSrc: require('../assets/kangin.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 1,
  position: 'MID',
  relevance: 6,
  worldCups: kanginMap,
  blurb:
    'Kangin is an excellent attacking midfielder. He has a high pace to his game and can cause problems with his accurate deliveries into the box. His vision is an asset and allows him to see the field well and aids in his playmaking.',
});

const sanghoMap = new Map();
sanghoMap.set('2022', {
  appearances: 2,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Na',
  lastName: 'Sang-Ho',
  headshotSrc: require('../assets/sangho.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 6,
  worldCups: sanghoMap,
  blurb:
    'Sang ho is a natural goal scorer. He positions aggressively in the box and has an excellent finishing touch. His physical presence helps him hold off defenders and helps him succeed in battles in the box. He can fight for position effectively and get high danger scoring chances in the box.',
});

const paikMap = new Map();
paikMap.set('2022', {
  appearances: 1,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Paik',
  lastName: 'Seung-Ho',
  headshotSrc: require('../assets/paik.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 1,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: paikMap,
  blurb:
    'Seungho is a highly technical player with good ball control and passing accuracy. He has great vision and intelligence creating goal scoring opportunities for his teammates. He has dangerous free and corner kicks.',
});

const wooMap = new Map();
wooMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 2,
});
wooMap.set('2018', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 2,
});
players.push({
  firstName: 'Jung',
  lastName: 'Woo-Young',
  headshotSrc: require('../assets/woo.png'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 5,
  worldCups: wooMap,
  blurb:
    'Wooyoung is a physical midfielder that uses his strength to shield the ball and win duels. He possesses good passing range, accuracy and can dictate the tempo of the game. He is still defensively reliable due to his awareness of the game and holds position not allowing oppositions to get past him.',
});

const junhoMap = new Map();
junhoMap.set('2022', {
  appearances: 3,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Son',
  lastName: 'Jun-ho',
  headshotSrc: require('../assets/son.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 0,
  assists: 0,
  position: 'MID',
  relevance: 4,
  worldCups: junhoMap,
  blurb:
    'Junho has excellent speed and is very nimble. He can often win positions over defenders and slip past them. He has a strong finishing touch which helps him be a threatening goal scorer along with his speed. He can be a bit one note as his playmaking game is not as strong.',
});

const mbappeMap = new Map();
mbappeMap.set('2022', {
  appearances: 7,
  goals: 8,
  assists: 2,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
mbappeMap.set('2018', {
  appearances: 7,
  goals: 4,
  assists: 0,
  trophies: 1,
  redCards: 0,
  yellowCards: 2,
});

players.push({
  firstName: 'Kylian',
  lastName: 'Mbappe',
  headshotSrc: require('../assets/mbappe.png'),
  country: 'FRA',
  countryPic: require('../assets/flag_france.png'),
  goals: 12,
  assists: 4,
  position: 'FWD',
  relevance: 9,
  worldCups: mbappeMap,
  blurb: "J'adore les croissants!",
  rating: 99,
});

const diMariaMap = new Map();
diMariaMap.set('2022', {
  appearances: 5,
  goals: 1,
  assists: 1,
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
diMariaMap.set('2018', {
  appearances: 3,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
diMariaMap.set('2014', {
  appearances: 5,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
diMariaMap.set('2010', {
  appearances: 5,
  goals: 0,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Angel',
  lastName: 'Di Maria',
  headshotSrc: require('../assets/dimaria.png'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 5,
  assists: 3,
  position: 'FWD',
  relevance: 5,
  worldCups: diMariaMap,
  blurb:
    'Di Maria is a highly agile, creative and technical player. He has great stamina, movement and acceleration that allows him to beat players one-on-one easily. He has excellent vision of the field and has great passing and crossing ability that makes him an elite playmaker.',
  rating: 80,
});

const sonMap = new Map();
sonMap.set('2022', {
  appearances: 4,
  goals: 0,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
sonMap.set('2018', {
  appearances: 3,
  goals: 2,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
sonMap.set('2014', {
  appearances: 3,
  goals: 1,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 1,
});
players.push({
  firstName: 'Heungmin',
  lastName: 'Son',
  headshotSrc: require('../assets/Son.png.webp'),
  country: 'KOR',
  countryPic: require('../assets/flag_southkorea.png'),
  goals: 5,
  assists: 7,
  position: 'MID',
  relevance: 8,
  worldCups: sonMap,
  blurb:
    'A versatile player that can be deployed in multiple positions. Son is known for his two-footed abilities, explosive pace, positional sense and movement. He has a strong finishing game which makes him dangerous on the counter attack in combination with his speed.',
  rating: 85,
});

const maradonaMap = new Map();
maradonaMap.set('1994', {
  appearances: 2,
  goals: 1,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
maradonaMap.set('1990', {
  appearances: 7,
  goals: 0,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 2,
});
maradonaMap.set('1986', {
  appearances: 7,
  goals: 5,
  assists: '-',
  trophies: 1,
  redCards: 0,
  yellowCards: 1,
});
maradonaMap.set('1982', {
  appearances: 5,
  goals: 2,
  assists: '-',
  trophies: 0,
  redCards: 1,
  yellowCards: 1,
});
players.push({
  firstName: 'Diego',
  lastName: 'Maradona',
  headshotSrc: require('../assets/maradona.png'),
  country: 'ARG',
  countryPic: require('../assets/flag_argentina.png'),
  goals: 8,
  assists: 0,
  position: 'MID',
  relevance: 10,
  worldCups: maradonaMap,
  blurb: "I won Argentina's first World Cup!",
  rating: 99,
});

const peleMap = new Map();
peleMap.set('1970', {
  appearances: 6,
  goals: 4,
  assists: '-',
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
peleMap.set('1966', {
  appearances: 2,
  goals: 1,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
peleMap.set('1962', {
  appearances: 2,
  goals: 1,
  assists: '-',
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
peleMap.set('1958', {
  appearances: 4,
  goals: 6,
  assists: '-',
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Pele',
  lastName: '',
  headshotSrc: require('../assets/pele.png'),
  country: 'BRA',
  countryPic: require('../assets/flag_brazil.png'),
  goals: 12,
  assists: 0,
  position: 'FWD',
  relevance: 10,
  worldCups: peleMap,
  blurb: 'I won 3 World Cups!',
  rating: 99,
});

const beckenbauerMap = new Map();
beckenbauerMap.set('1974', {
  appearances: 7,
  goals: 0,
  assists: '-',
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
beckenbauerMap.set('1970', {
  appearances: 5,
  goals: 1,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
beckenbauerMap.set('1966', {
  appearances: 6,
  goals: 4,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 2,
});
players.push({
  firstName: 'Franz',
  lastName: 'Beckenbauer',
  headshotSrc: require('../assets/beckenbauer.png'),
  country: 'GER',
  countryPic: require('../assets/flag_germany.png'),
  goals: 5,
  assists: 0,
  position: 'DEF',
  relevance: 10,
  worldCups: beckenbauerMap,
  blurb: 'I like sauerkraut!',
  rating: 99,
});

const r9Map = new Map();
r9Map.set('2006', {
  appearances: 5,
  goals: 3,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 2,
});
r9Map.set('2002', {
  appearances: 7,
  goals: 8,
  assists: '-',
  trophies: 1,
  redCards: 0,
  yellowCards: 0,
});
r9Map.set('1998', {
  appearances: 7,
  goals: 4,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Ronaldo',
  lastName: '',
  headshotSrc: require('../assets/r9.png'),
  country: 'BRA',
  countryPic: require('../assets/flag_brazil.png'),
  goals: 15,
  assists: 0,
  position: 'ST',
  relevance: 10,
  worldCups: r9Map,
  blurb: 'I have a yee-yee haircut!',
  rating: 99,
});

const zidaneMap = new Map();
zidaneMap.set('2006', {
  appearances: 6,
  goals: 3,
  assists: '-',
  trophies: 0,
  redCards: 1,
  yellowCards: 3,
});
zidaneMap.set('2002', {
  appearances: 1,
  goals: 0,
  assists: '-',
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
zidaneMap.set('1998', {
  appearances: 5,
  goals: 2,
  assists: '-',
  trophies: 1,
  redCards: 1,
  yellowCards: 1,
});
players.push({
  firstName: 'Zinedine',
  lastName: 'Zidane',
  headshotSrc: require('../assets/zidane.png'),
  country: 'FRA',
  countryPic: require('../assets/flag_france.png'),
  goals: 5,
  assists: 0,
  position: 'MID',
  relevance: 8,
  worldCups: zidaneMap,
  blurb: 'I am bald!',
  rating: 99,
});

const sakaMap = new Map();
sakaMap.set('2022', {
  appearances: 4,
  goals: 3,
  assists: 0,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Bukayo',
  lastName: 'Saka',
  headshotSrc: require('../assets/saka.png'),
  country: 'ENG',
  countryPic: require('../assets/flag_england.png'),
  goals: 3,
  assists: 0,
  position: 'RW',
  relevance: 7,
  worldCups: sakaMap,
  blurb: 'I am a proud Gooner!',
  rating: 87,
});

const bellinghamMap = new Map();
bellinghamMap.set('2022', {
  appearances: 5,
  goals: 1,
  assists: 1,
  trophies: 0,
  redCards: 0,
  yellowCards: 0,
});
players.push({
  firstName: 'Jude',
  lastName: 'Bellingham',
  headshotSrc: require('../assets/bellingham.png'),
  country: 'ENG',
  countryPic: require('../assets/flag_england.png'),
  goals: 1,
  assists: 1,
  position: 'MID',
  relevance: 8,
  worldCups: bellinghamMap,
  blurb: 'I transferred to Real Madrid!',
  rating: 90,
});

export var players;
