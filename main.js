// JavaScript Document
let boardArray = [5, 6, 7, 8, 9, 10, 11, 12, 13];
let flag = 1;
let i = 0;
let player;
function generateMove(){
	let move = `${Math.floor(Math.random() * 8 )}`;
	console.log(`I just thought of ${move}!`);
	while (boardArray[move] < 3){
		console.log(`${move} was taken, trying another`);
		move = `${Math.floor(Math.random() * 8 )}`;
	}
	boardArray[move] = 2;
	return move;
}
	

function cpuMove(){
			let move = generateMove();
			console.log(move);
			document.getElementById("b" + `${move}`).value = 'o';
			document.getElementById("b" + `${move}`).disabled = true;
			boardArray[move] = 2;
	        console.log(`Placing it in ${boardArray[move]}`);
			console.log(boardArray);
			flag = 1;
			i++;
}

function checkConditions(){
	if(i < 8){
	cpuMove();
		if (boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
		if (boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
		if (boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
		if (boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
		if (boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
		if (boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
		if (boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
		if (boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6]){
			alert(`Congratulations, You win!`);
			i = 10;
			player = '';
		}
	}
	else if(i === 9){
	console.log(`It's a tie!`);
	}
			
	else if(i === 10){
		console.log(`Congratulations You win!`);
	}
		}
			
function applyMove(currentMove){
	document.getElementById("b" + `${currentMove}`).value = 'x';
	document.getElementById("b" + `${currentMove}`).disabled = true;
	boardArray[currentMove] = 1;
	i++;
	console.log(i);
	checkConditions();
}


