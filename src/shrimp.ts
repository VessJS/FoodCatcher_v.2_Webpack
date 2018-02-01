import Container = PIXI.Container;
import Sprite = PIXI.Sprite
import Rectangle = PIXI.Rectangle
import Texture = PIXI.Texture;

export class Shrimp extends Container {
    public vy = 1;

    constructor() {
        super();
        const rectangle = new Rectangle(111, 111, 16, 16);
        const shrimp = new Sprite(PIXI.utils.TextureCache["assets/Food.png"]);
        shrimp.texture.frame = rectangle;
        shrimp.x = 0;
        shrimp.y = 0;

        this.addChild(shrimp);
    }

}


