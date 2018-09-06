# Unity-World-Generation
Minecraft-like world 2D generation and character code snippets


# Introduction

This repo contains few Unity Game Engine js files that you can use in your 2D games. It imitates Minecraft auto world generating, with blocks and seven example block types. Spawn occurance is determined by world level and Random.Range function, it can surely be better, it's used just as an example.

# Files breakdown

## BlockSystem.js
This part of code deals with digging, spawning item drops after digging, picking items up with right click and adding them to player inventory (inventory part of the code is not included).

## Block.js
Defines actual block type. Possible block types are Dirt, Grass, Stone, Coal, Iron, Diamond and Bottomstone. Block type is determined depending on chunk/world height (i.e. Diamond spawns only below 8th level, Bottomstone spawns only on the bottom) and Random.Range.

## CameraFollow.js
This is useful in all platformers, it's great performance-wise and small code that makes camerra follow player as he moves. I tested few other options and codes too, but this provided best performance.

## BlockSelecting.js
This file takes care of selecting blocks, if player is in radius that allows digging targeted block. It uses OnMouseEnter and OnMouseExit events.

## World.js
Takes care of spawning chunks, uses Update() function.

## Character.js
Deals with character moving using A, D keys and jumping using Space key.
