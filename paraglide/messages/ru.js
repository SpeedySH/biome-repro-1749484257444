// eslint-disable
import * as registry from "../registry.js"


export const hello_world = /** @type {(inputs: { name: NonNullable<unknown> }) => string} */ (i) => {
	return `Привет, ${i.name}!`
};

export const open_workspace = /** @type {(inputs: {}) => string} */ () => {
	return `Открыть Workspace`
};

export const saving = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранение`
};

export const save_notes = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранить заметки`
};

export const time_minutes_short = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.count} мин`
};

export const time_hours_short = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.count} ч`
};

export const time_hours_minutes = /** @type {(inputs: { hours: NonNullable<unknown>, minutes: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.hours} ч ${i.minutes} мин`
};

export const time_less_minute = /** @type {(inputs: {}) => string} */ () => {
	return `меньше минуты`
};

export const time_just_now = /** @type {(inputs: {}) => string} */ () => {
	return `только что`
};

export const time_minute_ago = /** @type {(inputs: {}) => string} */ () => {
	return `минуту назад`
};

export const time_hour_ago = /** @type {(inputs: {}) => string} */ () => {
	return `час назад`
};

export const time_yesterday = /** @type {(inputs: {}) => string} */ () => {
	return `вчера`
};

export const time_work_duration = /** @type {(inputs: {}) => string} */ () => {
	return `Время работы`
};

export const time_paused = /** @type {(inputs: {}) => string} */ () => {
	return `На паузе`
};

export const time_pause_duration = /** @type {(inputs: { minutes: NonNullable<unknown> }) => string} */ (i) => {
	return `Время пауз: ${i.minutes} мин`
};

export const time_synced = /** @type {(inputs: {}) => string} */ () => {
	return `Синхронизировано`
};

export const time_just_started = /** @type {(inputs: {}) => string} */ () => {
	return `Только начали`
};

export const time_minutes = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("ru", i.count, {});
	if (countPlural == "one") return `${i.count} минута`;
	if (countPlural == "few") return `${i.count} минуты`;
	if (countPlural == "many") return `${i.count} минут`;
	return "time_minutes";
};

export const time_hours = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("ru", i.count, {});
	if (countPlural == "one") return `${i.count} час`;
	if (countPlural == "few") return `${i.count} часа`;
	if (countPlural == "many") return `${i.count} часов`;
	return "time_hours";
};

export const time_minutes_ago = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("ru", i.count, {});
	if (countPlural == "one") return `${i.count} минуту назад`;
	if (countPlural == "few") return `${i.count} минуты назад`;
	if (countPlural == "many") return `${i.count} минут назад`;
	return "time_minutes_ago";
};

export const time_hours_ago = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("ru", i.count, {});
	if (countPlural == "one") return `${i.count} час назад`;
	if (countPlural == "few") return `${i.count} часа назад`;
	if (countPlural == "many") return `${i.count} часов назад`;
	return "time_hours_ago";
};

export const time_days_ago = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {const countPlural = registry.plural("ru", i.count, {});
	if (countPlural == "one") return `${i.count} день назад`;
	if (countPlural == "few") return `${i.count} дня назад`;
	if (countPlural == "many") return `${i.count} дней назад`;
	return "time_days_ago";
};

export const actions_complete_task = /** @type {(inputs: {}) => string} */ () => {
	return `Завершить задачу`
};

export const actions_take_break = /** @type {(inputs: {}) => string} */ () => {
	return `Сделать перерыв`
};

export const actions_save_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранить прогресс`
};

export const actions_new_task = /** @type {(inputs: {}) => string} */ () => {
	return `Новая задача`
};

export const actions_all_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Все задачи`
};

export const actions_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Продолжить`
};

export const actions_retry = /** @type {(inputs: {}) => string} */ () => {
	return `Повторить`
};

export const actions_login = /** @type {(inputs: {}) => string} */ () => {
	return `Войти`
};

export const actions_confirm = /** @type {(inputs: {}) => string} */ () => {
	return `Подтвердить`
};

export const actions_cancel = /** @type {(inputs: {}) => string} */ () => {
	return `Отмена`
};

export const actions_undo = /** @type {(inputs: {}) => string} */ () => {
	return `Отменить`
};

export const workspace_title = /** @type {(inputs: {}) => string} */ () => {
	return `Workspace`
};

export const workspace_break_reminder = /** @type {(inputs: { time: NonNullable<unknown> }) => string} */ (i) => {
	return `Ты работаешь уже ${i.time}. Как насчет небольшого перерыва?`
};

export const workspace_task_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Поздравляю! Ты отлично справился!`
};

export const workspace_support_message = /** @type {(inputs: {}) => string} */ () => {
	return `Я здесь, чтобы помочь. Что тебя беспокоит?`
};

export const workspace_initial_greeting = /** @type {(inputs: { greeting: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.greeting}! Как настроение?`
};

export const workspace_task_switched = /** @type {(inputs: { title: NonNullable<unknown> }) => string} */ (i) => {
	return `Отлично! Теперь работаем над "${i.title}".

Начинай в своем темпе, я рядом если понадобится помощь 🌱`
};

export const workspace_pause_saved = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранено! Хорошего отдыха 🌿`
};

export const workspace_work_resumed = /** @type {(inputs: {}) => string} */ () => {
	return `С возвращением! Продолжаем с того места, где остановились 💪`
};

export const workspace_select_task = /** @type {(inputs: {}) => string} */ () => {
	return `Выбрать задачу`
};

export const workspace_select_task_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Не волнуйся, твой прогресс сохранится автоматически`
};

export const workspace_no_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Нет доступных задач`
};

export const workspace_create_first_task = /** @type {(inputs: {}) => string} */ () => {
	return `Создать первую задачу`
};

export const workspace_estimated_hours = /** @type {(inputs: { hours: NonNullable<unknown> }) => string} */ (i) => {
	return `Примерно ${i.hours} часа`
};

export const workspace_cancel = /** @type {(inputs: {}) => string} */ () => {
	return `Отмена`
};

export const workspace_create_new = /** @type {(inputs: {}) => string} */ () => {
	return `Создать новую`
};

export const workspace_save_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Сохраним прогресс`
};

export const workspace_save_progress_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Запишу где ты остановился, чтобы было легче продолжить`
};

export const workspace_pause_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Например: Закончил настройку базы данных, осталось добавить валидацию...`
};

export const workspace_pause_tip = /** @type {(inputs: {}) => string} */ () => {
	return `Совет: Запиши одну конкретную вещь, с которой нужно начать в следующий раз`
};

export const workspace_skip = /** @type {(inputs: {}) => string} */ () => {
	return `Пропустить`
};

export const workspace_save_and_rest = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранить и отдохнуть`
};

export const workspace_error = /** @type {(inputs: {}) => string} */ () => {
	return `Ошибка в workspace сервисе`
};

export const workspace_close_widgets = /** @type {(inputs: {}) => string} */ () => {
	return `Закрыть панель виджетов`
};

export const workspace_widgets = /** @type {(inputs: {}) => string} */ () => {
	return `Виджеты`
};

export const workspace_completion_message = /** @type {(inputs: {}) => string} */ () => {
	return `Поздравляю с завершением! 🌟

Это важное достижение. Что дальше — отдых или новая задача?`
};

export const workspace_deserved_rest = /** @type {(inputs: {}) => string} */ () => {
	return `Заслуженный отдых`
};

export const workspace_rest_message = /** @type {(inputs: {}) => string} */ () => {
	return `Мудрый выбор! Отдых — это часть продуктивности.

Наслаждайся моментом, ты это заслужил 💚`
};

export const workspace_user_took_break = /** @type {(inputs: {}) => string} */ () => {
	return `Пользователь взял перерыв`
};

export const workspace_soft_activity_request = /** @type {(inputs: {}) => string} */ () => {
	return `Хочу сделать небольшой перерыв`
};

export const workspace_message_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось отправить сообщение`
};

export const workspace_not_found = /** @type {(inputs: { id: NonNullable<unknown> }) => string} */ (i) => {
	return `Workspace ${i.id} не найден`
};

export const workspace_assistant_title = /** @type {(inputs: {}) => string} */ () => {
	return `Твой помощник`
};

export const workspace_assistant_always_ready = /** @type {(inputs: {}) => string} */ () => {
	return `Всегда готов поддержать и выслушать`
};

export const workspace_assistant_offline = /** @type {(inputs: {}) => string} */ () => {
	return `Офлайн режим`
};

export const workspace_chat_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Как дела? Чем могу помочь?`
};

export const workspace_chat_placeholder_offline = /** @type {(inputs: {}) => string} */ () => {
	return `Офлайн режим`
};

export const workspace_time_tracker_error = /** @type {(inputs: {}) => string} */ () => {
	return `Ошибка отслеживания времени`
};

export const workspace_time_info_work_time = /** @type {(inputs: {}) => string} */ () => {
	return `Время работы`
};

export const workspace_time_info_paused = /** @type {(inputs: {}) => string} */ () => {
	return `На паузе`
};

export const workspace_time_info_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Продолжить`
};

export const mission_control_title = /** @type {(inputs: {}) => string} */ () => {
	return `Mission Control`
};

export const mission_control_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Командный центр твоей работы`
};

export const mission_control_create_task = /** @type {(inputs: {}) => string} */ () => {
	return `Создать задачу`
};

export const mission_control_search_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Поиск задач...`
};

export const mission_control_search_placeholder_kbd = /** @type {(inputs: {}) => string} */ () => {
	return `Поиск задач... (Cmd+K)`
};

export const mission_control_search_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Поиск (Ctrl+F)`
};

export const mission_control_overview = /** @type {(inputs: {}) => string} */ () => {
	return `Обзор`
};

export const mission_control_matrix = /** @type {(inputs: {}) => string} */ () => {
	return `Матрица`
};

export const mission_control_timeline_title = /** @type {(inputs: {}) => string} */ () => {
	return `Timeline задач`
};

export const mission_control_timeline_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Задачи с дедлайнами в хронологическом порядке`
};

export const mission_control_timeline_overdue_by = /** @type {(inputs: {}) => string} */ () => {
	return `Просрочено на`
};

export const mission_control_timeline_today = /** @type {(inputs: {}) => string} */ () => {
	return `Сегодня`
};

export const mission_control_timeline_tomorrow = /** @type {(inputs: {}) => string} */ () => {
	return `Завтра`
};

export const mission_control_timeline_in_days = /** @type {(inputs: {}) => string} */ () => {
	return `Через`
};

export const mission_control_timeline_no_deadline_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Нет задач с дедлайнами`
};

export const mission_control_focus = /** @type {(inputs: {}) => string} */ () => {
	return `Фокус`
};

export const mission_control_new_task = /** @type {(inputs: {}) => string} */ () => {
	return `Новая задача`
};

export const mission_control_speed = /** @type {(inputs: {}) => string} */ () => {
	return `Скорость`
};

export const mission_control_tasks_per_day = /** @type {(inputs: {}) => string} */ () => {
	return `задач/день`
};

export const mission_control_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Завершено`
};

export const mission_control_accuracy = /** @type {(inputs: {}) => string} */ () => {
	return `Точность оценок`
};

export const mission_control_last_30_days = /** @type {(inputs: {}) => string} */ () => {
	return `последние 30 дней`
};

export const mission_control_need_attention = /** @type {(inputs: {}) => string} */ () => {
	return `Требуют внимания`
};

export const mission_control_overdue = /** @type {(inputs: {}) => string} */ () => {
	return `просрочено`
};

export const mission_control_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `заблокировано`
};

export const mission_control_ai_recommendations = /** @type {(inputs: {}) => string} */ () => {
	return `AI Рекомендации`
};

export const mission_control_next_priority = /** @type {(inputs: {}) => string} */ () => {
	return `Следующий приоритет`
};

export const mission_control_continue_work = /** @type {(inputs: {}) => string} */ () => {
	return `Продолжить работу`
};

export const mission_control_open_ai_assistant = /** @type {(inputs: {}) => string} */ () => {
	return `Открыть AI помощника`
};

export const mission_control_active_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Активные задачи`
};

export const mission_control_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Продолжить`
};

export const mission_control_complete = /** @type {(inputs: {}) => string} */ () => {
	return `Завершить`
};

export const mission_control_block = /** @type {(inputs: {}) => string} */ () => {
	return `Заблокировать`
};

export const mission_control_no_active_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Нет активных задач`
};

export const mission_control_research = /** @type {(inputs: {}) => string} */ () => {
	return `Исследование`
};

export const mission_control_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `задач`
};

export const mission_control_with_deadline = /** @type {(inputs: {}) => string} */ () => {
	return `С дедлайном`
};

export const mission_control_analytics = /** @type {(inputs: {}) => string} */ () => {
	return `Аналитика`
};

export const mission_control_details = /** @type {(inputs: {}) => string} */ () => {
	return `Детали`
};

export const mission_control_stats_completed_today = /** @type {(inputs: {}) => string} */ () => {
	return `Завершено сегодня:`
};

export const mission_control_stats_in_progress = /** @type {(inputs: {}) => string} */ () => {
	return `В работе:`
};

export const mission_control_stats_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `Заблокировано:`
};

export const mission_control_sections_research = /** @type {(inputs: {}) => string} */ () => {
	return `AI исследует`
};

export const mission_control_sections_in_progress = /** @type {(inputs: {}) => string} */ () => {
	return `В работе`
};

export const mission_control_sections_attention = /** @type {(inputs: {}) => string} */ () => {
	return `Требуют внимания`
};

export const mission_control_sections_planned = /** @type {(inputs: {}) => string} */ () => {
	return `Запланировано`
};

export const mission_control_sections_done = /** @type {(inputs: {}) => string} */ () => {
	return `Завершено`
};

export const mission_control_many_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Много задач!`
};

export const mission_control_research_card_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Анализ данных...`
};

export const mission_control_research_card_remaining = /** @type {(inputs: { minutes: NonNullable<unknown> }) => string} */ (i) => {
	return `Осталось ~${i.minutes} минут`
};

export const mission_control_research_card_finding = /** @type {(inputs: {}) => string} */ () => {
	return `Последняя находка:`
};

export const mission_control_research_card_finding_example = /** @type {(inputs: {}) => string} */ () => {
	return `Обнаружена возможность оптимизации через кеширование`
};

export const mission_control_research_card_cancel = /** @type {(inputs: {}) => string} */ () => {
	return `Отменить`
};

export const mission_control_research_card_cancel_notice = /** @type {(inputs: {}) => string} */ () => {
	return `Research отмена будет доступна в Phase 2`
};

export const mission_control_task_not_started = /** @type {(inputs: {}) => string} */ () => {
	return `Не начата`
};

export const mission_control_task_blocker = /** @type {(inputs: {}) => string} */ () => {
	return `Блокер`
};

export const mission_control_task_attention_required = /** @type {(inputs: {}) => string} */ () => {
	return `Требуется ваше внимание для разблокировки`
};

export const mission_control_task_details = /** @type {(inputs: {}) => string} */ () => {
	return `Детали`
};

export const mission_control_task_view_details = /** @type {(inputs: {}) => string} */ () => {
	return `Посмотреть детали`
};

export const mission_control_task_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Продолжить`
};

export const mission_control_research_card_status_text = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	if (i.status == "ANALYZING") return `Анализ данных...`;
	if (i.status == "RESEARCHING") return `Исследование...`;
	if (i.status == "GENERATING") return `Генерация...`;
	if (i.status == "FAILED") return `Ошибка`;
	if (i.status == "COMPLETED") return `Завершено`;
	return "mission_control_research_card_status_text";
};

export const mission_control_task_start = /** @type {(inputs: {}) => string} */ () => {
	return `Начать`
};

export const mission_control_task_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Задача отмечена как выполненная`
};

export const mission_control_task_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `Задача отмечена как заблокированная`
};

export const mission_control_menu_details = /** @type {(inputs: {}) => string} */ () => {
	return `Детали задачи`
};

export const mission_control_menu_delete = /** @type {(inputs: {}) => string} */ () => {
	return `Удалить`
};

export const mission_control_empty_title = /** @type {(inputs: {}) => string} */ () => {
	return `Нет задач`
};

export const mission_control_empty_description = /** @type {(inputs: {}) => string} */ () => {
	return `Создайте первую задачу, чтобы начать отслеживать прогресс проекта`
};

export const mission_control_error_title = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось загрузить данные`
};

export const mission_control_error_retry = /** @type {(inputs: {}) => string} */ () => {
	return `Повторить`
};

export const mission_control_error_generic = /** @type {(inputs: {}) => string} */ () => {
	return `Произошла ошибка`
};

export const mission_control_delete_confirm = /** @type {(inputs: {}) => string} */ () => {
	return `Вы уверены, что хотите удалить эту задачу?`
};

export const mission_control_delete_success = /** @type {(inputs: {}) => string} */ () => {
	return `Задача удалена`
};

export const mission_control_delete_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось удалить задачу`
};

export const mission_control_show_all = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `Показать все (${i.count})`
};

export const mission_control_completed_ago = /** @type {(inputs: {}) => string} */ () => {
	return `Завершено`
};

export const mission_control_priority_matrix_title = /** @type {(inputs: {}) => string} */ () => {
	return `Матрица приоритетов`
};

export const mission_control_priority_matrix_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Распределение задач по важности и срочности`
};

export const mission_control_priority_matrix_urgent_important = /** @type {(inputs: {}) => string} */ () => {
	return `Срочно и важно`
};

export const mission_control_priority_matrix_important_not_urgent = /** @type {(inputs: {}) => string} */ () => {
	return `Важно, но не срочно`
};

export const mission_control_priority_matrix_urgent_not_important = /** @type {(inputs: {}) => string} */ () => {
	return `Срочно, но не важно`
};

export const mission_control_priority_matrix_not_urgent_not_important = /** @type {(inputs: {}) => string} */ () => {
	return `Не срочно и не важно`
};

export const mission_control_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Прогресс`
};

export const mission_control_priority = /** @type {(inputs: {}) => string} */ () => {
	return `Приоритет`
};

export const mission_control_deadline = /** @type {(inputs: {}) => string} */ () => {
	return `Дедлайн`
};

export const mission_control_start_work = /** @type {(inputs: {}) => string} */ () => {
	return `Начать работу`
};

export const mission_control_more_details = /** @type {(inputs: {}) => string} */ () => {
	return `Подробнее`
};

export const mission_control_focus_mode_title = /** @type {(inputs: {}) => string} */ () => {
	return `Режим фокусировки`
};

export const mission_control_focus_mode_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Выберите задачу из любого режима просмотра, чтобы сфокусироваться на ней`
};

export const mission_control_focus_mode_back_to_overview = /** @type {(inputs: {}) => string} */ () => {
	return `Вернуться к обзору`
};

export const task_detail_created = /** @type {(inputs: {}) => string} */ () => {
	return `Создана`
};

export const task_detail_saving = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранение...`
};

export const task_detail_saved = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранено`
};

export const task_detail_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Начинаю анализ...`
};

export const task_detail_subtasks_found = /** @type {(inputs: {}) => string} */ () => {
	return `Найдено подзадач:`
};

export const task_detail_hours = /** @type {(inputs: {}) => string} */ () => {
	return `часов`
};

export const task_detail_hours_short = /** @type {(inputs: {}) => string} */ () => {
	return `ч`
};

export const task_detail_ready_to_plan = /** @type {(inputs: {}) => string} */ () => {
	return `Готовы спланировать задачу?`
};

export const task_detail_ai_help = /** @type {(inputs: {}) => string} */ () => {
	return `AI поможет разбить задачу на подзадачи и оценить время выполнения`
};

export const task_detail_decompose = /** @type {(inputs: {}) => string} */ () => {
	return `Декомпозировать`
};

export const task_detail_research = /** @type {(inputs: {}) => string} */ () => {
	return `Исследовать`
};

export const task_detail_coming_soon = /** @type {(inputs: {}) => string} */ () => {
	return `Скоро`
};

export const task_detail_add_description_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Добавьте описание задачи для более точной декомпозиции`
};

export const task_detail_context_title = /** @type {(inputs: {}) => string} */ () => {
	return `Контекст и заметки`
};

export const task_detail_context_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Дополнительная информация поможет AI лучше понять задачу`
};

export const task_detail_context_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Опишите детали, требования, ограничения...`
};

export const task_detail_plan_title = /** @type {(inputs: {}) => string} */ () => {
	return `План работы`
};

export const task_detail_subtasks_count = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.count} подзадач`
};

export const task_detail_update_plan = /** @type {(inputs: {}) => string} */ () => {
	return `Обновить план`
};

export const task_detail_drag_subtask = /** @type {(inputs: {}) => string} */ () => {
	return `Перетаскиваемая подзадача`
};

export const task_detail_drag_handle = /** @type {(inputs: {}) => string} */ () => {
	return `Перетащить подзадачу`
};

export const task_detail_add_subtask = /** @type {(inputs: {}) => string} */ () => {
	return `Добавить подзадачу`
};

export const task_detail_additional_info = /** @type {(inputs: {}) => string} */ () => {
	return `Дополнительная информация о задаче`
};

export const task_detail_implementation_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Детали реализации, ограничения, важные моменты...`
};

export const task_detail_saving_action = /** @type {(inputs: {}) => string} */ () => {
	return `Сохраняю...`
};

export const task_detail_save_plan = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранить план`
};

export const task_detail_start_work = /** @type {(inputs: {}) => string} */ () => {
	return `Начать работу`
};

export const task_detail_plan_created = /** @type {(inputs: { subtasks: NonNullable<unknown>, hours: NonNullable<unknown> }) => string} */ (i) => {
	return `План создан: ${i.subtasks} подзадач, ~${i.hours} часов`
};

export const task_detail_decomposition_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось начать декомпозицию`
};

export const task_detail_save_notes_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось сохранить заметки`
};

export const task_detail_save_subtask_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось сохранить подзадачу`
};

export const task_detail_new_subtask = /** @type {(inputs: {}) => string} */ () => {
	return `Новая подзадача`
};

export const task_detail_order_changed = /** @type {(inputs: {}) => string} */ () => {
	return `Порядок подзадач изменён`
};

export const task_detail_order_save_reminder = /** @type {(inputs: {}) => string} */ () => {
	return `Не забудьте сохранить план`
};

export const task_detail_plan_saved = /** @type {(inputs: {}) => string} */ () => {
	return `План сохранен!`
};

export const task_detail_save_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось сохранить изменения`
};

export const task_detail_save_and_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранить и продолжить`
};

export const task_detail_confidence_high = /** @type {(inputs: {}) => string} */ () => {
	return `AI уверен в оценке`
};

export const task_detail_confidence_medium = /** @type {(inputs: {}) => string} */ () => {
	return `Зависит от деталей реализации`
};

export const task_detail_confidence_low = /** @type {(inputs: {}) => string} */ () => {
	return `Нужны уточнения для точной оценки`
};

export const task_detail_confidence_research = /** @type {(inputs: {}) => string} */ () => {
	return `Требуется исследование`
};

export const task_detail_notes_label = /** @type {(inputs: {}) => string} */ () => {
	return `Заметки к задаче`
};

export const task_detail_notes_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Добавьте любые заметки, мысли или контекст...`
};

export const create_task_title = /** @type {(inputs: {}) => string} */ () => {
	return `Новая задача`
};

export const create_task_heading = /** @type {(inputs: {}) => string} */ () => {
	return `Что нужно сделать?`
};

export const create_task_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Просто запишите мысль — детали обсудим потом`
};

export const create_task_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Описание задачи...`
};

export const create_task_templates_label = /** @type {(inputs: {}) => string} */ () => {
	return `Или выберите тип задачи:`
};

export const create_task_templates_bug = /** @type {(inputs: {}) => string} */ () => {
	return `Баг`
};

export const create_task_templates_bug_prefix = /** @type {(inputs: {}) => string} */ () => {
	return `Исправить: `
};

export const create_task_templates_feature = /** @type {(inputs: {}) => string} */ () => {
	return `Фича`
};

export const create_task_templates_feature_prefix = /** @type {(inputs: {}) => string} */ () => {
	return `Реализовать: `
};

export const create_task_templates_research = /** @type {(inputs: {}) => string} */ () => {
	return `Исследование`
};

export const create_task_templates_research_prefix = /** @type {(inputs: {}) => string} */ () => {
	return `Изучить: `
};

export const create_task_success = /** @type {(inputs: {}) => string} */ () => {
	return `Задача создана!`
};

export const create_task_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось создать задачу`
};

export const create_task_enter = /** @type {(inputs: {}) => string} */ () => {
	return `создать и открыть`
};

export const create_task_shift_enter = /** @type {(inputs: {}) => string} */ () => {
	return `создать и продолжить`
};

export const create_task_recent = /** @type {(inputs: {}) => string} */ () => {
	return `Недавно созданные:`
};

export const subtask_title_label = /** @type {(inputs: {}) => string} */ () => {
	return `Название подзадачи`
};

export const subtask_title_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Что нужно сделать?`
};

export const subtask_hours_label = /** @type {(inputs: {}) => string} */ () => {
	return `Оценка времени (часы)`
};

export const subtask_description_label = /** @type {(inputs: {}) => string} */ () => {
	return `Описание`
};

export const subtask_description_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Дополнительные детали (опционально)`
};

export const subtask_adding = /** @type {(inputs: {}) => string} */ () => {
	return `Добавление`
};

export const login_page_title = /** @type {(inputs: {}) => string} */ () => {
	return `Вход - DeComposer`
};

export const login_back_home = /** @type {(inputs: {}) => string} */ () => {
	return `На главную`
};

export const login_welcome_title = /** @type {(inputs: {}) => string} */ () => {
	return `Добро пожаловать`
};

export const login_welcome_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Войдите в DeComposer через безопасную ссылку`
};

export const login_email_label = /** @type {(inputs: {}) => string} */ () => {
	return `Email адрес`
};

export const login_email_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `your@email.com`
};

export const login_email_description = /** @type {(inputs: {}) => string} */ () => {
	return `Мы отправим вам ссылку для безопасного входа`
};

export const login_sending_link = /** @type {(inputs: {}) => string} */ () => {
	return `Отправляем ссылку...`
};

export const login_get_link = /** @type {(inputs: {}) => string} */ () => {
	return `Получить ссылку для входа`
};

export const login_benefits_title = /** @type {(inputs: {}) => string} */ () => {
	return `Преимущества`
};

export const login_benefits_no_password_title = /** @type {(inputs: {}) => string} */ () => {
	return `Без паролей`
};

export const login_benefits_no_password_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Не нужно запоминать еще один пароль`
};

export const login_benefits_security_title = /** @type {(inputs: {}) => string} */ () => {
	return `Максимальная безопасность`
};

export const login_benefits_security_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Каждая ссылка уникальна и работает только один раз`
};

export const login_benefits_quick_title = /** @type {(inputs: {}) => string} */ () => {
	return `Быстрый вход`
};

export const login_benefits_quick_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Один клик в письме — и вы уже в системе`
};

export const login_check_email_title = /** @type {(inputs: {}) => string} */ () => {
	return `Проверьте почту!`
};

export const login_check_email_message = /** @type {(inputs: {}) => string} */ () => {
	return `Мы отправили ссылку для входа на`
};

export const login_check_email_expiry_warning = /** @type {(inputs: {}) => string} */ () => {
	return `Ссылка действительна только 10 минут для вашей безопасности`
};

export const login_check_email_resend_link = /** @type {(inputs: {}) => string} */ () => {
	return `Отправить повторно`
};

export const login_check_email_no_email_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Не получили письмо? Проверьте папку "Спам" или "Промоакции"`
};

export const login_thank_you = /** @type {(inputs: {}) => string} */ () => {
	return `Спасибо, что выбрали DeComposer`
};

export const login_terms_message = /** @type {(inputs: {}) => string} */ () => {
	return `Входя в систему, вы соглашаетесь с нашей политикой
конфиденциальности и условиями использования`
};

export const login_errors_invalid_link = /** @type {(inputs: {}) => string} */ () => {
	return `Неверная ссылка для входа`
};

export const login_errors_expired_link = /** @type {(inputs: {}) => string} */ () => {
	return `Срок действия ссылки истек. Запросите новую`
};

export const login_errors_system = /** @type {(inputs: {}) => string} */ () => {
	return `Произошла системная ошибка. Попробуйте позже`
};

export const ai_assistant_title = /** @type {(inputs: {}) => string} */ () => {
	return `AI-помощник по задачам`
};

export const ai_assistant_description = /** @type {(inputs: {}) => string} */ () => {
	return `Анализ ваших задач и персональные рекомендации по организации работы`
};

export const ai_assistant_loading = /** @type {(inputs: {}) => string} */ () => {
	return `Загружаю данные...`
};

export const ai_assistant_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Анализирую ваши задачи...`
};

export const ai_assistant_overview = /** @type {(inputs: {}) => string} */ () => {
	return `Обзор`
};

export const ai_assistant_priorities = /** @type {(inputs: {}) => string} */ () => {
	return `Приоритеты`
};

export const ai_assistant_time = /** @type {(inputs: {}) => string} */ () => {
	return `Время`
};

export const ai_assistant_risks = /** @type {(inputs: {}) => string} */ () => {
	return `Риски`
};

export const ai_assistant_total_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Всего задач`
};

export const ai_assistant_in_progress = /** @type {(inputs: {}) => string} */ () => {
	return `В работе`
};

export const ai_assistant_blocked = /** @type {(inputs: {}) => string} */ () => {
	return `Заблокировано`
};

export const ai_assistant_overdue = /** @type {(inputs: {}) => string} */ () => {
	return `Просрочено`
};

export const ai_assistant_recommendations = /** @type {(inputs: {}) => string} */ () => {
	return `Рекомендации`
};

export const ai_assistant_urgent_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Срочные задачи`
};

export const ai_assistant_urgent = /** @type {(inputs: {}) => string} */ () => {
	return `Срочно`
};

export const ai_assistant_important_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Важные задачи`
};

export const ai_assistant_important = /** @type {(inputs: {}) => string} */ () => {
	return `Важно`
};

export const ai_assistant_can_wait = /** @type {(inputs: {}) => string} */ () => {
	return `Могут подождать`
};

export const ai_assistant_later = /** @type {(inputs: {}) => string} */ () => {
	return `Позже`
};

export const ai_assistant_time_stats = /** @type {(inputs: {}) => string} */ () => {
	return `Статистика времени`
};

export const ai_assistant_estimated_time = /** @type {(inputs: {}) => string} */ () => {
	return `Оценочное время`
};

export const ai_assistant_spent_time = /** @type {(inputs: {}) => string} */ () => {
	return `Потрачено времени`
};

export const ai_assistant_accuracy = /** @type {(inputs: {}) => string} */ () => {
	return `Точность оценок`
};

export const ai_assistant_time_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Прогресс по времени`
};

export const ai_assistant_time_tips = /** @type {(inputs: {}) => string} */ () => {
	return `Советы по управлению временем`
};

export const ai_assistant_great_work = /** @type {(inputs: {}) => string} */ () => {
	return `Отличная работа!`
};

export const ai_assistant_no_serious_risks = /** @type {(inputs: {}) => string} */ () => {
	return `Серьезных рисков не обнаружено`
};

export const ai_assistant_affected_tasks = /** @type {(inputs: {}) => string} */ () => {
	return `Затронуто задач:`
};

export const ai_assistant_ask_question = /** @type {(inputs: {}) => string} */ () => {
	return `Отправить вопрос`
};

export const ai_assistant_send = /** @type {(inputs: {}) => string} */ () => {
	return `Отправить`
};

export const ai_assistant_close = /** @type {(inputs: {}) => string} */ () => {
	return `Закрыть`
};

export const ai_assistant_question_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Задайте вопрос о ваших задачах...`
};

export const ai_assistant_question_hint = /** @type {(inputs: {}) => string} */ () => {
	return `Спросите что-нибудь конкретное о ваших задачах или попросите дополнительные рекомендации`
};

export const ai_assistant_parse_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось распарсить ответ AI`
};

export const ai_assistant_risk_high = /** @type {(inputs: {}) => string} */ () => {
	return `Высокий`
};

export const ai_assistant_risk_medium = /** @type {(inputs: {}) => string} */ () => {
	return `Средний`
};

export const ai_assistant_risk_low = /** @type {(inputs: {}) => string} */ () => {
	return `Низкий`
};

export const onboarding_update_preferences = /** @type {(inputs: {}) => string} */ () => {
	return `Обновите свои предпочтения, чтобы AI-ассистент лучше вас понимал`
};

export const onboarding_step = /** @type {(inputs: {}) => string} */ () => {
	return `Шаг`
};

export const onboarding_complete = /** @type {(inputs: {}) => string} */ () => {
	return `Онбординг успешно завершен`
};

export const onboarding_back = /** @type {(inputs: {}) => string} */ () => {
	return `Назад`
};

export const onboarding_continue = /** @type {(inputs: {}) => string} */ () => {
	return `Продолжить`
};

export const onboarding_can_change_later = /** @type {(inputs: {}) => string} */ () => {
	return `Вы всегда сможете изменить эти настройки в профиле`
};

export const onboarding_saving = /** @type {(inputs: {}) => string} */ () => {
	return `Сохранение...`
};

export const onboarding_update_preferences_btn = /** @type {(inputs: {}) => string} */ () => {
	return `Обновить предпочтения`
};

export const onboarding_start_working = /** @type {(inputs: {}) => string} */ () => {
	return `Начать работу`
};

export const onboarding_go_back = /** @type {(inputs: {}) => string} */ () => {
	return `Вернуться назад`
};

export const onboarding_preferences_updated = /** @type {(inputs: {}) => string} */ () => {
	return `Предпочтения обновлены`
};

export const onboarding_ai_will_consider = /** @type {(inputs: {}) => string} */ () => {
	return `AI-ассистент будет учитывать ваши новые настройки`
};

export const onboarding_check_connection = /** @type {(inputs: {}) => string} */ () => {
	return `Проверьте подключение к интернету`
};

export const onboarding_demo_title = /** @type {(inputs: {}) => string} */ () => {
	return `Посмотрите, как DeComposer заботится о вас`
};

export const onboarding_demo_subtitle = /** @type {(inputs: {}) => string} */ () => {
	return `Наблюдайте за психологически безопасным подходом к продуктивности`
};

export const onboarding_demo_greeting = /** @type {(inputs: { userName: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.userName}, давайте покажем, как работает DeComposer!`
};

export const onboarding_demo_ai_description = /** @type {(inputs: {}) => string} */ () => {
	return `Сейчас наш AI разберет типичную задачу разработчика на понятные подзадачи с оценкой времени`
};

export const onboarding_demo_ai_badge = /** @type {(inputs: {}) => string} */ () => {
	return `AI Demo`
};

export const onboarding_demo_task_title = /** @type {(inputs: {}) => string} */ () => {
	return `Создать личный сайт-портфолио`
};

export const onboarding_demo_task_description = /** @type {(inputs: {}) => string} */ () => {
	return `Разработать современный адаптивный сайт для демонстрации моих проектов и навыков`
};

export const onboarding_demo_analyzing = /** @type {(inputs: {}) => string} */ () => {
	return `Анализирую задачу...`
};

export const onboarding_demo_decomposing = /** @type {(inputs: {}) => string} */ () => {
	return `Декомпозирую...`
};

export const onboarding_demo_analyzing_detail = /** @type {(inputs: {}) => string} */ () => {
	return `Определяю объем работ и необходимые этапы...`
};

export const onboarding_demo_decomposing_detail = /** @type {(inputs: {}) => string} */ () => {
	return `Разбиваю на категории и оцениваю время...`
};

export const onboarding_demo_categories_planning = /** @type {(inputs: {}) => string} */ () => {
	return `Исследование и планирование`
};

export const onboarding_demo_categories_design = /** @type {(inputs: {}) => string} */ () => {
	return `Дизайн и прототипирование`
};

export const onboarding_demo_categories_development = /** @type {(inputs: {}) => string} */ () => {
	return `Разработка`
};

export const onboarding_demo_categories_deployment = /** @type {(inputs: {}) => string} */ () => {
	return `Тестирование и деплой`
};

export const onboarding_demo_tasks_research_competitors = /** @type {(inputs: {}) => string} */ () => {
	return `Анализ референсов и конкурентов`
};

export const onboarding_demo_tasks_create_sitemap = /** @type {(inputs: {}) => string} */ () => {
	return `Создание структуры сайта и sitemap`
};

export const onboarding_demo_tasks_choose_tech = /** @type {(inputs: {}) => string} */ () => {
	return `Выбор технологического стека`
};

export const onboarding_demo_tasks_wireframes = /** @type {(inputs: {}) => string} */ () => {
	return `Создание wireframes основных страниц`
};

export const onboarding_demo_tasks_design_system = /** @type {(inputs: {}) => string} */ () => {
	return `Разработка дизайн-системы и UI kit`
};

export const onboarding_demo_tasks_adaptive_design = /** @type {(inputs: {}) => string} */ () => {
	return `Дизайн адаптивных макетов`
};

export const onboarding_demo_tasks_setup_env = /** @type {(inputs: {}) => string} */ () => {
	return `Настройка окружения и базовой структуры`
};

export const onboarding_demo_tasks_main_page = /** @type {(inputs: {}) => string} */ () => {
	return `Верстка главной страницы`
};

export const onboarding_demo_tasks_projects_page = /** @type {(inputs: {}) => string} */ () => {
	return `Страница проектов с фильтрацией`
};

export const onboarding_demo_tasks_contact_form = /** @type {(inputs: {}) => string} */ () => {
	return `Контактная форма и валидация`
};

export const onboarding_demo_tasks_animations = /** @type {(inputs: {}) => string} */ () => {
	return `Анимации и интерактивные элементы`
};

export const onboarding_demo_tasks_testing = /** @type {(inputs: {}) => string} */ () => {
	return `Кроссбраузерное тестирование`
};

export const onboarding_demo_tasks_optimization = /** @type {(inputs: {}) => string} */ () => {
	return `Оптимизация производительности`
};

export const onboarding_demo_tasks_hosting = /** @type {(inputs: {}) => string} */ () => {
	return `Настройка хостинга и CI/CD`
};

export const onboarding_demo_tasks_seo = /** @type {(inputs: {}) => string} */ () => {
	return `SEO оптимизация`
};

export const onboarding_demo_total_time = /** @type {(inputs: {}) => string} */ () => {
	return `Общее время`
};

export const onboarding_demo_total_time_hours = /** @type {(inputs: {}) => string} */ () => {
	return `часов`
};

export const onboarding_demo_subtasks_count = /** @type {(inputs: {}) => string} */ () => {
	return `Количество подзадач`
};

export const onboarding_demo_benefits_title = /** @type {(inputs: {}) => string} */ () => {
	return `Что дает декомпозиция:`
};

export const onboarding_demo_benefits_time_estimate = /** @type {(inputs: {}) => string} */ () => {
	return `Точная оценка времени на каждый этап`
};

export const onboarding_demo_benefits_structure = /** @type {(inputs: {}) => string} */ () => {
	return `Понятная структура и приоритеты`
};

export const onboarding_demo_benefits_no_forgotten = /** @type {(inputs: {}) => string} */ () => {
	return `Никаких забытых задач и авралов`
};

export const onboarding_demo_try_button = /** @type {(inputs: {}) => string} */ () => {
	return `Попробовать со своей задачей`
};

export const onboarding_demo_hint = /** @type {(inputs: {}) => string} */ () => {
	return `DeComposer может декомпозировать любые технические задачи за считанные секунды`
};

export const onboarding_step_title = /** @type {(inputs: { step: NonNullable<unknown> }) => string} */ (i) => {
	if (i.step == "1") return `Как к вам обращаться?`;
	if (i.step == "2") return `Ваши ценности и приоритеты`;
	if (i.step == "3") return `Ваш стиль работы`;
	if (i.step == "4") return `Какая поддержка вам нужна?`;
	return "onboarding_step_title";
};

export const onboarding_steps_1_alt_title = /** @type {(inputs: {}) => string} */ () => {
	return `Давайте знакомиться!`
};

export const onboarding_step_subtitle = /** @type {(inputs: { step: NonNullable<unknown> }) => string} */ (i) => {
	if (i.step == "1") return `Это поможет создать комфортную рабочую среду`;
	if (i.step == "2") return `AI адаптируется под ваш ритм`;
	if (i.step == "3") return `Выберите, как AI должен с вами взаимодействовать`;
	if (i.step == "4") return `Персонализируем ваш опыт работы`;
	return "onboarding_step_subtitle";
};

export const onboarding_questions_name = /** @type {(inputs: {}) => string} */ () => {
	return `Как вас зовут?`
};

export const onboarding_questions_values = /** @type {(inputs: {}) => string} */ () => {
	return `Что для вас важнее всего?`
};

export const onboarding_questions_focus = /** @type {(inputs: {}) => string} */ () => {
	return `На чем вы хотите сфокусироваться?`
};

export const onboarding_questions_support = /** @type {(inputs: {}) => string} */ () => {
	return `Как AI должен с вами общаться?`
};

export const onboarding_name_placeholder = /** @type {(inputs: {}) => string} */ () => {
	return `Иван Иванов`
};

export const onboarding_name_description = /** @type {(inputs: {}) => string} */ () => {
	return `Мы будем обращаться к вам по имени для более личного опыта`
};

export const onboarding_values_life_first_title = /** @type {(inputs: {}) => string} */ () => {
	return `Жизнь превыше всего`
};

export const onboarding_values_life_first_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Работа - это часть жизни, а не вся жизнь`
};

export const onboarding_values_balance_title = /** @type {(inputs: {}) => string} */ () => {
	return `Гармоничный баланс`
};

export const onboarding_values_balance_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Равное внимание работе и личной жизни`
};

export const onboarding_values_achievement_title = /** @type {(inputs: {}) => string} */ () => {
	return `Фокус на достижениях`
};

export const onboarding_values_achievement_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Амбициозные цели с заботой о себе`
};

export const onboarding_focus_productivity_title = /** @type {(inputs: {}) => string} */ () => {
	return `Продуктивность`
};

export const onboarding_focus_productivity_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Эффективное выполнение задач`
};

export const onboarding_focus_creativity_title = /** @type {(inputs: {}) => string} */ () => {
	return `Творчество`
};

export const onboarding_focus_creativity_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Инновации и новые идеи`
};

export const onboarding_focus_development_title = /** @type {(inputs: {}) => string} */ () => {
	return `Развитие`
};

export const onboarding_focus_development_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Обучение и рост навыков`
};

export const onboarding_focus_wellbeing_title = /** @type {(inputs: {}) => string} */ () => {
	return `Благополучие`
};

export const onboarding_focus_wellbeing_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Баланс и забота о себе`
};

export const onboarding_support_gentle_title = /** @type {(inputs: {}) => string} */ () => {
	return `Мягко и заботливо`
};

export const onboarding_support_gentle_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Поддерживающий тон с акцентом на заботу о себе`
};

export const onboarding_support_balanced_title = /** @type {(inputs: {}) => string} */ () => {
	return `Сбалансированно`
};

export const onboarding_support_balanced_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Дружелюбно, но по делу`
};

export const onboarding_support_direct_title = /** @type {(inputs: {}) => string} */ () => {
	return `Прямо и конкретно`
};

export const onboarding_support_direct_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Минимум лирики, максимум пользы`
};

export const categories_preparation_title = /** @type {(inputs: {}) => string} */ () => {
	return `Подготовка`
};

export const categories_preparation_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Изучение, исследование, планирование`
};

export const categories_development_title = /** @type {(inputs: {}) => string} */ () => {
	return `Разработка`
};

export const categories_development_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Написание кода, создание функционала`
};

export const categories_testing_title = /** @type {(inputs: {}) => string} */ () => {
	return `Тестирование`
};

export const categories_testing_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Проверка, отладка, написание тестов`
};

export const categories_documentation_title = /** @type {(inputs: {}) => string} */ () => {
	return `Документация`
};

export const categories_documentation_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Создание документации, описаний, инструкций`
};

export const categories_deployment_title = /** @type {(inputs: {}) => string} */ () => {
	return `Развертывание`
};

export const categories_deployment_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Деплой, настройка окружения, CI/CD`
};

export const categories_review_title = /** @type {(inputs: {}) => string} */ () => {
	return `Ревью и доработки`
};

export const categories_review_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Code review, исправления, рефакторинг`
};

export const categories_other_title = /** @type {(inputs: {}) => string} */ () => {
	return `Другое`
};

export const categories_other_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Прочие задачи`
};

export const mood_label = /** @type {(inputs: {}) => string} */ () => {
	return `Настроение:`
};

export const mood_focused_title = /** @type {(inputs: {}) => string} */ () => {
	return `Фокус`
};

export const mood_focused_message = /** @type {(inputs: {}) => string} */ () => {
	return `я в фокусе, работаю`
};

export const mood_relaxed_title = /** @type {(inputs: {}) => string} */ () => {
	return `Спокойно`
};

export const mood_relaxed_message = /** @type {(inputs: {}) => string} */ () => {
	return `спокойно работаю`
};

export const mood_tired_title = /** @type {(inputs: {}) => string} */ () => {
	return `Устал`
};

export const mood_tired_message = /** @type {(inputs: {}) => string} */ () => {
	return `устал немного`
};

export const mood_stuck_title = /** @type {(inputs: {}) => string} */ () => {
	return `Застрял`
};

export const mood_stuck_message = /** @type {(inputs: {}) => string} */ () => {
	return `застрял, нужна помощь`
};

export const activities_soft_title = /** @type {(inputs: {}) => string} */ () => {
	return `Мягкие активности`
};

export const activities_tea_break_title = /** @type {(inputs: {}) => string} */ () => {
	return `Перерыв на чай`
};

export const activities_tea_break_desc = /** @type {(inputs: {}) => string} */ () => {
	return `5-10 минут для себя`
};

export const activities_stretch_title = /** @type {(inputs: {}) => string} */ () => {
	return `Легкая разминка`
};

export const activities_stretch_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Потянуться и подышать`
};

export const activities_support_title = /** @type {(inputs: {}) => string} */ () => {
	return `Поддержка`
};

export const activities_support_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Добрые слова`
};

export const activities_quick_title = /** @type {(inputs: {}) => string} */ () => {
	return `Быстрые действия`
};

export const sounds_ambient_title = /** @type {(inputs: {}) => string} */ () => {
	return `Фоновые звуки`
};

export const sounds_off = /** @type {(inputs: {}) => string} */ () => {
	return `Выключить`
};

export const sounds_rain = /** @type {(inputs: {}) => string} */ () => {
	return `Дождь`
};

export const sounds_forest = /** @type {(inputs: {}) => string} */ () => {
	return `Лес`
};

export const sounds_ocean = /** @type {(inputs: {}) => string} */ () => {
	return `Океан`
};

export const task_context_title = /** @type {(inputs: {}) => string} */ () => {
	return `Контекст задачи`
};

export const task_context_expand = /** @type {(inputs: {}) => string} */ () => {
	return `Развернуть`
};

export const task_context_collapse = /** @type {(inputs: {}) => string} */ () => {
	return `Свернуть`
};

export const task_context_select_task = /** @type {(inputs: {}) => string} */ () => {
	return `Выберите задачу чтобы увидеть контекст`
};

export const task_context_no_description = /** @type {(inputs: {}) => string} */ () => {
	return `Нет описания`
};

export const task_context_subtasks = /** @type {(inputs: {}) => string} */ () => {
	return `подзадач`
};

export const task_context_hours_remaining = /** @type {(inputs: {}) => string} */ () => {
	return `ч осталось`
};

export const task_context_description = /** @type {(inputs: {}) => string} */ () => {
	return `Описание`
};

export const task_context_progress = /** @type {(inputs: {}) => string} */ () => {
	return `Прогресс`
};

export const task_context_subtasks_completed = /** @type {(inputs: { completed: NonNullable<unknown>, total: NonNullable<unknown> }) => string} */ (i) => {
	return `${i.completed} из ${i.total} подзадач выполнено`
};

export const task_context_subtasks_title = /** @type {(inputs: {}) => string} */ () => {
	return `Подзадачи`
};

export const task_context_no_subtasks = /** @type {(inputs: {}) => string} */ () => {
	return `Нет подзадач`
};

export const task_context_open_task = /** @type {(inputs: {}) => string} */ () => {
	return `Открыть задачу →`
};

export const task_context_hours_short = /** @type {(inputs: {}) => string} */ () => {
	return `ч`
};

export const reminder_daily_title = /** @type {(inputs: {}) => string} */ () => {
	return `Напоминание дня`
};

export const sort_by_created_date = /** @type {(inputs: {}) => string} */ () => {
	return `Дата создания`
};

export const sort_by_title = /** @type {(inputs: {}) => string} */ () => {
	return `Название`
};

export const sort_by_status = /** @type {(inputs: {}) => string} */ () => {
	return `Статус`
};

export const sort_by_priority = /** @type {(inputs: {}) => string} */ () => {
	return `Приоритет`
};

export const sort_by_deadline = /** @type {(inputs: {}) => string} */ () => {
	return `Дедлайн`
};

export const sort_by_estimated_time = /** @type {(inputs: {}) => string} */ () => {
	return `Оценка времени`
};

export const tasks_created_success = /** @type {(inputs: {}) => string} */ () => {
	return `Задача создана!`
};

export const tasks_decomposing = /** @type {(inputs: {}) => string} */ () => {
	return `Анализирую задачу...`
};

export const tasks_decomposed_success = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `Создано ${i.count} подзадач`
};

export const tasks_decompose_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось декомпозировать задачу`
};

export const tasks_create_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось создать задачу`
};

export const tasks_status_changed = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	return `Статус изменен на: ${i.status}`
};

export const tasks_completed_with_time = /** @type {(inputs: { hours: NonNullable<unknown> }) => string} */ (i) => {
	return `Задача завершена! Время работы: ${i.hours} часов`
};

export const tasks_completed = /** @type {(inputs: {}) => string} */ () => {
	return `Задача завершена!`
};

export const tasks_complete_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось завершить задачу`
};

export const tasks_blocked = /** @type {(inputs: { reason: NonNullable<unknown> }) => string} */ (i) => {
	return `Задача заблокирована: ${i.reason}`
};

export const tasks_block_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось заблокировать задачу`
};

export const tasks_estimating = /** @type {(inputs: {}) => string} */ () => {
	return `Оцениваю время выполнения...`
};

export const tasks_estimated = /** @type {(inputs: { hours: NonNullable<unknown>, confidence: NonNullable<unknown> }) => string} */ (i) => {
	return `Оценка: ${i.hours} часов (уверенность ${i.confidence}%)`
};

export const tasks_estimate_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось оценить задачу`
};

export const tasks_exporting = /** @type {(inputs: {}) => string} */ () => {
	return `Экспортирую задачи...`
};

export const tasks_exported = /** @type {(inputs: {}) => string} */ () => {
	return `Задачи экспортированы`
};

export const tasks_export_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось экспортировать задачи`
};

export const tasks_complete_celebrations = /** @type {(inputs: { variant: NonNullable<unknown> }) => string} */ (i) => {
	if (i.variant == "1") return `Отличная работа!`;
	if (i.variant == "2") return `Ты молодец!`;
	if (i.variant == "3") return `Задача выполнена блестяще!`;
	return "tasks_complete_celebrations";
};

export const subtasks_updated = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `Обновлено подзадач: ${i.count}`
};

export const subtasks_update_partial_error = /** @type {(inputs: { failed: NonNullable<unknown> }) => string} */ (i) => {
	return `Не удалось обновить ${i.failed} подзадач`
};

export const work_session_started = /** @type {(inputs: {}) => string} */ () => {
	return `Сессия работы начата`
};

export const work_session_start_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось начать сессию`
};

export const similar_tasks_none_found = /** @type {(inputs: {}) => string} */ () => {
	return `Похожие задачи не найдены`
};

export const similar_tasks_error = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось найти похожие задачи`
};

export const confirm_complete_with_incomplete_subtasks = /** @type {(inputs: { count: NonNullable<unknown> }) => string} */ (i) => {
	return `У задачи есть ${i.count} незавершенных подзадач. Завершить все равно?`
};

export const confirm_complete_anyway = /** @type {(inputs: {}) => string} */ () => {
	return `Завершить все равно`
};
/** @type {(inputs: {}) => string} */
export const badge_active = () => 'badge_active'
/** @type {(inputs: {}) => string} */
export const badge_inactive = () => 'badge_inactive'
/** @type {(inputs: {}) => string} */
export const badge_warning = () => 'badge_warning'
/** @type {(inputs: {}) => string} */
export const badge_error = () => 'badge_error'
/** @type {(inputs: {}) => string} */
export const badge_success = () => 'badge_success'

export const achievements_first_decomposition_title = /** @type {(inputs: {}) => string} */ () => {
	return `Первая декомпозиция! 🎉`
};

export const achievements_first_decomposition_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Ты только что создал свою первую декомпозицию`
};

export const achievements_first_task_title = /** @type {(inputs: {}) => string} */ () => {
	return `Первая задача! ✨`
};

export const achievements_first_task_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Отличное начало!`
};

export const achievements_task_completed_title = /** @type {(inputs: {}) => string} */ () => {
	return `Задача выполнена! ✅`
};

export const achievements_task_completed_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Так держать!`
};

export const achievements_productive_day_title = /** @type {(inputs: {}) => string} */ () => {
	return `Продуктивный день! 🔥`
};

export const achievements_productive_day_desc = /** @type {(inputs: {}) => string} */ () => {
	return `3 задачи за день - отличный результат!`
};

export const achievements_week_streak_title = /** @type {(inputs: {}) => string} */ () => {
	return `Недельная серия! 🌟`
};

export const achievements_week_streak_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Ты работаешь каждый день уже неделю`
};

export const achievements_focus_master_title = /** @type {(inputs: {}) => string} */ () => {
	return `Мастер фокуса! 🎯`
};

export const achievements_focus_master_desc = /** @type {(inputs: {}) => string} */ () => {
	return `2 часа непрерывной работы`
};

export const research_starting = /** @type {(inputs: {}) => string} */ () => {
	return `🔍 Начинаю глубокое исследование задачи...`
};

export const research_completed = /** @type {(inputs: { duration: NonNullable<unknown> }) => string} */ (i) => {
	return `✨ Исследование завершено за ${i.duration} секунд`
};

export const research_error = /** @type {(inputs: {}) => string} */ () => {
	return `Произошла ошибка при исследовании`
};

export const research_start_error = /** @type {(inputs: {}) => string} */ () => {
	return `Произошла ошибка при запуске исследования`
};

export const email_magic_link_subject = /** @type {(inputs: {}) => string} */ () => {
	return `Ссылка для входа в Decomposer`
};

export const email_magic_link_title = /** @type {(inputs: {}) => string} */ () => {
	return `Вход в Decomposer`
};

export const email_magic_link_message = /** @type {(inputs: {}) => string} */ () => {
	return `Нажмите кнопку ниже, чтобы войти в свой аккаунт:`
};

export const email_magic_link_button = /** @type {(inputs: {}) => string} */ () => {
	return `Войти`
};

export const email_magic_link_footer = /** @type {(inputs: {}) => string} */ () => {
	return `Эта ссылка истечет через 10 минут. Если вы не запрашивали это письмо, можете его проигнорировать.`
};

export const success_settings_saved_title = /** @type {(inputs: {}) => string} */ () => {
	return `Настройки сохранены`
};

export const success_settings_saved_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Изменения вступили в силу`
};

export const success_profile_updated_title = /** @type {(inputs: {}) => string} */ () => {
	return `Профиль обновлен`
};

export const success_profile_updated_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Ваши изменения сохранены`
};

export const success_data_exported_title = /** @type {(inputs: {}) => string} */ () => {
	return `Данные экспортированы`
};

export const success_data_exported_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Файл загружен на ваше устройство`
};

export const info_unsaved_changes = /** @type {(inputs: {}) => string} */ () => {
	return `У вас есть несохраненные изменения`
};

export const error_network_title = /** @type {(inputs: {}) => string} */ () => {
	return `Ошибка сети, проверьте подключение`
};

export const error_network_desc = /** @type {(inputs: {}) => string} */ () => {
	return `Проверьте подключение к интернету`
};

export const error_network_timeout = /** @type {(inputs: {}) => string} */ () => {
	return `Запрос отменен по таймауту`
};

export const error_unauthorized = /** @type {(inputs: {}) => string} */ () => {
	return `Необходима авторизация`
};

export const error_bad_request = /** @type {(inputs: {}) => string} */ () => {
	return `Неверные данные запроса`
};

export const error_forbidden = /** @type {(inputs: {}) => string} */ () => {
	return `Нет доступа к этому действию`
};

export const error_not_found = /** @type {(inputs: {}) => string} */ () => {
	return `Данные не найдены`
};

export const error_conflict = /** @type {(inputs: {}) => string} */ () => {
	return `Конфликт данных`
};

export const error_validation = /** @type {(inputs: {}) => string} */ () => {
	return `Данные не прошли валидацию`
};

export const error_rate_limit = /** @type {(inputs: {}) => string} */ () => {
	return `Слишком много запросов`
};

export const error_server = /** @type {(inputs: {}) => string} */ () => {
	return `Внутренняя ошибка сервера`
};

export const error_bad_gateway = /** @type {(inputs: {}) => string} */ () => {
	return `Шлюз не отвечает`
};

export const error_service_unavailable = /** @type {(inputs: {}) => string} */ () => {
	return `Сервис временно недоступен`
};

export const error_http = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	return `Ошибка HTTP ${i.status}`
};

export const error_save_settings = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось сохранить настройки`
};

export const error_save_profile = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось обновить профиль`
};

export const error_export_data = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось экспортировать данные`
};

export const error_delete_account = /** @type {(inputs: {}) => string} */ () => {
	return `Не удалось удалить аккаунт`
};

export const error_process_request = /** @type {(inputs: {}) => string} */ () => {
	return `Ошибка при обработке запроса`
};

export const error_ai_request = /** @type {(inputs: {}) => string} */ () => {
	return `Извините, произошла ошибка при обработке вашего запроса. Пожалуйста, попробуйте еще раз.`
};

export const error_require_auth = /** @type {(inputs: {}) => string} */ () => {
	return `requireAuth должен быть вызван внутри обработчика запроса`
};

export const error_require_guest = /** @type {(inputs: {}) => string} */ () => {
	return `requireGuest должен быть вызван внутри обработчика запроса`
};

export const error_task_not_found = /** @type {(inputs: {}) => string} */ () => {
	return `Задача не найдена`
};

export const error_try_later = /** @type {(inputs: {}) => string} */ () => {
	return `Попробуйте позже`
};

export const error_cannot_delete_task_with_subtasks = /** @type {(inputs: {}) => string} */ () => {
	return `Нельзя удалить задачу с подзадачами. Сначала удалите подзадачи.`
};

export const error_name_required = /** @type {(inputs: {}) => string} */ () => {
	return `Имя обязательно`
};

export const error_not_authorized = /** @type {(inputs: {}) => string} */ () => {
	return `Не авторизован`
};

export const error_validation_error = /** @type {(inputs: {}) => string} */ () => {
	return `Данные не прошли валидацию`
};

export const error_internal_server_error = /** @type {(inputs: {}) => string} */ () => {
	return `Произошла внутренняя ошибка сервера`
};

export const greeting = /** @type {(inputs: { timeOfDay: NonNullable<unknown> }) => string} */ (i) => {
	if (i.timeOfDay == "morning") return `Доброе утро`;
	if (i.timeOfDay == "afternoon") return `Добрый день`;
	if (i.timeOfDay == "evening") return `Добрый вечер`;
	if (i.timeOfDay == "night") return `Доброй ночи`;
	return "greeting";
};

export const tip = /** @type {(inputs: { timeOfDay: NonNullable<unknown> }) => string} */ (i) => {
	if (i.timeOfDay == "productivity") return `Ты не обязан быть продуктивным каждую минуту. Отдых — это тоже часть процесса 💚`;
	if (i.timeOfDay == "morning") return `Утро — отличное время для сложных задач. Твой мозг отдохнул и готов к вызовам!`;
	if (i.timeOfDay == "afternoon") return `После обеда энергия может падать. Это нормально — попробуй легкие задачи или сделай перерыв.`;
	if (i.timeOfDay == "evening") return `Вечер хорош для подведения итогов и планирования. Не перегружай себя!`;
	if (i.timeOfDay == "night") return `Поздний час... Если работаешь — будь добр к себе. Отдых тоже важен.`;
	return "tip";
};

export const status_text = /** @type {(inputs: { status: NonNullable<unknown> }) => string} */ (i) => {
	if (i.status == "todo") return `Запланировано`;
	if (i.status == "in_progress") return `В работе`;
	if (i.status == "in_research") return `Исследование`;
	if (i.status == "blocked") return `Заблокировано`;
	if (i.status == "done") return `Завершено`;
	if (i.status == "cancelled") return `Отменено`;
	if (i.status == "saved") return `Изменения сохранены`;
	if (i.status == "saving") return `Сохранение...`;
	if (i.status == "deleted") return `Удалено`;
	if (i.status == "copied") return `Скопировано в буфер обмена`;
	if (i.status == "completed") return ` - завершено!`;
	if (i.status == "account_deleted") return `Аккаунт удален`;
	return "status_text";
};

export const priority_text = /** @type {(inputs: { priority: NonNullable<unknown> }) => string} */ (i) => {
	if (i.priority == "low") return `Низкий`;
	if (i.priority == "medium") return `Средний`;
	if (i.priority == "high") return `Высокий`;
	if (i.priority == "critical") return `Критический`;
	return "priority_text";
};

export const task_type_text = /** @type {(inputs: { type: NonNullable<unknown> }) => string} */ (i) => {
	if (i.type == "FEATURE") return `Функция`;
	if (i.type == "BUG") return `Ошибка`;
	if (i.type == "REFACTOR") return `Рефакторинг`;
	if (i.type == "RESEARCH") return `Исследование`;
	if (i.type == "DOCUMENTATION") return `Документация`;
	if (i.type == "TESTING") return `Тестирование`;
	if (i.type == "DEPLOYMENT") return `Развертывание`;
	if (i.type == "MEETING") return `Встреча`;
	if (i.type == "OTHER") return `Другое`;
	return "task_type_text";
};

export const badge_text = /** @type {(inputs: { type: NonNullable<unknown> }) => string} */ (i) => {
	if (i.type == "active") return `Активен`;
	if (i.type == "inactive") return `Неактивен`;
	if (i.type == "warning") return `Предупреждение`;
	if (i.type == "error") return `Ошибка`;
	if (i.type == "success") return `Успех`;
	return "badge_text";
};