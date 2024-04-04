import React, { Suspense, lazy } from 'react';

const StudentForm = lazy(() => import("StudentApp1/StudentForm"));

function App() {
  return (
    <div>
      <h1>Student Application 3</h1>
      <Suspense fallback={<div>Loading Form...</div>}>
        <StudentForm />
      </Suspense>
    </div>
  );
}

export default App;
