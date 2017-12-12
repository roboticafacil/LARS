// Example of the LARS Movement library using the ESPUI Webinferface by Lukas Bachschwell
#include <WiFi.h>
#include <ESPUI.h>
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
  WiFi.mode(WIFI_AP);
  WiFi.setHostname("Lars");
  WiFi.softAP("Lars");
  Serial.println("");
  Serial.print("IP address: ");
  Serial.println(WiFi.softAPIP());


  ESPUI.pad("Walking Control", true, &walkingPad, COLOR_CARROT);
  ESPUI.pad("Wave some legs", false, &wavePad, COLOR_CARROT);
  ESPUI.button("Wave  Button", &audienceWaveButton, COLOR_PETERRIVER);
  ESPUI.button("MoonWalk  Button", &moonWalkButton, COLOR_PETERRIVER);
  ESPUI.button("Dance  Button", &danceButton, COLOR_PETERRIVER);
  ESPUI.button("PushUp  Button", &pushUpButton, COLOR_PETERRIVER);
  ESPUI.button("upDown  Button", &upDownButton, COLOR_PETERRIVER);
  ESPUI.button("Slow Turn Right", &slowTurnRight, COLOR_PETERRIVER);
  ESPUI.button("Slow Turn left", &slowTurnLeft, COLOR_PETERRIVER);

  ESPUI.begin("Crabby Control");

  robot.init();
  delay(1000);
}

void audienceWaveButton(Control c, int type) {
  if (type == B_DOWN) {
    audience = true;
  }
  else {
    audience = false;
  }
}


void moonWalkButton(Control c, int type) {
  if (type == B_DOWN) {
    moonwalk = true;
  }
  else {
    moonwalk = false;
  }
}

void danceButton(Control c, int type) {
  if (type == B_DOWN) {
    dance = true;
  }
  else {
    dance = false;
  }
}
void pushUpButton(Control c, int type) {
  if (type == B_DOWN) {
    PushUp = true;
  }
  else {
    PushUp = false;
  }
}
void upDownButton(Control c, int type) {
  if (type == B_DOWN) {
    upDown = true;
  }
  else {
    upDown = false;
  }
}
void slowTurnRight(Control c, int type) {
  if (type == B_DOWN) {
    omni = true;
  }
  else {
    omni = false;
  }
}

void slowTurnLeft(Control c, int type) {
  if (type == B_DOWN) {
    omni_left = true;
  }
  else {
    omni_left = false;
  }
}

void walkingPad(Control c, int value) {
  switch (value) {
    case P_LEFT_DOWN:
      turn_left = true;
      break;
    case P_LEFT_UP:
      turn_left = false;
      break;
    case P_RIGHT_DOWN:
      turn_right = true;
      break;
    case P_RIGHT_UP:
      turn_right = false;
      break;
    case P_FOR_DOWN:
      walk_forward = true;
      break;
    case P_FOR_UP:
      walk_forward = false;
      break;
    case P_BACK_DOWN:
      walk_backward = true;
      break;
    case P_BACK_UP:
      walk_backward = false;
      break;
    case P_CENTER_DOWN:
      hello = true;
      break;
    case P_CENTER_UP:
      hello = false;
      break;
  }
}

void wavePad(Control c, int value) {
  switch (value) {
    case P_LEFT_DOWN:
      robot.wave(1);
      break;
    case P_RIGHT_DOWN:
      robot.wave(2);
      break;
    case P_FOR_DOWN:
      robot.wave(3);
      break;
    case P_BACK_DOWN:
      robot.wave(4);
      break;
  }
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
