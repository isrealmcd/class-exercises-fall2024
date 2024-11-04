import { helloWorld, rps } from "./your-task.js";
import { assertPrint, runAllTests } from "./helpers.js";

function testHelloWorld() {
    return assertPrint(
        helloWorld() === "Hello world!",
        'it returns "Hello world!"',
    );
}

function testPaperBeatsRock() {
    return assertPrint(
        rps("rock", "paper") === "Paper wins!",
        "paper beats rock",
    );
}

function testPaperBeatsRockCommutes() {
    return assertPrint(
        rps("paper", "rock") === "Paper wins!",
        "paper beats rock (flipped)",
    );
}

// add more test functions here to exhaustively test your rps function...

function testScissorsBeatsPaper() {
    return assertPrint(
        rps("paper", "scissors") === "Scissors wins!",
        "scissors beats paper",
    );
}

function testScissorsBeatsPaperCommutes() {
    return assertPrint(
        rps("scissors", "paper") === "Scissors wins!",
        "scissors beats paper (flipped)",
    );
}

function testRockBeatsScissors() {
    return assertPrint(
        rps("scissors", "rock") === "Rock wins!",
        "rock beats scissors",
    );
}

function testRockBeatsScissorsCommutes() {
    return assertPrint(
        rps("rock", "scissors") === "Rock wins!",
        "rock beats scissors (flipped)",
    );
}

function testTieRock() {
    return assertPrint(rps("rock", "rock") === "Tie!", "rock vs rock is a tie");
}

function testTiePaper() {
    return assertPrint(
        rps("paper", "paper") === "Tie!",
        "paper vs paper is a tie",
    );
}

function testTieScissors() {
    return assertPrint(
        rps("scissors", "scissors") === "Tie!",
        "scissors vs scissors is a tie",
    );
}

function testInvalidInput() {
    return assertPrint(rps("rock", "invalid") === "Invalid", "invalid input");
}

// Once you have defined each test function, don't forget to
// add the function definition to the test harness:
runAllTests([
    testHelloWorld,
    testPaperBeatsRock,
    testPaperBeatsRockCommutes,
    testScissorsBeatsPaper,
    testScissorsBeatsPaperCommutes,
    testRockBeatsScissors,
    testRockBeatsScissorsCommutes,
    testTieRock,
    testTiePaper,
    testTieScissors,
    testInvalidInput,
]);
