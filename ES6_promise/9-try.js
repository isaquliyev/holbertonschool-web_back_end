export default function (mathFunction) {
  const queue = [];
  try { queue.push(mathFunction()); } catch (e) { queue.push(e.message); } finally {
    queue.push('Guardrail was processed');
  } return queue;
}
