'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import scheduleData from '@/data/schedule.json';

interface ClassData {
  time: string;
  name: string;
  type: string;
}

const classColors = {
  'gi': 'bg-red-600 text-white',
  'nogi': 'bg-cyan-400 text-black',
  'nogi-fundamentals': 'bg-cyan-400 text-black',
  'blue-belt': 'bg-blue-600 text-white',
  'white-belt': 'bg-gray-100 text-black',
  'kids': 'bg-red-600 text-white',
  'fundamentals': 'bg-gray-100 text-black',
  'ugs': 'bg-red-600 text-white'
};

const monthKeys = [
  'october2025',
  'november2025',
  'december2025',
  'january2026',
  'february2026',
  'march2026',
  'april2026'
];

export default function Calendar() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const currentMonthKey = monthKeys[currentMonthIndex];
  const monthData = scheduleData.months[currentMonthKey as keyof typeof scheduleData.months];
  
  const getClassesForDay = (dayOfWeek: string): ClassData[] => {
    return scheduleData.classes[dayOfWeek as keyof typeof scheduleData.classes] || [];
  };

  const getFirstDayOffset = () => {
    const firstDay = monthData.days[0];
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return dayOrder.indexOf(firstDay.dayOfWeek);
  };

  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthIndex < monthKeys.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const renderMonthView = () => {
    const offset = getFirstDayOffset();
    const days = monthData.days;
    const weeks: React.ReactNode[] = [];
    let currentWeek: React.ReactNode[] = [];

    // Add empty cells for offset
    for (let i = 0; i < offset; i++) {
      currentWeek.push(
        <div key={`empty-${i}`} className="border border-white/10 bg-black/20 min-h-[300px] md:min-h-[400px]"></div>
      );
    }

    // Add days
    days.forEach((day) => {
      const classes = getClassesForDay(day.dayOfWeek);
      currentWeek.push(
        <div key={day.date} className="border border-white/10 bg-black/40 min-h-[300px] md:min-h-[400px] p-1 md:p-2 flex flex-col">
          <div className="font-bebas text-base md:text-lg mb-1 md:mb-2 sticky top-0 bg-black/40 py-1">{day.date}</div>
          <div className="space-y-0.5 md:space-y-1 flex-1 overflow-y-auto">
            {classes.map((cls, idx) => (
              <div
                key={idx}
                className={`text-[10px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 ${classColors[cls.type as keyof typeof classColors] || 'bg-gray-600 text-white'}`}
              >
                <div className="font-bold leading-tight">{cls.time}</div>
                <div className="leading-tight">{cls.name}</div>
              </div>
            ))}
          </div>
        </div>
      );

      if (currentWeek.length === 7) {
        weeks.push(
          <div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-0">
            {currentWeek}
          </div>
        );
        currentWeek = [];
      }
    });

    // Add remaining week if not complete
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(
          <div key={`empty-end-${currentWeek.length}`} className="border border-white/10 bg-black/20 min-h-[300px] md:min-h-[400px]"></div>
        );
      }
      weeks.push(
        <div key={`week-${weeks.length}`} className="grid grid-cols-7 gap-0">
          {currentWeek}
        </div>
      );
    }

    return <div className="space-y-0">{weeks}</div>;
  };


  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-4 md:mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
          <motion.h2 
            className="font-bebas text-3xl md:text-4xl lg:text-5xl tracking-wider"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {monthData.name} {monthData.year}
          </motion.h2>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={goToPreviousMonth}
            disabled={currentMonthIndex === 0}
            className="font-bebas px-3 md:px-6 py-2 text-xs md:text-base bg-white text-black hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-wider flex-1 md:flex-none"
          >
            <span className="hidden md:inline">← PREVIOUS MONTH</span>
            <span className="md:hidden">← PREV</span>
          </button>
          <button
            onClick={goToNextMonth}
            disabled={currentMonthIndex === monthKeys.length - 1}
            className="font-bebas px-3 md:px-6 py-2 text-xs md:text-base bg-white text-black hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed tracking-wider flex-1 md:flex-none"
          >
            <span className="hidden md:inline">NEXT MONTH →</span>
            <span className="md:hidden">NEXT →</span>
          </button>
        </div>
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-0 mb-0">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => {
          const fullDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][index];
          return (
            <div key={day} className="font-bebas text-xs md:text-base lg:text-lg text-center py-2 md:py-3 bg-white/10 border border-white/20">
              <span className="md:hidden">{day.toUpperCase()}</span>
              <span className="hidden md:inline">{fullDay.toUpperCase()}</span>
            </div>
          );
        })}
      </div>

      {/* Calendar Grid */}
      <motion.div
        key={currentMonthKey}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {renderMonthView()}
      </motion.div>

      {/* Legend */}
      <div className="mt-6 md:mt-8 p-4 md:p-6 bg-black/40 border border-white/10">
        <h3 className="font-bebas text-xl md:text-2xl tracking-wider mb-3 md:mb-4">CLASS TYPES</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-red-600 flex-shrink-0"></div>
            <span className="font-montserrat text-xs md:text-sm">GI / Kids</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-cyan-400 flex-shrink-0"></div>
            <span className="font-montserrat text-xs md:text-sm">NO GI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 flex-shrink-0"></div>
            <span className="font-montserrat text-xs md:text-sm">Blue Belt</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 md:w-6 md:h-6 bg-gray-100 flex-shrink-0"></div>
            <span className="font-montserrat text-xs md:text-sm">White Belt / Fundamentals</span>
          </div>
        </div>
      </div>
    </div>
  );
}

