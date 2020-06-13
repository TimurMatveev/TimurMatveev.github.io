var invitation = document.querySelector('.invitation');
var greeting = document.querySelector('.greeting');
var offline = document.querySelector('.offline');
var online = document.querySelector('.online');
var interjections = document.querySelectorAll('.interjection');
var error = document.querySelector('.error');

var url = 'http://timurmatveev.github.io/weddinginvite';

var guests = {
	'BF5B7EDE': { greeting: 'Дорогие родители!', interjection: 'вас' },
	'C0AD3BA5': { greeting: 'Дорогая бабушка!', interjection: 'тебя' },
	'BAB1C83E': { greeting: 'Дорогая тетя Галя!', interjection: 'тебя' },
	'72E6F65B': { greeting: 'Арсений!', interjection: 'тебя' },
	'9223CF72': { greeting: 'Дорогие Илья и Аня!', interjection: 'вас' },
	'5088755C': { greeting: 'Дорогие Женя и Таня!', interjection: 'вас' },
	'98B956FF': { greeting: 'Дорогая Лера!', interjection: 'тебя' },
	'87042E04': { greeting: 'Дорогие Леша и Яня!', interjection: 'вас' },
	'F8D5D59C': { greeting: 'Дорогие Александр и Алеся!', interjection: 'вас' },
	'BEF8F7A4': { greeting: 'Дорогой дядя Леня!', interjection: 'Вас' },
	'0623C559': { greeting: 'Дорогие дядя Гриша и тетя Люся!', interjection: 'вас' },
	'711FED72': { greeting: 'Дорогие дядя Гена и тетя Женя!', interjection: 'вас' },
	'AF819B4E': { greeting: 'Дорогие дядя Саша и тетя Оля, Никита и Лера!', interjection: 'вас' },
	'0ECC82F6': { greeting: 'Дорогие мама и Саша!', interjection: 'вас' },
	'CB6B7C12': { greeting: 'Дорогие бабушка и Борис!', interjection: 'вас' },
	'824CE9A2': { greeting: 'Дорогие дядя Юра и тетя Света!', interjection: 'вас' },
	'B8CDF346': { greeting: 'Дорогие Виталик и Викa!', interjection: 'вас' },
	'DA6027B6': { greeting: 'Дорогие Дима и Наташа!', interjection: 'вас' },
	'F1F60111': { greeting: 'Дорогие папа и Кристина!', interjection: 'вас' },
	'7E0F2386': { greeting: 'Дорогая бабушка!', interjection: 'тебя' },
	'D6AFD762': { greeting: 'Дорогие Леша и Ира!', interjection: 'вас' },
	'211A0604': { greeting: 'Дорогой Никита!', interjection: 'тебя' },
	'D4957BD7': { greeting: 'Дорогие Саша и Оля!', interjection: 'вас' },
	'E6A9FC9E': { greeting: 'Дорогой Паша!', interjection: 'тебя' },
	'BCDA495D': { greeting: 'Дорогой Влад!', interjection: 'тебя' },
	'9F04D328': { greeting: 'Дорогая Катя!', interjection: 'тебя' },
	'65BB5859': { greeting: 'Дорогой Илья!', interjection: 'тебя' },
	'1ACE181A': { greeting: 'Дорогие дядя Миша, тетя Нина и Сережа!', interjection: 'вас' },
	'478C7BD0': { greeting: 'Дорогие Лена, Настя и тетя Рая!', interjection: 'вас' },
	'3CB2848F': { greeting: 'Дорогие Виталий и Светлана!', interjection: 'вас' },
	'A673891A': { greeting: 'Дорогая бабушка Рая!', interjection: 'тебя', isOnline: true },
	// '846003A2': { greeting: '' },
	// '3043FEBF': { greeting: '' },
	// '81D75954': { greeting: '' },
	// 'F74C79DA': { greeting: '' },
	// '72B69579': { greeting: '' },
	// 'A109E687': { greeting: '' },
	// '75FDC34D': { greeting: '' },
	// '8CEE3FC6': { greeting: '' },
	// '7E251A99': { greeting: '' },
	// '6FBA4DAD': { greeting: '' },
	// '291C0335': { greeting: '' },
	// 'C8CCF0BC': { greeting: '' },
	// '30426D06': { greeting: '' },
	// 'E9876BA1': { greeting: '' },
	// '31FB4017': { greeting: '' },
	// '089A5C99': { greeting: '' },
	// 'C6B76FCB': { greeting: '' },
	// 'CC5E4FBA': { greeting: '' },
	// '486B0B36': { greeting: '' },
	// '2C6186F7': { greeting: '' },
	// '688FFA93': { greeting: '' },
	// '0D1E57F8': { greeting: '' },
	// '5A4F8976': { greeting: '' },
	// '0B537242': { greeting: '' },
	// '63D26658': { greeting: '' },
	// '9AFE1815': { greeting: '' },
	// 'A9AA8474': { greeting: '' },
	// '51FF9CBA': { greeting: '' },
	// 'E600E555': { greeting: '' },
};

try {
    var currentGuestId = location.search.match(/g=\w+/)[0].slice(-8).toUpperCase();
    var guest = guests[currentGuestId];

    if (!guest) {
        throw new Error('No guest');
    }

	greeting.innerText = guest.greeting;

    Array.prototype.forEach.call(interjections, function(interjection) {
		interjection.innerText = guest.interjection;
	});

    if (guest.isOnline) {
		offline.parentElement.removeChild(offline);
		online.style.display = 'block';
	}
} catch (e) {
    error.style.display = 'flex';
    invitation.parentElement.removeChild(invitation);
}

// function getUrls() {
// 	return Object.entries(guests).reduce((result, [id, { greeting }]) => {
// 		return `${ result }${ greeting }: ${ url }&g=${ id }\n`;
// 	}, '');
// }
