import type { Device } from '../types';
import air_quality from '../assets/devices/air_quality.svg';
import uv_disinfection from '../assets/devices/uv_disinfection.svg';
import iot_logger from '../assets/devices/iot_logger.svg';
import esp32_dev from '../assets/devices/esp32_dev.svg';
import ngr_relay from '../assets/devices/ngr_relay.svg';
import solar_iot from '../assets/devices/solar_iot.svg';
import smps_power from '../assets/devices/smps_power.svg';
import relay_module from '../assets/devices/relay_module.svg';
import lora_transceiver from '../assets/devices/lora_transceiver.svg';
import tft_hmi from '../assets/devices/tft_hmi.svg';
import enclosures from '../assets/devices/enclosures.svg';
import sensors_modules from '../assets/devices/sensors_modules.svg';

export const devices: Device[] = [
    { image: air_quality, name: 'Indoor Air Quality Monitor', tag: 'TR50 Based', desc: 'Real-time indoor air quality monitoring — tracks PM2.5, PM10, CO₂ and TVOC levels alongside temperature and humidity, with instant on-device readouts for facility and environmental teams.' },
    { image: uv_disinfection, name: 'UV Disinfection Controller', tag: 'Embedded + IoT', desc: 'Automated UV-C disinfection control system with multi-zone lamp, fan and pump status monitoring — built for safe, scheduled sterilization cycles in commercial and healthcare spaces.' },
    { image: iot_logger, name: 'IoT Data Logger', tag: 'ESP32 Based', desc: 'A compact ESP32-based logger that continuously records temperature, humidity and pressure, syncing readings to the cloud for remote monitoring and historical analysis.' },
    { image: esp32_dev, name: 'ESP32-S3 Development Board', tag: 'Custom Dev Board', desc: 'An in-house development board built around the ESP32-S3, designed to speed up prototyping for new embedded and IoT products before they go to production.' },
    { image: ngr_relay, name: 'NGR Protection Relay', tag: 'STM32 Based', desc: 'An industrial earth-fault and neutral voltage protection relay with a clear on-device status display — built to keep electrical systems safe and compliant.' },
    { image: solar_iot, name: 'Solar IoT Monitoring System', tag: 'Weather / Environment', desc: 'A solar-powered remote monitoring station for weather and environmental data — ideal for sites with no grid power, from farms to remote infrastructure.' },
    { image: smps_power, name: 'SMPS / Power Supply', tag: '12V / 24V / Customized', desc: 'Custom switch-mode power supply design, built to the exact voltage, current and form-factor requirements of your product or industrial system.' },
    { image: relay_module, name: 'Relay Control Module', tag: 'Industrial Applications', desc: 'A multi-channel relay control module for switching industrial loads — motors, pumps and lighting — safely and reliably from a central controller.' },
    { image: lora_transceiver, name: 'LoRa Data Transceiver', tag: 'Long Range IoT', desc: 'Long-range, low-power wireless data transmission hardware for IoT nodes that need to communicate over kilometres without relying on Wi-Fi or cellular networks.' },
    { image: tft_hmi, name: 'TFT / HMI Display Solutions', tag: '2.8" · 4.3" · 5" · 7"', desc: 'Touchscreen HMI panels across multiple sizes for operating and monitoring industrial systems — lighting, fans, pumps and more — from one clean interface.' },
    { image: enclosures, name: 'Custom Enclosures', tag: 'Industrial Grade', desc: 'Rugged, industrial-grade enclosures designed around your PCB and device — built for durability in the field, on the factory floor, or outdoors.' },
    { image: sensors_modules, name: 'Sensors & Modules', tag: 'GPS · Ultrasonic · Environmental', desc: 'A range of ready-to-integrate sensor modules — GPS, ultrasonic distance, environmental and more — for adding new sensing capability to any embedded product.' },
  ];
