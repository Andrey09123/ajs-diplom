import themes from './themes';
import GamePlay from './GamePlay';
import Bowman from './characters/Bowman';
import Swordsman from './characters/Swordsman';
import Magician from './characters/Magician';
import Vampire from './characters/Vampire';
import Undead from './characters/Undead';
import Daemon from './characters/Daemon';
import Team from './Team';
import PositionedCharacter from './PositionedCharacter';
import { characterGenerator, generateTeam } from './generators';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;

    this.userTeam = new Team();
    this.opTeam = new Team();
    this.userHeroes = [Bowman, Swordsman, Magician];
    this.opHeroes = [Daemon, Undead, Vampire];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.gamePlay.drawUi(themes.prairie);

    const team1 = new Team(this.userHeroes);
    const teamGen1 = generateTeam(team1.characters, 3, 2);
    const random1 = Math.floor(Math.random() * teamGen1.length);
    const arrPosition1 = [0, 8, 16, 24, 32, 40, 48, 56];
    const position1 = Math.floor(Math.random() * arrPosition1.length);
    const positionedCharacter1 = new PositionedCharacter(teamGen1[random1], arrPosition1[position1]);
    // this.gamePlay.redrawPositions([positionedCharacter1]);

    const team2 = new Team(this.userHeroes);
    const teamGen2 = generateTeam(team2.characters, 3, 2);
    const random2 = Math.floor(Math.random() * teamGen2.length);
    const arrPosition2 = [1, 9, 17, 25, 33, 41, 49, 57];
    const position2 = Math.floor(Math.random() * arrPosition2.length);
    const positionedCharacter2 = new PositionedCharacter(teamGen2[random2], arrPosition2[position2]);

    const team3 = new Team(this.opHeroes);
    const teamGen3 = generateTeam(team3.characters, 3, 2);
    const random3 = Math.floor(Math.random() * teamGen3.length);
    const arrPosition3 = [6, 14, 22, 30, 38, 46, 54, 62];
    const position3 = Math.floor(Math.random() * arrPosition3.length);
    const positionedCharacter3 = new PositionedCharacter(teamGen3[random3], arrPosition3[position3]);

    const team4 = new Team(this.opHeroes);
    const teamGen4 = generateTeam(team4.characters, 3, 2);
    const random4 = Math.floor(Math.random() * teamGen4.length);
    const arrPosition4 = [7, 15, 23, 31, 39, 47, 55, 63];
    const position4 = Math.floor(Math.random() * arrPosition4.length);
    const positionedCharacter4 = new PositionedCharacter(teamGen4[random4], arrPosition4[position4]);

    this.gamePlay.redrawPositions([positionedCharacter1, positionedCharacter2, positionedCharacter3, positionedCharacter4]);
  
    //this.gamePlay.addCellEnterListener('ghghgh');
   //console.log(this.onCellEnter(4))
    this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    //let elem = document.querySelectorAll('.cell');
    //console.log(elem)
    let arr = []
    for(let i = 0; i < this.gamePlay.cells.length; i++) {
      if(this.gamePlay.cells[i].children.length !== 0) { 
        arr.push(this.gamePlay.cells[i])        
      }
    }
    console.log(arr)

    //for(let i = 0; i < arr.length; i++) {
      // arr[i].addEventListener('mouseover', (event) => {
      //   console.log('event.target')
      // }
      // let f = arr.find((item, idx) => idx == index)
      // console.log(f)
      // document.querySelector(`${arr[i]}`).addEventListener('mouseover', function() {
      //   console.log(this);
      // });
    //}

    //console.log('arr')
  }
 
  onCellClick(index) {
    // TODO: react to click
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
  }
}

// const eks1 = new GamePlay();
// eks1.addCellEnterListener('ghghgh');
// console.log(eks1.cellEnterListeners)