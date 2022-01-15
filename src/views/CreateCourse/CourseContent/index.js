import React from 'react';

const Chapters = ({ chapters }) => (
    <ul>
        {chapters.length > 0
            ? chapters.map(({ id, chapterName }) => (
                  <li key={id}>
                      <h5>{chapterName}</h5>
                  </li>
              ))
            : null}
    </ul>
);

const Modules = ({ modules, setModuleInfo }) => (
    <ul>
        {modules.length > 0
            ? modules.map(({ _id, moduleName, chapters }) => (
                  <li key={_id}>
                      <h4
                          onClick={() =>
                              setModuleInfo({ id: _id, name: moduleName })
                          }
                      >
                          {moduleName}
                      </h4>
                      <Chapters chapters={chapters} />
                  </li>
              ))
            : null}
    </ul>
);

const CourseContent = ({ courses, setCourseInfo, setModuleInfo }) => (
    <section>
        <ul>
            {courses.length > 0
                ? courses.map(({ id, courseName, courseModules }) => (
                      <li key={id}>
                          <h3
                              onClick={() =>
                                  setCourseInfo({
                                      id,
                                      courseName,
                                  })
                              }
                          >
                              {courseName}
                          </h3>
                          <Modules
                              modules={courseModules}
                              setModuleInfo={setModuleInfo}
                          />
                      </li>
                  ))
                : null}
        </ul>
    </section>
);

export default CourseContent;
