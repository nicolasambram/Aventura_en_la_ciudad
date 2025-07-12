// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Casa cofre cerrado":
            case "nivel1":return tiles.createTilemap(hex`0a0008000101010101010101010101020302020202060101010202020202020501010102020202020202010101020202020202020101010202020202020201010101010104040101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile6,sprites.dungeon.chestClosed,sprites.builtin.field0,myTiles.tile7,myTiles.tile8], TileScale.Sixteen);
            case "Casa cofre abierto":
            case "Casa cofre cerrado1":return tiles.createTilemap(hex`0a0008000101010101010101010101020602020202050101010202020202020401010102020202020202010101020202020202020101010202020202020201010101010103030101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 . . . . . . . 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile6,sprites.builtin.field0,myTiles.tile7,myTiles.tile8,sprites.dungeon.chestOpen], TileScale.Sixteen);
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`100010001d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d1d131111111111111111111111111111141210101010101010101010101010101512101010100a090909090810101010151210101010070d0d0e0e0610101010151210101010070c0c0f0f0610101010151210101010040b0b0b0b05101010101512101010100202030302021010101015171616161616161b1a16161616161618010101010101011c1c0101010101010119191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919191919`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 2 . . 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.builtin.brick,sprites.builtin.field1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.skillmap.islandTile4,sprites.skillmap.islandTile1,sprites.skillmap.islandTile3,sprites.skillmap.islandTile0,sprites.skillmap.islandTile2,sprites.skillmap.islandTile5,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,sprites.castle.tilePath6,sprites.castle.tilePath4,myTiles.tile5,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
            case "miMosaico0":
            case "tile2":return tile2;
            case "miMosaico1":
            case "tile3":return tile3;
            case "miMosaico2":
            case "tile4":return tile4;
            case "miMosaico3":
            case "tile5":return tile5;
            case "miMosaico4":
            case "tile6":return tile6;
            case "miMosaico5":
            case "tile7":return tile7;
            case "miMosaico6":
            case "tile8":return tile8;
            case "miMosaico7":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
