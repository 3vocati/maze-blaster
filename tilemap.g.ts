// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000000000100000000000000010100000000000000000000000000000101000000010000000001000000000001010100000000000000000000010000010100000000000100000000000000000101000001000000000000010000000101010000000000000101000000000000010100000000000001010000000000000101000000000100000000000001000001010000000000000000010000000000010100000100000000000000000000000101000000000001000000000100000001010100000000000000000000000000010100000000000000000000000100000101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . 2 . . . . . 2 
2 2 . . . . . . . . . . 2 . . 2 
2 . . . . . 2 . . . . . . . . 2 
2 . . 2 . . . . . . 2 . . . 2 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . . . 2 . . . . . . 2 . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . . . . 2 . . . . 2 . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "ShipUp":
            case "tile1":return tile1;
            case "ShipDown":
            case "tile3":return tile3;
            case "ShipRight":
            case "tile5":return tile5;
            case "ShipLeft":
            case "tile4":return tile4;
            case "BulletUpDown":
            case "tile6":return tile6;
            case "BulletUpLeftRight":
            case "tile7":return tile7;
            case "EnemyUp":
            case "tile8":return tile8;
            case "EnemyRight":
            case "tile11":return tile11;
            case "EnemyDown":
            case "tile9":return tile9;
            case "EnemyLeft":
            case "tile10":return tile10;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
