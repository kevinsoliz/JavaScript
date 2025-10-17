function calculateGrade(marks) {
    let average = 0;
    let grade;

    for (let mark of marks)
        average += mark;

    average /= marks.length;

    if (average > 0 && average < 60)
        grade = "F";
    else if (average >= 60 && average <= 69)
        grade = "D";
    else if (average >= 70 && average <= 79)
        grade = "C";
    else if (average >= 80 && average <= 89)
        grade = "B";
    else
        grade = "A";

    return grade;
}

function calculate2(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A'
}

function calculateAverage(array) {
    let average = 0;

    for (let value of array)
        average += value;

    return average /= array.length;
}

const array = [80, 80, 70];
console.log(calculateGrade(array));
console.log(calculate2(array));