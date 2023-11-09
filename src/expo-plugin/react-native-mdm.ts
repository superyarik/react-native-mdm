import { ConfigPlugin, createRunOncePlugin } from '@expo/config-plugins';
const pkg = require('../../../package.json');

type Props = {};

const withRNMdm: ConfigPlugin<Props> = (config) => config;

export default createRunOncePlugin(withRNMdm, pkg.name, pkg.version);
