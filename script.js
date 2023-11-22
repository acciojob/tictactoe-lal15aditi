//your JS code here. If required.
// Get player names and start the game
it('Check for initial page', () => {
  cy.visit('your_webpage_url');
  cy.get('#player-1').should('exist');
  cy.get('#player-2').should('exist');
});

it('Outcome of the game: Shows player 1 win', () => {
  cy.visit('your_webpage_url');
  // Play the game until player 1 wins
  // Simulate the game actions
  // Assert player 1 wins
  cy.get('#player-1').type('Player 1');
  cy.get('#player-2').type('Player 2');
  // Perform game moves...
  cy.get('#1').click();
  cy.get('#4').click();
  cy.get('#2').click();
  // Assert player 1 win message
  cy.get('.message').should('contain', 'Player 1, congratulations you won!');
});

// Similarly, add a test for player 2 win scenario
it('Outcome of the game: Shows player 2 win', () => {
  cy.visit('your_webpage_url');
  // Play the game until player 2 wins
  // Simulate the game actions
  // Assert player 2 wins
});

document.getElementById('submit').addEventListener('click', function() {
  const player1 = document.getElementById('player-1').value;
  const player2 = document.getElementById('player-2').value;
  
  if (player1 && player2) {
    document.querySelector('.input-container').style.display = 'none';
    document.querySelector('.message').textContent = `${player1}, you're up!`;
    document.querySelector('.board').style.display = 'grid';
    startGame(player1, player2);
  } else {
    alert('Please enter names for both players!');
  }
});

// Function to start the game
function startGame(player1, player2) {
  const cells = document.querySelectorAll('.cell');
  let currentPlayer = player1;

  cells.forEach(cell => {
    cell.addEventListener('click', function() {
      if (!cell.textContent) {
        cell.textContent = currentPlayer === player1 ? 'X' : 'O';
        checkWinner(player1, player2);
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        document.querySelector('.message').textContent = `${currentPlayer}, you're up!`;
      }
    });
  });
}

// Function to check for a winner
function checkWinner(player1, player2) {
  const cells = document.querySelectorAll('.cell');
  const winningCombos = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a - 1].textContent && cells[a - 1].textContent === cells[b - 1].textContent && cells[a - 1].textContent === cells[c - 1].textContent) {
      const winner = cells[a - 1].textContent === 'X' ? player1 : player2;
      document.querySelector('.message').textContent = `${winner}, congratulations you won!`;
      return;
    }
  }
}
