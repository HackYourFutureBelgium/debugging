'use strict';

/* Confirming with Boolean Input

  when a user has just a yes/no decision with no input
  that can be represented by a boolean value

*/


const favoriteColorInput = prompt('please enter your favorite color');

console.log('favoriteColorInput:', typeof favoriteColorInput, favoriteColorInput);


const confirmMessage = 'are you sure "' + favoriteColorInput + '" is your favorite color?';
const confirmedFavoriteColor = confirm(confirmMessage);

console.log('confirmedFavoriteColor:', typeof confirmedFavoriteColor, confirmedFavoriteColor);

if (confirmedFavoriteColor) {
  const didConfirmMessage = 'nice.  your favorite color is "' + favoriteColorInput + '"';
  alert(didConfirmMessage);

} else {
  alert('well then, what is it?');
}
