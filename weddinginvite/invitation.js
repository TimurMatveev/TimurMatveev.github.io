var invitation = document.querySelector('.invitation');
var error = document.querySelector('.error');

var guests = {
    8270: { accost: "Дорогие родители" },
};
//
// try {
//     var currentGuestId = +location.search.match(/g=\d+/)[0].slice(-4);
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
