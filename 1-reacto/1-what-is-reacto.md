REACTO is our (un)patented technique for solving technical interview prompts.

**(R)**epeat the prompt. Ask questions to make sure you and your interviewer are on the same page.

**(E)**xamples. Provide some representative examples and choose one in particular that you will drill into for the upcoming steps. Also consider jotting down some edge cases.

**(A)**pproach. Describe your conceptual approach and discuss it with your interviewer. Really plan it out, and ideally diagram it. Before continuing on to implementing it, confirm with your interviewer that they want you to start coding it out.

**(C)**ode. Implement the approach you outlined—carefully, if you're at a whiteboard, because it is both easier to make mistakes and more difficult to fix them later.

**(T)**est your implementation. Try to wipe your mental slate clean and then carefully and critically walk through your code, using small but relevant examples.

**(O)**ptimize. Describe the current time and space complexity (big O) of your solution. Consider any places for improvement.

Write a function that returns the nth fibonacci number.

Q: What's the input?
A: It takes an integer. Signature:

  fibonacci(n: Int) -> Int

fib_n = fib_n-1 + fib_n-2
1, 1, 2, 3, 5, etc...

const fibonacci = n => fibonacci[n] ||
  (fibonacci[n] = (n === 0 || n === 1) ? 1 :
    fibonacci(n - 1) + fibonacci(n - 2))

            fib(10)
      fib(9)       fib(8)
  fib(8) fib(7) fib(7) fib(6)

O(2^n)