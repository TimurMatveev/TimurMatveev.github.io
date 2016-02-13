/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${Stage}", "mousemove", function(sym, e) {
         this.onMove(e.pageX);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         this.onMove = function(x) {
         	timelinecontrol = x*20;
         	sym.stop(timelinecontrol);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage}", "touchmove", function(sym, e) {
         // insert code to be run when a user drags an object (for touch devices only)
         this.onMove(e.pageX);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'first_plan'
   (function(symbolName) {   
   
   })("first_plan");
   //Edge symbol end:'first_plan'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-125205194");