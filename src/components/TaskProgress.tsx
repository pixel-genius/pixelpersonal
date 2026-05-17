// components/TaskProgress.tsx
import React from "react";

interface TaskProgressProps {
  title: string;       // عنوان پروژه یا کار
  phase: string;       // فاز فعلی (مثلاً UI/UX، اجرا)
  progress: number;    // درصد پیشرفت (0 تا 100)
  color?: string;      // رنگ پروگرس (اختیاری)
}

const TaskProgress: React.FC<TaskProgressProps> = ({
  title,
  phase,
  progress,
  color = "bg-blue-500",
}) => {
  return (
    <div className="  w-full max-w-md">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 pb-2">{phase}</p>
      
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-right text-sm  text-gray-600 pt-2">{progress}% Complited</p>
    </div>
  );
};

export default TaskProgress;
