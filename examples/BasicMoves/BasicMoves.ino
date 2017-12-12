// Example of the LARS Movement library
#include <LARS.h>

LARS robot; // using default ESP32 pinning values for constructor

boolean walk_forward = false;
boolean walk_backward = false;
boolean hello = false;
boolean turn_left = false;
boolean turn_right = false;
boolean moonwalk = false;
boolean audience = false;
boolean omni = false;
boolean omni_left = false;
boolean dance = false;
boolean upDown = false;
boolean PushUp = false;

void setup() {
  Serial.begin(115200);

  robot.init();
  delay(500);
}

void loop() {

  if (walk_forward) robot.walk(0);
  else if (walk_backward) robot.walk();
  else if (hello) robot.hello();
  else if (turn_left) robot.turnL(1, 550);
  else if (turn_right) robot.turnR(1, 550);
  else if (moonwalk) robot.moonwalk(1, 5000);
  else if (audience) robot.wave(1);
  else if (dance) robot.dance(1, 600);
  else if (omni) robot.omniWalk(1, 600, true, 1);
  else if (omni_left) robot.omniWalk(1, 600, false, 1);
  else if (PushUp) robot.pushUp(1, 600);
  else if (upDown) robot.upDown(1, 5000);
  else robot.home();

}
