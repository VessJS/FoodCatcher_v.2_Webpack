import {Container} from "pixi.js";
import {Shrimp} from "./shrimp";

export class ShrimpsContainer extends Container {
    private numberOfShrimps: number = 5;
    private speed: number = 2;
    private direction: number = 1;
    private arrayOfShrimps: Shrimp[] = [];
    private ticker = PIXI.ticker.shared;
    public stage = new PIXI.Container();

    public contain(bounds: PIXI.Rectangle): boolean {
        let result = false;
        for (let i = 0; i < this.arrayOfShrimps.length; i++) {

            let fallingShrimp = this.arrayOfShrimps[i];

            if (this.hitTestRectangle(bounds, fallingShrimp.getBounds())) {
                result = true;
                this.resetShrimpPosition(fallingShrimp);

            }

        }

        return result;
    }

    private resetShrimpPosition(shrimp: Shrimp) {
        shrimp.x = this.randomInt(0, this.stage.width + 512);
        shrimp.y = this.randomInt(-550, this.stage.height);
    }

    constructor() {
        super();

        for (let i = 0; i < this.numberOfShrimps; i++) {
            let fallingShrimp = new Shrimp();

            fallingShrimp.vy = this.speed * this.direction;

            this.resetShrimpPosition(fallingShrimp);

            this.arrayOfShrimps.push(fallingShrimp);

            this.addChild(fallingShrimp);

        }


        this.ticker.add((time) => {
            for (let k = 0; k < this.numberOfShrimps; k++) {

                let fallingShrimp = this.arrayOfShrimps[k];

                fallingShrimp.y += fallingShrimp.vy;

                if (fallingShrimp.y >= 460) {
                    fallingShrimp.y = this.randomInt(-111, this.stage.height);
                }
            }

        });
        this.ticker.start();
    }

    private randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private hitTestRectangle(r1, r2) {

        let hit: boolean;
        let combinedHalfWidths: number;
        let combinedHalfHeights: number;
        let vx: number;
        let vy: number;

        hit = false;

        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;

        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;

        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;

        if (Math.abs(vx) < combinedHalfWidths) {

            if (Math.abs(vy) < combinedHalfHeights) {

                hit = true;
            } else {

                hit = false;
            }
        } else {

            hit = false;
        }

        return hit;
    };
}

