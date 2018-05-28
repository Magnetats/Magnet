/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/ 	
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
<<<<<<< HEAD
/******/ 	var hotCurrentHash = "20e3204246a83e321ba0"; // eslint-disable-line no-unused-vars
=======
/******/ 	var hotCurrentHash = "a7c8ce67a2d1e815c19a"; // eslint-disable-line no-unused-vars
>>>>>>> 8c33ec3279a953951cee7b2bf68fa3188488e039
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/root.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_UserHome_LeftNav_LeftNav__ = __webpack_require__("./client/src/components/UserHome/LeftNav/LeftNav.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_HomePage_HomePage__ = __webpack_require__("./client/src/components/HomePage/HomePage.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_registerServiceWorkers__ = __webpack_require__("./client/src/registerServiceWorkers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_Registration_RegisterUser__ = __webpack_require__("./client/src/components/Registration/RegisterUser.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_components_Registration_Login__ = __webpack_require__("./client/src/components/Registration/Login.jsx");








var Root = function Root() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', component: __WEBPACK_IMPORTED_MODULE_3__src_components_HomePage_HomePage__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/home', component: __WEBPACK_IMPORTED_MODULE_2__src_components_UserHome_LeftNav_LeftNav__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/login', component: __WEBPACK_IMPORTED_MODULE_6__src_components_Registration_Login__["a" /* default */] }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { path: '/register', component: __WEBPACK_IMPORTED_MODULE_5__src_components_Registration_RegisterUser__["a" /* default */] })
  );
};

Object(__WEBPACK_IMPORTED_MODULE_4__src_registerServiceWorkers__["a" /* default */])();

var _default = Root;
/* harmony default export */ __webpack_exports__["a"] = (_default);
// import React, { Component } from 'react'
// import { Switch, Route } from 'react-router-dom'
// import LeftNav from './src/components/UserHome/LeftNav/LeftNav'
// // import registerServiceWorker from './registerServiceWorker'
// // import Login from '../components/Login'
// // import Register from './components/Register'


// const Root = () => (
// 	<Switch>
// 		<Route exact path="/" component={LeftNav} />
// 		{/* <Route path="/userhome" component={UserHome} /> */}
// 		{/* <Route path="/goal/:id" component={CheckIn} /> */}
// 		{/* <Route component={NotFound} /> */}
// 	</Switch>
// );

// export default Root

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Root, 'Root', '/Users/crizzcoxx/dev/magnet/client/root.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/root.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/HomePage/HomePage.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HomePageTopNav__ = __webpack_require__("./client/src/components/HomePage/HomePageTopNav.jsx");



var HomePage = function HomePage() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__HomePageTopNav__["a" /* default */], null)
  );
};

var _default = HomePage;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/Users/crizzcoxx/dev/magnet/client/src/components/HomePage/HomePage.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/HomePage/HomePage.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/HomePage/HomePageTopNav.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Logo__ = __webpack_require__("./client/src/components/Logo.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Registration_RegisterUser__ = __webpack_require__("./client/src/components/Registration/RegisterUser.jsx");








var HomePageTopNavDiv = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'HomePageTopNav__HomePageTopNavDiv',
  componentId: 's1dvfb7d-0'
})(['&&& a{color:', '}.ui.top.fixed.menu{height:55px;}#logo-box{width:15%;min-width:213px;padding-left:2%;}'], __WEBPACK_IMPORTED_MODULE_3__styling_theme_variables__["b" /* appGrayLight */]);

var HomePageTopNav = function HomePageTopNav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    HomePageTopNavDiv,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'ui top fixed menu' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'item', id: 'logo-box' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Logo__["a" /* default */], null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
        { to: '/register' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'item app-top-menu-text' },
          'Register'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"],
        { to: '/login' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { className: 'item app-top-menu-text' },
          'Login'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'ui bottom fixed menu' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/images/logo.png' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item' },
        'Hey Girl Hey'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item' },
        'Testimonials'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item' },
        'Sign-in'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', null)
  );
};

var _default = HomePageTopNav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePageTopNavDiv, 'HomePageTopNavDiv', '/Users/crizzcoxx/dev/magnet/client/src/components/HomePage/HomePageTopNav.jsx');

  __REACT_HOT_LOADER__.register(HomePageTopNav, 'HomePageTopNav', '/Users/crizzcoxx/dev/magnet/client/src/components/HomePage/HomePageTopNav.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/HomePage/HomePageTopNav.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/Logo.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");





var LogoDiv = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'Logo__LogoDiv',
  componentId: 's42bkem-0'
})(['#logo-end{margin-top:-12.5px;margin-left:54px;color:', ';font-size:28px;font-style:normal;font-variant:normal;font-weight:400;position:relative;}#last-m{margin-left:-18px;color:', ';}.magnet-tip{width:10px;height:7.9px;display:-webkit-inline-box;position:relative;background-color:#f3656e;top:-15px;border-radius:0px 0px 2px 2px;}#magnet-tip-1{margin-left:2.2px;margin-right:8.7px;}#magnet-tip-2{margin-right:8.3px;}i.magnet.big.icon{transform:rotate(180deg);line-height:0;font-size:28px;margin-top:-4px;color:', ';}'], __WEBPACK_IMPORTED_MODULE_2__styling_theme_variables__["e" /* mainAppRed */], __WEBPACK_IMPORTED_MODULE_2__styling_theme_variables__["a" /* appGray */], __WEBPACK_IMPORTED_MODULE_2__styling_theme_variables__["a" /* appGray */]);

var Logo = function Logo() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    LogoDiv,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
      className: 'magnet big icon',
      size: 'large'
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', {
      id: 'last-m',
      className: 'magnet big icon',
      size: 'large'
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { id: 'logo-end' },
      'agnet.io'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'magnet-tip', id: 'magnet-tip-1' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'magnet-tip', id: 'magnet-tip-2' }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'magnet-tip' })
  );
};

var _default = Logo;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LogoDiv, 'LogoDiv', '/Users/crizzcoxx/dev/magnet/client/src/components/Logo.jsx');

  __REACT_HOT_LOADER__.register(Logo, 'Logo', '/Users/crizzcoxx/dev/magnet/client/src/components/Logo.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/Logo.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/Registration/Login.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form__ = __webpack_require__("semantic-ui-react/dist/commonjs/collections/Form/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.state = {
      username: '',
      password: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: 'handleChange',
    value: function handleChange(e, _ref) {
      var name = _ref.name,
          value = _ref.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _this2 = this;

      var _state = this.state,
          username = _state.username,
          password = _state.password;

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/users/login', {
        username: username,
        password: password
      }).then(function (response) {
        console.log('🏁', response.data);
        // Window['userId'] = response.data

        console.log();
        _this2.props.history.push('/userhome');
      }).catch(function (err) {
        console.log(err);
      });
      this.setState({ username: '', password: '' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          username = _state2.username,
          password = _state2.password;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'ui text container' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a,
          { onSubmit: this.handleSubmit },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Group,
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, { placeholder: 'Username', name: 'username', value: username, onChange: this.handleChange }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, { placeholder: 'Password', name: 'password', value: password, onChange: this.handleChange }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Button, { content: 'Submit' })
          )
        )
      );
    }
  }]);

  return Login;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Login;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Login, 'Login', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/Login.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/Login.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/Registration/RegisterUser.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form__ = __webpack_require__("semantic-ui-react/dist/commonjs/collections/Form/Form");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var options = [{ key: 'r', text: 'Recruiter', value: 'Recruiter' }, { key: 'hm', text: 'Hiring Manager', value: 'Hiring Manager' }, { key: 'tm', text: 'Talent Manager', value: 'Talent Manager' }];

var RegisterUser = function (_Component) {
  _inherits(RegisterUser, _Component);

  function RegisterUser(props) {
    _classCallCheck(this, RegisterUser);

    var _this = _possibleConstructorReturn(this, (RegisterUser.__proto__ || Object.getPrototypeOf(RegisterUser)).call(this, props));

    _this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      userRole: '',
      password: '',
      password2: ''
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(RegisterUser, [{
    key: 'handleChange',
    value: function handleChange(e, _ref) {
      var name = _ref.name,
          value = _ref.value;

      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _state = this.state,
          firstName = _state.firstName,
          lastName = _state.lastName,
          email = _state.email,
          username = _state.username,
          userRole = _state.userRole,
          password = _state.password,
          password2 = _state.password2;

      __WEBPACK_IMPORTED_MODULE_2_axios___default.a.post('/users/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        userRole: userRole,
        password: password,
        password2: password2
      }).then(function (response) {
        console.log(response);
      }).catch(function (err) {
        console.log(err);
      });
      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        userRole: '',
        password: '',
        password2: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state2 = this.state,
          firstName = _state2.firstName,
          lastName = _state2.lastName,
          email = _state2.email,
          username = _state2.username,
          userRole = _state2.userRole,
          password = _state2.password,
          password2 = _state2.password2;
      var value = this.state.value;


      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: 'ui text container' },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a,
          null,
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Group,
            null,
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'First name',
              placeholder: 'First name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Last name',
              placeholder: 'Last name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'User Name',
              placeholder: 'User Name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Company Name',
              placeholder: 'Company Name'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Password',
              placeholder: 'Password'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Input, {
              fluid: true,
              label: 'Repeat Password',
              placeholder: 'Repeat Password'
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Select, {
              fluid: true,
              label: 'I am a',
              options: options,
              placeholder: 'Super Hero'
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Checkbox, { label: 'I agree to the Terms and Conditions' }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Form_Form___default.a.Button,
            null,
            'Submit'
          )
        )
      );
    }
  }]);

  return RegisterUser;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = RegisterUser;


/* harmony default export */ __webpack_exports__["a"] = (_default);

// import React, { Component } from 'react'
// import { Popup, Button, Header, Image, Modal, Form, Message } from 'semantic-ui-react'

// class RegisterUser extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       open: false,
//     }
//      this.handleItemClick = this.handleItemClick.bind(this)
//    }

//   show = dimmer => () => this.setState({ dimmer, open: true })
//   close = () => this.setState({ open: false })

//   render() {
//     const { open, dimmer } = this.state

//     return (
//       <div>
//         {/* <Button onClick={this.show(true)}>Default</Button>
//         <Button onClick={this.show('inverted')}>Inverted</Button> */}
//         <Button onClick={this.show('blurring')}>Blurring</Button>
//         <Popup trigger={<Button onClick={this.show(false)}>None</Button>}>
//           <Popup.Header>Heads up!</Popup.Header>
//           <Popup.Content>
//             By default, a Modal closes when escape is pressed or when the dimmer is
//             clicked. Setting the dimmer to "None" (dimmer={'{'}false{'}'}) means that there is no
//             dimmer to click so clicking outside won't close the Modal. To close on
//             outside click when there's no dimmer, you can pass the "closeOnDocumentClick" prop.
//           </Popup.Content>
//         </Popup>

//         <Modal dimmer={dimmer} open={open} onClose={this.close}>
//           <Modal.Header>Select a Photo</Modal.Header>
//           <Modal.Content image>
//             <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
//             <Modal.Description>
//               <Header>Default Profile Image</Header>
//               <p>We've found the following gravatar image associated with your e-mail address.</p>
//               <p>Is it okay to use this photo?</p>
//             </Modal.Description>
//           </Modal.Content>
//           <Modal.Actions>
//             <Button color='black' onClick={this.close}>
//               Nope
//             </Button>
//             <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
//           </Modal.Actions>
//         </Modal>
//       </div>
//     )
//   }
// }

// export default RegisterUser


// const FormExampleSuccess = () => (
//   <Form success>
//     <Form.Input label='Email' placeholder='joe@schmoe.com' />
//     <Message
//       success
//       header='Form Completed'
//       content="You're all signed up for the newsletter"
//     />
//     <Button>Submit</Button>
//   </Form>
// )

// export default FormExampleSuccess

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(options, 'options', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/RegisterUser.jsx');

  __REACT_HOT_LOADER__.register(RegisterUser, 'RegisterUser', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/RegisterUser.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/Registration/RegisterUser.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStageDropDown.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Menu_Menu__ = __webpack_require__("semantic-ui-react/dist/commonjs/collections/Menu/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Menu_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__FunnelStages__ = __webpack_require__("./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx");


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var FunnelStageDropDown = function (_Component) {
  _inherits(FunnelStageDropDown, _Component);

  function FunnelStageDropDown(props) {
    _classCallCheck(this, FunnelStageDropDown);

    var _this = _possibleConstructorReturn(this, (FunnelStageDropDown.__proto__ || Object.getPrototypeOf(FunnelStageDropDown)).call(this, props));

    _this.state = {
      activeItem: 'active-reqs'
    };
    _this.handleItemClick = _this.handleItemClick.bind(_this);
    return _this;
  }

  _createClass(FunnelStageDropDown, [{
    key: 'handleItemClick',
    value: function handleItemClick(e, _ref) {
      var name = _ref.name;

      this.setState({ activeItem: name });
    }
  }, {
    key: 'render',
    value: function render() {
      var activeItem = this.state.activeItem;

      var FunnelMenu = __WEBPACK_IMPORTED_MODULE_2_styled_components___default()(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default.a).withConfig({
        displayName: 'FunnelStageDropDown__FunnelMenu',
        componentId: 's135zice-0'
      })(['&&&&&&{border-bottom:none;}']);

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        FunnelMenu,
        { tabular: true },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__FunnelStages__["a" /* default */], null)
      );
    }
  }]);

  return FunnelStageDropDown;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = FunnelStageDropDown;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FunnelStageDropDown, 'FunnelStageDropDown', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStageDropDown.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStageDropDown.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup__ = __webpack_require__("semantic-ui-react/dist/commonjs/modules/Popup/Popup");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ResumeReview__ = __webpack_require__("./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx");









var FunnelDiv = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: 'FunnelStages__FunnelDiv',
  componentId: 's9e2m4z-0'
})(['']);
var FunnelStage = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div.withConfig({
  displayName: 'FunnelStages__FunnelStage',
  componentId: 's9e2m4z-1'
})(['{height:49px;color:', ';font-size:91%;font-weight:500;background-color:#FFFFFF;border:5px solid ', ' !important;margin-right:24px;padding-top:3px;display:inline-block;text-align:center;vertical-align:middle;overflow:visible;white-space:nowrap;text-overflow:ellipsis;width:89px;position:relative;border-radius:11px;&:hover{background:', ';color:#FFFFFF;&:after{top:50%;left:78px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(136,183,213,0);border-left-color:', ' !important;border-width:9px;margin-top:-9px;}}}p{&:first-child{margin-bottom:-3px;}}p{&:last-child{margin-bottom:1px;}}&:last-child{p{padding-top:9px;text-align:center;margin-bottom:17px;}}}.funnel-number{color:', ';&:hover{color:', ';}}.icons-n-numbers{position:relative;top:-4px;& i{top:-2px;position:relative;}}&.funnel-stage{&:before{white-space:none;text-overflow:none;left:100%;top:50%;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(194,225,245,0);border-left-color:#c2e1f5;border-width:15px;margin-top:-15px;}&:after{white-space:none;text-overflow:none;top:50%;left:78px;border:solid transparent;content:" ";height:0;width:0;position:absolute;pointer-events:none;border-color:rgba(136,183,213,0);border-left-color:#FFFFFF;border-width:9px;margin-top:-9px;}&:last-child{&:after{color:transparent !important;border-color:transparent !important;background-color:transparent !important;}&:before{color:transparent !important;border-color:transparent !important;background-color:transparent !important;}}}'], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["c" /* appGrayLightest */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["d" /* lightestBlueBorder */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["f" /* medBlue */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["f" /* medBlue */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["c" /* appGrayLightest */], __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__["c" /* appGrayLightest */]);

var FunnelStages = function FunnelStages() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    FunnelDiv,
    null,
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_modules_Popup_Popup___default.a, {
      trigger: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        FunnelStage,
        {
          className: 'funnel-stage'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'p',
          null,
          'Resume'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'p',
          null,
          'Review'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          'div',
          {
            className: 'icons-n-numbers'
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
            size: 'large',
            name: 'users',
            className: 'funnel-number'
          }),
          '12,300'
        )
      ),
      inverted: true,
      content: __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ResumeReview__["a" /* default */], null),
      position: 'bottom center',
      verticalOffset: -5,
      hoverable: 'false',
      on: 'hover'
    }),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Subbed to'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Recruiter'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Hiring '
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Team Screens'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Onsite'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Interviews'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Offers'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Extended'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Offers'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Accepted'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      FunnelStage,
      {
        className: 'funnel-stage'
      },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'p',
        null,
        'Hired'
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        'div',
        {
          className: 'icons-n-numbers'
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
          size: 'large',
          name: 'users',
          className: 'funnel-number'
        }),
        '12,300'
      )
    )
  );
};

var _default = FunnelStages;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FunnelDiv, 'FunnelDiv', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');

  __REACT_HOT_LOADER__.register(FunnelStage, 'FunnelStage', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');

  __REACT_HOT_LOADER__.register(FunnelStages, 'FunnelStages', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStages.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion__ = __webpack_require__("semantic-ui-react/dist/commonjs/modules/Accordion/Accordion");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ResumeReview = function (_Component) {
  _inherits(ResumeReview, _Component);

  function ResumeReview(props) {
    _classCallCheck(this, ResumeReview);

    var _this = _possibleConstructorReturn(this, (ResumeReview.__proto__ || Object.getPrototypeOf(ResumeReview)).call(this, props));

    _this.state = {
      activeIndex: 0
    };
    return _this;
  }

  _createClass(ResumeReview, [{
    key: 'handleClick',
    value: function handleClick(e, titleProps) {
      var index = titleProps.index;
      var activeIndex = this.state.activeIndex;

      var newIndex = activeIndex === index ? -1 : index;
      this.setState({ activeIndex: newIndex });
    }
  }, {
    key: 'render',
    value: function render() {
      var activeIndex = this.state.activeIndex;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a,
        { styled: true },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Title,
          {
            active: activeIndex === 0,
            index: 0,
            onClick: this.handleClick
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, { name: 'dropdown' }),
          'What is a dog?'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Content,
          { active: activeIndex === 0 },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Title,
          {
            active: activeIndex === 1,
            index: 1,
            onClick: this.handleClick
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, { name: 'dropdown' }),
          'What kinds of dogs are there?'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Content,
          { active: activeIndex === 1 },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Title,
          {
            active: activeIndex === 2,
            index: 2,
            onClick: this.handleClick
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, { name: 'dropdown' }),
          'How do you acquire a dog?'
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_modules_Accordion_Accordion___default.a.Content,
          { active: activeIndex === 2 },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.'
          ),
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
            'p',
            null,
            'A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.'
          )
        )
      );
    }
  }]);

  return ResumeReview;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

var _default = ResumeReview;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ResumeReview, 'ResumeReview', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/ResumeReview.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/UserHome/LeftNav/HomeDashboard/HomeMain.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Segment/Segment");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid__ = __webpack_require__("semantic-ui-react/dist/commonjs/collections/Grid/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FunnelStages_FunnelStageDropDown__ = __webpack_require__("./client/src/components/UserHome/LeftNav/HomeDashboard/FunnelStages/FunnelStageDropDown.jsx");









var MainGrid = __WEBPACK_IMPORTED_MODULE_3_styled_components___default()(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a).withConfig({
  displayName: 'HomeMain__MainGrid',
  componentId: 'qmv7a4-0'
})(['&&{margin-left:185px;margin-top:-431px;width:84%;}.ui.segment{position:relative;top:18px;}']);
var HomeMain = function HomeMain() {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    MainGrid,
    null,
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Row,
      { columns: 1 },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__FunnelStages_FunnelStageDropDown__["a" /* default */], null)
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Row,
      { columns: 2 },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Widescreen'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Widescreen'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Row,
      { columns: 3 },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        { only: 'computer' },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Computer'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        { only: 'tablet mobile' },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Tablet and Mobile'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'All Sizes'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'All Sizes'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Row,
      { columns: 4, only: 'computer' },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Computer'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Computer'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Computer'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Computer'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Row,
      { columns: 3, only: 'tablet' },
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Tablet'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Tablet'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_collections_Grid_Grid___default.a.Column,
        null,
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Segment_Segment___default.a,
          null,
          'Tablet'
        )
      )
    )
  );
};

var _default = HomeMain;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MainGrid, 'MainGrid', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/HomeMain.jsx');

  __REACT_HOT_LOADER__.register(HomeMain, 'HomeMain', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/HomeMain.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/HomeDashboard/HomeMain.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/UserHome/LeftNav/LeftNav.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Icon/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image__ = __webpack_require__("semantic-ui-react/dist/commonjs/elements/Image/Image");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu__ = __webpack_require__("semantic-ui-react/dist/commonjs/collections/Menu/Menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__TopNav_TopNav__ = __webpack_require__("./client/src/components/UserHome/TopNav/TopNav.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HomeDashboard_HomeMain__ = __webpack_require__("./client/src/components/UserHome/LeftNav/HomeDashboard/HomeMain.jsx");




var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var LeftNav = function (_Component) {
  _inherits(LeftNav, _Component);

  function LeftNav(props) {
    _classCallCheck(this, LeftNav);

    var _this = _possibleConstructorReturn(this, (LeftNav.__proto__ || Object.getPrototypeOf(LeftNav)).call(this, props));

    _this.state = {
      activeItem: 'home'
    };
    _this.handleItemClick = _this.handleItemClick.bind(_this);
    return _this;
  }

  _createClass(LeftNav, [{
    key: 'handleItemClick',
    value: function handleItemClick(e, _ref) {
      var name = _ref.name;

      this.setState({
        activeItem: name
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          visible = _state.visible,
          activeItem = _state.activeItem;


      var LeftNavMenu = __WEBPACK_IMPORTED_MODULE_4_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default.a).withConfig({
        displayName: 'LeftNav__LeftNavMenu',
        componentId: 'btrex0-0'
      })(['#side-user-pic{min-width:6em;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#fff;background:0 0;color:rgba(255,255,255,0.9);height:auto;text-align:center;color:#1b1c1d;display:block;background:0 0;border-top:none;border-right:none;border-radius:5px 5px 0px 0px;padding:16px;&:hover{color:', ';}}&&&&{width:0%;min-width:120px;margin-left:2.4%;top:59px;background-color:#fff;position:relative;margin-top:50px;border-radius:5px 5px 5px 5px;-webkit-box-shadow:17px 25px 94px -10px rgba(48,72,97,1);-moz-box-shadow:17px 25px 94px -10px rgba(48,72,97,1);box-shadow:17px 25px 94px -10px rgba(48,72,97,1);}'], __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__["f" /* medBlue */]);

      var LeftNavMenuItem = __WEBPACK_IMPORTED_MODULE_4_styled_components___default()(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react_dist_commonjs_collections_Menu_Menu___default.a.Item).withConfig({
        displayName: 'LeftNav__LeftNavMenuItem',
        componentId: 'btrex0-1'
      })(['&&&&&&{color:#F0F0F0;background-color:', ' !important;font-weight:400;&:last-child{border-radius:0px 0px 5px 5px;}&:before{-webkit-box-shadow:inset -1px 19px 21px -24px rgba(223,242,250,0.59);-moz-box-shadow:inset -1px 19px 21px -24px rgba(223,242,250,0.59);box-shadow:inset -1px 19px 21px -24px rgba(223,242,250,0.59);padding-bottom:70px;}&.active{font-size:104%;font-weight:900;background-color:#565656 !important;color:transparent !important;text-shadow:2px 2px 3px rgba(255,255,255,0.5);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;.left-nav-icons{background-color:#565656 !important;color:transparent !important;text-shadow:2px 2px 3px rgba(255,255,255,0.5);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;}&:after{height:18px;width:18px;background-color:white !important;&:hover{height:18px;width:18px;background-color:white !important;}}}&:hover{&:after{height:18px;width:18px;background-color:white !important;}background-color:#FFFFFF !important;font-size:104%;font-weight:900;background-color:#565656 !important;color:transparent !important;text-shadow:2px 2px 3px rgba(255,255,255,0.5);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;.left-nav-icons{background-color:#565656 !important;color:transparent !important;text-shadow:2px 2px 3px rgba(255,255,255,0.5);-webkit-background-clip:text;-moz-background-clip:text;background-clip:text;}}}'], __WEBPACK_IMPORTED_MODULE_5__styling_theme_variables__["f" /* medBlue */]);

      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'div',
        { id: 'sidebar-container' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__TopNav_TopNav__["a" /* default */], null),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          LeftNavMenu,
          {
            pointing: true,
            vertical: true,
            icon: 'labeled',
            inverted: true,
            className: 'side-nav-background'
          },
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'user pic',
              id: 'side-user-pic'
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react_dist_commonjs_elements_Image_Image___default.a, { src: 'https://pbs.twimg.com/profile_images/965410440120483840/ydq7NYb4_400x400.jpg', size: 'medium', circular: true })
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'home',
              className: 'menu-names',
              active: activeItem === 'home',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
              name: 'home',
              className: 'left-nav-icons'
            }),
            'Home'
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'jobs',
              className: 'menu-names',
              active: activeItem === 'jobs',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
              name: 'suitcase',
              className: 'left-nav-icons'
            }),
            'My Jobs'
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'candidates',
              className: 'menu-names',
              active: activeItem === 'candidates',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
              name: 'users',
              className: 'left-nav-icons'
            }),
            'Candidates'
          ),
          __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
            LeftNavMenuItem,
            {
              name: 'metrics',
              className: 'menu-names',
              active: activeItem === 'metrics',
              onClick: this.handleItemClick
            },
            __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_semantic_ui_react_dist_commonjs_elements_Icon_Icon___default.a, {
              name: 'bar chart',
              className: 'left-nav-icons'
            }),
            'Metrics'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__HomeDashboard_HomeMain__["a" /* default */], null)
      );
    }
  }]);

  return LeftNav;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

var _default = LeftNav;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LeftNav, 'LeftNav', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/LeftNav.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/LeftNav/LeftNav.jsx');
}();

;

/***/ }),

/***/ "./client/src/components/UserHome/TopNav/TopNav.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styling_theme_variables__ = __webpack_require__("./client/src/styling/theme/variables.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Logo__ = __webpack_require__("./client/src/components/Logo.jsx");






var TopNavDiv = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div.withConfig({
  displayName: 'TopNav__TopNavDiv',
  componentId: 's1ti47xt-0'
})(['&&& a{color:', '}.ui.top.fixed.menu{height:55px;}#logo-box{width:15%;min-width:213px;padding-left:2%;}'], __WEBPACK_IMPORTED_MODULE_2__styling_theme_variables__["b" /* appGrayLight */]);

var TopNav = function TopNav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    TopNavDiv,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'ui top fixed menu' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'item', id: 'logo-box' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Logo__["a" /* default */], null)
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item app-top-menu-text' },
        'Features'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'ui bottom fixed menu' },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'item' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/images/logo.png' })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item' },
        'Hey Girl Hey'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item' },
        'Testimonials'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        { className: 'item' },
        'Sign-in'
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('p', null)
  );
};

var _default = TopNav;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TopNavDiv, 'TopNavDiv', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/TopNav/TopNav.jsx');

  __REACT_HOT_LOADER__.register(TopNav, 'TopNav', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/TopNav/TopNav.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/client/src/components/UserHome/TopNav/TopNav.jsx');
}();

;

/***/ }),

/***/ "./client/src/registerServiceWorkers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
function register() {
  if (Object({"WEBPACK":true,"BUILD_TARGET":"server"}).NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(Object({"WEBPACK":true,"BUILD_TARGET":"server"}).PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = Object({"WEBPACK":true,"BUILD_TARGET":"server"}).PUBLIC_URL + '/service-worker.js';

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });

    window.addEventListener('fetch', function (event) {
      if (event.request.url.match('^.*(\/api\/).*$')) {
        return false;
      }
    });
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(register, 'register', '/Users/crizzcoxx/dev/magnet/client/src/registerServiceWorkers.js');
}();

;

/***/ }),

/***/ "./client/src/styling/theme/variables.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return appGrayLight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return appGrayLightest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appGray; });
/* unused harmony export appBkgBlue */
/* unused harmony export leftNavLtBlue */
/* unused harmony export leftNavLightestBlue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lightestBlueBorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return mainAppRed; });
/* unused harmony export logoColorRed */
/* unused harmony export primaryBtnGreen */
/* unused harmony export hangryGrayBtn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return medBlue; });
/* unused harmony export lightBlue */
/* unused harmony export darkerWhite */
/* unused harmony export hangryRed */
/* unused harmony export kickAssPink */
/* unused harmony export appPurple */
//styled-components variables/fonts

var appGrayLight = '#343E45';
var appGrayLightest = '#686868';
var appGray = '#323439';
var appBkgBlue = '#1E354B';
var leftNavLtBlue = '#315472';
var leftNavLightestBlue = '#9ACFE2';
var lightestBlueBorder = '#C2E1F5';
var mainAppRed = '#F3656E';
var logoColorRed = '#F7626D';
var primaryBtnGreen = '#3E9282';
var hangryGrayBtn = '#394745';
// export const medBlue = '#3E5F80'
var medBlue = '#5F94B3';
var lightBlue = '#5F7A9F';
// $app-white = #F4F4FB;
var darkerWhite = '#DFF2FA';
var hangryRed = '#B42D3F';
var kickAssPink = '#D97193';
var appPurple = '#E84C89';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appGrayLight, 'appGrayLight', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(appGrayLightest, 'appGrayLightest', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(appGray, 'appGray', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(appBkgBlue, 'appBkgBlue', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(leftNavLtBlue, 'leftNavLtBlue', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(leftNavLightestBlue, 'leftNavLightestBlue', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(lightestBlueBorder, 'lightestBlueBorder', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(mainAppRed, 'mainAppRed', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(logoColorRed, 'logoColorRed', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(primaryBtnGreen, 'primaryBtnGreen', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(hangryGrayBtn, 'hangryGrayBtn', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(medBlue, 'medBlue', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(lightBlue, 'lightBlue', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(darkerWhite, 'darkerWhite', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(hangryRed, 'hangryRed', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(kickAssPink, 'kickAssPink', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');

  __REACT_HOT_LOADER__.register(appPurple, 'appPurple', '/Users/crizzcoxx/dev/magnet/client/src/styling/theme/variables.js');
}();

;

/***/ }),

/***/ "./config/passport.js":
/***/ (function(module, exports, __webpack_require__) {

var JwtStrategy = __webpack_require__("passport-jwt").Strategy;
var ExtractJwt = __webpack_require__("passport-jwt").ExtractJwt;
// load up the user model
var User = __webpack_require__("./models/user.js");
var settings = __webpack_require__("./config/settings.js"); // get settings file

module.exports = function (passport) {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    User.findOne({ id: jwt_payload.id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(JwtStrategy, 'JwtStrategy', '/Users/crizzcoxx/dev/magnet/config/passport.js');

  __REACT_HOT_LOADER__.register(ExtractJwt, 'ExtractJwt', '/Users/crizzcoxx/dev/magnet/config/passport.js');
}();

;

/***/ }),

/***/ "./config/settings.js":
/***/ (function(module, exports) {

module.exports = {
  'secret': 'mernsecure'
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),

/***/ "./models/Book.js":
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__("mongoose");

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_date: { type: Date },
  publisher: String,
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BookSchema, 'BookSchema', '/Users/crizzcoxx/dev/magnet/models/Book.js');
}();

;

/***/ }),

/***/ "./models/user.js":
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__("mongoose");

var Schema = mongoose.Schema;
var bcrypt = __webpack_require__("bcrypt-nodejs");

var UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', function (next) {
  var user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, function (err, salt) {
      if (err) {
        return next(err);
      }
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

UserSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Schema, 'Schema', '/Users/crizzcoxx/dev/magnet/models/user.js');

  __REACT_HOT_LOADER__.register(UserSchema, 'UserSchema', '/Users/crizzcoxx/dev/magnet/models/user.js');
}();

;

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	if(unacceptedModules.length > 0) {
		log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if(typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog = (logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if(shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if(shouldLog(level)) {
		if(level === "info") {
			console.log(msg);
		} else if(level === "warning") {
			console.warn(msg);
		} else if(level === "error") {
			console.error(msg);
		}
	}
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if(true) {
	var hotPollInterval = +(__resourceQuery.substr(1)) || (10 * 60 * 1000);
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if(module.hot.status() === "idle") {
			module.hot.check(true).then(function(updatedModules) {
				if(!updatedModules) {
					if(fromUpdate) log("info", "[HMR] Update applied.");
					return;
				}
				__webpack_require__("./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
				checkForUpdate(true);
			}).catch(function(err) {
				var status = module.hot.status();
				if(["abort", "fail"].indexOf(status) >= 0) {
					log("warning", "[HMR] Cannot apply update.");
					log("warning", "[HMR] " + err.stack || err.message);
					log("warning", "[HMR] You need to restart the application!");
				} else {
					log("warning", "[HMR] Update failed: " + err.stack || err.message);
				}
			});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}

/* WEBPACK VAR INJECTION */}.call(exports, "?1000"))

/***/ }),

/***/ "./routes/auth.js":
/***/ (function(module, exports, __webpack_require__) {

var mongoose = __webpack_require__("mongoose");
var passport = __webpack_require__("passport");
var settings = __webpack_require__("./config/settings.js");
__webpack_require__("./config/passport.js")(passport);
var express = __webpack_require__("express");
var jwt = __webpack_require__("jsonwebtoken");

var router = express.Router();
var User = __webpack_require__("./models/user.js");

router.post('/register', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.json({ success: false, msg: 'Please pass username and password.' });
  } else {
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    });
    // save the user
    newUser.save(function (err) {
      if (err) {
        return res.json({ success: false, msg: 'Username already exists.' });
      }
      res.json({ success: true, msg: 'Successful created new user.' });
    });
  }
});

router.post('/login', function (req, res) {
  User.findOne({
    username: req.body.username
  }, function (err, user) {
    if (err) throw err;
    if (!user) {
      res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          var token = jwt.sign(user.toJSON(), settings.secret);
          // return the information including token as JSON
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
        }
      });
    }
  });
});

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/crizzcoxx/dev/magnet/routes/auth.js');
}();

;

/***/ }),

/***/ "./routes/book.js":
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__("express");

var router = express.Router();
var mongoose = __webpack_require__("mongoose");
var Book = __webpack_require__("./models/Book.js");

var passport = __webpack_require__("passport");
__webpack_require__("./config/passport.js")(passport);

/* GET ALL BOOKS */
router.get('/', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    Book.find(function (err, books) {
      if (err) return next(err);
      res.json(books);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

/* SAVE BOOK */
router.post('/', passport.authenticate('jwt', { session: false }), function (req, res) {
  var token = getToken(req.headers);
  if (token) {
    Book.create(req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  } else {
    return res.status(403).send({ success: false, msg: 'Unauthorized.' });
  }
});

getToken = function getToken(headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', '/Users/crizzcoxx/dev/magnet/routes/book.js');
}();

;

/***/ }),

/***/ "./server/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./server/server.js");



var server = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_1__server__["default"]);
var currentApp = __WEBPACK_IMPORTED_MODULE_1__server__["default"];
server.listen(3000);

if (true) {
  module.hot.accept("./server/server.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./server/server.js"); (function () {
    server.removeListener('request', currentApp);
    server.on('request', __WEBPACK_IMPORTED_MODULE_1__server__["default"]);
    currentApp = __WEBPACK_IMPORTED_MODULE_1__server__["default"];
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(server, 'server', '/Users/crizzcoxx/dev/magnet/server/index.js');

  __REACT_HOT_LOADER__.register(currentApp, 'currentApp', '/Users/crizzcoxx/dev/magnet/server/index.js');
}();

;

/***/ }),

/***/ "./server/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__("react-router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_logging__ = __webpack_require__("express-logging");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_express_logging___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_express_logging__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_logops__ = __webpack_require__("logops");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_logops___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_logops__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__client_root__ = __webpack_require__("./client/root.jsx");










var auth = __webpack_require__("./routes/auth.js");
var book = __webpack_require__("./routes/book.js");

var favicon = __webpack_require__("serve-favicon");

// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from '../client/src/reducers'
var mongoose = __webpack_require__("mongoose");
mongoose.Promise = __webpack_require__("bluebird");

mongoose.connect('mongodb://crizzcoxx:Bulletproof@ds151433.mlab.com:51433/magnet', {
  promiseLibrary: __webpack_require__("bluebird")
}).then(function () {
  // if all is ok we will be here
  console.log('You are connected in more ways then you know');
}).catch(function (err) {
  // if error we will be here
  console.error('App starting error:', err.stack);
  process.exit(1);
});

var app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_5_express_logging___default()(__WEBPACK_IMPORTED_MODULE_6_logops___default.a));

app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.urlencoded({
  extended: false
}));
app.use(__WEBPACK_IMPORTED_MODULE_4_body_parser___default.a.json());

// app.use(favicon(path.join(__dirname, './client/.dist', 'favicon.ico')))
app.use(favicon('favicon.ico'));

app.get('/testendpoint', function (req, res) {
  res.send('Hello homeboyz');
});
app.use('/api/book', book);
app.use('/api/auth', auth);

app.get('*', function (req, res) {
  var application = Object(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(
  // <Provider store={createStore(reducers)}>
  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_0_react_router__["StaticRouter"],
    {
      location: req.url,
      context: {} },
    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__client_root__["a" /* default */], null)
  )
  // </Provider>
  );
  var html = '<!doctype html>\n    <html className"no-js" lang="">\n      <head>\n        <meta charset="utf-8">\n        <meta http-equiv="x-ua-compatible" content="ie=edge">\n        <title>HMR all the things!</title>\n        <meta name="description" content="">\n        <meta name="viewport"\n        content="width=device-width,  initial-scale=1">\n        <link rel="stylesheet" type="text/css" href="/client/src/styling/styles.css">\n        <link rel="stylesheet" type="text/css" href="/client/src/styling/styles.scss">\n      </head>\n      <body>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>\n        <script src="//unpkg.com/moment@2.10.6/min/moment-with-locales.min.js"></script>\n        <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.0/semantic.min.js"></script>\n        <div id="root">' + application + '</div>\n        <script src="http://localhost:3001/client.js"></script>\n      </body>\n    </html>';
  res.send(html);
});
var _default = app;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/crizzcoxx/dev/magnet/server/server.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/crizzcoxx/dev/magnet/server/server.js');
}();

;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack/hot/poll.js?1000");
module.exports = __webpack_require__("./server/index.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "bcrypt-nodejs":
/***/ (function(module, exports) {

module.exports = require("bcrypt-nodejs");

/***/ }),

/***/ "bluebird":
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "body-parser":
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-logging":
/***/ (function(module, exports) {

module.exports = require("express-logging");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "jsonwebtoken":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "logops":
/***/ (function(module, exports) {

module.exports = require("logops");

/***/ }),

/***/ "mongoose":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "passport":
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),

/***/ "passport-jwt":
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router":
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/collections/Form/Form":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Form/Form");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/collections/Grid/Grid":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Grid/Grid");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/collections/Menu/Menu":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/collections/Menu/Menu");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/elements/Icon/Icon":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Icon/Icon");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/elements/Image/Image":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Image/Image");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/elements/Segment/Segment":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/elements/Segment/Segment");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/modules/Accordion/Accordion":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Accordion/Accordion");

/***/ }),

/***/ "semantic-ui-react/dist/commonjs/modules/Popup/Popup":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react/dist/commonjs/modules/Popup/Popup");

/***/ }),

/***/ "serve-favicon":
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });