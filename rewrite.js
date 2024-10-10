const response = $response;
const body = $response.body;
let newBody = body.replace(/"answer":"[0-9]+","userAnswer":null,"answers":["[0-9]+"],"status":0,"script":null,"wrongScript":null,"ruleType":"ARITHMETIC"/g, '"answer":"1","userAnswer":null,"answers":["1"],"status":0,"script":null,"wrongScript":null,"ruleType":"ARITHMETIC"');
$response.body = newBody;
$done({ body: newBody });