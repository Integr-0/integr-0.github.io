# Castl3d-Backend

## Overview
Castl3d-Backend is a Spring Boot application that serves as the backend for the Castl3d chess game. It provides various services and functionalities to manage the game and interact with the bot.

## Features
- **EasyDefaultBot**: A simple bot implementation that makes random moves and captures pieces when possible.
- **ChessBoard Management**: Handles the state and operations of the chessboard.
- **Spring Boot Integration**: Utilizes Spring Boot for easy setup and configuration.
- **Gradle Build**: Uses Gradle for building and managing dependencies.

## Requirements
- Java 11 or higher
- Gradle 6.0 or higher

## Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/Integr-0/Castl3d-Backend.git
    cd Castl3d-Backend
    ```

2. Build the project:
    ```sh
    ./gradlew build
    ```

3. Run the application:
    ```sh
    ./gradlew bootRun
    ```
   The application will start on port 8080 by default.

4. Start the frontend application to play the game.
   The frontend application is available at [Castl3d-Frontend](https://github.com/Integr-0/Castl3d-Frontend).

## Making a bot

````kotlin
import net.integr.castl3d.service.bot.Bot
import net.integr.castl3d.service.game.ChessBoard
import net.integr.castl3d.service.game.management.Castl3dBot

@Castl3dBot("my_bot", "My Bot")
class EasyDefaultBot : Bot {
    override fun move(board: ChessBoard) {
        val moves = board.getAllValidBotMoves()

        if (moves.isNotEmpty()) {
            for (move in moves) {
                if (move.isCapture) {
                    board.move(move)
                    return
                }
            }

            val move = moves.random()
            board.move(move)
        }
    }
}
````

To make a bot, create a new Kotlin class and extend the `Bot` class. Annotate the class with `@Castl3dBot` to register it as a bot. Implement the `move` function to make the bot's moves. The `board` parameter provides the current state of the chessboard and the available moves.
To make a move, call the `board.move(move)` function with the desired move. You can only make one move per turn. This is valid for both player and bot moves.
Bots are detected via reflection and registered automatically when the application starts.
Feel free to implement your own bot logic and strategies (And maybe make a PR to share it with the community :) ).
The board api is well documented and easy to use, so you can easily implement your bot.

## Todo
- [ ] Implement a more advanced bot with a better strategy.
- [ ] Add promotion support.
- [x] Fix castling and en passant moves.
- [ ] Add support for selecting color.