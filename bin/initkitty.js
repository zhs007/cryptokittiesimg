"use strict";

const fs = require('fs');
const process = require('process');
const { startTaskChain } = require('jarvis-task');
const { TaskFactory_CK } = require('../src/taskfactory');
require('../src/alltask');

const cfg = JSON.parse(fs.readFileSync('./initkitty.json').toString());

startTaskChain(cfg, TaskFactory_CK.singleton, () => {

});

// if (cfg.hasOwnProperty('nameid') && cfg.hasOwnProperty('taskchain')) {
//     let curtaskchain = new TaskChain(cfg.nameid);
//     let taskd = new TaskDeamon();
//
//     let lst = cfg.taskchain;
//     for (let ii = 0; ii < lst.length; ++ii) {
//         let curnameid = lst[ii];
//         if (TaskFactory_CK.singleton.hasTask(curnameid)) {
//             curtaskchain.pushBack(TaskFactory_CK.singleton.newTask(curnameid, cfg[curnameid]));
//         }
//     }
//
//     curtaskchain.setFunc(undefined, () => {
//         // process.exit();
//     }, undefined, undefined, undefined, undefined, undefined);
//
//     // curtaskchain.start();
//
//     taskd.addTaskChain_DayClock(curtaskchain, cfg.clock);
//     taskd.start(1000);
// }
// else {
//     process.exit();
// }