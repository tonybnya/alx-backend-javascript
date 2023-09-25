export default function getSanFranciscoDescription() {
  const s0 = 'As of';
  const s1 = 'it was the seventh-highest income county in the United States, with a per capita personal income of';
  const s2 = 'San Francisco proper had a GDP of';
  const s3 = 'and a GDP per capita of';

  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return `${s0} ${year}, ${s1} ${budget.income}. ${s0} ${year - 2}, ${s2} ${budget.gdp}, ${s3} ${budget.capita}.`;
}
