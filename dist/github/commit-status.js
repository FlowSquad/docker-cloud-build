"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCommitStatus = void 0;
const core = __importStar(require("@actions/core"));
const github_1 = require("@actions/github");
const setCommitStatus = async (octokit, options) => {
    const request = {
        ...github_1.context,
        ...github_1.context.repo,
        state: "success",
        context: options.title,
        description: options.description,
        target_url: options.url
    };
    core.debug(`Putting commit status with the following options: ${JSON.stringify(request)}`);
    await octokit.repos.createCommitStatus(request);
};
exports.setCommitStatus = setCommitStatus;
