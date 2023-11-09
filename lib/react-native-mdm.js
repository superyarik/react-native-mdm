"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const pkg = require('../../../package.json');
const withRNMdm = (config) => config;
exports.default = (0, config_plugins_1.createRunOncePlugin)(withRNMdm, pkg.name, pkg.version);
