// eslint-disable
import * as registry from "../registry.js"


export const hello_world = /** @type {(inputs: { name: NonNullable<unknown> }) => string} */ (i) => {
	return `Hello, ${i.name}!`
};

export const open_workspace = /** @type {(inputs: {}) => string} */ () => {
	return `Open Workspace`
};

export const saving = /** @type {(inputs: {}) => string} */ () => {
	return `Saving`
};

export const save_notes = /** @type {(inputs: {}) => string} */ () => {
	return `Save notes`
};

export const time_minutes_short = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.count} min`
};

export const time_hours_short = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.count} h`
};

export const time_hours_minutes = /** @type {(inputs: { hours: NonNullable<unknown>, minutes: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.hours} h ${i.minutes} min`
};

export const time_less_minute = /** @type {(inputs: {}) => string} */ () => {
	return `less than a minute`
};

export const time_just_now = /** @type {(inputs: {}) => string} */ () => {
	return `just now`
};

export const time_minute_ago = /** @type {(inputs: {}) => string} */ () => {
	return `a minute ago`
};

export const time_hour_ago = /** @type {(inputs: {}) => string} */ () => {
	return `an hour ago`
};

export const time_yesterday = /** @type {(inputs: {}) => string} */ () => {
	return `yesterday`
};

export const time_work_duration = /** @type {(inputs: {}) => string} */ () => {
	return `Work time`
};

export const time_paused = /** @type {(inputs: {}) => string} */ () => {
	return `Paused`
};

export const time_pause_duration = /** @type {(inputs: { minutes: NonNullable<unknown> }) => string} */ (i) => {
	return `Pause time: ${i.minutes} min`
};

export const time_synced = /** @type {(inputs: {}) => string} */ () => {
	return `Synced`
};

export const time_just_started = /** @type {(inputs: {}) => string} */ () => {
	return `Just started`
};

export const time_minutes = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("en", i.count, {});
	if (countPlural == "one") return `${i.count} minute`;
	if (countPlural == "other") return `${i.count} minutes`;
	return "time_minutes";
};

export const time_hours = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("en", i.count, {});
	if (countPlural == "one") return `${i.count} hour`;
	if (countPlural == "other") return `${i.count} hours`;
	return "time_hours";
};

export const time_minutes_ago = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("en", i.count, {});
	if (countPlural == "one") return `${i.count} minute ago`;
	if (countPlural == "other") return `${i.count} minutes ago`;
	return "time_minutes_ago";
};

export const time_hours_ago = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("en", i.count, {});
	if (countPlural == "one") return `${i.count} hour ago`;
	if (countPlural == "other") return `${i.count} hours ago`;
	return "time_hours_ago";
};

export const time_days_ago = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("en", i.count, {});
	if (countPlural == "one") return `${i.count} day ago`;
	if (countPlural == "other") return `${i.count} days ago`;
	return "time_days_ago";
};

export const actions_complete_task = /** @type {(inputs: {}) => string} */ () => {
	return `Complete task`
};

export const actions_take_break = /** @type {(inputs: {}) => string} */ () => {
	return `Take a break`
};

export const actions_save_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Save progress`
};

export const actions_new_task = /** @type {(inputs: {}) => string} */ () => {
	return `New task`
};

export const actions_all_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `All tasks`
};

export const actions_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Continue`
};

export const actions_retry = /** @type {(inputs: {}) => string} */ () => {
	return `Retry`
};

export const actions_login = /** @type {(inputs: {}) => string} */ () => {
	return `Log in`
};

export const actions_confirm = /** @type {(inputs: {}) => string} */ () => {
	return `Confirm`
};

export const actions_cancel = /** @type {(inputs: {}) => string} */ () => {
	return `Cancel`
};

export const actions_undo = /** @type {(inputs: {}) => string} */ () => {
	return `Undo`
};

export const workspace_title = /** @type {(inputs: {}) => string} */ () => {
	return `Workspace`
};

export const workspace_break_reminder = /** @type {(inputs: { time: NonNullable<unknown> }) => string} */ (i) => {
	return `You've been working for ${i.time}. How about a short break?`
};

export const workspace_task_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Congratulations! You did great!`
};

export const workspace_support_message = /** @type {(inputs: {}) => string} */ () => {
	return `I'm here to help. What's troubling you?`
};

export const workspace_initial_greeting = /** @type {(inputs: { greeting: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.greeting}! How are you feeling?`
};

export const workspace_task_switched = /** @type {(inputs: { title: NonNullable<unknown> }) => string} */ (i) => {
	return `Great! Now working on "${i.title}".

Start at your own pace, I'm here if you need help 🌱`
};

export const workspace_pause_saved = /** @type {(inputs: {}) => string} */ () => {
	return `Saved! Have a good rest 🌿`
};

export const workspace_work_resumed = /** @type {(inputs: {}) => string} */ () => {
	return `Welcome back! Let's continue where we left off 💪`
};

export const workspace_select_task = /** @type {(inputs: {}) => string} */ () => {
	return `Select task`
};

export const workspace_select_task_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Don't worry, your progress will be saved automatically`
};

export const workspace_no_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `No available tasks`
};

export const workspace_create_first_task = /** @type {(inputs: {}) => string} */ () => {
	return `Create first task`
};

export const workspace_estimated_hours = /** @type {(inputs: { hours: NonNullable<unknown> }) => string} */ (i) => {
	return `About ${i.hours} hours`
};

export const workspace_cancel = /** @type {(inputs: {}) => string} */ () => {
	return `Cancel`
};

export const workspace_create_new = /** @type {(inputs: {}) => string} */ () => {
	return `Create new`
};

export const workspace_save_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Save progress`
};

export const workspace_save_progress_desc = /** @type {(inputs: {}) => string} */ () => {
	return `I'll note where you stopped to make it easier to continue`
};

export const workspace_pause_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `For example: Finished database setup, need to add validation...`
};

export const workspace_pause_tip = /** @type {(inputs: {}) => string} */ () => {
	return `Tip: Write down one specific thing to start with next time`
};

export const workspace_skip = /** @type {(inputs: {}) => string} */ () => {
	return `Skip`
};

export const workspace_save_and_rest = /** @type {(inputs: {}) => string} */ () => {
	return `Save and rest`
};

export const workspace_error = /** @type {(inputs: {}) => string} */ () => {
	return `Workspace service error`
};

export const workspace_close_widgets = /** @type {(inputs: {}) => string} */ () => {
	return `Close widgets panel`
};

export const workspace_widgets = /** @type {(inputs: {}) => string} */ () => {
	return `Widgets`
};

export const workspace_completion_message = /** @type {(inputs: {}) => string} */ () => {
	return `Congratulations on completing! 🌟

This is an important achievement. What's next — rest or a new task?`
};

export const workspace_deserved_rest = /** @type {(inputs: {}) => string} */ () => {
	return `Well-deserved rest`
};

export const workspace_rest_message = /** @type {(inputs: {}) => string} */ () => {
	return `Wise choice! Rest is part of productivity.

Enjoy the moment, you've earned it 💚`
};

export const workspace_user_took_break = /** @type {(inputs: {}) => string} */ () => {
	return `User took a break`
};

export const workspace_soft_activity_request = /** @type {(inputs: {}) => string} */ () => {
	return `I want to take a short break`
};

export const workspace_message_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to send message`
};

export const workspace_not_found = /** @type {(inputs: { id: NonNullable<unknown> }) => string} */ (i) => {
	return `Workspace ${i.id} not found`
};

export const workspace_assistant_title = /** @type {(inputs: {}) => string} */ () => {
	return `Your assistant`
};

export const workspace_assistant_always_ready = /** @type {(inputs: {}) => string} */ () => {
	return `Always ready to support and listen`
};

export const workspace_assistant_offline = /** @type {(inputs: {}) => string} */ () => {
	return `Offline mode`
};

export const workspace_chat_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `How are you? How can I help?`
};

export const workspace_chat_placeholder_offline = /** @type {(inputs: {}) => string} */ () => {
	return `Offline mode`
};

export const workspace_time_tracker_error = /** @type {(inputs: {}) => string} */ () => {
	return `Time tracking error`
};

export const workspace_time_info_work_time = /** @type {(inputs: {}) => string} */ () => {
	return `Work time`
};

export const workspace_time_info_paused = /** @type {(inputs: {}) => string} */ () => {
	return `Paused`
};

export const workspace_time_info_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Continue`
};

export const mission_control_title = /** @type {(inputs: {}) => string} */ () => {
	return `Mission Control`
};

export const mission_control_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Your work command center`
};

export const mission_control_create_task = /** @type {(inputs: {}) => string} */ () => {
	return `Create task`
};

export const mission_control_search_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Search tasks...`
};

export const mission_control_search_placeholder_kbd = /** @type {(inputs: {}) => string} */ () => {
	return `Search tasks... (Cmd+K)`
};

export const mission_control_search_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Search (Ctrl+F)`
};

export const mission_control_overview = /** @type {(inputs: {}) => string} */ () => {
	return `Overview`
};

export const mission_control_matrix = /** @type {(inputs: {}) => string} */ () => {
	return `Matrix`
};

export const mission_control_timeline_title = /** @type {(inputs: {}) => string} */ () => {
	return `Tasks timeline`
};

export const mission_control_timeline_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Tasks with deadlines in chronological order`
};

export const mission_control_timeline_overdue_by = /** @type {(inputs: {}) => string} */ () => {
	return `Overdue by`
};

export const mission_control_timeline_today = /** @type {(inputs: {}) => string} */ () => {
	return `Today`
};

export const mission_control_timeline_tomorrow = /** @type {(inputs: {}) => string} */ () => {
	return `Tomorrow`
};

export const mission_control_timeline_in_days = /** @type {(inputs: {}) => string} */ () => {
	return `In`
};

export const mission_control_timeline_no_deadline_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `No tasks with deadlines`
};

export const mission_control_focus = /** @type {(inputs: {}) => string} */ () => {
	return `Focus`
};

export const mission_control_new_task = /** @type {(inputs: {}) => string} */ () => {
	return `New task`
};

export const mission_control_speed = /** @type {(inputs: {}) => string} */ () => {
	return `Speed`
};

export const mission_control_tasks_per_day = /** @type {(inputs: {}) => string} */ () => {
	return `tasks/day`
};

export const mission_control_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Completed`
};

export const mission_control_accuracy = /** @type {(inputs: {}) => string} */ () => {
	return `Estimate accuracy`
};

export const mission_control_last_30_days = /** @type {(inputs: {}) => string} */ () => {
	return `last 30 days`
};

export const mission_control_need_attention = /** @type {(inputs: {}) => string} */ () => {
	return `Need attention`
};

export const mission_control_overdue = /** @type {(inputs: {}) => string} */ () => {
	return `overdue`
};

export const mission_control_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `blocked`
};

export const mission_control_ai_recommendations = /** @type {(inputs: {}) => string} */ () => {
	return `AI Recommendations`
};

export const mission_control_next_priority = /** @type {(inputs: {}) => string} */ () => {
	return `Next priority`
};

export const mission_control_continue_work = /** @type {(inputs: {}) => string} */ () => {
	return `Continue work`
};

export const mission_control_open_ai_assistant = /** @type {(inputs: {}) => string} */ () => {
	return `Open AI assistant`
};

export const mission_control_active_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Active tasks`
};

export const mission_control_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Continue`
};

export const mission_control_complete = /** @type {(inputs: {}) => string} */ () => {
	return `Complete`
};

export const mission_control_block = /** @type {(inputs: {}) => string} */ () => {
	return `Block`
};

export const mission_control_no_active_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `No active tasks`
};

export const mission_control_research = /** @type {(inputs: {}) => string} */ () => {
	return `Research`
};

export const mission_control_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `tasks`
};

export const mission_control_with_deadline = /** @type {(inputs: {}) => string} */ () => {
	return `With deadline`
};

export const mission_control_analytics = /** @type {(inputs: {}) => string} */ () => {
	return `Analytics`
};

export const mission_control_details = /** @type {(inputs: {}) => string} */ () => {
	return `Details`
};

export const mission_control_stats_completed_today = /** @type {(inputs: {}) => string} */ () => {
	return `Completed today:`
};

export const mission_control_stats_in_progress = /** @type {(inputs: {}) => string} */ () => {
	return `In progress:`
};

export const mission_control_stats_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `Blocked:`
};

export const mission_control_sections_research = /** @type {(inputs: {}) => string} */ () => {
	return `AI researching`
};

export const mission_control_sections_in_progress = /** @type {(inputs: {}) => string} */ () => {
	return `In progress`
};

export const mission_control_sections_attention = /** @type {(inputs: {}) => string} */ () => {
	return `Need attention`
};

export const mission_control_sections_planned = /** @type {(inputs: {}) => string} */ () => {
	return `Planned`
};

export const mission_control_sections_done = /** @type {(inputs: {}) => string} */ () => {
	return `Completed`
};

export const mission_control_many_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Many tasks!`
};

export const mission_control_research_card_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Analyzing data...`
};

export const mission_control_research_card_remaining = /** @type {(inputs: { minutes: NonNullable<unknown> }) => string} */ (i) => {
	return `~${i.minutes} minutes remaining`
};

export const mission_control_research_card_finding = /** @type {(inputs: {}) => string} */ () => {
	return `Latest finding:`
};

export const mission_control_research_card_finding_example = /** @type {(inputs: {}) => string} */ () => {
	return `Found optimization opportunity through caching`
};

export const mission_control_research_card_cancel = /** @type {(inputs: {}) => string} */ () => {
	return `Cancel`
};

export const mission_control_research_card_cancel_notice = /** @type {(inputs: {}) => string} */ () => {
	return `Research cancellation will be available in Phase 2`
};

export const mission_control_task_not_started = /** @type {(inputs: {}) => string} */ () => {
	return `Not started`
};

export const mission_control_task_blocker = /** @type {(inputs: {}) => string} */ () => {
	return `Blocker`
};

export const mission_control_task_attention_required = /** @type {(inputs: {}) => string} */ () => {
	return `Your attention is required to unblock`
};

export const mission_control_task_details = /** @type {(inputs: {}) => string} */ () => {
	return `Details`
};

export const mission_control_task_view_details = /** @type {(inputs: {}) => string} */ () => {
	return `View details`
};

export const mission_control_task_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Continue`
};

export const mission_control_research_card_status_text = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	if (i.status == "ANALYZING") return `Analyzing data...`;
	if (i.status == "RESEARCHING") return `Researching...`;
	if (i.status == "GENERATING") return `Generating...`;
	if (i.status == "FAILED") return `Failed`;
	if (i.status == "COMPLETED") return `Completed`;
	return "mission_control_research_card_status_text";
};

export const mission_control_task_start = /** @type {(inputs: {}) => string} */ () => {
	return `Start`
};

export const mission_control_task_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Task marked as completed`
};

export const mission_control_task_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `Task marked as blocked`
};

export const mission_control_menu_details = /** @type {(inputs: {}) => string} */ () => {
	return `Task details`
};

export const mission_control_menu_delete = /** @type {(inputs: {}) => string} */ () => {
	return `Delete`
};

export const mission_control_empty_title = /** @type {(inputs: {}) => string} */ () => {
	return `No tasks`
};

export const mission_control_empty_description = /** @type {(inputs: {}) => string} */ () => {
	return `Create your first task to start tracking project progress`
};

export const mission_control_error_title = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to load data`
};

export const mission_control_error_retry = /** @type {(inputs: {}) => string} */ () => {
	return `Retry`
};

export const mission_control_error_generic = /** @type {(inputs: {}) => string} */ () => {
	return `An error occurred`
};

export const mission_control_delete_confirm = /** @type {(inputs: {}) => string} */ () => {
	return `Are you sure you want to delete this task?`
};

export const mission_control_delete_success = /** @type {(inputs: {}) => string} */ () => {
	return `Task deleted`
};

export const mission_control_delete_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to delete task`
};

export const mission_control_show_all = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `Show all (${i.count})`
};

export const mission_control_completed_ago = /** @type {(inputs: {}) => string} */ () => {
	return `Completed`
};

export const mission_control_priority_matrix_title = /** @type {(inputs: {}) => string} */ () => {
	return `Priority matrix`
};

export const mission_control_priority_matrix_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Task distribution by importance and urgency`
};

export const mission_control_priority_matrix_urgent_important = /** @type {(inputs: {}) => string} */ () => {
	return `Urgent and important`
};

export const mission_control_priority_matrix_important_not_urgent = /** @type {(inputs: {}) => string} */ () => {
	return `Important, not urgent`
};

export const mission_control_priority_matrix_urgent_not_important = /** @type {(inputs: {}) => string} */ () => {
	return `Urgent, not important`
};

export const mission_control_priority_matrix_not_urgent_not_important = /** @type {(inputs: {}) => string} */ () => {
	return `Not urgent, not important`
};

export const mission_control_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Progress`
};

export const mission_control_priority = /** @type {(inputs: {}) => string} */ () => {
	return `Priority`
};

export const mission_control_deadline = /** @type {(inputs: {}) => string} */ () => {
	return `Deadline`
};

export const mission_control_start_work = /** @type {(inputs: {}) => string} */ () => {
	return `Start work`
};

export const mission_control_more_details = /** @type {(inputs: {}) => string} */ () => {
	return `More details`
};

export const mission_control_focus_mode_title = /** @type {(inputs: {}) => string} */ () => {
	return `Focus mode`
};

export const mission_control_focus_mode_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Select a task from any view to focus on it`
};

export const mission_control_focus_mode_back_to_overview = /** @type {(inputs: {}) => string} */ () => {
	return `Back to overview`
};

export const task_detail_created = /** @type {(inputs: {}) => string} */ () => {
	return `Created`
};

export const task_detail_saving = /** @type {(inputs: {}) => string} */ () => {
	return `Saving...`
};

export const task_detail_saved = /** @type {(inputs: {}) => string} */ () => {
	return `Saved`
};

export const task_detail_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Starting analysis...`
};

export const task_detail_subtasks_found = /** @type {(inputs: {}) => string} */ () => {
	return `Subtasks found:`
};

export const task_detail_hours = /** @type {(inputs: {}) => string} */ () => {
	return `hours`
};

export const task_detail_hours_short = /** @type {(inputs: {}) => string} */ () => {
	return `h`
};

export const task_detail_ready_to_plan = /** @type {(inputs: {}) => string} */ () => {
	return `Ready to plan the task?`
};

export const task_detail_ai_help = /** @type {(inputs: {}) => string} */ () => {
	return `AI will help break down the task into subtasks and estimate completion time`
};

export const task_detail_decompose = /** @type {(inputs: {}) => string} */ () => {
	return `Decompose`
};

export const task_detail_research = /** @type {(inputs: {}) => string} */ () => {
	return `Research`
};

export const task_detail_coming_soon = /** @type {(inputs: {}) => string} */ () => {
	return `Coming soon`
};

export const task_detail_add_description_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Add task description for more accurate decomposition`
};

export const task_detail_context_title = /** @type {(inputs: {}) => string} */ () => {
	return `Context and notes`
};

export const task_detail_context_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Additional information will help AI better understand the task`
};

export const task_detail_context_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Describe details, requirements, constraints...`
};

export const task_detail_plan_title = /** @type {(inputs: {}) => string} */ () => {
	return `Work plan`
};

export const task_detail_subtasks_count = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.count} subtasks`
};

export const task_detail_update_plan = /** @type {(inputs: {}) => string} */ () => {
	return `Update plan`
};

export const task_detail_drag_subtask = /** @type {(inputs: {}) => string} */ () => {
	return `Draggable subtask`
};

export const task_detail_drag_handle = /** @type {(inputs: {}) => string} */ () => {
	return `Drag subtask`
};

export const task_detail_add_subtask = /** @type {(inputs: {}) => string} */ () => {
	return `Add subtask`
};

export const task_detail_additional_info = /** @type {(inputs: {}) => string} */ () => {
	return `Additional information about the task`
};

export const task_detail_implementation_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Implementation details, constraints, important points...`
};

export const task_detail_saving_action = /** @type {(inputs: {}) => string} */ () => {
	return `Saving...`
};

export const task_detail_save_plan = /** @type {(inputs: {}) => string} */ () => {
	return `Save plan`
};

export const task_detail_start_work = /** @type {(inputs: {}) => string} */ () => {
	return `Start working`
};

export const task_detail_plan_created = /** @type {(inputs: { subtasks: NonNullable<unknown>, hours: NonNullable<unknown> }) => string} */ (i) => {
	return `Plan created: ${i.subtasks} subtasks, ~${i.hours} hours`
};

export const task_detail_decomposition_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to start decomposition`
};

export const task_detail_save_notes_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to save notes`
};

export const task_detail_save_subtask_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to save subtask`
};

export const task_detail_new_subtask = /** @type {(inputs: {}) => string} */ () => {
	return `New subtask`
};

export const task_detail_order_changed = /** @type {(inputs: {}) => string} */ () => {
	return `Subtask order changed`
};

export const task_detail_order_save_reminder = /** @type {(inputs: {}) => string} */ () => {
	return `Don't forget to save the plan`
};

export const task_detail_plan_saved = /** @type {(inputs: {}) => string} */ () => {
	return `Plan saved!`
};

export const task_detail_save_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to save changes`
};

export const task_detail_save_and_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Save and continue`
};

export const task_detail_confidence_high = /** @type {(inputs: {}) => string} */ () => {
	return `AI is confident in the estimate`
};

export const task_detail_confidence_medium = /** @type {(inputs: {}) => string} */ () => {
	return `Depends on implementation details`
};

export const task_detail_confidence_low = /** @type {(inputs: {}) => string} */ () => {
	return `Needs clarification for accurate estimate`
};

export const task_detail_confidence_research = /** @type {(inputs: {}) => string} */ () => {
	return `Research required`
};

export const task_detail_notes_label = /** @type {(inputs: {}) => string} */ () => {
	return `Task notes`
};

export const task_detail_notes_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Add any notes, thoughts or context...`
};

export const create_task_title = /** @type {(inputs: {}) => string} */ () => {
	return `New task`
};

export const create_task_heading = /** @type {(inputs: {}) => string} */ () => {
	return `What needs to be done?`
};

export const create_task_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Just write down the thought — we'll discuss details later`
};

export const create_task_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Task description...`
};

export const create_task_templates_label = /** @type {(inputs: {}) => string} */ () => {
	return `Or choose task type:`
};

export const create_task_templates_bug = /** @type {(inputs: {}) => string} */ () => {
	return `Bug`
};

export const create_task_templates_bug_prefix = /** @type {(inputs: {}) => string} */ () => {
	return `Fix: `
};

export const create_task_templates_feature = /** @type {(inputs: {}) => string} */ () => {
	return `Feature`
};

export const create_task_templates_feature_prefix = /** @type {(inputs: {}) => string} */ () => {
	return `Implement: `
};

export const create_task_templates_research = /** @type {(inputs: {}) => string} */ () => {
	return `Research`
};

export const create_task_templates_research_prefix = /** @type {(inputs: {}) => string} */ () => {
	return `Study: `
};

export const create_task_success = /** @type {(inputs: {}) => string} */ () => {
	return `Task created!`
};

export const create_task_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to create task`
};

export const create_task_enter = /** @type {(inputs: {}) => string} */ () => {
	return `create and open`
};

export const create_task_shift_enter = /** @type {(inputs: {}) => string} */ () => {
	return `create and continue`
};

export const create_task_recent = /** @type {(inputs: {}) => string} */ () => {
	return `Recently created:`
};

export const subtask_title_label = /** @type {(inputs: {}) => string} */ () => {
	return `Subtask title`
};

export const subtask_title_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `What needs to be done?`
};

export const subtask_hours_label = /** @type {(inputs: {}) => string} */ () => {
	return `Time estimate (hours)`
};

export const subtask_description_label = /** @type {(inputs: {}) => string} */ () => {
	return `Description`
};

export const subtask_description_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Additional details (optional)`
};

export const subtask_adding = /** @type {(inputs: {}) => string} */ () => {
	return `Adding`
};

export const login_page_title = /** @type {(inputs: {}) => string} */ () => {
	return `Login - DeComposer`
};

export const login_back_home = /** @type {(inputs: {}) => string} */ () => {
	return `Back home`
};

export const login_welcome_title = /** @type {(inputs: {}) => string} */ () => {
	return `Welcome`
};

export const login_welcome_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Sign in to DeComposer with a secure link`
};

export const login_email_label = /** @type {(inputs: {}) => string} */ () => {
	return `Email address`
};

export const login_email_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `your@email.com`
};

export const login_email_description = /** @type {(inputs: {}) => string} */ () => {
	return `We'll send you a secure login link`
};

export const login_sending_link = /** @type {(inputs: {}) => string} */ () => {
	return `Sending link...`
};

export const login_get_link = /** @type {(inputs: {}) => string} */ () => {
	return `Get login link`
};

export const login_benefits_title = /** @type {(inputs: {}) => string} */ () => {
	return `Benefits`
};

export const login_benefits_no_password_title = /** @type {(inputs: {}) => string} */ () => {
	return `No passwords`
};

export const login_benefits_no_password_desc = /** @type {(inputs: {}) => string} */ () => {
	return `No need to remember another password`
};

export const login_benefits_security_title = /** @type {(inputs: {}) => string} */ () => {
	return `Maximum security`
};

export const login_benefits_security_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Each link is unique and works only once`
};

export const login_benefits_quick_title = /** @type {(inputs: {}) => string} */ () => {
	return `Quick login`
};

export const login_benefits_quick_desc = /** @type {(inputs: {}) => string} */ () => {
	return `One click in the email — and you're in`
};

export const login_check_email_title = /** @type {(inputs: {}) => string} */ () => {
	return `Check your email!`
};

export const login_check_email_message = /** @type {(inputs: {}) => string} */ () => {
	return `We sent a login link to`
};

export const login_check_email_expiry_warning = /** @type {(inputs: {}) => string} */ () => {
	return `The link is valid for only 10 minutes for your security`
};

export const login_check_email_resend_link = /** @type {(inputs: {}) => string} */ () => {
	return `Resend link`
};

export const login_check_email_no_email_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Didn't receive the email? Check your "Spam" or "Promotions" folder`
};

export const login_thank_you = /** @type {(inputs: {}) => string} */ () => {
	return `Thank you for choosing DeComposer`
};

export const login_terms_message = /** @type {(inputs: {}) => string} */ () => {
	return `By signing in, you agree to our privacy policy
and terms of service`
};

export const login_errors_invalid_link = /** @type {(inputs: {}) => string} */ () => {
	return `Invalid login link`
};

export const login_errors_expired_link = /** @type {(inputs: {}) => string} */ () => {
	return `Link has expired. Request a new one`
};

export const login_errors_system = /** @type {(inputs: {}) => string} */ () => {
	return `A system error occurred. Please try again later`
};

export const ai_assistant_title = /** @type {(inputs: {}) => string} */ () => {
	return `AI Task Assistant`
};

export const ai_assistant_description = /** @type {(inputs: {}) => string} */ () => {
	return `Analysis of your tasks and personalized recommendations for work organization`
};

export const ai_assistant_loading = /** @type {(inputs: {}) => string} */ () => {
	return `Loading data...`
};

export const ai_assistant_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Analyzing your tasks...`
};

export const ai_assistant_overview = /** @type {(inputs: {}) => string} */ () => {
	return `Overview`
};

export const ai_assistant_priorities = /** @type {(inputs: {}) => string} */ () => {
	return `Priorities`
};

export const ai_assistant_time = /** @type {(inputs: {}) => string} */ () => {
	return `Time`
};

export const ai_assistant_risks = /** @type {(inputs: {}) => string} */ () => {
	return `Risks`
};

export const ai_assistant_total_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Total tasks`
};

export const ai_assistant_in_progress = /** @type {(inputs: {}) => string} */ () => {
	return `In progress`
};

export const ai_assistant_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `Blocked`
};

export const ai_assistant_overdue = /** @type {(inputs: {}) => string} */ () => {
	return `Overdue`
};

export const ai_assistant_recommendations = /** @type {(inputs: {}) => string} */ () => {
	return `Recommendations`
};

export const ai_assistant_urgent_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Urgent tasks`
};

export const ai_assistant_urgent = /** @type {(inputs: {}) => string} */ () => {
	return `Urgent`
};

export const ai_assistant_important_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Important tasks`
};

export const ai_assistant_important = /** @type {(inputs: {}) => string} */ () => {
	return `Important`
};

export const ai_assistant_can_wait = /** @type {(inputs: {}) => string} */ () => {
	return `Can wait`
};

export const ai_assistant_later = /** @type {(inputs: {}) => string} */ () => {
	return `Later`
};

export const ai_assistant_time_stats = /** @type {(inputs: {}) => string} */ () => {
	return `Time statistics`
};

export const ai_assistant_estimated_time = /** @type {(inputs: {}) => string} */ () => {
	return `Estimated time`
};

export const ai_assistant_spent_time = /** @type {(inputs: {}) => string} */ () => {
	return `Time spent`
};

export const ai_assistant_accuracy = /** @type {(inputs: {}) => string} */ () => {
	return `Estimate accuracy`
};

export const ai_assistant_time_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Time progress`
};

export const ai_assistant_time_tips = /** @type {(inputs: {}) => string} */ () => {
	return `Time management tips`
};

export const ai_assistant_great_work = /** @type {(inputs: {}) => string} */ () => {
	return `Great work!`
};

export const ai_assistant_no_serious_risks = /** @type {(inputs: {}) => string} */ () => {
	return `No serious risks detected`
};

export const ai_assistant_affected_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Affected tasks:`
};

export const ai_assistant_ask_question = /** @type {(inputs: {}) => string} */ () => {
	return `Ask question`
};

export const ai_assistant_send = /** @type {(inputs: {}) => string} */ () => {
	return `Send`
};

export const ai_assistant_close = /** @type {(inputs: {}) => string} */ () => {
	return `Close`
};

export const ai_assistant_question_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Ask a question about your tasks...`
};

export const ai_assistant_question_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Ask something specific about your tasks or request additional recommendations`
};

export const ai_assistant_parse_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to parse AI response`
};

export const ai_assistant_risk_high = /** @type {(inputs: {}) => string} */ () => {
	return `High`
};

export const ai_assistant_risk_medium = /** @type {(inputs: {}) => string} */ () => {
	return `Medium`
};

export const ai_assistant_risk_low = /** @type {(inputs: {}) => string} */ () => {
	return `Low`
};

export const onboarding_update_preferences = /** @type {(inputs: {}) => string} */ () => {
	return `Update your preferences so the AI assistant understands you better`
};

export const onboarding_step = /** @type {(inputs: {}) => string} */ () => {
	return `Step`
};

export const onboarding_complete = /** @type {(inputs: {}) => string} */ () => {
	return `Onboarding completed successfully`
};

export const onboarding_back = /** @type {(inputs: {}) => string} */ () => {
	return `Back`
};

export const onboarding_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Continue`
};

export const onboarding_can_change_later = /** @type {(inputs: {}) => string} */ () => {
	return `You can always change these settings in your profile`
};

export const onboarding_saving = /** @type {(inputs: {}) => string} */ () => {
	return `Saving...`
};

export const onboarding_update_preferences_btn = /** @type {(inputs: {}) => string} */ () => {
	return `Update preferences`
};

export const onboarding_start_working = /** @type {(inputs: {}) => string} */ () => {
	return `Start working`
};

export const onboarding_go_back = /** @type {(inputs: {}) => string} */ () => {
	return `Go back`
};

export const onboarding_preferences_updated = /** @type {(inputs: {}) => string} */ () => {
	return `Preferences updated`
};

export const onboarding_ai_will_consider = /** @type {(inputs: {}) => string} */ () => {
	return `The AI assistant will consider your new settings`
};

export const onboarding_check_connection = /** @type {(inputs: {}) => string} */ () => {
	return `Check your internet connection`
};

export const onboarding_demo_title = /** @type {(inputs: {}) => string} */ () => {
	return `See how DeComposer takes care of you`
};

export const onboarding_demo_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Watch the psychologically safe approach to productivity`
};

export const onboarding_demo_greeting = /** @type {(inputs: { userName: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.userName}, let's show you how DeComposer works!`
};

export const onboarding_demo_ai_description = /** @type {(inputs: {}) => string} */ () => {
	return `Now our AI will break down a typical developer task into understandable subtasks with time estimates`
};

export const onboarding_demo_ai_badge = /** @type {(inputs: {}) => string} */ () => {
	return `AI Demo`
};

export const onboarding_demo_task_title = /** @type {(inputs: {}) => string} */ () => {
	return `Create personal portfolio website`
};

export const onboarding_demo_task_description = /** @type {(inputs: {}) => string} */ () => {
	return `Develop a modern responsive website to showcase my projects and skills`
};

export const onboarding_demo_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Analyzing task...`
};

export const onboarding_demo_decomposing = /** @type {(inputs: {}) => string} */ () => {
	return `Decomposing...`
};

export const onboarding_demo_analyzing_detail = /** @type {(inputs: {}) => string} */ () => {
	return `Determining scope and necessary steps...`
};

export const onboarding_demo_decomposing_detail = /** @type {(inputs: {}) => string} */ () => {
	return `Breaking into categories and estimating time...`
};

export const onboarding_demo_categories_planning = /** @type {(inputs: {}) => string} */ () => {
	return `Research and planning`
};

export const onboarding_demo_categories_design = /** @type {(inputs: {}) => string} */ () => {
	return `Design and prototyping`
};

export const onboarding_demo_categories_development = /** @type {(inputs: {}) => string} */ () => {
	return `Development`
};

export const onboarding_demo_categories_deployment = /** @type {(inputs: {}) => string} */ () => {
	return `Testing and deployment`
};

export const onboarding_demo_tasks_research_competitors = /** @type {(inputs: {}) => string} */ () => {
	return `Competitor and reference analysis`
};

export const onboarding_demo_tasks_create_sitemap = /** @type {(inputs: {}) => string} */ () => {
	return `Site structure and sitemap creation`
};

export const onboarding_demo_tasks_choose_tech = /** @type {(inputs: {}) => string} */ () => {
	return `Technology stack selection`
};

export const onboarding_demo_tasks_wireframes = /** @type {(inputs: {}) => string} */ () => {
	return `Main page wireframes creation`
};

export const onboarding_demo_tasks_design_system = /** @type {(inputs: {}) => string} */ () => {
	return `Design system and UI kit development`
};

export const onboarding_demo_tasks_adaptive_design = /** @type {(inputs: {}) => string} */ () => {
	return `Responsive design layouts`
};

export const onboarding_demo_tasks_setup_env = /** @type {(inputs: {}) => string} */ () => {
	return `Environment and basic structure setup`
};

export const onboarding_demo_tasks_main_page = /** @type {(inputs: {}) => string} */ () => {
	return `Main page layout`
};

export const onboarding_demo_tasks_projects_page = /** @type {(inputs: {}) => string} */ () => {
	return `Projects page with filtering`
};

export const onboarding_demo_tasks_contact_form = /** @type {(inputs: {}) => string} */ () => {
	return `Contact form and validation`
};

export const onboarding_demo_tasks_animations = /** @type {(inputs: {}) => string} */ () => {
	return `Animations and interactive elements`
};

export const onboarding_demo_tasks_testing = /** @type {(inputs: {}) => string} */ () => {
	return `Cross-browser testing`
};

export const onboarding_demo_tasks_optimization = /** @type {(inputs: {}) => string} */ () => {
	return `Performance optimization`
};

export const onboarding_demo_tasks_hosting = /** @type {(inputs: {}) => string} */ () => {
	return `Hosting and CI/CD setup`
};

export const onboarding_demo_tasks_seo = /** @type {(inputs: {}) => string} */ () => {
	return `SEO optimization`
};

export const onboarding_demo_total_time = /** @type {(inputs: {}) => string} */ () => {
	return `Total time`
};

export const onboarding_demo_total_time_hours = /** @type {(inputs: {}) => string} */ () => {
	return `hours`
};

export const onboarding_demo_subtasks_count = /** @type {(inputs: {}) => string} */ () => {
	return `Number of subtasks`
};

export const onboarding_demo_benefits_title = /** @type {(inputs: {}) => string} */ () => {
	return `What decomposition provides:`
};

export const onboarding_demo_benefits_time_estimate = /** @type {(inputs: {}) => string} */ () => {
	return `Accurate time estimates for each stage`
};

export const onboarding_demo_benefits_structure = /** @type {(inputs: {}) => string} */ () => {
	return `Clear structure and priorities`
};

export const onboarding_demo_benefits_no_forgotten = /** @type {(inputs: {}) => string} */ () => {
	return `No forgotten tasks or rushes`
};

export const onboarding_demo_try_button = /** @type {(inputs: {}) => string} */ () => {
	return `Try with your own task`
};

export const onboarding_demo_hint = /** @type {(inputs: {}) => string} */ () => {
	return `DeComposer can decompose any technical tasks in seconds`
};

export const onboarding_step_title = /** @type {(inputs: { step: NonNullable<unknown> }) => string} */ (i) => {
	if (i.step == "1") return `What should we call you?`;
	if (i.step == "2") return `Your values and priorities`;
	if (i.step == "3") return `Your work style`;
	if (i.step == "4") return `What support do you need?`;
	return "onboarding_step_title";
};

export const onboarding_steps_1_alt_title = /** @type {(inputs: {}) => string} */ () => {
	return `Let's get acquainted!`
};

export const onboarding_step_subtitle = /** @type {(inputs: { step: NonNullable<unknown> }) => string} */ (i) => {
	if (i.step == "1") return `This will help create a comfortable work environment`;
	if (i.step == "2") return `AI adapts to your rhythm`;
	if (i.step == "3") return `Choose how AI should interact with you`;
	if (i.step == "4") return `Personalize your work experience`;
	return "onboarding_step_subtitle";
};

export const onboarding_questions_name = /** @type {(inputs: {}) => string} */ () => {
	return `What's your name?`
};

export const onboarding_questions_values = /** @type {(inputs: {}) => string} */ () => {
	return `What's most important to you?`
};

export const onboarding_questions_focus = /** @type {(inputs: {}) => string} */ () => {
	return `What do you want to focus on?`
};

export const onboarding_questions_support = /** @type {(inputs: {}) => string} */ () => {
	return `How should AI communicate with you?`
};

export const onboarding_name_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `John Doe`
};

export const onboarding_name_description = /** @type {(inputs: {}) => string} */ () => {
	return `We'll address you by name for a more personal experience`
};

export const onboarding_values_life_first_title = /** @type {(inputs: {}) => string} */ () => {
	return `Life comes first`
};

export const onboarding_values_life_first_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Work is part of life, not all of life`
};

export const onboarding_values_balance_title = /** @type {(inputs: {}) => string} */ () => {
	return `Harmonious balance`
};

export const onboarding_values_balance_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Equal attention to work and personal life`
};

export const onboarding_values_achievement_title = /** @type {(inputs: {}) => string} */ () => {
	return `Focus on achievements`
};

export const onboarding_values_achievement_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Ambitious goals with self-care`
};

export const onboarding_focus_productivity_title = /** @type {(inputs: {}) => string} */ () => {
	return `Productivity`
};

export const onboarding_focus_productivity_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Efficient task completion`
};

export const onboarding_focus_creativity_title = /** @type {(inputs: {}) => string} */ () => {
	return `Creativity`
};

export const onboarding_focus_creativity_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Innovation and new ideas`
};

export const onboarding_focus_development_title = /** @type {(inputs: {}) => string} */ () => {
	return `Development`
};

export const onboarding_focus_development_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Learning and skill growth`
};

export const onboarding_focus_wellbeing_title = /** @type {(inputs: {}) => string} */ () => {
	return `Wellbeing`
};

export const onboarding_focus_wellbeing_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Balance and self-care`
};

export const onboarding_support_gentle_title = /** @type {(inputs: {}) => string} */ () => {
	return `Gentle and caring`
};

export const onboarding_support_gentle_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Supportive tone with focus on self-care`
};

export const onboarding_support_balanced_title = /** @type {(inputs: {}) => string} */ () => {
	return `Balanced`
};

export const onboarding_support_balanced_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Friendly but business-like`
};

export const onboarding_support_direct_title = /** @type {(inputs: {}) => string} */ () => {
	return `Direct and specific`
};

export const onboarding_support_direct_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Minimal fluff, maximum value`
};

export const categories_preparation_title = /** @type {(inputs: {}) => string} */ () => {
	return `Preparation`
};

export const categories_preparation_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Research, analysis, planning`
};

export const categories_development_title = /** @type {(inputs: {}) => string} */ () => {
	return `Development`
};

export const categories_development_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Writing code, building features`
};

export const categories_testing_title = /** @type {(inputs: {}) => string} */ () => {
	return `Testing`
};

export const categories_testing_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Testing, debugging, writing tests`
};

export const categories_documentation_title = /** @type {(inputs: {}) => string} */ () => {
	return `Documentation`
};

export const categories_documentation_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Creating documentation, descriptions, guides`
};

export const categories_deployment_title = /** @type {(inputs: {}) => string} */ () => {
	return `Deployment`
};

export const categories_deployment_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Deploy, environment setup, CI/CD`
};

export const categories_review_title = /** @type {(inputs: {}) => string} */ () => {
	return `Review & Improvements`
};

export const categories_review_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Code review, fixes, refactoring`
};

export const categories_other_title = /** @type {(inputs: {}) => string} */ () => {
	return `Other`
};

export const categories_other_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Other tasks`
};

export const mood_label = /** @type {(inputs: {}) => string} */ () => {
	return `Mood:`
};

export const mood_focused_title = /** @type {(inputs: {}) => string} */ () => {
	return `Focused`
};

export const mood_focused_message = /** @type {(inputs: {}) => string} */ () => {
	return `I'm focused, working`
};

export const mood_relaxed_title = /** @type {(inputs: {}) => string} */ () => {
	return `Relaxed`
};

export const mood_relaxed_message = /** @type {(inputs: {}) => string} */ () => {
	return `working calmly`
};

export const mood_tired_title = /** @type {(inputs: {}) => string} */ () => {
	return `Tired`
};

export const mood_tired_message = /** @type {(inputs: {}) => string} */ () => {
	return `a bit tired`
};

export const mood_stuck_title = /** @type {(inputs: {}) => string} */ () => {
	return `Stuck`
};

export const mood_stuck_message = /** @type {(inputs: {}) => string} */ () => {
	return `stuck, need help`
};

export const activities_soft_title = /** @type {(inputs: {}) => string} */ () => {
	return `Gentle activities`
};

export const activities_tea_break_title = /** @type {(inputs: {}) => string} */ () => {
	return `Tea break`
};

export const activities_tea_break_desc = /** @type {(inputs: {}) => string} */ () => {
	return `5-10 minutes for yourself`
};

export const activities_stretch_title = /** @type {(inputs: {}) => string} */ () => {
	return `Light stretch`
};

export const activities_stretch_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Stretch and breathe`
};

export const activities_support_title = /** @type {(inputs: {}) => string} */ () => {
	return `Support`
};

export const activities_support_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Kind words`
};

export const activities_quick_title = /** @type {(inputs: {}) => string} */ () => {
	return `Quick actions`
};

export const sounds_ambient_title = /** @type {(inputs: {}) => string} */ () => {
	return `Ambient sounds`
};

export const sounds_off = /** @type {(inputs: {}) => string} */ () => {
	return `Turn off`
};

export const sounds_rain = /** @type {(inputs: {}) => string} */ () => {
	return `Rain`
};

export const sounds_forest = /** @type {(inputs: {}) => string} */ () => {
	return `Forest`
};

export const sounds_ocean = /** @type {(inputs: {}) => string} */ () => {
	return `Ocean`
};

export const task_context_title = /** @type {(inputs: {}) => string} */ () => {
	return `Task context`
};

export const task_context_expand = /** @type {(inputs: {}) => string} */ () => {
	return `Expand`
};

export const task_context_collapse = /** @type {(inputs: {}) => string} */ () => {
	return `Collapse`
};

export const task_context_select_task = /** @type {(inputs: {}) => string} */ () => {
	return `Select a task to see context`
};

export const task_context_no_description = /** @type {(inputs: {}) => string} */ () => {
	return `No description`
};

export const task_context_subtasks = /** @type {(inputs: {}) => string} */ () => {
	return `subtasks`
};

export const task_context_hours_remaining = /** @type {(inputs: {}) => string} */ () => {
	return `h remaining`
};

export const task_context_description = /** @type {(inputs: {}) => string} */ () => {
	return `Description`
};

export const task_context_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Progress`
};

export const task_context_subtasks_completed = /** @type {(inputs: { completed: NonNullable<unknown>, total: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.completed} of ${i.total} subtasks completed`
};

export const task_context_subtasks_title = /** @type {(inputs: {}) => string} */ () => {
	return `Subtasks`
};

export const task_context_no_subtasks = /** @type {(inputs: {}) => string} */ () => {
	return `No subtasks`
};

export const task_context_open_task = /** @type {(inputs: {}) => string} */ () => {
	return `Open task →`
};

export const task_context_hours_short = /** @type {(inputs: {}) => string} */ () => {
	return `h`
};

export const reminder_daily_title = /** @type {(inputs: {}) => string} */ () => {
	return `Daily reminder`
};

export const sort_by_created_date = /** @type {(inputs: {}) => string} */ () => {
	return `Created date`
};

export const sort_by_title = /** @type {(inputs: {}) => string} */ () => {
	return `Title`
};

export const sort_by_status = /** @type {(inputs: {}) => string} */ () => {
	return `Status`
};

export const sort_by_priority = /** @type {(inputs: {}) => string} */ () => {
	return `Priority`
};

export const sort_by_deadline = /** @type {(inputs: {}) => string} */ () => {
	return `Deadline`
};

export const sort_by_estimated_time = /** @type {(inputs: {}) => string} */ () => {
	return `Estimated time`
};

export const tasks_created_success = /** @type {(inputs: {}) => string} */ () => {
	return `Task created!`
};

export const tasks_decomposing = /** @type {(inputs: {}) => string} */ () => {
	return `Analyzing task...`
};

export const tasks_decomposed_success = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `Created ${i.count} subtasks`
};

export const tasks_decompose_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to decompose task`
};

export const tasks_create_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to create task`
};

export const tasks_status_changed = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	return `Status changed to: ${i.status}`
};

export const tasks_completed_with_time = /** @type {(inputs: { hours: NonNullable<unknown> }) => string} */ (i) => {
	return `Task completed! Work time: ${i.hours} hours`
};

export const tasks_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Task completed!`
};

export const tasks_complete_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to complete task`
};

export const tasks_blocked = /** @type {(inputs: { reason: NonNullable<unknown> }) => string} */ (i) => {
	return `Task blocked: ${i.reason}`
};

export const tasks_block_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to block task`
};

export const tasks_estimating = /** @type {(inputs: {}) => string} */ () => {
	return `Estimating completion time...`
};

export const tasks_estimated = /** @type {(inputs: { hours: NonNullable<unknown>, confidence: NonNullable<unknown> }) => string} */ (i) => {
	return `Estimate: ${i.hours} hours (confidence ${i.confidence}%)`
};

export const tasks_estimate_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to estimate task`
};

export const tasks_exporting = /** @type {(inputs: {}) => string} */ () => {
	return `Exporting tasks...`
};

export const tasks_exported = /** @type {(inputs: {}) => string} */ () => {
	return `Tasks exported`
};

export const tasks_export_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to export tasks`
};

export const tasks_complete_celebrations = /** @type {(inputs: { variant: NonNullable<unknown> }) => string} */ (i) => {
	if (i.variant == "1") return `Great work!`;
	if (i.variant == "2") return `Well done!`;
	if (i.variant == "3") return `Task completed brilliantly!`;
	return "tasks_complete_celebrations";
};

export const subtasks_updated = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `Updated subtasks: ${i.count}`
};

export const subtasks_update_partial_error = /** @type {(inputs: { failed: NonNullable<unknown> }) => string} */ (i) => {
	return `Failed to update ${i.failed} subtasks`
};

export const work_session_started = /** @type {(inputs: {}) => string} */ () => {
	return `Work session started`
};

export const work_session_start_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to start session`
};

export const similar_tasks_none_found = /** @type {(inputs: {}) => string} */ () => {
	return `No similar tasks found`
};

export const similar_tasks_error = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to find similar tasks`
};

export const confirm_complete_with_incomplete_subtasks = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `Task has ${i.count} incomplete subtasks. Complete anyway?`
};

export const confirm_complete_anyway = /** @type {(inputs: {}) => string} */ () => {
	return `Complete anyway`
};

export const badge_active = /** @type {(inputs: {}) => string} */ () => {
	return `Active`
};

export const badge_inactive = /** @type {(inputs: {}) => string} */ () => {
	return `Inactive`
};

export const badge_warning = /** @type {(inputs: {}) => string} */ () => {
	return `Warning`
};

export const badge_error = /** @type {(inputs: {}) => string} */ () => {
	return `Error`
};

export const badge_success = /** @type {(inputs: {}) => string} */ () => {
	return `Success`
};

export const achievements_first_decomposition_title = /** @type {(inputs: {}) => string} */ () => {
	return `First decomposition! 🎉`
};

export const achievements_first_decomposition_desc = /** @type {(inputs: {}) => string} */ () => {
	return `You just created your first decomposition`
};

export const achievements_first_task_title = /** @type {(inputs: {}) => string} */ () => {
	return `First task! ✨`
};

export const achievements_first_task_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Great start!`
};

export const achievements_task_completed_title = /** @type {(inputs: {}) => string} */ () => {
	return `Task completed! ✅`
};

export const achievements_task_completed_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Keep it up!`
};

export const achievements_productive_day_title = /** @type {(inputs: {}) => string} */ () => {
	return `Productive day! 🔥`
};

export const achievements_productive_day_desc = /** @type {(inputs: {}) => string} */ () => {
	return `3 tasks in a day - excellent result!`
};

export const achievements_week_streak_title = /** @type {(inputs: {}) => string} */ () => {
	return `Week streak! 🌟`
};

export const achievements_week_streak_desc = /** @type {(inputs: {}) => string} */ () => {
	return `You've been working every day for a week`
};

export const achievements_focus_master_title = /** @type {(inputs: {}) => string} */ () => {
	return `Focus master! 🎯`
};

export const achievements_focus_master_desc = /** @type {(inputs: {}) => string} */ () => {
	return `2 hours of continuous work`
};

export const research_starting = /** @type {(inputs: {}) => string} */ () => {
	return `🔍 Starting deep task research...`
};

export const research_completed = /** @type {(inputs: { duration: NonNullable<unknown> }) => string} */ (i) => {
	return `✨ Research completed in ${i.duration} seconds`
};

export const research_error = /** @type {(inputs: {}) => string} */ () => {
	return `An error occurred during research`
};

export const research_start_error = /** @type {(inputs: {}) => string} */ () => {
	return `An error occurred while starting research`
};

export const email_magic_link_subject = /** @type {(inputs: {}) => string} */ () => {
	return `Your login link for Decomposer`
};

export const email_magic_link_title = /** @type {(inputs: {}) => string} */ () => {
	return `Login to Decomposer`
};

export const email_magic_link_message = /** @type {(inputs: {}) => string} */ () => {
	return `Click the button below to log in to your account:`
};

export const email_magic_link_button = /** @type {(inputs: {}) => string} */ () => {
	return `Log in`
};

export const email_magic_link_footer = /** @type {(inputs: {}) => string} */ () => {
	return `This link will expire in 10 minutes. If you didn't request this email, you can safely ignore it.`
};

export const success_settings_saved_title = /** @type {(inputs: {}) => string} */ () => {
	return `Settings saved`
};

export const success_settings_saved_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Changes have taken effect`
};

export const success_profile_updated_title = /** @type {(inputs: {}) => string} */ () => {
	return `Profile updated`
};

export const success_profile_updated_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Your changes have been saved`
};

export const success_data_exported_title = /** @type {(inputs: {}) => string} */ () => {
	return `Data exported`
};

export const success_data_exported_desc = /** @type {(inputs: {}) => string} */ () => {
	return `File downloaded to your device`
};

export const info_unsaved_changes = /** @type {(inputs: {}) => string} */ () => {
	return `You have unsaved changes`
};

export const error_network_title = /** @type {(inputs: {}) => string} */ () => {
	return `Network error, check your connection`
};

export const error_network_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Check your internet connection`
};

export const error_network_timeout = /** @type {(inputs: {}) => string} */ () => {
	return `Request cancelled due to timeout`
};

export const error_unauthorized = /** @type {(inputs: {}) => string} */ () => {
	return `Authorization required`
};

export const error_bad_request = /** @type {(inputs: {}) => string} */ () => {
	return `Invalid request data`
};

export const error_forbidden = /** @type {(inputs: {}) => string} */ () => {
	return `No access to this action`
};

export const error_not_found = /** @type {(inputs: {}) => string} */ () => {
	return `Data not found`
};

export const error_conflict = /** @type {(inputs: {}) => string} */ () => {
	return `Data conflict`
};

export const error_validation = /** @type {(inputs: {}) => string} */ () => {
	return `Data validation failed`
};

export const error_rate_limit = /** @type {(inputs: {}) => string} */ () => {
	return `Too many requests`
};

export const error_server = /** @type {(inputs: {}) => string} */ () => {
	return `Internal server error`
};

export const error_bad_gateway = /** @type {(inputs: {}) => string} */ () => {
	return `Gateway not responding`
};

export const error_service_unavailable = /** @type {(inputs: {}) => string} */ () => {
	return `Service temporarily unavailable`
};

export const error_http = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	return `HTTP Error ${i.status}`
};

export const error_save_settings = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to save settings`
};

export const error_save_profile = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to update profile`
};

export const error_export_data = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to export data`
};

export const error_delete_account = /** @type {(inputs: {}) => string} */ () => {
	return `Failed to delete account`
};

export const error_process_request = /** @type {(inputs: {}) => string} */ () => {
	return `Error processing request`
};

export const error_ai_request = /** @type {(inputs: {}) => string} */ () => {
	return `Sorry, an error occurred while processing your request. Please try again.`
};

export const error_require_auth = /** @type {(inputs: {}) => string} */ () => {
	return `requireAuth must be called within a request handler`
};

export const error_require_guest = /** @type {(inputs: {}) => string} */ () => {
	return `requireGuest must be called within a request handler`
};

export const error_task_not_found = /** @type {(inputs: {}) => string} */ () => {
	return `Task not found`
};

export const error_try_later = /** @type {(inputs: {}) => string} */ () => {
	return `Try again later`
};

export const error_cannot_delete_task_with_subtasks = /** @type {(inputs: {}) => string} */ () => {
	return `Cannot delete task with subtasks. Delete subtasks first.`
};

export const error_name_required = /** @type {(inputs: {}) => string} */ () => {
	return `Name is required`
};

export const error_not_authorized = /** @type {(inputs: {}) => string} */ () => {
	return `Not authorized`
};

export const error_validation_error = /** @type {(inputs: {}) => string} */ () => {
	return `Data validation failed`
};

export const error_internal_server_error = /** @type {(inputs: {}) => string} */ () => {
	return `An internal server error occurred`
};

export const greeting = /** @type {(inputs: { timeOfDay: NonNullable<unknown> }) => string} */ (i) => {
	if (i.timeOfDay == "morning") return `Good morning`;
	if (i.timeOfDay == "afternoon") return `Good afternoon`;
	if (i.timeOfDay == "evening") return `Good evening`;
	if (i.timeOfDay == "night") return `Good night`;
	return "greeting";
};

export const tip = /** @type {(inputs: { timeOfDay: NonNullable<unknown> }) => string} */ (i) => {
	if (i.timeOfDay == "productivity") return `You don't have to be productive every minute. Rest is also part of the process 💚`;
	if (i.timeOfDay == "morning") return `Morning is a great time for complex tasks. Your brain is rested and ready for challenges!`;
	if (i.timeOfDay == "afternoon") return `Energy can drop after lunch. That's normal — try easier tasks or take a break.`;
	if (i.timeOfDay == "evening") return `Evening is good for summarizing and planning. Don't overload yourself!`;
	if (i.timeOfDay == "night") return `It's late... If you're working — be kind to yourself. Rest is important too.`;
	return "tip";
};

export const status_text = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	if (i.status == "todo") return `To Do`;
	if (i.status == "in_progress") return `In Progress`;
	if (i.status == "in_research") return `Research`;
	if (i.status == "blocked") return `Blocked`;
	if (i.status == "done") return `Done`;
	if (i.status == "cancelled") return `Cancelled`;
	if (i.status == "saved") return `Changes saved`;
	if (i.status == "saving") return `Saving...`;
	if (i.status == "deleted") return `Deleted`;
	if (i.status == "copied") return `Copied to clipboard`;
	if (i.status == "completed") return ` - completed!`;
	if (i.status == "account_deleted") return `Account deleted`;
	return "status_text";
};

export const priority_text = /** @type {(inputs: { priority: NonNullable<unknown> }) => string} */ (i) => {
	if (i.priority == "low") return `Low`;
	if (i.priority == "medium") return `Medium`;
	if (i.priority == "high") return `High`;
	if (i.priority == "critical") return `Critical`;
	return "priority_text";
};

export const task_type_text = /** @type {(inputs: { type: NonNullable<unknown> }) => string} */ (i) => {
	if (i.type == "FEATURE") return `Feature`;
	if (i.type == "BUG") return `Bug`;
	if (i.type == "REFACTOR") return `Refactor`;
	if (i.type == "RESEARCH") return `Research`;
	if (i.type == "DOCUMENTATION") return `Documentation`;
	if (i.type == "TESTING") return `Testing`;
	if (i.type == "DEPLOYMENT") return `Deployment`;
	if (i.type == "MEETING") return `Meeting`;
	if (i.type == "OTHER") return `Other`;
	return "task_type_text";
};

export const badge_text = /** @type {(inputs: { type: NonNullable<unknown> }) => string} */ (i) => {
	if (i.type == "active") return `Active`;
	if (i.type == "inactive") return `Inactive`;
	if (i.type == "warning") return `Warning`;
	if (i.type == "error") return `Error`;
	if (i.type == "success") return `Success`;
	return "badge_text";
};