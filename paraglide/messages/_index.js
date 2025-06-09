// eslint-disable
import { getLocale, trackMessageCall, experimentalMiddlewareLocaleSplitting, isServer } from "../runtime.js"
import * as en from "./en.js"
import * as ru from "./ru.js"
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ name: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const hello_world = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.hello_world(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("hello_world", locale)
	if (locale === "en") return en.hello_world(inputs)
	if (locale === "ru") return ru.hello_world(inputs)
	return "hello_world"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const open_workspace = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.open_workspace(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("open_workspace", locale)
	if (locale === "en") return en.open_workspace(inputs)
	if (locale === "ru") return ru.open_workspace(inputs)
	return "open_workspace"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const saving = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.saving(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("saving", locale)
	if (locale === "en") return en.saving(inputs)
	if (locale === "ru") return ru.saving(inputs)
	return "saving"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const save_notes = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.save_notes(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("save_notes", locale)
	if (locale === "en") return en.save_notes(inputs)
	if (locale === "ru") return ru.save_notes(inputs)
	return "save_notes"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_minutes_short = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_minutes_short(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_minutes_short", locale)
	if (locale === "en") return en.time_minutes_short(inputs)
	if (locale === "ru") return ru.time_minutes_short(inputs)
	return "time_minutes_short"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_hours_short = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_hours_short(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_hours_short", locale)
	if (locale === "en") return en.time_hours_short(inputs)
	if (locale === "ru") return ru.time_hours_short(inputs)
	return "time_hours_short"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ hours: NonNullable<unknown>, minutes: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_hours_minutes = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_hours_minutes(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_hours_minutes", locale)
	if (locale === "en") return en.time_hours_minutes(inputs)
	if (locale === "ru") return ru.time_hours_minutes(inputs)
	return "time_hours_minutes"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_less_minute = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_less_minute(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_less_minute", locale)
	if (locale === "en") return en.time_less_minute(inputs)
	if (locale === "ru") return ru.time_less_minute(inputs)
	return "time_less_minute"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_just_now = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_just_now(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_just_now", locale)
	if (locale === "en") return en.time_just_now(inputs)
	if (locale === "ru") return ru.time_just_now(inputs)
	return "time_just_now"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_minute_ago = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_minute_ago(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_minute_ago", locale)
	if (locale === "en") return en.time_minute_ago(inputs)
	if (locale === "ru") return ru.time_minute_ago(inputs)
	return "time_minute_ago"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_hour_ago = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_hour_ago(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_hour_ago", locale)
	if (locale === "en") return en.time_hour_ago(inputs)
	if (locale === "ru") return ru.time_hour_ago(inputs)
	return "time_hour_ago"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_yesterday = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_yesterday(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_yesterday", locale)
	if (locale === "en") return en.time_yesterday(inputs)
	if (locale === "ru") return ru.time_yesterday(inputs)
	return "time_yesterday"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_work_duration = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_work_duration(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_work_duration", locale)
	if (locale === "en") return en.time_work_duration(inputs)
	if (locale === "ru") return ru.time_work_duration(inputs)
	return "time_work_duration"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_paused = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_paused(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_paused", locale)
	if (locale === "en") return en.time_paused(inputs)
	if (locale === "ru") return ru.time_paused(inputs)
	return "time_paused"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ minutes: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_pause_duration = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_pause_duration(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_pause_duration", locale)
	if (locale === "en") return en.time_pause_duration(inputs)
	if (locale === "ru") return ru.time_pause_duration(inputs)
	return "time_pause_duration"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_synced = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_synced(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_synced", locale)
	if (locale === "en") return en.time_synced(inputs)
	if (locale === "ru") return ru.time_synced(inputs)
	return "time_synced"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_just_started = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_just_started(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_just_started", locale)
	if (locale === "en") return en.time_just_started(inputs)
	if (locale === "ru") return ru.time_just_started(inputs)
	return "time_just_started"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_minutes = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_minutes(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_minutes", locale)
	if (locale === "en") return en.time_minutes(inputs)
	if (locale === "ru") return ru.time_minutes(inputs)
	return "time_minutes"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_hours = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_hours(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_hours", locale)
	if (locale === "en") return en.time_hours(inputs)
	if (locale === "ru") return ru.time_hours(inputs)
	return "time_hours"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_minutes_ago = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_minutes_ago(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_minutes_ago", locale)
	if (locale === "en") return en.time_minutes_ago(inputs)
	if (locale === "ru") return ru.time_minutes_ago(inputs)
	return "time_minutes_ago"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_hours_ago = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_hours_ago(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_hours_ago", locale)
	if (locale === "en") return en.time_hours_ago(inputs)
	if (locale === "ru") return ru.time_hours_ago(inputs)
	return "time_hours_ago"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const time_days_ago = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.time_days_ago(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("time_days_ago", locale)
	if (locale === "en") return en.time_days_ago(inputs)
	if (locale === "ru") return ru.time_days_ago(inputs)
	return "time_days_ago"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_complete_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_complete_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_complete_task", locale)
	if (locale === "en") return en.actions_complete_task(inputs)
	if (locale === "ru") return ru.actions_complete_task(inputs)
	return "actions_complete_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_take_break = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_take_break(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_take_break", locale)
	if (locale === "en") return en.actions_take_break(inputs)
	if (locale === "ru") return ru.actions_take_break(inputs)
	return "actions_take_break"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_save_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_save_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_save_progress", locale)
	if (locale === "en") return en.actions_save_progress(inputs)
	if (locale === "ru") return ru.actions_save_progress(inputs)
	return "actions_save_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_new_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_new_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_new_task", locale)
	if (locale === "en") return en.actions_new_task(inputs)
	if (locale === "ru") return ru.actions_new_task(inputs)
	return "actions_new_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_all_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_all_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_all_tasks", locale)
	if (locale === "en") return en.actions_all_tasks(inputs)
	if (locale === "ru") return ru.actions_all_tasks(inputs)
	return "actions_all_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_continue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_continue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_continue", locale)
	if (locale === "en") return en.actions_continue(inputs)
	if (locale === "ru") return ru.actions_continue(inputs)
	return "actions_continue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_retry = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_retry(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_retry", locale)
	if (locale === "en") return en.actions_retry(inputs)
	if (locale === "ru") return ru.actions_retry(inputs)
	return "actions_retry"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_login = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_login(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_login", locale)
	if (locale === "en") return en.actions_login(inputs)
	if (locale === "ru") return ru.actions_login(inputs)
	return "actions_login"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_confirm = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_confirm(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_confirm", locale)
	if (locale === "en") return en.actions_confirm(inputs)
	if (locale === "ru") return ru.actions_confirm(inputs)
	return "actions_confirm"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_cancel = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_cancel(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_cancel", locale)
	if (locale === "en") return en.actions_cancel(inputs)
	if (locale === "ru") return ru.actions_cancel(inputs)
	return "actions_cancel"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const actions_undo = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.actions_undo(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("actions_undo", locale)
	if (locale === "en") return en.actions_undo(inputs)
	if (locale === "ru") return ru.actions_undo(inputs)
	return "actions_undo"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_title", locale)
	if (locale === "en") return en.workspace_title(inputs)
	if (locale === "ru") return ru.workspace_title(inputs)
	return "workspace_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ time: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_break_reminder = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_break_reminder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_break_reminder", locale)
	if (locale === "en") return en.workspace_break_reminder(inputs)
	if (locale === "ru") return ru.workspace_break_reminder(inputs)
	return "workspace_break_reminder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_task_completed = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_task_completed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_task_completed", locale)
	if (locale === "en") return en.workspace_task_completed(inputs)
	if (locale === "ru") return ru.workspace_task_completed(inputs)
	return "workspace_task_completed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_support_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_support_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_support_message", locale)
	if (locale === "en") return en.workspace_support_message(inputs)
	if (locale === "ru") return ru.workspace_support_message(inputs)
	return "workspace_support_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ greeting: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_initial_greeting = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_initial_greeting(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_initial_greeting", locale)
	if (locale === "en") return en.workspace_initial_greeting(inputs)
	if (locale === "ru") return ru.workspace_initial_greeting(inputs)
	return "workspace_initial_greeting"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ title: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_task_switched = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_task_switched(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_task_switched", locale)
	if (locale === "en") return en.workspace_task_switched(inputs)
	if (locale === "ru") return ru.workspace_task_switched(inputs)
	return "workspace_task_switched"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_pause_saved = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_pause_saved(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_pause_saved", locale)
	if (locale === "en") return en.workspace_pause_saved(inputs)
	if (locale === "ru") return ru.workspace_pause_saved(inputs)
	return "workspace_pause_saved"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_work_resumed = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_work_resumed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_work_resumed", locale)
	if (locale === "en") return en.workspace_work_resumed(inputs)
	if (locale === "ru") return ru.workspace_work_resumed(inputs)
	return "workspace_work_resumed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_select_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_select_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_select_task", locale)
	if (locale === "en") return en.workspace_select_task(inputs)
	if (locale === "ru") return ru.workspace_select_task(inputs)
	return "workspace_select_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_select_task_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_select_task_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_select_task_desc", locale)
	if (locale === "en") return en.workspace_select_task_desc(inputs)
	if (locale === "ru") return ru.workspace_select_task_desc(inputs)
	return "workspace_select_task_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_no_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_no_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_no_tasks", locale)
	if (locale === "en") return en.workspace_no_tasks(inputs)
	if (locale === "ru") return ru.workspace_no_tasks(inputs)
	return "workspace_no_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_create_first_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_create_first_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_create_first_task", locale)
	if (locale === "en") return en.workspace_create_first_task(inputs)
	if (locale === "ru") return ru.workspace_create_first_task(inputs)
	return "workspace_create_first_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ hours: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_estimated_hours = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_estimated_hours(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_estimated_hours", locale)
	if (locale === "en") return en.workspace_estimated_hours(inputs)
	if (locale === "ru") return ru.workspace_estimated_hours(inputs)
	return "workspace_estimated_hours"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_cancel = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_cancel(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_cancel", locale)
	if (locale === "en") return en.workspace_cancel(inputs)
	if (locale === "ru") return ru.workspace_cancel(inputs)
	return "workspace_cancel"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_create_new = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_create_new(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_create_new", locale)
	if (locale === "en") return en.workspace_create_new(inputs)
	if (locale === "ru") return ru.workspace_create_new(inputs)
	return "workspace_create_new"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_save_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_save_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_save_progress", locale)
	if (locale === "en") return en.workspace_save_progress(inputs)
	if (locale === "ru") return ru.workspace_save_progress(inputs)
	return "workspace_save_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_save_progress_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_save_progress_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_save_progress_desc", locale)
	if (locale === "en") return en.workspace_save_progress_desc(inputs)
	if (locale === "ru") return ru.workspace_save_progress_desc(inputs)
	return "workspace_save_progress_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_pause_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_pause_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_pause_placeholder", locale)
	if (locale === "en") return en.workspace_pause_placeholder(inputs)
	if (locale === "ru") return ru.workspace_pause_placeholder(inputs)
	return "workspace_pause_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_pause_tip = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_pause_tip(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_pause_tip", locale)
	if (locale === "en") return en.workspace_pause_tip(inputs)
	if (locale === "ru") return ru.workspace_pause_tip(inputs)
	return "workspace_pause_tip"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_skip = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_skip(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_skip", locale)
	if (locale === "en") return en.workspace_skip(inputs)
	if (locale === "ru") return ru.workspace_skip(inputs)
	return "workspace_skip"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_save_and_rest = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_save_and_rest(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_save_and_rest", locale)
	if (locale === "en") return en.workspace_save_and_rest(inputs)
	if (locale === "ru") return ru.workspace_save_and_rest(inputs)
	return "workspace_save_and_rest"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_error", locale)
	if (locale === "en") return en.workspace_error(inputs)
	if (locale === "ru") return ru.workspace_error(inputs)
	return "workspace_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_close_widgets = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_close_widgets(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_close_widgets", locale)
	if (locale === "en") return en.workspace_close_widgets(inputs)
	if (locale === "ru") return ru.workspace_close_widgets(inputs)
	return "workspace_close_widgets"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_widgets = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_widgets(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_widgets", locale)
	if (locale === "en") return en.workspace_widgets(inputs)
	if (locale === "ru") return ru.workspace_widgets(inputs)
	return "workspace_widgets"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_completion_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_completion_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_completion_message", locale)
	if (locale === "en") return en.workspace_completion_message(inputs)
	if (locale === "ru") return ru.workspace_completion_message(inputs)
	return "workspace_completion_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_deserved_rest = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_deserved_rest(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_deserved_rest", locale)
	if (locale === "en") return en.workspace_deserved_rest(inputs)
	if (locale === "ru") return ru.workspace_deserved_rest(inputs)
	return "workspace_deserved_rest"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_rest_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_rest_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_rest_message", locale)
	if (locale === "en") return en.workspace_rest_message(inputs)
	if (locale === "ru") return ru.workspace_rest_message(inputs)
	return "workspace_rest_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_user_took_break = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_user_took_break(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_user_took_break", locale)
	if (locale === "en") return en.workspace_user_took_break(inputs)
	if (locale === "ru") return ru.workspace_user_took_break(inputs)
	return "workspace_user_took_break"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_soft_activity_request = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_soft_activity_request(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_soft_activity_request", locale)
	if (locale === "en") return en.workspace_soft_activity_request(inputs)
	if (locale === "ru") return ru.workspace_soft_activity_request(inputs)
	return "workspace_soft_activity_request"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_message_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_message_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_message_error", locale)
	if (locale === "en") return en.workspace_message_error(inputs)
	if (locale === "ru") return ru.workspace_message_error(inputs)
	return "workspace_message_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ id: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_not_found = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_not_found(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_not_found", locale)
	if (locale === "en") return en.workspace_not_found(inputs)
	if (locale === "ru") return ru.workspace_not_found(inputs)
	return "workspace_not_found"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_assistant_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_assistant_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_assistant_title", locale)
	if (locale === "en") return en.workspace_assistant_title(inputs)
	if (locale === "ru") return ru.workspace_assistant_title(inputs)
	return "workspace_assistant_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_assistant_always_ready = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_assistant_always_ready(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_assistant_always_ready", locale)
	if (locale === "en") return en.workspace_assistant_always_ready(inputs)
	if (locale === "ru") return ru.workspace_assistant_always_ready(inputs)
	return "workspace_assistant_always_ready"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_assistant_offline = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_assistant_offline(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_assistant_offline", locale)
	if (locale === "en") return en.workspace_assistant_offline(inputs)
	if (locale === "ru") return ru.workspace_assistant_offline(inputs)
	return "workspace_assistant_offline"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_chat_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_chat_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_chat_placeholder", locale)
	if (locale === "en") return en.workspace_chat_placeholder(inputs)
	if (locale === "ru") return ru.workspace_chat_placeholder(inputs)
	return "workspace_chat_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_chat_placeholder_offline = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_chat_placeholder_offline(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_chat_placeholder_offline", locale)
	if (locale === "en") return en.workspace_chat_placeholder_offline(inputs)
	if (locale === "ru") return ru.workspace_chat_placeholder_offline(inputs)
	return "workspace_chat_placeholder_offline"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_time_tracker_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_time_tracker_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_time_tracker_error", locale)
	if (locale === "en") return en.workspace_time_tracker_error(inputs)
	if (locale === "ru") return ru.workspace_time_tracker_error(inputs)
	return "workspace_time_tracker_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_time_info_work_time = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_time_info_work_time(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_time_info_work_time", locale)
	if (locale === "en") return en.workspace_time_info_work_time(inputs)
	if (locale === "ru") return ru.workspace_time_info_work_time(inputs)
	return "workspace_time_info_work_time"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_time_info_paused = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_time_info_paused(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_time_info_paused", locale)
	if (locale === "en") return en.workspace_time_info_paused(inputs)
	if (locale === "ru") return ru.workspace_time_info_paused(inputs)
	return "workspace_time_info_paused"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const workspace_time_info_continue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.workspace_time_info_continue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("workspace_time_info_continue", locale)
	if (locale === "en") return en.workspace_time_info_continue(inputs)
	if (locale === "ru") return ru.workspace_time_info_continue(inputs)
	return "workspace_time_info_continue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_title", locale)
	if (locale === "en") return en.mission_control_title(inputs)
	if (locale === "ru") return ru.mission_control_title(inputs)
	return "mission_control_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_subtitle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_subtitle", locale)
	if (locale === "en") return en.mission_control_subtitle(inputs)
	if (locale === "ru") return ru.mission_control_subtitle(inputs)
	return "mission_control_subtitle"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_create_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_create_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_create_task", locale)
	if (locale === "en") return en.mission_control_create_task(inputs)
	if (locale === "ru") return ru.mission_control_create_task(inputs)
	return "mission_control_create_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_search_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_search_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_search_placeholder", locale)
	if (locale === "en") return en.mission_control_search_placeholder(inputs)
	if (locale === "ru") return ru.mission_control_search_placeholder(inputs)
	return "mission_control_search_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_search_placeholder_kbd = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_search_placeholder_kbd(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_search_placeholder_kbd", locale)
	if (locale === "en") return en.mission_control_search_placeholder_kbd(inputs)
	if (locale === "ru") return ru.mission_control_search_placeholder_kbd(inputs)
	return "mission_control_search_placeholder_kbd"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_search_hint = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_search_hint(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_search_hint", locale)
	if (locale === "en") return en.mission_control_search_hint(inputs)
	if (locale === "ru") return ru.mission_control_search_hint(inputs)
	return "mission_control_search_hint"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_overview = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_overview(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_overview", locale)
	if (locale === "en") return en.mission_control_overview(inputs)
	if (locale === "ru") return ru.mission_control_overview(inputs)
	return "mission_control_overview"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_matrix = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_matrix(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_matrix", locale)
	if (locale === "en") return en.mission_control_matrix(inputs)
	if (locale === "ru") return ru.mission_control_matrix(inputs)
	return "mission_control_matrix"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_timeline_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_timeline_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_timeline_title", locale)
	if (locale === "en") return en.mission_control_timeline_title(inputs)
	if (locale === "ru") return ru.mission_control_timeline_title(inputs)
	return "mission_control_timeline_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_timeline_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_timeline_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_timeline_desc", locale)
	if (locale === "en") return en.mission_control_timeline_desc(inputs)
	if (locale === "ru") return ru.mission_control_timeline_desc(inputs)
	return "mission_control_timeline_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_timeline_overdue_by = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_timeline_overdue_by(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_timeline_overdue_by", locale)
	if (locale === "en") return en.mission_control_timeline_overdue_by(inputs)
	if (locale === "ru") return ru.mission_control_timeline_overdue_by(inputs)
	return "mission_control_timeline_overdue_by"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_timeline_today = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_timeline_today(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_timeline_today", locale)
	if (locale === "en") return en.mission_control_timeline_today(inputs)
	if (locale === "ru") return ru.mission_control_timeline_today(inputs)
	return "mission_control_timeline_today"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_timeline_tomorrow = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_timeline_tomorrow(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_timeline_tomorrow", locale)
	if (locale === "en") return en.mission_control_timeline_tomorrow(inputs)
	if (locale === "ru") return ru.mission_control_timeline_tomorrow(inputs)
	return "mission_control_timeline_tomorrow"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_timeline_in_days = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_timeline_in_days(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_timeline_in_days", locale)
	if (locale === "en") return en.mission_control_timeline_in_days(inputs)
	if (locale === "ru") return ru.mission_control_timeline_in_days(inputs)
	return "mission_control_timeline_in_days"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_timeline_no_deadline_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_timeline_no_deadline_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_timeline_no_deadline_tasks", locale)
	if (locale === "en") return en.mission_control_timeline_no_deadline_tasks(inputs)
	if (locale === "ru") return ru.mission_control_timeline_no_deadline_tasks(inputs)
	return "mission_control_timeline_no_deadline_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_focus = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_focus(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_focus", locale)
	if (locale === "en") return en.mission_control_focus(inputs)
	if (locale === "ru") return ru.mission_control_focus(inputs)
	return "mission_control_focus"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_new_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_new_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_new_task", locale)
	if (locale === "en") return en.mission_control_new_task(inputs)
	if (locale === "ru") return ru.mission_control_new_task(inputs)
	return "mission_control_new_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_speed = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_speed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_speed", locale)
	if (locale === "en") return en.mission_control_speed(inputs)
	if (locale === "ru") return ru.mission_control_speed(inputs)
	return "mission_control_speed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_tasks_per_day = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_tasks_per_day(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_tasks_per_day", locale)
	if (locale === "en") return en.mission_control_tasks_per_day(inputs)
	if (locale === "ru") return ru.mission_control_tasks_per_day(inputs)
	return "mission_control_tasks_per_day"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_completed = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_completed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_completed", locale)
	if (locale === "en") return en.mission_control_completed(inputs)
	if (locale === "ru") return ru.mission_control_completed(inputs)
	return "mission_control_completed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_accuracy = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_accuracy(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_accuracy", locale)
	if (locale === "en") return en.mission_control_accuracy(inputs)
	if (locale === "ru") return ru.mission_control_accuracy(inputs)
	return "mission_control_accuracy"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_last_30_days = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_last_30_days(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_last_30_days", locale)
	if (locale === "en") return en.mission_control_last_30_days(inputs)
	if (locale === "ru") return ru.mission_control_last_30_days(inputs)
	return "mission_control_last_30_days"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_need_attention = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_need_attention(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_need_attention", locale)
	if (locale === "en") return en.mission_control_need_attention(inputs)
	if (locale === "ru") return ru.mission_control_need_attention(inputs)
	return "mission_control_need_attention"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_overdue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_overdue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_overdue", locale)
	if (locale === "en") return en.mission_control_overdue(inputs)
	if (locale === "ru") return ru.mission_control_overdue(inputs)
	return "mission_control_overdue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_blocked = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_blocked(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_blocked", locale)
	if (locale === "en") return en.mission_control_blocked(inputs)
	if (locale === "ru") return ru.mission_control_blocked(inputs)
	return "mission_control_blocked"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_ai_recommendations = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_ai_recommendations(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_ai_recommendations", locale)
	if (locale === "en") return en.mission_control_ai_recommendations(inputs)
	if (locale === "ru") return ru.mission_control_ai_recommendations(inputs)
	return "mission_control_ai_recommendations"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_next_priority = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_next_priority(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_next_priority", locale)
	if (locale === "en") return en.mission_control_next_priority(inputs)
	if (locale === "ru") return ru.mission_control_next_priority(inputs)
	return "mission_control_next_priority"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_continue_work = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_continue_work(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_continue_work", locale)
	if (locale === "en") return en.mission_control_continue_work(inputs)
	if (locale === "ru") return ru.mission_control_continue_work(inputs)
	return "mission_control_continue_work"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_open_ai_assistant = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_open_ai_assistant(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_open_ai_assistant", locale)
	if (locale === "en") return en.mission_control_open_ai_assistant(inputs)
	if (locale === "ru") return ru.mission_control_open_ai_assistant(inputs)
	return "mission_control_open_ai_assistant"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_active_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_active_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_active_tasks", locale)
	if (locale === "en") return en.mission_control_active_tasks(inputs)
	if (locale === "ru") return ru.mission_control_active_tasks(inputs)
	return "mission_control_active_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_continue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_continue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_continue", locale)
	if (locale === "en") return en.mission_control_continue(inputs)
	if (locale === "ru") return ru.mission_control_continue(inputs)
	return "mission_control_continue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_complete = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_complete(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_complete", locale)
	if (locale === "en") return en.mission_control_complete(inputs)
	if (locale === "ru") return ru.mission_control_complete(inputs)
	return "mission_control_complete"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_block = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_block(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_block", locale)
	if (locale === "en") return en.mission_control_block(inputs)
	if (locale === "ru") return ru.mission_control_block(inputs)
	return "mission_control_block"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_no_active_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_no_active_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_no_active_tasks", locale)
	if (locale === "en") return en.mission_control_no_active_tasks(inputs)
	if (locale === "ru") return ru.mission_control_no_active_tasks(inputs)
	return "mission_control_no_active_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research", locale)
	if (locale === "en") return en.mission_control_research(inputs)
	if (locale === "ru") return ru.mission_control_research(inputs)
	return "mission_control_research"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_tasks", locale)
	if (locale === "en") return en.mission_control_tasks(inputs)
	if (locale === "ru") return ru.mission_control_tasks(inputs)
	return "mission_control_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_with_deadline = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_with_deadline(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_with_deadline", locale)
	if (locale === "en") return en.mission_control_with_deadline(inputs)
	if (locale === "ru") return ru.mission_control_with_deadline(inputs)
	return "mission_control_with_deadline"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_analytics = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_analytics(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_analytics", locale)
	if (locale === "en") return en.mission_control_analytics(inputs)
	if (locale === "ru") return ru.mission_control_analytics(inputs)
	return "mission_control_analytics"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_details = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_details(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_details", locale)
	if (locale === "en") return en.mission_control_details(inputs)
	if (locale === "ru") return ru.mission_control_details(inputs)
	return "mission_control_details"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_stats_completed_today = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_stats_completed_today(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_stats_completed_today", locale)
	if (locale === "en") return en.mission_control_stats_completed_today(inputs)
	if (locale === "ru") return ru.mission_control_stats_completed_today(inputs)
	return "mission_control_stats_completed_today"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_stats_in_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_stats_in_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_stats_in_progress", locale)
	if (locale === "en") return en.mission_control_stats_in_progress(inputs)
	if (locale === "ru") return ru.mission_control_stats_in_progress(inputs)
	return "mission_control_stats_in_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_stats_blocked = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_stats_blocked(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_stats_blocked", locale)
	if (locale === "en") return en.mission_control_stats_blocked(inputs)
	if (locale === "ru") return ru.mission_control_stats_blocked(inputs)
	return "mission_control_stats_blocked"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_sections_research = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_sections_research(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_sections_research", locale)
	if (locale === "en") return en.mission_control_sections_research(inputs)
	if (locale === "ru") return ru.mission_control_sections_research(inputs)
	return "mission_control_sections_research"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_sections_in_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_sections_in_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_sections_in_progress", locale)
	if (locale === "en") return en.mission_control_sections_in_progress(inputs)
	if (locale === "ru") return ru.mission_control_sections_in_progress(inputs)
	return "mission_control_sections_in_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_sections_attention = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_sections_attention(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_sections_attention", locale)
	if (locale === "en") return en.mission_control_sections_attention(inputs)
	if (locale === "ru") return ru.mission_control_sections_attention(inputs)
	return "mission_control_sections_attention"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_sections_planned = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_sections_planned(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_sections_planned", locale)
	if (locale === "en") return en.mission_control_sections_planned(inputs)
	if (locale === "ru") return ru.mission_control_sections_planned(inputs)
	return "mission_control_sections_planned"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_sections_done = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_sections_done(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_sections_done", locale)
	if (locale === "en") return en.mission_control_sections_done(inputs)
	if (locale === "ru") return ru.mission_control_sections_done(inputs)
	return "mission_control_sections_done"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_many_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_many_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_many_tasks", locale)
	if (locale === "en") return en.mission_control_many_tasks(inputs)
	if (locale === "ru") return ru.mission_control_many_tasks(inputs)
	return "mission_control_many_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research_card_analyzing = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research_card_analyzing(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research_card_analyzing", locale)
	if (locale === "en") return en.mission_control_research_card_analyzing(inputs)
	if (locale === "ru") return ru.mission_control_research_card_analyzing(inputs)
	return "mission_control_research_card_analyzing"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ minutes: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research_card_remaining = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research_card_remaining(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research_card_remaining", locale)
	if (locale === "en") return en.mission_control_research_card_remaining(inputs)
	if (locale === "ru") return ru.mission_control_research_card_remaining(inputs)
	return "mission_control_research_card_remaining"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research_card_finding = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research_card_finding(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research_card_finding", locale)
	if (locale === "en") return en.mission_control_research_card_finding(inputs)
	if (locale === "ru") return ru.mission_control_research_card_finding(inputs)
	return "mission_control_research_card_finding"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research_card_finding_example = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research_card_finding_example(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research_card_finding_example", locale)
	if (locale === "en") return en.mission_control_research_card_finding_example(inputs)
	if (locale === "ru") return ru.mission_control_research_card_finding_example(inputs)
	return "mission_control_research_card_finding_example"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research_card_cancel = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research_card_cancel(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research_card_cancel", locale)
	if (locale === "en") return en.mission_control_research_card_cancel(inputs)
	if (locale === "ru") return ru.mission_control_research_card_cancel(inputs)
	return "mission_control_research_card_cancel"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research_card_cancel_notice = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research_card_cancel_notice(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research_card_cancel_notice", locale)
	if (locale === "en") return en.mission_control_research_card_cancel_notice(inputs)
	if (locale === "ru") return ru.mission_control_research_card_cancel_notice(inputs)
	return "mission_control_research_card_cancel_notice"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_not_started = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_not_started(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_not_started", locale)
	if (locale === "en") return en.mission_control_task_not_started(inputs)
	if (locale === "ru") return ru.mission_control_task_not_started(inputs)
	return "mission_control_task_not_started"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_blocker = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_blocker(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_blocker", locale)
	if (locale === "en") return en.mission_control_task_blocker(inputs)
	if (locale === "ru") return ru.mission_control_task_blocker(inputs)
	return "mission_control_task_blocker"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_attention_required = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_attention_required(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_attention_required", locale)
	if (locale === "en") return en.mission_control_task_attention_required(inputs)
	if (locale === "ru") return ru.mission_control_task_attention_required(inputs)
	return "mission_control_task_attention_required"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_details = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_details(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_details", locale)
	if (locale === "en") return en.mission_control_task_details(inputs)
	if (locale === "ru") return ru.mission_control_task_details(inputs)
	return "mission_control_task_details"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_view_details = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_view_details(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_view_details", locale)
	if (locale === "en") return en.mission_control_task_view_details(inputs)
	if (locale === "ru") return ru.mission_control_task_view_details(inputs)
	return "mission_control_task_view_details"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_continue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_continue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_continue", locale)
	if (locale === "en") return en.mission_control_task_continue(inputs)
	if (locale === "ru") return ru.mission_control_task_continue(inputs)
	return "mission_control_task_continue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ status: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_research_card_status_text = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_research_card_status_text(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_research_card_status_text", locale)
	if (locale === "en") return en.mission_control_research_card_status_text(inputs)
	if (locale === "ru") return ru.mission_control_research_card_status_text(inputs)
	return "mission_control_research_card_status_text"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_start = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_start(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_start", locale)
	if (locale === "en") return en.mission_control_task_start(inputs)
	if (locale === "ru") return ru.mission_control_task_start(inputs)
	return "mission_control_task_start"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_completed = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_completed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_completed", locale)
	if (locale === "en") return en.mission_control_task_completed(inputs)
	if (locale === "ru") return ru.mission_control_task_completed(inputs)
	return "mission_control_task_completed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_task_blocked = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_task_blocked(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_task_blocked", locale)
	if (locale === "en") return en.mission_control_task_blocked(inputs)
	if (locale === "ru") return ru.mission_control_task_blocked(inputs)
	return "mission_control_task_blocked"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_menu_details = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_menu_details(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_menu_details", locale)
	if (locale === "en") return en.mission_control_menu_details(inputs)
	if (locale === "ru") return ru.mission_control_menu_details(inputs)
	return "mission_control_menu_details"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_menu_delete = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_menu_delete(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_menu_delete", locale)
	if (locale === "en") return en.mission_control_menu_delete(inputs)
	if (locale === "ru") return ru.mission_control_menu_delete(inputs)
	return "mission_control_menu_delete"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_empty_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_empty_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_empty_title", locale)
	if (locale === "en") return en.mission_control_empty_title(inputs)
	if (locale === "ru") return ru.mission_control_empty_title(inputs)
	return "mission_control_empty_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_empty_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_empty_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_empty_description", locale)
	if (locale === "en") return en.mission_control_empty_description(inputs)
	if (locale === "ru") return ru.mission_control_empty_description(inputs)
	return "mission_control_empty_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_error_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_error_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_error_title", locale)
	if (locale === "en") return en.mission_control_error_title(inputs)
	if (locale === "ru") return ru.mission_control_error_title(inputs)
	return "mission_control_error_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_error_retry = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_error_retry(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_error_retry", locale)
	if (locale === "en") return en.mission_control_error_retry(inputs)
	if (locale === "ru") return ru.mission_control_error_retry(inputs)
	return "mission_control_error_retry"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_error_generic = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_error_generic(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_error_generic", locale)
	if (locale === "en") return en.mission_control_error_generic(inputs)
	if (locale === "ru") return ru.mission_control_error_generic(inputs)
	return "mission_control_error_generic"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_delete_confirm = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_delete_confirm(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_delete_confirm", locale)
	if (locale === "en") return en.mission_control_delete_confirm(inputs)
	if (locale === "ru") return ru.mission_control_delete_confirm(inputs)
	return "mission_control_delete_confirm"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_delete_success = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_delete_success(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_delete_success", locale)
	if (locale === "en") return en.mission_control_delete_success(inputs)
	if (locale === "ru") return ru.mission_control_delete_success(inputs)
	return "mission_control_delete_success"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_delete_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_delete_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_delete_error", locale)
	if (locale === "en") return en.mission_control_delete_error(inputs)
	if (locale === "ru") return ru.mission_control_delete_error(inputs)
	return "mission_control_delete_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_show_all = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_show_all(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_show_all", locale)
	if (locale === "en") return en.mission_control_show_all(inputs)
	if (locale === "ru") return ru.mission_control_show_all(inputs)
	return "mission_control_show_all"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_completed_ago = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_completed_ago(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_completed_ago", locale)
	if (locale === "en") return en.mission_control_completed_ago(inputs)
	if (locale === "ru") return ru.mission_control_completed_ago(inputs)
	return "mission_control_completed_ago"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_priority_matrix_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_priority_matrix_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_priority_matrix_title", locale)
	if (locale === "en") return en.mission_control_priority_matrix_title(inputs)
	if (locale === "ru") return ru.mission_control_priority_matrix_title(inputs)
	return "mission_control_priority_matrix_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_priority_matrix_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_priority_matrix_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_priority_matrix_desc", locale)
	if (locale === "en") return en.mission_control_priority_matrix_desc(inputs)
	if (locale === "ru") return ru.mission_control_priority_matrix_desc(inputs)
	return "mission_control_priority_matrix_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_priority_matrix_urgent_important = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_priority_matrix_urgent_important(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_priority_matrix_urgent_important", locale)
	if (locale === "en") return en.mission_control_priority_matrix_urgent_important(inputs)
	if (locale === "ru") return ru.mission_control_priority_matrix_urgent_important(inputs)
	return "mission_control_priority_matrix_urgent_important"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_priority_matrix_important_not_urgent = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_priority_matrix_important_not_urgent(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_priority_matrix_important_not_urgent", locale)
	if (locale === "en") return en.mission_control_priority_matrix_important_not_urgent(inputs)
	if (locale === "ru") return ru.mission_control_priority_matrix_important_not_urgent(inputs)
	return "mission_control_priority_matrix_important_not_urgent"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_priority_matrix_urgent_not_important = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_priority_matrix_urgent_not_important(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_priority_matrix_urgent_not_important", locale)
	if (locale === "en") return en.mission_control_priority_matrix_urgent_not_important(inputs)
	if (locale === "ru") return ru.mission_control_priority_matrix_urgent_not_important(inputs)
	return "mission_control_priority_matrix_urgent_not_important"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_priority_matrix_not_urgent_not_important = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_priority_matrix_not_urgent_not_important(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_priority_matrix_not_urgent_not_important", locale)
	if (locale === "en") return en.mission_control_priority_matrix_not_urgent_not_important(inputs)
	if (locale === "ru") return ru.mission_control_priority_matrix_not_urgent_not_important(inputs)
	return "mission_control_priority_matrix_not_urgent_not_important"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_progress", locale)
	if (locale === "en") return en.mission_control_progress(inputs)
	if (locale === "ru") return ru.mission_control_progress(inputs)
	return "mission_control_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_priority = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_priority(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_priority", locale)
	if (locale === "en") return en.mission_control_priority(inputs)
	if (locale === "ru") return ru.mission_control_priority(inputs)
	return "mission_control_priority"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_deadline = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_deadline(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_deadline", locale)
	if (locale === "en") return en.mission_control_deadline(inputs)
	if (locale === "ru") return ru.mission_control_deadline(inputs)
	return "mission_control_deadline"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_start_work = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_start_work(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_start_work", locale)
	if (locale === "en") return en.mission_control_start_work(inputs)
	if (locale === "ru") return ru.mission_control_start_work(inputs)
	return "mission_control_start_work"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_more_details = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_more_details(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_more_details", locale)
	if (locale === "en") return en.mission_control_more_details(inputs)
	if (locale === "ru") return ru.mission_control_more_details(inputs)
	return "mission_control_more_details"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_focus_mode_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_focus_mode_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_focus_mode_title", locale)
	if (locale === "en") return en.mission_control_focus_mode_title(inputs)
	if (locale === "ru") return ru.mission_control_focus_mode_title(inputs)
	return "mission_control_focus_mode_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_focus_mode_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_focus_mode_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_focus_mode_desc", locale)
	if (locale === "en") return en.mission_control_focus_mode_desc(inputs)
	if (locale === "ru") return ru.mission_control_focus_mode_desc(inputs)
	return "mission_control_focus_mode_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mission_control_focus_mode_back_to_overview = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mission_control_focus_mode_back_to_overview(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mission_control_focus_mode_back_to_overview", locale)
	if (locale === "en") return en.mission_control_focus_mode_back_to_overview(inputs)
	if (locale === "ru") return ru.mission_control_focus_mode_back_to_overview(inputs)
	return "mission_control_focus_mode_back_to_overview"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_created = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_created(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_created", locale)
	if (locale === "en") return en.task_detail_created(inputs)
	if (locale === "ru") return ru.task_detail_created(inputs)
	return "task_detail_created"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_saving = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_saving(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_saving", locale)
	if (locale === "en") return en.task_detail_saving(inputs)
	if (locale === "ru") return ru.task_detail_saving(inputs)
	return "task_detail_saving"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_saved = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_saved(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_saved", locale)
	if (locale === "en") return en.task_detail_saved(inputs)
	if (locale === "ru") return ru.task_detail_saved(inputs)
	return "task_detail_saved"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_analyzing = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_analyzing(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_analyzing", locale)
	if (locale === "en") return en.task_detail_analyzing(inputs)
	if (locale === "ru") return ru.task_detail_analyzing(inputs)
	return "task_detail_analyzing"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_subtasks_found = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_subtasks_found(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_subtasks_found", locale)
	if (locale === "en") return en.task_detail_subtasks_found(inputs)
	if (locale === "ru") return ru.task_detail_subtasks_found(inputs)
	return "task_detail_subtasks_found"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_hours = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_hours(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_hours", locale)
	if (locale === "en") return en.task_detail_hours(inputs)
	if (locale === "ru") return ru.task_detail_hours(inputs)
	return "task_detail_hours"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_hours_short = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_hours_short(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_hours_short", locale)
	if (locale === "en") return en.task_detail_hours_short(inputs)
	if (locale === "ru") return ru.task_detail_hours_short(inputs)
	return "task_detail_hours_short"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_ready_to_plan = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_ready_to_plan(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_ready_to_plan", locale)
	if (locale === "en") return en.task_detail_ready_to_plan(inputs)
	if (locale === "ru") return ru.task_detail_ready_to_plan(inputs)
	return "task_detail_ready_to_plan"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_ai_help = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_ai_help(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_ai_help", locale)
	if (locale === "en") return en.task_detail_ai_help(inputs)
	if (locale === "ru") return ru.task_detail_ai_help(inputs)
	return "task_detail_ai_help"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_decompose = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_decompose(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_decompose", locale)
	if (locale === "en") return en.task_detail_decompose(inputs)
	if (locale === "ru") return ru.task_detail_decompose(inputs)
	return "task_detail_decompose"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_research = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_research(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_research", locale)
	if (locale === "en") return en.task_detail_research(inputs)
	if (locale === "ru") return ru.task_detail_research(inputs)
	return "task_detail_research"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_coming_soon = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_coming_soon(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_coming_soon", locale)
	if (locale === "en") return en.task_detail_coming_soon(inputs)
	if (locale === "ru") return ru.task_detail_coming_soon(inputs)
	return "task_detail_coming_soon"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_add_description_hint = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_add_description_hint(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_add_description_hint", locale)
	if (locale === "en") return en.task_detail_add_description_hint(inputs)
	if (locale === "ru") return ru.task_detail_add_description_hint(inputs)
	return "task_detail_add_description_hint"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_context_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_context_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_context_title", locale)
	if (locale === "en") return en.task_detail_context_title(inputs)
	if (locale === "ru") return ru.task_detail_context_title(inputs)
	return "task_detail_context_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_context_subtitle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_context_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_context_subtitle", locale)
	if (locale === "en") return en.task_detail_context_subtitle(inputs)
	if (locale === "ru") return ru.task_detail_context_subtitle(inputs)
	return "task_detail_context_subtitle"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_context_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_context_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_context_placeholder", locale)
	if (locale === "en") return en.task_detail_context_placeholder(inputs)
	if (locale === "ru") return ru.task_detail_context_placeholder(inputs)
	return "task_detail_context_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_plan_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_plan_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_plan_title", locale)
	if (locale === "en") return en.task_detail_plan_title(inputs)
	if (locale === "ru") return ru.task_detail_plan_title(inputs)
	return "task_detail_plan_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_subtasks_count = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_subtasks_count(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_subtasks_count", locale)
	if (locale === "en") return en.task_detail_subtasks_count(inputs)
	if (locale === "ru") return ru.task_detail_subtasks_count(inputs)
	return "task_detail_subtasks_count"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_update_plan = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_update_plan(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_update_plan", locale)
	if (locale === "en") return en.task_detail_update_plan(inputs)
	if (locale === "ru") return ru.task_detail_update_plan(inputs)
	return "task_detail_update_plan"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_drag_subtask = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_drag_subtask(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_drag_subtask", locale)
	if (locale === "en") return en.task_detail_drag_subtask(inputs)
	if (locale === "ru") return ru.task_detail_drag_subtask(inputs)
	return "task_detail_drag_subtask"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_drag_handle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_drag_handle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_drag_handle", locale)
	if (locale === "en") return en.task_detail_drag_handle(inputs)
	if (locale === "ru") return ru.task_detail_drag_handle(inputs)
	return "task_detail_drag_handle"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_add_subtask = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_add_subtask(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_add_subtask", locale)
	if (locale === "en") return en.task_detail_add_subtask(inputs)
	if (locale === "ru") return ru.task_detail_add_subtask(inputs)
	return "task_detail_add_subtask"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_additional_info = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_additional_info(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_additional_info", locale)
	if (locale === "en") return en.task_detail_additional_info(inputs)
	if (locale === "ru") return ru.task_detail_additional_info(inputs)
	return "task_detail_additional_info"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_implementation_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_implementation_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_implementation_placeholder", locale)
	if (locale === "en") return en.task_detail_implementation_placeholder(inputs)
	if (locale === "ru") return ru.task_detail_implementation_placeholder(inputs)
	return "task_detail_implementation_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_saving_action = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_saving_action(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_saving_action", locale)
	if (locale === "en") return en.task_detail_saving_action(inputs)
	if (locale === "ru") return ru.task_detail_saving_action(inputs)
	return "task_detail_saving_action"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_save_plan = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_save_plan(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_save_plan", locale)
	if (locale === "en") return en.task_detail_save_plan(inputs)
	if (locale === "ru") return ru.task_detail_save_plan(inputs)
	return "task_detail_save_plan"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_start_work = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_start_work(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_start_work", locale)
	if (locale === "en") return en.task_detail_start_work(inputs)
	if (locale === "ru") return ru.task_detail_start_work(inputs)
	return "task_detail_start_work"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ subtasks: NonNullable<unknown>, hours: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_plan_created = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_plan_created(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_plan_created", locale)
	if (locale === "en") return en.task_detail_plan_created(inputs)
	if (locale === "ru") return ru.task_detail_plan_created(inputs)
	return "task_detail_plan_created"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_decomposition_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_decomposition_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_decomposition_error", locale)
	if (locale === "en") return en.task_detail_decomposition_error(inputs)
	if (locale === "ru") return ru.task_detail_decomposition_error(inputs)
	return "task_detail_decomposition_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_save_notes_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_save_notes_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_save_notes_error", locale)
	if (locale === "en") return en.task_detail_save_notes_error(inputs)
	if (locale === "ru") return ru.task_detail_save_notes_error(inputs)
	return "task_detail_save_notes_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_save_subtask_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_save_subtask_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_save_subtask_error", locale)
	if (locale === "en") return en.task_detail_save_subtask_error(inputs)
	if (locale === "ru") return ru.task_detail_save_subtask_error(inputs)
	return "task_detail_save_subtask_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_new_subtask = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_new_subtask(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_new_subtask", locale)
	if (locale === "en") return en.task_detail_new_subtask(inputs)
	if (locale === "ru") return ru.task_detail_new_subtask(inputs)
	return "task_detail_new_subtask"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_order_changed = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_order_changed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_order_changed", locale)
	if (locale === "en") return en.task_detail_order_changed(inputs)
	if (locale === "ru") return ru.task_detail_order_changed(inputs)
	return "task_detail_order_changed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_order_save_reminder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_order_save_reminder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_order_save_reminder", locale)
	if (locale === "en") return en.task_detail_order_save_reminder(inputs)
	if (locale === "ru") return ru.task_detail_order_save_reminder(inputs)
	return "task_detail_order_save_reminder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_plan_saved = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_plan_saved(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_plan_saved", locale)
	if (locale === "en") return en.task_detail_plan_saved(inputs)
	if (locale === "ru") return ru.task_detail_plan_saved(inputs)
	return "task_detail_plan_saved"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_save_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_save_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_save_error", locale)
	if (locale === "en") return en.task_detail_save_error(inputs)
	if (locale === "ru") return ru.task_detail_save_error(inputs)
	return "task_detail_save_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_save_and_continue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_save_and_continue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_save_and_continue", locale)
	if (locale === "en") return en.task_detail_save_and_continue(inputs)
	if (locale === "ru") return ru.task_detail_save_and_continue(inputs)
	return "task_detail_save_and_continue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_confidence_high = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_confidence_high(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_confidence_high", locale)
	if (locale === "en") return en.task_detail_confidence_high(inputs)
	if (locale === "ru") return ru.task_detail_confidence_high(inputs)
	return "task_detail_confidence_high"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_confidence_medium = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_confidence_medium(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_confidence_medium", locale)
	if (locale === "en") return en.task_detail_confidence_medium(inputs)
	if (locale === "ru") return ru.task_detail_confidence_medium(inputs)
	return "task_detail_confidence_medium"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_confidence_low = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_confidence_low(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_confidence_low", locale)
	if (locale === "en") return en.task_detail_confidence_low(inputs)
	if (locale === "ru") return ru.task_detail_confidence_low(inputs)
	return "task_detail_confidence_low"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_confidence_research = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_confidence_research(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_confidence_research", locale)
	if (locale === "en") return en.task_detail_confidence_research(inputs)
	if (locale === "ru") return ru.task_detail_confidence_research(inputs)
	return "task_detail_confidence_research"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_notes_label = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_notes_label(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_notes_label", locale)
	if (locale === "en") return en.task_detail_notes_label(inputs)
	if (locale === "ru") return ru.task_detail_notes_label(inputs)
	return "task_detail_notes_label"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_detail_notes_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_detail_notes_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_detail_notes_placeholder", locale)
	if (locale === "en") return en.task_detail_notes_placeholder(inputs)
	if (locale === "ru") return ru.task_detail_notes_placeholder(inputs)
	return "task_detail_notes_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_title", locale)
	if (locale === "en") return en.create_task_title(inputs)
	if (locale === "ru") return ru.create_task_title(inputs)
	return "create_task_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_heading = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_heading(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_heading", locale)
	if (locale === "en") return en.create_task_heading(inputs)
	if (locale === "ru") return ru.create_task_heading(inputs)
	return "create_task_heading"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_subtitle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_subtitle", locale)
	if (locale === "en") return en.create_task_subtitle(inputs)
	if (locale === "ru") return ru.create_task_subtitle(inputs)
	return "create_task_subtitle"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_placeholder", locale)
	if (locale === "en") return en.create_task_placeholder(inputs)
	if (locale === "ru") return ru.create_task_placeholder(inputs)
	return "create_task_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_templates_label = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_templates_label(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_templates_label", locale)
	if (locale === "en") return en.create_task_templates_label(inputs)
	if (locale === "ru") return ru.create_task_templates_label(inputs)
	return "create_task_templates_label"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_templates_bug = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_templates_bug(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_templates_bug", locale)
	if (locale === "en") return en.create_task_templates_bug(inputs)
	if (locale === "ru") return ru.create_task_templates_bug(inputs)
	return "create_task_templates_bug"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_templates_bug_prefix = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_templates_bug_prefix(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_templates_bug_prefix", locale)
	if (locale === "en") return en.create_task_templates_bug_prefix(inputs)
	if (locale === "ru") return ru.create_task_templates_bug_prefix(inputs)
	return "create_task_templates_bug_prefix"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_templates_feature = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_templates_feature(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_templates_feature", locale)
	if (locale === "en") return en.create_task_templates_feature(inputs)
	if (locale === "ru") return ru.create_task_templates_feature(inputs)
	return "create_task_templates_feature"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_templates_feature_prefix = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_templates_feature_prefix(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_templates_feature_prefix", locale)
	if (locale === "en") return en.create_task_templates_feature_prefix(inputs)
	if (locale === "ru") return ru.create_task_templates_feature_prefix(inputs)
	return "create_task_templates_feature_prefix"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_templates_research = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_templates_research(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_templates_research", locale)
	if (locale === "en") return en.create_task_templates_research(inputs)
	if (locale === "ru") return ru.create_task_templates_research(inputs)
	return "create_task_templates_research"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_templates_research_prefix = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_templates_research_prefix(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_templates_research_prefix", locale)
	if (locale === "en") return en.create_task_templates_research_prefix(inputs)
	if (locale === "ru") return ru.create_task_templates_research_prefix(inputs)
	return "create_task_templates_research_prefix"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_success = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_success(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_success", locale)
	if (locale === "en") return en.create_task_success(inputs)
	if (locale === "ru") return ru.create_task_success(inputs)
	return "create_task_success"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_error", locale)
	if (locale === "en") return en.create_task_error(inputs)
	if (locale === "ru") return ru.create_task_error(inputs)
	return "create_task_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_enter = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_enter(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_enter", locale)
	if (locale === "en") return en.create_task_enter(inputs)
	if (locale === "ru") return ru.create_task_enter(inputs)
	return "create_task_enter"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_shift_enter = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_shift_enter(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_shift_enter", locale)
	if (locale === "en") return en.create_task_shift_enter(inputs)
	if (locale === "ru") return ru.create_task_shift_enter(inputs)
	return "create_task_shift_enter"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const create_task_recent = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.create_task_recent(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("create_task_recent", locale)
	if (locale === "en") return en.create_task_recent(inputs)
	if (locale === "ru") return ru.create_task_recent(inputs)
	return "create_task_recent"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtask_title_label = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtask_title_label(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtask_title_label", locale)
	if (locale === "en") return en.subtask_title_label(inputs)
	if (locale === "ru") return ru.subtask_title_label(inputs)
	return "subtask_title_label"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtask_title_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtask_title_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtask_title_placeholder", locale)
	if (locale === "en") return en.subtask_title_placeholder(inputs)
	if (locale === "ru") return ru.subtask_title_placeholder(inputs)
	return "subtask_title_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtask_hours_label = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtask_hours_label(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtask_hours_label", locale)
	if (locale === "en") return en.subtask_hours_label(inputs)
	if (locale === "ru") return ru.subtask_hours_label(inputs)
	return "subtask_hours_label"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtask_description_label = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtask_description_label(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtask_description_label", locale)
	if (locale === "en") return en.subtask_description_label(inputs)
	if (locale === "ru") return ru.subtask_description_label(inputs)
	return "subtask_description_label"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtask_description_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtask_description_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtask_description_placeholder", locale)
	if (locale === "en") return en.subtask_description_placeholder(inputs)
	if (locale === "ru") return ru.subtask_description_placeholder(inputs)
	return "subtask_description_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtask_adding = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtask_adding(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtask_adding", locale)
	if (locale === "en") return en.subtask_adding(inputs)
	if (locale === "ru") return ru.subtask_adding(inputs)
	return "subtask_adding"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_page_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_page_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_page_title", locale)
	if (locale === "en") return en.login_page_title(inputs)
	if (locale === "ru") return ru.login_page_title(inputs)
	return "login_page_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_back_home = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_back_home(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_back_home", locale)
	if (locale === "en") return en.login_back_home(inputs)
	if (locale === "ru") return ru.login_back_home(inputs)
	return "login_back_home"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_welcome_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_welcome_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_welcome_title", locale)
	if (locale === "en") return en.login_welcome_title(inputs)
	if (locale === "ru") return ru.login_welcome_title(inputs)
	return "login_welcome_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_welcome_subtitle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_welcome_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_welcome_subtitle", locale)
	if (locale === "en") return en.login_welcome_subtitle(inputs)
	if (locale === "ru") return ru.login_welcome_subtitle(inputs)
	return "login_welcome_subtitle"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_email_label = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_email_label(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_email_label", locale)
	if (locale === "en") return en.login_email_label(inputs)
	if (locale === "ru") return ru.login_email_label(inputs)
	return "login_email_label"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_email_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_email_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_email_placeholder", locale)
	if (locale === "en") return en.login_email_placeholder(inputs)
	if (locale === "ru") return ru.login_email_placeholder(inputs)
	return "login_email_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_email_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_email_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_email_description", locale)
	if (locale === "en") return en.login_email_description(inputs)
	if (locale === "ru") return ru.login_email_description(inputs)
	return "login_email_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_sending_link = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_sending_link(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_sending_link", locale)
	if (locale === "en") return en.login_sending_link(inputs)
	if (locale === "ru") return ru.login_sending_link(inputs)
	return "login_sending_link"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_get_link = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_get_link(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_get_link", locale)
	if (locale === "en") return en.login_get_link(inputs)
	if (locale === "ru") return ru.login_get_link(inputs)
	return "login_get_link"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_benefits_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_benefits_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_benefits_title", locale)
	if (locale === "en") return en.login_benefits_title(inputs)
	if (locale === "ru") return ru.login_benefits_title(inputs)
	return "login_benefits_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_benefits_no_password_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_benefits_no_password_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_benefits_no_password_title", locale)
	if (locale === "en") return en.login_benefits_no_password_title(inputs)
	if (locale === "ru") return ru.login_benefits_no_password_title(inputs)
	return "login_benefits_no_password_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_benefits_no_password_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_benefits_no_password_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_benefits_no_password_desc", locale)
	if (locale === "en") return en.login_benefits_no_password_desc(inputs)
	if (locale === "ru") return ru.login_benefits_no_password_desc(inputs)
	return "login_benefits_no_password_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_benefits_security_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_benefits_security_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_benefits_security_title", locale)
	if (locale === "en") return en.login_benefits_security_title(inputs)
	if (locale === "ru") return ru.login_benefits_security_title(inputs)
	return "login_benefits_security_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_benefits_security_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_benefits_security_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_benefits_security_desc", locale)
	if (locale === "en") return en.login_benefits_security_desc(inputs)
	if (locale === "ru") return ru.login_benefits_security_desc(inputs)
	return "login_benefits_security_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_benefits_quick_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_benefits_quick_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_benefits_quick_title", locale)
	if (locale === "en") return en.login_benefits_quick_title(inputs)
	if (locale === "ru") return ru.login_benefits_quick_title(inputs)
	return "login_benefits_quick_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_benefits_quick_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_benefits_quick_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_benefits_quick_desc", locale)
	if (locale === "en") return en.login_benefits_quick_desc(inputs)
	if (locale === "ru") return ru.login_benefits_quick_desc(inputs)
	return "login_benefits_quick_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_check_email_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_check_email_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_check_email_title", locale)
	if (locale === "en") return en.login_check_email_title(inputs)
	if (locale === "ru") return ru.login_check_email_title(inputs)
	return "login_check_email_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_check_email_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_check_email_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_check_email_message", locale)
	if (locale === "en") return en.login_check_email_message(inputs)
	if (locale === "ru") return ru.login_check_email_message(inputs)
	return "login_check_email_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_check_email_expiry_warning = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_check_email_expiry_warning(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_check_email_expiry_warning", locale)
	if (locale === "en") return en.login_check_email_expiry_warning(inputs)
	if (locale === "ru") return ru.login_check_email_expiry_warning(inputs)
	return "login_check_email_expiry_warning"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_check_email_resend_link = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_check_email_resend_link(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_check_email_resend_link", locale)
	if (locale === "en") return en.login_check_email_resend_link(inputs)
	if (locale === "ru") return ru.login_check_email_resend_link(inputs)
	return "login_check_email_resend_link"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_check_email_no_email_hint = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_check_email_no_email_hint(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_check_email_no_email_hint", locale)
	if (locale === "en") return en.login_check_email_no_email_hint(inputs)
	if (locale === "ru") return ru.login_check_email_no_email_hint(inputs)
	return "login_check_email_no_email_hint"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_thank_you = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_thank_you(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_thank_you", locale)
	if (locale === "en") return en.login_thank_you(inputs)
	if (locale === "ru") return ru.login_thank_you(inputs)
	return "login_thank_you"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_terms_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_terms_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_terms_message", locale)
	if (locale === "en") return en.login_terms_message(inputs)
	if (locale === "ru") return ru.login_terms_message(inputs)
	return "login_terms_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_errors_invalid_link = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_errors_invalid_link(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_errors_invalid_link", locale)
	if (locale === "en") return en.login_errors_invalid_link(inputs)
	if (locale === "ru") return ru.login_errors_invalid_link(inputs)
	return "login_errors_invalid_link"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_errors_expired_link = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_errors_expired_link(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_errors_expired_link", locale)
	if (locale === "en") return en.login_errors_expired_link(inputs)
	if (locale === "ru") return ru.login_errors_expired_link(inputs)
	return "login_errors_expired_link"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const login_errors_system = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.login_errors_system(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("login_errors_system", locale)
	if (locale === "en") return en.login_errors_system(inputs)
	if (locale === "ru") return ru.login_errors_system(inputs)
	return "login_errors_system"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_title", locale)
	if (locale === "en") return en.ai_assistant_title(inputs)
	if (locale === "ru") return ru.ai_assistant_title(inputs)
	return "ai_assistant_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_description", locale)
	if (locale === "en") return en.ai_assistant_description(inputs)
	if (locale === "ru") return ru.ai_assistant_description(inputs)
	return "ai_assistant_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_loading = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_loading(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_loading", locale)
	if (locale === "en") return en.ai_assistant_loading(inputs)
	if (locale === "ru") return ru.ai_assistant_loading(inputs)
	return "ai_assistant_loading"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_analyzing = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_analyzing(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_analyzing", locale)
	if (locale === "en") return en.ai_assistant_analyzing(inputs)
	if (locale === "ru") return ru.ai_assistant_analyzing(inputs)
	return "ai_assistant_analyzing"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_overview = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_overview(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_overview", locale)
	if (locale === "en") return en.ai_assistant_overview(inputs)
	if (locale === "ru") return ru.ai_assistant_overview(inputs)
	return "ai_assistant_overview"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_priorities = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_priorities(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_priorities", locale)
	if (locale === "en") return en.ai_assistant_priorities(inputs)
	if (locale === "ru") return ru.ai_assistant_priorities(inputs)
	return "ai_assistant_priorities"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_time = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_time(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_time", locale)
	if (locale === "en") return en.ai_assistant_time(inputs)
	if (locale === "ru") return ru.ai_assistant_time(inputs)
	return "ai_assistant_time"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_risks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_risks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_risks", locale)
	if (locale === "en") return en.ai_assistant_risks(inputs)
	if (locale === "ru") return ru.ai_assistant_risks(inputs)
	return "ai_assistant_risks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_total_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_total_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_total_tasks", locale)
	if (locale === "en") return en.ai_assistant_total_tasks(inputs)
	if (locale === "ru") return ru.ai_assistant_total_tasks(inputs)
	return "ai_assistant_total_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_in_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_in_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_in_progress", locale)
	if (locale === "en") return en.ai_assistant_in_progress(inputs)
	if (locale === "ru") return ru.ai_assistant_in_progress(inputs)
	return "ai_assistant_in_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_blocked = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_blocked(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_blocked", locale)
	if (locale === "en") return en.ai_assistant_blocked(inputs)
	if (locale === "ru") return ru.ai_assistant_blocked(inputs)
	return "ai_assistant_blocked"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_overdue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_overdue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_overdue", locale)
	if (locale === "en") return en.ai_assistant_overdue(inputs)
	if (locale === "ru") return ru.ai_assistant_overdue(inputs)
	return "ai_assistant_overdue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_recommendations = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_recommendations(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_recommendations", locale)
	if (locale === "en") return en.ai_assistant_recommendations(inputs)
	if (locale === "ru") return ru.ai_assistant_recommendations(inputs)
	return "ai_assistant_recommendations"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_urgent_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_urgent_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_urgent_tasks", locale)
	if (locale === "en") return en.ai_assistant_urgent_tasks(inputs)
	if (locale === "ru") return ru.ai_assistant_urgent_tasks(inputs)
	return "ai_assistant_urgent_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_urgent = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_urgent(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_urgent", locale)
	if (locale === "en") return en.ai_assistant_urgent(inputs)
	if (locale === "ru") return ru.ai_assistant_urgent(inputs)
	return "ai_assistant_urgent"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_important_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_important_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_important_tasks", locale)
	if (locale === "en") return en.ai_assistant_important_tasks(inputs)
	if (locale === "ru") return ru.ai_assistant_important_tasks(inputs)
	return "ai_assistant_important_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_important = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_important(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_important", locale)
	if (locale === "en") return en.ai_assistant_important(inputs)
	if (locale === "ru") return ru.ai_assistant_important(inputs)
	return "ai_assistant_important"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_can_wait = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_can_wait(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_can_wait", locale)
	if (locale === "en") return en.ai_assistant_can_wait(inputs)
	if (locale === "ru") return ru.ai_assistant_can_wait(inputs)
	return "ai_assistant_can_wait"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_later = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_later(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_later", locale)
	if (locale === "en") return en.ai_assistant_later(inputs)
	if (locale === "ru") return ru.ai_assistant_later(inputs)
	return "ai_assistant_later"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_time_stats = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_time_stats(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_time_stats", locale)
	if (locale === "en") return en.ai_assistant_time_stats(inputs)
	if (locale === "ru") return ru.ai_assistant_time_stats(inputs)
	return "ai_assistant_time_stats"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_estimated_time = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_estimated_time(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_estimated_time", locale)
	if (locale === "en") return en.ai_assistant_estimated_time(inputs)
	if (locale === "ru") return ru.ai_assistant_estimated_time(inputs)
	return "ai_assistant_estimated_time"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_spent_time = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_spent_time(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_spent_time", locale)
	if (locale === "en") return en.ai_assistant_spent_time(inputs)
	if (locale === "ru") return ru.ai_assistant_spent_time(inputs)
	return "ai_assistant_spent_time"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_accuracy = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_accuracy(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_accuracy", locale)
	if (locale === "en") return en.ai_assistant_accuracy(inputs)
	if (locale === "ru") return ru.ai_assistant_accuracy(inputs)
	return "ai_assistant_accuracy"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_time_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_time_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_time_progress", locale)
	if (locale === "en") return en.ai_assistant_time_progress(inputs)
	if (locale === "ru") return ru.ai_assistant_time_progress(inputs)
	return "ai_assistant_time_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_time_tips = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_time_tips(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_time_tips", locale)
	if (locale === "en") return en.ai_assistant_time_tips(inputs)
	if (locale === "ru") return ru.ai_assistant_time_tips(inputs)
	return "ai_assistant_time_tips"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_great_work = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_great_work(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_great_work", locale)
	if (locale === "en") return en.ai_assistant_great_work(inputs)
	if (locale === "ru") return ru.ai_assistant_great_work(inputs)
	return "ai_assistant_great_work"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_no_serious_risks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_no_serious_risks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_no_serious_risks", locale)
	if (locale === "en") return en.ai_assistant_no_serious_risks(inputs)
	if (locale === "ru") return ru.ai_assistant_no_serious_risks(inputs)
	return "ai_assistant_no_serious_risks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_affected_tasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_affected_tasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_affected_tasks", locale)
	if (locale === "en") return en.ai_assistant_affected_tasks(inputs)
	if (locale === "ru") return ru.ai_assistant_affected_tasks(inputs)
	return "ai_assistant_affected_tasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_ask_question = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_ask_question(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_ask_question", locale)
	if (locale === "en") return en.ai_assistant_ask_question(inputs)
	if (locale === "ru") return ru.ai_assistant_ask_question(inputs)
	return "ai_assistant_ask_question"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_send = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_send(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_send", locale)
	if (locale === "en") return en.ai_assistant_send(inputs)
	if (locale === "ru") return ru.ai_assistant_send(inputs)
	return "ai_assistant_send"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_close = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_close(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_close", locale)
	if (locale === "en") return en.ai_assistant_close(inputs)
	if (locale === "ru") return ru.ai_assistant_close(inputs)
	return "ai_assistant_close"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_question_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_question_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_question_placeholder", locale)
	if (locale === "en") return en.ai_assistant_question_placeholder(inputs)
	if (locale === "ru") return ru.ai_assistant_question_placeholder(inputs)
	return "ai_assistant_question_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_question_hint = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_question_hint(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_question_hint", locale)
	if (locale === "en") return en.ai_assistant_question_hint(inputs)
	if (locale === "ru") return ru.ai_assistant_question_hint(inputs)
	return "ai_assistant_question_hint"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_parse_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_parse_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_parse_error", locale)
	if (locale === "en") return en.ai_assistant_parse_error(inputs)
	if (locale === "ru") return ru.ai_assistant_parse_error(inputs)
	return "ai_assistant_parse_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_risk_high = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_risk_high(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_risk_high", locale)
	if (locale === "en") return en.ai_assistant_risk_high(inputs)
	if (locale === "ru") return ru.ai_assistant_risk_high(inputs)
	return "ai_assistant_risk_high"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_risk_medium = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_risk_medium(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_risk_medium", locale)
	if (locale === "en") return en.ai_assistant_risk_medium(inputs)
	if (locale === "ru") return ru.ai_assistant_risk_medium(inputs)
	return "ai_assistant_risk_medium"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const ai_assistant_risk_low = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.ai_assistant_risk_low(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("ai_assistant_risk_low", locale)
	if (locale === "en") return en.ai_assistant_risk_low(inputs)
	if (locale === "ru") return ru.ai_assistant_risk_low(inputs)
	return "ai_assistant_risk_low"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_update_preferences = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_update_preferences(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_update_preferences", locale)
	if (locale === "en") return en.onboarding_update_preferences(inputs)
	if (locale === "ru") return ru.onboarding_update_preferences(inputs)
	return "onboarding_update_preferences"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_step = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_step(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_step", locale)
	if (locale === "en") return en.onboarding_step(inputs)
	if (locale === "ru") return ru.onboarding_step(inputs)
	return "onboarding_step"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_complete = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_complete(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_complete", locale)
	if (locale === "en") return en.onboarding_complete(inputs)
	if (locale === "ru") return ru.onboarding_complete(inputs)
	return "onboarding_complete"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_back = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_back(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_back", locale)
	if (locale === "en") return en.onboarding_back(inputs)
	if (locale === "ru") return ru.onboarding_back(inputs)
	return "onboarding_back"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_continue = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_continue(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_continue", locale)
	if (locale === "en") return en.onboarding_continue(inputs)
	if (locale === "ru") return ru.onboarding_continue(inputs)
	return "onboarding_continue"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_can_change_later = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_can_change_later(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_can_change_later", locale)
	if (locale === "en") return en.onboarding_can_change_later(inputs)
	if (locale === "ru") return ru.onboarding_can_change_later(inputs)
	return "onboarding_can_change_later"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_saving = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_saving(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_saving", locale)
	if (locale === "en") return en.onboarding_saving(inputs)
	if (locale === "ru") return ru.onboarding_saving(inputs)
	return "onboarding_saving"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_update_preferences_btn = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_update_preferences_btn(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_update_preferences_btn", locale)
	if (locale === "en") return en.onboarding_update_preferences_btn(inputs)
	if (locale === "ru") return ru.onboarding_update_preferences_btn(inputs)
	return "onboarding_update_preferences_btn"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_start_working = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_start_working(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_start_working", locale)
	if (locale === "en") return en.onboarding_start_working(inputs)
	if (locale === "ru") return ru.onboarding_start_working(inputs)
	return "onboarding_start_working"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_go_back = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_go_back(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_go_back", locale)
	if (locale === "en") return en.onboarding_go_back(inputs)
	if (locale === "ru") return ru.onboarding_go_back(inputs)
	return "onboarding_go_back"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_preferences_updated = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_preferences_updated(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_preferences_updated", locale)
	if (locale === "en") return en.onboarding_preferences_updated(inputs)
	if (locale === "ru") return ru.onboarding_preferences_updated(inputs)
	return "onboarding_preferences_updated"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_ai_will_consider = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_ai_will_consider(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_ai_will_consider", locale)
	if (locale === "en") return en.onboarding_ai_will_consider(inputs)
	if (locale === "ru") return ru.onboarding_ai_will_consider(inputs)
	return "onboarding_ai_will_consider"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_check_connection = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_check_connection(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_check_connection", locale)
	if (locale === "en") return en.onboarding_check_connection(inputs)
	if (locale === "ru") return ru.onboarding_check_connection(inputs)
	return "onboarding_check_connection"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_title", locale)
	if (locale === "en") return en.onboarding_demo_title(inputs)
	if (locale === "ru") return ru.onboarding_demo_title(inputs)
	return "onboarding_demo_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_subtitle = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_subtitle", locale)
	if (locale === "en") return en.onboarding_demo_subtitle(inputs)
	if (locale === "ru") return ru.onboarding_demo_subtitle(inputs)
	return "onboarding_demo_subtitle"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ userName: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_greeting = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_greeting(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_greeting", locale)
	if (locale === "en") return en.onboarding_demo_greeting(inputs)
	if (locale === "ru") return ru.onboarding_demo_greeting(inputs)
	return "onboarding_demo_greeting"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_ai_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_ai_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_ai_description", locale)
	if (locale === "en") return en.onboarding_demo_ai_description(inputs)
	if (locale === "ru") return ru.onboarding_demo_ai_description(inputs)
	return "onboarding_demo_ai_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_ai_badge = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_ai_badge(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_ai_badge", locale)
	if (locale === "en") return en.onboarding_demo_ai_badge(inputs)
	if (locale === "ru") return ru.onboarding_demo_ai_badge(inputs)
	return "onboarding_demo_ai_badge"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_task_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_task_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_task_title", locale)
	if (locale === "en") return en.onboarding_demo_task_title(inputs)
	if (locale === "ru") return ru.onboarding_demo_task_title(inputs)
	return "onboarding_demo_task_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_task_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_task_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_task_description", locale)
	if (locale === "en") return en.onboarding_demo_task_description(inputs)
	if (locale === "ru") return ru.onboarding_demo_task_description(inputs)
	return "onboarding_demo_task_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_analyzing = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_analyzing(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_analyzing", locale)
	if (locale === "en") return en.onboarding_demo_analyzing(inputs)
	if (locale === "ru") return ru.onboarding_demo_analyzing(inputs)
	return "onboarding_demo_analyzing"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_decomposing = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_decomposing(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_decomposing", locale)
	if (locale === "en") return en.onboarding_demo_decomposing(inputs)
	if (locale === "ru") return ru.onboarding_demo_decomposing(inputs)
	return "onboarding_demo_decomposing"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_analyzing_detail = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_analyzing_detail(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_analyzing_detail", locale)
	if (locale === "en") return en.onboarding_demo_analyzing_detail(inputs)
	if (locale === "ru") return ru.onboarding_demo_analyzing_detail(inputs)
	return "onboarding_demo_analyzing_detail"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_decomposing_detail = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_decomposing_detail(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_decomposing_detail", locale)
	if (locale === "en") return en.onboarding_demo_decomposing_detail(inputs)
	if (locale === "ru") return ru.onboarding_demo_decomposing_detail(inputs)
	return "onboarding_demo_decomposing_detail"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_categories_planning = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_categories_planning(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_categories_planning", locale)
	if (locale === "en") return en.onboarding_demo_categories_planning(inputs)
	if (locale === "ru") return ru.onboarding_demo_categories_planning(inputs)
	return "onboarding_demo_categories_planning"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_categories_design = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_categories_design(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_categories_design", locale)
	if (locale === "en") return en.onboarding_demo_categories_design(inputs)
	if (locale === "ru") return ru.onboarding_demo_categories_design(inputs)
	return "onboarding_demo_categories_design"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_categories_development = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_categories_development(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_categories_development", locale)
	if (locale === "en") return en.onboarding_demo_categories_development(inputs)
	if (locale === "ru") return ru.onboarding_demo_categories_development(inputs)
	return "onboarding_demo_categories_development"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_categories_deployment = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_categories_deployment(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_categories_deployment", locale)
	if (locale === "en") return en.onboarding_demo_categories_deployment(inputs)
	if (locale === "ru") return ru.onboarding_demo_categories_deployment(inputs)
	return "onboarding_demo_categories_deployment"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_research_competitors = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_research_competitors(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_research_competitors", locale)
	if (locale === "en") return en.onboarding_demo_tasks_research_competitors(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_research_competitors(inputs)
	return "onboarding_demo_tasks_research_competitors"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_create_sitemap = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_create_sitemap(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_create_sitemap", locale)
	if (locale === "en") return en.onboarding_demo_tasks_create_sitemap(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_create_sitemap(inputs)
	return "onboarding_demo_tasks_create_sitemap"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_choose_tech = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_choose_tech(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_choose_tech", locale)
	if (locale === "en") return en.onboarding_demo_tasks_choose_tech(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_choose_tech(inputs)
	return "onboarding_demo_tasks_choose_tech"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_wireframes = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_wireframes(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_wireframes", locale)
	if (locale === "en") return en.onboarding_demo_tasks_wireframes(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_wireframes(inputs)
	return "onboarding_demo_tasks_wireframes"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_design_system = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_design_system(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_design_system", locale)
	if (locale === "en") return en.onboarding_demo_tasks_design_system(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_design_system(inputs)
	return "onboarding_demo_tasks_design_system"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_adaptive_design = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_adaptive_design(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_adaptive_design", locale)
	if (locale === "en") return en.onboarding_demo_tasks_adaptive_design(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_adaptive_design(inputs)
	return "onboarding_demo_tasks_adaptive_design"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_setup_env = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_setup_env(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_setup_env", locale)
	if (locale === "en") return en.onboarding_demo_tasks_setup_env(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_setup_env(inputs)
	return "onboarding_demo_tasks_setup_env"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_main_page = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_main_page(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_main_page", locale)
	if (locale === "en") return en.onboarding_demo_tasks_main_page(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_main_page(inputs)
	return "onboarding_demo_tasks_main_page"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_projects_page = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_projects_page(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_projects_page", locale)
	if (locale === "en") return en.onboarding_demo_tasks_projects_page(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_projects_page(inputs)
	return "onboarding_demo_tasks_projects_page"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_contact_form = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_contact_form(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_contact_form", locale)
	if (locale === "en") return en.onboarding_demo_tasks_contact_form(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_contact_form(inputs)
	return "onboarding_demo_tasks_contact_form"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_animations = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_animations(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_animations", locale)
	if (locale === "en") return en.onboarding_demo_tasks_animations(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_animations(inputs)
	return "onboarding_demo_tasks_animations"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_testing = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_testing(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_testing", locale)
	if (locale === "en") return en.onboarding_demo_tasks_testing(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_testing(inputs)
	return "onboarding_demo_tasks_testing"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_optimization = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_optimization(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_optimization", locale)
	if (locale === "en") return en.onboarding_demo_tasks_optimization(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_optimization(inputs)
	return "onboarding_demo_tasks_optimization"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_hosting = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_hosting(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_hosting", locale)
	if (locale === "en") return en.onboarding_demo_tasks_hosting(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_hosting(inputs)
	return "onboarding_demo_tasks_hosting"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_tasks_seo = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_tasks_seo(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_tasks_seo", locale)
	if (locale === "en") return en.onboarding_demo_tasks_seo(inputs)
	if (locale === "ru") return ru.onboarding_demo_tasks_seo(inputs)
	return "onboarding_demo_tasks_seo"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_total_time = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_total_time(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_total_time", locale)
	if (locale === "en") return en.onboarding_demo_total_time(inputs)
	if (locale === "ru") return ru.onboarding_demo_total_time(inputs)
	return "onboarding_demo_total_time"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_total_time_hours = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_total_time_hours(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_total_time_hours", locale)
	if (locale === "en") return en.onboarding_demo_total_time_hours(inputs)
	if (locale === "ru") return ru.onboarding_demo_total_time_hours(inputs)
	return "onboarding_demo_total_time_hours"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_subtasks_count = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_subtasks_count(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_subtasks_count", locale)
	if (locale === "en") return en.onboarding_demo_subtasks_count(inputs)
	if (locale === "ru") return ru.onboarding_demo_subtasks_count(inputs)
	return "onboarding_demo_subtasks_count"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_benefits_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_benefits_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_benefits_title", locale)
	if (locale === "en") return en.onboarding_demo_benefits_title(inputs)
	if (locale === "ru") return ru.onboarding_demo_benefits_title(inputs)
	return "onboarding_demo_benefits_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_benefits_time_estimate = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_benefits_time_estimate(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_benefits_time_estimate", locale)
	if (locale === "en") return en.onboarding_demo_benefits_time_estimate(inputs)
	if (locale === "ru") return ru.onboarding_demo_benefits_time_estimate(inputs)
	return "onboarding_demo_benefits_time_estimate"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_benefits_structure = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_benefits_structure(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_benefits_structure", locale)
	if (locale === "en") return en.onboarding_demo_benefits_structure(inputs)
	if (locale === "ru") return ru.onboarding_demo_benefits_structure(inputs)
	return "onboarding_demo_benefits_structure"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_benefits_no_forgotten = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_benefits_no_forgotten(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_benefits_no_forgotten", locale)
	if (locale === "en") return en.onboarding_demo_benefits_no_forgotten(inputs)
	if (locale === "ru") return ru.onboarding_demo_benefits_no_forgotten(inputs)
	return "onboarding_demo_benefits_no_forgotten"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_try_button = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_try_button(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_try_button", locale)
	if (locale === "en") return en.onboarding_demo_try_button(inputs)
	if (locale === "ru") return ru.onboarding_demo_try_button(inputs)
	return "onboarding_demo_try_button"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_demo_hint = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_demo_hint(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_demo_hint", locale)
	if (locale === "en") return en.onboarding_demo_hint(inputs)
	if (locale === "ru") return ru.onboarding_demo_hint(inputs)
	return "onboarding_demo_hint"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ step: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_step_title = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_step_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_step_title", locale)
	if (locale === "en") return en.onboarding_step_title(inputs)
	if (locale === "ru") return ru.onboarding_step_title(inputs)
	return "onboarding_step_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_steps_1_alt_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_steps_1_alt_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_steps_1_alt_title", locale)
	if (locale === "en") return en.onboarding_steps_1_alt_title(inputs)
	if (locale === "ru") return ru.onboarding_steps_1_alt_title(inputs)
	return "onboarding_steps_1_alt_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ step: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_step_subtitle = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_step_subtitle(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_step_subtitle", locale)
	if (locale === "en") return en.onboarding_step_subtitle(inputs)
	if (locale === "ru") return ru.onboarding_step_subtitle(inputs)
	return "onboarding_step_subtitle"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_questions_name = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_questions_name(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_questions_name", locale)
	if (locale === "en") return en.onboarding_questions_name(inputs)
	if (locale === "ru") return ru.onboarding_questions_name(inputs)
	return "onboarding_questions_name"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_questions_values = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_questions_values(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_questions_values", locale)
	if (locale === "en") return en.onboarding_questions_values(inputs)
	if (locale === "ru") return ru.onboarding_questions_values(inputs)
	return "onboarding_questions_values"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_questions_focus = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_questions_focus(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_questions_focus", locale)
	if (locale === "en") return en.onboarding_questions_focus(inputs)
	if (locale === "ru") return ru.onboarding_questions_focus(inputs)
	return "onboarding_questions_focus"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_questions_support = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_questions_support(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_questions_support", locale)
	if (locale === "en") return en.onboarding_questions_support(inputs)
	if (locale === "ru") return ru.onboarding_questions_support(inputs)
	return "onboarding_questions_support"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_name_placeholder = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_name_placeholder(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_name_placeholder", locale)
	if (locale === "en") return en.onboarding_name_placeholder(inputs)
	if (locale === "ru") return ru.onboarding_name_placeholder(inputs)
	return "onboarding_name_placeholder"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_name_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_name_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_name_description", locale)
	if (locale === "en") return en.onboarding_name_description(inputs)
	if (locale === "ru") return ru.onboarding_name_description(inputs)
	return "onboarding_name_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_values_life_first_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_values_life_first_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_values_life_first_title", locale)
	if (locale === "en") return en.onboarding_values_life_first_title(inputs)
	if (locale === "ru") return ru.onboarding_values_life_first_title(inputs)
	return "onboarding_values_life_first_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_values_life_first_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_values_life_first_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_values_life_first_desc", locale)
	if (locale === "en") return en.onboarding_values_life_first_desc(inputs)
	if (locale === "ru") return ru.onboarding_values_life_first_desc(inputs)
	return "onboarding_values_life_first_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_values_balance_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_values_balance_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_values_balance_title", locale)
	if (locale === "en") return en.onboarding_values_balance_title(inputs)
	if (locale === "ru") return ru.onboarding_values_balance_title(inputs)
	return "onboarding_values_balance_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_values_balance_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_values_balance_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_values_balance_desc", locale)
	if (locale === "en") return en.onboarding_values_balance_desc(inputs)
	if (locale === "ru") return ru.onboarding_values_balance_desc(inputs)
	return "onboarding_values_balance_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_values_achievement_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_values_achievement_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_values_achievement_title", locale)
	if (locale === "en") return en.onboarding_values_achievement_title(inputs)
	if (locale === "ru") return ru.onboarding_values_achievement_title(inputs)
	return "onboarding_values_achievement_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_values_achievement_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_values_achievement_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_values_achievement_desc", locale)
	if (locale === "en") return en.onboarding_values_achievement_desc(inputs)
	if (locale === "ru") return ru.onboarding_values_achievement_desc(inputs)
	return "onboarding_values_achievement_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_productivity_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_productivity_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_productivity_title", locale)
	if (locale === "en") return en.onboarding_focus_productivity_title(inputs)
	if (locale === "ru") return ru.onboarding_focus_productivity_title(inputs)
	return "onboarding_focus_productivity_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_productivity_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_productivity_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_productivity_desc", locale)
	if (locale === "en") return en.onboarding_focus_productivity_desc(inputs)
	if (locale === "ru") return ru.onboarding_focus_productivity_desc(inputs)
	return "onboarding_focus_productivity_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_creativity_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_creativity_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_creativity_title", locale)
	if (locale === "en") return en.onboarding_focus_creativity_title(inputs)
	if (locale === "ru") return ru.onboarding_focus_creativity_title(inputs)
	return "onboarding_focus_creativity_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_creativity_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_creativity_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_creativity_desc", locale)
	if (locale === "en") return en.onboarding_focus_creativity_desc(inputs)
	if (locale === "ru") return ru.onboarding_focus_creativity_desc(inputs)
	return "onboarding_focus_creativity_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_development_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_development_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_development_title", locale)
	if (locale === "en") return en.onboarding_focus_development_title(inputs)
	if (locale === "ru") return ru.onboarding_focus_development_title(inputs)
	return "onboarding_focus_development_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_development_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_development_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_development_desc", locale)
	if (locale === "en") return en.onboarding_focus_development_desc(inputs)
	if (locale === "ru") return ru.onboarding_focus_development_desc(inputs)
	return "onboarding_focus_development_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_wellbeing_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_wellbeing_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_wellbeing_title", locale)
	if (locale === "en") return en.onboarding_focus_wellbeing_title(inputs)
	if (locale === "ru") return ru.onboarding_focus_wellbeing_title(inputs)
	return "onboarding_focus_wellbeing_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_focus_wellbeing_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_focus_wellbeing_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_focus_wellbeing_desc", locale)
	if (locale === "en") return en.onboarding_focus_wellbeing_desc(inputs)
	if (locale === "ru") return ru.onboarding_focus_wellbeing_desc(inputs)
	return "onboarding_focus_wellbeing_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_support_gentle_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_support_gentle_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_support_gentle_title", locale)
	if (locale === "en") return en.onboarding_support_gentle_title(inputs)
	if (locale === "ru") return ru.onboarding_support_gentle_title(inputs)
	return "onboarding_support_gentle_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_support_gentle_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_support_gentle_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_support_gentle_desc", locale)
	if (locale === "en") return en.onboarding_support_gentle_desc(inputs)
	if (locale === "ru") return ru.onboarding_support_gentle_desc(inputs)
	return "onboarding_support_gentle_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_support_balanced_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_support_balanced_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_support_balanced_title", locale)
	if (locale === "en") return en.onboarding_support_balanced_title(inputs)
	if (locale === "ru") return ru.onboarding_support_balanced_title(inputs)
	return "onboarding_support_balanced_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_support_balanced_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_support_balanced_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_support_balanced_desc", locale)
	if (locale === "en") return en.onboarding_support_balanced_desc(inputs)
	if (locale === "ru") return ru.onboarding_support_balanced_desc(inputs)
	return "onboarding_support_balanced_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_support_direct_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_support_direct_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_support_direct_title", locale)
	if (locale === "en") return en.onboarding_support_direct_title(inputs)
	if (locale === "ru") return ru.onboarding_support_direct_title(inputs)
	return "onboarding_support_direct_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const onboarding_support_direct_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.onboarding_support_direct_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("onboarding_support_direct_desc", locale)
	if (locale === "en") return en.onboarding_support_direct_desc(inputs)
	if (locale === "ru") return ru.onboarding_support_direct_desc(inputs)
	return "onboarding_support_direct_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_preparation_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_preparation_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_preparation_title", locale)
	if (locale === "en") return en.categories_preparation_title(inputs)
	if (locale === "ru") return ru.categories_preparation_title(inputs)
	return "categories_preparation_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_preparation_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_preparation_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_preparation_desc", locale)
	if (locale === "en") return en.categories_preparation_desc(inputs)
	if (locale === "ru") return ru.categories_preparation_desc(inputs)
	return "categories_preparation_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_development_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_development_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_development_title", locale)
	if (locale === "en") return en.categories_development_title(inputs)
	if (locale === "ru") return ru.categories_development_title(inputs)
	return "categories_development_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_development_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_development_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_development_desc", locale)
	if (locale === "en") return en.categories_development_desc(inputs)
	if (locale === "ru") return ru.categories_development_desc(inputs)
	return "categories_development_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_testing_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_testing_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_testing_title", locale)
	if (locale === "en") return en.categories_testing_title(inputs)
	if (locale === "ru") return ru.categories_testing_title(inputs)
	return "categories_testing_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_testing_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_testing_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_testing_desc", locale)
	if (locale === "en") return en.categories_testing_desc(inputs)
	if (locale === "ru") return ru.categories_testing_desc(inputs)
	return "categories_testing_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_documentation_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_documentation_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_documentation_title", locale)
	if (locale === "en") return en.categories_documentation_title(inputs)
	if (locale === "ru") return ru.categories_documentation_title(inputs)
	return "categories_documentation_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_documentation_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_documentation_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_documentation_desc", locale)
	if (locale === "en") return en.categories_documentation_desc(inputs)
	if (locale === "ru") return ru.categories_documentation_desc(inputs)
	return "categories_documentation_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_deployment_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_deployment_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_deployment_title", locale)
	if (locale === "en") return en.categories_deployment_title(inputs)
	if (locale === "ru") return ru.categories_deployment_title(inputs)
	return "categories_deployment_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_deployment_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_deployment_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_deployment_desc", locale)
	if (locale === "en") return en.categories_deployment_desc(inputs)
	if (locale === "ru") return ru.categories_deployment_desc(inputs)
	return "categories_deployment_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_review_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_review_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_review_title", locale)
	if (locale === "en") return en.categories_review_title(inputs)
	if (locale === "ru") return ru.categories_review_title(inputs)
	return "categories_review_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_review_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_review_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_review_desc", locale)
	if (locale === "en") return en.categories_review_desc(inputs)
	if (locale === "ru") return ru.categories_review_desc(inputs)
	return "categories_review_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_other_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_other_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_other_title", locale)
	if (locale === "en") return en.categories_other_title(inputs)
	if (locale === "ru") return ru.categories_other_title(inputs)
	return "categories_other_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const categories_other_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.categories_other_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("categories_other_desc", locale)
	if (locale === "en") return en.categories_other_desc(inputs)
	if (locale === "ru") return ru.categories_other_desc(inputs)
	return "categories_other_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_label = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_label(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_label", locale)
	if (locale === "en") return en.mood_label(inputs)
	if (locale === "ru") return ru.mood_label(inputs)
	return "mood_label"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_focused_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_focused_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_focused_title", locale)
	if (locale === "en") return en.mood_focused_title(inputs)
	if (locale === "ru") return ru.mood_focused_title(inputs)
	return "mood_focused_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_focused_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_focused_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_focused_message", locale)
	if (locale === "en") return en.mood_focused_message(inputs)
	if (locale === "ru") return ru.mood_focused_message(inputs)
	return "mood_focused_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_relaxed_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_relaxed_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_relaxed_title", locale)
	if (locale === "en") return en.mood_relaxed_title(inputs)
	if (locale === "ru") return ru.mood_relaxed_title(inputs)
	return "mood_relaxed_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_relaxed_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_relaxed_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_relaxed_message", locale)
	if (locale === "en") return en.mood_relaxed_message(inputs)
	if (locale === "ru") return ru.mood_relaxed_message(inputs)
	return "mood_relaxed_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_tired_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_tired_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_tired_title", locale)
	if (locale === "en") return en.mood_tired_title(inputs)
	if (locale === "ru") return ru.mood_tired_title(inputs)
	return "mood_tired_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_tired_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_tired_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_tired_message", locale)
	if (locale === "en") return en.mood_tired_message(inputs)
	if (locale === "ru") return ru.mood_tired_message(inputs)
	return "mood_tired_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_stuck_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_stuck_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_stuck_title", locale)
	if (locale === "en") return en.mood_stuck_title(inputs)
	if (locale === "ru") return ru.mood_stuck_title(inputs)
	return "mood_stuck_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const mood_stuck_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.mood_stuck_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("mood_stuck_message", locale)
	if (locale === "en") return en.mood_stuck_message(inputs)
	if (locale === "ru") return ru.mood_stuck_message(inputs)
	return "mood_stuck_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_soft_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_soft_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_soft_title", locale)
	if (locale === "en") return en.activities_soft_title(inputs)
	if (locale === "ru") return ru.activities_soft_title(inputs)
	return "activities_soft_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_tea_break_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_tea_break_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_tea_break_title", locale)
	if (locale === "en") return en.activities_tea_break_title(inputs)
	if (locale === "ru") return ru.activities_tea_break_title(inputs)
	return "activities_tea_break_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_tea_break_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_tea_break_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_tea_break_desc", locale)
	if (locale === "en") return en.activities_tea_break_desc(inputs)
	if (locale === "ru") return ru.activities_tea_break_desc(inputs)
	return "activities_tea_break_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_stretch_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_stretch_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_stretch_title", locale)
	if (locale === "en") return en.activities_stretch_title(inputs)
	if (locale === "ru") return ru.activities_stretch_title(inputs)
	return "activities_stretch_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_stretch_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_stretch_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_stretch_desc", locale)
	if (locale === "en") return en.activities_stretch_desc(inputs)
	if (locale === "ru") return ru.activities_stretch_desc(inputs)
	return "activities_stretch_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_support_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_support_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_support_title", locale)
	if (locale === "en") return en.activities_support_title(inputs)
	if (locale === "ru") return ru.activities_support_title(inputs)
	return "activities_support_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_support_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_support_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_support_desc", locale)
	if (locale === "en") return en.activities_support_desc(inputs)
	if (locale === "ru") return ru.activities_support_desc(inputs)
	return "activities_support_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const activities_quick_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.activities_quick_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("activities_quick_title", locale)
	if (locale === "en") return en.activities_quick_title(inputs)
	if (locale === "ru") return ru.activities_quick_title(inputs)
	return "activities_quick_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sounds_ambient_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sounds_ambient_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sounds_ambient_title", locale)
	if (locale === "en") return en.sounds_ambient_title(inputs)
	if (locale === "ru") return ru.sounds_ambient_title(inputs)
	return "sounds_ambient_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sounds_off = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sounds_off(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sounds_off", locale)
	if (locale === "en") return en.sounds_off(inputs)
	if (locale === "ru") return ru.sounds_off(inputs)
	return "sounds_off"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sounds_rain = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sounds_rain(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sounds_rain", locale)
	if (locale === "en") return en.sounds_rain(inputs)
	if (locale === "ru") return ru.sounds_rain(inputs)
	return "sounds_rain"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sounds_forest = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sounds_forest(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sounds_forest", locale)
	if (locale === "en") return en.sounds_forest(inputs)
	if (locale === "ru") return ru.sounds_forest(inputs)
	return "sounds_forest"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sounds_ocean = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sounds_ocean(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sounds_ocean", locale)
	if (locale === "en") return en.sounds_ocean(inputs)
	if (locale === "ru") return ru.sounds_ocean(inputs)
	return "sounds_ocean"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_title", locale)
	if (locale === "en") return en.task_context_title(inputs)
	if (locale === "ru") return ru.task_context_title(inputs)
	return "task_context_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_expand = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_expand(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_expand", locale)
	if (locale === "en") return en.task_context_expand(inputs)
	if (locale === "ru") return ru.task_context_expand(inputs)
	return "task_context_expand"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_collapse = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_collapse(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_collapse", locale)
	if (locale === "en") return en.task_context_collapse(inputs)
	if (locale === "ru") return ru.task_context_collapse(inputs)
	return "task_context_collapse"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_select_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_select_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_select_task", locale)
	if (locale === "en") return en.task_context_select_task(inputs)
	if (locale === "ru") return ru.task_context_select_task(inputs)
	return "task_context_select_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_no_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_no_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_no_description", locale)
	if (locale === "en") return en.task_context_no_description(inputs)
	if (locale === "ru") return ru.task_context_no_description(inputs)
	return "task_context_no_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_subtasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_subtasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_subtasks", locale)
	if (locale === "en") return en.task_context_subtasks(inputs)
	if (locale === "ru") return ru.task_context_subtasks(inputs)
	return "task_context_subtasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_hours_remaining = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_hours_remaining(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_hours_remaining", locale)
	if (locale === "en") return en.task_context_hours_remaining(inputs)
	if (locale === "ru") return ru.task_context_hours_remaining(inputs)
	return "task_context_hours_remaining"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_description = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_description(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_description", locale)
	if (locale === "en") return en.task_context_description(inputs)
	if (locale === "ru") return ru.task_context_description(inputs)
	return "task_context_description"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_progress = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_progress(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_progress", locale)
	if (locale === "en") return en.task_context_progress(inputs)
	if (locale === "ru") return ru.task_context_progress(inputs)
	return "task_context_progress"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ completed: NonNullable<unknown>, total: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_subtasks_completed = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_subtasks_completed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_subtasks_completed", locale)
	if (locale === "en") return en.task_context_subtasks_completed(inputs)
	if (locale === "ru") return ru.task_context_subtasks_completed(inputs)
	return "task_context_subtasks_completed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_subtasks_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_subtasks_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_subtasks_title", locale)
	if (locale === "en") return en.task_context_subtasks_title(inputs)
	if (locale === "ru") return ru.task_context_subtasks_title(inputs)
	return "task_context_subtasks_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_no_subtasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_no_subtasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_no_subtasks", locale)
	if (locale === "en") return en.task_context_no_subtasks(inputs)
	if (locale === "ru") return ru.task_context_no_subtasks(inputs)
	return "task_context_no_subtasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_open_task = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_open_task(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_open_task", locale)
	if (locale === "en") return en.task_context_open_task(inputs)
	if (locale === "ru") return ru.task_context_open_task(inputs)
	return "task_context_open_task"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_context_hours_short = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_context_hours_short(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_context_hours_short", locale)
	if (locale === "en") return en.task_context_hours_short(inputs)
	if (locale === "ru") return ru.task_context_hours_short(inputs)
	return "task_context_hours_short"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const reminder_daily_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.reminder_daily_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("reminder_daily_title", locale)
	if (locale === "en") return en.reminder_daily_title(inputs)
	if (locale === "ru") return ru.reminder_daily_title(inputs)
	return "reminder_daily_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sort_by_created_date = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sort_by_created_date(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sort_by_created_date", locale)
	if (locale === "en") return en.sort_by_created_date(inputs)
	if (locale === "ru") return ru.sort_by_created_date(inputs)
	return "sort_by_created_date"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sort_by_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sort_by_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sort_by_title", locale)
	if (locale === "en") return en.sort_by_title(inputs)
	if (locale === "ru") return ru.sort_by_title(inputs)
	return "sort_by_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sort_by_status = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sort_by_status(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sort_by_status", locale)
	if (locale === "en") return en.sort_by_status(inputs)
	if (locale === "ru") return ru.sort_by_status(inputs)
	return "sort_by_status"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sort_by_priority = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sort_by_priority(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sort_by_priority", locale)
	if (locale === "en") return en.sort_by_priority(inputs)
	if (locale === "ru") return ru.sort_by_priority(inputs)
	return "sort_by_priority"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sort_by_deadline = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sort_by_deadline(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sort_by_deadline", locale)
	if (locale === "en") return en.sort_by_deadline(inputs)
	if (locale === "ru") return ru.sort_by_deadline(inputs)
	return "sort_by_deadline"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const sort_by_estimated_time = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.sort_by_estimated_time(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("sort_by_estimated_time", locale)
	if (locale === "en") return en.sort_by_estimated_time(inputs)
	if (locale === "ru") return ru.sort_by_estimated_time(inputs)
	return "sort_by_estimated_time"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_created_success = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_created_success(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_created_success", locale)
	if (locale === "en") return en.tasks_created_success(inputs)
	if (locale === "ru") return ru.tasks_created_success(inputs)
	return "tasks_created_success"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_decomposing = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_decomposing(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_decomposing", locale)
	if (locale === "en") return en.tasks_decomposing(inputs)
	if (locale === "ru") return ru.tasks_decomposing(inputs)
	return "tasks_decomposing"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_decomposed_success = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_decomposed_success(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_decomposed_success", locale)
	if (locale === "en") return en.tasks_decomposed_success(inputs)
	if (locale === "ru") return ru.tasks_decomposed_success(inputs)
	return "tasks_decomposed_success"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_decompose_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_decompose_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_decompose_error", locale)
	if (locale === "en") return en.tasks_decompose_error(inputs)
	if (locale === "ru") return ru.tasks_decompose_error(inputs)
	return "tasks_decompose_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_create_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_create_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_create_error", locale)
	if (locale === "en") return en.tasks_create_error(inputs)
	if (locale === "ru") return ru.tasks_create_error(inputs)
	return "tasks_create_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ status: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_status_changed = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_status_changed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_status_changed", locale)
	if (locale === "en") return en.tasks_status_changed(inputs)
	if (locale === "ru") return ru.tasks_status_changed(inputs)
	return "tasks_status_changed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ hours: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_completed_with_time = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_completed_with_time(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_completed_with_time", locale)
	if (locale === "en") return en.tasks_completed_with_time(inputs)
	if (locale === "ru") return ru.tasks_completed_with_time(inputs)
	return "tasks_completed_with_time"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_completed = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_completed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_completed", locale)
	if (locale === "en") return en.tasks_completed(inputs)
	if (locale === "ru") return ru.tasks_completed(inputs)
	return "tasks_completed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_complete_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_complete_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_complete_error", locale)
	if (locale === "en") return en.tasks_complete_error(inputs)
	if (locale === "ru") return ru.tasks_complete_error(inputs)
	return "tasks_complete_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ reason: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_blocked = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_blocked(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_blocked", locale)
	if (locale === "en") return en.tasks_blocked(inputs)
	if (locale === "ru") return ru.tasks_blocked(inputs)
	return "tasks_blocked"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_block_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_block_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_block_error", locale)
	if (locale === "en") return en.tasks_block_error(inputs)
	if (locale === "ru") return ru.tasks_block_error(inputs)
	return "tasks_block_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_estimating = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_estimating(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_estimating", locale)
	if (locale === "en") return en.tasks_estimating(inputs)
	if (locale === "ru") return ru.tasks_estimating(inputs)
	return "tasks_estimating"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ hours: NonNullable<unknown>, confidence: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_estimated = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_estimated(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_estimated", locale)
	if (locale === "en") return en.tasks_estimated(inputs)
	if (locale === "ru") return ru.tasks_estimated(inputs)
	return "tasks_estimated"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_estimate_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_estimate_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_estimate_error", locale)
	if (locale === "en") return en.tasks_estimate_error(inputs)
	if (locale === "ru") return ru.tasks_estimate_error(inputs)
	return "tasks_estimate_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_exporting = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_exporting(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_exporting", locale)
	if (locale === "en") return en.tasks_exporting(inputs)
	if (locale === "ru") return ru.tasks_exporting(inputs)
	return "tasks_exporting"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_exported = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_exported(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_exported", locale)
	if (locale === "en") return en.tasks_exported(inputs)
	if (locale === "ru") return ru.tasks_exported(inputs)
	return "tasks_exported"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_export_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_export_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_export_error", locale)
	if (locale === "en") return en.tasks_export_error(inputs)
	if (locale === "ru") return ru.tasks_export_error(inputs)
	return "tasks_export_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ variant: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tasks_complete_celebrations = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tasks_complete_celebrations(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tasks_complete_celebrations", locale)
	if (locale === "en") return en.tasks_complete_celebrations(inputs)
	if (locale === "ru") return ru.tasks_complete_celebrations(inputs)
	return "tasks_complete_celebrations"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtasks_updated = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtasks_updated(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtasks_updated", locale)
	if (locale === "en") return en.subtasks_updated(inputs)
	if (locale === "ru") return ru.subtasks_updated(inputs)
	return "subtasks_updated"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ failed: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const subtasks_update_partial_error = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.subtasks_update_partial_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("subtasks_update_partial_error", locale)
	if (locale === "en") return en.subtasks_update_partial_error(inputs)
	if (locale === "ru") return ru.subtasks_update_partial_error(inputs)
	return "subtasks_update_partial_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const work_session_started = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.work_session_started(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("work_session_started", locale)
	if (locale === "en") return en.work_session_started(inputs)
	if (locale === "ru") return ru.work_session_started(inputs)
	return "work_session_started"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const work_session_start_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.work_session_start_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("work_session_start_error", locale)
	if (locale === "en") return en.work_session_start_error(inputs)
	if (locale === "ru") return ru.work_session_start_error(inputs)
	return "work_session_start_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const similar_tasks_none_found = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.similar_tasks_none_found(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("similar_tasks_none_found", locale)
	if (locale === "en") return en.similar_tasks_none_found(inputs)
	if (locale === "ru") return ru.similar_tasks_none_found(inputs)
	return "similar_tasks_none_found"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const similar_tasks_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.similar_tasks_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("similar_tasks_error", locale)
	if (locale === "en") return en.similar_tasks_error(inputs)
	if (locale === "ru") return ru.similar_tasks_error(inputs)
	return "similar_tasks_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ count: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const confirm_complete_with_incomplete_subtasks = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.confirm_complete_with_incomplete_subtasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("confirm_complete_with_incomplete_subtasks", locale)
	if (locale === "en") return en.confirm_complete_with_incomplete_subtasks(inputs)
	if (locale === "ru") return ru.confirm_complete_with_incomplete_subtasks(inputs)
	return "confirm_complete_with_incomplete_subtasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const confirm_complete_anyway = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.confirm_complete_anyway(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("confirm_complete_anyway", locale)
	if (locale === "en") return en.confirm_complete_anyway(inputs)
	if (locale === "ru") return ru.confirm_complete_anyway(inputs)
	return "confirm_complete_anyway"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const badge_active = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.badge_active(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("badge_active", locale)
	if (locale === "en") return en.badge_active(inputs)
	if (locale === "ru") return ru.badge_active(inputs)
	return "badge_active"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const badge_inactive = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.badge_inactive(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("badge_inactive", locale)
	if (locale === "en") return en.badge_inactive(inputs)
	if (locale === "ru") return ru.badge_inactive(inputs)
	return "badge_inactive"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const badge_warning = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.badge_warning(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("badge_warning", locale)
	if (locale === "en") return en.badge_warning(inputs)
	if (locale === "ru") return ru.badge_warning(inputs)
	return "badge_warning"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const badge_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.badge_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("badge_error", locale)
	if (locale === "en") return en.badge_error(inputs)
	if (locale === "ru") return ru.badge_error(inputs)
	return "badge_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const badge_success = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.badge_success(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("badge_success", locale)
	if (locale === "en") return en.badge_success(inputs)
	if (locale === "ru") return ru.badge_success(inputs)
	return "badge_success"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_first_decomposition_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_first_decomposition_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_first_decomposition_title", locale)
	if (locale === "en") return en.achievements_first_decomposition_title(inputs)
	if (locale === "ru") return ru.achievements_first_decomposition_title(inputs)
	return "achievements_first_decomposition_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_first_decomposition_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_first_decomposition_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_first_decomposition_desc", locale)
	if (locale === "en") return en.achievements_first_decomposition_desc(inputs)
	if (locale === "ru") return ru.achievements_first_decomposition_desc(inputs)
	return "achievements_first_decomposition_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_first_task_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_first_task_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_first_task_title", locale)
	if (locale === "en") return en.achievements_first_task_title(inputs)
	if (locale === "ru") return ru.achievements_first_task_title(inputs)
	return "achievements_first_task_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_first_task_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_first_task_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_first_task_desc", locale)
	if (locale === "en") return en.achievements_first_task_desc(inputs)
	if (locale === "ru") return ru.achievements_first_task_desc(inputs)
	return "achievements_first_task_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_task_completed_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_task_completed_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_task_completed_title", locale)
	if (locale === "en") return en.achievements_task_completed_title(inputs)
	if (locale === "ru") return ru.achievements_task_completed_title(inputs)
	return "achievements_task_completed_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_task_completed_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_task_completed_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_task_completed_desc", locale)
	if (locale === "en") return en.achievements_task_completed_desc(inputs)
	if (locale === "ru") return ru.achievements_task_completed_desc(inputs)
	return "achievements_task_completed_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_productive_day_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_productive_day_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_productive_day_title", locale)
	if (locale === "en") return en.achievements_productive_day_title(inputs)
	if (locale === "ru") return ru.achievements_productive_day_title(inputs)
	return "achievements_productive_day_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_productive_day_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_productive_day_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_productive_day_desc", locale)
	if (locale === "en") return en.achievements_productive_day_desc(inputs)
	if (locale === "ru") return ru.achievements_productive_day_desc(inputs)
	return "achievements_productive_day_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_week_streak_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_week_streak_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_week_streak_title", locale)
	if (locale === "en") return en.achievements_week_streak_title(inputs)
	if (locale === "ru") return ru.achievements_week_streak_title(inputs)
	return "achievements_week_streak_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_week_streak_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_week_streak_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_week_streak_desc", locale)
	if (locale === "en") return en.achievements_week_streak_desc(inputs)
	if (locale === "ru") return ru.achievements_week_streak_desc(inputs)
	return "achievements_week_streak_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_focus_master_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_focus_master_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_focus_master_title", locale)
	if (locale === "en") return en.achievements_focus_master_title(inputs)
	if (locale === "ru") return ru.achievements_focus_master_title(inputs)
	return "achievements_focus_master_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const achievements_focus_master_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.achievements_focus_master_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("achievements_focus_master_desc", locale)
	if (locale === "en") return en.achievements_focus_master_desc(inputs)
	if (locale === "ru") return ru.achievements_focus_master_desc(inputs)
	return "achievements_focus_master_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const research_starting = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.research_starting(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("research_starting", locale)
	if (locale === "en") return en.research_starting(inputs)
	if (locale === "ru") return ru.research_starting(inputs)
	return "research_starting"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ duration: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const research_completed = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.research_completed(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("research_completed", locale)
	if (locale === "en") return en.research_completed(inputs)
	if (locale === "ru") return ru.research_completed(inputs)
	return "research_completed"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const research_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.research_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("research_error", locale)
	if (locale === "en") return en.research_error(inputs)
	if (locale === "ru") return ru.research_error(inputs)
	return "research_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const research_start_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.research_start_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("research_start_error", locale)
	if (locale === "en") return en.research_start_error(inputs)
	if (locale === "ru") return ru.research_start_error(inputs)
	return "research_start_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const email_magic_link_subject = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.email_magic_link_subject(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("email_magic_link_subject", locale)
	if (locale === "en") return en.email_magic_link_subject(inputs)
	if (locale === "ru") return ru.email_magic_link_subject(inputs)
	return "email_magic_link_subject"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const email_magic_link_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.email_magic_link_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("email_magic_link_title", locale)
	if (locale === "en") return en.email_magic_link_title(inputs)
	if (locale === "ru") return ru.email_magic_link_title(inputs)
	return "email_magic_link_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const email_magic_link_message = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.email_magic_link_message(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("email_magic_link_message", locale)
	if (locale === "en") return en.email_magic_link_message(inputs)
	if (locale === "ru") return ru.email_magic_link_message(inputs)
	return "email_magic_link_message"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const email_magic_link_button = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.email_magic_link_button(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("email_magic_link_button", locale)
	if (locale === "en") return en.email_magic_link_button(inputs)
	if (locale === "ru") return ru.email_magic_link_button(inputs)
	return "email_magic_link_button"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const email_magic_link_footer = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.email_magic_link_footer(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("email_magic_link_footer", locale)
	if (locale === "en") return en.email_magic_link_footer(inputs)
	if (locale === "ru") return ru.email_magic_link_footer(inputs)
	return "email_magic_link_footer"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const success_settings_saved_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.success_settings_saved_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("success_settings_saved_title", locale)
	if (locale === "en") return en.success_settings_saved_title(inputs)
	if (locale === "ru") return ru.success_settings_saved_title(inputs)
	return "success_settings_saved_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const success_settings_saved_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.success_settings_saved_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("success_settings_saved_desc", locale)
	if (locale === "en") return en.success_settings_saved_desc(inputs)
	if (locale === "ru") return ru.success_settings_saved_desc(inputs)
	return "success_settings_saved_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const success_profile_updated_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.success_profile_updated_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("success_profile_updated_title", locale)
	if (locale === "en") return en.success_profile_updated_title(inputs)
	if (locale === "ru") return ru.success_profile_updated_title(inputs)
	return "success_profile_updated_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const success_profile_updated_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.success_profile_updated_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("success_profile_updated_desc", locale)
	if (locale === "en") return en.success_profile_updated_desc(inputs)
	if (locale === "ru") return ru.success_profile_updated_desc(inputs)
	return "success_profile_updated_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const success_data_exported_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.success_data_exported_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("success_data_exported_title", locale)
	if (locale === "en") return en.success_data_exported_title(inputs)
	if (locale === "ru") return ru.success_data_exported_title(inputs)
	return "success_data_exported_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const success_data_exported_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.success_data_exported_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("success_data_exported_desc", locale)
	if (locale === "en") return en.success_data_exported_desc(inputs)
	if (locale === "ru") return ru.success_data_exported_desc(inputs)
	return "success_data_exported_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const info_unsaved_changes = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.info_unsaved_changes(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("info_unsaved_changes", locale)
	if (locale === "en") return en.info_unsaved_changes(inputs)
	if (locale === "ru") return ru.info_unsaved_changes(inputs)
	return "info_unsaved_changes"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_network_title = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_network_title(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_network_title", locale)
	if (locale === "en") return en.error_network_title(inputs)
	if (locale === "ru") return ru.error_network_title(inputs)
	return "error_network_title"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_network_desc = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_network_desc(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_network_desc", locale)
	if (locale === "en") return en.error_network_desc(inputs)
	if (locale === "ru") return ru.error_network_desc(inputs)
	return "error_network_desc"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_network_timeout = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_network_timeout(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_network_timeout", locale)
	if (locale === "en") return en.error_network_timeout(inputs)
	if (locale === "ru") return ru.error_network_timeout(inputs)
	return "error_network_timeout"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_unauthorized = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_unauthorized(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_unauthorized", locale)
	if (locale === "en") return en.error_unauthorized(inputs)
	if (locale === "ru") return ru.error_unauthorized(inputs)
	return "error_unauthorized"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_bad_request = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_bad_request(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_bad_request", locale)
	if (locale === "en") return en.error_bad_request(inputs)
	if (locale === "ru") return ru.error_bad_request(inputs)
	return "error_bad_request"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_forbidden = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_forbidden(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_forbidden", locale)
	if (locale === "en") return en.error_forbidden(inputs)
	if (locale === "ru") return ru.error_forbidden(inputs)
	return "error_forbidden"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_not_found = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_not_found(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_not_found", locale)
	if (locale === "en") return en.error_not_found(inputs)
	if (locale === "ru") return ru.error_not_found(inputs)
	return "error_not_found"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_conflict = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_conflict(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_conflict", locale)
	if (locale === "en") return en.error_conflict(inputs)
	if (locale === "ru") return ru.error_conflict(inputs)
	return "error_conflict"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_validation = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_validation(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_validation", locale)
	if (locale === "en") return en.error_validation(inputs)
	if (locale === "ru") return ru.error_validation(inputs)
	return "error_validation"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_rate_limit = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_rate_limit(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_rate_limit", locale)
	if (locale === "en") return en.error_rate_limit(inputs)
	if (locale === "ru") return ru.error_rate_limit(inputs)
	return "error_rate_limit"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_server = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_server(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_server", locale)
	if (locale === "en") return en.error_server(inputs)
	if (locale === "ru") return ru.error_server(inputs)
	return "error_server"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_bad_gateway = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_bad_gateway(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_bad_gateway", locale)
	if (locale === "en") return en.error_bad_gateway(inputs)
	if (locale === "ru") return ru.error_bad_gateway(inputs)
	return "error_bad_gateway"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_service_unavailable = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_service_unavailable(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_service_unavailable", locale)
	if (locale === "en") return en.error_service_unavailable(inputs)
	if (locale === "ru") return ru.error_service_unavailable(inputs)
	return "error_service_unavailable"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ status: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_http = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_http(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_http", locale)
	if (locale === "en") return en.error_http(inputs)
	if (locale === "ru") return ru.error_http(inputs)
	return "error_http"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_save_settings = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_save_settings(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_save_settings", locale)
	if (locale === "en") return en.error_save_settings(inputs)
	if (locale === "ru") return ru.error_save_settings(inputs)
	return "error_save_settings"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_save_profile = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_save_profile(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_save_profile", locale)
	if (locale === "en") return en.error_save_profile(inputs)
	if (locale === "ru") return ru.error_save_profile(inputs)
	return "error_save_profile"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_export_data = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_export_data(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_export_data", locale)
	if (locale === "en") return en.error_export_data(inputs)
	if (locale === "ru") return ru.error_export_data(inputs)
	return "error_export_data"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_delete_account = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_delete_account(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_delete_account", locale)
	if (locale === "en") return en.error_delete_account(inputs)
	if (locale === "ru") return ru.error_delete_account(inputs)
	return "error_delete_account"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_process_request = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_process_request(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_process_request", locale)
	if (locale === "en") return en.error_process_request(inputs)
	if (locale === "ru") return ru.error_process_request(inputs)
	return "error_process_request"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_ai_request = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_ai_request(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_ai_request", locale)
	if (locale === "en") return en.error_ai_request(inputs)
	if (locale === "ru") return ru.error_ai_request(inputs)
	return "error_ai_request"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_require_auth = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_require_auth(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_require_auth", locale)
	if (locale === "en") return en.error_require_auth(inputs)
	if (locale === "ru") return ru.error_require_auth(inputs)
	return "error_require_auth"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_require_guest = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_require_guest(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_require_guest", locale)
	if (locale === "en") return en.error_require_guest(inputs)
	if (locale === "ru") return ru.error_require_guest(inputs)
	return "error_require_guest"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_task_not_found = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_task_not_found(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_task_not_found", locale)
	if (locale === "en") return en.error_task_not_found(inputs)
	if (locale === "ru") return ru.error_task_not_found(inputs)
	return "error_task_not_found"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_try_later = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_try_later(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_try_later", locale)
	if (locale === "en") return en.error_try_later(inputs)
	if (locale === "ru") return ru.error_try_later(inputs)
	return "error_try_later"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_cannot_delete_task_with_subtasks = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_cannot_delete_task_with_subtasks(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_cannot_delete_task_with_subtasks", locale)
	if (locale === "en") return en.error_cannot_delete_task_with_subtasks(inputs)
	if (locale === "ru") return ru.error_cannot_delete_task_with_subtasks(inputs)
	return "error_cannot_delete_task_with_subtasks"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_name_required = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_name_required(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_name_required", locale)
	if (locale === "en") return en.error_name_required(inputs)
	if (locale === "ru") return ru.error_name_required(inputs)
	return "error_name_required"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_not_authorized = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_not_authorized(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_not_authorized", locale)
	if (locale === "en") return en.error_not_authorized(inputs)
	if (locale === "ru") return ru.error_not_authorized(inputs)
	return "error_not_authorized"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_validation_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_validation_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_validation_error", locale)
	if (locale === "en") return en.error_validation_error(inputs)
	if (locale === "ru") return ru.error_validation_error(inputs)
	return "error_validation_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{}} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const error_internal_server_error = (inputs = {}, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.error_internal_server_error(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("error_internal_server_error", locale)
	if (locale === "en") return en.error_internal_server_error(inputs)
	if (locale === "ru") return ru.error_internal_server_error(inputs)
	return "error_internal_server_error"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ timeOfDay: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const greeting = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.greeting(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("greeting", locale)
	if (locale === "en") return en.greeting(inputs)
	if (locale === "ru") return ru.greeting(inputs)
	return "greeting"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ timeOfDay: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const tip = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.tip(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("tip", locale)
	if (locale === "en") return en.tip(inputs)
	if (locale === "ru") return ru.tip(inputs)
	return "tip"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ status: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const status_text = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.status_text(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("status_text", locale)
	if (locale === "en") return en.status_text(inputs)
	if (locale === "ru") return ru.status_text(inputs)
	return "status_text"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ priority: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const priority_text = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.priority_text(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("priority_text", locale)
	if (locale === "en") return en.priority_text(inputs)
	if (locale === "ru") return ru.priority_text(inputs)
	return "priority_text"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ type: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const task_type_text = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.task_type_text(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("task_type_text", locale)
	if (locale === "en") return en.task_type_text(inputs)
	if (locale === "ru") return ru.task_type_text(inputs)
	return "task_type_text"
};
/**
* This function has been compiled by [Paraglide JS](https://inlang.com/m/gerre34r).
*
* - Changing this function will be over-written by the next build.
*
* - If you want to change the translations, you can either edit the source files e.g. `en.json`, or
* use another inlang app like [Fink](https://inlang.com/m/tdozzpar) or the [VSCode extension Sherlock](https://inlang.com/m/r7kp499g).
* 
* @param {{ type: NonNullable<unknown> }} inputs
* @param {{ locale?: "en" | "ru" }} options
* @returns {string}
*/
/* @__NO_SIDE_EFFECTS__ */
export const badge_text = (inputs, options = {}) => {
	if (experimentalMiddlewareLocaleSplitting && isServer === false) {
		return /** @type {any} */ (globalThis).__paraglide_ssr.badge_text(inputs) 
	}
	const locale = options.locale ?? getLocale()
	trackMessageCall("badge_text", locale)
	if (locale === "en") return en.badge_text(inputs)
	if (locale === "ru") return ru.badge_text(inputs)
	return "badge_text"
};