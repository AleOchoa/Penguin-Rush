# PENGUIN RUSH

## Introduction
A multiplayer game having two penguins racing to be the first to arrive to the fish. Based on **Penguin Pursuit** by [Lumosity](https://www.lumosity.com/).

You have to go through a maze which is rotating randomly 90°,180° or 270°. The commands are exactly the same and only the view is changing. It's a game to test your sense of direction.

![Game](https://github.com/AleOchoa/Penguin-Rush/blob/master/Imagenes/pantalla.png?raw=true)

## Instructions

Both players are playing at the same time. Both are trying to go through the maze and be the one to arrive first to the fish.

Player 1: ![Player 1](https://github.com/AleOchoa/Penguin-Rush/blob/master/Imagenes/player1.png?raw=true)

Player 2: ![Player 2](https://github.com/AleOchoa/Penguin-Rush/blob/master/Imagenes/player2.png?raw=true)

Goal: ![Fish](https://github.com/AleOchoa/Penguin-Rush/blob/master/Imagenes/premio.png?raw=true)

| Direction    | Player 1      | Player 2      |
|--------------|---------------|---------------|
| Up           | ArrowUp       |W              |
| Down         | ArrowDown     |S              |
| Left         | ArrowLeft     |A              |
| Right        | ArrowRight    |D              |

You can choose one of the three different levels: 

1) Begginers: 8 seconds between rotations.
2) Normal: 5 seconds between rotations.
3) Expert: 2 seconds between rotations.

The level has to be selected before starting the game, once it starts there is no chance to change it.

## Behind scenes
This game was created using javascript and html's canvas.

### Logic

There are defined all the possible types of path each position of the maze can take. Depending on the type of path are the movements that can be performed. Each time a key is typed, depending on the players position the command to move is sent or ignored.

### Rotation
The maze always starts oriented to the north and shows half a circle at the top to help the player identify the top.

To make the effect of rotating the maze, the origin of the canvas was moved to the center of the canvas to avoid needing to adjust the maze place each time it rotates. Before repainting the maze and the player, the canvas is rotated and afterwards the view is painted.

### Initial Configuration

Each time it starts the game it is randomly select an initial configuration of starting point, target point and a maze display. There are some initial configurations preloaded to choose from.

### Finish Scenarios
There are three ending cases:

1) Player 1 win
2) Player 2 win
3) Tie: both player got to the fish at exactly the same time. (Least common)