#!/usr/bin/env node

import { Command } from 'commander';
import { CONFIG_FILE_NAME } from './util/CONSTANTS';
import aurora from './aurora';
import dotenv from 'dotenv';

// Get Env Vars
dotenv.config();

// CLI Command
const program = new Command();

// CLI Command options
program.option('-c, --config <type>', 'aurora input configuration file in root directory');

program.parse(process.argv);

const options = program.opts();

// Set auroraConfig from provided file or default to aurora.config.json
const configFile = options.config ? options.config : CONFIG_FILE_NAME;

// Run aurora
aurora(configFile);
