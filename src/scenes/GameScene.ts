import Phaser from "phaser";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
};

export class GameScene extends Phaser.Scene {
  private square!: Phaser.GameObjects.Rectangle & {
    body: Phaser.Physics.Arcade.Body;
  };
  constructor() {
    super(sceneConfig);
  }

  public create() {
    this.square = this.add.rectangle(300, 300, 30, 30, 0x06abec) as any;
    this.physics.add.existing(this.square);
  }

  public update() {
    const cursorKeys = this.input.keyboard.createCursorKeys();

    if (cursorKeys.up.isDown && this.square.body.y > 0) {
      this.square.body.setVelocityY(-500);
    } else if (cursorKeys.down.isDown && this.square.body.y < 570) {
      this.square.body.setVelocityY(500);
    } else {
      this.square.body.setVelocityY(0);
    }

    if (cursorKeys.right.isDown && this.square.body.x < 570) {
      this.square.body.setVelocityX(500);
    } else if (cursorKeys.left.isDown && this.square.body.x > 0) {
      this.square.body.setVelocityX(-500);
    } else {
      this.square.body.setVelocityX(0);
    }
  }
}
