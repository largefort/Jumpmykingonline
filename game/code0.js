gdjs.GameCode = {};
gdjs.GameCode.GDPoisonObjects1= [];
gdjs.GameCode.GDPoisonObjects2= [];
gdjs.GameCode.GDPoisonObjects3= [];
gdjs.GameCode.GDPoisonObjects4= [];
gdjs.GameCode.GDPoisonObjects5= [];
gdjs.GameCode.GDPoisonObjects6= [];
gdjs.GameCode.GDFloaterenemyObjects1= [];
gdjs.GameCode.GDFloaterenemyObjects2= [];
gdjs.GameCode.GDFloaterenemyObjects3= [];
gdjs.GameCode.GDFloaterenemyObjects4= [];
gdjs.GameCode.GDFloaterenemyObjects5= [];
gdjs.GameCode.GDFloaterenemyObjects6= [];
gdjs.GameCode.GDScoreTextObjects1= [];
gdjs.GameCode.GDScoreTextObjects2= [];
gdjs.GameCode.GDScoreTextObjects3= [];
gdjs.GameCode.GDScoreTextObjects4= [];
gdjs.GameCode.GDScoreTextObjects5= [];
gdjs.GameCode.GDScoreTextObjects6= [];
gdjs.GameCode.GDHighScoreObjects1= [];
gdjs.GameCode.GDHighScoreObjects2= [];
gdjs.GameCode.GDHighScoreObjects3= [];
gdjs.GameCode.GDHighScoreObjects4= [];
gdjs.GameCode.GDHighScoreObjects5= [];
gdjs.GameCode.GDHighScoreObjects6= [];
gdjs.GameCode.GDGemObjects1= [];
gdjs.GameCode.GDGemObjects2= [];
gdjs.GameCode.GDGemObjects3= [];
gdjs.GameCode.GDGemObjects4= [];
gdjs.GameCode.GDGemObjects5= [];
gdjs.GameCode.GDGemObjects6= [];
gdjs.GameCode.GDKingObjects1= [];
gdjs.GameCode.GDKingObjects2= [];
gdjs.GameCode.GDKingObjects3= [];
gdjs.GameCode.GDKingObjects4= [];
gdjs.GameCode.GDKingObjects5= [];
gdjs.GameCode.GDKingObjects6= [];
gdjs.GameCode.GDTutorialTextObjects1= [];
gdjs.GameCode.GDTutorialTextObjects2= [];
gdjs.GameCode.GDTutorialTextObjects3= [];
gdjs.GameCode.GDTutorialTextObjects4= [];
gdjs.GameCode.GDTutorialTextObjects5= [];
gdjs.GameCode.GDTutorialTextObjects6= [];
gdjs.GameCode.GDGroundTileObjects1= [];
gdjs.GameCode.GDGroundTileObjects2= [];
gdjs.GameCode.GDGroundTileObjects3= [];
gdjs.GameCode.GDGroundTileObjects4= [];
gdjs.GameCode.GDGroundTileObjects5= [];
gdjs.GameCode.GDGroundTileObjects6= [];
gdjs.GameCode.GDStarsObjects1= [];
gdjs.GameCode.GDStarsObjects2= [];
gdjs.GameCode.GDStarsObjects3= [];
gdjs.GameCode.GDStarsObjects4= [];
gdjs.GameCode.GDStarsObjects5= [];
gdjs.GameCode.GDStarsObjects6= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Touch anywhere On screen to jump/start");
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("Highscore", "Highscore");
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDHighScoreObjects1 */
{gdjs.evtTools.storage.readNumberFromJSONFile("Highscore", "Highscore", runtimeScene, runtimeScene.getScene().getVariables().get("TempSaveValue"));
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("TempSaveValue")));
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects2);
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Playing");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDKingObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDKingObjects2[i].activateBehavior("PlatformerObject", true);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Preparing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDKingObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDKingObjects4[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDKingObjects4[k] = gdjs.GameCode.GDKingObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDKingObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11331268);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Jump.mp3", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11332476);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects3);
{for(var i = 0, len = gdjs.GameCode.GDKingObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDKingObjects3[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKingObjects3Objects = Hashtable.newFrom({"King": gdjs.GameCode.GDKingObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects3Objects = Hashtable.newFrom({"Gem": gdjs.GameCode.GDGemObjects3});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(0).add(Math.round(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 100));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gem"), gdjs.GameCode.GDGemObjects3);
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKingObjects3Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGemObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(0).add(500);
}{for(var i = 0, len = gdjs.GameCode.GDGemObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Bonus.mp3", false, 100, 0.5);
}}

}


};gdjs.GameCode.mapOfEmptyGDGroundTileObjects = Hashtable.newFrom({"GroundTile": []});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects = Hashtable.newFrom({"GroundTile": gdjs.GameCode.GDGroundTileObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects = Hashtable.newFrom({"GroundTile": gdjs.GameCode.GDGroundTileObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects4Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFloaterenemyObjects4Objects = Hashtable.newFrom({"Floaterenemy": gdjs.GameCode.GDFloaterenemyObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects5Objects = Hashtable.newFrom({"Gem": gdjs.GameCode.GDGemObjects5});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects4Objects = Hashtable.newFrom({"Gem": gdjs.GameCode.GDGemObjects4});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDFloaterenemyObjects4, gdjs.GameCode.GDFloaterenemyObjects5);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFloaterenemyObjects5.length;i<l;++i) {
    if ( gdjs.GameCode.GDFloaterenemyObjects5[i].getVariableNumber(gdjs.GameCode.GDFloaterenemyObjects5[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFloaterenemyObjects5[k] = gdjs.GameCode.GDFloaterenemyObjects5[i];
        ++k;
    }
}
gdjs.GameCode.GDFloaterenemyObjects5.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFloaterenemyObjects5 */
gdjs.GameCode.GDGemObjects5.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects5Objects, (( gdjs.GameCode.GDFloaterenemyObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDFloaterenemyObjects5[0].getPointX("RewardUp")), (( gdjs.GameCode.GDFloaterenemyObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDFloaterenemyObjects5[0].getPointY("RewardUp")), "");
}{for(var i = 0, len = gdjs.GameCode.GDGemObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects5[i].setScale(gdjs.GameCode.GDGemObjects5[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDGemObjects5[i].getWidth()), (gdjs.GameCode.GDGemObjects5[i].getHeight())))));
}
}}

}


{

/* Reuse gdjs.GameCode.GDFloaterenemyObjects4 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFloaterenemyObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDFloaterenemyObjects4[i].getVariableNumber(gdjs.GameCode.GDFloaterenemyObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFloaterenemyObjects4[k] = gdjs.GameCode.GDFloaterenemyObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDFloaterenemyObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFloaterenemyObjects4 */
gdjs.GameCode.GDGemObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGemObjects4Objects, (( gdjs.GameCode.GDFloaterenemyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDFloaterenemyObjects4[0].getPointX("RewardDown")), (( gdjs.GameCode.GDFloaterenemyObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDFloaterenemyObjects4[0].getPointY("RewardDown")), "");
}{for(var i = 0, len = gdjs.GameCode.GDGemObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects4[i].setScale(gdjs.GameCode.GDGemObjects4[i].getScaleMean() * (60 / (Math.max((gdjs.GameCode.GDGemObjects4[i].getWidth()), (gdjs.GameCode.GDGemObjects4[i].getHeight())))));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects5Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects5});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects5);
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects5);
gdjs.GameCode.GDPoisonObjects5.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("SpawneddangerInField")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("dangerInField"));
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects5Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDKingObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDKingObjects5[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects5.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects5[0].getAABBTop()), "");
}{runtimeScene.getScene().getVariables().get("SpawneddangerInField").add(1);
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects5.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects5[i].setScale(gdjs.GameCode.GDPoisonObjects5[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDPoisonObjects5[i].getWidth()), (gdjs.GameCode.GDPoisonObjects5[i].getHeight())))));
}
}
{ //Subevents: 
gdjs.GameCode.eventsList8(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().get("SpawneddangerInField").setNumber(0);
}}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects4);
gdjs.GameCode.GDPoisonObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDKingObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDKingObjects4[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getAABBTop()), "");
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects4[i].setScale(gdjs.GameCode.GDPoisonObjects4[i].getScaleMean() * (100 / (Math.max((gdjs.GameCode.GDPoisonObjects4[i].getWidth()), (gdjs.GameCode.GDPoisonObjects4[i].getHeight())))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects4);
gdjs.GameCode.GDFloaterenemyObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFloaterenemyObjects4Objects, gdjs.randomInRange(75, 125) + 960 + (( gdjs.GameCode.GDKingObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDKingObjects4[0].getPointX("")), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getAABBTop()) - 64, "");
}{for(var i = 0, len = gdjs.GameCode.GDFloaterenemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDFloaterenemyObjects4[i].returnVariable(gdjs.GameCode.GDFloaterenemyObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(0, 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDFloaterenemyObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDFloaterenemyObjects4[i].setScale(gdjs.GameCode.GDFloaterenemyObjects4[i].getScaleMean() * (125 / (Math.max((gdjs.GameCode.GDFloaterenemyObjects4[i].getWidth()), (gdjs.GameCode.GDFloaterenemyObjects4[i].getHeight())))));
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("dangerInField").setNumber(gdjs.randomInRange(1, 1 + Math.round(gdjs.evtTools.common.clamp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) / 3000, 0, 4))));
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDKingObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDKingObjects4[i].getBehavior("PlatformerObject").getMaxSpeed() < 800 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDKingObjects4[k] = gdjs.GameCode.GDKingObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDKingObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDKingObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDKingObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDKingObjects4[i].getBehavior("PlatformerObject").setMaxSpeed((gdjs.GameCode.GDKingObjects4[i].getBehavior("PlatformerObject").getMaxSpeed()) + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 6);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) > 0.7;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) / 30);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDGroundTileObjects4.length;i<l;++i) {
    if ( gdjs.GameCode.GDGroundTileObjects4[i].getX() < (( gdjs.GameCode.GDKingObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDKingObjects4[0].getPointX("")) - (gdjs.GameCode.GDGroundTileObjects4[i].getWidth()) - 100 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDGroundTileObjects4[k] = gdjs.GameCode.GDGroundTileObjects4[i];
        ++k;
    }
}
gdjs.GameCode.GDGroundTileObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundTileObjects4 */
{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GroundTile"), gdjs.GameCode.GDGroundTileObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDGroundTileObjects) < 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDGroundTileObjects4 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundTileObjects4Objects, (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getX()) + (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getWidth()), (( gdjs.GameCode.GDGroundTileObjects4.length === 0 ) ? 0 :gdjs.GameCode.GDGroundTileObjects4[0].getY()), "");
}{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].setWidth(1280);
}
}{for(var i = 0, len = gdjs.GameCode.GDGroundTileObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDGroundTileObjects4[i].setHeight(224);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "obstacle_spawn") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2));
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(0, 2));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "obstacle_spawn");
}
{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKingObjects2Objects = Hashtable.newFrom({"King": gdjs.GameCode.GDKingObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameCode_9546GDFloaterenemyObjects2ObjectsGDgdjs_9546GameCode_9546GDGemObjects2Objects = Hashtable.newFrom({"Poison": gdjs.GameCode.GDPoisonObjects2, "Floaterenemy": gdjs.GameCode.GDFloaterenemyObjects2, "Gem": gdjs.GameCode.GDGemObjects2});
gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects2);
gdjs.copyArray(runtimeScene.getObjects("Poison"), gdjs.GameCode.GDPoisonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDKingObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Floaterenemy"), gdjs.GameCode.GDFloaterenemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("Gem"), gdjs.GameCode.GDGemObjects2);
/* Reuse gdjs.GameCode.GDKingObjects2 */
/* Reuse gdjs.GameCode.GDPoisonObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDKingObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDKingObjects2[i].getBehavior("PlatformerObject").abortJump();
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setString("Dead");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "obstacle_spawn");
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoisonObjects2ObjectsGDgdjs_9546GameCode_9546GDFloaterenemyObjects2ObjectsGDgdjs_9546GameCode_9546GDGemObjects2Objects);
}{for(var i = 0, len = gdjs.GameCode.GDPoisonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoisonObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDFloaterenemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFloaterenemyObjects2[i].clearForces();
}
for(var i = 0, len = gdjs.GameCode.GDGemObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDGemObjects2[i].clearForces();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Death.mp3", false, 80, 1);
}{gdjs.deviceVibration.startVibration(0.1);
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("King"), gdjs.GameCode.GDKingObjects3);
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.GameCode.GDStarsObjects3);
{for(var i = 0, len = gdjs.GameCode.GDStarsObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDStarsObjects3[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{for(var i = 0, len = gdjs.GameCode.GDKingObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDKingObjects3[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Playing";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDTutorialTextObjects2, gdjs.GameCode.GDTutorialTextObjects3);

{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects3[i].setString("Touch anywhere On screen to restart");
}
}}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDTutorialTextObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setTextAlignment("center");
}
}}

}


};gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11350780);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects2[i].setString("Press any key to restart the game");
}
}
{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.GameCode.GDScoreTextObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameCode.GDScoreTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreTextObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects2[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{gdjs.evtTools.storage.writeNumberInJSONFile("Highscore", "Highscore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.anyKeyReleased(runtimeScene);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", true);
}}

}


};gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(1)) == "Dead";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList14(runtimeScene);
}


{


gdjs.GameCode.eventsList17(runtimeScene);
}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("HighScore"), gdjs.GameCode.GDHighScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Stars"), gdjs.GameCode.GDStarsObjects1);
{for(var i = 0, len = gdjs.GameCode.GDHighScoreObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDHighScoreObjects1[i].setString("Highscore: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.GameCode.GDStarsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDStarsObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 4);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.window.setAdaptGameResolutionAtRuntime(runtimeScene, true);
}{gdjs.evtTools.sound.playMusic(runtimeScene, "alexander-nakarada-battle-of-the-creek.mp3", true, 60, 1);
}{gdjs.evtTools.sound.preloadMusic(runtimeScene, "alexander-nakarada-battle-of-the-creek.mp3");
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList18(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDPoisonObjects1.length = 0;
gdjs.GameCode.GDPoisonObjects2.length = 0;
gdjs.GameCode.GDPoisonObjects3.length = 0;
gdjs.GameCode.GDPoisonObjects4.length = 0;
gdjs.GameCode.GDPoisonObjects5.length = 0;
gdjs.GameCode.GDPoisonObjects6.length = 0;
gdjs.GameCode.GDFloaterenemyObjects1.length = 0;
gdjs.GameCode.GDFloaterenemyObjects2.length = 0;
gdjs.GameCode.GDFloaterenemyObjects3.length = 0;
gdjs.GameCode.GDFloaterenemyObjects4.length = 0;
gdjs.GameCode.GDFloaterenemyObjects5.length = 0;
gdjs.GameCode.GDFloaterenemyObjects6.length = 0;
gdjs.GameCode.GDScoreTextObjects1.length = 0;
gdjs.GameCode.GDScoreTextObjects2.length = 0;
gdjs.GameCode.GDScoreTextObjects3.length = 0;
gdjs.GameCode.GDScoreTextObjects4.length = 0;
gdjs.GameCode.GDScoreTextObjects5.length = 0;
gdjs.GameCode.GDScoreTextObjects6.length = 0;
gdjs.GameCode.GDHighScoreObjects1.length = 0;
gdjs.GameCode.GDHighScoreObjects2.length = 0;
gdjs.GameCode.GDHighScoreObjects3.length = 0;
gdjs.GameCode.GDHighScoreObjects4.length = 0;
gdjs.GameCode.GDHighScoreObjects5.length = 0;
gdjs.GameCode.GDHighScoreObjects6.length = 0;
gdjs.GameCode.GDGemObjects1.length = 0;
gdjs.GameCode.GDGemObjects2.length = 0;
gdjs.GameCode.GDGemObjects3.length = 0;
gdjs.GameCode.GDGemObjects4.length = 0;
gdjs.GameCode.GDGemObjects5.length = 0;
gdjs.GameCode.GDGemObjects6.length = 0;
gdjs.GameCode.GDKingObjects1.length = 0;
gdjs.GameCode.GDKingObjects2.length = 0;
gdjs.GameCode.GDKingObjects3.length = 0;
gdjs.GameCode.GDKingObjects4.length = 0;
gdjs.GameCode.GDKingObjects5.length = 0;
gdjs.GameCode.GDKingObjects6.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects5.length = 0;
gdjs.GameCode.GDTutorialTextObjects6.length = 0;
gdjs.GameCode.GDGroundTileObjects1.length = 0;
gdjs.GameCode.GDGroundTileObjects2.length = 0;
gdjs.GameCode.GDGroundTileObjects3.length = 0;
gdjs.GameCode.GDGroundTileObjects4.length = 0;
gdjs.GameCode.GDGroundTileObjects5.length = 0;
gdjs.GameCode.GDGroundTileObjects6.length = 0;
gdjs.GameCode.GDStarsObjects1.length = 0;
gdjs.GameCode.GDStarsObjects2.length = 0;
gdjs.GameCode.GDStarsObjects3.length = 0;
gdjs.GameCode.GDStarsObjects4.length = 0;
gdjs.GameCode.GDStarsObjects5.length = 0;
gdjs.GameCode.GDStarsObjects6.length = 0;

gdjs.GameCode.eventsList19(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
