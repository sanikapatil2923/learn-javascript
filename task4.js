let score = prompt("Enter your score:");

if (score >= 80 && score <= 100) {
    document.write("Grade: A");
} else if (score >= 70 && score <= 79) {
    document.write("Grade: B");
} else if (score >= 60 && score <= 69) {
    document.write("Grade: C");
} else if (score >= 50 && score <= 59) {
    document.write("Grade: D");
} else if (score >= 0 && score <= 49) {
    document.write("Grade: F");
} else {
    document.write("Invalid score");
}