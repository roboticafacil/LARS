Blockly.Blocks['walk_forward'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('walk_forward'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Walking");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['walk_forward'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.walk();\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['walk_backward'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('walk_backward'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Walking_Back");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['walk_backward'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.walk(0);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['Turn_R'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('Turn_R'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Turn_Right");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['Turn_R'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.turnR(1, 550);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['Turn_L'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('Turn_L'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Turn_Left");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['Turn_L'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.turnL(1, 550);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['PushUp'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('PushUp'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Push_Up");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['PushUp'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.pushUp(1, 600);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['UpDown'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('UpDown'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Up_Down");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['UpDown'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.upDown(1, 5000);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['Dance'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('Dance'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Dance");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['Dance'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.dance(1, 600);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['Wave'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('Wave'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Wave");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['Wave'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.wave();\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['Slow_Turn_R'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('Slow_Turn_R'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Slow_Turn_Right");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['Slow_Turn_R'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.omniWalk(1, 600, true, 1);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['Slow_Turn_L'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('Slow_Turn_L'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Slow_Turn_Left");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['Slow_Turn_L'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.omniWalk(1, 600, false, 1);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['MoonWalk'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('MoonWalk'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Moonwalk");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['MoonWalk'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.moonwalkL(1, 5000);\n';
  code+= '\n';
  return code;
};

Blockly.Blocks['Hello'] = {
  category: Facilino.locales.getKey('LANG_CATEGORY_BLOCKS'),
  helpUrl: Facilino.getHelpUrl('Hello'),
  tags: [],
  examples: [],
	  init: function() {
	this.setPreviousStatement(true, null);
	this.setNextStatement(true, null);
    this.appendDummyInput()
        .appendField("Audience_Hello");
    this.setColour("#FF00FF");
    this.setTooltip("");

  }
};

Blockly.Arduino['Hello'] = function(block) {
	Blockly.Arduino.setups_['setup_']='robot.init();\n ';
	var input_shall_walk = Blockly.Arduino.valueToCode(block, 'shall_walk', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_lars_h']='#include <LARS.h>';
  Blockly.Arduino.definitions_['declare_var_define_robot']='LARS robot;';
  var code='';
  code+='robot.hello();\n';
  code+= '\n';
  return code;
};
