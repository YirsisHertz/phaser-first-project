import { GameScene } from "../scenes/GameScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",
  type: Phaser.AUTO,
  scale: {
    width: 600,
    height: 600,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  parent: "game",
  backgroundColor: "#000",
  scene: GameScene,
};
