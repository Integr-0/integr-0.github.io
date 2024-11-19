# Castl3d Chess

This project is a chess game frontend implemented using TypeScript and React. It features a live-updating chess board with a bot opponent that can be played at different difficulty levels.

## Features

- **Chess Moves**: Implements moves for all chess pieces (King, Queen, Bishop, Knight, Rook, Pawn).
- **Live Updates**: Updates the board in real-time as the user moves the pieces.
- **Live Preview**: Highlights the valid moves for each piece as the user selects them.
- **Bot Opponent**: Selectable difficulty levels for the bot opponent synced to a backend server.

## Technologies Used

- **TypeScript**
- **JavaScript**
- **React**
- **NPM**

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/chess-game.git
    ```
2. Navigate to the project directory:
    ```sh
    cd chess-game
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage

1. Start the development server:
    ```sh
    npm run dev
    ```
2. Open your browser and navigate to `http://localhost:5173` to see the frontend.
3. To run the backend server, navigate to the [Castl3d-Backend](https://github.com/Integr-0/Castl3d-Backend) directory and follow the instructions in the README.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Using the board in your project

To use the board in your project, you can import the `ChessBoard` component from the `ChessBoard.tsx` file. The component takes the following props:
- `backendSocketUrl`: The URL of the backend server running a Castl3d backend to connect to.
- `botId`: The ID of the bot to play against.

````tsx
<ChessBoard backendSocketUrl={"ws://yourapp.com/bot_socket"} botId={currentBot}/>
````

Backend runs on port 8080 by default. The bot ID can be obtained from the backend server. (see BotSelector.tsx for an example)
It also uses the `/bot_socket` endpoint by default.