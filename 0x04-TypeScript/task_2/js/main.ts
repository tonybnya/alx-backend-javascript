interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

const createEmployee = (salary: number | string): Director | Teacher =>
  typeof salary === 'number' && salary < 500 ? new Teacher() : new Director();

const isDirector = (employee: Director | Teacher): employee is Director =>
  employee instanceof Director;

const executeWork = (employee: Director | Teacher): string => {
  let result = '';
  isDirector(employee)
    ? result = (employee as Director).workDirectorTasks()
    : result = (employee as Teacher).workTeacherTasks();

  return result;
}

type Subjects = 'Math' | 'History';

const teachClass = (todayClass: Subjects): string =>
  todayClass === 'Math' ? 'Teaching Math': 'Teaching History';

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
console.log(teachClass('Math'));
console.log(teachClass('History'));
