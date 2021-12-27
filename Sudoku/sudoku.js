let sudoku = [];
    for(let i = 0; i < 9; i++){
        sudoku[i] = [];
        for(let j = 0; j < 9; j++){
            sudoku[i][j] = null;
        }
    }

let currCell = "";
function testFunc(){
    
    sudoku[0][0] = document.getElementById("00").innerHTML;
    sudoku[0][1] = document.getElementById("01").innerHTML;
    sudoku[0][2] = document.getElementById("02").innerHTML;
    sudoku[0][3] = document.getElementById("03").innerHTML;
    sudoku[0][4] = document.getElementById("04").innerHTML;
    sudoku[0][5] = document.getElementById("05").innerHTML;
    sudoku[0][6] = document.getElementById("06").innerHTML;
    sudoku[0][7] = document.getElementById("07").innerHTML;
    sudoku[0][8] = document.getElementById("08").innerHTML;

    sudoku[1][0] = document.getElementById("10").innerHTML;
    sudoku[1][1] = document.getElementById("11").innerHTML;
    sudoku[1][2] = document.getElementById("12").innerHTML;
    sudoku[1][3] = document.getElementById("13").innerHTML;
    sudoku[1][4] = document.getElementById("14").innerHTML;
    sudoku[1][5] = document.getElementById("15").innerHTML;
    sudoku[1][6] = document.getElementById("16").innerHTML;
    sudoku[1][7] = document.getElementById("17").innerHTML;
    sudoku[1][8] = document.getElementById("18").innerHTML;

    sudoku[2][0] = document.getElementById("20").innerHTML;
    sudoku[2][1] = document.getElementById("21").innerHTML;
    sudoku[2][2] = document.getElementById("22").innerHTML;
    sudoku[2][3] = document.getElementById("23").innerHTML;
    sudoku[2][4] = document.getElementById("24").innerHTML;
    sudoku[2][5] = document.getElementById("25").innerHTML;
    sudoku[2][6] = document.getElementById("26").innerHTML;
    sudoku[2][7] = document.getElementById("27").innerHTML;
    sudoku[2][8] = document.getElementById("28").innerHTML;

    sudoku[3][0] = document.getElementById("30").innerHTML;
    sudoku[3][1] = document.getElementById("31").innerHTML;
    sudoku[3][2] = document.getElementById("32").innerHTML;
    sudoku[3][3] = document.getElementById("33").innerHTML;
    sudoku[3][4] = document.getElementById("34").innerHTML;
    sudoku[3][5] = document.getElementById("35").innerHTML;
    sudoku[3][6] = document.getElementById("36").innerHTML;
    sudoku[3][7] = document.getElementById("37").innerHTML;
    sudoku[3][8] = document.getElementById("38").innerHTML;

    sudoku[4][0] = document.getElementById("40").innerHTML;
    sudoku[4][1] = document.getElementById("41").innerHTML;
    sudoku[4][2] = document.getElementById("42").innerHTML;
    sudoku[4][3] = document.getElementById("43").innerHTML;
    sudoku[4][4] = document.getElementById("44").innerHTML;
    sudoku[4][5] = document.getElementById("45").innerHTML;
    sudoku[4][6] = document.getElementById("46").innerHTML;
    sudoku[4][7] = document.getElementById("47").innerHTML;
    sudoku[4][8] = document.getElementById("48").innerHTML;

    sudoku[5][0] = document.getElementById("50").innerHTML;
    sudoku[5][1] = document.getElementById("51").innerHTML;
    sudoku[5][2] = document.getElementById("52").innerHTML;
    sudoku[5][3] = document.getElementById("53").innerHTML;
    sudoku[5][4] = document.getElementById("54").innerHTML;
    sudoku[5][5] = document.getElementById("55").innerHTML;
    sudoku[5][6] = document.getElementById("56").innerHTML;
    sudoku[5][7] = document.getElementById("57").innerHTML;
    sudoku[5][8] = document.getElementById("58").innerHTML;

    sudoku[6][0] = document.getElementById("60").innerHTML;
    sudoku[6][1] = document.getElementById("61").innerHTML;
    sudoku[6][2] = document.getElementById("62").innerHTML;
    sudoku[6][3] = document.getElementById("63").innerHTML;
    sudoku[6][4] = document.getElementById("64").innerHTML;
    sudoku[6][5] = document.getElementById("65").innerHTML;
    sudoku[6][6] = document.getElementById("66").innerHTML;
    sudoku[6][7] = document.getElementById("67").innerHTML;
    sudoku[6][8] = document.getElementById("68").innerHTML;

    sudoku[7][0] = document.getElementById("70").innerHTML;
    sudoku[7][1] = document.getElementById("71").innerHTML;
    sudoku[7][2] = document.getElementById("72").innerHTML;
    sudoku[7][3] = document.getElementById("73").innerHTML;
    sudoku[7][4] = document.getElementById("74").innerHTML;
    sudoku[7][5] = document.getElementById("75").innerHTML;
    sudoku[7][6] = document.getElementById("76").innerHTML;
    sudoku[7][7] = document.getElementById("77").innerHTML;
    sudoku[7][8] = document.getElementById("78").innerHTML;

    sudoku[8][0] = document.getElementById("80").innerHTML;
    sudoku[8][1] = document.getElementById("81").innerHTML;
    sudoku[8][2] = document.getElementById("82").innerHTML;
    sudoku[8][3] = document.getElementById("83").innerHTML;
    sudoku[8][4] = document.getElementById("84").innerHTML;
    sudoku[8][5] = document.getElementById("85").innerHTML;
    sudoku[8][6] = document.getElementById("86").innerHTML;
    sudoku[8][7] = document.getElementById("87").innerHTML;
    sudoku[8][8] = document.getElementById("88").innerHTML;
    /*
    myArr[0][0] = 9;
    document.getElementById("00").innerHTML = myArr[0][0]*/
    //alert(document.getElementById("00").innerHTML);
    //alert(getPossibilities(myArr, 0, 0));
    //getPossibilities(myArr, 0, 0);
    if(validate(sudoku) == true){
        solve(0, 0, false);
    }
    else{
        alert("Invalid Sudoku");
    }
    //alert(myArr);
}

function testFunction(){
    //alert("Hi");
}

function getCell(yx){
    currCell =  String(yx);
    alert(currCell); 

}

function delayDisplay(y, x, val){
    
}

function validate(board){
    let squareSet = new Set();
    let rowSet = new Set();
    let columnSet = new Set();
    //First row
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                if(squareSet.has(board[i][j]) == true){
                    return false;
                }
                    squareSet.add(board[i][j]);
                }
            }
        }
        
        squareSet.clear();
        for(let i = 0; i < 3; i++){
            for(let j = 3; j < 6; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        for(let i = 0; i < 3; i++){
            for(let j = 6; j < 9; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        
        
        //SECOND ROW OF SQUARES
        for(let i = 3; i < 6; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        for(let i = 3; i < 6; i++){
            for(let j = 3; j < 6; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        for(let i = 3; i < 6; i++){
            for(let j = 6; j < 9; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        
        
        //THIRD ROW OF SQUARES
        for(let i = 6; i < 9; i++){
            for(let j = 0; j < 3; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        for(let i = 6; i < 9; i++){
            for(let j = 3; j < 6; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        for(let i = 6; i < 9; i++){
            for(let j = 6; j < 9; j++){
                if(board[i][j] != 0){//If overlaps with other cell value in 3by3
                    if(squareSet.has(board[i][j]) == true){
                        return false;
                    }
                    squareSet.add(board[i][j]);
                }
            }
        }
        squareSet.clear();
        
       //CHECKING ROWS AND COLUMNS
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] != 0){
                    if(rowSet.has(board[i][j]) == true){
                        return false;
                    }
                    rowSet.add(board[i][j]);
                }
                if(board[j][i] != 0){
                    if(columnSet.has(board[j][i]) == true){
                        return false;
                    }
                    columnSet.add(board[j][i]);
                }
            }
            rowSet.clear();
            columnSet.clear();
        }
        
        return true;
}

function solve(y, x, solved){
    let possibleVect = [];
    let tempString = String(y)+String(x); 
    if (x == 8 && y == 8 && sudoku[y][x] == 0) {
        possibleVect = getPossibilities(y, x);
        sudoku[y][x] = possibleVect[0];
        document.getElementById(tempString).innerHTML = sudoku[y][x];
        solved = true;
        return;
    }
    if (y == 8 && x == 8) {
        solved = true;
        return;
    }
    if (sudoku[y][x] != 0) { 
        if (x < 8) {
            solve(y, x + 1, solved);
        }
        else if (x == 8) {
            solve(y + 1, 0, solved);
        }
    }
    else {
        possibleVect = getPossibilities(y, x);
        if (possibleVect.length == 0) {
            return;
        }
        
        
        for (let i = 0; i < possibleVect.length; i++) {
            if (solved == true) {
                return;
            }
            sudoku[y][x] = possibleVect[i];
            document.getElementById(tempString).innerHTML = possibleVect[i];
            if (x < 8) {
                //await delayTime(500);
                solve(y, x+1, solved);
            }
            else if (x == 8) {
                //await delayTime(500);
                solve(y + 1, 0, solved);
            }
        }
        if (solved == false) {
            sudoku[y][x] = 0;
            document.getElementById(tempString).innerHTML = possibleVect[i];
        }
    }
}


function getPossibilities(y, x){
    let possibleSet = new Set();
    let possibleArr = [1,2,3,4,5,6,7,8,9];
    if (y <= 2 && x <= 2) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 0; j <= 2; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    else if (y <= 2 && x <= 5) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 3; j <= 5; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    else if (y <= 2 && x <= 8) {
        for (let i = 0; i <= 2; i++) {
            for (let j = 6; j <= 8; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }


    //Middle row
    else if (y <= 5 && x <= 2) {
        for (let i = 3; i <= 5; i++) {
            for (let j = 0; j <= 2; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    else if (y <= 5 && x <= 5) {
        for (let i = 3; i <= 5; i++) {
            for (let j = 3; j <= 5; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    else if (y <= 5 && x <= 8) {
        for (let i = 3; i <= 5; i++) {
            for (let j = 6; j <= 8; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    //Bottom row
    else if (y <= 8 && x <= 2) {
        for (let i = 6; i <= 8; i++) {
            for (let j = 0; j <= 2; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    else if (y <= 8 && x <= 5) {
        for (let i = 6; i <= 8; i++) {
            for (let j = 3; j <= 5; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    else if (y <= 8 && x <= 8) {
        for (let i = 6; i <= 8; i++) {
            for (let j = 6; j <= 8; j++) {
                if (sudoku[i][j] != 0) {
                    possibleSet.add(sudoku[i][j]);
                }
            }
        }
    }

    //Get column
    for (let i = 0; i < 9; i++) {
        if (sudoku[i][x] != 0) {
            possibleSet.add(sudoku[i][x]);
        }
    }

    //Get row
    for (let i = 0; i < 9; i++) {
        if (sudoku[y][i] != 0) {
            possibleSet.add(sudoku[y][i]);
        }
    }
    /*
    possibleSet.forEach(num =>{
        alert(num);
    });*/
    //alert(possibleArr);
    possibleSet.forEach(num =>{
        let index = possibleArr.indexOf(parseInt(num, 10));
        //alert(index);
        if(index > -1){
            possibleArr.splice(index, 1);
            //alert(num);
        }
        
    });
    //alert(possibleArr);
    return possibleArr;
}