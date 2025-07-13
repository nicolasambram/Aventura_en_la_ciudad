// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
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
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile13 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile17 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile19 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile20 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile22 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile23 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Casa cofre cerrado":
            case "nivel1":return tiles.createTilemap(hex`0a00080008080808080808080808080b0b0b0b0b0b0b0b08080b0101010101010b08080b0103020206010b08080b0102020205010b080c0b0102020202010b0c080b0101040401010b0807070707090a07070707`, img`
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile6,sprites.dungeon.chestClosed,sprites.builtin.field0,myTiles.tile7,myTiles.tile8,myTiles.tile1,sprites.skillmap.islandTile4,sprites.castle.tilePath4,sprites.castle.tilePath6,myTiles.tile10,myTiles.tile16], TileScale.Sixteen);
            case "Casa cofre abierto":
            case "Casa cofre cerrado1":return tiles.createTilemap(hex`0a00080008080808080808080808080b0b0b0b0b0b0b0b08080b0101010101010b08080b0106020205010b08080b0102020204010b080c0b0102020202010b0c080b0101030301010b0807070707090a07070707`, img`
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile6,sprites.builtin.field0,myTiles.tile7,myTiles.tile8,sprites.dungeon.chestOpen,myTiles.tile1,sprites.skillmap.islandTile4,sprites.castle.tilePath4,sprites.castle.tilePath6,myTiles.tile10,myTiles.tile16], TileScale.Sixteen);
            case "nivel3":
            case "nivel3":return tiles.createTilemap(hex`0a0008000101010101010101010101010101010101010101010104040606040401010101040202020504010101010402030202040101010104020202020401010101040404040404010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . 2 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 . 2 . . 2 2 2 
2 2 2 . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile4,myTiles.tile6,myTiles.tile21,sprites.builtin.brick,myTiles.tile22,myTiles.tile23], TileScale.Sixteen);
            case "ciudad":
            case "nivel2":return tiles.createTilemap(hex`3200120016161616161616161616161616161616241c11111111111111111111111111111d24161616161616161616161616161616161616161616161616161616161616161624121010101010101010101010101010132416161616161616161616161616161616161616161616161616161616161616162412101010100a09090909081010101013241616161616161616161616161616161616161616161616161616161616161616241210101010070d0d0e0e061010101013241616161616161616161616161616161616161616161616161616161616161616241210201010070c0c0f0f061010201013241616161616161616161616161616161616161616161616161616161616161616241220202010040b0b0b0b0510202020132416161616161616161616161616161616161616161616161616161616161616162412101f101002020303020210101f101324161616161616161616161616161616161616161616161616161616161616161624121a1e1a1a1a1a18171a1a1a1a1e1a13241616161616161616161616161616161616161616161616161616161616161616251514141414141418171414141414141b25161616161616161616161616161616160101010101010101010101010101011921190101010101010101010101010101192119010101010101010101010101010101161616161616161616161616161616162516161616161616161616161616161616251616161616161616161616161616161616161616161616161616161616161616241616161616161616161616161616161624161616161616161616161616161616161616161616161616161616161616161624161622161627262626262816162216162416161616161616161616161616161616161616161616161616161616161616162416162316162930302e2e2b16162316162416161616161616161616161616161616161616161616161616161616161616162416161616162931312f2f2b16161616162416161616161616161616161616161616161616161616161616161616161616162416161616162a2d2d2d2d2c1616161616241616161616161616161616161616161616161616161616161616161616161616241616161616020202020202161616161624161616161616161616161616161616161616161616161616161616161616161624161616161616161616161616161616162416161616161616161616161616161616`, img`
................2................2................
................2................2................
................2.....222222.....2................
................2.....222222.....2................
................2..2..222222..2..2................
................2.222.222222.222.2................
................2..2..22..22..2..2................
................2..2..........2..2................
..................................................
222222222222222.2.22222222222222.2.222222222222222
..................................................
................2................2................
................2..2..22..22..2..2................
................2..2..222222..2..2................
................2.....222222.....2................
................2.....222222.....2................
................2.....222222.....2................
................2................2................
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,sprites.builtin.brick,sprites.builtin.field1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthEast,sprites.skillmap.islandTile4,sprites.skillmap.islandTile1,sprites.skillmap.islandTile3,sprites.skillmap.islandTile5,myTiles.tile1,myTiles.tile2,myTiles.tile4,sprites.castle.tilePath6,sprites.castle.tilePath4,myTiles.tile5,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,myTiles.tile16,myTiles.tile17,myTiles.tile18,myTiles.tile19,sprites.vehicle.roadVertical,myTiles.tile20,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleInnerNorthEast,sprites.dungeon.purpleInnerSouthEast,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleInnerSouthWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
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
            case "miMosaico8":
            case "tile10":return tile10;
            case "miMosaico0":
            case "tile2":return tile2;
            case "miMosaico9":
            case "tile11":return tile11;
            case "miMosaico10":
            case "tile12":return tile12;
            case "miMosaico11":
            case "tile13":return tile13;
            case "miMosaico12":
            case "tile14":return tile14;
            case "miMosaico13":
            case "tile15":return tile15;
            case "miMosaico14":
            case "tile16":return tile16;
            case "miMosaico15":
            case "tile17":return tile17;
            case "miMosaico16":
            case "tile18":return tile18;
            case "miMosaico17":
            case "tile19":return tile19;
            case "miMosaico18":
            case "tile20":return tile20;
            case "miMosaico20":
            case "tile22":return tile22;
            case "miMosaico19":
            case "tile21":return tile21;
            case "miMosaico21":
            case "tile23":return tile23;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
