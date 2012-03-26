/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *      "Free software" is a matter of liberty, not price.
 *      "Free" as in "free speech", not as in "free beer".
 *                                         - Richard M. Stallman
 * 
 * 
 */

// provides
goog.provide('X.labelMap');

// requires
goog.require('X.volume');



/**
 * Pseudo-class for a X.labelmap which derives from X.volume and is used to
 * distinguish between a volume and a label map. An X.labelmap will never be
 * rendered separately - but an X.volume object can be used to display solely a
 * label map.
 * 
 * @constructor
 * @extends X.volume
 */
X.labelMap = function() {

  //
  // call the standard constructor of X.volume
  goog.base(this);
  
  //
  // class attributes
  
  /**
   * @inheritDoc
   * @const
   */
  this['_className'] = 'labelMap';
  
};
// inherit from X.volume
goog.inherits(X.labelMap, X.volume);



/**
 * @inheritDoc
 */
X.labelMap.prototype.create_ = function() {

  // here, for label maps we do nothing
  
};


// export symbols (required for advanced compilation)
goog.exportSymbol('X.labelMap', X.labelMap);
