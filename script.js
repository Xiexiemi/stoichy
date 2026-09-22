/* =========================================================
   CHEMICAL QUEST
   BALANCE OF ELEMENTS
   RPG CHEMISTRY GAME
========================================================= */


/* =========================================================
   CHARACTER DATA
========================================================= */

const characters = {

    aria: {
        name: "ARIA",
        className: "THE OBSERVER"
    },

    nova: {
        name: "NOVA",
        className: "THE ANALYST"
    },

    rex: {
        name: "REX",
        className: "THE EXPERIMENTER"
    }

};


/* =========================================================
   WORLD DATA
   3 WORLDS
   5 LEVELS EACH
   EVERY LEVEL HAS A DIFFERENT ENEMY
========================================================= */

const worlds = [

    {
        name: "LABORATORY RUINS",

        story:
            "The abandoned laboratory has been overrun by unstable reaction creatures. Begin with simple equations and restore the first chamber.",

        reward: 100,

        levels: [

            {
                enemy: "ATOM SLIME",
                sprite: "🧪",

                dialogue:
                    "My atoms are all over the place!",

                equation:
                    "H₂ + O₂ → H₂O",

                coefficients:
                    [2, 1, 2],

                hint:
                    "Start by balancing hydrogen, then check oxygen."
            },

            {
                enemy: "OXYGEN WISP",
                sprite: "💨",

                dialogue:
                    "Can you make both sides contain the same atoms?",

                equation:
                    "Mg + O₂ → MgO",

                coefficients:
                    [2, 1, 2],

                hint:
                    "Oxygen appears as O₂ on the reactant side."
            },

            {
                enemy: "IRON GOLEM",
                sprite: "🤖",

                dialogue:
                    "Iron will not fall until the equation is balanced!",

                equation:
                    "Fe + O₂ → Fe₂O₃",

                coefficients:
                    [4, 3, 2],

                hint:
                    "Balance Fe and O using the smallest whole numbers."
            },

            {
                enemy: "HYDROGEN SPRITE",
                sprite: "🔥",

                dialogue:
                    "The flame grows when the atoms are unequal!",

                equation:
                    "H₂ + Cl₂ → HCl",

                coefficients:
                    [1, 1, 2],

                hint:
                    "There are two H atoms and two Cl atoms on the left."
            },

            {
                enemy: "CARBON BEAST",
                sprite: "🐲",

                dialogue:
                    "Defeat me by balancing combustion!",

                equation:
                    "C + O₂ → CO₂",

                coefficients:
                    [1, 1, 1],

                hint:
                    "Count carbon and oxygen on both sides."
            }

        ]

    },


    {
        name: "MOLECULAR FOREST",

        story:
            "Beyond the laboratory lies the Molecular Forest. More complicated reactions guard the path. Use conservation of atoms to continue.",

        reward: 200,

        levels: [

            {
                enemy: "MOLECULE MIMIC",
                sprite: "👾",

                dialogue:
                    "I can copy molecules, but can you balance them?",

                equation:
                    "Na + Cl₂ → NaCl",

                coefficients:
                    [2, 1, 2],

                hint:
                    "Cl₂ contains two chlorine atoms."
            },

            {
                enemy: "CALCIUM WARRIOR",
                sprite: "⚔️",

                dialogue:
                    "My shield is made of calcium!",

                equation:
                    "Ca + O₂ → CaO",

                coefficients:
                    [2, 1, 2],

                hint:
                    "Match the two oxygen atoms first."
            },

            {
                enemy: "WATER SPIRIT",
                sprite: "💧",

                dialogue:
                    "Water flows where the atoms are balanced!",

                equation:
                    "H₂ + O₂ → H₂O",

                coefficients:
                    [2, 1, 2],

                hint:
                    "Use 2 H₂O to create two oxygen atoms."
            },

            {
                enemy: "NITROGEN HAWK",
                sprite: "🦅",

                dialogue:
                    "Nitrogen atoms will not be separated!",

                equation:
                    "N₂ + H₂ → NH₃",

                coefficients:
                    [1, 3, 2],

                hint:
                    "Try balancing nitrogen first."
            },

            {
                enemy: "MAGNESIUM DRAGON",
                sprite: "🐉",

                dialogue:
                    "Only a balanced reaction can defeat me!",

                equation:
                    "Mg + HCl → MgCl₂ + H₂",

                coefficients:
                    [1, 2, 1, 1],

                hint:
                    "There are two chlorine atoms in MgCl₂."
            }

        ]

    },


    {
        name: "ALCHEMIST'S CITADEL",

        story:
            "You have reached the Alchemist's Citadel. The final guardians protect the Balance Core. Only precise chemical equations can defeat them.",

        reward: 300,

        levels: [

            {
                enemy: "SULFUR KNIGHT",
                sprite: "🛡️",

                dialogue:
                    "The citadel recognizes only perfect balance!",

                equation:
                    "S + O₂ → SO₂",

                coefficients:
                    [1, 1, 1],

                hint:
                    "One sulfur and two oxygen atoms are needed."
            },

            {
                enemy: "CARBON HYDRA",
                sprite: "🐲",

                dialogue:
                    "Three atoms? Four? Count carefully!",

                equation:
                    "CH₄ + O₂ → CO₂ + H₂O",

                coefficients:
                    [1, 2, 1, 2],

                hint:
                    "Balance carbon first, then hydrogen, then oxygen."
            },

            {
                enemy: "ALUMINUM TITAN",
                sprite: "👹",

                dialogue:
                    "My metal armor is difficult to balance!",

                equation:
                    "Al + O₂ → Al₂O₃",

                coefficients:
                    [4, 3, 2],

                hint:
                    "Find a common number for oxygen atoms."
            },

            {
                enemy: "PROPANE DEMON",
                sprite: "👿",

                dialogue:
                    "Combustion will be your final challenge!",

                equation:
                    "C₃H₈ + O₂ → CO₂ + H₂O",

                coefficients:
                    [1, 5, 3, 4],

                hint:
                    "Balance C, then H, then O."
            },

            {
                enemy: "THE BALANCE CORE",
                sprite: "💠",

                dialogue:
                    "I am the final guardian. Prove that matter is conserved!",

                equation:
                    "Fe₂O₃ + CO → Fe + CO₂",

                coefficients:
                    [1, 3, 2, 3],

                hint:
                    "Balance Fe first, then carbon monoxide and oxygen."
            }

        ]

    }

];


/* =========================================================
   GAME VARIABLES
========================================================= */

let selectedCharacter = null;

let selectedCharacterId = null;

let currentWorld = 0;

let currentLevel = 0;

let lives = 3;

let totalXP = 0;

let isProcessing = false;


/* =========================================================
   SCREEN ELEMENTS
========================================================= */

const startScreen =
    document.getElementById("startScreen");

const characterScreen =
    document.getElementById("characterScreen");

const gameScreen =
    document.getElementById("gameScreen");

const worldCompleteScreen =
    document.getElementById("worldCompleteScreen");

const gameOverScreen =
    document.getElementById("gameOverScreen");

const victoryScreen =
    document.getElementById("victoryScreen");


/* =========================================================
   SCREEN FUNCTION
========================================================= */

function showScreen(screen) {

    document
        .querySelectorAll(".screen")
        .forEach(element => {

            element.classList.remove("active");

        });

    screen.classList.add("active");

}


/* =========================================================
   START BUTTON
========================================================= */

document
    .getElementById("startButton")
    .addEventListener("click", () => {

        showScreen(characterScreen);

    });


/* =========================================================
   CHARACTER SELECTION
========================================================= */

document
    .querySelectorAll(".select-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const id =
                button.dataset.character;

            selectedCharacter =
                characters[id];

            selectedCharacterId =
                id;


            /*
               Get the image directly from the
               working HTML character card.

               This avoids the broken Windows path
               problem in JavaScript.
            */

            const card =
                document.querySelector(
                    `.character-card[data-character="${id}"]`
                );

            const image =
                card.querySelector(
                    ".character-image"
                );


            /*
               Make sure the image has already
               been processed before entering
               the game.
            */

            prepareCharacterImage(
                image,
                () => {

                    startGame();

                }
            );

        });

    });


/* =========================================================
   START GAME
========================================================= */

function startGame() {

    currentWorld = 0;

    currentLevel = 0;

    lives = 3;

    totalXP = 0;

    updateCharacter();

    updateLives();

    loadWorld();

    showScreen(gameScreen);

}


/* =========================================================
   UPDATE CHARACTER
========================================================= */

function updateCharacter() {

    document.getElementById(
        "playerName"
    ).textContent =
        selectedCharacter.name;


    document.getElementById(
        "battlePlayerName"
    ).textContent =
        selectedCharacter.name;


    /*
       Find the original character image
       from the selection card.
    */

    const card =
        document.querySelector(
            `.character-card[data-character="${selectedCharacterId}"]`
        );


    if (!card) {
        return;
    }


    const sourceImage =
        card.querySelector(
            ".character-image"
        );


    if (!sourceImage) {
        return;
    }


    /*
       IMPORTANT:
       Use the image that is already working
       in the HTML character selection.

       It may already be a transparent cropped
       PNG generated by our canvas function.
    */

    const imageSource =
        sourceImage.currentSrc ||
        sourceImage.src;


    const playerAvatar =
        document.getElementById(
            "playerAvatar"
        );


    const battleCharacter =
        document.getElementById(
            "battleCharacter"
        );


    playerAvatar.src =
        imageSource;


    battleCharacter.src =
        imageSource;


    /*
       Reset processing flags on the
       game images.
    */

    playerAvatar.classList.remove(
        "player-image-error"
    );

    battleCharacter.classList.remove(
        "player-image-error"
    );

}


/* =========================================================
   LOAD WORLD
========================================================= */

function loadWorld() {

    const world =
        worlds[currentWorld];

    currentLevel = 0;


    document.getElementById(
        "worldNumber"
    ).textContent =
        `WORLD ${currentWorld + 1}`;


    document.getElementById(
        "worldName"
    ).textContent =
        world.name;


    document.getElementById(
        "levelTotal"
    ).textContent =
        world.levels.length;


    loadLevel();

}


/* =========================================================
   LOAD LEVEL
========================================================= */

function loadLevel() {

    const world =
        worlds[currentWorld];

    const level =
        world.levels[currentLevel];


    isProcessing = false;


    document.getElementById(
        "levelNumber"
    ).textContent =
        currentLevel + 1;


    document.getElementById(
        "enemyWorld"
    ).textContent =
        `WORLD ${currentWorld + 1} ENEMY`;


    document.getElementById(
        "enemyName"
    ).textContent =
        level.enemy;


    document.getElementById(
        "enemySprite"
    ).textContent =
        level.sprite;


    document.getElementById(
        "enemyDialogue"
    ).textContent =
        `"${level.dialogue}"`;


    document.getElementById(
        "equation"
    ).textContent =
        level.equation;


    document.getElementById(
        "storyText"
    ).textContent =
        levelHintStory(level);


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.textContent = "";

    feedback.className =
        "feedback";


    document.getElementById(
        "enemyHp"
    ).style.width =
        "100%";


    document.getElementById(
        "attackButton"
    ).disabled =
        false;


    updateProgress();


    createInputs(
        level.coefficients.length
    );

}


/* =========================================================
   LEVEL STORY
========================================================= */

function levelHintStory(level) {

    return `
        ${selectedCharacter.name} encounters
        the ${level.enemy}.
        Balance the reaction to launch a chemical attack.
    `;

}


/* =========================================================
   PROGRESS
========================================================= */

function updateProgress() {

    const world =
        worlds[currentWorld];


    const percent =
        (
            (currentLevel + 1) /
            world.levels.length
        ) * 100;


    document.getElementById(
        "progressFill"
    ).style.width =
        `${percent}%`;

}


/* =========================================================
   CREATE COEFFICIENT INPUTS
========================================================= */

function createInputs(count) {

    const container =
        document.getElementById(
            "coefficientInputs"
        );


    container.innerHTML = "";


    for (
        let i = 0;
        i < count;
        i++
    ) {

        const input =
            document.createElement(
                "input"
            );


        input.type =
            "number";

        input.min =
            "1";

        input.max =
            "99";

        input.className =
            "coefficient-input";

        input.placeholder =
            "?";


        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    checkAnswer();

                }

            }
        );


        container.appendChild(
            input
        );

    }


    const first =
        container.querySelector(
            "input"
        );


    if (first) {

        setTimeout(
            () => first.focus(),
            100
        );

    }

}


/* =========================================================
   CHECK ANSWER
========================================================= */

document
    .getElementById("attackButton")
    .addEventListener(
        "click",
        checkAnswer
    );


function checkAnswer() {

    if (isProcessing) {
        return;
    }


    const level =
        worlds[currentWorld]
            .levels[currentLevel];


    const inputs =
        document.querySelectorAll(
            ".coefficient-input"
        );


    const answer =
        Array
            .from(inputs)
            .map(input =>
                Number(input.value)
            );


    const correct =
        level.coefficients;


    const isCorrect =
        answer.length ===
        correct.length
        &&
        answer.every(
            (value, index) =>
                value === correct[index]
        );


    if (isCorrect) {

        correctAnswer();

    } else {

        incorrectAnswer();

    }

}


/* =========================================================
   CORRECT ANSWER
========================================================= */

function correctAnswer() {

    isProcessing = true;


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.textContent =
        "✓ BALANCED! CHEMICAL ATTACK!";


    feedback.className =
        "feedback correct";


    const earnedXP =
        25 +
        (currentWorld * 10);


    totalXP +=
        earnedXP;


    document.getElementById(
        "xpValue"
    ).textContent =
        totalXP;


    const enemy =
        document.getElementById(
            "enemySprite"
        );


    enemy.classList.remove(
        "enemy-hit"
    );


    void enemy.offsetWidth;


    enemy.classList.add(
        "enemy-hit"
    );


    document.getElementById(
        "enemyHp"
    ).style.width =
        "0%";


    document.getElementById(
        "attackButton"
    ).disabled =
        true;


    setTimeout(
        nextLevel,
        900
    );

}


/* =========================================================
   INCORRECT ANSWER
========================================================= */

function incorrectAnswer() {

    lives--;


    updateLives();


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.textContent =
        "✗ UNBALANCED! THE ENEMY ATTACKS!";


    feedback.className =
        "feedback incorrect";


    const player =
        document.getElementById(
            "battleCharacter"
        );


    player.classList.remove(
        "player-hit"
    );


    void player.offsetWidth;


    player.classList.add(
        "player-hit"
    );


    if (lives <= 0) {

        setTimeout(
            () => {

                showScreen(
                    gameOverScreen
                );

            },
            700
        );

    }

}


/* =========================================================
   NEXT LEVEL
========================================================= */

function nextLevel() {

    const world =
        worlds[currentWorld];


    currentLevel++;


    if (
        currentLevel >=
        world.levels.length
    ) {

        completeWorld();

        return;

    }


    loadLevel();

}


/* =========================================================
   COMPLETE WORLD
========================================================= */

function completeWorld() {

    const world =
        worlds[currentWorld];


    totalXP +=
        world.reward;


    document.getElementById(
        "worldXP"
    ).textContent =
        `+${world.reward} XP`;


    document.getElementById(
        "completeWorldName"
    ).textContent =
        world.name;


    document.getElementById(
        "completeMessage"
    ).textContent =
        `${selectedCharacter.name} cleared all five levels of ${world.name}!`;


    document.getElementById(
        "xpValue"
    ).textContent =
        totalXP;


    showScreen(
        worldCompleteScreen
    );

}


/* =========================================================
   NEXT WORLD
========================================================= */

document
    .getElementById(
        "nextWorldButton"
    )
    .addEventListener(
        "click",
        () => {

            currentWorld++;


            if (
                currentWorld >=
                worlds.length
            ) {

                finishGame();

                return;

            }


            currentLevel = 0;


            showScreen(
                gameScreen
            );


            loadWorld();

        }
    );


/* =========================================================
   UPDATE LIVES
========================================================= */

function updateLives() {

    const hearts =
        document.querySelectorAll(
            ".heart"
        );


    hearts.forEach(
        (heart, index) => {

            if (
                index < lives
            ) {

                heart.classList.remove(
                    "lost"
                );

            } else {

                heart.classList.add(
                    "lost"
                );

            }

        }
    );

}


/* =========================================================
   HINT
========================================================= */

document
    .getElementById(
        "hintButton"
    )
    .addEventListener(
        "click",
        showHint
    );


function showHint() {

    const level =
        worlds[currentWorld]
            .levels[currentLevel];


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.textContent =
        `💡 HINT: ${level.hint}`;


    feedback.className =
        "feedback";

}


/* =========================================================
   RETRY
========================================================= */

document
    .getElementById(
        "retryButton"
    )
    .addEventListener(
        "click",
        () => {

            lives = 3;

            currentLevel = 0;

            updateLives();

            loadWorld();

            showScreen(
                gameScreen
            );

        }
    );


/* =========================================================
   CHANGE CHARACTER
========================================================= */

document
    .getElementById(
        "characterReturnButton"
    )
    .addEventListener(
        "click",
        () => {

            showScreen(
                characterScreen
            );

        }
    );


/* =========================================================
   FINAL VICTORY
========================================================= */

function finishGame() {

    document.getElementById(
        "finalXP"
    ).textContent =
        totalXP;


    showScreen(
        victoryScreen
    );

}


/* =========================================================
   RESTART
========================================================= */

document
    .getElementById(
        "restartButton"
    )
    .addEventListener(
        "click",
        () => {

            selectedCharacter = null;

            selectedCharacterId = null;

            currentWorld = 0;

            currentLevel = 0;

            lives = 3;

            totalXP = 0;


            showScreen(
                startScreen
            );

        }
    );


/* =========================================================
   WHITE BACKGROUND REMOVER
=========================================================

   Removes the connected white background
   surrounding the character.

   The important part is that it DOES NOT
   simply remove every white pixel.

   It starts from the edges and removes only
   white pixels connected to the outside.

   Therefore white areas belonging to the
   laboratory coat can remain.

   It also crops the image around the actual
   character so the character fills the frame.
========================================================= */

function prepareCharacterImage(img, callback) {

    if (!img) {

        if (callback) {
            callback();
        }

        return;

    }


    /*
       Already processed.
    */

    if (
        img.dataset.processed === "true"
    ) {

        if (callback) {
            callback(
                img.currentSrc ||
                img.src
            );
        }

        return;

    }


    /*
       Image has not finished loading.
    */

    if (
        !img.complete ||
        !img.naturalWidth
    ) {

        img.addEventListener(
            "load",
            () => {

                prepareCharacterImage(
                    img,
                    callback
                );

            },
            {
                once: true
            }
        );

        return;

    }


    const width =
        img.naturalWidth;


    const height =
        img.naturalHeight;


    const canvas =
        document.createElement(
            "canvas"
        );


    canvas.width =
        width;


    canvas.height =
        height;


    const ctx =
        canvas.getContext(
            "2d",
            {
                willReadFrequently: true
            }
        );


    try {

        ctx.drawImage(
            img,
            0,
            0,
            width,
            height
        );

    } catch (error) {

        console.warn(
            "Could not process character image.",
            error
        );


        if (callback) {
            callback(
                img.currentSrc ||
                img.src
            );
        }

        return;

    }


    let imageData;


    try {

        imageData =
            ctx.getImageData(
                0,
                0,
                width,
                height
            );

    } catch (error) {

        console.warn(
            "Browser blocked image processing.",
            error
        );


        if (callback) {
            callback(
                img.currentSrc ||
                img.src
            );
        }

        return;

    }


    const data =
        imageData.data;


    /*
       Determines whether a pixel is
       close enough to white to be considered
       background.
    */

    function isBackgroundWhite(index) {

        const r =
            data[index];

        const g =
            data[index + 1];

        const b =
            data[index + 2];


        return (
            r >= 238 &&
            g >= 238 &&
            b >= 238
        );

    }


    const visited =
        new Uint8Array(
            width * height
        );


    const queue = [];


    function addPixel(x, y) {

        if (
            x < 0 ||
            x >= width ||
            y < 0 ||
            y >= height
        ) {

            return;

        }


        const position =
            y * width + x;


        if (
            visited[position]
        ) {

            return;

        }


        visited[position] =
            1;


        const pixel =
            position * 4;


        if (
            !isBackgroundWhite(
                pixel
            )
        ) {

            return;

        }


        queue.push(position);

    }


    /*
       Start from all four edges.
    */

    for (
        let x = 0;
        x < width;
        x++
    ) {

        addPixel(x, 0);

        addPixel(
            x,
            height - 1
        );

    }


    for (
        let y = 0;
        y < height;
        y++
    ) {

        addPixel(0, y);

        addPixel(
            width - 1,
            y
        );

    }


    /*
       Flood-fill the white background.
    */

    let pointer = 0;


    while (
        pointer <
        queue.length
    ) {

        const position =
            queue[pointer++];


        const x =
            position % width;


        const y =
            Math.floor(
                position / width
            );


        addPixel(
            x + 1,
            y
        );

        addPixel(
            x - 1,
            y
        );

        addPixel(
            x,
            y + 1
        );

        addPixel(
            x,
            y - 1
        );

    }


    /*
       Make only the outside background
       transparent.
    */

    for (
        const position of queue
    ) {

        const pixel =
            position * 4;


        data[pixel + 3] =
            0;

    }


    ctx.putImageData(
        imageData,
        0,
        0
    );


    /*
       Find the visible character boundaries.
    */

    const finalData =
        ctx.getImageData(
            0,
            0,
            width,
            height
        ).data;


    let minX = width;

    let minY = height;

    let maxX = -1;

    let maxY = -1;


    for (
        let y = 0;
        y < height;
        y++
    ) {

        for (
            let x = 0;
            x < width;
            x++
        ) {

            const pixel =
                (y * width + x) * 4;


            const alpha =
                finalData[
                    pixel + 3
                ];


            if (
                alpha > 20
            ) {

                if (x < minX) {
                    minX = x;
                }

                if (x > maxX) {
                    maxX = x;
                }

                if (y < minY) {
                    minY = y;
                }

                if (y > maxY) {
                    maxY = y;
                }

            }

        }

    }


    /*
       Nothing detected.
    */

    if (
        maxX < 0 ||
        maxY < 0
    ) {

        if (callback) {
            callback(
                img.currentSrc ||
                img.src
            );
        }

        return;

    }


    /*
       Small padding around character.
    */

    const padding =
        Math.max(
            4,
            Math.round(
                Math.min(
                    width,
                    height
                ) * 0.02
            )
        );


    minX =
        Math.max(
            0,
            minX - padding
        );


    minY =
        Math.max(
            0,
            minY - padding
        );


    maxX =
        Math.min(
            width - 1,
            maxX + padding
        );


    maxY =
        Math.min(
            height - 1,
            maxY + padding
        );


    const cropWidth =
        maxX - minX + 1;


    const cropHeight =
        maxY - minY + 1;


    const croppedCanvas =
        document.createElement(
            "canvas"
        );


    croppedCanvas.width =
        cropWidth;


    croppedCanvas.height =
        cropHeight;


    const croppedCtx =
        croppedCanvas.getContext(
            "2d"
        );


    croppedCtx.drawImage(
        canvas,

        minX,
        minY,

        cropWidth,
        cropHeight,

        0,
        0,

        cropWidth,
        cropHeight
    );


    /*
       Replace original image with
       processed transparent PNG.
    */

    try {

        img.src =
            croppedCanvas.toDataURL(
                "image/png"
            );


        img.dataset.processed =
            "true";


    } catch (error) {

        console.warn(
            "Could not create transparent PNG.",
            error
        );

    }


    if (callback) {

        callback(
            img.currentSrc ||
            img.src
        );

    }

}


/* =========================================================
   PROCESS ALL CHARACTER SELECTION IMAGES
========================================================= */

function processSelectionImages() {

    document
        .querySelectorAll(
            ".character-image"
        )
        .forEach(
            image => {

                prepareCharacterImage(
                    image
                );

            }
        );

}


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

document
    .getElementById("playerAvatar")
    .addEventListener(
        "error",
        function () {

            this.classList.add(
                "player-image-error"
            );

        }
    );


document
    .getElementById("battleCharacter")
    .addEventListener(
        "error",
        function () {

            this.classList.add(
                "player-image-error"
            );

        }
    );


/* =========================================================
   INITIALIZE
========================================================= */

window.addEventListener(
    "load",
    () => {

        processSelectionImages();

    }
);