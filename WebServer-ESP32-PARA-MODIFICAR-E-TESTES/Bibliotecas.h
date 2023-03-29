// Bibliotecas
#include <WiFi.h>          // Importa a Biblioteca WiFi
#include <PubSubClient.h>  // Importa a Biblioteca PubSubClient
#include <DHT.h>           // Importa a Biblioteca DHT
#include <WiFiUdp.h>       // Importa a Biblioteca WiFiUdp
#include <Arduino.h>       // Biblioteca do ArduinoJson :        https://github.com/bblanchon/ArduinoJson
#include <DNSServer.h>     // Biblioteca do DNSServer :          https://github.com/zhouhan0126/DNSServer---esp32
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <SPIFFS.h>
#include <TimeLib.h>
#include <freertos/FreeRTOS.h>
#include <freertos/task.h>
#include <EEPROM.h>
#include <AsyncJson.h>
#include "FS.h"