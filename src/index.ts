/**
 * Copyright (C) 2021 Alibaba Group Holding Limited
 * All rights reserved.
 */

// singleton
// @note: This will not	work
{
	if (globalThis.$$EventBusClassCount === undefined) {
		globalThis.$$EventBusClassCount = 0
	} else {
		globalThis.$$EventBusClassCount += 1
	}

	if (globalThis.$$EventBus > 0) {
		console.warn('More than one EventBus implements in this application. May cause problems.')
	}
}

export class EventBus {
	pause() {}
	resume() {}
	cycle() {}
	sort() {}

	emit() {}
	on() {}

	post() {
		// debug
		console.log(this.post.caller)
	}
}
