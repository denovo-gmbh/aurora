#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var CONSTANTS_1 = require("./util/CONSTANTS");
var aurora_1 = __importDefault(require("./aurora"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var program = new commander_1.Command();
program.option('-c, --config <type>', 'aurora input configuration file in root directory');
program.parse(process.argv);
var options = program.opts();
var configFile = options.config ? options.config : CONSTANTS_1.CONFIG_FILE_NAME;
(0, aurora_1.default)(configFile);
