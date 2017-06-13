window.onload =  function () {
    var canvas = document.getElementById('gc');
    var ctx = canvas.getContext('2d');
    document.addEventListener('keydown', keyPush);
    var scoreField = document.getElementById('score');
    setInterval(game, 1000 / 5);
// players positions;
    var px = 10;
    var py = 10;

    var gs = 20; //grid size;
    var tc = 20; //tile size;

//we will start at
    var ax = 15;
    var ay = 15;

// coordinate of movement key;
    var xv = 0;
    var yv = 0;

//
    var trail = []; // след
    var tail = 5; // хвост

    function game() {
        px += xv;
        py += yv;

        if (px < 0) {
            px = tc - 1;
        }
        if (px > tc - 1) {
            px = 0;
        }
        if (py < 0) {
            py = tc - 1;
        }
        if (py > tc - 1) {
            py = 0;
        }

        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'lime';
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);

            if (trail[i].x === px && trail[i].y === py) {
                tail = 5;
            }
        }

        trail.push({
            x: px,
            y: py
        });

        while (trail.length > tail) {
            trail.shift();
        }

        if (ax === px && ay === py) {
            tail++;
            scoreField.innerHTML = 'Your score : ' + tail;
            ax = Math.floor(Math.random() * tc);
            ay = Math.floor(Math.random() * tc);
        }

        ctx.fillStyle = 'red';
        ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
    }

    function keyPush(evt) {
        switch (evt.keyCode) {
            case 37:
                xv = -1;
                yv = 0;
                break;
            case 38:
                xv = 0;
                yv = -1;
                break;
            case 39:
                xv = 1;
                yv = 0;
                break;
            case 40:
                xv = 0;
                yv = 1;
                break;
        }
    }
};