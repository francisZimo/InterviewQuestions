var board,
    game = new Chess();

/* AI */

var calculateBestMove = function (game) {
    var newGameMoves = game.ugly_moves();
    var bestMove = null;
    // 使用任何较大的负数
    var bestValue = -9999;

    for (var i = 0; i < newGameMoves.length; i++) {
        var newGameMove = newGameMoves[i];
        game.ugly_move(newGameMove);

        // 当 AI 代表黑方时，就把负值视为优势
        var boardValue = -evaluateBoard(game.board());
        game.undo();
        if (boardValue > bestValue) {
            bestValue = boardValue;
            bestMove = newGameMove;
        }
    }

    return bestMove;
};

var evaluateBoard = function (board) {
    var totalEvaluation = 0;
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            totalEvaluation = totalEvaluation + getPieceValue(board[i][j]);
        }
    }
    return totalEvaluation;
};

var getPieceValue = function (piece) {
    if (piece === null) {
        return 0;
    }
    var getAbsoluteValue = function (piece) {
        if (piece.type === "p") {
            return 10;
        } else if (piece.type === "r") {
            return 50;
        } else if (piece.type === "n") {
            return 30;
        } else if (piece.type === "b") {
            return 30;
        } else if (piece.type === "q") {
            return 90;
        } else if (piece.type === "k") {
            return 900;
        }
        throw "未知的棋子类型：" + piece.type;
    };

    var absoluteValue = getAbsoluteValue(piece, piece.color === "w");
    return piece.color === "w" ? absoluteValue : -absoluteValue;
};

/* 棋盘可视化和游戏状态处理 */

var onDragStart = function (source, piece, position, orientation) {
    if (
        game.in_checkmate() === true ||
        game.in_draw() === true ||
        piece.search(/^b/) !== -1
    ) {
        return false;
    }
};

var makeBestMove = function () {
    var bestMove = getBestMove(game);
    game.ugly_move(bestMove);
    board.position(game.fen());
    renderMoveHistory(game.history());
    if (game.game_over()) {
        alert("游戏结束");
    }
};

var getBestMove = function (game) {
    if (game.game_over()) {
        alert("游戏结束");
    }
    var bestMove = calculateBestMove(game);
    return bestMove;
};

var renderMoveHistory = function (moves) {
    var historyElement = $("#move-history").empty();
    historyElement.empty();
    for (var i = 0; i < moves.length; i = i + 2) {
        historyElement.append(
            "<span>" +
            moves[i] +
            " " +
            (moves[i + 1] ? moves[i + 1] : " ") +
            "</span><br>"
        );
    }
    historyElement.scrollTop(historyElement[0].scrollHeight);
};

var onDrop = function (source, target) {
    var move = game.move({
        from: source,
        to: target,
        promotion: "q"
    });

    removeGreySquares();
    if (move === null) {
        return "snapback";
    }

    renderMoveHistory(game.history());
    window.setTimeout(makeBestMove, 250);
};

var onSnapEnd = function () {
    board.position(game.fen());
};

var onMouseoverSquare = function (square, piece) {
    var moves = game.moves({
        square: square,
        verbose: true
    });

    if (moves.length === 0) return;

    greySquare(square);

    for (var i = 0; i < moves.length; i++) {
        greySquare(moves[i].to);
    }
};

var onMouseoutSquare = function (square, piece) {
    removeGreySquares();
};

var removeGreySquares = function () {
    $("#board .square-55d63").css("background", "");
};

var greySquare = function (square) {
    var squareEl = $("#board .square-" + square);

    var background = "#a9a9a9";
    if (squareEl.hasClass("black-3c85d") === true) {
        background = "#696969";
    }

    squareEl.css("background", background);
};

var cfg = {
    draggable: true,
    position: "start",
    onDragStart: onDragStart,
    onDrop: onDrop,
    onMouseoutSquare: onMouseoutSquare,
    onMouseoverSquare: onMouseoverSquare,
    onSnapEnd: onSnapEnd
};
board = ChessBoard("board", cfg);