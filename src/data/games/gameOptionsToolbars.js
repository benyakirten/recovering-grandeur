export default {
  dropdownToolbar: `Customize how many cards there are in total and if there is a limit
  on guesses. Options cannot be changed while a game is in progress.`,
  numGuessesToolbar: `Limit the number of guesses before you lose. A limit of 0 means there are
  unlimited guesses.`,
  numCardsToolbar: `Choose how many cards there are too match. It must be an even number between 2 and 282
  (twice the 141 named colors in CSS). However, I highly suggest you go for around 100 at most.
  If you want to know why, it's because your browser has to calculate the position for everything
  And because when this sidebar pops in and out, the computer has to dynamically calculate
  values for the positions of every card in the grid. It would be quicker and more efficient
  if transforms had been involved instead of directly changing the widht directly, but
  frankly, it would just bloat what I wanted and not have the sidebar pop out`
};
