var invitation = document.querySelector('.invitation');
var interjection = document.querySelector('.interjection');
var error = document.querySelector('.error');

var guests = {
	'BF5B7EDE': { greeting: 'Дорогие родители', interjection: 'вас' },
	'C0AD3BA5': { greeting: 'Дорогая бабушка', interjection: 'тебя' },
	'BAB1C83E': { greeting: 'Дорогая тетя Галя', interjection: 'тебя' },
	'72E6F65B': { greeting: 'Арсений', interjection: 'тебя' },
	'9223CF72': { greeting: 'Дорогие Илья и Аня' },
	'5088755C': { greeting: 'Дорогие Женя и Таня' },
	'98B956FF': { greeting: 'Дорогая Лера' },
	'87042E04': { greeting: 'Дорогие Леша и Яня' },
	'F8D5D59C': { greeting: 'Дорогие Александр и Алеся' },
	'BEF8F7A4': { greeting: 'Дорогой дядя Леня' },
	'0623C559': { greeting: 'Дорогие дядя Гриша и тетя Люся' },
	'711FED72': { greeting: 'Дорогие дядя Гена и тетя Женя' },
	'AF819B4E': { greeting: 'Дорогие дядя Саша и тетя Оля, Никита и Лера' },
	'0ECC82F6': { greeting: '' },
	'CB6B7C12': { greeting: '' },
	'824CE9A2': { greeting: '' },
	'B8CDF346': { greeting: '' },
	'DA6027B6': { greeting: '' },
	'F1F60111': { greeting: '' },
	'7E0F2386': { greeting: '' },
	'D6AFD762': { greeting: '' },
	'211A0604': { greeting: '' },
	'D4957BD7': { greeting: '' },
	'E6A9FC9E': { greeting: '' },
	'BCDA495D': { greeting: '' },
	'9F04D328': { greeting: '' },
	'65BB5859': { greeting: '' },
	'1ACE181A': { greeting: '' },
	'3CB2848F': { greeting: '' },
	'A673891A': { greeting: '' },
	'478C7BD0': { greeting: '' },
	'846003A2': { greeting: '' },
	'3043FEBF': { greeting: '' },
	'81D75954': { greeting: '' },
	'F74C79DA': { greeting: '' },
	'72B69579': { greeting: '' },
	'A109E687': { greeting: '' },
	'75FDC34D': { greeting: '' },
	'8CEE3FC6': { greeting: '' },
	'7E251A99': { greeting: '' },
	'6FBA4DAD': { greeting: '' },
	'291C0335': { greeting: '' },
	'C8CCF0BC': { greeting: '' },
	'30426D06': { greeting: '' },
	'E9876BA1': { greeting: '' },
	'31FB4017': { greeting: '' },
	'089A5C99': { greeting: '' },
	'C6B76FCB': { greeting: '' },
	'CC5E4FBA': { greeting: '' },
	'486B0B36': { greeting: '' },
	'2C6186F7': { greeting: '' },
	'688FFA93': { greeting: '' },
	'0D1E57F8': { greeting: '' },
	'5A4F8976': { greeting: '' },
	'0B537242': { greeting: '' },
	'63D26658': { greeting: '' },
	'9AFE1815': { greeting: '' },
	'A9AA8474': { greeting: '' },
	'51FF9CBA': { greeting: '' },
	'E600E555': { greeting: '' },
};
//
// try {
//     var currentGuestId = +location.search.match(/g=\w+/)[0].slice(-8).toUpperCase();
//     var guest = guests[currentGuestId];
//
//     if (!guest) {
//         throw new Error('No guest');
//     }
//
// } catch (e) {
//     error.style.display = 'flex';
//     invitation.parentElement.removeChild(invitation);
// }
