
gdjs.evtsExt__AnimationSystem__AnimationBehavior = gdjs.evtsExt__AnimationSystem__AnimationBehavior || {};

/**
 * Behavior generated from Animation Behavior
 */
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior = class AnimationBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    

    return true;
  }

  // Properties:
  
}

/**
 * Shared data generated from Animation Behavior
 */
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.SharedData = class AnimationBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._AnimationSystem_AnimationBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._AnimationSystem_AnimationBehaviorSharedData = new gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._AnimationSystem_AnimationBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext = {};
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final = [];

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final = [];

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4= [];


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17540068);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17544332);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17548500);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17550540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17554804);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17558972);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 0.01);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Pulse");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17566876);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 30);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17571052);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17575220);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17577260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) + 50, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 30);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17581436);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 0.03);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Breath");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), -(80), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getAngle()) <= -(60));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17592204);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(gdjs.evtTools.common.lerp(-(60), 80, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 340 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), 360, 0.09));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 359.9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), -(80), ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getAngle()) <= -(60));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17605636);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(gdjs.evtTools.common.lerp(-(60), 80, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)), runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 340 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), 360, 0.09));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() >= 360 - 0.03 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Smooth rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Instant rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList16 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.VariablesContainer.badVariable.setNumber(5);
}{runtimeScene.getScene().getVariables().get("ObjectScale").setNumber(1);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17624540);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList17 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList16(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList18 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList17(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList19 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.VariablesContainer.badVariable.setNumber(5);
}{runtimeScene.getScene().getVariables().get("ObjectScale2").setNumber(1);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17631140);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList20 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList19(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList21 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble2");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList20(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList22 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.VariablesContainer.badVariable.setNumber(5);
}{runtimeScene.getScene().getVariables().get("ObjectScale3").setNumber(1);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17638476);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleX(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setScaleY(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList23 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList22(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList24 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble3");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList23(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList25 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("target_scale")).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("scale_lerp")).setNumber((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("scdx")).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setScaleX(2);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setScaleY(0.5);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")).setNumber(2);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList26 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList25(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList27 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Wobble once");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList26(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList28 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17652844);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17656556);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17659580);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17663164);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList29 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 360 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17672004);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17675532);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariables().get("IDrotation")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList30 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList28(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList29(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList31 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList30(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList32 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17682764);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17686348);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17689500);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipX(false);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17693156);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList33 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedX()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17366076);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].isFlippedX() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17614788);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList34 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList32(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList33(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList35 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation X");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList34(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList36 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17687956);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17674324);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17457228);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].flipY(false);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17408316);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList37 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].isFlippedY()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17604132);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].flipY(true);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].isFlippedY() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17617940);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList38 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList36(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList37(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList39 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D rotation Y");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList38(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList40 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17669692);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList41 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList40(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList42 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D door loop");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList41(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList43 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17541164);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17582676);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2), 0.03));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)) + 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17400836);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList44 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList43(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList45 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D open door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList44(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList46 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17657572);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17690620);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), 0.03));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17417716);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList47 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList46(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList48 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D close door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList47(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList49 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17441572);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth((0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17412620);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2), 0.03));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) <= (0.3 * (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0)) + 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17555004);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList50 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList49(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList51 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "3D pre-closed door");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList50(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList52 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17577588);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList53 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17470620);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 10));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList54 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList52(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList53(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList55 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Float");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList54(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList56 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17603332);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList57 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17505364);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList58 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList56(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList57(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList59 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Triangle transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList58(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList60 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17543820);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList61 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17599996);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(6);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList62 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList60(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList61(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList63 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Square transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList62(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList64 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17396708);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList65 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17569308);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList66 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList64(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList65(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList67 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Rhombus transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList66(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList68 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(17587948);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(6);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(7);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(8);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(9);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(10);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList69 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18031908);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(6);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 6 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(7);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 7 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(8);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 8 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(9);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 9 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(10);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 10 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList70 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList68(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList69(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList71 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Maze transition");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList70(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList72 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() <= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() == 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList73 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList72(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList74 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade loop");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList73(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList75 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() != 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList76 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList75(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList77 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade out");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList76(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList78 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() <= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setOpacity(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getOpacity() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList79 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList78(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList80 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Fade in");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList79(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList81 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18065364);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18067652);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3_1final, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 5000, runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() <= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 80));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() <= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle()), -(360), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 4));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(359) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(0);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList82 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18081012);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) - 40));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18083300);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) / 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0) * 2, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.indexOf(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]) === -1 )
            gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final.push(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2_1final, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 5000, runtimeScene);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(200) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 80));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(358) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(5);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setAngle(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle()), -(360), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 4));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() <= -(359) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList83 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList81(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList82(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList84 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Squash & Stretch");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList83(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList85 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18097692);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].resetTimer("_.Animation system._Rainbow effect");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", 0.00000000000000000001) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("240;0;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("255;132;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("247;255;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("48;242;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("0;255;234");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("0;102;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("183;0;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("235;135;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].resetTimer("_.Animation system._Rainbow effect");
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList86 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18107236);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].resetTimer("_.Animation system._Rainbow effect");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", 0.00000000000000000001) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("240;0;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("255;132;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("247;255;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) / 2) * 1.5) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("48;242;0");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("0;255;234");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2 / 2 / 2 / 2 * (10)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("0;102;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("183;0;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4 * (3) * (1.1672)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("235;135;255");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].timerElapsedTime("_.Animation system._Rainbow effect", (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].pauseTimer("_.Animation system._Rainbow effect");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList87 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList85(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList86(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList88 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Rainbow effect");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList87(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList89 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18118044);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getAngle() >= 15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(15) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList90 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18122492);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() >= 15 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotate(-((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getAngle() <= -(15) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].rotateTowardAngle(0, (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) * 100, runtimeScene);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getAngle() >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList91 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList89(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList90(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList92 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList91(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList93 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18129372);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList94 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18134068);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList95 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList93(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList94(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList96 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake horizontal");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList95(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList97 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18141532);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList98 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18146228);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointY("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointY("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setY(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getY() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointY("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList99 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList97(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList98(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList100 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Shake vertical");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList99(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList101 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18153660);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList102 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18164052);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getPointX("")));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getPointX("")) <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(4);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getX() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 3));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getPointX("")) >= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 4 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList103 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList101(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList102(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList104 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Line rotation");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList103(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList105 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18175404);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0) + 10);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth() - ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight() + ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0) / 4));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getWidth()) >= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[0].getHeight()) <= (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(3);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setWidth(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getWidth()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0), 1));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setHeight(gdjs.evtTools.common.lerp((gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getHeight()), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0), 1));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getWidth()) == (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("width")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = ((( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[0].getHeight()) == (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("height")) || 0 : 0));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList106 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList105(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList107 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Land");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList106(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList108 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18182892);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].setColor("");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) >= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).sub((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) <= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3[i].returnVariable(gdjs.VariablesContainer.badVariable).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) >= -((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList109 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(18189988);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].setColor("");
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) >= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).sub((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) <= -(254) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(2);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).add((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) >= -((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("speed")) || 0 : 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(100);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].getVariableNumber(gdjs.VariablesContainer.badVariable) == 100 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1[i].returnVariable(gdjs.VariablesContainer.badVariable).setNumber(1);
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList110 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList108(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("trigger") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList109(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList111 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("animations") : "") == "Low health");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList110(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList112 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList3(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList7(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList11(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList15(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList18(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList21(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList24(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList27(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList31(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList35(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList39(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList42(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList45(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList48(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList51(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList55(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList59(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList63(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList67(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList71(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList74(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList77(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList80(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList84(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList88(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList92(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList96(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList100(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList104(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList107(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList111(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystem = function(animations, speed, width, height, trigger, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "animations") return animations;
if (argName === "speed") return speed;
if (argName === "width") return width;
if (argName === "height") return height;
if (argName === "trigger") return trigger;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.AnimationSystemContext.eventsList112(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleY(((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getVariables().get("__WobbleEffect").getChild("target_scale"))) * 2) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleX()));
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleX() < 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleX(0.5);
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].getScaleY() < 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2[i].setScaleY(0.5);
}
}}

}


{

/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")) <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScale((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("target_scale"))));
}
}}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx")).setNumber(gdjs.evtTools.common.lerp((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx"))), (((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("target_scale"))) - (gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getScaleX())) * 0.5), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scale_lerp")))));
}
}{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].setScaleX(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getScaleX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("scdx")))));
}
}
{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1[i].getVariables().get("__WobbleEffect").getChild("is_squishy_scale")).sub(1 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{ //Subevents
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("AnimationSystem::AnimationBehavior", gdjs.evtsExt__AnimationSystem__AnimationBehavior.AnimationBehavior);
