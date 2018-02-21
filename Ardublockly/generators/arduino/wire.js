/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Code generator for the Arduino serial blocks.
 *     Arduino Serial library docs: https://www.arduino.cc/en/Reference/Serial
 *
 * TODO: There are more functions that can be added:
 *       http://arduino.cc/en/Reference/Serial
 */
'use strict';

goog.provide('Blockly.Arduino.wire');

goog.require('Blockly.Arduino');

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wire_setup'] = function(block) {
  Blockly.Arduino.addInclude('wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup('wire', 'Wire.begin();', true);
  var code = '';
  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wire_request'] = function(block) {
  Blockly.Arduino.addInclude('wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup('wire', 'Wire.begin();', true);
  var quantity = Blockly.Arduino.valueToCode(
      block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var adress = Blockly.Arduino.valueToCode(
          block, 'ADRESS', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'Wire.requestFrom('+adress+','+quantity+',true);\n';
  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wire_begin'] = function(block) {
  Blockly.Arduino.addInclude('wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup('wire', 'Wire.begin();', true);
  var content = Blockly.Arduino.valueToCode(
      block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'Wire.beginTransmission('+content+');\n';
  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wire_end'] = function(block) {
  Blockly.Arduino.addInclude('wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup('wire', 'Wire.begin();', true);
  var code = 'Wire.endTransmission();\n';
  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wire_write'] = function(block) {
  Blockly.Arduino.addInclude('wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup('wire', 'Wire.begin();', true);
  var content = Blockly.Arduino.valueToCode(
      block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
  var code = 'Wire.write('+content+');\n';
  return code;
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wire_read'] = function(block) {
  Blockly.Arduino.addInclude('wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup('wire', 'Wire.begin();', true);
  var code = 'Wire.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for block for setting the serial com speed.
 * Arduino code: setup{ Serial.begin(X); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code.
 */
Blockly.Arduino['wire_available'] = function(block) {
  Blockly.Arduino.addInclude('wire', '#include <Wire.h>');
  Blockly.Arduino.addSetup('wire', 'Wire.begin();', true);
  var code = 'Wire.available()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
