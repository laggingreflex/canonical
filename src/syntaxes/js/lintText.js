import {
    CLIEngine
} from 'eslint';

const cli = new CLIEngine({
    allowInlineConfig: true,
    baseConfig: false,
    configFile: require.resolve('./eslintrc.json'),
    envs: [],
    extensions: [],
    fix: false,
    globals: [],
    parser: require.resolve('babel-eslint'),
    rulePaths: [],
    useEslintrc: false
});

export default (text: string): Object => {
    return cli.executeOnText(text).results[0];
};
