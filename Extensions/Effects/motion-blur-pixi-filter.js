var gdjs;(function(l){l.PixiFiltersTools.registerFilterCreator("MotionBlur",new class extends l.PixiFiltersTools.PixiFilterCreator{makePIXIFilter(r,e){return new PIXI.filters.MotionBlurFilter([0,0])}updatePreRender(r,e){}updateDoubleParameter(r,e,t){const i=r;e==="velocityX"?i._velocity.x=t:e==="velocityY"?i._velocity.y=t:e==="kernelSize"?i.kernelSize=t:e==="offset"&&(i.offset=t)}getDoubleParameter(r,e){const t=r;return e==="velocityX"?t._velocity.x:e==="velocityY"?t._velocity.y:e==="kernelSize"?t.kernelSize:e==="offset"?t.offset:0}updateStringParameter(r,e,t){}updateColorParameter(r,e,t){}getColorParameter(r,e){return 0}updateBooleanParameter(r,e,t){}})})(gdjs||(gdjs={}));
//# sourceMappingURL=motion-blur-pixi-filter.js.map
