export const DAY_NAMES = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
] as const;

const MONTH_DISPLAY_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
] as const;

export const MIN_CALENDAR_YEAR = 2026;
export const MIN_CALENDAR_MONTH = 2; // March

export interface CalendarDay {
  date: number;
  dayOfWeek: (typeof DAY_NAMES)[number];
}

export interface MonthData {
  name: string;
  year: number;
  days: CalendarDay[];
}

export interface CalendarMonth {
  year: number;
  month: number;
}

export function buildMonthData(year: number, month: number): MonthData {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: CalendarDay[] = [];

  for (let date = 1; date <= daysInMonth; date++) {
    days.push({
      date,
      dayOfWeek: DAY_NAMES[new Date(year, month, date).getDay()],
    });
  }

  return {
    name: MONTH_DISPLAY_NAMES[month],
    year,
    days,
  };
}

export function getFirstDayOffset(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

export function getCurrentCalendarMonth(): CalendarMonth {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() };
}

export function getMaxCalendarMonth(monthsAhead = 6): CalendarMonth {
  const now = new Date();
  const max = new Date(now.getFullYear(), now.getMonth() + monthsAhead, 1);
  return { year: max.getFullYear(), month: max.getMonth() };
}

function monthValue({ year, month }: CalendarMonth) {
  return year * 12 + month;
}

export function canGoToPreviousMonth({ year, month }: CalendarMonth) {
  return monthValue({ year, month }) > monthValue({ year: MIN_CALENDAR_YEAR, month: MIN_CALENDAR_MONTH });
}

export function canGoToNextMonth(view: CalendarMonth, monthsAhead = 6) {
  return monthValue(view) < monthValue(getMaxCalendarMonth(monthsAhead));
}

export function getPreviousMonth({ year, month }: CalendarMonth): CalendarMonth {
  if (month === 0) return { year: year - 1, month: 11 };
  return { year, month: month - 1 };
}

export function getNextMonth({ year, month }: CalendarMonth): CalendarMonth {
  if (month === 11) return { year: year + 1, month: 0 };
  return { year, month: month + 1 };
}

export function getMonthKey({ year, month }: CalendarMonth) {
  return `${year}-${month}`;
}
