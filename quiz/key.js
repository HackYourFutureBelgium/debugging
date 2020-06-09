/** Key value pairs using quiz element IDs and Quiz Objects.
 * For example: quizzes['quiz-1'] = [Quiz Object]
 */
var quizzes = {};


window.onload = function () {
  // Create quiz instances for each quiz and add them to the quizzes map.
  // The key is the ID of the quiz element, same as what we pass to the Quiz object as the first argument.
  quizzes['quiz-1'] = new Quiz('quiz-1', [
    'a',
    // 'b',
    // ['b', 'c', 'd']
  ]);

  // quizzes['quiz-2'] = new Quiz('quiz-2', [
  //   'b',
  //   'squid'
  // ]);

  // quizzes['quiz-3'] = new Quiz('quiz-3', [
  //   '4',
  //   'b',
  //   'c'
  // ])
};
