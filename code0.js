gdjs.CameraSceneCode = {};
gdjs.CameraSceneCode.localVariables = [];
gdjs.CameraSceneCode.GDPlayerObjectObjects1= [];
gdjs.CameraSceneCode.GDPlayerObjectObjects2= [];
gdjs.CameraSceneCode.GDPlayerObjectObjects3= [];
gdjs.CameraSceneCode.GDPlayerObjectObjects4= [];
gdjs.CameraSceneCode.GDFarBackgroundObjects1= [];
gdjs.CameraSceneCode.GDFarBackgroundObjects2= [];
gdjs.CameraSceneCode.GDFarBackgroundObjects3= [];
gdjs.CameraSceneCode.GDFarBackgroundObjects4= [];
gdjs.CameraSceneCode.GDMidBackgroundObjects1= [];
gdjs.CameraSceneCode.GDMidBackgroundObjects2= [];
gdjs.CameraSceneCode.GDMidBackgroundObjects3= [];
gdjs.CameraSceneCode.GDMidBackgroundObjects4= [];
gdjs.CameraSceneCode.GDFloorObjects1= [];
gdjs.CameraSceneCode.GDFloorObjects2= [];
gdjs.CameraSceneCode.GDFloorObjects3= [];
gdjs.CameraSceneCode.GDFloorObjects4= [];
gdjs.CameraSceneCode.GDWallRightObjects1= [];
gdjs.CameraSceneCode.GDWallRightObjects2= [];
gdjs.CameraSceneCode.GDWallRightObjects3= [];
gdjs.CameraSceneCode.GDWallRightObjects4= [];
gdjs.CameraSceneCode.GDWallLeftObjects1= [];
gdjs.CameraSceneCode.GDWallLeftObjects2= [];
gdjs.CameraSceneCode.GDWallLeftObjects3= [];
gdjs.CameraSceneCode.GDWallLeftObjects4= [];
gdjs.CameraSceneCode.GDTopArrowButtonObjects1= [];
gdjs.CameraSceneCode.GDTopArrowButtonObjects2= [];
gdjs.CameraSceneCode.GDTopArrowButtonObjects3= [];
gdjs.CameraSceneCode.GDTopArrowButtonObjects4= [];
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects1= [];
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects2= [];
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects3= [];
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects4= [];


gdjs.CameraSceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Joysticks");
}}

}


};gdjs.CameraSceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.CameraSceneCode.GDPlayerObjectObjects2, gdjs.CameraSceneCode.GDPlayerObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CameraSceneCode.GDPlayerObjectObjects3.length;i<l;++i) {
    if ( gdjs.CameraSceneCode.GDPlayerObjectObjects3[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.CameraSceneCode.GDPlayerObjectObjects3[k] = gdjs.CameraSceneCode.GDPlayerObjectObjects3[i];
        ++k;
    }
}
gdjs.CameraSceneCode.GDPlayerObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CameraSceneCode.GDPlayerObjectObjects3 */
{for(var i = 0, len = gdjs.CameraSceneCode.GDPlayerObjectObjects3.length ;i < len;++i) {
    gdjs.CameraSceneCode.GDPlayerObjectObjects3[i].setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.CameraSceneCode.GDPlayerObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.CameraSceneCode.GDPlayerObjectObjects2[k] = gdjs.CameraSceneCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.CameraSceneCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CameraSceneCode.GDPlayerObjectObjects2 */
{for(var i = 0, len = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].setAnimationName("Jump");
}
}}

}


};gdjs.CameraSceneCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "24;18;32");
}
{ //Subevents
gdjs.CameraSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.CameraSceneCode.GDPlayerObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.CameraSceneCode.GDPlayerObjectObjects2[k] = gdjs.CameraSceneCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.CameraSceneCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.CameraSceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.CameraSceneCode.GDPlayerObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.CameraSceneCode.GDPlayerObjectObjects2[k] = gdjs.CameraSceneCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.CameraSceneCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.CameraSceneCode.GDPlayerObjectObjects2 */
{for(var i = 0, len = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].setAnimationName("Idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.CameraSceneCode.GDPlayerObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() < 0 ) {
        isConditionTrue_0 = true;
        gdjs.CameraSceneCode.GDPlayerObjectObjects2[k] = gdjs.CameraSceneCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.CameraSceneCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9526884);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CameraSceneCode.GDPlayerObjectObjects2 */
{for(var i = 0, len = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerObject"), gdjs.CameraSceneCode.GDPlayerObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length;i<l;++i) {
    if ( gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].getBehavior("PlatformerObject").getCurrentSpeed() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.CameraSceneCode.GDPlayerObjectObjects2[k] = gdjs.CameraSceneCode.GDPlayerObjectObjects2[i];
        ++k;
    }
}
gdjs.CameraSceneCode.GDPlayerObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9527964);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CameraSceneCode.GDPlayerObjectObjects2 */
{for(var i = 0, len = gdjs.CameraSceneCode.GDPlayerObjectObjects2.length ;i < len;++i) {
    gdjs.CameraSceneCode.GDPlayerObjectObjects2[i].flipX(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Floor"), gdjs.CameraSceneCode.GDFloorObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallLeft"), gdjs.CameraSceneCode.GDWallLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("WallRight"), gdjs.CameraSceneCode.GDWallRightObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.CameraSceneCode.GDWallLeftObjects1.length === 0 ) ? 0 :gdjs.CameraSceneCode.GDWallLeftObjects1[0].getAABBLeft()), 0, (( gdjs.CameraSceneCode.GDWallRightObjects1.length === 0 ) ? 0 :gdjs.CameraSceneCode.GDWallRightObjects1[0].getAABBRight()), (( gdjs.CameraSceneCode.GDFloorObjects1.length === 0 ) ? 0 :gdjs.CameraSceneCode.GDFloorObjects1[0].getAABBBottom()), "", 0);
}}

}


};gdjs.CameraSceneCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FarBackground"), gdjs.CameraSceneCode.GDFarBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("MidBackground"), gdjs.CameraSceneCode.GDMidBackgroundObjects1);
{for(var i = 0, len = gdjs.CameraSceneCode.GDFarBackgroundObjects1.length ;i < len;++i) {
    gdjs.CameraSceneCode.GDFarBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 8);
}
}{for(var i = 0, len = gdjs.CameraSceneCode.GDMidBackgroundObjects1.length ;i < len;++i) {
    gdjs.CameraSceneCode.GDMidBackgroundObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 3);
}
}}

}


{


gdjs.CameraSceneCode.eventsList2(runtimeScene);
}


};

gdjs.CameraSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CameraSceneCode.GDPlayerObjectObjects1.length = 0;
gdjs.CameraSceneCode.GDPlayerObjectObjects2.length = 0;
gdjs.CameraSceneCode.GDPlayerObjectObjects3.length = 0;
gdjs.CameraSceneCode.GDPlayerObjectObjects4.length = 0;
gdjs.CameraSceneCode.GDFarBackgroundObjects1.length = 0;
gdjs.CameraSceneCode.GDFarBackgroundObjects2.length = 0;
gdjs.CameraSceneCode.GDFarBackgroundObjects3.length = 0;
gdjs.CameraSceneCode.GDFarBackgroundObjects4.length = 0;
gdjs.CameraSceneCode.GDMidBackgroundObjects1.length = 0;
gdjs.CameraSceneCode.GDMidBackgroundObjects2.length = 0;
gdjs.CameraSceneCode.GDMidBackgroundObjects3.length = 0;
gdjs.CameraSceneCode.GDMidBackgroundObjects4.length = 0;
gdjs.CameraSceneCode.GDFloorObjects1.length = 0;
gdjs.CameraSceneCode.GDFloorObjects2.length = 0;
gdjs.CameraSceneCode.GDFloorObjects3.length = 0;
gdjs.CameraSceneCode.GDFloorObjects4.length = 0;
gdjs.CameraSceneCode.GDWallRightObjects1.length = 0;
gdjs.CameraSceneCode.GDWallRightObjects2.length = 0;
gdjs.CameraSceneCode.GDWallRightObjects3.length = 0;
gdjs.CameraSceneCode.GDWallRightObjects4.length = 0;
gdjs.CameraSceneCode.GDWallLeftObjects1.length = 0;
gdjs.CameraSceneCode.GDWallLeftObjects2.length = 0;
gdjs.CameraSceneCode.GDWallLeftObjects3.length = 0;
gdjs.CameraSceneCode.GDWallLeftObjects4.length = 0;
gdjs.CameraSceneCode.GDTopArrowButtonObjects1.length = 0;
gdjs.CameraSceneCode.GDTopArrowButtonObjects2.length = 0;
gdjs.CameraSceneCode.GDTopArrowButtonObjects3.length = 0;
gdjs.CameraSceneCode.GDTopArrowButtonObjects4.length = 0;
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.CameraSceneCode.GDFlatDarkJoystickObjects4.length = 0;

gdjs.CameraSceneCode.eventsList3(runtimeScene);

return;

}

gdjs['CameraSceneCode'] = gdjs.CameraSceneCode;
