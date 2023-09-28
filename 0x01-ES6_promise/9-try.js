export default function guardial(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.message);
  } finally {
    queue.push('Guardrail was processed');
  }

  return queue;
}
