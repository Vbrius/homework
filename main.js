const player1 = {
    name:'Scorpion',
    hp = 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: 'sword',
    attack: function(){console.log('Scorpion' + 'Fight')}
};
const playur2 = {  
    name:'Sub Zero',
    hp = 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: 'sword',
    attack: function(){console.log('Sub Zero' + 'Fight')}
};

function createPlayer(player,name,life)
{
const $player1 = document.createElement('div');

$player1.classList.add(player);
$progressbar.classList.add('progressbar');
$life.classList.add('life');
$naame1.classList.add('name');
$character.classList.add('character');

const $p = document.createElement('p');
$p.innerText = name;

const $img = document.createElement('img');

$player1.appendChild($p);
$player1.appendChild($img);


const $root = document.querySelector('.root');
$root.appendChild(player1);


}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);


