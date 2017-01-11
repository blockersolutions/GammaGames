var snake, apple, squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue, textStyle_Key, textStyle_Value,
    randomLocation, randomApple, wrongApple, timer, timerEvent, text, answerCorrect;

var Game = {


    preload: function () {
        // Here we load all the needed resources for the level.

        game.load.image('snake', './assets/images/snake.png');
        game.load.image('apple0', './assets/images/numbers/0.png');
        game.load.image('apple1', './assets/images/numbers/1.png');
        game.load.image('apple2', './assets/images/numbers/2.png');
        game.load.image('apple3', './assets/images/numbers/3.png');
        game.load.image('apple4', './assets/images/numbers/4.png');
        game.load.image('apple5', './assets/images/numbers/5.png');
        game.load.image('apple6', './assets/images/numbers/6.png');
        game.load.image('apple7', './assets/images/numbers/7.png');
        game.load.image('apple8', './assets/images/numbers/8.png');
        game.load.image('apple9', './assets/images/numbers/9.png');
        game.load.image('apple10', './assets/images/numbers/10.png');
        game.load.image('apple11', './assets/images/numbers/11.png');
        game.load.image('apple12', './assets/images/numbers/12.png');
        game.load.image('apple13', './assets/images/numbers/13.png');
        game.load.image('apple14', './assets/images/numbers/14.png');
        game.load.image('apple15', './assets/images/numbers/15.png');
        game.load.image('apple16', './assets/images/numbers/16.png');
        game.load.image('apple17', './assets/images/numbers/17.png');
        game.load.image('apple18', './assets/images/numbers/18.png');
        game.load.image('apple19', './assets/images/numbers/19.png');
        game.load.image('apple20', './assets/images/numbers/20.png');
        game.load.image('apple21', './assets/images/numbers/21.png');
        game.load.image('apple22', './assets/images/numbers/22.png');
        game.load.image('apple23', './assets/images/numbers/23.png');
        game.load.image('apple24', './assets/images/numbers/24.png');
        game.load.image('apple25', './assets/images/numbers/25.png');
        game.load.image('apple26', './assets/images/numbers/26.png');
        game.load.image('apple27', './assets/images/numbers/27.png');
        game.load.image('apple28', './assets/images/numbers/28.png');
        game.load.image('apple29', './assets/images/numbers/29.png');
        game.load.image('apple30', './assets/images/numbers/30.png');
        game.load.image('apple31', './assets/images/numbers/31.png');
        game.load.image('apple32', './assets/images/numbers/32.png');
        game.load.image('apple33', './assets/images/numbers/33.png');
        game.load.image('apple34', './assets/images/numbers/34.png');
        game.load.image('apple35', './assets/images/numbers/35.png');
        game.load.image('apple36', './assets/images/numbers/36.png');
        game.load.image('apple37', './assets/images/numbers/37.png');
        game.load.image('apple38', './assets/images/numbers/38.png');
        game.load.image('apple39', './assets/images/numbers/39.png');
        game.load.image('apple40', './assets/images/numbers/40.png');
        game.load.image('apple41', './assets/images/numbers/41.png');
        game.load.image('apple42', './assets/images/numbers/42.png');
        game.load.image('apple43', './assets/images/numbers/43.png');
        game.load.image('apple44', './assets/images/numbers/44.png');
        game.load.image('apple45', './assets/images/numbers/45.png');
        game.load.image('apple46', './assets/images/numbers/46.png');
        game.load.image('apple47', './assets/images/numbers/47.png');
        game.load.image('apple48', './assets/images/numbers/48.png');
        game.load.image('apple49', './assets/images/numbers/49.png');
        game.load.image('apple50', './assets/images/numbers/50.png');
        game.load.image('apple51', './assets/images/numbers/51.png');
        game.load.image('apple52', './assets/images/numbers/52.png');
        game.load.image('apple53', './assets/images/numbers/53.png');
        game.load.image('apple54', './assets/images/numbers/54.png');
        game.load.image('apple55', './assets/images/numbers/55.png');
        game.load.image('apple56', './assets/images/numbers/56.png');
        game.load.image('apple57', './assets/images/numbers/57.png');
        game.load.image('apple58', './assets/images/numbers/58.png');
        game.load.image('apple59', './assets/images/numbers/59.png');
        game.load.image('apple60', './assets/images/numbers/60.png');
        game.load.image('apple61', './assets/images/numbers/61.png');
        game.load.image('apple62', './assets/images/numbers/62.png');
        game.load.image('apple63', './assets/images/numbers/63.png');
        game.load.image('apple64', './assets/images/numbers/64.png');
        game.load.image('apple65', './assets/images/numbers/65.png');
        game.load.image('apple66', './assets/images/numbers/66.png');
        game.load.image('apple67', './assets/images/numbers/67.png');
        game.load.image('apple68', './assets/images/numbers/68.png');
        game.load.image('apple69', './assets/images/numbers/69.png');
        game.load.image('apple70', './assets/images/numbers/70.png');
        game.load.image('apple71', './assets/images/numbers/71.png');
        game.load.image('apple72', './assets/images/numbers/72.png');
        game.load.image('apple73', './assets/images/numbers/73.png');
        game.load.image('apple74', './assets/images/numbers/74.png');
        game.load.image('apple75', './assets/images/numbers/75.png');
        game.load.image('apple76', './assets/images/numbers/76.png');
        game.load.image('apple77', './assets/images/numbers/77.png');
        game.load.image('apple78', './assets/images/numbers/78.png');
        game.load.image('apple79', './assets/images/numbers/79.png');
        game.load.image('apple80', './assets/images/numbers/80.png');
        game.load.image('apple81', './assets/images/numbers/81.png');
        game.load.image('apple82', './assets/images/numbers/82.png');
        game.load.image('apple83', './assets/images/numbers/83.png');
        game.load.image('apple84', './assets/images/numbers/84.png');
        game.load.image('apple85', './assets/images/numbers/85.png');
        game.load.image('apple86', './assets/images/numbers/86.png');
        game.load.image('apple87', './assets/images/numbers/87.png');
        game.load.image('apple88', './assets/images/numbers/88.png');
        game.load.image('apple89', './assets/images/numbers/89.png');
        game.load.image('apple90', './assets/images/numbers/90.png');
        game.load.image('apple91', './assets/images/numbers/91.png');
        game.load.image('apple92', './assets/images/numbers/92.png');
        game.load.image('apple93', './assets/images/numbers/93.png');
        game.load.image('apple94', './assets/images/numbers/94.png');
        game.load.image('apple95', './assets/images/numbers/95.png');
        game.load.image('apple96', './assets/images/numbers/96.png');
        game.load.image('apple97', './assets/images/numbers/97.png');
        game.load.image('apple98', './assets/images/numbers/98.png');
        game.load.image('apple99', './assets/images/numbers/99.png');

    },

    create: function () {

        // By setting up global variables in the create function, we initialise them on game start.
        // We need them to be globally available so that the update function can alter them.

        snake = [];                     // This will work as a stack, containing the parts of our snake
        apple = {};                     // An object for the apple;
        squareSize = 15;                // The length of a side of the squares. Our image is 15x15 pixels.
        score = 0;                      // Game score.
        speed = 0;                      // Game speed.
        updateDelay = 0;                // A variable for control over update rates.
        direction = 'right';            // The direction of our snake.
        new_direction = null;           // A buffer to store the new direction into.
        addNew = false;                 // A variable used when an apple has been eaten.
        question = "";
        randomApple = {};
        randomNumber1 = 0;
        randomNumber2 = 0;
        questionAnswer = 0;
        answerCorrect = true;

        timer = game.time.create();

        // Create a delayed event 1m and 30s from now
        timerEvent = timer.add(Phaser.Timer.SECOND * 120, this.endTimer, this);

        // Start the timer
        timer.start();

        // Set up a Phaser controller for keyboard input.
        cursors = game.input.keyboard.createCursorKeys();

        game.stage.backgroundColor = '#061f27';

        // Generate the initial snake stack. Our snake will be 10 elements long.
        for (var i = 0; i < 10; i++) {
            snake[i] = game.add.sprite(150 + i * squareSize, 150, 'snake');  // Parameters are (X coordinate, Y coordinate, image)
        }

        //Generate Question
        this.generateQuestion();

        // Genereate the first apple.
        this.generateApple();

        question = "What is " + randomNumber1 + "+" + randomNumber2 + "? ";

        // Add Text to top of game.
        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };

        // Score.
        game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);

        //Question
        game.add.text(210, 20, "QUESTION", textStyle_Key);
        questionTextValue = game.add.text(290, 18, question.toString(), textStyle_Value);

        // Speed.
        game.add.text(500, 20, "SPEED", textStyle_Key);
        speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);

    },

    update: function () {

        // Handle arrow key presses, while not allowing illegal direction changes that will kill the player.

        if (cursors.right.isDown && direction != 'left') {
            new_direction = 'right';
        }
        else if (cursors.left.isDown && direction != 'right') {
            new_direction = 'left';
        }
        else if (cursors.up.isDown && direction != 'down') {
            new_direction = 'up';
        }
        else if (cursors.down.isDown && direction != 'up') {
            new_direction = 'down';
        }

        // A formula to calculate game speed based on the score.
        // The higher the score, the higher the game speed, with a maximum of 10;
        speed = Math.min(10, Math.floor(score / 5)) + 2;
        // Update speed value on game screen.
        speedTextValue.text = '' + speed;

        // Since the update function of Phaser has an update rate of around 60 FPS,
        // we need to slow that down make the game playable.

        // Increase a counter on every update call.
        updateDelay++;

        // Do game stuff only if the counter is aliquot to (10 - the game speed).
        // The higher the speed, the more frequently this is fulfilled,
        // making the snake move faster.
        if (updateDelay % (10 - speed) == 0) {


            // Snake movement

            var firstCell = snake[snake.length - 1],
                lastCell = snake.shift(),
                oldLastCellx = lastCell.x,
                oldLastCelly = lastCell.y;

            // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
            if (new_direction) {
                direction = new_direction;
                new_direction = null;
            }


            // Change the last cell's coordinates relative to the head of the snake, according to the direction.

            if (direction == 'right') {

                lastCell.x = firstCell.x + 15;
                lastCell.y = firstCell.y;
            }
            else if (direction == 'left') {
                lastCell.x = firstCell.x - 15;
                lastCell.y = firstCell.y;
            }
            else if (direction == 'up') {
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y - 15;
            }
            else if (direction == 'down') {
                lastCell.x = firstCell.x;
                lastCell.y = firstCell.y + 15;
            }


            // Place the last cell in the front of the stack.
            // Mark it as the first cell.

            snake.push(lastCell);
            firstCell = lastCell;

            // End of snake movement.



            // Increase length of snake if an apple had been eaten.
            // Create a block in the back of the snake with the old position of the previous last block (it has moved now along with the rest of the snake).
            if (addNew) {
                snake.unshift(game.add.sprite(oldLastCellx, oldLastCelly, 'snake'));
                addNew = false;
            }

            // Check for apple collision.
            this.appleCollision();

            // Check for collision with self. Parameter is the head of the snake.
            this.selfCollision(firstCell);

            // Check with collision with wall. Parameter is the head of the snake.
            this.wallCollision(firstCell);
        }


    },

    generateQuestion: function () {
        randomNumber1 = Math.floor((Math.random() * 49) + 1);
        randomNumber2 = Math.floor((Math.random() * 49) + 1);
        answer = randomNumber1 + randomNumber2;
        questionAnswer = answer.toString();
        appleAnswer = "apple" + questionAnswer;

    },

    generateRandomNumber: function () {
        randomApple = { apple: "apple" + Math.floor((Math.random() * 99) + 1) }
        while (randomApple.apple == appleAnswer) {
            randomApple = { apple: "apple" + Math.floor((Math.random() * 99) + 1) }
        }
    },

    generateRandomLocation: function () {

        randomLocation = { x: Math.floor(Math.random() * 40) * squareSize, y: Math.floor(Math.random() * 30) * squareSize };

    },

    generateApple: function () {

        // Chose a random place on the grid.
        // X is between 0 and 585 (39*15)
        // Y is between 0 and 435 (29*15)

        // Add a new apple.
        this.generateRandomLocation();
        apple1 = game.add.sprite(randomLocation.x, randomLocation.y, appleAnswer);
        apple1.scale.setTo(.30, .30);



        // Add a Random apples.
        this.generateRandomNumber();
        this.generateRandomLocation();
        apple2 = game.add.sprite(randomLocation.x, randomLocation.y, randomApple.apple);
        apple2.scale.setTo(.30, .30);


        this.generateRandomNumber();
        this.generateRandomLocation();
        apple3 = game.add.sprite(randomLocation.x, randomLocation.y, randomApple.apple);
        apple3.scale.setTo(.30, .30);

        this.generateRandomNumber();
        this.generateRandomLocation();
        apple4 = game.add.sprite(randomLocation.x, randomLocation.y, randomApple.apple);
        apple4.scale.setTo(.30, .30);

        this.generateRandomNumber();
        this.generateRandomLocation();
        apple5 = game.add.sprite(randomLocation.x, randomLocation.y, randomApple.apple);
        apple5.scale.setTo(.30, .30);

        this.generateRandomNumber();
        this.generateRandomLocation();
        apple6 = game.add.sprite(randomLocation.x, randomLocation.y, randomApple.apple);
        apple6.scale.setTo(.30, .30);
    },



    appleCollision: function () {

        // Check if any part of the snake is overlapping the apple.
        // This is needed if the apple spawns inside of the snake.
        for (var i = 0; i < snake.length; i++) {
            if (snake[i].x == apple1.x && snake[i].y == apple1.y) {

                // Next time the snake moves, a new block will be added to its length.
                addNew = true;

                // Destroy the old apples.
                apple1.destroy();
                apple2.destroy();
                apple3.destroy();
                apple4.destroy();
                apple5.destroy();
                apple6.destroy();

                // Make a new one.
                this.generateQuestion();
                this.generateApple();
                
                answerCorrect = true;

                // Increase score.
                score++;

                // Refresh scoreboard.
                scoreTextValue.text = score.toString();
                questionTextValue.text = "What is " + randomNumber1 + "+" + randomNumber2 + "? ";

            }
        }

    },

    selfCollision: function (head) {

        // Check if the head of the snake overlaps with any part of the snake.
        for (var i = 0; i < snake.length - 1; i++) {
            if (head.x == snake[i].x && head.y == snake[i].y) {

                // If so, go to game over screen.
                game.state.start('Game_Over');
            }
        }

    },

    wallCollision: function (head) {

        // Check if the head of the snake is in the boundaries of the game field.

        if (head.x >= 600 || head.x < 0 || head.y >= 450 || head.y < 0) {

            // If it's not in, we've hit a wall. Go to game over screen.
            game.state.start('Game_Over');
        }

    },

    render: function () {
        // If our timer is running, show the time in a nicely formatted way, else show 'Done!'
        if (timer.running) {
            game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 2, 14, "#ff0");
        }
        else {
            game.state.start('Game_Over');
        }
    },

    endTimer: function () {
        // Stop the timer when the delayed event triggers
        timer.stop();
    },

    formatTime: function (s) {
        // Convert seconds (s) to a nicely formatted and padded time string
        var minutes = "0" + Math.floor(s / 60);
        var seconds = "0" + (s - minutes * 60);
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    }

};