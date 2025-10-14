import React from 'react'

const SkillsSection = () => {
  return (
    <div className="skills flex flex-col items-center p-4 mt-10">
      <h1 className="text-4xl font-bold mb-4">Skills</h1>
      <div>
        <div className="rounded-lg shadow-lg">
          <img src="" alt="" />
          <div className="skill-name">HTML5</div>
          <div className="progress-bar w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className="w-45 bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            >
              45%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection